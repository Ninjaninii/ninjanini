---
title: 澗序 Jianxu
hook: Every productivity tool tries to stop you being interrupted. None of them help you come back.
metric: Best Research Award
summary: A focus-recovery concept for knowledge workers — designing the moment after an interruption, not the interruption itself.
year: '2025'
role: UI design and research; pitch deck and poster
team: 6 students, 2 teaching assistants
context: OpenHCI 2025 · Best Research Award
tools: ['Figma']
skills: ['UX research', 'Product concept', 'UI design']
featured: true
order: 2
cover: /work/jianxu/cover.webp
coverAlt: Jianxu on a desktop screen, a one-minute meditation timer over rippling water with a koi
heroImage: /work/jianxu/hero.webp
heroAlt: Jianxu on a desktop screen, a meditation timer over rippling water with a koi
phonetic: ['jiàn', 'xù']
draft: false
---

## Context

<b>OpenHCI</b> is Taiwan's longest-running student-led workshop on human–computer interaction. Mixed teams of computing, design and social-science students take an open research brief and turn it into a product concept.

<p class="jx-topic"><small>HCI topic · brief set by Prof. 畢南怡</small>Attention switching and workflow across multiple devices. Is a shift of attention only ever a disturbance — or could it be designed as a rhythm people can anticipate and control?</p>

## The name

<p class="jx-name">澗 <span>jiàn</span> — a mountain stream &nbsp;·&nbsp; 序 <span>xù</span> — order<span class="koi" aria-hidden="true"><img src="/work/jianxu/koi.webp" alt="" width="291" height="322" /></span></p>

> An interruption is not a break. Coming back to work can be like a stream that keeps flowing.

## The problem

**Being interrupted costs more than the time it takes.** Cognitive resources are finite (Cognitive Load Theory), so an unplanned interruption forces an expensive reallocation — felt as frustration and anxiety, not as lost minutes. The damage is the state you are left in afterwards.

## The obvious answer

**Block the interruption. Every focus tool already does.**

<figure class="fig jx">
<span class="fig__t">Where focus tools put their effort</span>
<div class="crowd">
<div><small>Before and during the interruption · Crowded</small><div class="chips"><span>Notification blockers</span><span>Website and app blockers</span><span>Focus timers</span><span>Do-not-disturb modes</span><span>Screen-time limits</span><span class="on">Our first version: a distraction-blocking plugin</span></div></div>
<i class="crowd__arrow" aria-hidden="true">→</i>
<div class="crowd__empty"><small>After the interruption</small><b>Largely ignored</b><span>No tool helps you come back</span></div>
</div>
</figure>

Our first version joined the crowd: a browser plugin that blocks distractions before they reach the user. We dropped it. It added little to a crowded category, and blocking notifications means asking for access to all of them — a real security risk for a focus tool.

So we went back to the research.

## Research

**One layer deeper: twenty interviews, and a pattern nobody names.**

<figure class="fig jx">
<span class="fig__t">What an unplanned interruption leaves behind</span>
<span class="fig__s">Semi-structured interviews with knowledge workers, n = 20</span>
<div class="research">
<div class="research__chart"><svg viewBox="0 0 120 120" role="img" aria-label="14 of 20 interviewees, 70%, said the negative feeling after an interruption lowered their motivation to return"><circle cx="60" cy="60" r="48" fill="none" stroke="var(--accent)" stroke-width="18" stroke-dasharray="209.12 92.48" transform="rotate(-90 60 60)"><title>14 of 20: motivation dropped</title></circle><circle cx="60" cy="60" r="48" fill="none" stroke="var(--g-1)" stroke-width="18" stroke-dasharray="88.48 213.12" stroke-dashoffset="-211.12" transform="rotate(-90 60 60)"><title>6 of 20: did not report this</title></circle><text x="60" y="61" text-anchor="middle" class="donut__c">14 / 20</text><text x="60" y="74" text-anchor="middle" class="donut__s">interviewees</text></svg>
<ul class="research__legend"><li><i style="background:var(--accent)"></i><b>14</b> lost motivation to return to the task</li><li><i style="background:var(--g-1)"></i><b>6</b> did not report this</li></ul>
</div>
<div class="scenes">
<span class="scenes__t">How they described it — every time, they blamed themselves</span>
<div><em>Self-doubt</em><p>"I couldn't stop the interruption, so I must lack self-discipline. I start questioning whether I'm good at my job."</p></div>
<div><em>Abandonment</em><p>"When deep, demanding work gets broken off, I'm so irritated that I just don't go back to it."</p></div>
<div><em>Guilt</em><p>"The time feels wasted, and I carry it around afterwards as guilt."</p></div>
</div>
</div>
<span class="fig__src">Source: the team's interviews, conducted in Mandarin; quotes paraphrased in translation.</span>
</figure>

