---
layout: post
category : lucee
tagline: ""
tags : [lucee, slack, hobobot]
---

Have you heard of Slack?  IRC with bells on right!  Well we've been using it at Lucee as well as at mso.  One thing and another I'd quite like to put together a bot for it - preferably one I don't have to right like those back in the old mIRC days!

All the cool kids are picking up their node SDKs and away they go.  I gave it a try.  It was ok.  Not much of a challenge really.  Surely Lucee can do this?

# Slack Real Time Messaging API

For a bot what we really want to be doing is have a process that responds to input in Slack.  to have access to that input it needs to be connected.  Typically this is done within node using sockets and the [Real Time Messaging API](https://api.slack.com/rtm).  

# WebSocket consumption in Lucee

So how do we use a web socket easily in Lucee?  Turns out, as with many things, Ben Nadel has already been there with his 2011 article [Using Socket Gateways to Communicate between ColdFusion and Node.js](http://www.bennadel.com/blog/2173-using-socket-gateways-to-communicate-between-coldfusion-and-node-js.htm). That seems to be the inverse of what I'm aiming for here though in that the Coldfusion should be in the place of where Node is in most examples.

How about `<cfwebsocket>`?  Well, bad news - not implemented in Lucee.  Well, Java (and StackOverflow) to the rescue in the form of [javax.websocket client simple example](http://stackoverflow.com/questions/26452903/javax-websocket-client-simple-example)!

# javax.websocket

So Java has some stuff for websockets in the form of [javax.websocket](https://docs.oracle.com/javaee/7/api/javax/websocket/package-summary.html) (also mentioned in the StackOverflow post above) however reading through that just makes my simple CF head hurt!  

Some additional googling though turned up [Project Tyrus](https://tyrus.java.net/) which calls itself the reference implementation.  While this looks like it would help, there is still nothing that I can just call CreateObject on.

# simple-slack-api

Finally I do what probably would have made a good first step and checked [Slacks Community-built Integrations](https://api.slack.com/community) and found [Ullink/simple-slack-api](https://github.com/Ullink/simple-slack-api).  I think Brad Wood may have mentioned this too in Slack somewhere, but I can't remember.  It's the kind of thing he'd do.

# Web hooks

So what can I do within Lucee?  How about making some logic that utilises the outgoing / incoming webhooks of Slack.  This is limited to specific public channels or specific trigger words though.  Potentially this can work though, so how about a nice simple bot that responds?

Well that could work, but what if I don't want to have to limit to specific channels?  Well it turns out there's another way

# Amazon SQS

AWS to the rescue!  Looks like I get an excuse to add some extra functionality to [lucee-aws](https://github.com/SimonHooker/lucee-aws).  The SQS integration means I can add all the messages into a queue for handling later on.  I can then just use Slack REST APIs to respond back to the server!

Setting this up is pretty simple, I just need to tell Slack which queue (with credentials) to send the messages to.  I created one called `strayegg-slack-logger` with a user called `hobobot-sqs`.  A quick test later and sure, there are my messages!

From here it's just a simple matter of setting up a Lucee script that can poll the queue and handle the messages accordingly.  But that's a subject for another day.

# The bottom line

To summarise sadly it's simply that, at time of writing, Lucee just doesn't seem to be the right tool where web sockets are concerned.  What was simple in Node.js due to Sockets.io or similar is far more complex within Lucee.

There are however alternatives that can achieve a good result - but I guess that's the nice thing about Slack.  Just a matter of picking one of the ones that plays nicely (or to just learn how to Node)