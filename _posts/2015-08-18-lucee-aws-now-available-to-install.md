---
layout: post
category : lucee-aws
tags : [lucee, java, aws, lucee-aws]
---

# mso-net/lucee-aws now online

Today I finally got around to uploading the first of the CFCs that I have been working on to make it simpler to interact with Amazon Web Services from within Lucee.  Probably Adobe ColdFusion also, but I make no promises at that.  The repository can be found on GitHub, [mso-net/lucee-aws](https://github.com/mso-net/lucee-aws).

The purpose of this project is simple.  I want to be able to do stuff with my AWS resources without having to spend ages digging through the API documents or trying to figure out Signature V4.  This is mostly an exercise in some really long-winded laziness.

At present not much is really supported.  There are some objects for S3, OpsWorks, and DynamoDB.  Coming soon I'll put together something for Route53 also as I have some logic for that waiting to be moved into lucee-aws.

## How do I use this?

The easiest way to install this at present is to use CommandBox.  To install this way requires CommandBox 2.1+, on which you simply type `box install mso-net/lucee-aws --production`.

I am not particularly happy with how I have got the AWS Java SDK handled at present in that you will need to add the path to them into your Application.cfc.  Adding the following to Application.cfc takes care of that.

```
    this.javaSettings = {
        loadPaths: [
            '/aws/aws-java-sdk/'
        ]
    };
```

From there it's just a matter of invoking the various objects, here's some examples that interact with Amazon S3.

```
    s3 = new aws.s3( 
      account = 'account_id',
      secret = 'secret',
      bucket = 'bucket_name'
    );
    
    s3.getObject( 'path/to/something.ext' );
    s3.putObject( 'path/to/something.ext' , 'data:image/png;base64,data_base64_encoded_here' );
    s3.deleteObject( 'path/to/something.ext' );
```

Yep I'm still being lazy, most of the rest of that was lifted straight out of what I already wrote for the README.md, surprise!

## How can I help lucee-aws

If there are features, services, or commands that you'd like to see integrated then I would encourage you all to raise [new tickets on the mso-net/lucee-aws repository](https://github.com/mso-net/lucee-aws/issues/new).

Of course if you'd like to get your hands dirty then pull requests are also welcomed.  I just ask that any new logic is accompanied by unit tests.

## What's going to be implemented next?

High on my list is improving the S3 integration, adding unit tests to the OpsWorks integration, and adding in a Route53 integration.  In the near future it might be nice to look into putting together a custom resource provider for Lucee to replace the existing S3ResourceProvider - but that's another story really.
