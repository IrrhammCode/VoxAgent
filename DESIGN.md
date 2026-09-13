# DESIGN.md — Vox Agent

In-browser multi-agent voice copilot. Hackathon demo for Anakin Forge. Self-contained single page.

## Identity
Product UI Designer — the user hits listening/idle 90% of the time; instrument clarity over marketing spectacle.

## Grounding
Brief is fully specified (palette, architecture, three presets, four agents). Execute inside it, not around it. Assumption: this is a **demo shell**, not a real extension — simulated browser chrome + live HUD so every state is reachable without Chrome Web Store install. Defer: real Anakin API keys (mocked offline; labeled as mock).

---

## 1. Objective
Show a working ambient voice agent that reads the active page, ghost-compares competitors, demystifies jargon, and delivers a Worth-It verdict — without opening a second tab.

## 2. Product Context
- **Surface:** simulated browser (chrome + page) + floating orb + right HUD.
- **States (primary):** idle → listening → reasoning → speaking → answer-ready.
- **Audience:** hackathon judges and early adopters evaluating “agents that act on live web data.”
- **Jobs:** (1) speak a question or hit a quick prompt, (2) watch the swarm reason, (3) hear + read the verdict.

## 3. Visual Foundations

| Token | Value | Role |
|---|---|---|
| `--void` | `#070A12` | page shell |
| `--chrome` | `#0C1220` | browser chrome, HUD rail |
| `--panel` | `#121A2C` | glass cards / simulated site body |
| `--ink` | `#E8EDF5` | primary text |
| `--muted` | `#8B96A8` | secondary / labels |
| `--line` | `rgba(255,255,255,0.10)` | hairlines |
| `--voice` | `#22D3EE` | listen / speak / primary action |
| `--voice-deep` | `#0EA5E9` | voice hover / fill |
| `--agent` | `#8B5CF6` | reasoning / Anakin scrape |
| `--ok` | `#34D399` | green flags, success |
| `--warn` | `#FBBF24` | caution |
| `--bad` | `#F43F5E` | red flags, traps |
| `--glass` | `rgba(15,23,42,0.82)` | overlay panels |

**Type**
- UI: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif`
- Display: same stack, weight 600–700, tracking `-0.02em`
- Data / agent log: `ui-monospace, "SF Mono", "Cascadia Code", Consolas, monospace` — **load-bearing**. Agent stream, URLs, scores, prices all mono so the product feels like instrumentation, not chat.

**Scale:** 11 / 12 / 13 / 14 / 16 / 20 / 28 / 36

**Layout system**
- 12-col mental grid inside a fixed “browser viewport” frame (max ~1280 content width, full viewport height).
- HUD: 400px right rail, slides over content, does not reflow the page.
- Orb: 72px fixed bottom-right, 24px inset; only element allowed a glow ring.
- Spacing rhythm: 4 / 8 / 12 / 16 / 24 / 32 / 48
- Density: HUD is dense (instrument); simulated sites are editorial (readable copy).

**Signature moment**
The orb is a **listening instrument**, not a purple glass blob: concentric hairline rings, one cyan core, state changes expressed as ring pulse + color. The agent log is the second signature — a mono stream that stages Scout → Ghost → Demystifier → Auditor with real timestamps.

**Risk taken**
No feature-card grid. Comparison, glossary, and verdict are **tables / definition lists / a radial meter**, not icon+title+blurb tiles. The “marketing neon” palette is retained but spent only on state (voice / agent / flags), never as decoration on static chrome.

---

## 4. Accessibility
- Body contrast ≥ 4.5:1 on `--void` / `--panel`; large mono scores ≥ 3:1.
- Focus-visible rings on all interactive controls (`--voice` outline).
- `prefers-reduced-motion`: kill orb pulse, wave bars, slide transitions.
- Keyboard: orb is a real button; HUD close; preset tabs are buttons with `aria-selected`.
- Status changes announced via `aria-live="polite"` on the agent log region.
- TTS optional; all spoken content also appears as text.

## 5. Voice & Tone
- UI chrome: short, imperative, no hype. “Listen”, “Compare alternatives”, “Close”.
- Agent copy: concrete. Prices, limits, named competitors. No “unlock potential”.
- Errors / empty: state what failed and the next action (e.g. mic denied → click orb or use a quick prompt).
- Wake label: “Hey Vox” as a caption, not a slogan.

## 6. Implementation Practices
- Single `index.html`, vanilla JS, Tailwind CDN + Lucide CDN (brief-requested). No build step.
- Fonts: system stacks only (sandbox-safe).
- Voice: `webkitSpeechRecognition` when present; always offer simulated query chips + optional text field fallback.
- TTS: `speechSynthesis` with rate ~1.05; cancel previous utterance on new run.
- Anakin scrape: structured mock payloads per preset; UI labels them “Anakin scrape (simulated)” so judges aren’t misled.
- State machine: `idle | listening | reasoning | speaking | done`. One pipeline runner; presets reset pipeline.
- No external images. Icons via Lucide `createIcons`.

## 7. Anti-Patterns (refused)
- Gradient hero / purple-blue wash on static UI.
- Six-card “features” grid with emoji headers.
- Emoji as section decoration (status glyphs only if icon fonts fail — prefer Lucide).
- Generic chat bubble timeline for the agent log.
- Slop copy (“seamless”, “powerful”, “next-gen”).
- Fake infinite scroll of marketing stats.

## 8. Decision-Making
- Prefer table + mono readouts over cards.
- Prefer staged pipeline visibility over a single spinner.
- Prefer one glow (orb) over glow-everything.
- Prefer honesty labels on mocks.

## 9. Workflow
DESIGN.md → `index.html` (one file) → static review of states/a11y/anti-slop → hand off as preview file.
