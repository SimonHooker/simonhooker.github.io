---
layout: post
category : lucee-aws
tags : [lucee, java, aws, lucee-aws]
---

# mso-net/lucee-aws now has a basic Route53 object

As part of copying out the logic I already have, lucee-aws now has the beginnings of a Route53 object.  At present this object only has 2 public methods though which handle the addition and removal of subdomains from a pre-existing hosted zone as long as the subdomains alias something else.

As far as logic goes, that's pretty specific.  It'll get better in time but this is at least a good starting point.  A reason for some of the restrictions is simply that the Route53 SDK seems to be missing a few key features.  Like the ability to easily get a hosted zone by domain name.  Or a Resource record by domain name.  In fact it's a bit painful to do most things.

The Route53 client and I are not on friendly terms tonight.

## How to use it

So all that aside, some code examples.

    // Set up the route53 object
    r53 = new aws.route53(
        account = aws_accountid,
        secret = aws_secretkey
    );

    // Create a subdomain
    addAliasSubdomain(
        subdomain = 'lucee-aws.lucee.org',
        targetELBHostedZoneID = elb_hostedzoneid,
        targetELB = elb_subdomain
    );

    // Delete a domain
    service.deleteAliasSubdomain(
        subdomain = 'lucee-aws.lucee.org',
        targetELBHostedZoneID = elb_hostedzoneid,
        targetELB = elb_subdomain
    );

In these examples you'll notice that I use the variables **elb_hostedzoneid** and **elb_subdomain**.  This is the part I don't really like.  I'd rather it was a bit clearer where you get these values from.

I've so far just got them by looking at Route53 for domains I've already set up.  In the image below I've shown where you can see the values which can be supplied for **elb_hostedzoneid** and **elb_subdomain**.

{% include image.html url="/assets/2015-08-20-lucee-aws-basic-route53-cfc.png" description="Route53 admin panel" %}

Oh and don't ask me why you need to supply them to delete, it'd be really nice if you didn't need to go doing that but there you go, for a first draft it'll do but I'm really not happy with it.

## What's next?

Well, the obvious answer is that more methods need to be added to this.  Things like being able to add in new hosted zones, list hosted zones.  Ideally some faster methods to check that a hosted zone is defined, or lookup a hosted zone by domain name.

If I'm really lucky maybe I'll find out how to list the dns records too!