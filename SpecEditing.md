This document contains information and links that may be useful for Editors of [Web Platform specs](PubStatus.md), including information about publishing a document as a [W3C Technical Report](https://www.w3.org/TR/), often called **TR** (and the document is said to be *published in* **/TR/**).

<span style="color:#ff0000">**This document is a WorkInProgress and as such is subject to change. Members of the [Web Platform Working Group](WorkMode.md) as well as the W3C community are encouraged to update and maintain this document!**</span>

### Spec Editor Roles and Responsibilities

Besides the mechanics of specification authoring, Web Platform specification Editors also have other roles and responsibilities including:

-   Making sure their specification(s) reflect consensus of **all** commenters, not just WG members (see [Web Platform Consensus WorkMode](WorkMode.md#consensus-and-call-for-consensus) and [Web Platform Editor WorkMode](WorkMode.md#editors) for more information)
-   Making sure someone in the WG (not necessarily the Editor) responds to all comments submitted to their specification(s)
-   Tracking comments when a specification is considered functionally complete and a request for [wide review](http://www.w3.org/2015/Process-20150901/#wide-review) has been made (typically this done before a Candidate Recommendation is published).
-   Making a specification *[Pubrules](https://www.w3.org/2005/07/pubrules) compliant* before it can be published as a [Technical Report](https://www.w3.org/TR/) (see below for details)
-   Assuring their specification(s) [PubStatus](https://www.w3.org/WebPlatform/WG/PubStatus) data is accurate and current
-   Helping the Chairs and Team Contact find testing resources for the spec
-   Use the [W3C Software and Document license](https://www.w3.org/Consortium/Legal/copyright-software)

With respect to bug processing, expectations for Editors include:

-   When a bug is closed with a *fix*, include in the bug a link to the fix's patch/changeset

### TR Publication Rules

The W3C's *Publication Rules* (aka [*PubRules*](https://www.w3.org/2005/07/pubrules)) defines the requirements for documents published as a [W3C *Technical Report*](https://www.w3.org/TR/) (TR). When a document meets all of the publication requirements it is said to be "''PubReady'".

-   [PubRules](https://www.w3.org/2005/07/pubrules) - defines the publication requirements for documents based on the maturity level of the document. For example, the requirements for a Working Draft are different than the requirements for a Candidate Recommendation as indicated in the [PubRules Filter](https://www.w3.org/2005/07/pubrules?uimode=filter). **A document must meet every PubRule requirement before it can be published in TR**.

-   [List of W3C Validators](https://www.w3.org/QA/Tools/); see also the [www-validator](http://lists.w3.org/Archives/Public/www-validator/) mail list archive

-   [How to Provide Feedback For the W3C Markup Validator](http://validator.w3.org/feedback.html)

-   W3C is deploying a new [publication system](https://github.com/w3c/echidna/wiki), aka Echidna. You might want to check it out.

### TR Publication Process and WebApps

The TR publication process is formally defined in [PubRules](https://www.w3.org/2005/07/pubrules). Here is a brief summary of the general steps and tasks used by WebApps:

-   Some member of the group (e.g. Editor, Chair, etc.) proposes a document be published as a TR
-   Chair starts a 1-week [Call for Consensus](WorkMode.md#consensus-and-call-for-consensus) (CfC) to publish the document. If the document is a *plain* WD there is no need for a CfC but some type of *heads up* (such as *PublicServiceAnnoucement* aka *PSA*) should be sent to the appropriate mail list(s).
-   If the document is a First Public Working Draft (FPWD):
    -   Chair will submit a Transition Request to the group's Domain Lead and the *Chairs* list. The main reasons for this step are: to make sure the document is within the WG's scope; to notify other WGs about the group's intention to make the publication and to get agreement on the document's *short-name* (e.g. www.w3.org/TR/*short-name*/).
-   **Note for ReSpec users**: *before doing any validation, a static version of the document must be created and the static version should be used with the validators. One way to create the static document is to: load the document in the Chrome browser; simultaneously press the Ctrl+Alt+Shift+S keys; select "Save as HTML (Source)" and save the document (ReSpec has its own static output generator and it must be used).*
-   Someone (Editor, Chair or staff contact) prepares the document for publication per the *PubRules* by doing the following.
    -   **Run the *[PubRules Checker](https://www.w3.org/2005/07/pubrules)***. Check the [PubRules Filter](https://www.w3.org/2005/07/pubrules?uimode=filter) requirements and address all of the requirements for the specific publication type (e.g. FPWD, WD, CR, etc.)
-   **The document must pass at least the following Validators**. Note some validators (especially the CSS validator) may report errors that are not errors.See the [Validator Help Page](http://validator.w3.org/feedback.html) for information about how to get help with the Validators and how to report Validator bugs/issues.

1.  **[HTML Validator](http://validator.w3.org/)**
2.  **[CSS Validator](http://jigsaw.w3.org/css-validator/)**
3.  **[Link Checker](http://validator.w3.org/checklink)**
4.  **[Web IDL Validator](https://www.w3.org/2009/07/webidl-check)** - Run this if the document includes WebIDL and fix reported errors

-   Make sure the Status of This Document section includes the *Subject:* tag prefix to be used for comments (e.g. *[short-name] comment ...*)
-   Notify Chairs of staff contact when the document is PubReady
-   Chair or Team Contact will submit a Publication Request (aka *PubReq*) to the W3C's Publishing Team and Cc the document's primary Editor. The Publishing Team may ask the Editor to make some changes.
-   The document is published as a [TR](https://www.w3.org/TR/)

Notes about publications:

-   TR publications are only made on Tuesdays and Thursdays.
-   PubReqs must be sent at least two days before the requested publication date.
-   There are publication *blackout* dates at the end of the year, during the TPAC meeting week and during AC meeting weeks.

### Tools to Check Pubrules Compliance

The W3C maintains several online tools to check Pubrule compliance. For example, there is an HTML validation tool, CSS validation tool, link checker, etc.

A list of the online tools to check [Pubrules](https://www.w3.org/2005/07/pubrules) compliance is provided in:

-   [Online tools to check Pubrule compliance](https://www.w3.org/2003/Editors/#tools)

### Tools for Authoring W3C Specifications

Editors in Web Platform are free to choose their specification authoring tool(s). The most commonly used tool in Web Platform is [ReSpec](http://dev.w3.org/2009/dap/ReSpec.js/documentation.html) but there is no requirement that it be used.

A list of specification authoring tools is provided in:

-   [Spec Authoring Tools](https://www.w3.org/2003/Editors/#authoring)

### Comment Tracking

The WG is responsible for replying to all spec comments. Additionally, after a spec is published as a Candidate Recommendation, the spec's Editor (or some other member(s) of the group) is required to *track* the CR comments. The minimum requirements for tracking each comment is:

1.  A public record of all comments (URL of comment, commenter's name, comment date, etc.)
2.  A public record of the group's response to the commenter
3.  A public record from the commenter that indicates whether or not the commenter is satisfied with the group's response

There are several ways to track CR comments and there is no firm requirement on the exact mechanism used. Here are some different mechanisms with links to some examples:

-   Wiki document: [File API comment tracking](https://www.w3.org/wiki/Webapps/LCWD-FileAPI-20130912); [Touch Events comment tracking](https://www.w3.org/2010/webevents/wiki/TouchEvents-LCWD-13-Sep-2011)

-   HTML file: [DOM3Events comment tracking](http://dev.w3.org/2006/webapi/DOM-Level-3-Events/dc.html)

-   [W3C's Comment Tracking tool](https://www.w3.org/2006/02/lc-comments-tracker/42538/) used by some of the Widget specs

-   Text File: [Web IDL comment tracking](http://dev.w3.org/2006/webapi/WebIDL/lc1.txt)

Although it is not a firm requirement, **Editors are encouraged to include a link to the comment tracking in the Status section of the CR publication**.

### Miscellaneous Resources

Related resources (some may be a bit outdated):

-   [Manual of Style](https://www.w3.org/2001/06/manual/) - a *guide containing best current practice* re writing W3C specifications
-   [W3C Editor Home Page](https://www.w3.org/2003/Editors/) - a document that *tries to gather resources that can help Editors do their job*
-   [spec-prod Mail List](http://lists.w3.org/Archives/Public/spec-prod/) - used by Editors to discuss the TR publication process, issues, tools (e.g. ReSpec), etc.
-   [www-validator Mail List](http://lists.w3.org/Archives/Public/www-validator/) - used to discuss [Validator](https://www.w3.org/QA/Tools/) usage and bug reporting
-   [Organize a Technical Report Transition](http://services.w3.org/xslt?xmlfile=https://www.w3.org/2005/08/01-transitions.html&xslfile=https://www.w3.org/2005/08/transitions.xsl) - a How To guide for W3C specification transitions.
-   [Howto Spec](http://wiki.whatwg.org/wiki/Howto_spec) - WHATWG document that "*explains basic guidelines for writing a specification for the web platform*"; by Anne van Kesteren

