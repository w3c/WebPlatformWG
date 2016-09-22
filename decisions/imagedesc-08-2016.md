# Working Group Decision on referencing the Image Description (longdesc) extension in HTML

## Question before the working group

The HTML 5.1 draft added normative references to the Image Description (longdesc) Recommendation including IDL definitions. The [CfC issued on 5 August 2016](https://lists.w3.org/Archives/Public/public-html/2016Aug/0001.html) proposed:

1. Remove the longdesc attribute from the table of attributes in HTML core.
2. Remove the IDL information for the longdesc attribute from HTML core.
3. Keep the longdesc examples in HTML core.
4. Create a WG Note listing known extension specifications.
5. Include a link to the HTML Extension Specifications Note from HTML 
core (probably in the index).

## Consensus

There were expressions of support and no objections for #1, #2, #4, and #5. These steps reflect the consensus of the group.

## Objections

There was disagreement on #3 namely whether to keep non-normative examples for longdesc in the specification. In summary, the concerns raised here are:

* Some people indicated that the HTML 5.1 spec should not include examples for technology that is not normatively defined in the spec itself.
* Some people indicated that non-normative examples necessarily rely on technology that is not defined in the spec, though no examples were cited.
* Some people indicated that editors should have editorial freedom over non-normative text including examples.

Separately, a concern was raised that whatever decision was taken for longdesc should also apply to other features such as RDFa and the rev attribute.

## Decision of the Working Group

### Principles

The Working Group has not yet chosen an approach for how to modularise the HTML specification. This topic will be discussed at TPAC 2016. Until this is decided, the chairs intend to implement the following principles:

  * The Working Group SHOULD NOT incorporate features from HTML Extension Specifications that have independently reached Recommendation status into the main HTML Specification.

  * The Working Group SHOULD maintain a list of applicable HTML Extension specifications as a Working Group Note.

In addition:

  * The Working Group provides editors the freedom to enhance specifications with non-normative text that improves readability and makes documents easier to understand without seeking approval from the working group. However, members of the Working Group MAY express an opinion on this text and seek consensus to change it.

### Summary of Arguments

In the judgement of the chairs, the strongest argument for not incorporating longdesc in informative examples is that the feature does not exist in the HTML 5.1 specification and isn't necessary for the rest of the example to be valid. It may be true that some examples rely on technology not defined in HTML 5.1 but in general this should only be done when it is necessary for the example to be easily comprehended.

In this case, the weakest argument for leaving the informative examples intact was that this is a decision left to the editorial team. While we don't intend to micro-manage the great editorial work contributed by the editors, in this instance the argument to avoid technology defined elsewhere if feasible is more persuasive.

By applying the principles above, we must consider whether other parts of the HTML 5.1 draft also incorporate features from other W3C Recommendations. The chairs agree that the RDFa examples are part of a Recommendation and must also be removed.

The `rev` attribute was previously [described in HTML 5.0](http://www.w3.org/TR/html5/links.html#link-type-author) and the HTML 5.1 draft defines this content attribute in a more formal way. The `rev` attribute does not need to be removed.

### Decision

The Web Platform Working Group adopts parts #1, #2, #4, and #5 of the CfC proposal. Further, the Web Platform Working Group rejects #3 and adopts the decision to remove longdesc from the examples in HTML 5.1. This reverts the document to the same state as HTML 5.0 for this issue.

The Web Platform Working Group will also apply this decision to RDFa and will remove the RDFa examples.

### Next steps

The chairs will ask the editors to remove the longdesc content that was added through PR [#441](https://github.com/w3c/html/pull/441) and PR [#449](https://github.com/w3c/html/pull/449) and the similar RDFa content.

The chairs and Team will work with the editors will to create a Working Group Note listing the applicable HTML extension specifications.

### Appealing this Decision

If anyone feels they have not received due process, or that their concerns have not being duly considered in the course of reaching this decision, they may make their concerns known to the Team Contact (Philippe Le Hegaret) who will notify the Director.

If anyone strongly disagrees with the content of the decision and would like to raise a Formal Objection, they may do so at this time. Formal Objections are reviewed by the Director in consultation with the Team. Formal Objections are normally reviewed as part of a transition request.
