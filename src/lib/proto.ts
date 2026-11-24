/*
 * A clickable prototype built from exported Figma screens.
 * Markup in a case study: <div class="proto" data-proto="/work/<id>/proto.json"></div>
 * The JSON holds each screen's image and its tap areas (in the frame's own pixels), plus the flows,
 * so the links are the ones drawn in Figma, not re-imagined here.
 */
type Spot = { to: string; x: number; y: number; w: number; h: number; on?: 'click' | 'timeout'; ms?: number };
type Screen = { name: string; img: string; spots: Spot[] };
type Flow = { id: string; who: string; label: string; start: string };
type Data = { w: number; h: number; screens: Record<string, Screen>; flows: Flow[] };

const still = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

function build(root: HTMLElement, d: Data) {
  root.innerHTML = '';
  const tabs = document.createElement('div');
  tabs.className = 'proto__tabs';
  tabs.setAttribute('role', 'tablist');
  tabs.setAttribute('aria-label', 'Steps of the journey');

  const stage = document.createElement('div');
  stage.className = 'proto__stage';
  const phone = document.createElement('div');
  phone.className = 'proto__phone';
  phone.style.setProperty('--ratio', `${d.w} / ${d.h}`);
  const screenBox = document.createElement('div');
  screenBox.className = 'proto__screen';
  phone.appendChild(screenBox);

  const side = document.createElement('div');
  side.className = 'proto__side';
  side.innerHTML = `
    <p class="proto__step"><small></small><b></b></p>
    <p class="proto__now" aria-live="polite"></p>
    <div class="proto__ctl">
      <button type="button" class="stamp proto__back">Back</button>
      <button type="button" class="stamp proto__restart">Restart this step</button>
    </div>
    <p class="proto__hint">Tap the screen as you would on a phone. A missed tap shows where you can go.</p>`;
  stage.append(phone, side);
  root.append(tabs, stage);

  const stepSmall = side.querySelector('.proto__step small')!;
  const stepB = side.querySelector('.proto__step b')!;
  const now = side.querySelector('.proto__now')!;
  const backBtn = side.querySelector<HTMLButtonElement>('.proto__back')!;
  let flow = d.flows[0];
  let history: string[] = [];
  let timer = 0;

  const pct = (v: number, of: number) => `${(v / of) * 100}%`;
  const preload = (id: string) => {
    const s = d.screens[id];
    if (!s) return;
    const img = new Image();
    img.src = s.img;
    s.spots.forEach((sp) => {
      const n = d.screens[sp.to];
      if (n) new Image().src = n.img;
    });
  };

  function show(id: string, push = true) {
    const s = d.screens[id];
    if (!s) return;
    clearTimeout(timer);
    if (push) history.push(id);
    backBtn.disabled = history.length < 2;
    const layer = document.createElement('div');
    layer.className = 'proto__layer';
    const img = document.createElement('img');
    img.src = s.img;
    img.alt = s.name;
    img.width = d.w;
    img.height = d.h;
    img.draggable = false;
    layer.appendChild(img);
    for (const sp of s.spots) {
      if (sp.on === 'timeout') {
        timer = window.setTimeout(() => show(sp.to), sp.ms ?? 1000);
        continue;
      }
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'proto__spot';
      b.style.left = pct(sp.x, d.w);
      b.style.top = pct(sp.y, d.h);
      b.style.width = pct(sp.w, d.w);
      b.style.height = pct(sp.h, d.h);
      const dest = sp.to === 'back' ? 'Back' : d.screens[sp.to]?.name ?? sp.to;
      b.setAttribute('aria-label', `Go to: ${dest}`);
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        if (sp.to === 'back') goBack();
        else show(sp.to);
      });
      layer.appendChild(b);
    }
    // a missed tap flashes every tap area, as Figma's prototype viewer does
    layer.addEventListener('click', () => {
      layer.classList.remove('is-hinting');
      void layer.offsetWidth;
      layer.classList.add('is-hinting');
    });
    const old = screenBox.querySelector('.proto__layer:not(.is-leaving)');
    screenBox.appendChild(layer);
    if (old) {
      old.classList.add('is-leaving');
      const drop = () => old.remove();
      if (still()) drop();
      else setTimeout(drop, 260);
    }
    now.textContent = `Screen: ${s.name}`;
    preload(id);
  }

  function goBack() {
    if (history.length < 2) return;
    history.pop();
    show(history[history.length - 1], false);
  }

  function start(f: Flow) {
    flow = f;
    history = [];
    tabs.querySelectorAll('button').forEach((t) => t.setAttribute('aria-selected', String(t.dataset.flow === f.id)));
    stepSmall.textContent = `Step ${d.flows.indexOf(f) + 1} of ${d.flows.length} · ${f.who}`;
    stepB.textContent = f.label;
    show(f.start);
  }

  d.flows.forEach((f, i) => {
    const t = document.createElement('button');
    t.type = 'button';
    t.className = 'proto__tab';
    t.setAttribute('role', 'tab');
    t.dataset.flow = f.id;
    t.innerHTML = `<i>${i + 1}</i><span>${f.label}</span><small>${f.who}</small>`;
    t.addEventListener('click', () => start(f));
    tabs.appendChild(t);
  });
  backBtn.addEventListener('click', goBack);
  side.querySelector('.proto__restart')!.addEventListener('click', () => start(flow));

  // load the screens only when the prototype comes near the viewport
  new IntersectionObserver((entries, io) => {
    if (entries.some((e) => e.isIntersecting)) {
      io.disconnect();
      start(d.flows[0]);
    }
  }, { rootMargin: '400px' }).observe(root);
}

document.querySelectorAll<HTMLElement>('[data-proto]').forEach(async (root) => {
  try {
    const d: Data = await (await fetch(root.dataset.proto!)).json();
    build(root, d);
  } catch {
    root.textContent = 'The prototype could not load.';
  }
});
