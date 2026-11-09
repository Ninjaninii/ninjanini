---
title: 澗序 Jianxu
hook: Most focus tools try to block interruptions. Our interviews pointed to the damage that comes after.
metric: Best Research Award
summary: 'In our interviews, 14 of 20 people said the negative feeling after an interruption lowered their motivation. We read the literature as a team, and I designed the interface for a short guided reset.'
year: '2025'
role: UI design and research; pitch deck and poster
team: 6 students, 2 teaching assistants
context: OpenHCI 2025, a student-led HCI workshop in Taiwan
tools: ['Figma']
skills: ['Research', 'Product design', 'Storytelling']
featured: true
folderPapers: ['/work/jianxu/card.webp']
order: 2
cover: /work/jianxu/card.webp
coverCutout: true
coverAlt: Jianxu on a desktop screen, a one-minute meditation timer over rippling water with a koi
heroImage: /work/jianxu/hero.webp
heroAlt: Jianxu on a desktop screen, a meditation timer over rippling water with a koi
phonetic: ['jiàn', 'xù']
particles: /work/jianxu/koi.webp
glance:
  problem: Most focus tools try to block interruptions, and the category is crowded.
  turn: After our first discussion with the professor, we dropped our blocker plug-in as crowded and risky. Twenty interviews then pointed to what follows an interruption, so we designed for the return.
  result: Best Research Award, OpenHCI 2025.
draft: false
---

## Situation

<div class="credit">
<div><small>Together, all six of us</small><p>Developed the concept and the literature review — reading, arguing and consolidating as one team.</p></div>
<div><small>My part</small><p>Designed the UI, and produced the pitch deck and the poster.</p></div>
</div>

<b>OpenHCI</b> is Taiwan's longest-running student-led workshop on human–computer interaction. Mixed teams take an open research brief and turn it into a product concept.

<p class="jx-topic"><small>HCI topic · brief set by Prof. 畢南怡</small>Attention switching and workflow across multiple devices. Is a shift of attention only ever a disturbance — or could it be designed as a rhythm people can anticipate and control?</p>

<p class="jx-name">澗 <span>jiàn</span> — a mountain stream &nbsp;·&nbsp; 序 <span>xù</span> — order<span class="koi" aria-hidden="true"><img src="/work/jianxu/koi.webp" alt="" width="291" height="322" /></span></p>

**Block the interruption. Most focus tools already do.** Our first version joined the crowd: a browser plugin that blocks distractions before they reach the user.

## The turn

**Some interruptions cannot be blocked, and their damage comes after.**

<figure class="fig jx">
<span class="fig__t">What we found, and what we decided</span>
<div class="pairs">
<div><div class="pairs__q"><small>Finding</small><b>Existing products already covered blocking without solving the problem, and blocking notifications means asking for access to all of them.</b></div><i aria-hidden="true">&#8594;</i><div class="pairs__a"><small>Decision</small><span>After our first discussion with the professor, we dropped the plugin.</span></div></div>
<div><div class="pairs__q"><small>Finding</small><b>14 of 20 interviewees said the negative feeling after an interruption lowered their motivation to return.</b></div><i aria-hidden="true">&#8594;</i><div class="pairs__a"><small>Decision</small><span>We chose negative emotion as the step to design for.</span></div></div>
<div><div class="pairs__q"><small>Finding</small><b>The meditation literature reports lower stress and stronger attention, though it covers meditation at work in general, not a short session straight after an interruption.</b></div><i aria-hidden="true">&#8594;</i><div class="pairs__a"><small>Decision</small><span>A short guided reset before going back to work.</span></div></div>
</div>
</figure>

<figure class="fig jx">
<span class="fig__t">What an unplanned interruption leaves behind</span>
<span class="fig__s">Semi-structured interviews with knowledge workers, n = 20</span>
<div class="research">
<div class="research__chart"><svg viewBox="0 0 120 120" role="img" aria-label="14 of 20 interviewees, 70%, said the negative feeling after an interruption lowered their motivation to return"><circle cx="60" cy="60" r="48" fill="none" stroke="var(--accent)" stroke-width="18" stroke-dasharray="209.12 92.48" transform="rotate(-90 60 60)"><title>14 of 20: motivation dropped</title></circle><circle cx="60" cy="60" r="48" fill="none" stroke="var(--g-1)" stroke-width="18" stroke-dasharray="88.48 213.12" stroke-dashoffset="-211.12" transform="rotate(-90 60 60)"><title>6 of 20: did not report this</title></circle><text x="60" y="61" text-anchor="middle" class="donut__c">14 / 20</text><text x="60" y="74" text-anchor="middle" class="donut__s">interviewees</text></svg>
<ul class="research__legend"><li><i style="background:var(--accent)"></i><b>14</b> lost motivation to return to the task</li><li><i style="background:var(--g-1)"></i><b>6</b> did not report this</li></ul>
</div>
<div class="scenes">
<span class="scenes__t">Three typical reactions, summarised from the interviews</span>
<div><em>Self-doubt</em><p>Cannot control outside interruptions, reads that as a lack of self-discipline, and questions their own effectiveness.</p></div>
<div><em>Abandonment</em><p>Gets especially irritated when complex, deep work is broken off, and simply does not go back to it.</p></div>
<div><em>Guilt</em><p>Feels the time was wasted, and is left with guilt.</p></div>
</div>
</div>
<span class="fig__src">Source: the team's semi-structured interviews, conducted in Mandarin; reactions as summarised in the final presentation.</span>
</figure>

<p class="theory"><small>One way to read it · Bandura's self-efficacy</small>Self-efficacy is a person's belief that they can complete a given task. An interruption breaks the working context; if the person cannot pick it back up, that belief can drop, and the blame can turn inward.</p>

