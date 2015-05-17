---
layout: post
category : java
tagline: "Java API docs scare me!"
tags : [java, aws]
---

Have you ever decided to jump down into Java to do something that Lucee (or ACF) just can't quite do?  In doing so no doubt you've seen some Java API documents and then got at least a little confused.  Here's a few little gotchas that have caught me out over the years, hopefully after reading these you'll be able to make some use of the abundance of Java documentation out there.

For this example I'll use the AWS documents mostly because that's what I was reading when I tripped over this next one.  Here's a link : [AWS SDK for Java API Reference](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/).  More specifically the documents for [com.amazonaws.services.s3](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/package-summary.html).

## Interfaces

So the first thing I did here was to try and use CreateObject to make an AmazonS3 object.  That's probably what I want right?  So I clicked through on the option "AmazonS3" under "Interfaces".  If I was paying attention and knew what I was doing I may have not done that.

You can search all you like in the AmazonS3 interface page but you won't find the constructor.  This might not seem important, but without a constructor you'll have a hard time creating the object which in turn you'll look to use.  Well there's a nice little java document titled [What Is an Interface?](https://docs.oracle.com/javase/tutorial/java/concepts/interface.html) which explains this better than I can, specifcally this line. *In its most common form, an interface is a group of related methods with empty bodies*.  Empty... Great.

Well an empty shell is no use to us.  In general you can ignore them if all you are trying to do is use someone elses library.  For my example in the [AmazonS3 interface documentation](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/AmazonS3.html) there is a section titled **All Known Implementing Classes** - this is what is useful to us.  Additionally this list is back in that original [com.amazonaws.services.s3 documentation](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/package-summary.html)  under the heading **Class Summary**.


## Creating an instance a Java object

Ok so you've got the correct Class ([AmazonS3Client documentation page](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/AmazonS3Client.html)) and would like to create an instance of that.  You've got the Java library and installed it somewhere (I'll not cover that in this post, but can cover it in another if needed) - great.  CreateObject is your friend here, but not before you've found the constructor.

In CFML you will have seen constructors when setting up components.  That's what the init function is.  Well in those Java documents you'll see the nice prominent section near the top titled **Constructor Summary** containing (at time of writing) 7 different constructors.  7.  Yep.  So which one are you meant to use?

## Method overloading

Now in Java there is a bit of a difference to CFML when it comes to method definitions.  In CFML you define a single function and can specify optional arguments.  In Java though the methods arguments *and their types* are as important as the method name when it comes to deciding what method to run.

This is why in many examples of others using Java objects directly in CFMl you will see JavaCast being used.  This is because whilst you may wish to supply a numeric value to an object, that Java object may expect a String or possibly a specific Numeric data type which doesn't match the type that CFML maps your numeric value to.

Be very careful what arguments you pass to java functions, as passing the wrong data types will result in one of two things.  You will either call the wrong function, or be told simply that the method with the specified arguments is undefined.  Either of these is an indication that you need to check your arguments (or simply that you've typed the wrong function name).

## Ok so really creating that object

So I want to create an instance of the AmazonS3Client class which is logged in to my bucket.  For this I'll need the constructor **AmazonS3Client(AWSCredentials awsCredentials)**.  So I just need to pass in an AWSCredentials object.  Oh wait I haven't got one of those...

So click on the AWSCredentials type and you'll be taken through to the [AWSCredentials Interface documentation](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/AWSCredentials.html).  You've seen one of these already, so surely you know what I'm going to say next.  Checking the list of implementing classes I pick out a suitable candidate ([BasicAWSCredentials](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/BasicAWSCredentials.html)) and click through to that page.  There is only 1 constructor here - **BasicAWSCredentials(java.lang.String accessKey, java.lang.String secretKey)**.  Great, strings, I know how to do them in CFML.  Lets get rolling!

	// Create the BasicAWSCredentials object (insert  your own credentials here)
	credentials = CreateObject(
		'java',
		'com.amazonaws.auth.BasicAWSCredentials'
	).init(
		'YourAWSAccessKeyID',
		'YourAWSSecretAccessKey'
	);

	// Now credentials happens to be an object that matches the interface AWSCredentials
	// We can use that to make the S3 class we dream of
	s3 = CreateObject(
		'java',
		'com.amazonaws.services.s3.AmazonS3Client'
	).init(
		credentials
	);

## Lets do something with it

Ok so you've now got a class.  What can you do with it?  Well hop back to the [AmazonS3Client](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/AmazonS3Client.html) documents and you'll be able to find some answers.  Have a look through the **Method Summary* and you'll find lots of nice things.  Because this is an example I'll just pick an easy one though and leave all the more involved ones for someone else to post examples for though, sounds fair right?

	// Lets get some buckets
	buckets = s3.listBuckets();

So we now have a result for buckets.  This is a **java.lang.list** of **com.amazonaws.services.s3.model.Bucket** objects.  What can you do with this?  Well you can just give up now and go home right?   Well finding the Bucket documentation is easy, you just click on it.  What do you do with a **java.lang.list** though?   Well, load up google, see what comes up.  You'll find the documents for [java.lang.list](https://docs.oracle.com/javase/7/docs/api/java/util/List.html) look a bit less scary now.  It's a fair bet that you'll want to iterate over the list so why don't we get an interator and dump now the name of every bucket?

	// Ok so this is now a java.lang.list of com.amazonaws.services.s3.model.Bucket objects
	// Get the iterator
	buckets_iterator = buckets.listIterator();

	/// The java.util.ListIterator interface has a nice method that returns boolean, hasNext()
	// Sounds nice right?
	while ( buckets_iterator.hasNext() ) {

		// And oh look, there's a method called next() that returns the next element
		bucket = buckets_iterator.next();

		// Now heading back to the com.amazonaws.services.s3.model.Bucket docs
		// Lets dump out the name
		writedump( bucket.getName() );
	}

## That's all folks

So that's my rough guide for how to come to terms with Java documents.  Now it hasn't really taught you anything that useful with respect to using the AWS S3 SDK but maybe it wil help you find that out.  In case you want the brief summary of this, here's a few important points.

- Invoke Classes, not Interfaces
- Pay attention to the arguments
- You're going to be clicking through a lot of interface definitions