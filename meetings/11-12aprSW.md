<html>
 <head>
  <meta charset="utf-8">
  <title>11-12 April 2016 Service Workers meeting - W3C Web platform Working Group</title>
 </head>
 <body>
<h1>11-12 April 2016 Service Workers meeting - <a href="https://www.w3.org/WebPlatform/WG/">W3C Web platform Working Group</a></h1>

<p>This meeting will take place on 11-12 April 2016, and will be hosted by Microsoft in Redmond</p>

<h2>Expected attendees</h2>

<h3>Will attend</h3>

  <ul>
    <li><strong>Microsoft</strong> - Ali Alabbas, Jatinder Mann, Todd Reifsteck</li>
    <li><strong>Google</strong> - Joshua Bell, Matt Falkenhagen, Jake Archibald, Alex Russell, Ilya Grigorik, Marijn Kruisselbrink</li>
    <li><strong>Samsung</strong> - Jungkee Song</li>
    <li><strong>Mozilla</strong> - Ehsan Akhgari, Ben Kelly</li>
    <li><strong>Apple</strong> - Ted O'Connor</li>
  </ul>

<h3>Will attend remotely</h3>
  <ul>
    <li><strong>Google</strong> - Owen Campbell-Moore</li>
  </ul>

<h3>Hope to attend</h3>
  <ul>
  </ul>

## Format

45 mins of *extreme standardising* followed by a 15 minute break, then a longer break around lunchtime. The day will finish around 17:00 or earlier if we start dropping dead.

Day 1 will give priority to V1 issues, whereas day 2 will be about future work.

## Agenda

