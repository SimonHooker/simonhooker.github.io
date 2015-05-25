---
layout: post
category : lucee
tags : [lucee, slack]
---

Have you ever wondered what the point of that Event Gateway part of the Lucee admin panel is?  Well it turns out that it plays quite nicely with everyones favourite (for now) chat client, Slack.  In a difference to other CFML engines, in Lucee they can be written in CFML instead of Java!

The source code from this post is available [here](https://github.com/SimonHooker/hobobot/tree/lucee).

## What is an event gateway?

At its simplest an event gateway is a process that runs constantly in the background.  This takes the form of a CFC that has been placed in the right place which contains the right methods and has been set up correctly.  The finer details of all of this are covered below.

An event gateway comprises of two elements.  Firstly a **driver** which is used by the Lucee admin panel to allow users to configure gateways of a specific type.  Secondly the **gateway** which contains the actual application logic.

## What can I do with an event gateway?


## Create the driver CFC

- Name
- Description
- What CFC contains the business logic
- Custom parameters user needs to set up

## Create the gateway CFC

- Controlling state
- Doing stuff

## Install it

- Driver goes to xxx
- Listener goes wherever
- Starting up

## Talk to it

- Slackbot talk to example

## Further uses.