<p class="theory"><small>Why they blame themselves · Bandura's self-efficacy</small>Self-efficacy is a person's belief that they can complete a given task. An interruption breaks the working context, the person cannot pick it back up, and their belief that they can finish drops. The blame turns inward.</p>

## The reframe

**The damage comes after the interruption, not before it.**

<figure class="fig jx">
<span class="fig__t">The key finding</span>
<span class="fig__s">The same chain appeared across the interviews</span>
<div class="chain">
<div>Interrupted task</div>
<i aria-hidden="true">→</i>
<div class="on">Negative emotion<small>The step no product treats</small></div>
<i aria-hidden="true">→</i>
<div>Motivation drops</div>
</div>
<p class="shift__label">So the problem shifts</p>
<div class="shift">
<div class="shift__from"><small>From</small><b>Preventing the interruption</b><span>Crowded</span></div>
<i aria-hidden="true">→</i>
<div class="shift__to"><small>To</small><b>Repairing what it leaves behind</b><span>Largely untouched</span></div>
</div>
<div class="hmw"><i aria-hidden="true">↓</i><div><small>How might we</small><b>Turn the negative emotion an unplanned interruption leaves behind into a positive experience the user can regulate?</b></div></div>
<span class="fig__src">Found through the 20 interviews, read against Cognitive Load Theory, Self-Determination Theory and Bandura's self-efficacy.</span>
</figure>

> Instead of adding one more tool to prevent cognitive disruption, repair the cognitive connection after it happens.

## Who it's for

<figure class="fig jx">
<div class="persona">
<div class="persona__head">
<div class="persona__img" aria-hidden="true"><svg viewBox="0 0 64 64"><circle cx="32" cy="24" r="11" /><path d="M12 56c2-11 10-17 20-17s18 6 20 17" /></svg></div>
<div><span class="persona__tag">Persona</span><b class="persona__name">The self-paced knowledge worker</b></div>
</div>
<ul class="persona__traits">
<li><small>Work style</small>Plans their own tasks, progress and workflow</li>
<li><small>Core need</small>Needs control over their own efficiency and rhythm</li>
<li><small>Pain point</small>Blames themselves when interrupted — efficiency anxiety and self-criticism</li>
<li><small>Root cause</small>Relies on autonomy for psychological balance, which an unwarned interruption takes away</li>
</ul>
</div>
<span class="fig__src">Sources: the team's interviews; Self-Determination Theory (Deci &amp; Ryan), which holds autonomy to be a basic psychological need.</span>
</figure>

## Why meditation

**With the problem reframed, the vehicle followed.** The research found two things broken; meditation addresses both.

<figure class="fig jx">
<div class="match">
<div><small>What we found</small><b>Negative emotion lingers after the interruption</b></div><i aria-hidden="true">→</i><div class="on"><small>What meditation offers</small><b>Lower cortisol, better emotional regulation and self-awareness</b></div>
<div><small>What we found</small><b>Focus is hard to regain afterwards</b></div><i aria-hidden="true">→</i><div class="on"><small>What meditation offers</small><b>Stronger sustained attention, less distraction</b></div>
</div>
<span class="fig__src">Meditation evidence: International Journal of Research in Human Resource Management (2024), cited in the team's final presentation.</span>
</figure>

