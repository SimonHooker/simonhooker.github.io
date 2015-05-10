---
layout: post
category : lucee
tagline: "Balancing the books and the bedpans"
tags : [lucee, jira, git, java]
---

So you have some free time and would like to help improve Lucee, but oh no! You dont know any Java.  Well there's always documentation ... isn't that everyone's idea of a good time?  Well good news, there is a vital part of the Lucee issue process that you can turn your attention to ... triage.

What is triage? Put simply it is the process of confirming a bug and providing means to reproduce it. Usually this will be done by creating a test suite and attaching it to the ticket. This then allows whoever later decides to work on it to confirm easily that the issue hasn't been fixed by an update since reporting or triage. It also allows regression checks to confirm that the issue doesn't recur due to a change made down the line.

## Get access to the Lucee JIRA board

Still interested? Great!  Do you have a Lucee JIRA account?  If not then you'd best create one on the [Lucee JIRA board](https://luceeserver.atlassian.net/secure/Dashboard.jspa).  

Now you have that, do you have the access level that you'll need to perform triage?  Possibly not.  Not to worry, if you have a look at the introduction on the system dashboard of the JIRA board you'll see the contact details at the bottom.  Just fire off an email and request permission to triage tickets.

Assuming that all gets granted (which hopefully it will do) then you're now ready to actually get started.

## Find an issue to triage

Now you need to find something to triage. If you go to [Lucee Development Triage board](https://luceeserver.atlassian.net/secure/RapidBoard.jspa?rapidView=3&useStoredSettings=true) you will see the column titled "New".  These are tickets that have been created but have not yet been looked at by anyone.  In general you are probably going to want to start of triaging bugs in the current release. To filter down to just these tickets then do the following.

1. Click on  **Issues** (top menu) 
2. Click on **Search for issues**
3. Click on **Status** and select **NEW**
4. Click on **More** and find the filter titled **Affects Version**
5. Select all the versions you are interested in

This will create the JQL query required to filter down the issues to just those that are important to you at this point.  If you click on **Advanced** then you will see the generated JQL whch should look something like this

{% highlight SQL %}
status = New 
AND 
affectedVersion in (
    "5.0 Final", 
    5.0.0.42, 
    5.0.0.43, 
    5.0.0.44,
    5.0.0.45
)
{% endhighlight %}

Have a look through the tickets and find one that interests you. Alternatively you can be selfless and pick one of the more voted for ones.  That's probably the nicer thing to do.

## Read the ticket

See title.  Read it, make sure you understand it.  If uncertain then ask the person that posted the issue questions.  How are you meant to create unit tests to reproduce an issue if you don't understand it?  If more information is required then feel free to send the ticket back to **Need More Details**.

That's kind of it for this section really.  Read the ticket, comprehend, that is all.

## Reproduce the problem

The next thing you will need is a Lucee environment to test on. For now you can find instructions for this in the [Lucee wiki](https://bitbucket.org/lucee/lucee/wiki/Download%20and%20Install).  Also check the instructions in [the Lucee test README](https://bitbucket.org/lucee/lucee/src/af6a8c8cc5f550e3034dba8a98167f51a7393e1d/tests/README.md?at=master) for any mappings and configuration you need.

The most basic and often easiest way to reproduce the issue is to just create a simple CFML script that reproduces the issue.  For example in [LDEV-224](https://luceeserver.atlassian.net/browse/LDEV-224) you can see in the description that I created and posted the simple CFML script that reproduced the issue when I created the bug report.  Many bug reports are not that complete (hence the need for triage).  

This allows others to easily see the problem themselves in addition to allowing the original reporter to confirm that the issue you have reproduced is actually the issue they reported.  It's possible that you discovered an entirely different issue.  


## Set up a test suite

Now that you have reproduced the problem it's time to create unit tests.  Under the hood Lucee uses [TestBox](http://wiki.coldbox.org/wiki/TestBox.cfm) for its unit tests.  Personally I prefer the BDD-style definitions of unit tests, but either style is acceptable as long as the tests do the job.  To get started on your suite do the following.

1. Create a file titled LDEV-**{ticket number}**.cfc (i.e. LDEV-224.cfc). *You will see some older tickets have unit tests titled Issue**{number}**.cfc - these numbers are based off the old BitBucket issue tracker. 
2. Paste in the unit test skeleton shown under this list.
3. Put in as many tests and describe blocks as you need to reproduce the issue reliably.  
4. Optionally you can also include some tests that cover related functionality.  Perhaps the bug report was stating a discrepancy between a tag and a script function that needs addressing - if so why not include a passing test on whichever is working as intended?
5. Check your tests to make sure they pass/fail as you expect them to

{% highlight JavaScript %}
component extends="org.lucee.cfml.test.LuceeTestCase"   {

    function beforeAll() { 
        /* anything you want to run once before all tests start */ 
    }
    function afterAll() { 
        /* anything you want to run once after all tests start */ 
    }

    function run( testResults , testBox ) {

        describe( 'LDEV-000' , function() {

            beforeEach( function( currentSpec ) { 
                /* anything you want to run before each test */ 
            } );
            afterEach( function( currentSpec ) { 
                /* anything you want to run after each test */ 
            } );

            it( 'your test description here' , function( currentSpec ) {
                /* your test here */
                /*
                // The below is an example failing test case for a nonsense case
                actual = 1234;
                expected = 3456;
                expect( actual ).toBe( expected );
                */
            });

        });
    }
} 
{% endhighlight %}

Well done you've just created some unit tests for a Lucee issue!

## Update the ticket

All that remains to be done now is to get those unit tests on the ticket.  To do this just click on **Attach Files** (usually under the **More** menu) and select your cfc.  If any additional supporting information is needed then it doesn't hurt to chuck up a comment too.

Now that's all done send it to the **Awaiting Approval** stage.  The ticket will then be assessed by the Lucee Core Development team and hopefully it will be pushed into the backlog for development.  The key points that will most likely be discussed at this point are the following.

- Is the issue reproducible? ( Ideally through unit tests as this makes development easier )
- Has the issue already been fixed in a future version?
- Is this something that will be fixed? ( Some functionality may be deemed a low priority due to its use being relatively niche.  In these cases there is nothing stopping someone fixing the issue and submitting a pull request for inclusion in a future Lucee version - it just means that it won't be considered a priority for the Lucee project )
- In the cases of new features, is this something that would be desirable?

## And that's it!

Well, that's your job done.  Time to pick up another ticket and start all over again!  Hopefully you got a bit of a warm fuzzy feeling somewhere along the line.  From a personal point of view it's quite nice to be able to help bring some order to the incoming issues.  

By performing triage you allow any developers to concentrate more on development than on trying to figure out what actually is a problem / how to reproduce the problem.  So to recap, the triage process is as follows.

1. Find an issue and move it to **Being Triaged** - assign it to yourself at this point.
2. Read the information on the issue including the comments
3. Reproduce the issue
4. Create a unit test
5. Attach the unit test to the issue in JIRA
6. Move the JIRA issue to **Awaiting Approval**