import { useState, type ReactNode } from "react";

// ── Icon System ──
type IconName = "eye" | "brain" | "cursor" | "search" | "spark" | "play" | "shield" | "send" | "map" | "wave" | "arrow" | "check" | "copy" | "mic" | "zap" | "globe" | "chevron" | "github" | "menu" | "x";

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    eye: <><path d="M2.5 12s3.2-5.5 9.5-5.5S21.5 12 21.5 12s-3.2 5.5-9.5 5.5S2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
    brain: <><path d="M12 5.2a3.3 3.3 0 0 0-5.8 2.2A3.3 3.3 0 0 0 4 13.3a3.3 3.3 0 0 0 3.5 5.4c.8 1.4 2.2 2.1 4.5 2.1M12 5.2a3.3 3.3 0 0 1 5.8 2.2 3.3 3.3 0 0 1 2.2 5.9 3.3 3.3 0 0 1-3.5 5.4c-.8 1.4-2.2 2.1-4.5 2.1M12 5v16M7 9.4h2.1M14.9 9.4H17M7.3 15H9M15 15h1.7" /></>,
    cursor: <path d="m5 3 13.7 8-6.2 2.1-2.2 6.1L5 3Z" />,
    search: <><circle cx="10.7" cy="10.7" r="5.8" /><path d="m15 15 4.4 4.4" /></>,
    spark: <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Zm7 14 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />,
    play: <path d="m9 7 8 5-8 5V7Z" fill="currentColor" stroke="none" />,
    shield: <path d="M12 3 19 6v5c0 4.6-2.8 7.8-7 10-4.2-2.2-7-5.4-7-10V6l7-3Z" />,
    send: <path d="m3 4 18 8-18 8 3-8-3-8Zm3 8h15" />,
    map: <><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" /><path d="M9 3v15M15 6v15" /></>,
    wave: <path d="M3 12h2l2-6 3 12 3-16 3 14 2-4h3" />,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    copy: <><rect x="8" y="8" width="11" height="11" rx="1" /><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" /></>,
    mic: <><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v1a7 7 0 0 1-14 0v-1" /><path d="M12 19v3M8 22h8" /></>,
    zap: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" fill="currentColor" stroke="none" />,
    globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></>,
    chevron: <path d="m6 9 6 6 6-6" />,
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    x: <><path d="M18 6 6 18M6 6l12 12" /></>,
  };
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

// ── Data ──
const pillars = [
  {
    label: "READ",
    title: "Live DOM Perception",
    desc: "Scrapes and interprets real-time DOM elements — product listings, pricing tables, spec sheets, headings, forms — directly from the active webpage. Vox sees the entire page structure, not just highlighted text.",
    icon: "eye" as IconName,
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    label: "REASON",
    title: "Cognitive Multi-Agent Brain",
    desc: "Every utterance is classified by a Groq-powered intent classifier running at 500 tok/s across an 8-key round-robin pool. Evaluates safety certs, compares pricing, and translates jargon into everyday analogies.",
    icon: "brain" as IconName,
    color: "from-violet-500/20 to-violet-500/5",
  },
  {
    label: "ACT",
    title: "Physical Browser Execution",
    desc: "Physically types into search bars, scrolls to target elements, highlights winners with Cyan Halo Spotlight, controls YouTube playback, fills forms from an encrypted Identity Vault, and bridges summaries to WhatsApp.",
    icon: "cursor" as IconName,
    color: "from-amber-500/20 to-amber-500/5",
  },
];

const features: { icon: IconName; title: string; desc: string }[] = [
  { icon: "search", title: "Deep Marketplace Research", desc: "Audits all visible product listings across Shopee, Tokopedia, or Amazon. Evaluates safety certifications, material quality, seller credibility, and price-to-value ratio." },
  { icon: "spark", title: "Concept Demystifier", desc: "Say 'explain this simply' and Vox breaks down technical jargon using intuitive real-world analogies anyone can immediately understand." },
  { icon: "play", title: "Hands-Free YouTube Control", desc: "Play, pause, and search anything on YouTube from any tab. No tab switching, no mouse, no keyboard needed." },
  { icon: "eye", title: "Cyan Halo Spotlight", desc: "After evaluating products, Vox physically scrolls and rings the best choice with a visible glowing cyan halo, drawing your eyes directly to it." },
  { icon: "shield", title: "Identity Vault Autofill", desc: "Stores shipping info in encrypted local Chrome storage profiles. Say 'fill my address' and Vox autofills every checkout field safely." },
  { icon: "send", title: "WhatsApp Research Bridge", desc: "Generates a formatted research summary and opens WhatsApp Web with the full report pre-filled, ready to send to anyone in one click." },
  { icon: "map", title: "Visual Spotlight Tours", desc: "Say 'show me around' on any page — Vox launches a synchronized multi-step visual tour highlighting key sections with voice narration." },
  { icon: "wave", title: "Acoustic ESL Harmonizer", desc: "Phonetic normalization catches common speech-to-text misses: 'hey fox' becomes 'hey vox', 'headband' becomes 'headset', so the agent always understands." },
];

