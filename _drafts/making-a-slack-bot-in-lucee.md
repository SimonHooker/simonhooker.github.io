---
layout: post
category : lucee
tags : [lucee, slack]
---

My company, like many others now, is using Slack quite heavily.  I thought it might be nice to have a bot to do a few tasks.  The sensible thing to do here would be to go and pick up [Hubot](https://hubot.github.com/) and customise that right?  Well, maybe down the line.

For now I feel like learning something new.  I could of course make my own NodeJS bot.  In fact I did in the form of my first  [Hobobot](https://github.com/SimonHooker/hobobot) (named after my little egg mascot).  That bot doesn't really do much, it's more of a proof of concept.  But I'm bored of reading about NodeJS.  Java time!

So how about I try and implement the [Real Time Messaging API](https://api.slack.com/rtm) in [Lucee](http://lucee.org/)?

## Sockets in Lucee

A quick search for "socket" in the [Lucee docs](http://docs.lucee.org/) currently returns nothing.  Oh well I'd better give up now.  I suppose looking in the source code can't hurut though?  Oh look, a file called [SocketGateway.java](https://bitbucket.org/lucee/lucee/src/5b42d414b0cdca8a48f75ba5e869686aaefd47e5/lucee-java/lucee-core/src/lucee/runtime/gateway/SocketGateway.java?at=master) - sounds promising!




## Connecting to Slack



## A simple help method

