---
layout: post
category : aws
tagline: "Summertime is Pandatime."
tags : [bamboo,opsworks,aws,deploy,node]
---

The problem I was trying to solve was simple.  I have a Bamboo server that does stuff.  When it is finished doing stuff I want it to be able to make some AWS OpsWorks stack(s) deploy the app(s) that was just built by Bamboo.

Turns out that the only Bamboo plugin for AWS costs a lot and doesn't support OpsWorks so I thought a simple node script would do the job.  Half an hour later I had one, and so that's now available on github (**[SimonHooker/deploy-to-opsworks](https://github.com/SimonHooker/deploy-to-opsworks "SimonHooker/deploy-to-opsworks")**) so yay for that.  As to how to use it, there's some more information on the readme of the repository but for now here's the bit relevant to Bamboo (shamelessly copy and pasted from the readme)

## Usage

You will require the following from AWS prior to starting

- AWS IAM Access Key
- AWS IAM Secret Key
- The name(s) of the stack(s) that you'd like to deploy to
- The name(s) of the app(s) that you'd like to deploy

Bamboo will need the following tasks in its own job seperate from any other repo-based stuff

1. *Script* git clone https://github.com/SimonHooker/deploy-to-opsworks .
2. *npm* install
3. *Node.js* deployToOpsworks.js awsID=*awsID* secret=*awsSecret* stacks=*awsStacks* apps=*awsApps*
	- **awsID** = Your IAM Access Key
	- **awsSecret** = Your IAM Secret Key
	- **awsStacks** = name(s) of the app(s) that you'd like to deploy as a comma-seperated string
	- **awsApps** = name(s) of the app(s) that you'd like to deploy as a comma-seperated string
