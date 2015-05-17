---
layout: post
category : lucee
tagline: "Java API docs scare me!"
tags : [lucee, java, aws]
---

So you've decided, like me, that you want to do all the awesome things with the AWS SDK.  Or you, also like me, tried to read the Signature v4 documentation and died a little inside.  Ok in my case mostly that.  Well good news, there's a Java SDK that makes it all so easy.  Well.  Easier.

## Getting started - get the dependencies

Before even thinking about calling the SDK methods you're going to need to have it somewhere.  Download links can can be found here : [AWS SDK for Java](http://aws.amazon.com/sdk-for-java/).  All you really need is the zip file ([direct link](http://sdk-for-java.amazonwebservices.com/latest/aws-java-sdk.zip)) but they kindly, as with many of their thingys, make all the source code available on [Github](https://github.com/aws/aws-sdk-java).

If you open up that zip file you'll find a folder called **aws-java-sdk-x.x.x**, and if you dig further down a folder **lib**.  Within there are the jar files that you'll need.  At time of writing the precise file you're looking for here really is **aws-java-sdk-1.9.34/lib/aws-java-sdk-1.9.34.jar**.  Take this file and put it somewhere safe.  

I decided to just put all the jar files here into **C:\Users\{my-user}\.CommandBox\lib** (because I'm using command box and am lazy).  I also put in all the jar files from **aws-java-sdk-1.9.34/third-party/*.jar**.  This may bite me in the arse later, but at least I can get on with playing with my poorly secured AIM user.

## Making a poorly secuerd AIM user

Yep you're going to need an AIM user.  Depending on whether you're being *really* lazy (and want to piss off the poor person delaing with security for your company) then you can just make a grant all user.  

This is not really advisable.  So just go and get an AIM user made up with access to whatever it is you want to do - for this example I'll be creating some stuff in S3 so that's the access needed.  Make a note of the AWS access key ID and the AWS secret access key - you will be needing both of these.

## Reading the documentation

Have you ever looked at [some Java API documents](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/)?  As someone coming from CFML they overwhelm me from time to time.  I've been digging through the AWS SDK though because I'm bored of creating the same few buckets repeatedly.  That can become Bamboos job dammit!

So frustrations aside, there are some key pointers to take a look at.  In the right hand frame of AWS docs (iframes!! Real life in the wild iframes!) you'll see various sections.  The first of these is **Amazon S3**.  Considering that's precisely what this is about, I just clicked through on the [com.amazonaws.services.s3](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/package-summary.html) document.  And that's all there is to it, read the docs, done.

Ok there's a little more to it than that.  The first section of this document is **Inteface Summary**.  This kind of thing is useful for more involved stuff or if you're implenenting interfaces, but I know nothing about Java so I'll pretend that section doesn't exist.  Move on down to **Class Summary**, this is the interesting stuff.  Specifically you can see a link to [Amazon S3 Client](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/AmazonS3Client.html).  The description tells me that this is the client used for accessing the S3 web service - sounds precisely like what I'm trying to do. 

Clicking through that brings you to documentation for [com.amazonaws.services.s3.AmazonS3Client](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/AmazonS3Client.html).  Well actually what it says is **Class AmazonS3Client** but if you look to just below that header you'll see the inheritence tree thingy.  At the bottom of that tree you'll see it says com.amazonaws.services.s3.AmazonS3Client.  This is the string that you'll need for **CreateObject** later.



[com.amazonaws.auth.BasicAWSCredentials](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/BasicAWSCredentials.html)

## Additional reading

So it turns out that Ben Nadel has already written on this subject.   His article "[Using The Amazon Web Services (AWS) SDK To Create Pre-Signed S3 URLs With Path-Style Access](http://www.bennadel.com/blog/2791-using-the-amazon-web-services-aws-sdk-to-create-pre-signed-s3-urls-with-path-style-access.htm)" covers pretty much the same subject but with a different end product.  But mine has a shorter title and a silly tagline.