const howToUseSteps = [
  {
    step: 1,
    title: "Install the Extension",
    voice: null,
    desc: "Clone the repository from GitHub, open chrome://extensions, enable Developer Mode, click 'Load unpacked', and select the VoxAgent folder. The Vox capsule appears instantly on every website.",
    image: null,
  },
  {
    step: 2,
    title: "Say 'Hey Vox' + Your Command",
    voice: '"Hey Vox, what is this page talking about?"',
    desc: "On any website (like an Apple product page), just speak naturally. Vox reads the live DOM, scrapes specs, headings, and pricing, then responds with a clear spoken summary through realistic voice.",
    image: "/images/vox-demo-read.jpg",
  },
  {
    step: 3,
    title: "Let Vox Simplify Complex Concepts",
    voice: '"Hey Vox, I still don\'t get it, can you explain easily?"',
    desc: "When you land on a page full of technical jargon, Vox strips the buzzwords and explains everything using real-world analogies that anyone can instantly understand.",
    image: "/images/vox-demo-reason.jpg",
  },
  {
    step: 4,
    title: "Watch Vox Act Autonomously",
    voice: '"Hey Vox, search helmet, I want a cheap one that is safe and certified."',
    desc: "Vox physically types into the search bar, evaluates listings for safety certifications and pricing, scrolls to the best match, and spotlights it with the Cyan Halo — all hands-free.",
    image: "/images/vox-demo-act.jpg",
  },
];

const techStack = [
  { mark: "MV3", name: "Chrome Manifest V3", sub: "Extension runtime" },
  { mark: "GQ", name: "Groq Cloud", sub: "qwen3.8-27b · 8-key pool" },
  { mark: "11L", name: "ElevenLabs", sub: "Charlie · turbo_v2_5" },
  { mark: "AN", name: "Anakin.io", sub: "Web intelligence API" },
  { mark: "SD", name: "Shadow DOM", sub: "Isolated CSS injection" },
  { mark: "WS", name: "Web Speech API", sub: "Wake word detection" },
];