<figure class="fig jx">
<span class="fig__t">The key finding</span>
<span class="fig__s">The chain 14 of 20 interviewees described</span>
<div class="chain">
<div>Interrupted task</div>
<i aria-hidden="true">→</i>
<div class="on">Negative emotion<small>The step we chose to design for</small></div>
<i aria-hidden="true">→</i>
<div>Motivation drops</div>
</div>
<div class="hmw"><i aria-hidden="true">↓</i><div><small>How might we</small><b>Turn the negative emotion an unplanned interruption leaves behind into a positive experience the user can regulate?</b></div></div>
<span class="fig__src">Found through the 20 interviews, read against Cognitive Load Theory, Self-Determination Theory and Bandura's self-efficacy.</span>
</figure>

## The work

**A short guided reset before going back to work.** Jianxu is for self-paced knowledge workers, who rely on autonomy and tend to blame themselves when interrupted. The meditation literature reports lower stress and stronger attention, though it covers meditation at work in general, not a short session straight after an interruption.

Time Well Spent (Guillou et al., CHI 2020) found that knowledge workers judge their time on four things: what they worked on, how they worked, how they felt and how they took care of themselves. We turned each into one step of the guided meditation.

<figure class="fig jx">
<span class="fig__t">From research questions to meditation steps</span>
<ol class="seq">
<li><b class="seq__q">"What am I working on?"</b><i aria-hidden="true">→</i><b>Log the interruption</b><span>Name the task that was broken off</span></li>
<li><b class="seq__q">"How am I working?"</b><i aria-hidden="true">→</i><b>Notice the moment</b><span>Follow the guided meditation prompts</span></li>
<li><b class="seq__q">"How do I feel?"</b><i aria-hidden="true">→</i><b>Feel body and emotion</b><span>Acknowledge the state instead of suppressing it</span></li>
<li><b class="seq__q">"How do I take care of myself?"</b><i aria-hidden="true">→</i><b>Return to yourself</b><span>Go back to the task with a clear head</span></li>
</ol>
<span class="fig__src">Left: the four Time Well Spent dimensions, phrased as questions. Right: the step each one became in Jianxu.</span>
</figure>

<figure class="fig jx">
<span class="fig__t">The interface, screen by screen</span>
<span class="fig__s">The screens I designed, in the original Mandarin</span>
<div class="car">
<div class="car__track">
<figure><img src="/work/jianxu/screen-1.webp" alt="Jianxu's first screen: a form over rippling water with two questions and a Start meditation button" width="1600" height="1000" loading="lazy" /><figcaption><b>1 · Log the interruption</b>"Jianxu | find your work rhythm again." Two questions, each with an example to lower the effort: what were you working on before the interruption ("writing part three of the report"), and what made your work stop ("my manager had a new idea and wants the report redirected")? Then a single button: Start meditation.</figcaption></figure>
<figure><img src="/work/jianxu/screen-2.webp" alt="A meditation countdown timer with a Skip button on a soft peach gradient" width="1600" height="1000" loading="lazy" /><figcaption><b>2 · Meditate</b>A countdown ring and a single Skip button, nothing else on screen, while audio prompts walk through the four steps: log, notice, feel, return.</figcaption></figure>
<figure><img src="/work/jianxu/screen-3.webp" alt="Meditation complete: two cards listing work already done and where to resume, with the interruptions floating away as bubbles" width="1600" height="1000" loading="lazy" /><figcaption><b>3 · Return to the flow</b>The first card shows what was already done before the interruption — literature search finished, deck structure outlined, a first layout draft. The second suggests where to pick up: sort out the manager's comments, revisit the literature for an entry point, reopen the deck. The interruptions themselves — reply to manager, collect a parcel, an ad-hoc meeting — drift away as bubbles. One button: Back to work.</figcaption></figure>
</div>
<div class="car__nav"><button class="car__prev" type="button" aria-label="Previous screen">‹</button><button class="car__next" type="button" aria-label="Next screen">›</button><span class="car__count">1 / 3</span></div>
</div>
</figure>

<figure class="fig jx">
<span class="fig__t">Demo</span>
<span class="fig__s">1 min 32 s · Mandarin interface with guided audio</span>
<video class="fig__img" src="/work/jianxu/demo.mp4" poster="/work/jianxu/screen-2.webp" controls preload="none" playsinline></video>
</figure>

## Outcome

**Best Research Award, OpenHCI 2025.** The judges' stated reason was the depth of the literature grounding behind the concept. The workshop ended at a concept and demo, so whether Jianxu speeds recovery or restores confidence is still untested; the next step would be to compare it with a simple note of where you left off.

**The obvious answer is usually the most crowded one.** Blocking interruptions was the first idea we had precisely because it is what the entire productivity market already sells, which also made it the hardest place to stand out.

Going one layer deeper into the literature and the interviews is what revealed the opening: an overlooked part of the damage happens after the interruption, in the emotional state it leaves behind. That moved the problem from crowded prevention to less crowded recovery. Meditation was the vehicle; the reframe was the insight.

---

*A student workshop project, not a shipped product. The topic and the reading directions were set by the brief; the self-determination and meditation literature, the Time Well Spent framework and the design direction are the team's. Research was conducted in Mandarin with knowledge workers in Taiwan; participant reactions are summarised from the team's final presentation. Meditation evidence: International Journal of Research in Human Resource Management (2024), cited in the final presentation. Cognitive science has long studied how people resume interrupted tasks (e.g. Altmann &amp; Trafton, 2004); our focus was the emotional side.*
