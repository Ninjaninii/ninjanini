---
title: Bridging Bands and Musicians
hook: 'Bands and musicians would rather trust a friend of a friend than a stranger online. Trust has to come from proof.'
summary: 'A mobile app where musicians who don''t know each other can play together, and trust each other. I designed the high-fidelity prototype and all the visuals.'
year: '2026'
role: High-fidelity prototype, visual design and UX review
team: 2 students
context: 'NUS, 2026/27 Semester 1 · ID3131 Techniques in Interaction Design and User Experience'
tools: ['Figma']
skills: ['Product design']
featured: false
order: 1
cover: /work/bands-and-musicians/cover.webp
coverCutout: true
coverWidth: 34
coverAlt: The home feed on a phone, with a notification that a band nearby is looking for a bassist
folderPapers: ['/work/bands-and-musicians/maya-badge.webp']
glance:
  problem: Bands and musicians turn to mutual friends, because they cannot tell whether a stranger can really play, will turn up, or is safe to meet.
  turn: Trust is built on proof and experience. A duet audition before meeting, a meetup the app helps arrange, and a GigJam history both sides confirm.
  result: 'A clickable prototype of the whole journey, revised after a usability test I ran with 3 participants: four findings, all addressed in the final version.'
draft: false
---

## Situation

<div class="credit">
<div><small>My teammate</small><p>The wireframes, the personas and the final presentation.</p></div>
<div><small>Me</small><p>The high-fidelity prototype and all the visuals. I reviewed every screen against UX laws, and ran the week-10 usability test.</p></div>
</div>

A two-person course project at the National University of Singapore.

**Musicians find bands through people they already know.** Musicians looking for a band, and bands looking for a player, mostly turn to mutuals and connections, because it feels safer than a stranger online. People can't tell whether a stranger can really play, will turn up, or is safe to meet.

<figure class="fig bd">
<span class="fig__t">Two sides of the same gap</span>
<div class="pairs pairs--paper pairs--persona">
<div><div class="pairs__q"><img class="pairs__face" src="/work/bands-and-musicians/ticket/band.webp" alt="" width="72" height="72" loading="lazy" /><small>Persona · Demand · The CoolCatsBand</small><b>A 7-member indie band needs a bassist for six months, after theirs moved abroad on exchange.</b></div><i aria-hidden="true">&#8594;</i><div class="pairs__a"><small>What goes wrong</small><span>Very few bassists reply, past stand-ins flaked at the last minute, and they don't want to invite a stranger into the studio.</span></div></div>
<div><div class="pairs__q"><img class="pairs__face pairs__face--badge" src="/work/bands-and-musicians/maya-badge.webp" alt="" width="72" height="72" loading="lazy" /><small>Persona · Supply · Maya, 24</small><b>A casual bassist since high school wants to join a real band, but doesn't know where to start.</b></div><i aria-hidden="true">&#8594;</i><div class="pairs__a"><small>What goes wrong</small><span>Her messages to ads go unanswered, she can't tell how serious a band is, and she feels uneasy meeting strangers alone.</span></div></div>
</div>
<span class="fig__src">Personas built from the team's research.</span>
</figure>

## The turn

**Trust is built on proof and experience.**

The goal was to make matching between bands and musicians feel secure, reliable and trustworthy. Bands want to fill a role with someone they can trust; musicians want to widen their circle and build a record of playing. Three things answer both: virtual duet auditions, a confirmed history of GigJams with other users, and meetups the app helps arrange. Each confirmed GigJam builds both profiles, so the next match is easier to trust, for the band and the musician.

## The work

**Every step of the journey, clickable.**

The prototype below runs on the screens and links I built in Figma. Choose a step, then tap through it as the band or as Maya.

<figure class="fig bd fig--proto">
<div class="proto" data-proto="/work/bands-and-musicians/proto.json"></div>
</figure>

<p class="protolink"><a class="stamp stamp--btn" href="https://www.figma.com/proto/VlsRR2Dn5opZyhCdyqyR1K/ID3131-PROJECT-2?node-id=10-2&viewport=3238%2C-2353%2C0.9&t=RAIjb2hh71hohdAO-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10%3A2&show-proto-sidebar=1&page-id=0%3A1" target="_blank" rel="noopener">Open the full prototype in Figma <span aria-hidden="true">&#8599;</span></a></p>

