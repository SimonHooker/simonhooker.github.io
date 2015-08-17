---
layout: post
category : lucee
tags : [lucee, jira]
---

A couple of days ago following discussion between Adam Cameron and myself on Twitter a new issue type was added to the Lucee Jira board, "Incompatibility".  Since then we have discussed the gray line where a bug becomes an incompatibility and vica versa and so I thought I'd just write up my stance on the various issue types.

For the record, everything in this blog post is how I interprete the various issue types.  This is not in any way an official LAS position, but I'd like to think that it all makes some logical sense.

# What's the point of the issue types?

The difference bettween Bug/Incompatibility and Enhancement/Proposal is pretty clear cut.  The reason for distinguishing between those pairs is simple - it's classifying a specific as being a fix for something existing or broke vs something that is an addition or new.

Additions need to be evaluated prior to implementation to make sure they are a good idea, where as bugs and incompatibility issues are usually clearly something that needs fixing.  In addition to this if something is broken in a "stable" release then that should take priority as it will be affecting production users.

As for the differentiation between Bug and Incompatibility, I go into the difference quite heavily below but as for why this matters - it just helps focus the initial investigation.  Is the person triaging looking for something that is outright broken, not behaving as expected against a potentially opinionated idea of "correct", or something that is not behaving when compared to a reference as to how it should behave. 

In that last case, an incompatibility issue indicates that the desired outcome is clear-cut because the outcome for a specific block of CFML is different to the relevant version of Adobe ColdFusion.

Issue types are not final, they may get updated through the course of a tickets life, but they do help set the mood for the person that picks up the ticket either for triage or for development.

# What do the issue types mean?

## Bug

>A software bug is an error, flaw, failure, or fault in a computer program or system that causes it to produce an incorrect or unexpected result, or to behave in unintended ways.

The above is hard to disagree with.  Something isn't working as you expect it to and so it's a bug.  Simple.

## Incompatibility

> Software incompatibility is a characteristic of software components or systems which cannot operate satisfactorily together

If code works on Adobe ColdFusion but then works differently on Lucee then the Lucee implementation is not compatible with Adobe ColdFusion.  For the record Lucee 4 should be compatible with Adobe ColdFusion 10, and at time of writing Lucee 5 should be compatible with Adobe ColdFusion 11.

The word missing from this issue type is "bugs".  I would look at it that all Incompatibility issues are also Bugs, but not all Bugs are Incompatibility issues.

When I'm looking to classify issues I am mostly looking at bugs and incompatibility issues.  The main question I have is simple.  "Does this work on ACF but not on Lucee?".  If yes, then I would consider it an Incompatibility issue.  

The reason for the distinction is primarily that determining what the correct response for a compatibility issue is far simpler than an outright bug.  Code that works in ACF should work in Lucee, if it doesn't then Lucee needs changing (where possible) so that the code does work.  

Additionally I would look first at incompatibility issues primarily because they prevent people from being able to use their existing code which in turn may sour first impressions on Lucee.  In an ideal world I'd migrate all legacy software that I have to hand to Lucee but a worry about incompatibility holds it up.  The more incompatibilities get corrected, the less that worry exists.

## Enhancement

> an increase or improvement in quality, value, or extent.

Where something is not a bug but is a change in functionality that would be nice to have then that can be considered an enhancement.  This may result in adding logic or functionality that is additional to Adobe ColdFusion.  Of course when this is done any code made that uses that Lucee-CFML specific logic will no longer work on Adobe ColdFusion.

Lucee aims to allow code written for Adobe ColdFusion to work on Lucee.  Lucee does not, and can not, make promises that all code written that works on Lucee will work the same way on Adobe ColdFusion because that would prevent any development that isn't compatibility work.

In the long term the solution to this is what Lucee Lang is intended to solve in that it is seperate to the CFML compatibility layer.  In the short term though comprimises have to be made.

Just because there is an Enhancement issue on the board doesn't mean it will actually get approved and be implemented, but likewise if it hasn't been asked for then the chance of it magically appearing far lower.

## Proposal

> A proposal is a plan, a scheme, an offer to be accepted or rejected

Now how about a major new piece of functionality or a major change was desired?  Maybe someone believes that the admin tools could use a total rewrite or that something core to the system could use changing.  

Well when it's not as simple as adding a new minor feature that ends up as a proposal.  As a proposal the merits and dangers of the proposal as well as detail of the possible ways it could be implemented can be discussed.

As with Enhancements, not everything raised as a Proposal will get approved for development.  It is far more likely though than something that never gets posted up on the Jira board in the first place.

# Summary

If it's broken in Lucee but not in Adobe ColdFusion, it's an Incompatibility.  If it's just outright broken then it's a Bug.  

If it's adding or altering something outside of how Adobe ColdFusion behaves it's an Enhancement or Proposal.

