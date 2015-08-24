---
layout: post
category : lucee-aws
tagline: "thank you @lmzen for the pointer"
tags : [lucee, java, aws, lucee-aws]
---

So last time I faced Route53 I wasn't particularly blown away.  Luckily someone who can see something I managed to totally miss, [@lmzen](https://twitter.com/lmzen), left me a lovely comment pointing me in the right directions for a couple of my issues.

By replacing my use of `ListHostedZones` with the slightly more specific `ListHostedZonesByNameRequest` the route53.cfc is now able to return the desired hosted zone (or a negative response) far more simply.  Not massively important unless you have a lot of hosted zones but I feel better about this method.

But the real game-changer is a lovely method called `listResourceRecordSets` which, in my desperation, I managed to totally overlook.  It, unsurprisingly given the name, returns a list of resource record sets.  Wow, sounds like precisely what I was trying to find and failing to last time around!

Long story short after a bit of shuffling around I now have a few more functions to add to my repertoire, so here's some code samples.  It's probably worth noting that I renamed `deleteAliasSubdomain` to be `deleteSubdomain` as it is no longer necessarily restricted to alias records.

    // Set up the route53 object
    r53 = new aws.route53(
        account = aws_accountid,
        secret = aws_secretkey
    );    

    // Delete a subdomain
    service.deleteSubdomain(
        subdomain = 'lucee-aws.lucee.org'
    );

    // Check if I have access to a hosted zone for a given domain

    service.isThereAHostedZoneForThisDomain(
        domain = 'lucee.org'
    ); // boolean

    // Check if I have access to a resource record for a given subdomain

    service.isThereAResourceRecordForThisSubdomain(
        subdomain = 'lucee-aws.lucee.org'
    ); // boolean

So once again, thank you [@lmzen](https://twitter.com/lmzen) for putting me on the right track.  For anyone interested, here is [the pull request](https://github.com/mso-net/lucee-aws/pull/21/) that has these changes in.