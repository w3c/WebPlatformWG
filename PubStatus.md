This document contains current data regarding the *(Publication) Status* of specifications being developed by the [Web Applications Working Group](http://www.w3.org/2008/webapps/wiki/Main_Page) (aka *WebApps*). The data is provided in several tables: 1) API Specifications; 2) Web Components Specifications; 3) Widget Specifications; 4) Recommendations in Maintenance Mode; and 5) Specs NO Longer Active.

Note the [WG's Charter](http://www.w3.org/2014/06/webapps-charter.html) enumerates all of the [WG's deliverables](http://www.w3.org/2014/06/webapps-charter.html#deliverables).

Please see the section *[Table Key](http://www.w3.org/2008/webapps/wiki/PubStatus#Table_Key)* for information regarding interpreting the data in the tables.

API Specifications
------------------

The specifications are listed in alphabetical order ...

|Spec, Active Editor(s)|Last TR Publication|Type|Remarks|Testing|Plans|
|----------------------|-------------------|----|-------|-------|-----|
|[Clipboard APIs and Events](https://w3c.github.io/clipboard-apis/), Hallvord Steen|[2015-04-21](http://www.w3.org/TR/clipboard-apis/)|WD|[Github Issues](https://github.com/w3c/clipboard-apis/issues);

[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=Clipboard%20API%20and%20events&resolution>=---&list\_id=9413 Bugzilla Database];

[Github Monthly Pulse](https://github.com/w3c/clipboard-apis/pulse/monthly);

Implementations: see [CanIUse](http://caniuse.com/#feat=clipboard)|[Test Suite](http://dev.w3.org/2006/webapi/clipops/testsuite/) Test Facilitator: Hallvord Steen; Status: 85% complete|Publish periodic WDs until the spec is feature complete.

Work on test suite and move it to Github.

See Hallvord's [2014-Oct-24 status report](http://lists.w3.org/Archives/Public/public-webapps/2014OctDec/0238.html).|
|[DOM Level 3 KeyboardEvent code Values](https://w3c.github.io/DOM-Level-3-Events-code/), Travis Leithead, Gary Kačmarčík|[2015-04-28](http://www.w3.org/TR/DOM-Level-3-Events-code/)|WD|Discussions on [www-dom mail list](http://lists.w3.org/Archives/Public/www-dom/).

[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=DOM3%20Events&resolution>=--- Bugzilla database] - bugs prefixed with [keycode].

[Github Issues](https://github.com/w3c/DOM-Level-3-Events-code/issues).

[Github Monthly Pulse](https://github.com/w3c/DOM-Level-3-Events-code/pulse/monthly).

See also the [DOM3Events](DOM3Events "wikilink") Wiki Page.|Test Facilitator: @TBD.

Test Suite: @TBD|Update as new code values are added/fixed. This spec will advance in step with UI Events.|
|[DOM Level 3 KeyboardEvent key Values](https://w3c.github.io/DOM-Level-3-Events-key/), Travis Leithead, Gary Kačmarčík|[2015-04-28](http://www.w3.org/TR/DOM-Level-3-Events-key/)|WD|Discussions on [www-dom mail list](http://lists.w3.org/Archives/Public/www-dom/).

[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=DOM3%20Events&resolution>=--- Bugzilla database] - bugs prefixed with [keyvalue].

[Github Issues](https://github.com/w3c/DOM-Level-3-Events-key/issues).

[Github Monthly Pulse](https://github.com/w3c/DOM-Level-3-Events-key/pulse/monthly).

See also the [DOM3Events](DOM3Events "wikilink") Wiki Page.|Test Facilitator: @TBD.

Test Suite: @TBD|Update as new key values are added/fixed. This spec will advance in step with UI Events.|
|[DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/); Travis Leithead|[2014-06-17](http://www.w3.org/TR/DOM-Parsing/)|CR|[Github Issues](https://github.com/w3c/DOM-Parsing/issues);

[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=DOM%20Parsing%20and%20Serialization&resolution>=--- Bugzilla Database];

[Github Monthly Pulse](https://github.com/w3c/DOM-Parsing/pulse/monthly)|Test Facilitator: Travis and Cindy;

[Suite](http://w3c-test.org/html/syntax/Test);

Status: ??% complete.

[Open Test Issues](https://github.com/w3c/web-platform-tests/issues?labels=DOM-parsing&page=1&state=open).|Work on test suite and after it is complete, do interoperability testing.|
|[File API](https://w3c.github.io/FileAPI/), Arun Ranganathan, Jonas Sicking|[2015-04-21](http://www.w3.org/TR/FileAPI/)|WD|[Github Issues](https://github.com/w3c/FileAPI/issues);

[Github Monthly Pulse](https://github.com/w3c/FileAPI/pulse/monthly);

[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=File%20API&resolution>=--- Bugzilla Database]

File API [Implementation data](http://caniuse.com/#feat=fileapi) from caniuse.com; File Reader [Implementations data](http://caniuse.com/#feat=filereader) from caniuse.com|Test Facilitator: @NEED\_HELP [Test Suite](http://w3c-test.org/FileAPI/);

Status: 20% complete.

[Open Test Issues](https://github.com/w3c/web-platform-tests/issues?labels=FileAPI&page=1&state=open).|Publish LC\#2 when all v1 [<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=File%20API&resolution>=--- Bugs] are closed.|
|[FileSystem API](http://w3c.github.io/filesystem-api/); Arun Ranganathan|N/A|ED|[Github monthly Pulse](https://github.com/w3c/filesystem-api/pulse/monthly);

[Github Issues](https://github.com/w3c/filesystem-api/issues)|Test Faciliator: @TBD;

Status: NO test suite|Publish FPWD when spec is fleshed-out breadth first.|
|[Gamepad](https://w3c.github.io/gamepad/gamepad.html), Scott Graham and Ted Mielczarek|[2015-04-29](http://www.w3.org/TR/gamepad/)|WD|[Github monthly Pulse](https://github.com/w3c/gamepad/pulse/monthly);

[Github Issues](https://github.com/w3c/gamepad/issues);

[Features for v.Next](https://www.w3.org/wiki/Webapps/GamepadFeatures).|[Test Suite](https://github.com/w3c/web-platform-tests/tree/master/gamepad);

Test Facilitator: Ted|Publish a LCWD after the last bugs for v1 are fixed.

See Ted's [2014-Nov-26](http://lists.w3.org/Archives/Public/public-webapps/2014OctDec/0510.html) e-mail for information about the next steps including implementation data.

Obsolete the Bugzilla component after all of the Open Bugs have been moved to Github Issues.|
|[Indexed Database API (Second Edition)](http://w3c.github.io/IndexedDB/), Joshua Bell, Ali Alabbas|[2015-01-08](http://www.w3.org/TR/IndexedDB/)|REC|[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=Indexed%20Database%20API&resolution>=--- Bugzilla database].

[Github Issues](https://github.com/w3c/IndexedDB/issues).

[Implementation data](http://caniuse.com/#search=indexed) from caniuse.com.

[Feature list for v2](http://www.w3.org/2008/webapps/wiki/IndexedDatabaseFeatures).

[Comment Tracking Document](https://dvcs.w3.org/hg/IndexedDB/raw-file/default/Comments-16-May-2013-LCWD.html) for the 16-May-2013 LCWD.|Test Facilitator: Zhiqiang Zhang; [Test Suite](http://w3c-test.org/IndexedDB/);

Status: complete.

[Open Test Issues](https://github.com/w3c/web-platform-tests/issues?labels=IndexedDB&page=1&state=open).|Start work on IDB Second Edition and process v1 errata if/when needed.|
|[Input Method Editor (IME) API](https://w3c.github.io/ime-api/), Travis Leithead|[2015-04-09](http://www.w3.org/TR/ime-api/)|WD|[Github monthly Pulse](https://github.com/w3c/ime-api/pulse/monthly);

[Github Issues](https://github.com/w3c/ime-api/issues);

[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=IME%20API&resolution>=--- Bugzilla Database]|Test Facilitator: Mike™ Smith;

Status: NO test suite|**No one is actively working on this spec nor its implementation at the moment. Additional Editing help wanted.**|
|[Manifest for web application](http://www.w3.org/TR/appmanifest/), Marcos Cáceres, K. Christiansen, A. Kostiainen|[**\^See Note**](http://www.w3.org/TR/appmanifest/)|WD|[Github monthly Pulse](https://github.com/w3c/manifest/pulse/monthly);

[GitHub Issues](https://github.com/w3c/manifest/issues).|Test Facilitator: Sebastian Godard;

Status: NO test suite|[Request for comments: 12-Feb-2015](https://lists.w3.org/Archives/Public/public-webapps/2015JanMar/0614.html).

[Gecko implementation status](https://bugzilla.mozilla.org/show_bug.cgi?id=1003890)

**Note: WDs for this spec are being *automatically published* using [Echidna](https://lists.w3.org/Archives/Public/spec-prod/2015JanMar/0026.html).**|
|[Packaging on the Web](http://w3ctag.github.io/packaging-on-the-web/); Jeni Tennison|[2015-01-15](http://www.w3.org/TR/web-packaging)|FPWD|[Github Issues](https://github.com/w3ctag/packaging-on-the-web/issues);

[Github Monthly Pulse](https://github.com/w3ctag/packaging-on-the-web/pulse/monthly);

This is a joint specification with the TAG.|Test Facilitator: @TBD||
|[Pointer Lock](https://w3c.github.io/pointerlock/), Vincent Scheib|[2013-12-17](http://www.w3.org/TR/pointerlock/)|CR|[Github Issues](https://github.com/w3c/pointerlock/issues);

[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=Pointer%20Lock&resolution>=--- Bugzilla Database];

[Github Monthly Pulse](https://github.com/w3c/pointerlock/pulse/monthly);

[Features for v.Next](https://www.w3.org/wiki/Webapps/PointerLockFeatures).|Test Facilitator: Vincent Scheib;

[Test Suite](http://w3c-test.org/pointerlock/)|Exiting CR is blocked on completing the test suite and getting 2 or more implementations to pass the tests.

See [<http://lists.w3.org/Archives/Public/public-webapps/2014OctDec/0294.html> Vincent's 2014-Oct-27 status report.|
|[Push API](https://w3c.github.io/push-api/index.html), Michaël van Ouwerkerk, Martin Thompson|[2015-04-27](http://w3.org/TR/push-api/)|WD|[Github monthly Pulse](https://github.com/w3c/push-api/pulse/monthly);

[Github Issues](https://github.com/w3c/push-api/issues);

[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=Push%20API&resolution>=---&list\_id=781 Bugzilla Database];

[Use Cases wiki](http://www.w3.org/2008/webapps/wiki/Push_API).

A [Patent Advisory Group](http://www.w3.org/2013/03/push-pag-charter.html) was formed and published their [report on 30-Oct-2013](http://www.w3.org/2013/10/push-api-pag-report.html).|Test Facilitator: @TBD;

Status: NO test suite|Address [issues raised by TAG](https://github.com/w3ctag/spec-reviews/tree/master/2013/08).

For information about IETF's Draft Web Push protocol spec, see [Martin Thomson's 12-Dec-2014 e-mail](http://www.ietf.org/mail-archive/web/webpush/current/msg00109.html).

[<https://groups.google.com/a/chromium.org/forum/>\#!topic/blink-dev/UdGlL9PtBLo Blink intent to ship]|
|[Quota Management API](https://w3c.github.io/quota-api/), Kinuko Yasuda|[2015-04-09](http://www.w3.org/TR/quota-api/)|WD|[Github Issues](https://github.com/w3c/quota-api/issues);

[Github Monthly Pulse](https://github.com/w3c/quota-api/pulse/monthly);

[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=Quota%20Management%20API&resolution>=---&list\_id=9412 Bugzilla Database].

Implementations: see Intent to Implement latest ED in [<https://groups.google.com/a/chromium.org/forum/>\#!topic/blink-dev/ciicp7mJolQ Blink] and [ChromeStatus](http://www.chromestatus.com/features/6218562888794112).|Test Facilitator: @TBD;

Status: NO test suite|See Kinuko's [2014-Oct-23 status](http://lists.w3.org/Archives/Public/public-webapps/2014OctDec/0219.html).

TAG is [reviewing this spec](https://github.com/w3ctag/spec-reviews/issues/21).|
|[Screen Orientation API](https://w3c.github.io/screen-orientation/), Mounir Lamouri, Marcos Cáceres|[2015-04-28](http://www.w3.org/TR/screen-orientation/)|WD|[Github monthly Pulse](https://github.com/w3c/screen-orientation/pulse/monthly);

[Github Issues](https://github.com/w3c/screen-orientation/issues)|Test Facilitator: Marcos Cáceres;

Status: NO test suite|Publish LCWD when last *non-enhancement* [Open Issues are closed](https://github.com/w3c/screen-orientation/issues)|
|[Selection API](http://w3c.github.io/selection-api/); Ryosuke Niwa|[2014-10-07](http://www.w3.org/TR/selection-api)|FPWD|[Github monthly Pulse](https://github.com/w3c/selection-api/pulse/monthly);

[Github Issues](https://github.com/w3c/selection-api/issues).

Based on Aryeh Gregor's [Editing API](https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html).|[Test Suite](http://w3c-test.org/html/editing/);

Test Facilitator: @TBD;

Status: @TBD|Get review of Ryosuke's early ED|
|[Service Workers](http://slightlyoff.github.io/ServiceWorker/spec/service_worker/), Alex Russell, Jungkee Song, Jake Archibald|[2015-06-25](http://www.w3.org/TR/service-workers/)|WD|[Github monthly Pulse](https://github.com/slightlyoff/ServiceWorker/pulse/monthly);

[GitHub Issues](https://github.com/slightlyoff/ServiceWorker/issues);

[Use Cases](http://www.w3.org/wiki/Webapps/AppCacheUseCases).|Test Facilitator: @TBD.

[Test Suite on Github](https://github.com/w3c/web-platform-tests/tree/master/service-workers)|[Chrome Implementation status](https://code.google.com/p/chromium/issues/detail?id=285976); [Firefox Implementation status](https://bugzilla.mozilla.org/show_bug.cgi?id=903441)|
|[Streams API](https://w3c.github.io/streams-api/), Feras Moussa, Takeshi Yoshino|[2014-10-23](http://www.w3.org/TR/streams-api/)|WD|[Github monthly Pulse](https://github.com/w3c/streams-api/pulse/monthly);

[Github Issues](https://github.com/w3c/streams-api/issues);

[public-webapps discussions](http://lists.w3.org/Archives/Public/public-webapps/).|Test Facilitator: @TBD;

Status: NO test suite|Determine **what - if any - APIs are needed on top of Domenic's [WHATWG Streams spec](https://streams.spec.whatwg.org/)?**|
|[UI Events (formerly D3E)](https://w3c.github.io/uievents/), Travis Leithead, Gary Kacmarcik|[2015-04-28](http://www.w3.org/TR/uievents/)|WD|[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=UI%20Events&resolution>=---&list\_id=9117 Bugzilla Database].

[Github Issues](https://github.com/w3c/uievents/issues).

[Github Monthly Pulse](https://github.com/w3c/uievents/pulse/monthly).|Test Facilitators: Gary Kačmarčík, Travis Leithead; [OLD Test Suite](http://dvcs.w3.org/hg/webapps/file/tip/DOMEvents/tests/); [OLD Approved Tests](http://dvcs.w3.org/hg/webapps/file/tip/DOMEvents/tests/approved/);

Status: [20% complete](http://lists.w3.org/Archives/Public/public-webapps-testsuite/2013Sep/0007.html).|This spec includes features that were formerly defined in DOM Level 3 Events.|
|[URL](https://url.spec.whatwg.org/), Anne van Kesteren, Sam Ruby|[2014-12-09](http://www.w3.org/TR/url-1/)|WD|[Bugzilla Database](https://www.w3.org/Bugs/Public/buglist.cgi?bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&component=URL&list_id=42470&product=WHATWG&query_format=advanced);

[Github Monthly Pulse](https://github.com/w3ctag/url/pulse/monthly);

[Github Issues](https://github.com/w3ctag/url/issues)|Test Facilitator: Sam Ruby;

[Test Suite](https://github.com/w3c/web-platform-tests/tree/master/url)||
|[Web IDL](http://heycam.github.io/webidl/), Cameron McCormack, Boris Zabarsky|[2012-04-19](http://www.w3.org/TR/WebIDL/)|CR|[Github monthly Pulse](https://github.com/heycam/webidl/pulse/monthly);

[Github Issues](https://github.com/heycam/webidl/issues);

Technical discussions on [public-script-coord](http://lists.w3.org/Archives/Public/public-script-coord/) mail list;

[Bugzilla Database](https://www.w3.org/Bugs/Public/buglist.cgi?bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&component=URL&list_id=42470&product=WHATWG&query_format=advanced);

[Online WebIDL Checker](http://www.w3.org/2009/07/webidl-check);

[Specs that use WebIDL](http://www.w3.org/wiki/Web_IDL).|Test Facilitator: Travis Leithead;

[Web IDL Test generator for testharness.js](http://lists.w3.org/Archives/Public/public-script-coord/2011OctDec/0154.html) by Dom;

[Web IDL Test Plan by Travis](http://dev.w3.org/2006/webapi/WebIDL/WebIDLTest.htm);

Status: considered complete after comments from [PR-271](http://w3c-test.org/submissions/271/WebIDL/tests/submissions/heycam/) are addressed.

[Open Test Issues](https://github.com/w3c/web-platform-tests/issues?labels=WebIDL&page=1&state=open).|Cameron to update [PR271 tests](http://w3c-test.org/submissions/271/WebIDL/tests/submissions/heycam/) to reflect comments.

Publish a new LCWD of v1 after the [v1 Bugs](https://www.w3.org/Bugs/Public/buglist.cgi?bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&component=WebIDL&list_id=31512&product=WebAppsWG&query_format=advanced&status_whiteboard=v1&status_whiteboard_type=allwordssubstr) are addressed.|
|[Web Sockets API](https://w3c.github.io/websockets/), Ian Hickson|[2012-09-20](http://www.w3.org/TR/websockets/)|CR|Dependency on [RFC6455 The WebSocket Protocol](http://tools.ietf.org/html/rfc6455). Protocol technical discussions on IETF's [hybi mail list](http://www.ietf.org/mail-archive/web/hybi/current/maillist.html). [<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=WebSocket%20API%20%28editor%3A%20Ian%20Hickson%29&resolution>=--- Bugzilla database]. [Implementation data](http://caniuse.com/#feat=websockets) from caniuse.com|Test Facilitator: Kris Krueger; [Test Suite](http://w3c-test.org/websockets/);

Status: complete; [Approved tests](http://w3c-test.org/websockets/).

[Open Test Issues](https://github.com/w3c/web-platform-tests/issues?labels=websockets&page=1&state=open).|Exiting CR is blocked on:

1) 2 or more Implementations passing the test suite; see [**Draft** Implementation Report](http://www.w3.org/wiki/Webapps/Interop/WebSockets);

2) No support on w3c-test.org for secure web socket testing (see [w-p-t Issue 1690](https://github.com/w3c/web-platform-tests/issues/1690)).|
|[Web Storage (2nd Edition)](https://w3c.github.io/webstorage/), Ian Hickson|[2015-06-09](http://www.w3.org/TR/webstorage/)|CR|[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=Web%20Storage%20%28editor%3A%20Ian%20Hickson%29&resolution>=--- Bugzilla database];

[Github Issues](https://github.com/w3c/webstorage/issues);

[Github Monthly Pulse](https://github.com/w3c/webstorage/pulse/monthly); [Implementation data](http://caniuse.com/#search=storage) from caniuse.com|Test Facilitator: [Test Suite](http://w3c-test.org/webstorage/);

Status: [test suite](http://w3c-test.org/webstorage/) for v1 considered complete.|[DRAFT Implementation Report](https://github.com/w3c/test-results/tree/gh-pages/webstorage) for 2nd Edition.

Update test suite for 2nd Edition; run tests; move 2nd Edition to PR/REC.|
|[Web Workers](https://w3c.github.io/workers/), Ian Hickson|[2015-09-24](http://www.w3.org/TR/workers/)|WD|[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=Web%20Workers%20%28editor%3A%20Ian%20Hickson%29&resolution>=--- Bugzilla database]; [Implementation data](http://caniuse.com/#feat=webworkers) from caniuse.com;|Test Facilitator: Simon Pieters; [Test Suite](http://w3c-test.org/workers/);

Status: nearly complete; [Approved tests](http://w3c-test.org/workers/).

[Open Test Issues](https://github.com/w3c/web-platform-tests/issues?labels=workers&page=1&state=open).|Exiting CR is blocked on 2 or more Implementations passing the test suite; see [**Draft** Implementation Report](https://www.w3.org/wiki/Webapps/Interop/WebWorkers).

See [Simon's 2014-Sep-29 status report](http://lists.w3.org/Archives/Public/public-test-infra/2014JulSep/0080.html).|
|[XHR Level 1](http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html), Julian Aubourg, Jungkee Song, Hallvord Steen|[2014-01-30](http://www.w3.org/TR/XMLHttpRequest/)|WD|[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=XHR&resolution>=--- Bugzilla Database];

[Github Issues](https://github.com/w3c/XMLHttpRequest/issues);

[Github Monthly Pulse](https://github.com/w3c/XMLHttpRequest/pulse/montlhy)|Test Facilitator: Julian Aubourg; [Test Suite](http://w3c-test.org/XMLHttpRequest/);

Status: nearly complete.

[Open Test Issues](https://github.com/w3c/web-platform-tests/issues?labels=XMLHttpRequest&page=1&state=open).|Publish LC/CR when [Test Results](http://jungkees.github.io/XMLHttpRequest-test/) show each test is passed by two or more implementations.|

Web Components Specifications
-----------------------------

|Spec, Active Editor(s)|Last TR Publication|Type|Remarks|Testing|Plans|
|----------------------|-------------------|----|-------|-------|-----|
|[Custom Elements](http://w3c.github.io/webcomponents/spec/custom/), Dimitri Glazkov|[2014-12-16](http://www.w3.org/TR/custom-elements/)|LCWD|[Github Issues](https://github.com/w3c/webcomponents/labels/custom-elements);

[Github monthly Pulse](https://github.com/w3c/webcomponents/pulse/monthly);

Implementations: [CanIUse](http://caniuse.com/#search=custom%20elements).|Test Facilitator: @TBD;

Status: @?

[Open Test Issues](https://github.com/w3c/web-platform-tests/issues?labels=custom-elements&page=1&state=open).|Continue to work on [Issues](https://github.com/w3c/webcomponents/labels/custom-elements) and [Proposals](https://github.com/w3c/webcomponents/tree/gh-pages/proposals).|
|[HTML Imports](http://w3c.github.io/webcomponents/spec/imports/), Dimitri Glazkov, Hajime Morrita|[2014-03-11](http://www.w3.org/TR/html-imports/)|WD|[Github Issues](https://github.com/w3c/webcomponents/labels/html-imports);

[Github monthly Pulse](https://github.com/w3c/webcomponents/pulse/monthly);

Implementations: [CanIUse](http://caniuse.com/#search=custom).

See Hajime's [HTML Imports Design Notes](https://gist.github.com/omo/9986103).|[Test Suite](https://github.com/w3c/web-platform-tests/tree/master/html-imports);

Test Facilitator: Hajime Morrita|Continue to work on [Issues](https://github.com/w3c/webcomponents/labels/html-imports) and [Proposals](https://github.com/w3c/webcomponents/tree/gh-pages/proposals).|
|~~[HTML Templates](http://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html) Dimitri Glazkov, Rafael Weinstein, Tony Ross~~|[2014-03-18](http://www.w3.org/TR/html-templates/)|NOTE|Implementations: see [CanIUse](http://caniuse.com/#feat=template)|Testing will be done in the context of HTML5 testing.

[Open Test Issues](https://github.com/w3c/web-platform-tests/issues?labels=html-templates&page=1&state=open).|**WebApps' work on this spec stopped because the features were moved into the HTML(5) spec** (see [HTML Templates](http://www.w3.org/TR/html5/scripting-1.html#the-template-element)).|
|[Shadow DOM](http://w3c.github.io/webcomponents/spec/shadow/), Dimitri Glazkov, Hayato Ito|[2015-10-06](http://www.w3.org/TR/shadow-dom/)|WD|[Github Issues](https://github.com/w3c/webcomponents/issues);

[Github monthly Pulse](https://github.com/w3c/webcomponents/pulse/monthly);

Implementations: see [CanIUse](http://caniuse.com/#feat=shadowdom).

In [*Shadow DOM Diaries*](https://gist.github.com/dglazkov/efd2deec54f65aa86f2e), Dimitri documents various decision points.|Test Facilitator: Dimitri Glazkov; [Test Suite](https://github.com/w3c/web-platform-tests/tree/master/shadow-dom);

Status: @TBD.

[Open Test Issues](https://github.com/w3c/web-platform-tests/issues?labels=shadow-dom&page=1&state=open).|Continue to work on [Issues](https://github.com/w3c/webcomponents/labels/shadow-dom) and [Proposals](https://github.com/w3c/webcomponents/tree/gh-pages/proposals).|
|~~[Web Components Introduction](http://dvcs.w3.org/hg/webcomponents/raw-file/tip/explainer/index.html), Dominic Cooney, Dimitri Glazkov, Hayato Ito~~|[2014-07-24](http://www.w3.org/TR/components-intro/)|NOTE||No test suite will be created for this non-normative (informative) document|**Work on this document has been discontinued and it should not be referenced. Numerous online resources about Web Components are available, including the [Web Components wiki](http://www.w3.org/wiki/WebComponents/)**.|

Widget Specifications
---------------------

All of the Widget specifications are *W3C Recommendations*. **No further work is planned on any of these specs except for high priority and non-normative errata**.

|Name of Spec
(Editor's Draft)|Last TR Publication|Type|Remarks|Testing|Plans|
|----------------|-------------------|----|-------|-------|-----|
|[Packaged Web Apps (Widgets) - Packaging and XML Configuration](http://dev.w3.org/2006/waf/widgets/) 2nd Edition|[2012-11-27](http://www.w3.org/TR/widgets/)|REC|[Implementation Report](http://dev.w3.org/2006/waf/widgets/imp-report/)|Test Facilitator: Marcos Cáceres [Test Suite](http://dev.w3.org/2006/waf/widgets/test-suite/)|No additional work is planned.|
|[Widget Access Request Policy (WARP)](http://dev.w3.org/2006/waf/widgets-access/)|[2012-02-07](http://www.w3.org/TR/widgets-access/)|REC|[Implementation Report](http://dev.w3.org/2006/waf/widgets-access/imp-report/)|Test Facilitator: Marcos Cáceres [Test Suite](http://dev.w3.org/2006/waf/widgets-access/test-suite/)|No additional work is planned.|
|[view-mode Media Feature](http://dev.w3.org/2006/waf/widgets-vmmf/)|[2012-06-19](http://www.w3.org/TR/view-mode/)|REC|[Implementation Report](http://dev.w3.org/2006/waf/widgets-vmmf/imp-report/)|Test Facilitator: Marcos Caceres [Test Suite](http://dev.w3.org/2006/waf/widgets-vmmf/test-suite/)|No additional work is planned.|
|[Digital Signatures for Widgets](http://dev.w3.org/2006/waf/widgets-digsig/)|[2013-04-18](http://www.w3.org/TR/widgets-digsig/)|REC|[Implementation Report](http://dev.w3.org/2006/waf/widgets-digsig/imp-report/)|Test Facilitator: Marcos Cáceres [Test Suite](http://dev.w3.org/2006/waf/widgets-digsig/test-suite/)|No additional work is planned.|
|[Widget Interface](http://dev.w3.org/2006/waf/widgets-api/) (TWI)|[2013-10-31](http://www.w3.org/TR/widgets-apis/)|REC|[Implementation Report](http://dev.w3.org/2006/waf/widgets-api/imp-report/)|Test Facilitator: Marcos Cáceres [Test Suite](http://dev.w3.org/2006/waf/widgets-api/test-suite/)|No additional work is planned.|

See also:

-   [Widget testing wiki](http://www.w3.org/2008/webapps/wiki/WidgetTesting)
-   [CVS repository for Widgets specs and test suites](http://dev.w3.org/cvsweb/2006/waf/)
-   [Widget Family of Specs](http://www.w3.org/2008/webapps/wiki/WidgetSpecs) (includes non-published documents)

Recommendations in Maintenance Mode
-----------------------------------

'''The following table includes specifications that have been published as Recommendations. In most cases, no additional work is planned except for errata processing. However, some of these standards may have normative changes and subsequent publication(s). '''

|Spec, Active Editor(s)|Last TR Publication|Type|Remarks|Testing|Plans|
|----------------------|-------------------|----|-------|-------|-----|
|[Cross-Origin Resource Sharing (CORS)](http://dev.w3.org/2006/waf/access-control/), Anne van Kesteren|[2014-01-16](http://www.w3.org/TR/cors/)|REC|Implementations: see [CanIUse.com](http://caniuse.com/#feat=cors)

[<http://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsSec&component=CORS&resolution>=--- Bugzilla database]

This spec is a joint deliverable with the [Web Application Security WG](http://www.w3.org/2011/08/appsecwg-charter.html)|Test Facilitator: Odin Hørthe Omdal; [CORS Test Suite](http://w3c-test.org/cors/)

Status: complete.

[Open Test Issues](https://github.com/w3c/web-platform-tests/issues?labels=cors&page=1&state=open).|[Implementation Report](http://odinho.html5.org/CORS/testsuite-report.html);

Maintenance only (e.g. errata).|
|[Element Traversal](http://dev.w3.org/2006/webapi/ElementTraversal/publish/ElementTraversal.html), Doug Schepers|[2008-12-22](http://www.w3.org/TR/ElementTraversal/)|REC|Features integrated into DOM4; no new publications planned.|Test Facilitator: Doug Schepers;

[Approved Tests](http://dvcs.w3.org/hg/webapps/file/tip/ElementTraversal/tests/approved/);

Status: complete|[Implementation Report](http://www.w3.org/2008/webapps/ElementTraversal/index.html);

Maintenance only (e.g. errata).|
|[Indexed Database API](http://w3c.github.io/IndexedDB/) (v1/First Edition), Nikunj Mehta, Jonas Sicking, Eliot Graff, Andrei Popescu, Jeremy Orlow, Joshua Bell|[2015-01-08](http://www.w3.org/TR/IndexedDB/)|REC|[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=Indexed%20Database%20API&resolution>=--- Bugzilla database].

[Github Issues](https://github.com/w3c/IndexedDB/issues).

[Implementation data](http://caniuse.com/#search=indexed) from caniuse.com.

[Feature list for v2](http://www.w3.org/2008/webapps/wiki/IndexedDatabaseFeatures).

[Comment Tracking Document](https://dvcs.w3.org/hg/IndexedDB/raw-file/default/Comments-16-May-2013-LCWD.html) for the 16-May-2013 LCWD.|Test Facilitator: Zhiqiang Zhang; [Test Suite](http://w3c-test.org/IndexedDB/);

Status: complete.

[Open Test Issues](https://github.com/w3c/web-platform-tests/issues?labels=IndexedDB&page=1&state=open).|[Implementation Report](http://w3c.github.io/test-results/IndexedDB/all.html). Process v1 errata if/when needed.|
|[Progress Events](http://dev.w3.org/2006/webapi/progress/Progress.html), Jungkee Song|[2014-02-11](http://www.w3.org/TR/progress-events/)|REC|[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=Progress%20Events&resolution>=--- Bugzilla Database].

Note: this feature is now part of XHR.|Test Facilitator: Jungkee Song; [Test Suite](http://dvcs.w3.org/hg/webapps/file/tip/ProgressEvents/tests/);

Status: 100% complete; [Approved tests](http://dvcs.w3.org/hg/webapps/file/tip/ProgressEvents/tests/approved/);|[Implementation Report](http://www.w3.org/wiki/Webapps/Interop/ProgressEvents);

Maintenance only (e.g. errata).|
|[Selectors API Level 1](http://dev.w3.org/2006/webapi/selectors-api/), Lachlan Hunt|[2013-02-21](http://www.w3.org/TR/selectors-api/)|REC|The features have been integrated into the HTMLWG's DOM4.|Test Facilitator: Lachlan Hunt;

[Test Suite](http://dev.w3.org/2006/webapi/selectors-api-testsuite/);

Status: complete.

[Open Test Issues](https://github.com/w3c/web-platform-tests/issues?labels=selectors-api&page=1&state=open).|[Implementation Report](http://dev.w3.org/2006/webapi/selectors-api-testsuite/level1-baseline-report.html);

Maintenance only (e.g. errata).|
|[Server-Sent Events](http://dev.w3.org/html5/eventsource/), Ian Hickson|[2015-02-03](http://www.w3.org/TR/eventsource/)|REC|[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=Server-Sent%20Events%20%28editor%3A%20Ian%20Hickson%29&resolution>=--- Bugzilla database]; [Implementation data](http://caniuse.com/#feat=s-sent-events) from caniuse.com|Test Facilitator: Tina Zhao and Zhiqiang Zhang;

Status: complete and [Approved](https://github.com/w3c/web-platform-tests/tree/master/eventsource).

[Open Test Issues](https://github.com/w3c/web-platform-tests/issues?labels=eventsource&page=1&state=open).|[Implementation Report](http://w3c.github.io/test-results/eventsource/all.html).

Maintenance only (e.g. errata).|
|[Web Messaging](http://dev.w3.org/html5/postmsg/), Ian Hickson|[2015-05-19](http://www.w3.org/TR/webmessaging/)|REC|[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=Web%20Messaging%20%28editor%3A%20Ian%20Hickson%29&resolution>=--- Bugzilla database] [Implementation data](http://caniuse.com/#search=cross-doc) from caniuse.com|Test Facilitator: Kris Krueger; [Test Suite](http://w3c-test.org/webmessaging/);

Status: complete;

[Open Test Issues](https://github.com/w3c/web-platform-tests/issues?labels=webmessaging&page=1&state=open).|[Implementation Report](https://w3c.github.io/test-results/webmessaging/all).

Maintenance only (e.g. errata).|
|[Web Storage](http://dev.w3.org/html5/webstorage/), Ian Hickson|[2013-07-30](http://www.w3.org/TR/webstorage/)|REC|[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=Web%20Storage%20%28editor%3A%20Ian%20Hickson%29&resolution>=--- Bugzilla database]; [Implementation data](http://caniuse.com/#search=storage) from caniuse.com|Test Facilitator: Jong-Heun Lee [Test Suite](http://w3c-test.org/webstorage/);

Status: complete and [approved tests](http://w3c-test.org/webstorage/).|[Implementation Report](http://www.w3.org/wiki/Webapps/Interop/WebStorage).

Maintenance only (e.g. errata).|

Specs NO Longer Active
----------------------

The documents and specifications in the following table are NO longer active. The order of the specs is the most recently published or abandoned document first.

|Name of Spec
(Editor's Draft)|Last TR Publication|Type|Remarks|Plans|
|----------------|-------------------|----|-------|-----|
|[DOM Level 3 Events](https://dvcs.w3.org/hg/dom3events/raw-file/tip/html/DOM3-Events.html), Travis Leithead, Gary Kačmarčík|[2014-09-25](http://www.w3.org/TR/DOM-Level-3-Events/)|WD|Work on this spec ended in Q1-2015 and features defined in this spec were moved to the UI Events spec.|No additional work is planned (although work on UI Events continues).|
|[Fullscreen API](http://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html), Tantek Çelik|[2014-11-18](http://www.w3.org/TR/fullscreen/)|WG Note|[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=Fullscreen&resolution>=--- Bugzilla Database];

Implementations: see [CanIUse](http://caniuse.com/#feat=fullscreen);

This is a Joint Deliverable with the CSS WG|The WHAWG is actively working on a [WHATWG's Fullscreen](http://fullscreen.spec.whatwg.org/) specification.|
|[XHR Level 2](http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html), Julian Aubourg, Jungkee Song, Hallvord Steen|[2014-11-18](http://www.w3.org/TR/XMLHttpRequest2/)|WG Note||Work continues on both WebApps' [XMLHttpRequest Level 1](https://dvcs.w3.org/hg/xhr/raw-file/default/xhr-1/Overview.html) specification and WHATWG's [XMLHttpRequest](https://xhr.spec.whatwg.org/) specification.|
|[Uniform Messaging Policy (UMP)](http://dev.w3.org/2006/waf/UMP/)|[2014-10-02](http://www.w3.org/TR/UMP/)|WG Note|See [Comparison of CORS and UMP](http://www.w3.org/Security/wiki/Comparison_of_CORS_and_UM)|Work on this specification stopped when the WG rechartered in April 2012|
|[File API: Directories and System](http://dev.w3.org/2009/dap/file-system/file-dir-sys.html), Eric Uhrhane|[2014-04-24](http://www.w3.org/TR/file-system-api)|WG Note|[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=File%20API%3A%20Directories%20and%20System&resolution>=--- Bugzilla Database].

[Implementation data](http://caniuse.com/#feat=filesystem) from caniuse.com.

NO test suite.|WebApps is no longer working on this spec.

See Mozilla's [FileSystem API alternate proposal](http://w3c.github.io/filesystem-api/Overview.html)|
|[File API: Writer](http://dev.w3.org/2009/dap/file-system/file-writer.html), Eric Uhrhane|[2014-04-24](http://www.w3.org/TR/file-writer-api/)|WG Note|[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=File%20API%3A%20Writer&resolution>=--- Bugzilla Database].

[Implementation data](http://caniuse.com/#feat=filesystem) from caniuse.com.

Status: NO test suite|WebApps is no longer working on this spec.

See Mozilla's [FileSystem API alternate proposal](http://w3c.github.io/filesystem-api/Overview.html)|
|[Selectors API Level 2](http://dev.w3.org/2006/webapi/selectors-api2/), Lachlan Hunt|[2013-10-17](http://www.w3.org/TR/selectors-api2/)|WG Note|The features have been integrated into the HTMLWG's DOM4.|WebApps will do no more work on this spec.|
|[DOM4](http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html)|[2012-12-06](http://www.w3.org/TR/dom/)|WD|This spec was moved to the HTML WG in September 2013 (see [30-Sep-2013 e-mail from Philippe](http://lists.w3.org/Archives/Public/public-html-admin/2013Sep/0129.html) for more information).|WebApps is no longer working on this spec.|
|[Widget Updates](http://dev.w3.org/2006/waf/widgets-updates/)|[2013-06-06](http://www.w3.org/TR/widgets-updates/)|WG Note|See [Apple's Patent Disclosure](http://www.w3.org/2004/01/pp-impl/p66), [excluded claims](http://www.w3.org/2004/01/pp-impl/42538/status#current-disclosures), [PAG Recommendations](http://www.w3.org/2009/03/widgets-pag/pagreport.html) (published 8-Oct-2009)|Work on this specification ended with the publication of the WG Note|
|[Web Intents](https://dvcs.w3.org/hg/web-intents/raw-file/tip/spec/Overview-respec.html)|[2013-05-23](http://www.w3.org/TR/web-intents/)|WG Note|This was a joint deliverable with the Device API WG and discussions occured on the [public-web-intents](http://lists.w3.org/Archives/Public/public-web-intents/) mail list.

Greg Billock [announced on 1-Nov-2012](http://lists.w3.org/Archives/Public/public-web-intents/2012Nov/0000.html) Chrome's implementation of Web Intents was disabled.

[<https://www.w3.org/Bugs/Public/buglist.cgi?product=Web%20Intents&component=Web%20Intents%20specification&resolution>=--- Bugzilla Database]|Work on this specification ended with the publication of the WG Note|
|[Java bindings for Web IDL](http://dev.w3.org/2006/webapi/WebIDL/java.html)|[2013-05-14](http://www.w3.org/TR/WebIDL-Java/)|WG Note|Technical discussions on [public-script-coord](http://lists.w3.org/Archives/Public/public-script-coord/) mail list; [<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=WebIDL&resolution>=--- Bugzilla Database]|Work on this specification ended with the publication of the WG Note.|
|[HTML Templates](http://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html)|[2014-03-18](http://www.w3.org/TR/html-templates/)|WG Note|[<https://www.w3.org/Bugs/Public/buglist.cgi?product=WebAppsWG&component=Component%20Model&resolution>=--- Bugzilla Database]|Work on this spec stopped because the spec was moved into the HTML(5) spec (see [Templates](http://www.w3.org/html/wg/drafts/html/master/scripting-1.html#the-template-element)).|
|[From-Origin Header](http://dvcs.w3.org/hg/from-origin/raw-file/tip/Overview.html)|[2012-05-29](http://www.w3.org/TR/from-origin/)|WG Note|X-Frame-Options discussions are on the IETF's [websec mail list](http://www.ietf.org/mail-archive/web/websec/current/maillist.html)|The group [agreed to stop work on this spec](http://lists.w3.org/Archives/Public/public-webapps/2012AprJun/0438.html) and to publish it as a WG Note|
|[XBL2 Spec](http://dev.w3.org/cvsweb/2006/xbl2/)|[2012-05-24](http://www.w3.org/TR/xbl/)|WG Note|See [Mozilla implementation plans](http://lists.w3.org/Archives/Public/public-webapps/2010AprJun/0485.html) from Jonas Sicking (5-May-2010). See [XBL2 changes](http://lists.w3.org/Archives/Public/public-webapps/2010JulSep/0675.html) announced by Ian Hickson on 3-Sep-2010 Implementation feedback: see [XBL2 and "Web XBL" thread](http://lists.w3.org/Archives/Public/public-webapps/2010OctDec/0055.html)|Work on this spec stopped in deference to Web Components|
|[Widget URIs](http://dev.w3.org/2006/waf/widgets-uri/)|[2012-03-13](http://www.w3.org/TR/widgets-uri/)|WG Note||Work on this specification stopped with the publication of the WG Note.|
|[Requirements for Standardizing Widgets](http://dev.w3.org/2006/waf/widgets-reqs/)|[2011-09-27](http://www.w3.org/TR/widgets-reqs/)|WG Note|This is a *non-normative* document (i.e. contains no testable assertions). Need to add reqs from other widget specs: WARP, TWI, View Mode Media Feature, etc. specs.|Work on this document ended with the publication of the Working Group Note.|
|[Programmable HTTP Caching and Serving](http://dev.w3.org/2006/webapi/DataCache/)|[2011-03-29](http://www.w3.org/TR/DataCache/)|WG Note|This spec was formerly titled *DataCache API*|Work on this specification ended with the publication of the WG Note.|
|[Web SQL Database](http://dev.w3.org/html5/webdatabase/)|[2010-11-18](http://www.w3.org/TR/webdatabase/)|WG Note|This spec was formerly titled *Web Database*. [Implementation data](http://caniuse.com/#feat=db-storage) from caniuse.com

[<http://www.w3.org/Bugs/Public/buglist.cgi?query_format=advanced&short_desc_type=allwordssubstr&short_desc>=&product=WebAppsWG&component=Web+Database+%28editor%3A+Ian+Hickson%29&longdesc\_type=allwordssubstr&longdesc=&bug\_file\_loc\_type=allwordssubstr&bug\_file\_loc=&status\_whiteboard\_type=allwordssubstr&status\_whiteboard=&keywords\_type=allwords&keywords=&bug\_status=UNCONFIRMED&bug\_status=NEW&bug\_status=ASSIGNED&bug\_status=REOPENED&bug\_status=RESOLVED&bug\_status=VERIFIED&bug\_status=CLOSED&emailtype1=substring&email1=&emailtype2=substring&email2=&bug\_id\_type=anyexact&bug\_id=&votes=&chfieldfrom=&chfieldto=Now&chfieldvalue=&cmdtype=doit&order=Reuse+same+sort+as+last+time&field0-0-0=noop&type0-0-0=noop&value0-0-0= Bugzilla database]|Work on this specification ended with the publication of the WG Note.|
|[Widgets 1.0: Landscape](http://dev.w3.org/2006/waf/widgets-land/)|[2008-04-14](http://www.w3.org/TR/widgets-land/)|FPWD|This is a *non-normative* document (i.e. contains no testable assertions). It is a snapshot from April 2008. Open Actions: [Action-168](http://www.w3.org/2008/webapps/track/actions/168), [Action-170](http://www.w3.org/2008/webapps/track/actions/170)|In September 2011, the WG agreed this document will not be published again.|
|[XBL2 Primer](http://dev.w3.org/cvsweb/2006/waf/XBLPrimer/), Lachlan Hunt|[2007-07-18](http://www.w3.org/TR/xbl-primer/)|FPWD||Work on this Primer stopped in deference to Web Components|
||

Preliminary specs in Progress
-----------------------------

The group may be working on some very preliminary specifications that are not listed in the above tables of their immaturity. Specs in this state are:

-   Editing APIs; these specs are in development by the [Editing Task Force](https://github.com/w3c/editing-explainer/blob/gh-pages/README.md), a joint task force between WebApps and the HTML Working Group, and the IndieUI WG is also participating in this work.
    -   [Editing Explainer](http://w3c.github.io/editing-explainer/)
    -   [Responsive Input Explainer](http://w3c.github.io/editing-explainer/responsive-input-explainer.html)
    -   [Input Events](http://w3c.github.io/editing-explainer/input-events.html)

Table Key
---------

The tables above use the following abbreviations and conventions:

-   The link in the ''Name of Spec' column is the document's *Editor's Draft*
-   The *Last Publication* column contains the date of the most recent formal publication as a W3C *[Technical Report](http://www.w3.org/TR/)*
-   ED = Editor's Draft
-   WG Note = [Working Group Note](http://www.w3.org/2005/10/Process-20051014/tr.html#tr-end)
-   FPWD = [First Public Working Draft](http://www.w3.org/2005/10/Process-20051014/tr.html#first-wd)
-   WD = [Working Draft](http://www.w3.org/2005/10/Process-20051014/tr.html#q73)
-   LC, LCWD = [Last Call](http://www.w3.org/2005/10/Process-20051014/tr.html#last-call) (Working Draft)
-   CR = [Candidate Recommendation](http://www.w3.org/2005/10/Process-20051014/tr.html#cfi)
-   PR = [Proposed Recommendation](http://www.w3.org/2005/10/Process-20051014/tr.html#cfr)
-   REC = [Recommendation](http://www.w3.org/2005/10/Process-20051014/tr.html#rec-publication)

-   TF = [Test Facilitator](http://www.w3.org/2008/webapps/wiki/Approval#Roles)

-   No Formal Pub = the document has not yet been formally published by the W3C as a *[Technical Report](http://www.w3.org/TR/)*.

