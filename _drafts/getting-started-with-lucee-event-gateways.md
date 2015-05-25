---
layout: post
category : lucee
tags : [lucee]
---

Have you ever wondered what the point of that Event Gateway part of the Lucee admin panel is?  In a difference to other CFML engines, in Lucee they can be written in CFML instead of Java.  This makes the job of actually finding out far simpler.

The source code from this post in my GitHub repository, [SimonHooker/lucee-event-gateway-skeleton](https://github.com/SimonHooker/lucee-event-gateway-skeleton).

## What is an event gateway?

At its simplest an event gateway is a process that runs constantly in the background.  This takes the form of a CFC that has been placed in the right place which contains the right methods and has been set up correctly.  The finer details of all of this are covered below.

An event gateway comprises of two elements.  Firstly a **driver** which is used by the Lucee admin panel to allow users to configure gateways of a specific type.  Secondly the **gateway** which contains the actual application logic.



## Create the driver CFC (driver.cfc)

- Name
- Description
- What CFC contains the business logic
- Custom parameters user needs to set up

## Create the gateway CFC (gateway.cfc)

- Controlling state
- Doing stuff

1. Rename gateway.cfc to be whatever you like.  Move it if you like.  Just make sure it's accessible from your web root.
2. Update driver.cfc to have the correct path by editing the value returned by getCFCPath().

## Install it

1. Copy driver.cfc to {lucee-web}/context/admin/gdriver/yourDriverName.cfc
2. Open up your Lucee web context
3. Go to Settings -> Logging
4. Add in a log file named "event-gateway-skeleton" (or whatever you renamed that too in the _log() function)
5. Go to Services -> Event Gateways
6. Set up your event gateway
7. Start it up


## What can I do with an event gateway?

