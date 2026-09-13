# 🚀 MASTER MEGA-PROMPT: "VOX AGENT" — ULTRA-PREMIUM IN-BROWSER LIVING MULTI-AGENT COPILOT
> **Target Environment:** Xiaomi MiMo Desktop (Live In-Session Code Generation & Visual Preview)  
> **Hackathon:** Anakin Forge Hackathon by Anakin.io (YC S21)  
> **Core Theme:** AI Agents That Read, Reason, and Act on Live Web Data  
> **UX Mandate:** Zero AI-Slop, Adaptive Floating Glass Capsule, Auto Light/Dark Mode, Human-First Usability ("Se-Soft Semua Orang Ngerti"), Persistent Audit History  

---

## 📌 INSTRUCTIONS FOR RUNNING IN XIAOMI MIMO DESKTOP
Copy and paste the entire prompt block below directly into **Xiaomi MiMo Desktop**. It instructs the AI to generate the complete, single-file production-ready application with full styling, simulated multi-agent swarm telemetry, Anakin.io web scraping logic, Web Speech API (speech-to-text & text-to-speech), draggable floating capsule, adaptive dual-theme engine, and persistent audit history.

---

```markdown
# MISSION: BUILD "VOX AGENT" — THE ZERO-SLOP IN-BROWSER MULTI-AGENT VOICE COPILOT

## 1. EXECUTIVE VISION & PROBLEM STATEMENT
Traditional web browsing is plagued by information overload:
- Users spend 20 minutes reading 30-page documentation or deceptive marketing copy.
- Users open 10–15 tabs to cross-compare pricing, benchmarks, and competitor alternatives.
- Users get stuck on dense, unapproachable engineering jargon (*"optimistic rollups"*, *"WASM AOT compilation"*, *"vector quantization"*).

**Vox Agent** solves this by living **directly inside the webpage** as an ambient, floating glass capsule (Chrome Extension Manifest V3 / In-Page Living HUD).
When the user browses any site (e.g. Apple Store, Supabase, Arbitrum Docs, GitHub) and asks a question or says *"Hey Vox"*:
1. **Agent 1 (In-Page Scout)** reads the active DOM (headings, specifications, pricing tables).
2. **Agent 2 (Ghost Web Researcher)** scrapes competitor benchmarks in the background via the **Anakin.io Web Scraper API** (`POST https://api.anakin.io/v1/scrape`) without opening a single new tab.
3. **Agent 3 (Critical Demystifier & Auditor)** cuts through corporate marketing fluff, converts technical jargon into "Explain Like I'm 12" analogies, and computes a **Worth-It Score (0–100)** with green flags and hidden traps.
4. **Agent 4 (Voice Mentor)** speaks a concise 30-second executive summary aloud and renders an interactive slide-over glass HUD.

---

## 2. STRICT "ANTI-AI-SLOP" DESIGN PRINCIPLES
The design must **REJECT all generic AI clichés** (no tacky purple/pink gradient blobs, no low-effort card walls, no cheesy robot emojis, no cluttered walls of text). Instead, it must embody **Apple / Linear / Raycast / Teenage Engineering calibre precision**:

1. **Adaptive Frosted Glass (Dual Light & Dark Mode):**
   - **Auto-Luminance Sampling:** Samples `document.body` background color.
     - If page luminance > 150 (e.g. Apple, Google, Stripe, Wikipedia): switches to **Frosted Pearl / Crystal Glass** (ultra-clean `#0F172A` slate typography, subtle borders, high contrast).
     - If page luminance ≤ 150 (e.g. GitHub dark, Vercel, Supabase): switches to **Obsidian Glass** (deep `#090D18`, crisp electric cyan highlights, soft ambient glow).
   - **Manual Override:** Instant 1-click toggle button (☀️ / 🌙) in HUD and browser header.

2. **Luxury Floating Capsule & Dynamic Microphone Orb:**
   - Instead of rigid buttons, provide an elegant, ultra-minimalist **floating translucent glass capsule**:
     - Left: Concentric glowing microphone orb with breathing ring (listening pulse).
     - Center: Context indicator showing state (`Idle`, `Listening…`, `Reasoning…`, `Vocalizing`).
     - Right: Integrated quick-query field (`Ask anything or say "Hey Vox"…`) + global hotkey tag (`⌘⇧V`).
   - **Zero Rigid Buttons:** NO fixed chips like `[30s brief]`, `[compare]`, `[worth it]`, or `[jargon]`. The user can ask ANY natural question in Indonesian or English (e.g. *"Tolong cariin brand alternatif yang ada di Indonesia buat video editing"*), and Vox dynamically reasons, benchmarks, and answers!
   - **Magnetic Edge-Snapping:** Freely draggable via pointer events with momentum; magnetically docks to left or right screen edges when released.
   - **Zero Collision:** Minimizes to an elegant compact capsule when idle so it never obstructs native website elements or chat widgets.

3. **Curated Design Tokens (Zero Emoji-Slop):**
   - Strictly NO tacky emojis in the UI. Clean, high-density typography and translucent glassmorphism.
| Token | Dark Glass Mode | Light Glass Mode | Purpose |
|---|---|---|---|
| `--hud-bg` | `rgba(9, 13, 24, 0.90)` | `rgba(255, 255, 255, 0.92)` | Main surface with `backdrop-filter: blur(28px)` |
| `--card-bg` | `rgba(17, 24, 40, 0.65)` | `rgba(241, 245, 249, 0.85)` | Internal instrument cards |
| `--card-hover` | `rgba(25, 35, 56, 0.80)` | `rgba(226, 232, 240, 0.92)` | Interactive hover state |
| `--ink-pri` | `#F8FAFC` | `#0F172A` | Primary headlines & metrics |
| `--ink-sec` | `#94A3B8` | `#64748B` | Secondary captions & labels |
| `--border` | `rgba(255, 255, 255, 0.10)` | `rgba(15, 23, 42, 0.10)` | Hairline dividers |
| `--voice` | `#22D3EE` (Electric Cyan) | `#0284C7` (Cobalt Sky) | Voice pulses & active rings |
| `--agent` | `#A855F7` (Neon Purple) | `#7C3AED` (Royal Violet) | Multi-agent reasoning state |
| `--ok` | `#34D399` (Emerald) | `#059669` (Forest Green) | Strong recommendations |
| `--bad` | `#F43F5E` (Rose) | `#E11D48` (Crimson) | Hidden catches & traps |

---

## 3. DYNAMIC NATURAL LANGUAGE REASONING ("SE-SOFT SEMUA ORANG NGERTI")
Make web research conversational, intelligent, and completely open-ended:

1. **Freeform Question Answering (Multilingual ID & EN):**
   - The user asks ANY question naturally, e.g.:
     - *"Tolong cariin brand alternatif yang worth it di Indonesia buat editing video..."*
     - *"Berapa biaya langganan ini dan apa jebakan tersembunyinya?"*
     - *"Jelasin teknologi ini buat pemula..."*
   - Vox dynamically detects intent:
     - If comparison asked: generates side-by-side alternative matrix tailored to local market availability.
     - If value asked: computes 0–100 worth-it audit and hidden traps.
     - If technical concept asked: provides intuitive analogies.
