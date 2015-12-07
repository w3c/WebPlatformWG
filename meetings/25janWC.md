<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>25 January 2016 Custom elements meeting</title>
 </head>
 <body>
  <h1>Custom elements meeting - <em>changed to 25 January 2016</em></h1>

  <p>This meeting is currently <em>proposed</em>, for the Bay Area (San Francisco / Silicon Valley). We are looking for a host (requirements: A room that can hold about 20 people, coffee/tea/snacks, somewhere we can have lunch, wifi).</p>

  <h2>Expected attendees</h2>

<h3>Will attend</h3>

  <ul>
   <li>Chaals</li>
   <li>Domenic Denicola</li>
   <li>Travis Leithead</li>
   <li>Elliott Sprehn</li>
  </ul>
  
<h3>Hope to attend</h3>
  <ul>
   <li>Hayato Ito</li>
   <li>Anne van Kesteren (if this coincides with the service worker meeting)</li>
   <li>Ryosuke Niwa</li>
   <li>Arron Eicholz</li>
   <li>Léonie Watson (coinciding with Service Worker meeting would be helpful)</li>
   <li>Daniel Buchner</li>
  </ul>

  <h2>Agenda</h2>
  <p>The agenda is to resolve outstanding issues for custom elements. It is also possible to request that Shadow DOM issues be added to the agenda.</p>
  <dl>
   <dt>What is the final design for base registration semantics, class/constructor integration/etc.?</dt>
   <dd>Google's current proposals include ["Constructor Dmitry"](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Constructor-Dmitry.md) from Domenic and the [backing swap proposal](https://lists.w3.org/Archives/Public/public-webapps/2015OctDec/0118.html) from Elliott which attempts to improve on Constructor Dmitry. Apple has a prototype that seems similar to Constructor Dmitry based on perusing their bug tracker but will presumably be clarified in a more formal proposal before the meeting. A lot of the complexity here comes from solving the "consistent world view" issue.</dd>
   
   <dt>What are the desired lifecycle hooks?</dt>
   <dd>The current spec's lifecycle hooks have attracted criticism in various issues (see e.g. [#286](https://github.com/w3c/webcomponents/issues/286)). What should the final set of hooks be?</dd>

   <dt>Inheriting existing semantics</dt>
    <dd>This is the problem that <code>is=</code> was intended to solve, but it isn't clear that it will do so in interesting cases. Do we have a useful proposal? (If not, this item is expected to take 1 minute…)</dd>
  </dl>


  <p>Please add your name, and agenda requests here by <a href="https://github.com/w3c/WebPlatformWG/blob/gh-pages/meetings/16janWC.md">editing a branch and making a Pull Request</a>, or by mail in the public-webapps mailing list - which will result in it being posted here - or to the chairs of the Web Platform group - in which case it won't be posted publicly.</p>

 </body>
</html>
