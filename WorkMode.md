# Work mode

This document defines and describes the Web Platform WG's *Real Work Modes* including: Participation and Communication, Meetings, Call for Consensus, Mail List usage, links to important resources, etc.

**Note the [WG's Charter](https://www.w3.org/2016/11/webplatform-charter.html) formally defines the general framework of the group's working mode. In all cases, the Charter and/or the [W3C Process Document](https://www.w3.org/Consortium/Process/) overrides the information in this document. Nevertheless, document contains additional information about how the group *really* works and as such, this information may be particularly useful to new members of the group.**

This document is a *Living Document* and as such will change. Members of the group are encouraged to edit (e.g. to update, correct, etc.) the information in this  document. Comments about this document are welcome via the <code>[public-webapps@w3.org](mailto:public-webapps@w3.org)</code> e-mail list, using a subject prefix of <code>[WorkMode] ...</code>.


## Participation and Communication

The group's formal Participation and Communication models are documented in the [Participation](https://www.w3.org/2016/11/webplatform-charter.html#participation) and [Communications](https://www.w3.org/2016/11/webplatform-charter.html#communication) sections of its Charter, respectively.

Strictly speaking, only the Chairs and Editors have firm participation requirements. However, all WG members are strongly encouraged to participate in all of the [specifications in progress](https://www.w3.org/WebPlatform/WG/PubStatus).

A WG member may participate in various ways including:

* Participating in discussions on the group's mail lists (see below), and/or a specification's Github repository
* Participating in discussions on the group's #webapps IRC channel
* Being an Editor of one or more of the group's [active specifications](https://www.w3.org/WebPlatform/WG/PubStatus)
* Contributing tests for the group's [specifications](https://www.w3.org/WebPlatform/WG/PubStatus)
* Attending any of the group's [formal meetings](Meetings.md)

A WG member is only added to the group's list public-webapps@w3.org . Other mailing lists listed below have to be subscribed to manually.


Participation from the Public (i.e. non group members), via our Public e-mail lists is also welcome, provided comments, contributions, etc. are consistent with the W3C Patent Policy.

NOTE: Participations


* [public-webapps](http://lists.w3.org/Archives/Public/public-webapps/) - for **all** technical and test-related discussions except for the topics covered by another e-mail list below. WG members are automatically subscribed to this list.
* [public-html](http://lists.w3.org/Archives/Public/public-html/) - for **HTML** technical and test-related discussions except for the topics covered by another e-mail list below
* [public-script-coord](http://lists.w3.org/Archives/Public/public-script-coord) - for discussions about the Web IDL spec and ECMA TC39 coordination
* [www-dom](http://lists.w3.org/Archives/Public/www-dom/) - for discussions about the group's DOM specs
* [public-editing-tf](http://lists.w3.org/Archives/Public/public-editing-tf/) - for discussions about [Editing APIs](http://w3c.github.io/editing/).
* [public-webapps-bugzilla](http://lists.w3.org/Archives/Public/public-webapps-bugzilla/) - this list gets an e-mail for **every** one of the group's Bugzilla events. (*Note: this list used to have a relatively large amount of e-mail, peaking with over 700 messages in one month during 2013.*)
* [public-webapps-github](http://lists.w3.org/Archives/Public/public-webapps-github/) - this list gets an e-mail for all Github activity regarding the group's specs. (*Note: this list has a relatively large amount of e-mail, with over 1,700 messages in July 2015.*)
* [public-test-infra](http://lists.w3.org/Archives/Public/public-test-infra/) - for testing infrastructure discussions

## Information for *Newbies* - New Group Members

**New members of the group are strongly encouraged to read the group's [*Newbie*](Newbie.md) document which includes links to important resources.** New members are also encouraged to send a short introductory e-mail to the group's [primary mail list](https://lists.w3.org/Archives/Public/public-webapps/).

## The Technical Reports Process (What is an Editor's Draft?)

The [W3C Process Document](https://www.w3.org/Consortium/Process/) formally defines the [Technical Report Process](https://www.w3.org/2015/Process-20150901/#Reports) this group follows.

This group uses **Editor's Drafts** (ED) which, as the name indicates, is simply the latest version of a specification an Editor maintains. An ED should be thought of as the *tip of the tree* i.e. a work in progress that may change at any point in time.

EDs are **not** formal publications by the W3C and as such, the [W3C Process Document](https://www.w3.org/Consortium/Process/) does not explicitly define their requirements (f.ex. there are no specific rules for references or style).

**Those with a vested interest in a specification e.g. implementers and application developers, should use a spec's Editor's Draft and not a dated version of the ED that was published as a Working Draft in the W3C's *[Technical Reports repository](https://www.w3.org/TR/)*.**

The W3C's 2015 Process Document indicates that if [6 months elapse](https://www.w3.org/2015/Process-20150901/#revised-wd) without significant changes to a specification a Working Group SHOULD publish a revised Working Draft, whose status section SHOULD indicate reasons for the lack of change.

## Editors

**Editors in this Working Group have wide freedom to update (add, change, delete) text in Editor's Drafts without explicit consensus from the group. This method is referred to as *Edit First and Review Later* and is contrary to other WGs that follow a *Review First and Edit Later* editing model. Despite this policy, when a substantive change is made to a specification (for example, adding or removing a feature, adding a normative reference, etc.), Editors are expected to create a *paper trail* for the change such as creating a bug report and/or notifying the appropriate e-mail list.**

Does this editing work mode mean WG members' input is not taken into account? **No.** Editors are expected to consider all inputs and to reflect that input in the ED.

**Note: before the WG formally publishes a specification as a First Public Working Draft, Last Call Working Draft, Candidate Recommendation or Proposed Recommendation,  (i.e. a copy of the spec is placed in the [Technical Reports repository](https://www.w3.org/TR/)), WG members will be asked if there is consensus to publish the specification (as described in this document's *Call for Consensus* section).**

Resources:

* [SpecEditing](SpecEditing.md) includes information about spec editing, including Editor roles and responsibilities, and links to the various document validators.

## Normative References

A significant delay in the progression of a specification can occur if the features of a normative reference are not considered *stable*. More specifically, if specification A uses features in normative reference B, the features of B must be considered *stable* before specification A can be published as a W3C Recommendation.

The following documents provide information about normative reference best practices and policy:

* [Best Practices for Normative References](https://www.w3.org/wiki/References/BestPractices)
* [Normative Reference Policy](https://www.w3.org/2013/09/normative-references)

## Bugs, Issues and Actions

The WG uses both Github and W3C Bugzilla to record and track specification *bugs* and *issues*. The recommended and preferred mechanism is to use Github Issues. Bugzilla usage will eventually be phased out.

Resources:

* [Git repositories](https://github.com/orgs/w3c/teams/webplatform/repositories)
* [Bugzilla Components](https://www.w3.org/Bugs/Public/describecomponents.cgi?product=WebAppsWG)

## Patent Policy

The WG's Charter defines the [Patent Policy for this group](https://www.w3.org/2016/11/webplatform-charter.html#patentpolicy):

> This Working Group operates under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy-20040205/) (5 February 2004 Version). To promote the widest adoption of Web standards, W3C seeks to issue Recommendations that can be implemented, according to this policy, on a Royalty-Free basis.

For more information about disclosure obligations for this group, please see the [W3C Patent Policy Implementation](https://www.w3.org/2004/01/pp-impl/).

A consequence of the group's Patent Policy is that, although comments from non-WG participants are welcome, in general, specific input contributions for the group's specifications from non-WG participants are not permitted. See the W3C Patent Policy FAQ titled [*How should Working Groups handle contributions from non-participants (e.g., meeting guests or on public lists)?*](https://www.w3.org/2003/12/22-pp-faq.html#non-participants) for more information about contributions from non-WG participants. Non-WG participants may contribute to the group's specifications if they have agreed to the terms in [*Licensing commitments from non-W3C Members*](https://www.w3.org/2004/01/pp-impl/83482/nmlc).

## Meetings? What Meetings?

Most of the group's specification work progresses without formal meetings. Instead, **all of the technical work is done via the group's various mail lists, Github Issues (see the [group's Github repositories](https://github.com/orgs/w3c/teams/webplatform/repositories)), [Bugzilla bug databases](https://www.w3.org/Bugs/Public/describecomponents.cgi?product=WebAppsWG) and IRC**.

**Editors and active collaborators are encouraged to have spec-specific distributed meetings (voice conferences) to discuss high priority bugs, to gather input on a specific topic, etc**.

To facilitate broad participation in these meetings including participants from across the globe, please note:

### Virtual meetings (aka distributed meetings, teleconf, etc.)
* Meetings must be announced on the relevant e-mail list **at least 24 hours** before the meeting will begin and **much earlier is highly recommended** (according to the [relevant bit of W3C Process](//www.w3.org/2015/Process-20150901/#GeneralMeetings) there **should** be at least **one week**).
* The announcement should include a day + time that is acceptable to the expected participants. If that information is not known, a related discussion should begin before the meeting announcement such that a mutually agreeable time is known when the meeting is announced.

### Physical meetings (aka face-to-face meetings)
* For Face-to-face (f2f) meetings, there **should** be **8 weeks** notice of the city and date/time. Exact venue information is not required so early, but it is helpful especially in large cities so people traveling can get appropriate accommodation.
* The chairs and staff can help organise invitations for people who need them to obtain a visa, given sufficient notice.
* The consortium usually has an annual "['Technical Plenary and All Working Group](//www.w3.org/2002/09/TPOverview.html)* face-to-face (f2f) meeting week (aka *TPAC*) and this group typically has a f2f meeting during that week. The dates/locations are generally known a year or more in advance, and historically WebApps has met on the first 2 days of the event.

### All meetings
* Per the group's charter: [*Any resolution taken in a face-to-face meeting or teleconference is to be considered provisional until 10 working days after the publication of the resolution in draft minutes sent to the working groups mailing list. If no objections are raised on the mailing list within that time, the resolution will be considered to have consensus as a resolution of the Working Group.*](//www.w3.org/2016/11/webplatform-charter.html#decisions)
* The meeting must use the W3C's #webapps IRC and the [RRSAgent Meeting Minute bot](//www.w3.org/2002/03/RRSAgent)
* The meeting may use the consortium's VOIP system and requests to reserve a slot with the system should be sent to [team-webplatform@w3.org](mailto:team-webplatform@w3.org) at least 48 hours before the meeting starts.
* Within 48 hours of the meeting ending (although sooner is preferred), the meeting's minutes must be sent to the e-mail list used in the meeting's announcement.


### Meeting observers
It is possible for people who are not members of the Web Platform WG to attend meetings as observers. Non-members have not made any commitment to provide standard W3C royalty-free licensing, so non-members are restricted to observer status only.

Observers may listen, and participate in general discussions during the meeting. However, they must not make technical contributions, or attempt to influence an approach to a feature that may become part of the specification being discussed.

If the attendee works for a W3C member company, they are encouraged to ask their Advisory Committee (AC) representative to make them a Web Platform WG participant. Alternatively, their AC representative can make a formal [royalty-free licensing commitment](https://www.w3.org/2004/01/pp-impl/83482/join). They can then fully participate in the meeting.

Please note that this is to provide as much protection as possible through the W3C Patent Policy. We take the royalty-free status of W3C standards very seriously, and any attempt to work-around these basic requirements would be considered a serious breech of meeting participation.

Resources:

* [Meetings](Meetings.md) contains: information about the group's formal meetings including upcoming meetings,  links to previous f2f meetings, schedules for semi-regular topic-specific virtual meetings.
* [IRC and Meeting Resources](Meetings.md#irc-and-meeting-resources)

## Consensus and Call for Consensus

Consensus is a very important part of the W3C process and is [formally codified in the Process Document](//www.w3.org/2015/Process-20150901/#Consensus) as follows:

> Consensus is a core value of the W3C. To promote consensus, the W3C process requires Chairs to ensure that groups consider all legitimate views and objections, and endeavor to resolve them, whether these views and objections are expressed by the active participants of the group or by others (e.g., another W3C group, a group in another organization, or the general public).

Since most of the group's work is done without formal meetings, the group uses a *Call for Consensus* (aka CfC) mechanism to formally gather input on a specific question such as *Is spec X ready to be published as a First Public Working Draft?*. **When a CfC is issued, an explicit response from WG members is preferred and note that the lack of a response will always be considered assent i.e. agreement with the proposal.**

CFCs are conducted on Github. An issue is opened on the repo for the specification, and a notification email sent to public-webapps@w3.org to let the WG know. The Github issue and email will have a subject line that starts with "CFC" and includes both the subject of the CFC and the closing date.

Strictly speaking, a formal CfC is not needed to publish a new Working Draft of a document. Consequently, the group does not conduct a CfC when an Editor would like to publish a new WD (as a Technical Report). However, when an Editor does want to publish a new WD, we expect the publication to be preceded by an announcement on the relevant Public list. We typically title these announcements as *Public Service Announcement* (PSA) and the PSA is made by a Chair ([example PSA](http://lists.w3.org/Archives/Public/public-webapps/2014JulSep/0540.html)).

## Mail List Policy, Usage, Etiquette, etc.

The Consortium has formal Mail List policies and procedures yet also accommodates some flexibility on how mail lists are used:

> Each W3C mailing list has its own policies regarding who may post to the list. Those subscribed to each list are generally able to post directly to the list without delay; those who are not may be subject to manual moderation (at least the first time they post.)

See [W3C Mailing List and Archive Info](//www.w3.org/Mail/) and [W3C Guidelines for Email Attachment Formats](//www.w3.org/2002/03/email_attachment_formats.html) for more information.

<span style="color:#ff0000">**Group members appreciate and encourage frank technical discussions on its mail lists but all discussions must be done in a respectful manner. Please note this respect requirement is codified in the Process Document via the following participation criteria "[Social competence in one's role](//www.w3.org/2015/Process-20150901/#ParticipationCriteria)". Additionally, see [Code of Ethics and Professional Conduct](//www.w3.org/Consortium/cepc/) and if you did not attend *Kindergarten*, we expect our list participants to adhere to the basic principles in [All I Really Need To Know I Learned In Kindergarten](http://www.peace.ca/kindergarten.htm).**</span>

We also expect our mail list participants to adhere to the following email etiquette:

* Messages should be encoded using [plain text](http://en.wikipedia.org/wiki/Plain_text). Formats using [*rich text*](https://en.wikipedia.org/wiki/Rich_Text_Format) will be lost by the list archives and appear poorly to many readers before they get that far.
* Messages should not use [top-posting](http://en.wikipedia.org/wiki/Posting_style#Top-posting). See the [WHATWG's top-posting guidelines](http://wiki.whatwg.org/wiki/FAQ#Should_I_top-post_or_reply_inline.3F) for more information as well as this [email from Tobie Langel](http://lists.w3.org/Archives/Public/public-webapps/2012AprJun/0999.html) for more information about top-posting and Outlook and Outlook Express.
* Subjects should be prefaced with the *short name* of the spec (for example: * [DOM4] Blah, Blah, Blah*)
* When you reply to a message, please use ">" as your quotation character.
* Do not prefix your content with something like "[myname]". Your content will be visible to everyone because it will *not* be prefixed by the quotation character (">").
* Do not write at the top "comments inline". People will know your comments are inline.
* Do strip quoted text which is not relevant to your reply.
* Do not write in ALL CAPS. It is considered bad form. If you need to _underscore_ something, you can do so as such, if you wanted to *strengthen* something you can similarly, and if you want to provide a certain /italic/ style, you may do that as well.
* Your messages are archived. If you need to include links within your message, please use [n] notation inline (f.e.x [1]), and include the relevant links at the end of the message.
* Attachments must follow the [W3C Guidelines for Email Attachment Formats](//www.w3.org/2002/03/email_attachment_formats.html), in particular:
** Avoid unnecessary email attachments.
** Use an attachment only when it is likely to benefit to recipients. Otherwise, place the information (in plain text format) in the body of your message.
** If an attachment is necessary, avoid formats that are virus prone, proprietary or platform dependent.  For example, whenever possible you should use HTML instead of MS Word, PowerPoint or PDF.
** Follow [Web Content Accessibility Guidelines](//www.w3.org/TR/WAI-WEBCONTENT/) (WCAG)

## Off-Topic Discussion Policy

The group's [mail lists](#participation-and-communication) are only to be used for technical discussions of the group's specifications and related resources such as test cases.

**Discussions related to general W3C-wide processes and policies are not appropriate for any of the group's mail lists and as such, discussions on those subjects are considered "off-topic"**.

Here is a list of documents and topics that are explicitly off-topic for the group's mail lists, including one or more appropriate discussion forums that may be used:

* **[W3C Document and Software License](http://www.w3.org/Consortium/Legal/copyright-software) and Copyright issues**:  the [Revising W3C Process Community Group](//www.w3.org/community/w3process/); the [W3C Advisory Board](//www.w3.org/2002/ab/); the [W3C Advisory Committee](//www.w3.org/2005/10/Process-20051014/organization#AC)
* **[W3C Process Document](//www.w3.org/2015/Process-20150901/):** the [Revising W3C Process Community Group](//www.w3.org/community/w3process/); the [W3C Advisory Board](//www.w3.org/2002/ab/); the [W3C Advisory Committee](//www.w3.org/2015/Process-20150901/#AC)
* **[W3C Patent Policy](//www.w3.org/Consortium/Patent-Policy-20040205/):** the [Revising W3C Process Community Group](//www.w3.org/community/w3process/); the [Patent and Standards Interest Group](//www.w3.org/2004/pp/psig/)
* **[Technical Report Publication Rules](//www.w3.org/2005/07/pubrules) (Pubrules):** the [Revising W3C Process Community Group](//www.w3.org/community/w3process/)
* **Patents. Discussion about specific patents is explicitly prohibited.**

**We expect everyone using the group's mail lists to please respect this policy.**

## IRC

The group uses  different channels of the W3C's IRC system (irc.w3.org; port 6667) including:

* #webapps - for Public technical discussions; this channel is continuously [logged/archive](http://krijnhoetmer.nl/irc-logs/)
* #wam - for Member-confidential discussions; this channel is NOT logged and should NOT be used for technical discussions

An [HTML interface to the W3C's IRC system](http://irc.w3.org/) is available. See [Meeting Resources](Telcons.md#IRC_and_Meeting_Resources) for more information about the W3C's IRC system.

## Testing

The group's [charter](//www.w3.org/2016/11/webplatform-charter.html) mandates the WG create *a comprehensive test suite for all features of a specification is necessary to ensure the specification's robustness, consistency, and implementability, and to promote interoperability between User Agents*. The group uses the W3C's <code>[web-platform-tests](https://github.com/w3c/web-platform-tests)</code> Github repository for all of its test suites. The group's tests use the <code>[wg-webplatform](https://github.com/w3c/web-platform-tests/labels/wg-webplatform)</code> label.

Resources:

* <code>[web-platform-tests](https://github.com/w3c/web-platform-tests)</code> Github repository
* *Test Facilitators* - each spec's *Test Facilitator* is identified in the *Testing* column of the group's [PubStatus](https://www.w3.org/WebPlatform/WG/PubStatus) document

## Github

The group uses [Github repositories](https://github.com/orgs/w3c/teams/webplatform/repositories) for all of its [specifications](https://www.w3.org/WebPlatform/WG/PubStatus) and all of its [testing resources](https://github.com/w3c/web-platform-tests) (including test suites).

Resources:

* [Github home](https://github.com/)
* [W3C's Github root](https://github.com/w3c)
* [web-platform-tests](https://github.com/w3c/web-platform-tests) - root of the consortium's test repository
* [public-webapps-github](http://lists.w3.org/Archives/Public/public-webapps-github/) - archive of the group's github activity

## Links to Group Resources

* [Github](https://github.com/w3c/WebPlatformWG/)
* [Charter](//www.w3.org/2016/11/webplatform-charter.html)
* [Publication status](https://www.w3.org/WebPlatform/WG/PubStatus)
* [WG participants list](http://www.w3.org/2000/09/dbwg/details?group=83482)
* Public mail list archives: see [above](#participation-and-communication)
* [Member-Confidential mail list archive](http://lists.w3.org/Archives/Member/member-webapps/)
* Actions, Issues and Bugs ...
   * [Bugzilla Database](https://www.w3.org/Bugs/Public/describecomponents.cgi?product=WebAppsWG); only used by a few specs
* Telcon/Voice Conference info: [Distributed Meetings / Telcons](Meetings.md#distributed-meetings-aka-telcons)
* Face-to-face Meetings: [upcoming and past meetings](Meetings.md)
* [Coordination Points](Coordination.md); identifies W3C WGs and external organizations with mutual areas of interest