Please add your name, and agenda requests here by [editing a branch and making a Pull Request](https://github.com/w3c/WebPlatformWG/blob/gh-pages/meetings/11-12aprSW.md), or by mail to either the public-webapps mailing list or the chairs of the Web Platform group, which will result in it being posted here.

* Day 1
  * Agenda shuffling
  * Vendor comments on general direction (eg [Tim's comment](https://twitter.com/xeenon/status/718487529612161025))
  * Issues (I've tagged issues small/medium/large in terms of estimated discussion time - we can tackle them in any order)
    * [Referrer policy issue](https://github.com/whatwg/fetch/issues/266) - medium 
    * [Inconsistencies due to when clients are created](https://github.com/slightlyoff/ServiceWorker/issues/870) and [Should the active worker move to environment settings object?](https://github.com/slightlyoff/ServiceWorker/issues/811) and ["javascript global environment" and related terms were removed from HTML](https://github.com/slightlyoff/ServiceWorker/issues/832) - large
    * [be more explicit that jobs always run asynchronously](https://github.com/slightlyoff/ServiceWorker/issues/861) - small
    * [FetchEvent.respondWith does something weird with the body of a response](https://github.com/slightlyoff/ServiceWorker/issues/850) - medium
    * ["Wait for all the tasks queued by Update State" language is problematic](https://github.com/slightlyoff/ServiceWorker/issues/848) - small
    * [ExtendableMessageEvent.source cannot be SameObject](https://github.com/slightlyoff/ServiceWorker/issues/816) - small
    * [MessagePort\[\] no longer valid in WebIDL](https://github.com/slightlyoff/ServiceWorker/issues/810) - small
    * [what should the document base URI for an intercepted navigation](https://github.com/slightlyoff/ServiceWorker/issues/787) & [https://github.com/slightlyoff/ServiceWorker/issues/757](https://github.com/slightlyoff/ServiceWorker/issues/757) - small
    * [Allow waitUntil to be called multiple times, async](https://github.com/slightlyoff/ServiceWorker/issues/771) - small
    * [ServiceWorkerContainer.controller prose says to return undefined, but the IDL doesn't allow that](https://github.com/slightlyoff/ServiceWorker/issues/769) & [self.caches should spec what to do for "untrusted" origins](https://github.com/slightlyoff/ServiceWorker/issues/687) - medium
    * [serviceworker for iframes with srcdoc](https://github.com/slightlyoff/ServiceWorker/issues/765) - small
    * [Make secure context requirements more explicit](https://github.com/slightlyoff/ServiceWorker/issues/754) - small
    * [Make the Cache API deal with request's redirect mode not being "follow"](https://github.com/slightlyoff/ServiceWorker/issues/737) - small
    * [Remove frameType, maybe add ancestorOrigins](https://github.com/slightlyoff/ServiceWorker/issues/732) - medium
    * [When does the openWindow promise resolve?](https://github.com/slightlyoff/ServiceWorker/issues/728) - medium
    * [spec should be more explicit about accessing internal body on opaque Responses](https://github.com/slightlyoff/ServiceWorker/issues/710) - medium
    * [Receivers of ranged responses must ensure all ranges come from the same underlying resource](https://github.com/slightlyoff/ServiceWorker/issues/703) - medium
    * [Restrict openWindow() to http(s) schemes?](https://github.com/slightlyoff/ServiceWorker/issues/699) - small
    * [Define the lifetime of a blob URL created inside a service worker](https://github.com/slightlyoff/ServiceWorker/issues/688) - small
    * [Install algorithm step 14 should clear waiting worker before updating state to redundant](https://github.com/slightlyoff/ServiceWorker/issues/851) - medium
    * [spec should queue tasks to expose attribute changes on ServiceWorker and ServiceWorkerRegistration](https://github.com/slightlyoff/ServiceWorker/issues/860) - small
    * [if service-worker-allowed header changes should active worker be potentially unregistered?](https://github.com/slightlyoff/ServiceWorker/issues/857) - medium
    * [Access to fragment identifiers](https://github.com/slightlyoff/ServiceWorker/issues/854) - small
    * [Client.postMessage should return a Promise](https://github.com/slightlyoff/ServiceWorker/issues/677) - medium
    * [matchAll() runs Request constructor off the main thread](https://github.com/slightlyoff/ServiceWorker/issues/672) - small
    * [Drop isReload](https://github.com/slightlyoff/ServiceWorker/issues/873) - medium
    * [Interception of redirects](https://github.com/slightlyoff/ServiceWorker/issues/793) - small
    * [CSS no-cors interception](https://github.com/slightlyoff/ServiceWorker/issues/719) - large
    * https://github.com/slightlyoff/ServiceWorker/issues/875
  * Timing of V1

* Day 2 - these in any order
  * Foreign fetch
    * https://github.com/slightlyoff/ServiceWorker/issues/826
    * https://github.com/slightlyoff/ServiceWorker/issues/825
  * [Transactions](https://github.com/slightlyoff/ServiceWorker/issues/823)
  * Moving the spec somewhere neutral & moving Cache API to its own spec
  * [Persistence](https://github.com/slightlyoff/ServiceWorker/issues/803) and quota API
  * Navigation timing & service worker
  * [waitUntil and constructed streams](https://github.com/yutakahirano/fetch-with-streams/issues/63#issuecomment-207489289)
  * [Unloaded tabs](https://github.com/slightlyoff/ServiceWorker/issues/626)
  * [Cookie API](https://github.com/bsittler/async-cookies-api)
  * Recreating force-reload with JS
    * https://github.com/slightlyoff/ServiceWorker/issues/839
  * [Allowing multiple SW instances for performance](https://github.com/slightlyoff/ServiceWorker/issues/756)
  * Timing for next meeting


<h2>Background reading</h2>

<ul>
</ul>


<h2>Logistics</h2>

<dl>
  <dt>Time</dt>
  <dd>9am - 5pm on April 11-12</dd>
  <dt>Location</dt>
  <dd><strong>Microsoft Building 115</strong> (14855 NE 36th St, Redmond, WA 98052) - we will meet in the building lobby</dd>
</dl>

  <h3>Remote Participants</h3>

<p><strong><a href="https://join.microsoft.com/meet/alia/L399ZDKJ">Join Skype Meeting Online</a></strong><br>or <strong>join by phone</strong>: <a href="tel:+18883203585">+1 (888) 320-3585</a> - Conf ID: 660015252 (or <a href="https://join.microsoft.com/dialin">find a local number</a>)</p>

<p>IRC channel: irc://irc.w3.org/#webapps</p>

</body>
</html>