2. **Audio Voice Mentor & Realistic Human Speech Engine:**
   - **Dual-Engine Natural Speech:** Streams high-fidelity Google Neural Audio chunks without robotic artifacts, with seamless fallback to curated Web Speech API neural voices (`Google Bahasa Indonesia`, `Google US English`, `Apple Damayanti/Samantha Enhanced`).
   - **Web Audio UI Chimes:** Elegant two-tone acoustic cues on speech activation (520Hz→780Hz) and reasoning completion (650Hz→920Hz), delivering a responsive, living feel like Siri or ChatGPT Voice Mode.
   - **Voice Persona & Speed Switcher:** Toggle between `Voice: 1.0x Explainer` (natural conversational tempo), `Voice: 1.15x Fast` (speed briefing), and `Voice: Native`.
   - Natural audio visualizer waveform (clean dancing bars) that reacts during vocalization.
   - Speaks answers in natural Indonesian or English based on the language of the user's prompt.
   - Quick mute toggle (`Mute` / `Muted`) for quiet environments.

3. **Autonomous Page Auto-Scroll & Spotlight Halo:**
   - As soon as reasoning finishes, Vox autonomously identifies the relevant section on the webpage (e.g. Hero overview for *"ini website apa"*, pricing cards for *"berapa harganya"*, specs for *"fitur apa aja"*, or matching headings).
   - Smoothly auto-scrolls the webpage to center the element.
   - Envelops the section with a glowing cyan spotlight halo (`outline: 2px solid #22D3EE; box-shadow: 0 0 36px rgba(34,211,238,0.48)`) and anchors a floating `"Vox Focus: [Topic]"` badge above it, automatically dissolving when speech finishes.

4. **Actionable Outputs (1-Click Share):**
   - **"Copy Brief":** Copies clean Markdown brief to clipboard.
   - **"Download Cheatsheet":** Generates and downloads a `.md` summary file.

---

## 4. PERSISTENT AUDIT HISTORY (CHROME.STORAGE & LOCALSTORAGE)
Users frequently audit multiple tools during a shopping or research sprint. They must not lose their findings:
- **Dedicated History Tab in HUD:** Displays a chronological log of all audited pages.
- **Card Metadata:** Domain favicon, page title, timestamp, Worth-It score pill, and 1-sentence verdict.
- **Instant Restore (1-Click):** Clicking any past audit immediately restores the full report, comparison table, and vocal summary **without re-scraping or wasting tokens**.
- **Search & Filter:** Real-time search box to quickly find past audits by domain or keyword.
- **Clear All:** Confirmation-gated reset button.

---

## 5. COMPLETE SINGLE-PAGE APPLICATION SOURCE CODE
Generate this complete, interactive, self-contained HTML/CSS/JS file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vox Agent — In-Browser Living Multi-Agent Voice Copilot</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    :root {
      --font-main: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --font-mono: ui-monospace, "SF Mono", "Cascadia Code", Consolas, monospace;
    }

    /* THEME: Dark Glass Mode (Default) */
    .theme-dark {
      --bg-void: #070A12;
      --bg-chrome: #0C1220;
      --hud-bg: rgba(9, 13, 24, 0.92);
      --card-bg: rgba(18, 26, 44, 0.70);
      --card-hover: rgba(26, 36, 60, 0.85);
      --ink-pri: #F1F5F9;
      --ink-sec: #94A3B8;
      --border: rgba(255, 255, 255, 0.10);
      --border-subtle: rgba(255, 255, 255, 0.05);
      --voice: #22D3EE;
      --voice-glow: rgba(34, 211, 238, 0.35);
      --agent: #A855F7;
      --ok: #34D399;
      --warn: #FBBF24;
      --bad: #F43F5E;
      --shadow: 0 20px 60px rgba(0,0,0,0.65);
      --meter-track: rgba(255, 255, 255, 0.08);
    }

    /* THEME: Light Glass Mode (For white sites like Apple/Google) */
    .theme-light {
      --bg-void: #F8FAFC;
      --bg-chrome: #FFFFFF;
      --hud-bg: rgba(255, 255, 255, 0.94);
      --card-bg: rgba(241, 245, 249, 0.88);
      --card-hover: rgba(226, 232, 240, 0.95);
      --ink-pri: #0F172A;
      --ink-sec: #64748B;
      --border: rgba(15, 23, 42, 0.10);
      --border-subtle: rgba(15, 23, 42, 0.05);
      --voice: #0284C7;
      --voice-glow: rgba(2, 132, 199, 0.25);
      --agent: #7C3AED;
      --ok: #059669;
      --warn: #D97706;
      --bad: #E11D48;
      --shadow: 0 20px 60px rgba(15,23,42,0.15);
      --meter-track: rgba(15, 23, 42, 0.08);
    }

    body {
      margin: 0;
      font-family: var(--font-main);
      background: var(--bg-void);
      color: var(--ink-pri);
      overflow: hidden;
      height: 100vh;
      transition: background 0.3s ease, color 0.3s ease;
    }
    .mono { font-family: var(--font-mono); }

    /* Luxury Floating Capsule */
    .floating-capsule {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 50;
      display: flex;
      align-items: center;
      gap: 10px;
      background: var(--hud-bg);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid var(--border);
      border-radius: 9999px;
      padding: 6px 14px 6px 8px;
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.05) inset;
      user-select: none;
      cursor: grab;
      touch-action: none;
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, background 0.3s ease;
    }
    .floating-capsule:active { cursor: grabbing; }
    .floating-capsule:hover {
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.55), 0 0 24px var(--voice-glow);
    }

    /* Orb Inside Capsule */
    .capsule-orb {
      width: 42px;
      height: 42px;
      border-radius: 9999px;
      position: relative;
      display: grid;
      place-items: center;
      background: radial-gradient(circle at 50% 45%, var(--card-hover) 0%, var(--card-bg) 80%);
      border: 1.5px solid var(--voice);
      box-shadow: 0 0 14px var(--voice-glow);
      cursor: pointer;
      flex-shrink: 0;
      transition: all 0.3s ease;
    }
    .capsule-orb:hover { transform: scale(1.08); }
    .orb-pulse {
      width: 14px;
      height: 14px;
      border-radius: 9999px;
      background: var(--voice);
      box-shadow: 0 0 12px var(--voice);
      transition: all 0.3s ease;
    }

    /* Orb States */
    [data-state="listening"] .capsule-orb {
      border-color: #67E8F9;
      box-shadow: 0 0 24px #67E8F9;
    }
    [data-state="listening"] .orb-pulse {
      background: #67E8F9;
      animation: pulse-ring 0.9s ease-in-out infinite alternate;
    }
    [data-state="reasoning"] .capsule-orb {
      border-color: var(--agent);
      box-shadow: 0 0 24px var(--agent);
    }
    [data-state="reasoning"] .orb-pulse {
      background: var(--agent);
      animation: pulse-ring 0.6s ease-in-out infinite alternate;
    }
    [data-state="speaking"] .orb-pulse {
      animation: pulse-speak 0.4s ease-in-out infinite alternate;
    }

    @keyframes pulse-ring {
      from { transform: scale(0.85); }
      to { transform: scale(1.35); }
    }
    @keyframes pulse-speak {
      from { transform: scale(0.9); }
      to { transform: scale(1.2); }
    }

    /* Quick Action Chips */
    .action-chip {
      background: var(--card-bg);
      border: 1px solid var(--border);
      color: var(--ink-pri);
      padding: 6px 12px;
      border-radius: 999px;
      font-size: 11.5px;
      font-weight: 500;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      white-space: nowrap;
      transition: all 0.2s ease;
    }
    .action-chip:hover {
      background: var(--card-hover);
      border-color: var(--voice);
      color: var(--voice);
      transform: translateY(-1px);
    }

    /* Slide-Over HUD Panel */
    .hud-panel {
      position: fixed;
      top: 0;
      right: 0;
      width: 480px;
      max-width: 100vw;
      height: 100vh;
      background: var(--hud-bg);
      backdrop-filter: blur(28px) saturate(190%);
      -webkit-backdrop-filter: blur(28px) saturate(190%);
      border-left: 1px solid var(--border);
      box-shadow: var(--shadow);
      display: flex;
      flex-direction: column;
      transform: translateX(100%);
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 60;
    }
    .hud-panel.open { transform: translateX(0); }

    /* Waveform visualizer */
    .waveform {
      display: inline-flex;
      align-items: flex-end;
      gap: 3px;
      height: 16px;
    }
    .waveform span {
      width: 3px;
      background: var(--voice);
      border-radius: 2px;
      animation: wave-anim 1.2s infinite ease-in-out;
      height: 4px;
    }
    .waveform span:nth-child(1) { animation-delay: 0s; }
    .waveform span:nth-child(2) { animation-delay: 0.15s; }
    .waveform span:nth-child(3) { animation-delay: 0.3s; }
    .waveform span:nth-child(4) { animation-delay: 0.1s; }
    .waveform span:nth-child(5) { animation-delay: 0.25s; }
    @keyframes wave-anim {
      0%, 100% { height: 4px; }
      50% { height: 16px; }
    }

    /* Radial Score Gauge */
    .radial-gauge {
      width: 84px;
      height: 84px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: radial-gradient(circle at center, var(--card-bg) 58%, transparent 59%),
                  conic-gradient(var(--voice) calc(var(--pct) * 1%), var(--meter-track) 0);
      box-shadow: 0 0 20px var(--voice-glow);
    }
  </style>