<figure class="fig bd">
<span class="fig__t">Design decisions, step by step</span>
<div class="pairs pairs--paper">
<div><div class="pairs__q"><small>Making a request</small><b>Proficiency is measured by performing experience, not skill.</b></div><i aria-hidden="true">&#8594;</i><div class="pairs__a"><small>How</small><span>Bands upload a short practice clip as the audition track, and can post it to the main feed to reach more applicants.</span></div></div>
<div><div class="pairs__q"><small>Auditioning</small><b>User tests showed people viewed the profile before auditioning more often than going straight in.</b></div><i aria-hidden="true">&#8594;</i><div class="pairs__a"><small>So</small><span>That path was made seamless: from a request, a musician can tap straight into each band member.</span></div></div>
<div><div class="pairs__q"><small>Shortlisting</small><b>The band hears both parts side by side.</b></div><i aria-hidden="true">&#8594;</i><div class="pairs__a"><small>So</small><span>A duet audition is a low-pressure way to gauge compatibility before anyone invests in meeting in person.</span></div></div>
<div><div class="pairs__q"><small>Meeting up</small><b>A bot follows the GigJam in the chat.</b></div><i aria-hidden="true">&#8594;</i><div class="pairs__a"><small>So</small><span>It updates both sides while the session runs and follows up afterwards, to hold people accountable.</span></div></div>
<div><div class="pairs__q"><small>After the GigJam</small><b>Both sides review the session.</b></div><i aria-hidden="true">&#8594;</i><div class="pairs__a"><small>So</small><span>A good review appears on each other's GigJam history; if both say yes, the musician joins the band profile and the request closes.</span></div></div>
</div>
</figure>

<figure class="fig bd">
<span class="fig__t">Checked against UX laws</span>
<div class="pairs pairs--paper pairs--iter">
<div><div class="pairs__q"><small>Jakob's Law · Bottom nav</small><b>A paper-plane icon usually means send or DM, in other apps.</b><div class="iter"><img class="iter__nav" src="/work/bands-and-musicians/iter/nav-before.webp" alt="The first bottom nav, with a paper-plane icon second from the left" width="324" height="60" loading="lazy" /></div></div><i aria-hidden="true">&#8594;</i><div class="pairs__a"><small>So</small><span>Replaced it with a map icon.</span><div class="iter"><img class="iter__nav" src="/work/bands-and-musicians/iter/nav-after.webp" alt="The bottom nav with the map icon" width="324" height="60" loading="lazy" /></div></div></div>
<div><div class="pairs__q"><small>Miller's Law · Make a request</small><b>The form had about 10 fields, and still lacked duration, special requests and the audition clip.</b><div class="iter"><img class="iter__phone" src="/work/bands-and-musicians/iter/request-before.webp" alt="The original one-page request form" width="402" height="874" loading="lazy" /></div></div><i aria-hidden="true">&#8594;</i><div class="pairs__a"><small>So</small><span>Grouped it into four sections: basics, role, schedule and audition clip.</span><div class="iter"><img class="iter__phone" src="/work/bands-and-musicians/iter/request-after-1.webp" alt="The final request form: the details" width="402" height="874" loading="lazy" /><img class="iter__phone" src="/work/bands-and-musicians/iter/request-after-2.webp" alt="The final request form: the audition clip" width="402" height="874" loading="lazy" /></div></div></div>
<div><div class="pairs__q"><small>Parkinson's Law · Duet audition</small><b>The audition used the full 4:29 song.</b><div class="iter"><img class="iter__crop" src="/work/bands-and-musicians/iter/audition-before.webp" alt="The audition player with the full 4:29 song" width="640" height="171" loading="lazy" /></div></div><i aria-hidden="true">&#8594;</i><div class="pairs__a"><small>So</small><span>Limited the clip to 30–60 seconds.</span><div class="iter"><img class="iter__crop iter__crop--sq" src="/work/bands-and-musicians/iter/audition-after.webp" alt="The final upload box, for a 30 to 60 second clip" width="560" height="561" loading="lazy" /></div></div></div>
</div>
<span class="fig__src">Before: the wireframes. After: the final design.</span>
</figure>

Requests and GigJams may not happen often, so the home feed also works as social media for musicians and fans, a reason to open the app in between. ID verification at sign-up keeps out bots and duplicate accounts, which would make GigJam histories less reliable.

## Outcome

**A usability test I ran with 3 participants in week 10 found four gaps, and all four were addressed in the final prototype.**

<figure class="fig bd">
<span class="fig__t">What the usability test found</span>
<ol class="vflow vflow--4">
<li><small>Trust</small><b>Trust signals need visible detail</b><span>Users want more than a number or a button: they want to know who is behind it, and who can see it.</span></li>
<li><small>Guidance</small><b>New features need guidance</b><span>Duet auditions and invitation types are new ideas that need explaining on first use.</span></li>
<li><small>Feedback</small><b>Every action needs feedback</b><span>After each key action, users should be told the result.</span></li>
<li class="on"><small>Matching</small><b>Skill matching is key</b><span>Both sides care about matching levels; they need concrete experience, and beginners need a safe way in.</span></li>
</ol>
</figure>

Bands get someone they've heard and can verify. Musicians get a way into the music scene, and a record that follows them.

---

*A course project, not a launched product. The personas are from the team's research; the UX law review and the week-10 usability test were mine.*
