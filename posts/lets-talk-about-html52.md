# Let's talk about HTML5.2

With <a href="https://www.w3.org/TR/html51/">HTML5.1</a> on its way to W3C Recommendation, it is time to turn our attention to <a href="http://w3c.github.io/html/">HTML5.2</a>. We, the <a href="https://www.w3.org/WebPlatform/WG/">Web Platform Working Group (WebPlat WG)</a>, need to think about what HTML5.2 will look like, what it will achieve, and who will help make it happen.

## HTML5.1 retrospective

By the time the WebPlat WG was chartered in October 2015, the HTML specification had been largely dormant at W3C for almost a year. The HTML WG had made a commitment to publishing regular updates to the HTML specification, and this was a commitment we wanted to honour.

The HTML WG created the HTML5.1 specification to contain new features, when it forked to stabalise the HTML5.0 Recommendation. When the WebPlat WG inherited HTML5.1, discussions about new features and modularisation were deprioritised in deference to the goal of releasing HTML5.1 as a specification that better reflected reality, and to give the WebPlat WG time to firmly establish itself. 

One of the reasons work had stalled on HTML at W3C was the adoption of Spork (introduced after HTML5 reached Recommendation). Maintaining compatibility with the <a href="https://html.spec.whatwg.org/multipage/">WHATWG HTML</a> specification was considered a critical goal, and Spork was intended to facilitate this. It managed the delta between the WHATWG and W3C specifications, and applied changes to the W3C version. It was brittle and often failed, and it made editing HTML at W3C very labour intensive because it was necessary to edit the delta instead of editing the specification itself. As work resumed on HTML5.1, Spork was dropped and the editors returned to the manual process used during the time of HTML5 for monitoring the differences between the WHATWG and W3C HTML specifications.

At the same time, the editors chose to use <a href="https://github.com/tabatkins/bikeshed">Bikeshed</a> to manage the HTML specification. This resulted in an HTML5.1 specification that was the same as it had been during the final days of the HTML WG. This was done by pulling down a last copy of WHATWG, converting it to Bikeshed, then reapplying all the changes introduced with Spork. It could have been done the other way around, but this was the most pragmatic way to get the work done at the time.

The converted HTML5.1 specification was moved onto <a href="https://github.com/w3c/html/">Github</a>. It is the preferred platform for the WebPlat WG, and it is also the platform of choice for encouraging participation and contribution from the web platform community at large.

Now an HTML5.2 specification has been forked, and HTML5.1 has been stabalised with an emphasis on what is interoperable in implementations today.

## HTML5.2 questions

We are now in a good position to look at what happens next. HTML5.1 is an improvement on HTML5 (it isn't perfect of course, but it is a better reflection of reality on the web). It is easier to work on, easier to participate in, and easier to comment on than before.

We now have a critical mass of participants in the Web Plat WG. It took time for that to happen, but it means that we can be reasonably confident that discussions about HTML will be viable and inclusive. So what needs to be discussed?

### modularisation

We have the option to modularise the HTML specification. In other words to take chunks of related content out of HTML and turn them into specifications in their own right.

Two years ago (at TPAC) there was a lot of support for modularising the HTML specification. The HTML5.x specification is huge. We can be reasonably confident that much of it is stable and unlikely to change significantly (we are unlikely to redefine the meaning of ```<div>``` or ```<span>``` for example). Other chunks of HTML are revised in response to new features that are created in other specifications (clarifications and/or hooks required for the Web Components or WebAppSec 

The idea is that individual modules can be updated and progressed to Recommendation at different paces, based on the general stability of their content. Additionally it becomes easier for people to discover all the information about a particular thing in one document, instead of in many places scattered throughout the HTML specification.

Modularising the HTML specification is a serious undertaking however, and members of the WebPlat WG have said that a poorly modularised specification would be worse than the current HTML monolith. Modularisation must therefore be approached as a major engineering activity. Refactoring the HTML specification will mean a lot of work with minimal short-term gain, but the promise of easier work in the future.

Questions for the WG:
* Do we modularise the HTML specification?
* If yes, who will do the work?

### WHATWG

Keeping the differences between the W3C HTML and WHATWG HTML specifications to a minimum has been a chosen responsibility of the W3C in the belief that it benefits the web community. Now we have a reasonable amount of experience to draw upon, we know there are some architectural and philosophical differences between HTML at W3C and WHATWG that are factors in maintaining compatibility:

* Interoperability: Unlike the WHATWG, The W3C requires that every feature of HTML has reasonable interoperability. This is typically done by making sure any given feature is implemented in at least two shipping browsers.

* Stability: Whereas the WHATWG maintains a continuously updated "living standard" that instantly reflects change, the W3C releases stable updates to specifications like HTML at periodic intervals.

* Structure: Both W3C and WHATWG specifications are monolithic at the moment. The trend at WHATWG is to pull more features into the HTML monolith, whereas we at W3C are seriously considering breaking apart the monolith into smaller chunks.

There are benefits and drawbacks to the way both W3C and WHATWG do things. This is not intended to be a critique of either one, just a thumbnail sketch of the differences that will have an impact on maintaining compatibility between the two.

Questions for the WG:
* Do we continue to try minimising the differences between the two HTML specifications?
* If yes, what is the best way to make it happen?

### Incubation

New ideas are now incubated before they are formally adopted by the WebPlat WG (and other WGs). This means they are able to reach a reasonable level of maturity before being moved onto the Recommendation Track, and that the web community can feed into their early development without necessarily being a member of the W3C.

At the moment, many new ideas are being hatched in the <a href="https://www.google.co.uk/search?site=&source=hp&q=Web+Incubator+CG&oq=Web+Incubator+CG&gs_l=hp.3...1136.4000.0.4182.17.17.0.0.0.0.258.1850.4j8j2.14.0....0...1c.1.64.hp..3.12.1483.0..0j0i131k1j0i10k1j0i22i30k1j0i22i10i30k1.esX_TwNluGE">Web Platform Incubator Community Group (WICG)</a>. It is proving to be a positive place for substantial new features to flourish, and a safe place for ideas to fall by the wayside if they don't gain traction with implementors and authors.

It isn't clear how we should incubate other ideas though. It may make sense for ideas that extend existing HTML features, as opposed to those that suggest entirely new features, to be incubated within the WebPlat WG itself.

Questions for the WG:
* Where should ideas that extend existing HTML features be incubated?
* What does an incubated feature proposal for HTML look like?

## Next steps 

We will begin discussing these things at <a href="https://www.w3.org/2016/09/TPAC/">TPAC 2016</a>, on <a href="https://github.com/w3c/WebPlatformWG/blob/gh-pages/meetings/16-09-23TPAC-4.md">Friday 23 September</a>. If you will be at TPAC, please come and join the discussion. If you cannot make it to Lisbon, we will be posting minutes and other useful things just as soon as we all recover from the week!