// ── Sub Components ──
function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="mb-4 font-mono text-[10px] font-medium tracking-[0.22em] uppercase text-cyan-400/80">// {children}</p>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] bg-[#060a10]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-bold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/8 text-cyan-400">
            <Icon name="wave" className="h-3.5 w-3.5" />
          </span>
          <span className="text-white">vox<span className="font-normal text-slate-500">agent</span></span>
        </a>
        <div className="hidden items-center gap-8 font-mono text-[10px] tracking-wider text-slate-500 md:flex">
          <a className="transition hover:text-cyan-400" href="#how-it-works">HOW IT WORKS</a>
          <a className="transition hover:text-cyan-400" href="#how-to-use">HOW TO USE</a>
          <a className="transition hover:text-cyan-400" href="#capabilities">CAPABILITIES</a>
          <a className="transition hover:text-cyan-400" href="#architecture">ARCHITECTURE</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/IrrhammCode/VoxAgent" className="hidden rounded-lg border border-white/8 bg-white/[0.03] px-4 py-2 font-mono text-[10px] tracking-wider text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-300 sm:block">
            <span className="flex items-center gap-2"><Icon name="github" className="h-3.5 w-3.5" />GITHUB</span>
          </a>
          <button onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-lg border border-white/8 text-slate-400 md:hidden" aria-label="Menu">
            <Icon name={open ? "x" : "menu"} className="h-4 w-4" />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/[0.04] bg-[#060a10]/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 font-mono text-xs tracking-wider text-slate-400">
            <a onClick={() => setOpen(false)} className="transition hover:text-cyan-400" href="#how-it-works">HOW IT WORKS</a>
            <a onClick={() => setOpen(false)} className="transition hover:text-cyan-400" href="#how-to-use">HOW TO USE</a>
            <a onClick={() => setOpen(false)} className="transition hover:text-cyan-400" href="#capabilities">CAPABILITIES</a>
            <a onClick={() => setOpen(false)} className="transition hover:text-cyan-400" href="#architecture">ARCHITECTURE</a>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 text-center lg:px-8 lg:pt-40">
      {/* Gradient blobs */}
      <div className="gradient-blob -left-40 -top-20 h-[500px] w-[500px] bg-cyan-500/[0.07]" />
      <div className="gradient-blob -right-32 top-20 h-[400px] w-[400px] bg-violet-500/[0.05]" />

      {/* Hackathon badge */}
      <div className="mx-auto mb-8 flex w-fit items-center gap-2.5 rounded-full border border-amber-400/15 bg-amber-400/[0.04] px-4 py-2 font-mono text-[10px] tracking-wider text-amber-300/90">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
        ANAKIN FORGE HACKATHON 2025
      </div>

      {/* Headline */}
      <h1 className="mx-auto max-w-5xl text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl lg:text-[88px]">
        The AI Agent That Actually{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
          Touches
        </span>{" "}
        Your Browser
      </h1>

      {/* Subheadline */}
      <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
        Vox Agent reads live web pages, reasons through complex decisions, and executes actions directly inside your browser — all by voice. No copy-pasting. No tab switching. No manual clicks.
      </p>

      {/* CTA buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a href="#demo" className="group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 px-7 py-3.5 text-sm font-bold text-[#060a10] shadow-[0_0_30px_rgba(0,229,255,0.25)] transition hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(0,229,255,0.35)]">
          Watch Demo <Icon name="play" className="h-4 w-4" />
        </a>
        <a href="https://github.com/IrrhammCode/VoxAgent" className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/30 hover:bg-white/[0.06]">
          <Icon name="github" className="h-4 w-4" /> View on GitHub
        </a>
      </div>

      {/* Hero browser mockup */}
      <div className="relative mx-auto mt-16 max-w-5xl">
        <div className="absolute -inset-10 -z-10 rounded-[2rem] bg-cyan-500/8 blur-[80px]" />
        <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c1018] shadow-[0_0_80px_rgba(0,229,255,0.08)]">
          {/* Browser chrome */}
          <div className="flex h-10 items-center gap-2 border-b border-white/[0.06] bg-[#0e1420] px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
            <div className="ml-4 flex h-6 flex-1 items-center rounded-md bg-white/[0.04] px-3 font-mono text-[9px] text-slate-500">
              shopee.co.id/search?q=helmet+certified
            </div>
            <span className="flex items-center gap-1 font-mono text-[9px] text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              VOX ACTIVE
            </span>
          </div>
          {/* Screenshot */}
          <img
            src="/images/vox-demo-act.jpg"
            alt="Vox Agent performing autonomous product search and evaluation on Shopee, highlighting the best helmet with Cyan Halo Spotlight"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section id="how-it-works" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <div className="gradient-blob left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 bg-cyan-500/[0.04]" />

      <div className="mb-14 text-center">
        <SectionLabel>THE THREE PILLARS</SectionLabel>
        <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Read, Reason, and Act
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-500">
          Not a sidebar chatbot. Not a popup window. Vox physically sees the page, thinks about it, and acts on it.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <article key={p.label} className="glass-card group relative overflow-hidden p-7 sm:p-9">
            {/* Gradient accent */}
            <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${p.color} opacity-0 transition group-hover:opacity-100`} />

            <div className="mb-12 flex items-start justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-400 transition group-hover:border-cyan-400/35 group-hover:shadow-[0_0_24px_rgba(0,229,255,0.2)]">
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
              <span className="font-mono text-[10px] text-slate-600">0{i + 1}</span>
            </div>

            <p className="font-mono text-xs tracking-[0.22em] text-cyan-400">{p.label}</p>
            <h3 className="mt-3 text-xl font-bold text-white">{p.title}</h3>
            <p className="mt-4 text-sm leading-6 text-slate-400">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowToUseSection() {
  return (
    <section id="how-to-use" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <div className="gradient-blob -right-40 top-20 h-[500px] w-[500px] bg-violet-500/[0.04]" />

      <div className="mb-14 text-center">
        <SectionLabel>GETTING STARTED</SectionLabel>
        <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          How to Use Vox Agent
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-500">
          From installation to autonomous browser execution in four simple steps.
        </p>
      </div>

      <div className="space-y-12 lg:space-y-16">
        {howToUseSteps.map((s, i) => (
          <div key={s.step} className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            {/* Text side */}
            <div className="flex-1">
              <div className="flex items-start gap-5">
                <div className="step-num">{s.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">{s.title}</h3>
                  {s.voice && (
                    <div className="mt-4 flex items-center gap-3 rounded-xl border border-cyan-400/15 bg-cyan-400/[0.04] px-4 py-3">
                      <Icon name="mic" className="h-4 w-4 shrink-0 text-cyan-400" />
                      <p className="font-mono text-xs text-cyan-300 italic">{s.voice}</p>
                    </div>
                  )}
                  <p className="mt-4 text-sm leading-7 text-slate-400">{s.desc}</p>
                </div>
              </div>
            </div>

            {/* Image side */}
            <div className="flex-1">
              {s.image ? (
                <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c1018] shadow-[0_0_40px_rgba(0,229,255,0.06)]">
                  <img src={s.image} alt={s.title} className="w-full" />
                </div>
              ) : (
                <div className="glass-card flex flex-col items-center justify-center gap-4 p-10">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 text-cyan-400">
                    <Icon name="globe" className="h-8 w-8" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-white">Quick Install</p>
                    <p className="mt-2 font-mono text-[10px] leading-5 text-slate-500">
                      git clone → chrome://extensions → Load unpacked → Done
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap justify-center gap-2">
                    {["Clone Repo", "Enable Dev Mode", "Load Unpacked", "Live"].map((label, j) => (
                      <span key={label} className={`rounded-full px-3 py-1 font-mono text-[9px] ${j === 3 ? "border border-cyan-400/25 bg-cyan-400/10 text-cyan-400" : "border border-white/8 bg-white/[0.03] text-slate-500"}`}>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="capabilities" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <div className="gradient-blob -left-32 top-40 h-[400px] w-[400px] bg-teal-500/[0.04]" />

      <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <SectionLabel>WHAT IT CAN DO</SectionLabel>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">Capabilities</h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-slate-500">
          An agent that stays grounded in the page in front of you — not hidden behind a sidebar.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <article key={f.title} className={`glass-card group relative min-h-56 overflow-hidden p-6 ${i === 0 ? "lg:col-span-2" : ""}`}>
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/0 blur-3xl transition group-hover:bg-cyan-400/8" />
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/8 bg-white/[0.03] text-cyan-400 transition group-hover:border-cyan-400/25 group-hover:bg-cyan-400/[0.06]">
              <Icon name={f.icon} className="h-4.5 w-4.5" />
            </span>
            <h3 className="mt-7 text-base font-bold text-white">{f.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#0e1524] to-[#080c14] p-8 sm:p-14">
        <SectionLabel>IN THE STACK</SectionLabel>
        <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">Built With</h2>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {techStack.map(t => (
            <div key={t.name} className="glass-card p-5">
              <span className="font-mono text-xs font-bold text-cyan-400">{t.mark}</span>
              <p className="mt-6 text-sm font-bold text-white">{t.name}</p>
              <p className="mt-1 font-mono text-[9px] text-slate-500">{t.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section id="architecture" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <div className="mb-14 text-center">
        <SectionLabel>SIGNAL PATH</SectionLabel>
        <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">Architecture</h2>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-cyan-400/10 bg-[#0a0f18] p-6 sm:p-10">
        <div className="flex min-w-[800px] items-center gap-3">
          <div className="flow-node">
            <Icon name="mic" className="mx-auto mb-2 h-5 w-5" />
            User Voice
          </div>
          <Icon name="arrow" className="h-5 w-8 shrink-0 text-cyan-400/50" />
          <div className="flow-node">
            <Icon name="wave" className="mx-auto mb-2 h-5 w-5" />
            Speech +<br />Normalizer
          </div>
          <Icon name="arrow" className="h-5 w-8 shrink-0 text-cyan-400/50" />
          <div className="flow-node border-cyan-400/35 bg-cyan-400/[0.08]">
            <Icon name="brain" className="mx-auto mb-2 h-5 w-5" />
            Groq Cognitive<br />Classifier <span className="text-[8px] text-slate-500">8-KEY POOL</span>
          </div>
          <Icon name="arrow" className="h-5 w-8 shrink-0 text-cyan-400/50" />
          <div className="grid gap-2">
            <div className="flow-node text-[10px]">READ · DOM Scraper</div>
            <div className="flow-node text-[10px]">REASON · Auditor</div>
            <div className="flow-node text-[10px]">ACT · Browser Ctrl</div>
          </div>
          <Icon name="arrow" className="h-5 w-8 shrink-0 text-cyan-400/50" />
          <div className="flow-node">
            <Icon name="spark" className="mx-auto mb-2 h-5 w-5" />
            ElevenLabs +<br />Visual Feedback
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="mx-auto max-w-5xl px-6 py-28 text-center">
      <SectionLabel>DEMO RECORDING</SectionLabel>
      <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">See It In Action</h2>

      <div className="group relative mt-14 aspect-video overflow-hidden rounded-2xl border border-cyan-400/15 bg-[#0a0f18] shadow-[0_0_50px_rgba(0,229,255,0.08)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.08),transparent_40%)]" />
        <button className="absolute left-1/2 top-1/2 grid h-18 w-18 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-cyan-300/40 bg-gradient-to-br from-cyan-400 to-cyan-500 text-[#060a10] shadow-[0_0_40px_rgba(0,229,255,0.35)] transition group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(0,229,255,0.5)]" aria-label="Play demo">
          <Icon name="play" className="ml-1 h-8 w-8" />
        </button>
        <p className="absolute bottom-5 left-0 right-0 font-mono text-[10px] tracking-[0.2em] text-slate-600">
          VOX AGENT / LIVE BROWSER DEMONSTRATION
        </p>
      </div>
    </section>
  );
}

function InstallSection() {
  const [copied, setCopied] = useState(false);
  const copyCommand = () => {
    navigator.clipboard?.writeText("git clone https://github.com/IrrhammCode/VoxAgent.git");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="start" className="mx-auto max-w-5xl px-6 py-28">
      <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#0e1524] to-[#080c14] p-8 sm:p-14">
        <SectionLabel>LOCAL INSTALL</SectionLabel>
        <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">Get Started in 10 Seconds</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[
            ["01", "Clone the repository"],
            ["02", "Open chrome://extensions"],
            ["03", "Enable Developer Mode, then click Load unpacked"],
            ["04", "Select the VoxAgent folder. You're live on every website."],
          ].map(([n, t], i) => (
            <div key={n} className="flex gap-5">
              <span className="font-mono text-sm font-bold text-cyan-400">{n}</span>
              <div>
                <h3 className="text-sm font-bold text-white">{t}</h3>
                {i === 0 && (
                  <button onClick={copyCommand} className="mt-3 flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] px-4 py-2.5 font-mono text-[10px] text-slate-400 transition hover:border-cyan-400/25 hover:text-cyan-300">
                    git clone https://github.com/IrrhammCode/VoxAgent.git
                    <Icon name={copied ? "check" : "copy"} className="h-3.5 w-3.5 text-cyan-400" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-7xl border-t border-white/[0.04] px-6 py-10 lg:px-8">
      <div className="flex flex-col gap-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-bold text-white">
          vox<span className="font-normal text-slate-500">agent</span>
        </p>
        <div className="flex gap-6 font-mono text-[10px] tracking-wider">
          <a href="https://github.com/IrrhammCode/VoxAgent" className="transition hover:text-cyan-400">GITHUB</a>
          <a href="#demo" className="transition hover:text-cyan-400">DEMO VIDEO</a>
          <a href="#top" className="transition hover:text-cyan-400">ANAKIN FORGE</a>
        </div>
        <div className="flex items-center gap-3">
          <span>Built for the Anakin Forge Hackathon 2025</span>
          <span className="rounded-md border border-amber-400/20 bg-amber-400/[0.06] px-2 py-0.5 font-mono text-[9px] font-bold text-amber-300">MIT</span>
        </div>
      </div>
    </footer>
  );
}

// ── Main App ──
function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060a10] text-slate-200">
      {/* Subtle grid background */}
      <div className="fixed inset-0 -z-20 opacity-[0.03] [background-image:linear-gradient(rgba(0,229,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,1)_1px,transparent_1px)] [background-size:48px_48px]" />

      <Navbar />
      <HeroSection />
      <PillarsSection />
      <HowToUseSection />
      <FeaturesSection />
      <TechStackSection />
      <ArchitectureSection />
      <DemoSection />
      <InstallSection />
      <Footer />
    </main>
  );
}

export default App;