## The framework

**A research framework became the meditation script.** Time Well Spent (Guillou et al., CHI 2023) found that reflecting on four questions about your time changes how you feel about the work. We turned each question into one step of the guided meditation.

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

## What we built

**The pause becomes the resource.** It is where the leftover thoughts from the broken task get released, so returning to work doesn't carry them.

<figure class="fig jx">
<span class="fig__t">The experience, as a storyboard</span>
<span class="fig__s">From the final presentation; panel text is in the original Mandarin</span>
<div class="shots shots--4">
<figure><img src="/work/jianxu/story-1.webp" alt="Storyboard: a frustrated person at a laptop after being interrupted" width="847" height="853" loading="lazy" /><figcaption><b>1 · Interrupt</b>The user is pulled away and wants to get back into the work.</figcaption></figure>
<figure><img src="/work/jianxu/story-2.webp" alt="Storyboard: the person releasing the thoughts left over from the broken task" width="847" height="853" loading="lazy" /><figcaption><b>2 · Release</b>Jianxu guides the user to let go of what the interruption left behind.</figcaption></figure>
<figure><img src="/work/jianxu/story-3.webp" alt="Storyboard: the person calm, eyes closed, during a short meditation" width="847" height="853" loading="lazy" /><figcaption><b>3 · Settle</b>A short guided meditation calms the user's emotion.</figcaption></figure>
<figure><img src="/work/jianxu/story-4.webp" alt="Storyboard: the person smiling, back at work" width="847" height="853" loading="lazy" /><figcaption><b>4 · Resume</b>The user reviews where they were and picks the task back up.</figcaption></figure>
</div>
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

## What makes it different

**It starts where other tools stop.**

<figure class="fig jx">
<span class="fig__t">Where Jianxu sits against existing tools</span>
<img class="fig__img" src="/work/jianxu/compare.webp" alt="Diagram comparing traditional productivity tools with Jianxu across three stages: working, interrupted and resuming" width="1600" height="674" loading="lazy" />
<div class="cmp">
<span></span><span class="cmp__h">Working</span><span class="cmp__h">Interrupted</span><span class="cmp__h">Resuming</span>
<span class="cmp__r">Existing tools</span><div class="cmp__c" style="grid-column:span 2">Avoid the interruption</div><div class="cmp__c cmp__c--gap">Ignore the recovery</div>
<span class="cmp__r">Jianxu</span><div class="cmp__c">Track progress and checkpoints</div><div class="cmp__c"><small>Negative feeling</small>Catch the unplanned interruption</div><div class="cmp__c on"><small>Opportunity</small>Switch state with a short meditation</div>
</div>
</figure>

## Result

**Best Research Award, OpenHCI 2025.** The judges' stated reason was the depth of the literature grounding behind the concept.

## My contribution

<div class="credit">
<div><small>Together, all six of us</small><p>Developed the concept and the literature review — reading, arguing and consolidating as one team.</p></div>
<div><small>My part</small><p>Designed the UI, and produced the pitch deck and the poster.</p></div>
</div>

The decision I argued for hardest was dropping the plugin. It is the reason the project stopped being a focus tool and became something about recovery.

## What I took from it

**The obvious answer is usually the most crowded one.** Blocking interruptions was the first idea we had precisely because it is what the entire productivity market already sells, which also made it the hardest place to stand out.

Going one layer deeper into the literature and the interviews is what revealed the opening: the real damage happens after the interruption, in the emotional state it leaves behind. That moved the problem from crowded prevention to largely untouched recovery. Meditation was the vehicle; the reframe was the insight.

---

*A student workshop project, not a shipped product. The topic and the reading directions were set by the brief; the self-determination and meditation literature, the Time Well Spent framework and the design direction are the team's. Research was conducted in Mandarin with knowledge workers in Taiwan; participant quotes are paraphrased in translation.*
