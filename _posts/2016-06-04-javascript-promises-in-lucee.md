---
layout: post
category : lucee-promise
tags : [lucee, lucee-promise]
---

I got bored last night so started trying to implement Promises in Lucee based on the [Promises/A+ specification](https://promisesaplus.com/).  A day later and I have a working extension, so that's nice.

The source can be found over on github ( [SimonHooker/lucee-promise](https://github.com/SimonHooker/lucee-promise) ).  If you just want to grab the lex file, the current version is [extension-lucee-promise-1.0.0.57.lex](https://github.com/SimonHooker/lucee-promise/blob/f5d4b14c4d513946032809c65ec1b6ecf46e7019/dist/extension-lucee-promise-1.0.0.57.lex).  Just download it and drop it into your contexts deploy folder and you're good to go.

All things considered, [PromiseJS API documentation](https://www.promisejs.org/api/) and [Promise on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) both cover how to use this quite well.  The only differences are as follows:

* In Lucee the promise at present does not automatically update itself with the resolved value.  To retrieve the final value you must use `promise_object.value()`
* Instead of `Promise.resolve( ... )` you must use `Promise::resolve( ... )`
* Instead of `Promise.reject( ... )` you must use `Promise::reject( ... )`
* Instead of `Promise.all( [ ] )` you must use `Promise::all( [ ] )`
* Instead of `Promise.race( [ ] )` you must use `Promise::race( [ ] )`

So there you have it, Promises in Lucee, hope you all have fun with them!