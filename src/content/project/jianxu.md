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
draft: false
---

## What OpenHCI is

Taiwan's longest-running student-led workshop on human–computer interaction. Founded in 2010 and re-organised each year by a new student team, it brings together students from computing, design and the social sciences to build things together, with mentors drawn from both academia and industry. Its stated position is that the best learning is not accepting a standard answer but posing your own question and working it out collectively — which is why briefs arrive as reading directions rather than problems with known solutions.

## The name

**澗序 (Jianxu)** pairs 澗, a mountain stream, with 序, order. The team's line for it: an interruption need not be a break — coming back to work can be like a stream that keeps flowing.

## The brief

**What we were given, and what we had to find.** The project began from a set brief by a faculty researcher in information management: study how people switch attention across phone, tablet and laptop, and design interface cues that help them refocus.

The brief named the territory to read into — cognitive load, multiple resource theory, switching cost, activity theory — and proposed that a shift in attention need not be read only as disturbance, but might be designed as a rhythm that can be anticipated and controlled. Those were directions to pursue, not answers.

So the question was never what to study. It was what to do about it — and that is where the six of us had to earn the project.

## The problem

**Being interrupted costs more than the time it takes.** Cognitive Load Theory holds that our cognitive resources are finite. An unplanned interruption forces you to reallocate them on the spot, and that reallocation is itself expensive: it raises cognitive load, which surfaces as frustration and anxiety rather than as lost minutes.

The damage, in other words, isn't the interruption. It's the state you are left in afterwards.

## Research

**Twenty interviews, and a pattern nobody names.** We ran 20 semi-structured interviews with knowledge workers. Seven in ten reported that unplanned interruption didn't just cost them time — the feeling that followed reduced their motivation to return to the task at all.

<figure class="fig">
<span class="fig__t">What an unplanned interruption leaves behind</span>
<span class="fig__s">20 semi-structured interviews with knowledge workers</span>
<div class="donut"><svg viewBox="0 0 120 120" role="img" aria-label="14 of 20 interviewees, 70%, said the negative feeling after an interruption lowered their motivation to return"><circle cx="60" cy="60" r="48" fill="none" stroke="var(--accent)" stroke-width="18" stroke-dasharray="209.12 92.48" transform="rotate(-90 60 60)"><title>14 of 20: motivation dropped</title></circle><circle cx="60" cy="60" r="48" fill="none" stroke="var(--g-1)" stroke-width="18" stroke-dasharray="88.48 213.12" stroke-dashoffset="-211.12" transform="rotate(-90 60 60)"><title>6 of 20: did not report this</title></circle><text x="60" y="62" text-anchor="middle" class="donut__c">7 in 10</text><text x="60" y="75" text-anchor="middle" class="donut__s">lost motivation</text></svg><ul><li><i style="background:var(--accent)"></i><b>14</b>said the feeling afterwards made them less willing to go back to the task</li><li><i style="background:var(--g-1)"></i><b>6</b>did not report this</li></ul></div>
<span class="fig__src">Source: the team's interviews, conducted in Mandarin.</span>
</figure>

Three responses recurred, and every one of them blamed the interrupted person rather than the interruption:

- **Self-doubt.** Being unable to control external interruption reads as a lack of self-discipline. Participants began questioning their own competence.
- **Abandonment.** When deep, demanding work is broken off, the irritation is sharp enough that some simply don't go back to it.
- **Guilt.** A sense that time has been wasted, carried afterwards as guilt.

The chain was consistent: interrupted task → negative emotion → motivation drops. The emotional step in the middle was the one no product was treating.

## The turn

**We built a plugin first, then threw it away.** Our first version was a browser plugin that worked the way every other focus tool works: intercept the distraction before it reaches you.

We dropped it for two reasons. The plugin approach was heavily trodden ground, and there was little we could add to it. And a plugin with enough access to intercept notifications carries real security exposure — a lot to ask of someone in exchange for a focus timer.

Reading further is what moved us. The brief asked us to help people refocus, and the obvious reading of that is to defend their attention in advance. The literature pointed somewhere else:

> Instead of adding one more tool to prevent cognitive disruption, repair the cognitive connection after it happens.

## Who it's for

**Self-paced knowledge workers.** We narrowed to people who plan their own task flow and care intensely about controlling their own rhythm. Self-Determination Theory — which we brought in beyond the brief — explains why this group is hit hardest: they depend on autonomy for psychological balance. Remove it without warning and they internalise the blame, which pulls them into a loop of efficiency anxiety and self-criticism.

## Why meditation

**Choosing the intervention from the evidence.** Meditation was not an aesthetic choice. The literature supports it on both halves of the problem: it lowers cortisol and improves emotional regulation and self-awareness, and as a form of cognitive training it strengthens sustained attention and reduces distraction.

