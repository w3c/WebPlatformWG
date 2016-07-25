<html>
<head>
<meta charset="utf-8">
<title>29 July 2016 HTML Editing meeting</title>
</head>
<body>
<h1>Editing meeting - 29 July 2016</h1>

<p>This will be hosted by Google in the Bay Area.</p>

<h2>Expected attendees</h2>

<h3>Will attend</h3>

<ul>
<li>Chaals</li>
<li>Gary Kacmarcik (Google)</li>
<li>Morgan Smith (ephox)</li>
<li>L&eacute;onie Watson (TPG)</li>
<li>Grisha Lyukshin (Microsoft)</li>
<li>Nirankush Panchbhai (Microsoft)</li>
<li>Chong Zhang (Google)</li>
<li>Dave Tapuska (Google)</li>
<li>Johannes Wilm (Invited Expert)</li>
</ul>

<h3>Hope to attend</h3>
<ul>
</ul>

<h2>Agenda</h2>
<dl>
<dt>Dragging and dropping</dd>
<dd>What should the order of the events be and in what spec
should this be placed?</dd>
<dt>Clipboard events</dt>
<dd>Should paste and cut have beforeInput events?</dt>
If so, should these be cancelable? Only in cE=events or also in cE=true?</dd>
<dd>Should copy also have a beforeInput event? What if there is no
editing host involved?</dd>
<dt>History handling (undo/redo)</dt>
<dd>What should the relationship between browser-controlled editing history
and beforeInput event be? Should redo/undo have beforeInput events?</dd>
<dd>If JS handles beforeInput events, should the browser try to figure out
what changes were made? Is that technically possible?</dd>
<dt>Non-cancelable event</dt>
<dd>Previously we talked about the beforeInput event not being cancelable
during a composition. With the splitting of the event into one part in the
ui-events spec and the other in the Input events spec, the cancelable
attribute is in the ui events spec and the isComposing is in the Input
events spec. In the ui-events spec the event is marked as always being
cancelable. Will this work, or do we need to specify that it is not
cancelable during composition?</dd>
<dt>static ranges</dt>
<dd>A < href="https://github.com/w3c/editing/issues/104">non-finalized proposal</a>
was made at the browser meeting in January, and there is
<a href="https://github.com/w3c/editing/issues/104">FrozenArray</a> (?)</dd>
<dd>We have moved back and forth between ranges on most beforeInput events
or only using it if it differs from the current selection. We need to
decide one.</dd>
<dt>Opt-in/opt-out of editing features and menus</dt>
<dd>Context menus currently exist for formatting (on Safari) and for clipboard
related actions (other browsers)<dd>
<dd>These three points could possibly be combined into a proposal that works
for everyone
<ul>
<li>JS editor developers have asked for a way to be able to disable
context menus (especially on mobile).</li>
<li>Hallvord Steen (Clipboard API) has defined a way to define how to
disable clipboard actions in the standard context menu (beforeCopy,
beforePaste, etc. events which are triggered at the moment the menu is
potentially shown) but he is not happy with the implementation and wonders
if we could do something better in the editing taskforce.</li>
<li>It was <a href="https://github.com/w3c/editing/issues/93">proposed</a>
at the editing meeting at TPAC to create a way to opt-in/out of
features which would then also disable/enable corresponding
editing menus</li>
<li>Which spec should this go into? (input events being one option)</li>
</ul>
</dd>
<dt>Relation to execCommand</dt>
<dd>Does it really make sense to try to
<a href="https://github.com/w3c/editing/issues/79">cover all execCommand
commands with beforeInput types</a>? How about "copy" which doesn't
change the DOM, or commands such as "insertImage" or "foreColor" which
will recreate custom UI anyway?</dd>
<dt>Publishing</dt>
<dd>It would be good to get First Public Working Drafts of the things
we are working on</dd>
</dl>


<p>Please add your name, and agenda requests here by <a href="https://github.com/w3c/WebPlatformWG/blob/gh-pages/meetings/16janWC.md">editing a branch and making a Pull Request</a>, or by mail in the public-webapps mailing list - which will result in it being posted here - or to the chairs of the Web Platform group - in which case it won't be posted publicly.</p>

<h2>Background reading</h2>
<p>…</p>

<h2>Logistics</h2>

<dl>
<dt>Date</dt>
<dd>July 29th 2016</dd>
<dt>Time</dt>
<dd>9.30am to 4.30pm
<br>
Meet in the lobby at 9.30am to register (breakfast  closes at 10am)</dd>
<dt>Location</dt>
<dd>Google 6th floor (Yancy's saloon)
<br>
345 Spear street
<br>
San Francisco</dd>
<dt>Remote Participants</dt>
<dd>
<ul>
<li>VoIP: Join WebEx meeting - URL to be provided soon.</li>
<li>Phone: +1-617-324-0000 (US Toll Number), 645770213 (access code).</li>
<li>Meeting number: To be provided</li>.
</ul>
</dd>
</dl>

</body>
</html>