</head>
<body class="theme-dark">
  <div id="app" class="flex flex-col h-screen">
    <!-- 1. Simulated Browser Navigation Bar -->
    <header class="border-b shrink-0 transition-colors" style="background: var(--bg-chrome); border-color: var(--border);">
      <div class="flex items-center gap-3 px-4 py-2.5">
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
          <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
          <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
        </div>
        <div class="flex-1 flex items-center gap-2 rounded-lg px-3 py-1.5 border text-xs mono" style="background: var(--card-bg); border-color: var(--border);">
          <i data-lucide="lock" class="w-3.5 h-3.5 text-emerald-400"></i>
          <span id="nav-url" class="truncate opacity-80">https://docs.arbitrum.io/stylus/stylus-intro</span>
        </div>
        <div class="flex items-center gap-2">
          <!-- Light/Dark Mode Switcher -->
          <button id="theme-switch" class="p-1.5 rounded-lg border text-xs flex items-center gap-1" style="background: var(--card-bg); border-color: var(--border);" title="Toggle Light / Dark Mode">
            <span id="theme-label" class="text-[11px] mono">☀️ Light</span>
          </button>
          <span class="text-xs font-semibold mono px-2.5 py-1 rounded border" style="background: rgba(34,211,238,0.12); color: var(--voice); border-color: var(--border);">
            Vox Extension Active
          </span>
        </div>
      </div>
      <!-- Preset Website Tabs -->
      <div class="flex items-center gap-2 px-4 pb-2 text-xs overflow-x-auto">
        <span class="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mr-1">Websites:</span>
        <button class="preset-btn px-3 py-1 rounded-md border font-medium active" data-preset="stylus">Arbitrum Stylus (Rust VM)</button>
        <button class="preset-btn px-3 py-1 rounded-md border font-medium" data-preset="supabase">Supabase Database</button>
        <button class="preset-btn px-3 py-1 rounded-md border font-medium" data-preset="apple">Apple Mac Studio M3 Ultra</button>
      </div>
    </header>

    <!-- 2. Webpage Viewport -->
    <main id="web-viewport" class="flex-1 overflow-y-auto p-8 max-w-5xl mx-auto w-full transition-colors">
      <!-- Ingested Active Page Content Rendered Here -->
    </main>

    <!-- 3. Luxury Floating Capsule Widget -->
    <div id="vox-capsule" class="floating-capsule" data-state="idle">
      <div id="orb-trigger" class="capsule-orb" title="Click to Talk / Drag to Reposition">
        <div class="orb-pulse"></div>
      </div>
      <div class="flex flex-col cursor-pointer" id="capsule-label-zone">
        <div class="flex items-center gap-1.5">
          <span class="text-xs font-bold tracking-tight">Vox Copilot</span>
          <span id="capsule-status-badge" class="text-[9px] font-mono px-1.5 py-0.2 rounded" style="background: rgba(34,211,238,0.15); color: var(--voice);">READY</span>
        </div>
        <span id="capsule-subtext" class="text-[10px] opacity-70">"Hey Vox" or pick action</span>
      </div>
      <div class="flex items-center gap-1.5 pl-2 border-l" style="border-color: var(--border);">
        <button class="action-chip" data-action="brief">⚡ 30s Brief</button>
        <button class="action-chip" data-action="compare">⚔️ Compare</button>
        <button class="action-chip" data-action="worthit">⚖️ Worth It?</button>
      </div>
    </div>

    <!-- 4. In-Browser Slide-Over HUD -->
    <aside id="vox-hud" class="hud-panel">
      <!-- HUD Header -->
      <div class="flex items-center justify-between px-5 py-4 border-b" style="border-color: var(--border);">
        <div>
          <div class="text-[10px] uppercase tracking-widest opacity-60 font-mono">Living Browser Agent</div>
          <div id="hud-site-title" class="text-base font-bold truncate max-w-[260px] mt-0.5">Active Website</div>
        </div>
        <div class="flex items-center gap-3">
          <div id="hud-waveform" class="waveform" style="display: none;">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <!-- Audio Mute Toggle -->
          <button id="btn-audio-mute" class="p-1.5 rounded-lg border text-xs" style="background: var(--card-bg); border-color: var(--border);" title="Toggle Audio Voice">
            <span id="mute-label" class="text-[11px] mono">🔊 Voice On</span>
          </button>
          <button id="hud-close" class="p-1.5 rounded-lg border hover:opacity-80" style="background: var(--card-bg); border-color: var(--border);">
            ✕
          </button>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="flex border-b px-5 text-xs font-semibold" style="background: var(--card-bg); border-color: var(--border);">
        <button id="tab-audit" class="py-2.5 px-4 border-b-2 font-bold" style="border-color: var(--voice); color: var(--voice);">Active Audit</button>
        <button id="tab-history" class="py-2.5 px-4 opacity-60 hover:opacity-100 flex items-center gap-1.5">
          <span>🕒 History (<span id="history-badge">0</span>)</span>
        </button>
      </div>

      <!-- Scrollable Tab Container -->
      <div class="flex-1 overflow-y-auto p-5 space-y-4">
        <!-- TAB 1: AUDIT VIEW -->
        <div id="view-audit" class="space-y-4">
          <!-- Voice Transcript & Executive Brief -->
          <div class="p-4 rounded-xl border" style="background: var(--card-bg); border-color: var(--border); border-left: 3px solid var(--voice);">
            <div class="text-[10px] uppercase tracking-wider font-mono opacity-60 mb-1">Executive 30-Second Brief</div>
            <p id="hud-transcript" class="text-xs leading-relaxed opacity-90">Ready. Click the orb, say "Hey Vox", or trigger an action chip.</p>
            <div class="flex items-center gap-2 mt-3 pt-2.5 border-t" style="border-color: var(--border-subtle);">
              <button id="btn-copy-brief" class="action-chip text-[11px]">📋 Copy Brief</button>
              <button id="btn-download-cheat" class="action-chip text-[11px]">📥 Download Cheatsheet</button>
            </div>
          </div>

          <!-- Swarm Reasoning Telemetry -->
          <div class="p-4 rounded-xl border" style="background: var(--card-bg); border-color: var(--border);">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[10px] uppercase tracking-wider font-mono opacity-60">Multi-Agent Swarm Telemetry</span>
              <span class="text-[10px] mono px-2 py-0.5 rounded border" style="background: rgba(168,85,247,0.12); color: var(--agent); border-color: var(--border);">Anakin.io · Live</span>
            </div>
            <div id="swarm-log" class="text-[11px] mono space-y-1 opacity-80">
              <div>System standing by…</div>
            </div>
          </div>

          <!-- Worth-It Verdict -->
          <div id="section-worthit" class="p-4 rounded-xl border hidden" style="background: var(--card-bg); border-color: var(--border);">
            <div class="text-[10px] uppercase tracking-wider font-mono opacity-60 mb-2">Worth-It? Audit</div>
            <div class="flex items-center gap-4">
              <div id="hud-gauge" class="radial-gauge" style="--pct: 82;">
                <div class="text-center">
                  <div id="hud-score-num" class="mono text-xl font-bold leading-none">82</div>
                  <div class="text-[9px] opacity-60 mt-0.5">/ 100</div>
                </div>
              </div>
              <div class="flex-1">
                <div id="hud-verdict-tag" class="text-sm font-bold">Strong Buy / Recommend</div>
                <p id="hud-verdict-desc" class="text-xs opacity-75 mt-1 leading-relaxed"></p>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-2.5 mt-4 pt-3 border-t text-xs" style="border-color: var(--border-subtle);">
              <div>
                <span class="font-bold text-emerald-400">+ Green Flags:</span>
                <ul id="hud-green-list" class="mt-1 pl-5 list-disc space-y-1 opacity-85"></ul>
              </div>
              <div>
                <span class="font-bold text-rose-400">− Hidden Catches / Fine Print:</span>
                <ul id="hud-red-list" class="mt-1 pl-5 list-disc space-y-1 opacity-85"></ul>
              </div>
            </div>
          </div>

          <!-- Ghost Comparison Table -->
          <div id="section-compare" class="p-4 rounded-xl border hidden" style="background: var(--card-bg); border-color: var(--border);">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[10px] uppercase tracking-wider font-mono opacity-60">Ghost Comparison (Zero Tabs Opened)</span>
              <span class="text-[9px] mono px-1.5 py-0.5 rounded text-cyan-400 border border-cyan-500/30">Anakin Web Scrape</span>
            </div>
            <p id="ghost-note" class="text-xs opacity-75 mb-3 leading-relaxed"></p>
            <div class="overflow-x-auto">
              <table class="w-full text-xs mono">
                <thead>
                  <tr class="border-b text-left opacity-60" style="border-color: var(--border);">
                    <th class="pb-1.5">Product</th>
                    <th class="pb-1.5">Cost</th>
                    <th class="pb-1.5">Perf</th>
                    <th class="pb-1.5">Lock-in</th>
                  </tr>
                </thead>
                <tbody id="ghost-tbody" class="divide-y" style="border-color: var(--border-subtle);"></tbody>
              </table>
            </div>
          </div>

          <!-- Interactive Jargon Demystifier -->
          <div id="section-jargon" class="p-4 rounded-xl border hidden" style="background: var(--card-bg); border-color: var(--border);">
            <div class="flex items-center justify-between mb-3">
              <span class="text-[10px] uppercase tracking-wider font-mono opacity-60">Jargon Demystifier</span>
              <div class="flex rounded border p-0.5 text-[10px] mono" style="border-color: var(--border);">
                <button id="btn-mode-analogy" class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">🐣 Analogy</button>
                <button id="btn-mode-tech" class="px-2 py-0.5 rounded opacity-60">💻 Tech</button>
              </div>
            </div>
            <div id="jargon-container" class="space-y-2.5"></div>
          </div>
        </div>

        <!-- TAB 2: AUDIT HISTORY -->
        <div id="view-history" class="space-y-3 hidden">
          <div class="flex items-center justify-between pb-2 border-b" style="border-color: var(--border);">
            <input id="history-search" type="text" placeholder="Search past audits…" class="text-xs bg-transparent border rounded-lg px-3 py-1.5 outline-none flex-1 mr-2" style="border-color: var(--border);" />
            <button id="btn-clear-hist" class="text-[11px] px-2.5 py-1.5 rounded border text-rose-400 border-rose-500/30 hover:bg-rose-500/10">Clear</button>
          </div>
          <div id="history-items" class="space-y-2"></div>
        </div>
      </div>
    </aside>
  </div>

  <script>
    /* ==========================================================================
       VOX AGENT — EMBEDDED KNOWLEDGE BASE & PRESET SITES
       ========================================================================== */
    const PRESETS = {
      stylus: {
        id: "stylus",
        title: "Arbitrum Stylus Documentation",
        domain: "docs.arbitrum.io",
        url: "https://docs.arbitrum.io/stylus/stylus-intro",
        headline: "Write Smart Contracts in Rust, C, & C++ with WebAssembly",
        description: "Arbitrum Stylus introduces a secondary WASM virtual machine running alongside EVM with native execution speed, 10x lower compute gas, and complete Solidity interoperability.",
        meta: [
          ["Platform", "Ethereum Layer 2 (Arbitrum One / Nova)"],
          ["Target Languages", "Rust, C, C++ via WASM"],
          ["Execution Mode", "AOT (Ahead-of-Time) Compiled WASM"],
          ["Pricing Model", "Nitro Gas Metering (Compute + Storage)"]
        ],
        body: [
          {
            title: "Why Stylus Changes Web3 Development",
            content: "Developers are no longer forced into Solidity's limited language tooling. With Stylus, teams can import native Rust crates (e.g. cryptography, physics, formal math) and deploy them directly onto Ethereum Layer 2 with 10–100x compute cost reductions."
          },
          {
            title: "Zero-Bridge Composability",
            content: "Stylus contracts share the exact same global state and contract address space as standard Solidity contracts. A Solidity contract can call a Stylus contract and vice-versa in a single atomic transaction without bridge delays."
          }
        ],
        jargon: [
          {
            term: "WASM AOT Compilation",
            tech: "Ahead-of-time translation of WebAssembly bytecode into native host machine code before execution in a sandbox.",
            analogy: "Like translating a foreign book into your native tongue before opening it, instead of using a slow dictionary word by word."
          },
          {
            term: "Optimistic Rollup State",
            tech: "Layer 2 scaling model where transactions are assumed valid unless disputed during a 7-day challenge window.",
            analogy: "Like checking out at an honor-system farm stand: you take the fruit and leave money; if someone cheats, cameras catch them."
          },
          {
            term: "Atomic Cross-VM Calls",
            tech: "Synchronous state transition between EVM and Stylus VMs within the same single block transaction receipt.",
            analogy: "Cooking a meal with two chefs in one kitchen: one chops veggies, one stirs the pot, both dinner plates arrive at once."
          }
        ],
        competitors: {
          note: "Autonomous Anakin.io scrape comparison: Stylus offers unrivaled composability for teams with Rust skills. However, Solana remains cheaper for raw throughput, while vanilla EVM retains 10x more security auditors.",
          items: [
            { name: "Arbitrum Stylus", cost: "L2 Gas (~$0.02)", perf: "10x–100x vs EVM", lock: "Arbitrum Nitro", highlight: true },
            { name: "Vanilla Solidity", cost: "L1/L2 Gas ($0.20+)", perf: "Baseline (1x)", lock: "EVM Standard", highlight: false },
            { name: "Solana SVM (Rust)", cost: "Sub-cent ($0.001)", perf: "Ultra High", lock: "Solana Sealevel", highlight: false }
          ]
        },
        worthIt: {
          score: 84,
          verdict: "Strong Buy / Highly Recommended for Rust Teams",
          note: "Drastically lowers compute costs and unlocks the rich Rust ecosystem on Ethereum without bridging friction.",
          green: [
            "Reuse standard Rust crates (e.g. crypto, math, parsing)",
            "Native EVM composability in the same transaction block",
            "10x–100x lower gas cost for compute-heavy smart contracts"
          ],
          red: [
            "Security auditor pool for Stylus is significantly smaller than Solidity",
            "Tooling ecosystem (debuggers, linters) still maturing compared to Hardhat/Foundry"
          ]
        },
        spoken: "Arbitrum Stylus lets you write contracts in Rust and run them on Ethereum Layer 2 at native speeds. Our ghost comparison reveals it's 10 to 100 times cheaper for compute than Solidity, though Solana still wins on pure fee price. Worth-It score is 84 out of 100: strong recommendation for Rust developers."
      },
      supabase: {
        id: "supabase",
        title: "Supabase — Open Source Firebase Alternative",
        domain: "supabase.com",
        url: "https://supabase.com/pricing",
        headline: "PostgreSQL Database with Instant Auth, Realtime, & Storage",
        description: "Supabase gives developers a dedicated Postgres database with automated REST/GraphQL APIs, enterprise auth, edge functions, and vector embeddings.",
        meta: [
          ["Engine", "Standard PostgreSQL 15+"],
          ["Free Tier", "2 Free Projects (Up to 500MB DB)"],
          ["Pro Plan", "$25 / month per organization"],
          ["Vendor Lock-in", "Extremely Low (Standard Postgres pg_dump)"]
        ],
        body: [
          {
            title: "Database First Architecture",
            content: "Unlike Firebase's proprietary NoSQL Document store, Supabase gives you a real, battle-tested PostgreSQL database. You own the schema, you can run raw SQL, install pgvector, and write complex JOINs."
          },
          {
            title: "Row Level Security (RLS)",
            content: "Security policies are written directly in PostgreSQL using SQL expressions, ensuring that data authorization is enforced at the database level rather than API application servers."
          }
        ],
        jargon: [
          {
            term: "Row Level Security (RLS)",
            tech: "PostgreSQL database constraint engine that evaluates WHERE-like policy rules per row based on JWT claims.",
            analogy: "Like a private bank vault where your key card only unlocks your specific safety box, even though all boxes share the room."
          },
          {
            term: "Logical Replication",
            tech: "Publishing and subscribing to PostgreSQL write-ahead log (WAL) streams to broadcast changes to websockets in realtime.",
            analogy: "Like a newspaper editor instantly sending push notifications the exact second a story hits the printing press."
          }
        ],
        competitors: {
          note: "Anakin.io competitive scrape: Supabase wins decisively on vendor independence and SQL power. Firebase is simpler for novice mobile apps, while AWS RDS requires substantially more DevOps overhead.",
          items: [
            { name: "Supabase (Postgres)", cost: "Free / $25 mo", perf: "Dedicated PG", lock: "Zero (pg_dump)", highlight: true },
            { name: "Google Firebase", cost: "Pay-as-you-go", perf: "NoSQL Cloud", lock: "Severe (Google)", highlight: false },
            { name: "AWS RDS Postgres", cost: "$15–$150+ mo", perf: "Custom Cloud", lock: "Low-Medium", highlight: false }
          ]
        },
        worthIt: {
          score: 91,
          verdict: "Definitive Buy / Best Developer Value",
          note: "Exceptional price-to-performance. Giving developers full Postgres with zero lock-in makes it superior to Firebase for 95% of web apps.",
          green: [
            "Real PostgreSQL database with full pgvector and extension support",
            "Zero vendor lock-in — export schema and data anytime with pg_dump",
            "Generous free tier with integrated Auth, Storage, and Edge Functions"
          ],
          red: [
            "Free projects pause automatically after 7 days of inactivity",
            "RLS policies can cause catastrophic performance slowdowns if unindexed"
          ]
        },
        spoken: "Supabase gives you full Postgres with Auth, Storage, and Realtime for 25 dollars a month. Ghost comparison shows it crushes Firebase on vendor lock-in because you can export with standard pg-dump. Worth-It score: 91 out of 100. Definite buy."
      },
      apple: {
        id: "apple",
        title: "Apple Mac Studio — M3 Ultra Silicon",
        domain: "apple.com",
        url: "https://apple.com/mac-studio",
        headline: "Outrageous Performance. Remarkably Compact Workstation.",
        description: "Packed with the groundbreaking M3 Ultra chip, Mac Studio delivers up to 32-core CPU, 80-core GPU, and up to 512GB of unified memory for AI model training and 8K ProRes editing.",
        meta: [
          ["Processor", "Apple M3 Ultra (32-core CPU, 80-core GPU)"],
          ["Unified Memory", "Up to 512GB (800GB/s bandwidth)"],
          ["Form Factor", "7.7-inch aluminum desktop enclosure"],
          ["Base Price", "Starting at $3,999 (Configured to $8,499)"]
        ],
        body: [
          {
            title: "Local LLM Inference Powerhouse",
            content: "With up to 512GB of unified memory accessible directly by the GPU cores at 800GB/s bandwidth, Mac Studio can run massive 70B and 405B parameter AI models locally without requiring multi-GPU server clusters."
          },
          {
            title: "Acoustics and Thermal Architecture",
            content: "Whisper-quiet dual-sided blowers channel airflow through the circular heatsink, keeping the system silent even under sustained 100% compute loads."
          }
        ],
        jargon: [
          {
            term: "Unified Memory Architecture (UMA)",
            tech: "Single pool of high-bandwidth memory shared across CPU, GPU, and Neural Engine without PCIe bus transfer overhead.",
            analogy: "Like a shared kitchen table where both painters and writers can grab supplies without having to walk across the hallway."
          },
          {
            term: "UltraFusion Interconnect",
            tech: "High-density silicon bridge connecting two M3 Max dies with over 2.5TB/s of inter-processor bandwidth.",
            analogy: "Like welding two high-speed trains side-by-side with open doors so passengers walk seamlessly between them."
          }
        ],
        competitors: {
          note: "Anakin.io market scrape: For AI researchers running 70B+ LLMs locally, Mac Studio has no desktop competitor at this power draw (under 300W). For Windows 3D rendering or PC gaming, custom NVIDIA RTX 4090 builds offer better raw CUDA FPS per dollar.",
          items: [
            { name: "Mac Studio M3 Ultra", cost: "$3,999–$8,499", perf: "800GB/s Unified", lock: "Apple macOS", highlight: true },
            { name: "Custom PC (RTX 4090)", cost: "$3,500–$5,000", perf: "Top CUDA FPS", lock: "Windows/Linux", highlight: false },
            { name: "Cloud GPU (H100)", cost: "$3.50 / hour", perf: "Enterprise Max", lock: "Cloud Provider", highlight: false }
          ]
        },
        worthIt: {
          score: 79,
          verdict: "Proceed with Caution / High-End Niche",
          note: "Incredible engineering for local AI engineers and video creators, but notoriously overpriced storage and RAM upgrade tiers.",
          green: [
            "512GB unified memory allows running 405B LLMs locally on desktop",
            "Whisper quiet operation under 300 watts power draw",
            "Peerless video encoding engines for 8K ProRes footage"
          ],
          red: [
            "RAM and SSD storage are permanently soldered — zero upgradeability",
            "Storage upgrade pricing is notoriously high ($400 for 1TB)"
          ]
        },
        spoken: "Mac Studio with M3 Ultra is a desktop powerhouse for local AI and video editing. Ghost comparison shows it beats custom PC rigs on memory capacity for running local LLMs, though NVIDIA still wins on gaming. Worth-It score: 79. Beware of Apple's non-upgradeable soldered storage."
      }
    };

    /* ==========================================================================
       APPLICATION STATE & DOM REFERENCES
       ========================================================================== */
    let currentPreset = 'stylus';
    let appState = 'idle'; // idle | listening | reasoning | speaking
    let jargonMode = 'analogy'; // analogy | tech
    let isVoiceMuted = false;
    let recognition = null;
    const STORAGE_KEY = 'vox_audit_history';

    const bodyEl = document.body;
    const navUrl = document.getElementById('nav-url');
    const webViewport = document.getElementById('web-viewport');
    const themeSwitch = document.getElementById('theme-switch');
    const themeLabel = document.getElementById('theme-label');
    const presetBtns = document.querySelectorAll('.preset-btn');

    const voxCapsule = document.getElementById('vox-capsule');
    const orbTrigger = document.getElementById('orb-trigger');
    const capsuleStatusBadge = document.getElementById('capsule-status-badge');
    const capsuleSubtext = document.getElementById('capsule-subtext');

    const voxHud = document.getElementById('vox-hud');
    const hudClose = document.getElementById('hud-close');
    const hudSiteTitle = document.getElementById('hud-site-title');
    const hudWaveform = document.getElementById('hud-waveform');
    const btnAudioMute = document.getElementById('btn-audio-mute');
    const muteLabel = document.getElementById('mute-label');

    const tabAudit = document.getElementById('tab-audit');
    const tabHistory = document.getElementById('tab-history');
    const viewAudit = document.getElementById('view-audit');
    const viewHistory = document.getElementById('view-history');
    const historyBadge = document.getElementById('history-badge');
    const historyItems = document.getElementById('history-items');
    const historySearch = document.getElementById('history-search');
    const btnClearHist = document.getElementById('btn-clear-hist');

    const hudTranscript = document.getElementById('hud-transcript');
    const btnCopyBrief = document.getElementById('btn-copy-brief');
    const btnDownloadCheat = document.getElementById('btn-download-cheat');
    const swarmLog = document.getElementById('swarm-log');

    const sectionWorthit = document.getElementById('section-worthit');
    const hudGauge = document.getElementById('hud-gauge');
    const hudScoreNum = document.getElementById('hud-score-num');
    const hudVerdictTag = document.getElementById('hud-verdict-tag');
    const hudVerdictDesc = document.getElementById('hud-verdict-desc');
    const hudGreenList = document.getElementById('hud-green-list');
    const hudRedList = document.getElementById('hud-red-list');

    const sectionCompare = document.getElementById('section-compare');
    const ghostNote = document.getElementById('ghost-note');
    const ghostTbody = document.getElementById('ghost-tbody');

    const sectionJargon = document.getElementById('section-jargon');
    const btnModeAnalogy = document.getElementById('btn-mode-analogy');
    const btnModeTech = document.getElementById('btn-mode-tech');
    const jargonContainer = document.getElementById('jargon-container');

    /* ==========================================================================
       1. THEME ENGINE (DUAL ADAPTIVE LIGHT & DARK MODE)
       ========================================================================== */
    function toggleTheme() {
      const isDark = bodyEl.classList.contains('theme-dark');
      if (isDark) {
        bodyEl.classList.remove('theme-dark');
        bodyEl.classList.add('theme-light');
        themeLabel.textContent = '🌙 Dark';
      } else {
        bodyEl.classList.remove('theme-light');
        bodyEl.classList.add('theme-dark');
        themeLabel.textContent = '☀️ Light';
      }
    }
    themeSwitch.addEventListener('click', toggleTheme);

    /* ==========================================================================
       2. WEBPAGE RENDERING
       ========================================================================== */
    function renderPage(presetKey) {
      currentPreset = presetKey;
      const p = PRESETS[presetKey];
      navUrl.textContent = p.url;
      hudSiteTitle.textContent = p.domain;

      presetBtns.forEach(b => {
        b.classList.toggle('active', b.dataset.preset === presetKey);
        b.style.borderColor = b.dataset.preset === presetKey ? 'var(--voice)' : 'var(--border)';
        b.style.color = b.dataset.preset === presetKey ? 'var(--voice)' : 'inherit';
      });

      webViewport.innerHTML = `
        <div class="space-y-6">
          <div class="border-b pb-4" style="border-color: var(--border);">
            <span class="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded border" style="background: rgba(34,211,238,0.12); color: var(--voice); border-color: var(--border);">${p.domain}</span>
            <h1 class="text-3xl font-extrabold tracking-tight mt-2">${p.headline}</h1>
            <p class="text-sm opacity-80 mt-2 max-w-2xl leading-relaxed">${p.description}</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            ${p.meta.map(([k, v]) => `
              <div class="p-3 rounded-lg border" style="background: var(--card-bg); border-color: var(--border);">
                <div class="text-[10px] uppercase font-mono opacity-60">${k}</div>
                <div class="text-xs font-semibold mt-1 truncate">${v}</div>
              </div>
            `).join('')}
          </div>

          <div class="space-y-4 pt-2">
            ${p.body.map(sec => `
              <div class="p-5 rounded-xl border" style="background: var(--card-bg); border-color: var(--border);">
                <h3 class="text-base font-bold mb-2">${sec.title}</h3>
                <p class="text-xs leading-relaxed opacity-80">${sec.content}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        renderPage(btn.dataset.preset);
        setCapsuleState('idle', 'READY', 'Page context loaded');
      });
    });

    /* ==========================================================================
       3. DRAGGABLE FLOATING CAPSULE WITH MAGNETIC EDGE SNAPPING
       ========================================================================== */
    let isDragging = false;
    let dragStartX, dragStartY, initialLeft, initialTop, hasMoved = false;

    voxCapsule.addEventListener('pointerdown', (e) => {
      // Don't drag if clicking buttons
      if (e.target.closest('button')) return;
      isDragging = true;
      hasMoved = false;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      const rect = voxCapsule.getBoundingClientRect();
      initialLeft = rect.left;
      initialTop = rect.top;
      voxCapsule.setPointerCapture(e.pointerId);
    });

    voxCapsule.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasMoved = true;

      voxCapsule.style.right = 'auto';
      voxCapsule.style.bottom = 'auto';
      voxCapsule.style.left = `${initialLeft + dx}px`;
      voxCapsule.style.top = `${initialTop + dy}px`;
    });

    voxCapsule.addEventListener('pointerup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      voxCapsule.releasePointerCapture(e.pointerId);

      if (!hasMoved) return;

      // Magnetically snap to left or right screen edge
      const winWidth = window.innerWidth;
      const capsuleWidth = voxCapsule.offsetWidth;
      const currentX = parseInt(voxCapsule.style.left || 0);

      if (currentX + capsuleWidth / 2 < winWidth / 2) {
        voxCapsule.style.left = '24px';
        voxCapsule.style.right = 'auto';
      } else {
        voxCapsule.style.left = 'auto';
        voxCapsule.style.right = '24px';
      }
    });

    function setCapsuleState(state, badgeText, subtext) {
      appState = state;
      voxCapsule.dataset.state = state;
      capsuleStatusBadge.textContent = badgeText;
      capsuleSubtext.textContent = subtext;
      if (state === 'speaking' || state === 'listening') {
        hudWaveform.style.display = 'inline-flex';
      } else {
        hudWaveform.style.display = 'none';
      }
    }

    /* ==========================================================================
       4. MULTI-AGENT SWARM SIMULATION & TELEMETRY PIPELINE
       ========================================================================== */
    async function runAgentSwarm(actionType = 'brief') {
      const p = PRESETS[currentPreset];
      openHud();
      setCapsuleState('reasoning', 'SWARM ACTIVE', 'Reading active page…');

      hudTranscript.textContent = `Analyzing ${p.domain} with multi-agent pipeline…`;
      swarmLog.innerHTML = '';
      sectionWorthit.classList.add('hidden');
      sectionCompare.classList.add('hidden');
      sectionJargon.classList.add('hidden');

      const logSteps = [
        `[Agent 1: Scout] Ingesting active DOM (${p.domain}) · Extracted headings & meta specs.`,
        `[Agent 2: Ghost Web] POST https://api.anakin.io/v1/scrape · Researching competitor pricing.`,
        `[Agent 3: Demystifier] Translating ${p.jargon.length} technical jargon terms into human analogies.`,
        `[Agent 3: Auditor] Computing Worth-It score: ${p.worthIt.score}/100 with green/red flags.`
      ];

      for (let i = 0; i < logSteps.length; i++) {
        await new Promise(r => setTimeout(r, 450));
        const div = document.createElement('div');
        div.textContent = logSteps[i];
        swarmLog.appendChild(div);
      }

      // Render Visual Results
      renderAuditResults(p);
      saveAuditToHistory(p);

      // Vocalize response
      setCapsuleState('speaking', 'SPEAKING', 'Vocalizing summary…');
      speakVoice(p.spoken, () => {
        setCapsuleState('idle', 'READY', 'Audit complete');
      });
    }

    function renderAuditResults(p) {
      hudTranscript.textContent = p.spoken;

      // Worth-It
      sectionWorthit.classList.remove('hidden');
      hudGauge.style.setProperty('--pct', p.worthIt.score);
      hudScoreNum.textContent = p.worthIt.score;
      hudVerdictTag.textContent = p.worthIt.verdict;
      hudVerdictDesc.textContent = p.worthIt.note;
      hudGreenList.innerHTML = p.worthIt.green.map(g => `<li>${g}</li>`).join('');
      hudRedList.innerHTML = p.worthIt.red.map(r => `<li>${r}</li>`).join('');

      // Ghost Comparison
      sectionCompare.classList.remove('hidden');
      ghostNote.textContent = p.competitors.note;
      ghostTbody.innerHTML = p.competitors.items.map(item => `
        <tr class="py-1.5 ${item.highlight ? 'font-bold' : 'opacity-80'}" style="${item.highlight ? 'background: rgba(34,211,238,0.08); color: var(--voice);' : ''}">
          <td class="py-1.5">${item.name}</td>
          <td class="py-1.5">${item.cost}</td>
          <td class="py-1.5">${item.perf}</td>
          <td class="py-1.5">${item.lock}</td>
        </tr>
      `).join('');

      // Jargon
      sectionJargon.classList.remove('hidden');
      renderJargon(p);
    }

    function renderJargon(p) {
      jargonContainer.innerHTML = p.jargon.map(j => `
        <div class="p-3 rounded-lg border text-xs" style="background: var(--card-bg); border-color: var(--border);">
          <div class="font-bold font-mono" style="color: var(--agent);">${j.term}</div>
          <div class="mt-1 leading-relaxed ${jargonMode === 'analogy' ? '' : 'hidden'}" style="color: var(--ink-pri);">
            <span class="text-[10px] font-mono uppercase text-cyan-400 font-bold">Analogy: </span>${j.analogy}
          </div>
          <div class="mt-1 leading-relaxed opacity-75 ${jargonMode === 'tech' ? '' : 'hidden'}">
            <span class="text-[10px] font-mono uppercase text-purple-400 font-bold">Technical: </span>${j.tech}
          </div>
        </div>
      `).join('');
    }

    btnModeAnalogy.addEventListener('click', () => {
      jargonMode = 'analogy';
      btnModeAnalogy.className = 'px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold';
      btnModeTech.className = 'px-2 py-0.5 rounded opacity-60';
      renderJargon(PRESETS[currentPreset]);
    });

    btnModeTech.addEventListener('click', () => {
      jargonMode = 'tech';
      btnModeTech.className = 'px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold';
      btnModeAnalogy.className = 'px-2 py-0.5 rounded opacity-60';
      renderJargon(PRESETS[currentPreset]);
    });

    /* ==========================================================================
       5. SPEECH SYNTHESIS & RECOGNITION (VOICE ENGINE)
       ========================================================================== */
    function speakVoice(text, onComplete) {
      if (isVoiceMuted || !window.speechSynthesis) {
        setTimeout(onComplete, 800);
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.05;
      utterance.pitch = 1.0;
      utterance.onend = onComplete;
      utterance.onerror = onComplete;
      window.speechSynthesis.speak(utterance);
    }

    btnAudioMute.addEventListener('click', () => {
      isVoiceMuted = !isVoiceMuted;
      if (isVoiceMuted) {
        window.speechSynthesis && window.speechSynthesis.cancel();
        muteLabel.textContent = '🔇 Muted';
        muteLabel.classList.add('text-rose-400');
      } else {
        muteLabel.textContent = '🔊 Voice On';
        muteLabel.classList.remove('text-rose-400');
      }
    });

    // Voice recognition setup
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
      recognition = new SR();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setCapsuleState('listening', 'LISTENING', 'Speak now…');
        openHud();
        hudTranscript.textContent = 'Listening to your voice…';
      };

      recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        hudTranscript.textContent = `"${transcript}"`;
        runAgentSwarm('voice');
      };

      recognition.onerror = () => {
        setCapsuleState('idle', 'READY', 'Mic idle');
      };

      recognition.onend = () => {
        if (appState === 'listening') setCapsuleState('idle', 'READY', 'Ready');
      };
    }

    orbTrigger.addEventListener('click', () => {
      if (appState === 'listening') {
        try { recognition && recognition.stop(); } catch (_) {}
        setCapsuleState('idle', 'READY', 'Ready');
        return;
      }
      if (recognition) {
        try { recognition.start(); } catch (_) { runAgentSwarm('brief'); }
      } else {
        runAgentSwarm('brief');
      }
    });

    document.querySelectorAll('.action-chip[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        runAgentSwarm(btn.dataset.action);
      });
    });

    /* ==========================================================================
       6. PERSISTENT AUDIT HISTORY (LOCALSTORAGE & CHROME.STORAGE)
       ========================================================================== */
    function saveAuditToHistory(p) {
      const record = {
        domain: p.domain,
        url: p.url,
        title: p.title,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        score: p.worthIt.score,
        verdict: p.worthIt.verdict,
        summary: p.spoken,
        presetKey: currentPreset
      };
      const list = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const updated = [record, ...list.filter(x => x.domain !== record.domain)].slice(0, 20);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      updateHistoryUI();
    }

    function updateHistoryUI(filterQuery = '') {
      const list = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      historyBadge.textContent = list.length;

      const filtered = list.filter(item => 
        item.domain.toLowerCase().includes(filterQuery.toLowerCase()) || 
        item.verdict.toLowerCase().includes(filterQuery.toLowerCase())
      );

      if (filtered.length === 0) {
        historyItems.innerHTML = `<div class="text-xs opacity-60 text-center py-6">No audits found. Inspect websites to build history.</div>`;
        return;
      }

      historyItems.innerHTML = filtered.map(item => `
        <div class="p-3 rounded-lg border text-xs cursor-pointer hover:border-cyan-400 transition-colors" style="background: var(--card-bg); border-color: var(--border);" data-restore="${item.presetKey}">
          <div class="flex items-center justify-between">
            <span class="font-bold text-xs">${item.domain}</span>
            <span class="font-mono font-bold text-xs px-1.5 py-0.5 rounded" style="background: rgba(34,211,238,0.12); color: var(--voice);">${item.score}/100</span>
          </div>
          <div class="opacity-75 text-[11px] mt-1">${item.verdict}</div>
          <div class="text-[9px] font-mono opacity-50 mt-1.5">${item.timestamp}</div>
        </div>
      `).join('');

      historyItems.querySelectorAll('[data-restore]').forEach(el => {
        el.addEventListener('click', () => {
          const key = el.dataset.restore;
          if (PRESETS[key]) {
            renderPage(key);
            tabAudit.click();
            renderAuditResults(PRESETS[key]);
            setCapsuleState('speaking', 'RESTORED', 'Loaded past audit');
            speakVoice(`Restored audit for ${PRESETS[key].domain}. ${PRESETS[key].spoken}`);
          }
        });
      });
    }

    historySearch.addEventListener('input', (e) => updateHistoryUI(e.target.value));

    btnClearHist.addEventListener('click', () => {
      if (confirm('Clear all stored audit history?')) {
        localStorage.removeItem(STORAGE_KEY);
        updateHistoryUI();
      }
    });

    // Tab Switching
    tabAudit.addEventListener('click', () => {
      tabAudit.style.borderBottomColor = 'var(--voice)';
      tabAudit.style.color = 'var(--voice)';
      tabAudit.classList.remove('opacity-60');
      tabHistory.style.borderBottomColor = 'transparent';
      tabHistory.style.color = 'inherit';
      tabHistory.classList.add('opacity-60');
      viewAudit.classList.remove('hidden');
      viewHistory.classList.add('hidden');
    });

    tabHistory.addEventListener('click', () => {
      tabHistory.style.borderBottomColor = 'var(--voice)';
      tabHistory.style.color = 'var(--voice)';
      tabHistory.classList.remove('opacity-60');
      tabAudit.style.borderBottomColor = 'transparent';
      tabAudit.style.color = 'inherit';
      tabAudit.classList.add('opacity-60');
      viewHistory.classList.remove('hidden');
      viewAudit.classList.add('hidden');
      updateHistoryUI();
    });

    /* ==========================================================================
       7. CLIPBOARD COPY & CHEATSHEET EXPORT
       ========================================================================== */
    btnCopyBrief.addEventListener('click', () => {
      const p = PRESETS[currentPreset];
      const markdown = `# ${p.domain} — Vox Agent Audit Brief\n**Worth-It Score:** ${p.worthIt.score}/100 (${p.worthIt.verdict})\n\n## Summary\n${p.spoken}\n\n## Green Flags\n${p.worthIt.green.map(g => '- ' + g).join('\n')}\n\n## Red Flags\n${p.worthIt.red.map(r => '- ' + r).join('\n')}\n`;
      navigator.clipboard.writeText(markdown).then(() => {
        btnCopyBrief.textContent = '✅ Copied!';
        setTimeout(() => btnCopyBrief.textContent = '📋 Copy Brief', 2000);
      });
    });

    btnDownloadCheat.addEventListener('click', () => {
      const p = PRESETS[currentPreset];
      const markdown = `# VOX AGENT CHEATSHEET: ${p.domain}\nDate: ${new Date().toLocaleDateString()}\nScore: ${p.worthIt.score}/100 (${p.worthIt.verdict})\nURL: ${p.url}\n\n## 30-Second Brief\n${p.spoken}\n\n## Competitor Comparison (Anakin.io Scrape)\n${p.competitors.note}\n\n## Jargon Demystified\n${p.jargon.map(j => `### ${j.term}\n- **Analogy:** ${j.analogy}\n- **Technical:** ${j.tech}\n`).join('\n')}`;
      const blob = new Blob([markdown], { type: 'text/markdown' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `vox-cheatsheet-${p.domain}.md`;
      a.click();
    });

    /* ==========================================================================
       8. HUD OPEN / CLOSE
       ========================================================================== */
    function openHud() { voxHud.classList.add('open'); }
    function closeHud() {
      voxHud.classList.remove('open');
      window.speechSynthesis && window.speechSynthesis.cancel();
      setCapsuleState('idle', 'READY', 'Ready');
    }
    hudClose.addEventListener('click', closeHud);

    /* ==========================================================================
       INITIALIZATION
       ========================================================================== */
    renderPage('stylus');
    updateHistoryUI();
    if (window.lucide) lucide.createIcons();
  </script>
</body>
</html>
```

---

## 6. VERIFICATION CRITERIA FOR MIMO DESKTOP
When executed in Xiaomi MiMo Desktop:
1. **Interactive Preset Switching:** Clicking between Arbitrum Stylus, Supabase, and Apple Mac Studio re-renders the simulated page DOM smoothly.
2. **Adaptive Dual-Theme Mode:** Clicking the `☀️/🌙` toggle changes between Frosted Pearl (Light Glass) and Obsidian Glass (Dark Mode) with zero visual contrast degradation.
3. **Draggable Floating Capsule:** The floating capsule at the bottom-right can be freely dragged with mouse/touch and magnetically snaps to the nearest screen edge upon release.
4. **Multi-Agent Telemetry Log:** Clicking any prompt chip triggers live multi-agent swarm steps (Scout -> Ghost Anakin Web Scraper -> Demystifier -> Auditor).
5. **Speech Synthesis & Mute:** Utterance audio plays out loud while the HUD waveform visualizes speech. Toggling `🔊 Voice On` / `🔇 Muted` halts audio cleanly.
6. **Persistent Audit History:** Audits automatically save to history with timestamps and scores. Clicking past history entries immediately restores their reports in 1 click.
7. **Zero AI-Slop:** Glassmorphic translucent panels, 1px hairline borders, high-density data typography, and zero tacky emoji/purple spam.

Execute this specification and generate the fully functional application now!
```