That matched exactly what our interviews said was broken — the emotional aftermath, and the difficulty re-entering focus.

## The framework

**Time Well Spent as a script, not a citation.** We built on Time Well Spent (Guillou et al., CHI 2023), which argues that strengthening someone's subjective sense of how their time is being used changes how they feel about the work. Four dimensions:

| Dimension | Meaning |
| --- | --- |
| What I work on | The task itself |
| How I work | The way I'm going about it |
| How I feel | My emotional state |
| How I take care of myself | What I need right now |

Rather than cite it and move on, we made it the structure of the product: the four dimensions became the four steps of the guided sequence.

## What we built

**The interruption becomes the starting point.** When work is interrupted, 澗序 asks the user to log the interruption, then walks them through a short guided meditation scripted along the Time Well Spent dimensions, ending by returning them to where they left off.

1. **Log the interruption** — *What I work on*: naming the task that was broken off.
2. **Notice the present moment** — *How I work*: guided meditation prompts.
3. **Feel the body and the emotion** — *How I feel*: acknowledging the state rather than suppressing it.
4. **Return to yourself** — *How I take care of myself*: then back to the task.

The gap created by the interruption becomes the resource: the pause is where the leftover thoughts from the broken task get released, so returning to work doesn't carry them.

<figure class="fig">
<span class="fig__t">The experience, as a storyboard</span>
<span class="fig__s">From the final presentation; panel text is in the original Mandarin</span>
<div class="shots">
<figure><img src="/work/jianxu/story-1.webp" alt="Storyboard: a frustrated person at a laptop after being interrupted" width="847" height="853" loading="lazy" /><figcaption>1 · Work is interrupted. The user wants to get back into it.</figcaption></figure>
<figure><img src="/work/jianxu/story-2.webp" alt="Storyboard: the person releasing the thoughts left over from the broken task" width="847" height="853" loading="lazy" /><figcaption>2 · Jianxu guides them to release the thoughts the interruption left behind.</figcaption></figure>
<figure><img src="/work/jianxu/story-3.webp" alt="Storyboard: the person calm, eyes closed, during a short meditation" width="847" height="853" loading="lazy" /><figcaption>3 · A short guided meditation settles the emotion.</figcaption></figure>
<figure><img src="/work/jianxu/story-4.webp" alt="Storyboard: the person smiling, back at work" width="847" height="853" loading="lazy" /><figcaption>4 · They review where they were and pick the task back up.</figcaption></figure>
</div>
</figure>

<figure class="fig">
<span class="fig__t">Step one: log the interruption</span>
<span class="fig__s">The interface I designed, in its original Mandarin</span>
<img class="fig__img" src="/work/jianxu/ui-log.webp" alt="Jianxu's first screen: a form over rippling water asking two questions, with a Start meditation button" width="1516" height="712" loading="lazy" />
<span class="fig__src">The title reads "Jianxu | find your work rhythm again". The two questions: "Before the interruption, what were you working on?" and "What made your work stop?" The button: "Start meditation".</span>
</figure>

<figure class="fig">
<span class="fig__t">Demo</span>
<span class="fig__s">1 min 32 s · Mandarin interface with guided audio</span>
<video class="fig__img" src="/work/jianxu/demo.mp4" controls preload="metadata" playsinline></video>
<span class="fig__src">Logging the interruption, a timed meditation, then a closing screen that reflects back what the user just did — started the task and stayed focused, noticed the interruption in time, chose to meditate to refocus — before a single button: "Back to work".</span>
</figure>

## What makes it different

| | Existing productivity tools | 澗序 |
| --- | --- | --- |
| Target | Preventing interruption | The recovery after it |
| Repair process | Ignored | This is the product |
| Assumption | Interruption is failure | Interruption is inevitable, and usable |

## Result

**Best Research Award** at OpenHCI 2025. The judges' stated reason was the depth of the literature grounding behind the concept.

## My contribution

Concept development and the literature review were done collectively — six of us reading, arguing and consolidating together. In the split that followed I took UI design, and produced the pitch deck and the poster.

The decision I argue for hardest is the one above: dropping the plugin. It is the reason the project stopped being a focus tool and became something about recovery.

## What I took from it

The useful lesson wasn't about meditation. It was that the obvious solution — block the interruption — was obvious precisely because the whole category had already tried it. Reading further is what turned a crowded problem into an empty one.

---

*A student workshop project, not a shipped product. The topic and the reading directions were set by the brief; the self-determination and meditation literature, the Time Well Spent framework and the design direction are the team's. Research was conducted in Mandarin with knowledge workers in Taiwan; participant quotes are paraphrased in translation.*
