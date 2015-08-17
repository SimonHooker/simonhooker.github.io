---
layout: post
category : lucee
tags : [lucee, java, aws]
---

So you've decided, like me, that you want to do all the awesome things with the AWS SDK.  Or you, also like me, tried to read the Signature v4 documentation and died a little inside.  Ok in my case mostly that.  Well good news, there's a Java SDK that makes it all so easy.  Well.  Easier.

## Getting started - get the dependencies

Before even thinking about calling the SDK methods you're going to need to have it somewhere.  Download links can can be found here : [AWS SDK for Java](http://aws.amazon.com/sdk-for-java/).  All you really need is the zip file ([direct link](http://sdk-for-java.amazonwebservices.com/latest/aws-java-sdk.zip)) but they kindly, as with many of their thingys, make all the source code available on [Github](https://github.com/aws/aws-sdk-java).

If you open up that zip file you'll find a folder called **aws-java-sdk-x.x.x**, and if you dig further down a folder **lib**.  Within there are the jar files that you'll need.  At time of writing the precise file you're looking for here really is **aws-java-sdk-1.9.34/lib/aws-java-sdk-1.9.34.jar**.  Take this file and put it somewhere safe.  

I decided to just put all the jar files here into **C:\Users\{my-user}\.CommandBox\lib** (because I'm using command box and am lazy).  I also put in all the jar files from **aws-java-sdk-1.9.34/third-party/*.jar**.  This may bite me in the arse later, but at least I can get on with playing with my poorly secured IAM user.

## Making a poorly secured IAM user

Yep you're going to need an IAM user.  Depending on whether you're being *really* lazy (and want to piss off the poor person dealing with security for your company) then you can just make a grant all user.  

This is not really advisable.  So just go and get an IAM user made up with access to whatever it is you want to do - for this example I'll be creating some stuff in S3 so that's the access needed.  Make a note of the AWS access key ID and the AWS secret access key - you will be needing both of these.

## Reading the documentation

I'll keep this nice and short here.  If you need a hand on deciphering or finding the documentation then have a read of my earlier post, [Coldfusion Users Guide To Reading Java Api Docs](http://www.strayegg.com/2015/05/17/coldfusion-users-guide-to-reading-java-api-docs/)

## Example code

So without further ado here's the example code (ok totally taken from my earlier post) for accessing an S3 object.

	credentials = CreateObject(
		'java',
		'com.amazonaws.auth.BasicAWSCredentials'
	).init(
		'YourAWSAccessKeyID',
		'YourAWSSecretAccessKey'
	);

	s3 = CreateObject(
		'java',
		'com.amazonaws.services.s3.AmazonS3Client'
	).init(
		credentials
	);

	buckets = s3.listBuckets();

	buckets_iterator = buckets.listIterator();

	while ( buckets_iterator.hasNext() ) {

		bucket = buckets_iterator.next();
		writedump( bucket.getName() );

	}


## Additional reading

So it turns out that Ben Nadel has already written on this subject.   His article "[Using The Amazon Web Services (AWS) SDK To Create Pre-Signed S3 URLs With Path-Style Access](http://www.bennadel.com/blog/2791-using-the-amazon-web-services-aws-sdk-to-create-pre-signed-s3-urls-with-path-style-access.htm)" covers pretty much the same subject but with a different end product.  But mine comes with the hobo egg as a mascot, woo!
