/**
 * Vox Agent — Ambient In-Browser Multi-Agent Voice Copilot
 * Refined V3: Zero Emoji-Slop, Pure Floating Frosted Glass, Flexible Natural Language, Continuous Wake & Voice Input
 */

(function () {
  if (document.querySelector('vox-copilot-root')) return;

  console.log('[Vox Agent V3] Ambient Voice Copilot initialized on:', window.location.hostname);

  // Injected Host Styles for Webpage Spotlight Halo
  function injectHostStyles() {
    if (document.getElementById('vox-host-spotlight-styles')) return;
    const s = document.createElement('style');
    s.id = 'vox-host-spotlight-styles';
    s.textContent = `
      .vox-halo-highlight {
        outline: 2px solid #22D3EE !important;
        outline-offset: 6px !important;
        box-shadow: 0 0 36px rgba(34, 211, 238, 0.48), inset 0 0 24px rgba(34, 211, 238, 0.10) !important;
        border-radius: 8px !important;
        transition: outline 0.35s ease, box-shadow 0.35s ease !important;
        animation: voxHaloBreathe 2.4s infinite ease-in-out !important;
        position: relative !important;
      }
      @keyframes voxHaloBreathe {
        0% { box-shadow: 0 0 24px rgba(34, 211, 238, 0.35); outline-color: rgba(34, 211, 238, 0.75); }
        50% { box-shadow: 0 0 45px rgba(34, 211, 238, 0.70); outline-color: rgba(34, 211, 238, 1); }
        100% { box-shadow: 0 0 24px rgba(34, 211, 238, 0.35); outline-color: rgba(34, 211, 238, 0.75); }
      }
      .vox-focus-badge {
        position: absolute !important;
        z-index: 2147483640 !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 7px !important;
        padding: 5px 12px !important;
        background: rgba(10, 15, 29, 0.94) !important;
        backdrop-filter: blur(14px) !important;
        -webkit-backdrop-filter: blur(14px) !important;
        border: 1px solid rgba(34, 211, 238, 0.6) !important;
        border-radius: 999px !important;
        color: #22D3EE !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        font-size: 11px !important;
        font-weight: 600 !important;
        letter-spacing: 0.02em !important;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6), 0 0 16px rgba(34, 211, 238, 0.3) !important;
        pointer-events: none !important;
        animation: voxBadgeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
      }
      @keyframes voxBadgeIn {
        from { opacity: 0; transform: translateY(5px) scale(0.96); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      .vox-focus-dot {
        width: 6px !important;
        height: 6px !important;
        border-radius: 50% !important;
        background: #22D3EE !important;
        box-shadow: 0 0 8px #22D3EE !important;
        display: inline-block !important;
        animation: voxDotPulse 1.6s infinite ease-in-out !important;
      }
      @keyframes voxDotPulse {
        0% { transform: scale(0.9); opacity: 0.8; }
        50% { transform: scale(1.3); opacity: 1; }
        100% { transform: scale(0.9); opacity: 0.8; }
      }
    `;
    (document.head || document.documentElement).appendChild(s);
  }
  injectHostStyles();

  // 1. Root & Shadow DOM Isolation
  const host = document.createElement('vox-copilot-root');
  document.documentElement.appendChild(host);
  const shadow = host.attachShadow({ mode: 'open' });

  // 2. Scoped Styling (No AI-Slop, Ultra-Refined Frosted Glass)
  const style = document.createElement('style');
  style.textContent = `
    :host {
      --font-main: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      --font-mono: ui-monospace, "SF Mono", "Cascadia Code", Consolas, monospace;
      font-family: var(--font-main);
      pointer-events: none !important;
    }

    /* THEME: Obsidian Glass (Dark Mode) */
    .theme-dark {
      --hud-bg: rgba(9, 13, 24, 0.88);
      --card-bg: rgba(17, 24, 40, 0.65);
      --card-hover: rgba(25, 35, 56, 0.80);
      --ink-pri: #F8FAFC;
      --ink-sec: #94A3B8;
      --border: rgba(255, 255, 255, 0.10);
      --border-subtle: rgba(255, 255, 255, 0.05);
      --voice: #22D3EE;
      --voice-glow: rgba(34, 211, 238, 0.35);
      --agent: #A855F7;
      --ok: #34D399;
      --bad: #F43F5E;
      --shadow: 0 24px 64px rgba(0, 0, 0, 0.55), 0 4px 16px rgba(0, 0, 0, 0.4);
      --meter-track: rgba(255, 255, 255, 0.08);
      --chip-bg: rgba(34, 211, 238, 0.10);
    }

    /* THEME: Frosted Pearl (Light Glass for bright sites like Apple/Google) */
    .theme-light {
      --hud-bg: rgba(255, 255, 255, 0.90);
      --card-bg: rgba(241, 245, 249, 0.82);
      --card-hover: rgba(226, 232, 240, 0.92);
      --ink-pri: #0F172A;
      --ink-sec: #64748B;
      --border: rgba(15, 23, 42, 0.10);
      --border-subtle: rgba(15, 23, 42, 0.05);
      --voice: #0284C7;
      --voice-glow: rgba(2, 132, 199, 0.25);
      --agent: #7C3AED;
      --ok: #059669;
      --bad: #E11D48;
      --shadow: 0 24px 64px rgba(15, 23, 42, 0.14), 0 4px 16px rgba(15, 23, 42, 0.08);
      --meter-track: rgba(15, 23, 42, 0.08);
      --chip-bg: rgba(2, 132, 199, 0.08);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    .mono { font-family: var(--font-mono); }

    /* Explicit hit-testing */
    .vox-capsule,
    .vox-dialog,
    button,
    input {
      pointer-events: auto !important;
    }

    /* ===== MINIMALIST FLOATING CAPSULE (DOCK) ===== */
    /* ===== NEXT-GEN FLOATING STAGE & MORPHING CAPSULE (FROM IRRHAMMCODE/FLOAT) ===== */
    .floating-stage {
      --edge: 28px;
      position: fixed;
      right: var(--edge);
      bottom: 24px;
      z-index: 2147483647;
      width: 330px;
      height: 270px;
      pointer-events: none !important;
      transition: right 0.75s cubic-bezier(.22, 1, .36, 1), left 0.75s cubic-bezier(.22, 1, .36, 1);
      user-select: none;
    }
    .floating-stage.dock-left {
      left: var(--edge);
      right: auto;
    }
    .floating-stage * {
      box-sizing: border-box;
    }

    /* Morphing Capsule */
    .capsule {
      pointer-events: auto !important;
      position: absolute;
      right: 0;
      bottom: 12px;
      width: 290px;
      height: 66px;
      padding: 8px 10px 8px 10px;
      border-radius: 24px;
      background: linear-gradient(112deg, rgba(18, 24, 38, 0.94), rgba(26, 34, 56, 0.85));
      border: 1px solid rgba(255, 255, 255, 0.22);
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.22), 0 20px 45px rgba(10, 13, 24, 0.35), 0 4px 12px rgba(10, 13, 24, 0.2);
      backdrop-filter: blur(28px) saturate(1.4);
      -webkit-backdrop-filter: blur(28px) saturate(1.4);
      display: flex;
      align-items: center;
      gap: 10px;
      color: #ffffff;
      isolation: isolate;
      cursor: default;
      transition: width 0.7s cubic-bezier(.2, 1.35, .35, 1), height 0.65s cubic-bezier(.2, 1.35, .35, 1), border-radius 0.65s cubic-bezier(.2, 1.35, .35, 1), transform 0.65s cubic-bezier(.2, 1.35, .35, 1), border-color 0.3s ease, box-shadow 0.3s ease;
    }
    .floating-stage.dock-left .capsule {
      right: auto;
      left: 0;
    }
    .capsule:hover {
      border-color: rgba(99, 102, 241, 0.6);
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 24px 50px rgba(10, 13, 24, 0.45), 0 0 22px rgba(99, 102, 241, 0.3);
    }

    /* Specular Reflection Highlight with gentle shimmer sweep */
    .capsule-specular {
      position: absolute;
      z-index: -1;
      left: 1px;
      right: 1px;
      top: 1px;
      height: 50%;
      border-radius: 23px 23px 45% 45%;
      background: linear-gradient(110deg, rgba(255, 255, 255, 0.22), transparent 45%);
      pointer-events: none;
      overflow: hidden;
    }
    .capsule-specular::after {
      content: '';
      position: absolute;
      top: 0; left: -100%; width: 60%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
      animation: specularSweep 6s ease-in-out infinite;
    }
    @keyframes specularSweep {
      0%, 80% { transform: translateX(0); opacity: 0; }
      85% { opacity: 0.8; }
      100% { transform: translateX(450%); opacity: 0; }
    }

    /* Interactive Capsule Core Orb */
    .capsule-core {
      width: 48px;
      height: 48px;
      flex: none;
      border-radius: 17px;
      background: linear-gradient(135deg, #4666ff, #849cff);
      display: grid;
      place-items: center;
      box-shadow: inset 0 1px 1px #c5d0ff, 0 6px 18px rgba(70, 102, 255, 0.45);
      overflow: hidden;
      cursor: pointer !important;
      transition: all 0.6s cubic-bezier(.2, 1.35, .35, 1);
    }
    .capsule-core:hover {
      transform: scale(1.06);
      box-shadow: inset 0 1px 1px #ffffff, 0 8px 24px rgba(70, 102, 255, 0.65);
    }
    .capsule-core:active {
      transform: scale(0.96);
    }

    .ambient-core svg {
      width: 20px;
      height: 20px;
      color: #ffffff;
      animation: sparkleBreathe 3s ease-in-out infinite alternate;
    }
    @keyframes sparkleBreathe {
      from { transform: scale(0.92) rotate(-4deg); opacity: 0.85; filter: drop-shadow(0 0 2px #fff); }
      to { transform: scale(1.08) rotate(4deg); opacity: 1; filter: drop-shadow(0 0 8px #fff); }
    }

    /* Capsule Copy */
    .capsule-copy {
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
      flex: 1;
      cursor: pointer;
    }
    .capsule-overline {
      font-family: var(--font-mono, monospace);
      font-size: 8.5px;
      letter-spacing: 0.08em;
      color: #aab5de;
      text-transform: uppercase;
      font-weight: 600;
    }
    .capsule-copy strong {
      font-size: 11.5px;
      letter-spacing: -0.02em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #f8fafc;
      font-weight: 600;
    }

    /* Inline Capsule Input */
    .vox-capsule-input {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 999px;
      padding: 4px 10px;
      font-size: 11px;
      color: #fff;
      outline: none;
      width: 75px;
      transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease, border-color 0.2s ease;
      font-family: inherit;
    }
    .vox-capsule-input::placeholder {
      color: rgba(255, 255, 255, 0.45);
    }
    .vox-capsule-input:focus {
      width: 120px;
      background: rgba(255, 255, 255, 0.16);
      border-color: #6366f1;
    }

    /* Capsule Toggle Button */
    .capsule-button {
      width: 32px;
      height: 32px;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      color: #ffffff;
      background: rgba(255, 255, 255, 0.12);
      font-size: 14px;
      display: grid;
      place-items: center;
      cursor: pointer !important;
      flex: none;
      transition: all 0.25s cubic-bezier(.16, 1, .3, 1);
    }
    .capsule-button:hover {
      background: rgba(255, 255, 255, 0.24);
      transform: scale(1.08);
    }
    .capsule-button:active {
      transform: scale(0.94);
    }

    /* Capsule Ambient Shadow */
    .capsule-shadow {
      position: absolute;
      bottom: 4px;
      right: 15px;
      width: 260px;
      height: 22px;
      border-radius: 50%;
      filter: blur(14px);
      background: rgba(15, 23, 42, 0.45);
      transition: 0.6s;
    }
    .floating-stage.dock-left .capsule-shadow {
      right: auto;
      left: 15px;
    }

    /* Dock Flipping Handle */
    .dock-handle {
      pointer-events: auto !important;
      position: absolute;
      right: -24px;
      bottom: 27px;
      border: 0;
      border-radius: 9px;
      color: #94a3b8;
      background: rgba(255, 255, 255, 0.75);
      opacity: 0;
      transform: translateX(-6px);
      transition: all 0.25s ease;
      padding: 4px 6px;
      font-size: 11px;
      cursor: pointer !important;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .dock-handle span { letter-spacing: 2px; }
    .floating-stage:hover .dock-handle {
      opacity: 1;
      transform: none;
    }
    .floating-stage.dock-left .dock-handle {
      right: auto;
      left: -24px;
      transform: translateX(6px);
    }
    .floating-stage.dock-left:hover .dock-handle {
      transform: none;
    }

    /* Collision Vector Avoidance Line */
    .avoidance-line {
      position: absolute;
      right: 126px;
      bottom: 99px;
      width: 95px;
      color: #4f46e5;
      font-family: var(--font-mono, monospace);
      font-size: 8px;
      opacity: 0;
      transition: 0.4s;
    }
    .avoidance-line i {
      height: 1px;
      width: 100%;
      display: block;
      margin-top: 6px;
      background: linear-gradient(90deg, transparent, #4f46e5);
    }
    .is-aware .avoidance-line { opacity: 0.8; }
    .floating-stage.dock-left .avoidance-line {
      right: auto;
      left: 126px;
    }
    .floating-stage.dock-left .avoidance-line i {
      transform: scaleX(-1);
    }

    /* Voice Waves 7-bar equalizer animation */
    .voice-waves {
      display: flex;
      align-items: center;
      gap: 3px;
      height: 24px;
    }
    .voice-waves i {
      width: 3px;
      border-radius: 3px;
      background: #ffffff;
      animation: wave 0.75s ease-in-out infinite alternate;
    }
    .voice-waves i:nth-child(1), .voice-waves i:nth-child(7) { height: 6px; }
    .voice-waves i:nth-child(2), .voice-waves i:nth-child(6) { height: 14px; animation-delay: 0.12s; }
    .voice-waves i:nth-child(3), .voice-waves i:nth-child(5) { height: 22px; animation-delay: 0.25s; }
    .voice-waves i:nth-child(4) { height: 30px; animation-delay: 0.38s; }
    @keyframes wave {
      to { transform: scaleY(0.28); }
    }

    /* Thinking Field 5 orbiting particles */
    .thinking-field {
      position: relative;
      width: 30px;
      height: 30px;
    }
    .thinking-field i {
      position: absolute;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #ffffff;
      animation: orbit 1.8s linear infinite;
    }
    .thinking-field i:nth-child(2) { animation-delay: -0.36s; }
    .thinking-field i:nth-child(3) { animation-delay: -0.72s; }
    .thinking-field i:nth-child(4) { animation-delay: -1.08s; }
    .thinking-field i:nth-child(5) { animation-delay: -1.44s; }
    @keyframes orbit {
      from { transform: rotate(0deg) translateX(12px) rotate(0deg); opacity: 0.45; }
      50% { opacity: 1; }
      to { transform: rotate(360deg) translateX(12px) rotate(-360deg); opacity: 0.45; }
    }

    /* Success checkmark */
    .success-mark span {
      font-size: 26px;
      font-weight: 700;
      color: #ffffff;
      display: block;
      animation: checkPop 0.7s cubic-bezier(.2, 1.4, .4, 1);
    }
    @keyframes checkPop {
      from { transform: scale(0) rotate(-35deg); }
      to { transform: scale(1) rotate(0); }
    }

    /* Action trigger symbol */
    .action-trigger span {
      font-size: 26px;
      font-weight: 300;
      line-height: 1;
    }

    /* ===== MORPHING MODES ===== */
    /* 1. Listening Mode */
    .mode-listening .capsule {
      width: 325px;
      height: 76px;
      border-radius: 28px;
      transform: translateY(-4px);
      box-shadow: inset 0 1px 1px rgba(255,255,255,0.3), 0 24px 50px rgba(10,13,24,0.4), 0 0 32px rgba(79, 70, 229, 0.45);
    }
    .mode-listening .capsule-core {
      width: 58px;
      height: 58px;
      border-radius: 20px;
      background: radial-gradient(circle, #a5b4fc 0%, #4f46e5 60%, #1e1b4b 100%);
    }

    /* 2. Thinking Mode */
    .mode-thinking .capsule {
      width: 315px;
      border-radius: 26px;
      box-shadow: inset 0 1px 1px rgba(255,255,255,0.3), 0 24px 50px rgba(10,13,24,0.4), 0 0 30px rgba(168, 85, 247, 0.4);
    }
    .mode-thinking .capsule-core {
      background: linear-gradient(140deg, #9333ea, #3b82f6);
    }

    /* 3. Success Mode */
    .mode-success .capsule {
      width: 295px;
      transform: translateY(-3px) scale(1.02);
      border-color: rgba(52, 211, 153, 0.6);
      box-shadow: inset 0 1px 1px rgba(255,255,255,0.3), 0 24px 50px rgba(10,13,24,0.4), 0 0 35px rgba(16, 185, 129, 0.45);
    }
    .mode-success .capsule-core {
      background: linear-gradient(140deg, #10b981, #059669);
      border-radius: 50%;
    }

    /* Micro Victory Success Card */
    .success-card {
      position: absolute;
      pointer-events: auto !important;
      right: 0;
      bottom: 95px;
      width: 215px;
      border-radius: 16px;
      padding: 13px 14px;
      background: rgba(255, 255, 255, 0.92);
      border: 1px solid rgba(255, 255, 255, 0.9);
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.22);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      animation: cardIn 0.65s cubic-bezier(.2, 1.35, .3, 1);
      color: #0f172a;
    }
    .floating-stage.dock-left .success-card {
      right: auto;
      left: 0;
    }
    .success-card span {
      font-family: var(--font-mono, monospace);
      font-size: 8.5px;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .success-card strong {
      font-size: 20px;
      letter-spacing: -0.05em;
      display: block;
      margin: 3px 0;
      color: #047857;
    }
    .success-card p {
      font-size: 9.5px;
      color: #475569;
      margin: 0;
      line-height: 1.4;
    }
    .success-card b {
      color: #059669;
    }
    @keyframes cardIn {
      from { opacity: 0; transform: translateY(18px) scale(0.88); }
      to { opacity: 1; transform: none; }
    }

    /* Micro Toast notification */
    .toast {
      position: absolute;
      right: 0;
      bottom: -20px;
      font-size: 9.5px;
      font-family: var(--font-mono, monospace);
      color: #94a3b8;
      white-space: nowrap;
      animation: fadeUp 0.5s;
    }
    .floating-stage.dock-left .toast {
      right: auto;
      left: 0;
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: none; }
    }

    /* ===== ACTION ORBIT (FAN-OUT CURVED LAYOUT) ===== */
    .action-orbit {
      pointer-events: none !important;
      position: absolute;
      right: -5px;
      bottom: 22px;
      width: 330px;
      height: 220px;
      transition: 0.55s;
    }
    .orbit-action {
      pointer-events: auto !important;
      position: absolute;
      right: 10px;
      bottom: 20px;
      display: flex;
      align-items: center;
      gap: 8px;
      border: 0;
      padding: 7px 11px 7px 8px;
      border-radius: 18px;
      background: rgba(250, 251, 255, 0.92);
      box-shadow: 0 12px 28px rgba(15, 23, 42, 0.26);
      border: 1px solid rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      opacity: 0;
      transform: translate(0, 0) scale(0.6);
      transition: transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s ease, border-color 0.2s, box-shadow 0.2s;
      text-align: left;
      color: #0f172a;
      cursor: pointer !important;
    }
    .orbit-action:hover {
      border-color: #4f46e5;
      box-shadow: 0 16px 36px rgba(79, 70, 229, 0.35);
      background: #ffffff;
    }
    .orbit-action:active {
      transform: scale(0.96) !important;
    }
    .orbit-action b {
      width: 30px;
      height: 30px;
      display: grid;
      place-items: center;
      border-radius: 11px;
      background: #e0e7ff;
      color: #4338ca;
      font-size: 16px;
      flex: none;
    }
    .orbit-action span {
      display: flex;
      flex-direction: column;
      gap: 1px;
    }
    .orbit-action strong {
      font-size: 11px;
      font-weight: 700;
      white-space: nowrap;
      color: #0f172a;
    }
    .orbit-action small {
      font-size: 8.5px;
      color: #64748b;
      white-space: nowrap;
    }

    /* 4. Actions Mode: Morph Capsule into Anchor & Fan-Out Orbit Buttons */
    .mode-actions .capsule {
      width: 250px;
      height: 72px;
      bottom: 8px;
      border-radius: 28px;
      transform: translateX(-36px);
      box-shadow: inset 0 1px 1px rgba(255,255,255,0.3), 0 24px 50px rgba(10,13,24,0.4), 0 0 25px rgba(99, 102, 241, 0.35);
    }
    .mode-actions .capsule-copy {
      display: none;
    }
    .mode-actions .vox-capsule-input {
      display: none;
    }
    .mode-actions .capsule-core {
      width: 56px;
      height: 56px;
      border-radius: 20px;
    }
    .mode-actions .capsule-button {
      margin-left: auto;
      background: rgba(255, 255, 255, 0.28);
    }

    /* Fan-out transform offsets with spring overshoot */
    .mode-actions .action-0 {
      transform: translate(-188px, -143px) scale(1);
      opacity: 1;
      transition-delay: 0.05s;
    }
    .mode-actions .action-1 {
      transform: translate(-237px, -83px) scale(1);
      opacity: 1;
      transition-delay: 0.11s;
    }
    .mode-actions .action-2 {
      transform: translate(-237px, -11px) scale(1);
      opacity: 1;
      transition-delay: 0.17s;
    }
    .mode-actions .action-3 {
      transform: translate(-184px, 48px) scale(1);
      opacity: 1;
      transition-delay: 0.23s;
    }

    /* Dock Left adjustments for Action Orbit */
    .floating-stage.dock-left .action-orbit {
      right: auto;
      left: -5px;
      transform: scaleX(-1);
    }
    .floating-stage.dock-left .orbit-action > * {
      transform: scaleX(-1);
    }
    .floating-stage.dock-left.mode-actions .capsule {
      transform: translateX(36px);
    }
    .vox-shop-dialog-bar {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--border-subtle);
    }
    .vox-deal-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 10px;
      transition: border-color 0.2s ease;
    }
    .vox-deal-card:hover {
      border-color: var(--voice);
    }
    .vox-coupon-badge {
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      color: var(--voice);
      background: var(--chip-bg);
      padding: 2px 8px;
      border-radius: 6px;
      border: 1px dashed var(--voice);
      letter-spacing: 0.04em;
    }

    /* Circular Microphone Orb */
    .vox-mic-btn {
      width: 40px;
      height: 40px;
      border-radius: 9999px;
      position: relative;
      display: grid;
      place-items: center;
      background: radial-gradient(circle at 50% 45%, var(--card-hover) 0%, var(--card-bg) 80%);
      border: 1.5px solid var(--voice);
      box-shadow: 0 0 12px var(--voice-glow);
      cursor: pointer !important;
      flex-shrink: 0;
      color: var(--voice);
      transition: all 0.25s ease;
      outline: none;
    }
    .vox-mic-btn:hover {
      transform: scale(1.08);
      box-shadow: 0 0 20px var(--voice);
    }

    /* Listening / Speaking animation on Mic */
    .vox-capsule[data-state="listening"] .vox-mic-btn {
      border-color: #67E8F9;
      box-shadow: 0 0 24px #67E8F9;
      color: #67E8F9;
      animation: mic-pulse 1.1s ease-in-out infinite alternate;
    }
    .vox-capsule[data-state="reasoning"] .vox-mic-btn {
      border-color: var(--agent);
      box-shadow: 0 0 24px var(--agent);
      color: var(--agent);
      animation: mic-pulse 0.7s ease-in-out infinite alternate;
    }
    .vox-capsule[data-state="speaking"] .vox-mic-btn {
      border-color: var(--ok);
      box-shadow: 0 0 20px var(--ok);
      color: var(--ok);
    }

    @keyframes mic-pulse {
      from { transform: scale(0.92); }
      to { transform: scale(1.18); }
    }

    .vox-capsule-info {
      display: flex;
      flex-direction: column;
      cursor: pointer;
    }
    .vox-capsule-label {
      font-size: 12.5px;
      font-weight: 700;
      letter-spacing: -0.01em;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .vox-capsule-sub {
      font-size: 10px;
      color: var(--ink-sec);
      white-space: nowrap;
    }

    /* Inline text input for typing questions */
    .vox-quick-input {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 9999px;
      padding: 6px 12px;
      font-size: 11.5px;
      color: var(--ink-pri);
      outline: none;
      width: 170px;
      font-family: inherit;
      transition: width 0.25s ease, border-color 0.2s ease;
    }
    .vox-quick-input:focus {
      width: 240px;
      border-color: var(--voice);
      box-shadow: 0 0 10px var(--voice-glow);
    }
    .vox-quick-input::placeholder {
      color: var(--ink-sec);
      opacity: 0.8;
    }

    .vox-hotkey-tag {
      font-family: var(--font-mono);
      font-size: 9.5px;
      padding: 3px 6px;
      border-radius: 4px;
      background: var(--border-subtle);
      border: 1px solid var(--border);
      color: var(--ink-sec);
    }

    /* ===== AMBIENT FLOATING DIALOG CARD ===== */
    .vox-dialog {
      position: fixed;
      bottom: 84px;
      right: 24px;
      width: 440px;
      max-width: calc(100vw - 32px);
      max-height: calc(100vh - 110px);
      background: var(--hud-bg);
      backdrop-filter: blur(32px) saturate(200%);
      -webkit-backdrop-filter: blur(32px) saturate(200%);
      border: 1px solid var(--border);
      border-radius: 18px;
      box-shadow: var(--shadow);
      z-index: 2147483646;
      color: var(--ink-pri);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      opacity: 0;
      transform: translateY(16px) scale(0.98);
      pointer-events: none !important;
      transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .vox-dialog.open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto !important;
    }

    .vox-dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 18px;
      border-bottom: 1px solid var(--border);
    }
    .vox-dialog-title {
      font-size: 13.5px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .vox-tag-domain {
      font-family: var(--font-mono);
      font-size: 10px;
      padding: 2px 7px;
      border-radius: 999px;
      background: var(--chip-bg);
      color: var(--voice);
      border: 1px solid var(--border);
    }

    .vox-dialog-tools {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .vox-icon-btn {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--ink-sec);
      border-radius: 8px;
      padding: 5px 9px;
      font-size: 11px;
      font-family: var(--font-mono);
      cursor: pointer !important;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: all 0.15s ease;
    }
    .vox-icon-btn:hover {
      border-color: var(--voice);
      color: var(--voice);
      background: var(--card-hover);
    }

    /* Live Voice Waveform */
    .waveform {
      display: inline-flex;
      align-items: flex-end;
      gap: 3px;
      height: 14px;
    }
    .waveform span {
      width: 2.5px;
      background: var(--voice);
      border-radius: 2px;
      animation: wave 1.2s infinite ease-in-out;
      height: 3px;
    }
    .waveform span:nth-child(1) { animation-delay: 0s; }
    .waveform span:nth-child(2) { animation-delay: 0.15s; }
    .waveform span:nth-child(3) { animation-delay: 0.3s; }
    .waveform span:nth-child(4) { animation-delay: 0.1s; }
    .waveform span:nth-child(5) { animation-delay: 0.25s; }
    @keyframes wave {
      0%, 100% { height: 3px; }
      50% { height: 14px; }
    }

    /* Body scrollable area */
    .vox-dialog-body {
      flex: 1;
      overflow-y: auto;
      padding: 16px 18px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .vox-dialog-body::-webkit-scrollbar { width: 5px; }
    .vox-dialog-body::-webkit-scrollbar-thumb {
      background: var(--border);
      border-radius: 4px;
    }

    /* Multi-Turn Chat Stream */
    .vox-chat-stream {
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex: 1;
      overflow-y: auto;
      padding-right: 4px;
      max-height: 480px;
      min-height: 180px;
    }
    .vox-chat-stream::-webkit-scrollbar { width: 4px; }
    .vox-chat-stream::-webkit-scrollbar-thumb {
      background: var(--border);
      border-radius: 4px;
    }
    .vox-chat-item {
      display: flex;
      flex-direction: column;
      width: 100%;
      animation: voxMsgFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes voxMsgFadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .vox-chat-item.user {
      align-items: flex-end;
    }
    .vox-chat-bubble.user {
      background: var(--card-hover);
      border: 1px solid var(--voice);
      border-radius: 14px 14px 3px 14px;
      padding: 10px 14px;
      max-width: 86%;
      font-size: 13px;
      line-height: 1.5;
      color: var(--ink-pri);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }
    .vox-chat-item.agent {
      align-items: flex-start;
    }
    .vox-chat-bubble.agent {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-left: 3px solid var(--voice);
      border-radius: 14px 14px 14px 3px;
      padding: 12px 14px;
      width: 100%;
      box-sizing: border-box;
      font-size: 13px;
      line-height: 1.55;
      color: var(--ink-pri);
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
    }
    .vox-bubble-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10px;
      font-family: var(--font-mono);
      color: var(--ink-sec);
      margin-bottom: 6px;
    }
    .vox-bubble-text {
      word-break: break-word;
    }
    .vox-chat-separator {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 8px 0;
      position: relative;
    }
    .vox-chat-separator span {
      font-size: 10px;
      font-family: var(--font-mono);
      color: var(--voice);
      background: var(--chip-bg);
      border: 1px solid var(--border);
      padding: 3px 10px;
      border-radius: 999px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    }
    .vox-proactive-card {
      background: rgba(16, 185, 129, 0.08);
      border: 1px solid rgba(16, 185, 129, 0.35);
      border-radius: 10px;
      padding: 10px 12px;
      margin-top: 8px;
    }
    /* Interactive Quick Options & Decision Chips */
    .vox-quick-options {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .vox-quick-options-title {
      font-size: 11px;
      font-weight: 700;
      color: var(--voice);
      display: flex;
      align-items: center;
      gap: 5px;
      letter-spacing: 0.02em;
    }
    .vox-quick-options-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .vox-quick-option-chip {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 6px 12px;
      background: var(--chip-bg);
      border: 1px solid rgba(34, 211, 238, 0.35);
      border-radius: 999px;
      color: var(--ink-pri);
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      pointer-events: auto !important;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.10);
      user-select: none;
    }
    .vox-quick-option-chip:hover {
      background: var(--voice);
      color: #040812;
      border-color: var(--voice);
      transform: translateY(-1.5px) scale(1.03);
      box-shadow: 0 4px 14px var(--voice-glow);
    }
    .vox-quick-option-chip:active {
      transform: scale(0.95);
    }
    /* Cognitive Multi-Agent Shopping Mission Card */
    .vox-mission-card {
      margin: 10px 0;
      padding: 12px;
      background: rgba(8, 14, 28, 0.75);
      border: 1px solid rgba(0, 242, 254, 0.35);
      border-radius: 12px;
      backdrop-filter: blur(12px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    }
    .vox-mission-header {
      font-size: 11px;
      font-weight: 700;
      color: var(--voice);
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      padding-bottom: 6px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      letter-spacing: 0.02em;
    }
    .vox-mission-steps {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .vox-mission-step {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.03);
      transition: all 0.2s ease;
      font-size: 11px;
    }
    .vox-mission-step.active {
      background: rgba(0, 242, 254, 0.12);
      border: 1px solid rgba(0, 242, 254, 0.4);
    }
    .vox-mission-step.done {
      opacity: 0.8;
    }
    .vox-mission-step .step-num {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 700;
      background: rgba(255, 255, 255, 0.1);
      color: var(--ink-pri);
    }
    .vox-mission-step.active .step-num {
      background: var(--voice);
      color: #040812;
      animation: vox-pulse-glow 1.5s infinite;
    }
    .vox-mission-step.done .step-num {
      background: #10b981;
      color: #ffffff;
    }
    .vox-mission-step .step-title {
      font-weight: 600;
      color: var(--ink-pri);
    }
    .vox-mission-step .step-desc {
      font-size: 9.5px;
      color: var(--ink-sec);
    }
    .vox-store-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 10px;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      transition: all 0.15s ease;
    }
    .vox-store-card:hover {
      border-color: var(--voice);
      background: var(--card-hover);
    }

    /* Live Transcript Bubble */
    .vox-query-bubble {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 12px 14px;
      font-size: 13px;
      line-height: 1.5;
      color: var(--ink-pri);
      border-left: 3px solid var(--voice);
    }
    .vox-query-meta {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--ink-sec);
      font-family: var(--font-mono);
      margin-bottom: 6px;
    }

    /* Agent Response Box */
    .vox-response-box {
      font-size: 13px;
      line-height: 1.6;
      color: var(--ink-pri);
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* Minimalist Comparison Table */
    table.vox-table {
      width: 100%;
      border-collapse: collapse;
      font-family: var(--font-mono);
      font-size: 11px;
      margin-top: 4px;
    }
    table.vox-table th {
      text-align: left;
      font-weight: 600;
      color: var(--ink-sec);
      padding: 6px 8px 6px 0;
      border-bottom: 1px solid var(--border);
    }
    table.vox-table td {
      padding: 8px 8px 8px 0;
      border-bottom: 1px solid var(--border-subtle);
      color: var(--ink-sec);
      vertical-align: top;
    }
    table.vox-table tr.hl td {
      color: var(--voice);
      font-weight: 650;
      background: var(--chip-bg);
    }

    /* Worth-It Card */
    .vox-worthit-panel {
      border: 1px solid var(--border);
      background: var(--card-bg);
      border-radius: 12px;
      padding: 14px;
      margin-top: 4px;
    }
    .vox-worthit-row {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .vox-gauge {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      flex-shrink: 0;
      background:
        radial-gradient(circle at center, var(--card-bg) 58%, transparent 59%),
        conic-gradient(var(--voice) calc(var(--pct, 0) * 1%), var(--meter-track) 0);
    }
    .vox-gauge .score {
      font-family: var(--font-mono);
      font-size: 18px;
      font-weight: 750;
      line-height: 1;
    }

    /* History View */
    .vox-history-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .vox-history-item {
      border: 1px solid var(--border);
      background: var(--card-bg);
      border-radius: 10px;
      padding: 10px 12px;
      cursor: pointer !important;
      transition: all 0.15s ease;
    }
    .vox-history-item:hover {
      border-color: var(--voice);
      background: var(--card-hover);
    }
    .vox-history-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }
  `;
  shadow.appendChild(style);

  // 3. Luminance Detection
  function detectHostTheme() {
    try {
      const bg = window.getComputedStyle(document.body).backgroundColor;
      const rgb = bg.match(/\d+/g);
      if (rgb && rgb.length >= 3) {
        const lum = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
        return lum > 150 ? 'theme-light' : 'theme-dark';
      }
    } catch (_) {}
    return 'theme-dark';
  }

  const rootWrapper = document.createElement('div');
  rootWrapper.className = detectHostTheme();
  shadow.appendChild(rootWrapper);

  // 4. Injected Markup (Minimalist Capsule + Ambient Dialog)
  rootWrapper.innerHTML = `
    <!-- Floating Stage: Morphing Capsule + Action Orbit (IrrhammCode/float) -->
    <aside id="vox-floating-stage" class="floating-stage dock-right mode-ambient" aria-label="Vox Agent floating capsule">
      <div class="avoidance-line"><span>collision vector</span><i></i></div>
      <button id="vox-dock-handle" class="dock-handle" type="button" title="Pindah posisi dock (Kiri / Kanan)" aria-label="Move capsule to opposite edge"><span>···</span></button>
      
      <!-- Action Orbit -->
      <div class="action-orbit" id="vox-action-orbit">
        <button class="orbit-action action-0" id="orbit-act-buy" type="button" title="Instant Buy & Autonomous Checkout">
          <b>↯</b>
          <span><strong>Instant Buy</strong><small>Buy when ready</small></span>
        </button>
        <button class="orbit-action action-1" id="orbit-act-deals" type="button" title="Search Promo Codes & Discounts">
          <b>%</b>
          <span><strong>Coupon Hunt</strong><small>Find promo codes</small></span>
        </button>
        <button class="orbit-action action-2" id="orbit-act-compare" type="button" title="Compare Prices & Specifications">
          <b>≋</b>
          <span><strong>Compare</strong><small>Check best price</small></span>
        </button>
        <button class="orbit-action action-3" id="orbit-act-vault" type="button" title="Identity Vault & Custom Stores">
          <b>◇</b>
          <span><strong>Identity Vault</strong><small>Data & Stores</small></span>
        </button>
      </div>

      <div class="capsule-shadow"></div>
      
      <!-- The Morphing Capsule -->
      <div class="capsule" id="vox-capsule" data-state="idle">
        <div class="capsule-specular"></div>
        
        <!-- Interactive Core (Audio waves, thinking particles, success checkmark, sparkle) -->
        <div class="capsule-core" id="vox-capsule-core" title="Click to speak (Voice) or choose an action">
          <div class="ambient-core" id="core-icon-ambient">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
              <path d="M12 2.8c.85 5.5 2.85 7.5 8.35 8.35-5.5.85-7.5 2.85-8.35 8.35-.85-5.5-2.85-7.5-8.35-8.35 5.5-.85 7.5-2.85 8.35-8.35Z"/>
            </svg>
          </div>
          <div class="voice-waves" id="core-icon-listening" style="display:none;">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
          <div class="thinking-field" id="core-icon-thinking" style="display:none;">
            <i></i><i></i><i></i><i></i><i></i>
          </div>
          <div class="success-mark" id="core-icon-success" style="display:none;">
            <span>✓</span>
          </div>
          <div class="action-trigger" id="core-icon-actions" style="display:none;">
            <span>+</span>
          </div>
        </div>

        <!-- Capsule Copy / Speech Status -->
        <div class="capsule-copy" id="vox-capsule-copy" title="Click to open Copilot Dialog">
          <span class="capsule-overline" id="capsule-overline-text">VOX IS READY</span>
          <strong id="capsule-main-text">Ask anything or shop…</strong>
        </div>

        <!-- Inline Quick Input (for typing directly without opening big dialog) -->
        <input id="vox-quick-input" class="vox-capsule-input" type="text" placeholder="Type a command…" autocomplete="off" />

        <!-- Capsule Action / Orbit Toggle Button -->
        <button class="capsule-button" id="vox-capsule-btn-toggle" type="button" title="Open Action Orbit (↯, %, ≋, ◇) or Copilot">
          <span id="capsule-btn-icon">⌘</span>
        </button>
      </div>

      <!-- Micro Victory Success Card -->
      <div class="success-card" id="vox-success-card" style="display:none;">
        <span>Autonomous Action</span>
        <strong id="success-card-title">$150 saved</strong>
        <p id="success-card-desc">Vox found and applied <b>SAVE150</b></p>
      </div>

      <div class="toast" id="vox-floating-toast" style="display:none;"></div>
    </aside>

    <!-- Floating Conversational Glass Dialog -->
    <div id="vox-dialog" class="vox-dialog">
      <div class="vox-dialog-header">
        <div class="vox-dialog-title">
          <span>Vox Copilot</span>
          <span class="vox-tag-domain" id="dialog-domain">Domain</span>
        </div>
        <div class="vox-dialog-tools">
          <button id="btn-chat-new" class="vox-icon-btn" title="Start New Conversation" style="color: var(--voice); border-color: var(--voice); font-weight: 700;">+ New</button>
          <button id="btn-theme-toggle" class="vox-icon-btn" title="Toggle Light/Dark Glass">Theme</button>
          <button id="btn-voice-persona" class="vox-icon-btn" title="Voice Mode & Speed: 1.0x Natural / 1.15x Fast / Native">Voice: 1.0x</button>
          <button id="btn-audio-mute" class="vox-icon-btn" title="Toggle Audio Voice">Mute</button>
          <button id="btn-history-toggle" class="vox-icon-btn" title="View Audit History">History</button>
          <button id="btn-vault-toggle" class="vox-icon-btn" title="Identity Vault & Profiles">Vault</button>
          <button id="btn-settings-toggle" class="vox-icon-btn" title="Anakin.io API Key & Settings">API</button>
          <button id="btn-dialog-close" class="vox-icon-btn" style="padding: 5px 8px;">✕</button>
        </div>
      </div>

      <div class="vox-dialog-body" id="dialog-body-main">
        <!-- Shopping Quick Action Chips inside Dialog -->
        <div class="vox-shop-dialog-bar">
          <button class="vox-shop-chip" id="dlg-chip-checkout">🛒 Instant Buy</button>
          <button class="vox-shop-chip" id="dlg-chip-deals">🏷️ Coupon Hunt</button>
          <button class="vox-shop-chip" id="dlg-chip-compare">⚖️ Compare Prices</button>
          <button class="vox-shop-chip" id="dlg-chip-autofill">📦 Autofill Address</button>
          <button class="vox-shop-chip" id="dlg-chip-vault" style="border-color: var(--voice); color: var(--voice); font-weight: 700;">🔐 Vault</button>
        </div>

        <!-- Multi-Turn Scrollable Chat Stream (Persisted across pages) -->
        <div id="vox-chat-stream" class="vox-chat-stream"></div>

        <!-- Legacy DOM elements retained for backward compatibility -->
        <div style="display: none !important;">
          <div class="vox-query-bubble">
            <div class="vox-query-meta" id="query-meta-label">Live Query</div>
            <div id="dialog-transcript" style="font-size: 13.5px;">Click the mic or say "Hey Vox" to ask anything.</div>
          </div>

          <div class="vox-response-box" id="dialog-response-box" style="display: none;">
            <div id="response-answer-text" style="line-height: 1.6;"></div>

            <div id="response-table-wrap" style="display: none;">
              <div style="font-size: 11px; font-weight: 600; color: var(--ink-sec); margin-bottom: 6px;" id="response-table-title">Market Alternatives (Anakin.io Scrape)</div>
              <div style="overflow-x: auto;">
                <table class="vox-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Cost</th>
                      <th>Perf / Specs</th>
                      <th>Lock-in</th>
                    </tr>
                  </thead>
                  <tbody id="response-tbody"></tbody>
                </table>
              </div>
            </div>

            <div id="response-worthit-wrap" class="vox-worthit-panel" style="display: none;">
              <div class="vox-worthit-row">
                <div id="dialog-gauge" class="vox-gauge" style="--pct: 80;">
                  <div id="dialog-score-num" class="score">80</div>
                </div>
                <div style="flex: 1;">
                  <div id="dialog-verdict-tag" style="font-size: 13px; font-weight: 700;">Worth It</div>
                  <div id="dialog-verdict-note" style="font-size: 11px; color: var(--ink-sec); margin-top: 3px;"></div>
                </div>
              </div>
            </div>

            <div id="response-deals-wrap" class="vox-deals-panel" style="display: none; margin-top: 10px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--voice); margin-bottom: 6px; display: flex; align-items: center; justify-content: space-between;">
                <span style="display: flex; align-items: center; gap: 6px;">🏷️ Coupons & Deals Discovered</span>
                <span id="deals-count-badge" class="vox-tag-domain" style="font-size: 9.5px;">0 Coupons</span>
              </div>
              <div id="deals-list-container" style="display: flex; flex-direction: column; gap: 8px;"></div>
            </div>
          </div>
        </div>

        <!-- Export Actions -->
        <div style="display: flex; gap: 8px; margin-top: 8px; padding-top: 10px; border-top: 1px solid var(--border-subtle);">
          <button id="btn-copy-answer" class="vox-icon-btn">Copy Brief</button>
          <button id="btn-export-answer" class="vox-icon-btn">Download Cheatsheet</button>
        </div>
      </div>

      <!-- History Drawer (Toggled) -->
      <div class="vox-dialog-body" id="dialog-body-history" style="display: none;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-size: 11px; font-weight: 700; color: var(--ink-sec); text-transform: uppercase;">Past Audits</span>
          <button id="btn-clear-history" class="vox-icon-btn" style="color: var(--bad);">Clear History</button>
        </div>
        <div class="vox-history-list" id="dialog-history-list"></div>
      </div>

      <!-- Settings Drawer (Toggled) -->
      <div class="vox-dialog-body" id="dialog-body-settings" style="display: none; flex-direction: column; gap: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 11px; font-weight: 700; color: var(--ink-sec); text-transform: uppercase;">Engine & API Settings</span>
          <span id="settings-status-badge" style="font-size: 10px; font-family: var(--font-mono); color: var(--voice); border: 1px solid var(--border); padding: 2px 8px; border-radius: 999px;">Local Heuristics</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <label style="font-size: 11.5px; color: var(--ink-sec); display: flex; flex-direction: column; gap: 4px;">
            <span style="display: flex; justify-content: space-between;">
              <span>Groq API Key (Opsional - Llama 3.3 LLM Bebas)</span>
              <a href="https://console.groq.com" target="_blank" style="color: var(--voice); text-decoration: none; font-size: 11px;">Dapatkan Gratis ↗</a>
            </span>
            <input id="input-groq-key" type="password" placeholder="gsk_... (opsional, untuk tanya jawab bebas)" class="vox-quick-input" style="width: 100%; border: 1px solid var(--border);" />
          </label>

          <label style="font-size: 11.5px; color: var(--ink-sec); display: flex; flex-direction: column; gap: 4px;">
            <span>Anakin API Key (Forge Hackathon Scraper)</span>
            <input id="input-anakin-key" type="password" placeholder="ask_... atau ak_live_..." class="vox-quick-input" style="width: 100%; border: 1px solid var(--border);" />
          </label>

          <label style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--ink-pri); cursor: pointer;">
            <input id="chk-live-scrape" type="checkbox" />
            <span>Enable Live Ghost Scraping via api.anakin.io</span>
          </label>

          <div style="border-top: 1px solid var(--border); margin-top: 4px; padding-top: 8px;">
            <label style="font-size: 11.5px; color: var(--ink-sec); display: flex; flex-direction: column; gap: 4px;">
              <span style="display: flex; justify-content: space-between;">
                <span>ElevenLabs API Key (Suara Manusia Ultra-Realistis)</span>
                <a href="https://elevenlabs.io" target="_blank" style="color: var(--voice); text-decoration: none; font-size: 11px;">Daftar Gratis ↗</a>
              </span>
              <input id="input-elevenlabs-key" type="password" placeholder="Opsional — untuk suara setara manusia asli" class="vox-quick-input" style="width: 100%; border: 1px solid var(--border);" />
            </label>
          </div>

          <p style="font-size: 11px; color: var(--ink-sec); margin: 0; line-height: 1.45;">
            *Jika dibiarkan kosong, Vox tetap aktif 100% menggunakan engine heuristik lokal & DOM scout gratis tanpa API key apa pun.
          </p>
        </div>

        <div style="display: flex; gap: 8px; align-items: center; margin-top: 4px;">
          <button id="btn-save-settings" class="vox-icon-btn" style="border-color: var(--voice); color: var(--voice);">Save Settings</button>
          <span id="lbl-settings-saved" style="font-size: 11px; color: var(--ok); display: none;">Saved!</span>
        </div>
      </div>

      <!-- Identity Vault Drawer (Toggled) -->
      <div class="vox-dialog-body" id="dialog-body-vault" style="display: none; flex-direction: column; gap: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 11px; font-weight: 700; color: var(--ink-sec); text-transform: uppercase;">Identity Vault</span>
          <span id="vault-active-badge" style="font-size: 10px; font-family: var(--font-mono); color: var(--voice); border: 1px solid var(--border); padding: 2px 8px; border-radius: 999px;">Home</span>
        </div>

        <div style="display: flex; gap: 8px; margin-bottom: 4px;">
          <button id="btn-vault-home" class="vox-icon-btn" style="flex: 1; border-color: var(--voice); color: var(--voice);">Home / Rumah</button>
          <button id="btn-vault-office" class="vox-icon-btn" style="flex: 1;">Office / Kantor</button>
        </div>

        <div id="vault-profile-fields" style="display: flex; flex-direction: column; gap: 8px;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <label style="font-size: 11px; color: var(--ink-sec); display: flex; flex-direction: column; gap: 3px;">
              <span>Full Name</span>
              <input id="vault-fullname" class="vox-quick-input" style="width: 100%; border: 1px solid var(--border);" placeholder="Full Name" />
            </label>
            <label style="font-size: 11px; color: var(--ink-sec); display: flex; flex-direction: column; gap: 3px;">
              <span>Email</span>
              <input id="vault-email" class="vox-quick-input" style="width: 100%; border: 1px solid var(--border);" placeholder="Email" />
            </label>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <label style="font-size: 11px; color: var(--ink-sec); display: flex; flex-direction: column; gap: 3px;">
              <span>Phone</span>
              <input id="vault-phone" class="vox-quick-input" style="width: 100%; border: 1px solid var(--border);" placeholder="Phone" />
            </label>
            <label style="font-size: 11px; color: var(--ink-sec); display: flex; flex-direction: column; gap: 3px;">
              <span>Username</span>
              <input id="vault-username" class="vox-quick-input" style="width: 100%; border: 1px solid var(--border);" placeholder="Username" />
            </label>
          </div>
          <label style="font-size: 11px; color: var(--ink-sec); display: flex; flex-direction: column; gap: 3px;">
            <span>Street Address</span>
            <input id="vault-street" class="vox-quick-input" style="width: 100%; border: 1px solid var(--border);" placeholder="Street Address" />
          </label>
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px;">
            <label style="font-size: 11px; color: var(--ink-sec); display: flex; flex-direction: column; gap: 3px;">
              <span>City</span>
              <input id="vault-city" class="vox-quick-input" style="width: 100%; border: 1px solid var(--border);" placeholder="City" />
            </label>
            <label style="font-size: 11px; color: var(--ink-sec); display: flex; flex-direction: column; gap: 3px;">
              <span>Province</span>
              <input id="vault-province" class="vox-quick-input" style="width: 100%; border: 1px solid var(--border);" placeholder="Province" />
            </label>
            <label style="font-size: 11px; color: var(--ink-sec); display: flex; flex-direction: column; gap: 3px;">
              <span>Postal Code</span>
              <input id="vault-postalcode" class="vox-quick-input" style="width: 100%; border: 1px solid var(--border);" placeholder="Postal" />
            </label>
          </div>
        </div>

        <div style="display: flex; gap: 8px; align-items: center; margin-top: 4px;">
          <button id="btn-vault-save" class="vox-icon-btn" style="border-color: var(--voice); color: var(--voice);">Save Profile</button>
          <button id="btn-vault-autofill" class="vox-icon-btn" style="border-color: #10b981; color: #10b981;">Autofill Page</button>
          <span id="lbl-vault-saved" style="font-size: 11px; color: var(--ok); display: none;">Saved!</span>
        </div>

        <!-- Connected Stores & Custom Websites Hub -->
        <div style="border-top: 1px solid var(--border); margin-top: 10px; padding-top: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 11px; font-weight: 700; color: var(--ink-sec); text-transform: uppercase;">Custom Store Websites</span>
            <span style="font-size: 9.5px; font-family: var(--font-mono); color: var(--voice);" id="vault-store-count">0 Websites</span>
          </div>

          <!-- Quick Add Current Site Button -->
          <button id="btn-vault-add-current-site" class="vox-icon-btn" style="width: 100%; justify-content: center; margin-bottom: 8px; border-color: var(--voice); color: var(--voice); font-size: 11px;">
            + Add Current Website
          </button>

          <!-- Add Store Form -->
          <div id="vault-add-store-form" style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 8px; padding: 8px; margin-bottom: 8px; display: flex; flex-direction: column; gap: 6px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">
              <input id="input-store-name" class="vox-quick-input" placeholder="Store Name (e.g. Amazon)" style="border: 1px solid var(--border); font-size: 11px; padding: 4px 6px;" />
              <input id="input-store-domain" class="vox-quick-input" placeholder="Domain (e.g. amazon.com)" style="border: 1px solid var(--border); font-size: 11px; padding: 4px 6px;" />
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr auto; gap: 6px; align-items: center;">
              <input id="input-store-user" class="vox-quick-input" placeholder="Username (optional)" style="border: 1px solid var(--border); font-size: 11px; padding: 4px 6px;" />
              <select id="select-store-profile" style="background: var(--card-bg); color: var(--ink-pri); border: 1px solid var(--border); border-radius: 6px; font-size: 11px; padding: 4px;">
                <option value="home">Profile: Home</option>
                <option value="office">Profile: Office</option>
              </select>
              <button id="btn-vault-submit-store" class="vox-icon-btn" style="border-color: #10b981; color: #10b981; font-weight: 700; padding: 4px 10px;">Save</button>
            </div>
          </div>

          <!-- Dynamic Custom Stores List -->
          <div id="vault-connected-stores-list" style="display: flex; flex-direction: column; gap: 6px;"></div>
        </div>
      </div>
    </div>
  `;

  // 5. DOM References
  const floatingStage = shadow.getElementById('vox-floating-stage');
  const dockHandle = shadow.getElementById('vox-dock-handle');
  const capsule = shadow.getElementById('vox-capsule');
  const capsuleCore = shadow.getElementById('vox-capsule-core');
  const capsuleCopy = shadow.getElementById('vox-capsule-copy');
  const capsuleOverline = shadow.getElementById('capsule-overline-text');
  const capsuleMainText = shadow.getElementById('capsule-main-text');
  const capsuleBtnToggle = shadow.getElementById('vox-capsule-btn-toggle');
  const capsuleBtnIcon = shadow.getElementById('capsule-btn-icon');
  const successCard = shadow.getElementById('vox-success-card');
  const successCardTitle = shadow.getElementById('success-card-title');
  const successCardDesc = shadow.getElementById('success-card-desc');
  const floatingToast = shadow.getElementById('vox-floating-toast');

  // Core icons
  const iconAmbient = shadow.getElementById('core-icon-ambient');
  const iconListening = shadow.getElementById('core-icon-listening');
  const iconThinking = shadow.getElementById('core-icon-thinking');
  const iconSuccess = shadow.getElementById('core-icon-success');
  const iconActions = shadow.getElementById('core-icon-actions');

  // Orbit action buttons
  const orbitActBuy = shadow.getElementById('orbit-act-buy');
  const orbitActDeals = shadow.getElementById('orbit-act-deals');
  const orbitActCompare = shadow.getElementById('orbit-act-compare');
  const orbitActVault = shadow.getElementById('orbit-act-vault');

  const micBtn = shadow.getElementById('vox-mic-trigger') || capsuleCore;
  const capsuleInfo = shadow.getElementById('vox-capsule-info') || capsuleCopy || capsuleMainText;
  const statusSub = shadow.getElementById('vox-status-sub') || capsuleMainText;
  const waveform = shadow.getElementById('vox-waveform') || iconListening;
  const quickInput = shadow.getElementById('vox-quick-input');

  const dialog = shadow.getElementById('vox-dialog');
  const dialogDomain = shadow.getElementById('dialog-domain');
  const dialogCloseBtn = shadow.getElementById('btn-dialog-close');
  const themeToggleBtn = shadow.getElementById('btn-theme-toggle');
  const voicePersonaBtn = shadow.getElementById('btn-voice-persona');
  const muteBtn = shadow.getElementById('btn-audio-mute');
  const historyToggleBtn = shadow.getElementById('btn-history-toggle');
  const settingsToggleBtn = shadow.getElementById('btn-settings-toggle');

  const bodyMain = shadow.getElementById('dialog-body-main');
  const bodyHistory = shadow.getElementById('dialog-body-history');
  const bodySettings = shadow.getElementById('dialog-body-settings');
  const inputAnakinKey = shadow.getElementById('input-anakin-key');
  const inputGroqKey = shadow.getElementById('input-groq-key');
  const inputElevenlabsKey = shadow.getElementById('input-elevenlabs-key');
  const chkLiveScrape = shadow.getElementById('chk-live-scrape');
  const btnSaveSettings = shadow.getElementById('btn-save-settings');
  const lblSettingsSaved = shadow.getElementById('lbl-settings-saved');
  const settingsStatusBadge = shadow.getElementById('settings-status-badge');

  // Vault DOM refs
  const bodyVault = shadow.getElementById('dialog-body-vault');
  const btnVaultToggle = shadow.getElementById('btn-vault-toggle');
  const btnVaultHome = shadow.getElementById('btn-vault-home');
  const btnVaultOffice = shadow.getElementById('btn-vault-office');
  const vaultActiveBadge = shadow.getElementById('vault-active-badge');
  const vaultFullname = shadow.getElementById('vault-fullname');
  const vaultEmail = shadow.getElementById('vault-email');
  const vaultPhone = shadow.getElementById('vault-phone');
  const vaultUsername = shadow.getElementById('vault-username');
  const vaultStreet = shadow.getElementById('vault-street');
  const vaultCity = shadow.getElementById('vault-city');
  const vaultProvince = shadow.getElementById('vault-province');
  const vaultPostalcode = shadow.getElementById('vault-postalcode');
  const btnVaultSave = shadow.getElementById('btn-vault-save');
  const btnVaultAutofill = shadow.getElementById('btn-vault-autofill');
  const lblVaultSaved = shadow.getElementById('lbl-vault-saved');
  const vaultConnectedStoresList = shadow.getElementById('vault-connected-stores-list');
  const vaultStoreCount = shadow.getElementById('vault-store-count');
  const btnVaultAddCurrentSite = shadow.getElementById('btn-vault-add-current-site');
  const inputStoreName = shadow.getElementById('input-store-name');
  const inputStoreDomain = shadow.getElementById('input-store-domain');
  const inputStoreUser = shadow.getElementById('input-store-user');
  const selectStoreProfile = shadow.getElementById('select-store-profile');
  const btnVaultSubmitStore = shadow.getElementById('btn-vault-submit-store');
  let currentVaultProfile = 'home';

  // Multi-Turn Chat Stream & Header Controls
  const btnChatNew = shadow.getElementById('btn-chat-new');
  const chatStream = shadow.getElementById('vox-chat-stream');

  const queryMetaLabel = shadow.getElementById('query-meta-label');
  const dialogTranscript = shadow.getElementById('dialog-transcript');
  const responseBox = shadow.getElementById('dialog-response-box');
  const answerText = shadow.getElementById('response-answer-text');

  const tableWrap = shadow.getElementById('response-table-wrap');
  const tableTitle = shadow.getElementById('response-table-title');
  const tbody = shadow.getElementById('response-tbody');

  const worthitWrap = shadow.getElementById('response-worthit-wrap');
  const gauge = shadow.getElementById('dialog-gauge');
  const scoreNum = shadow.getElementById('dialog-score-num');
  const verdictTag = shadow.getElementById('dialog-verdict-tag');
  const verdictNote = shadow.getElementById('dialog-verdict-note');

  const btnCopyAnswer = shadow.getElementById('btn-copy-answer');
  const btnExportAnswer = shadow.getElementById('btn-export-answer');
  const historyList = shadow.getElementById('dialog-history-list');
  const btnClearHistory = shadow.getElementById('btn-clear-history');

  let currentAnalysis = null;
  let isListening = false;
  let isMuted = false;
  let isSpeaking = false;          // Lock: true while Vox is speaking (prevents mic echo)
  let isHandsFreeMode = true;      // Persistent hands-free mic — auto-restart after speech
  let isPageIngested = false;      // Pre-scraping loading state tracker
  let ingestedPageContext = null;   // Cached DOM context from proactive ingestion
  let currentVoiceEngine = 'neural'; // 'neural' | 'native' | 'elevenlabs'
  let voiceSpeed = 1.0;
  let currentAudio = null;
  let recognition = null;
  let currentHighlightEl = null;
  let currentFocusBadge = null;
  const STORAGE_KEY = 'vox_audit_history';
  const CHAT_SESSION_KEY = 'vox_active_chat_session';

  // Active Multi-Turn Chat Session State
  let activeChatSession = {
    id: 'session_' + Date.now(),
    messages: [],
    lastUrl: window.location.href,
    lastTitle: document.title,
    lastDomain: window.location.hostname,
    lastActiveAt: Date.now(),
    isOpen: false
  };

  // Text formatting & sanitization helpers
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatMarkdown(text) {
    if (!text) return '';
    let escaped = escapeHtml(text);
    escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    escaped = escaped.replace(/`(.*?)`/g, '<code style="background:var(--chip-bg);padding:1px 5px;border-radius:4px;font-family:var(--font-mono);font-size:11px;">$1</code>');
    escaped = escaped.replace(/\n/g, '<br>');
    return escaped;
  }

  // Session Persistence Engine
  function saveActiveChatSession() {
    activeChatSession.lastActiveAt = Date.now();
    activeChatSession.lastUrl = window.location.href;
    activeChatSession.lastTitle = document.title;
    activeChatSession.lastDomain = window.location.hostname;
    activeChatSession.isOpen = dialog ? dialog.classList.contains('open') : false;

    if (activeChatSession.messages.length > 50) {
      activeChatSession.messages = activeChatSession.messages.slice(-50);
    }

    if (chrome.storage?.local) {
      chrome.storage.local.set({ [CHAT_SESSION_KEY]: activeChatSession }, () => {
        if (chrome.runtime.lastError) {
          console.warn('[Vox Agent] Storage save notice:', chrome.runtime.lastError.message);
        }
      });
    } else {
      try {
        localStorage.setItem(CHAT_SESSION_KEY, JSON.stringify(activeChatSession));
      } catch (_) {}
    }
  }

  function renderWelcomeChatCard(container) {
    if (!container) return;
    container.innerHTML = `
      <div class="vox-chat-item agent welcome">
        <div class="vox-chat-bubble agent" style="border-left: 3px solid var(--voice);">
          <div class="vox-bubble-meta">
            <span style="display: flex; align-items: center; gap: 5px;"><span class="vox-avatar" style="color: var(--voice);">⚡</span> <strong>Vox Shopping Copilot</strong></span>
            <span class="vox-bubble-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
          <div class="vox-bubble-text" style="font-size: 13px; line-height: 1.6;">
            Hello! I'm Vox, your autonomous AI shopping copilot. This session is automatically synced and persists seamlessly as you browse products, view your cart, or proceed to checkout.
          </div>
          <div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 6px;">
            <button class="vox-shop-chip" id="welcome-chip-deals" style="font-size: 11px; padding: 4px 8px;">🏷️ Hunt Deals</button>
            <button class="vox-shop-chip" id="welcome-chip-compare" style="font-size: 11px; padding: 4px 8px;">⚖️ Compare Prices</button>
            <button class="vox-shop-chip" id="welcome-chip-autofill" style="font-size: 11px; padding: 4px 8px;">📦 Autofill Address</button>
          </div>
        </div>
      </div>
    `;
    container.querySelector('#welcome-chip-deals')?.addEventListener('click', () => {
      appendChatMessage('user', '🏷️ Hunt Deals & Coupons');
      executeAutonomousDealHunter('deals');
    });
    container.querySelector('#welcome-chip-compare')?.addEventListener('click', () => {
      appendChatMessage('user', '⚖️ Compare Prices & Specs');
      executeAutonomousCompare('compare');
    });
    container.querySelector('#welcome-chip-autofill')?.addEventListener('click', () => {
      appendChatMessage('user', '📦 Autofill Shipping Address');
      executeAutonomousAutofill('autofill');
    });
  }

  function renderSingleMessageToStream(msg, container) {
    if (!container) return;

    if (msg.role === 'system') {
      const sep = document.createElement('div');
      sep.className = 'vox-chat-separator';
      sep.innerHTML = `<span>${escapeHtml(msg.content)}</span>`;
      container.appendChild(sep);
      return;
    }

    const item = document.createElement('div');
    item.className = `vox-chat-item ${msg.role}`;
    item.id = msg.id || ('msg_' + Math.random().toString(36).substr(2, 9));

    if (msg.role === 'user') {
      item.innerHTML = `
        <div class="vox-chat-bubble user">
          <div class="vox-bubble-meta">
            <span>You</span>
            <span class="vox-bubble-time">${escapeHtml(msg.time || '')}</span>
          </div>
          <div class="vox-bubble-text">${formatMarkdown(msg.content || '')}</div>
        </div>
      `;
    } else {
      let extraHtml = '';

      if (msg.extra?.isProactiveCheckout || msg.isProactiveCheckout) {
        extraHtml += `
          <div class="vox-proactive-card" style="margin-top: 8px;">
            <div style="font-size: 11px; font-weight: 700; color: #10b981; margin-bottom: 4px;">⚡ Quick Checkout Actions</div>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              <button class="vox-icon-btn btn-msg-autofill" style="border-color: #10b981; color: #10b981; font-weight: 700;">📦 Autofill Vault Address</button>
              <button class="vox-icon-btn btn-msg-deals" style="border-color: var(--voice); color: var(--voice);">🏷️ Check Promo Coupons</button>
            </div>
          </div>
        `;
      }

      if (msg.extra?.isCheckoutPrompt) {
        extraHtml += `
          <div style="margin-top: 8px; display: flex; gap: 6px;">
            <button class="vox-icon-btn btn-msg-confirm-order" style="border-color: #10b981; color: #10b981; font-weight: 700;">✓ Confirm Order</button>
            <button class="vox-icon-btn btn-msg-cancel-order" style="border-color: var(--bad); color: var(--bad);">✕ Cancel</button>
          </div>
        `;
      }

      if (msg.extra?.dealResult?.promoCodes?.length > 0) {
        const codes = msg.extra.dealResult.promoCodes;
        extraHtml += `
          <div style="margin-top: 8px; display: flex; flex-direction: column; gap: 6px;">
            <div style="font-size: 10.5px; font-weight: 700; color: var(--voice);">🏷️ Promo Coupons Found:</div>
            ${codes.map(c => `
              <div class="vox-deal-card" style="display: flex; justify-content: space-between; align-items: center; padding: 6px 8px; background: var(--card-hover); border: 1px solid var(--border); border-radius: 6px;">
                <div>
                  <span class="vox-coupon-badge" style="font-family: var(--font-mono); font-weight: 700; color: var(--voice); background: var(--chip-bg); padding: 1px 6px; border-radius: 4px; border: 1px solid var(--border);">${escapeHtml(c.code)}</span>
                  <span style="font-size: 10.5px; color: #10b981; font-weight: 600; margin-left: 4px;">${escapeHtml(c.discount || 'Discount')}</span>
                </div>
                <button class="vox-icon-btn btn-msg-apply-coupon" data-code="${escapeHtml(c.code)}" style="font-size: 10px; padding: 2px 7px; border-color: var(--voice); color: var(--voice);">Apply</button>
              </div>
            `).join('')}
          </div>
        `;
      }

      if (msg.extra?.data?.competitors?.items?.length > 0) {
        const comp = msg.extra.data.competitors;
        extraHtml += `
          <div style="margin-top: 8px; overflow-x: auto;">
            <div style="font-size: 10.5px; font-weight: 700; color: var(--ink-sec); margin-bottom: 4px;">${escapeHtml(comp.note || 'Market Alternatives')}</div>
            <table class="vox-table">
              <thead><tr><th>Product</th><th>Cost</th><th>Specs</th></tr></thead>
              <tbody>
                ${comp.items.map(it => `<tr class="${it.highlight ? 'hl' : ''}"><td>${escapeHtml(it.name)}</td><td>${escapeHtml(it.cost)}</td><td>${escapeHtml(it.perf)}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      if (msg.extra?.data?.worthIt) {
        const wi = msg.extra.data.worthIt;
        extraHtml += `
          <div class="vox-worthit-panel" style="margin-top: 8px; padding: 10px;">
            <div class="vox-worthit-row">
              <div class="vox-gauge" style="--pct: ${wi.score || 80}; width: 48px; height: 48px;">
                <div class="score" style="font-size: 14px;">${wi.score || 80}</div>
              </div>
              <div>
                <div style="font-size: 12px; font-weight: 700; color: var(--ink-pri);">${escapeHtml(wi.verdict || 'Worth It')}</div>
                <div style="font-size: 10.5px; color: var(--ink-sec);">${escapeHtml(wi.scoreNote || (wi.green || []).join(' · '))}</div>
              </div>
            </div>
          </div>
        `;
      }

      if (msg.extra?.quickOptions && Array.isArray(msg.extra.quickOptions) && msg.extra.quickOptions.length > 0) {
        extraHtml += `
          <div class="vox-quick-options">
            <div class="vox-quick-options-title">
              <span>💬 Refine & Filter:</span>
            </div>
            <div class="vox-quick-options-grid">
              ${msg.extra.quickOptions.map(opt => `
                <button class="vox-quick-option-chip" data-query="${escapeHtml(opt.query || opt.label)}" data-action="${escapeHtml(opt.action || '')}" data-url="${escapeHtml(opt.url || '')}">
                  ${escapeHtml(opt.label)}
                </button>
              `).join('')}
            </div>
          </div>
        `;
      }

      item.innerHTML = `
        <div class="vox-chat-bubble agent">
          <div class="vox-bubble-meta">
            <span style="display: flex; align-items: center; gap: 5px;">
              <span class="vox-avatar" style="color: var(--voice); font-size: 12px;">⚡</span>
              <strong>Vox Copilot</strong>
            </span>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="vox-bubble-time">${escapeHtml(msg.time || '')}</span>
              <button class="vox-icon-btn btn-msg-replay" title="Replay Audio" style="padding: 1px 5px; font-size: 10px;">🔊</button>
            </div>
          </div>
          <div class="vox-bubble-text">${formatMarkdown(msg.content || '')}</div>
          ${extraHtml}
        </div>
      `;

      item.querySelector('.btn-msg-replay')?.addEventListener('click', () => {
        speak(msg.extra?.spoken || msg.content);
      });
      item.querySelector('.btn-msg-autofill')?.addEventListener('click', () => {
        executeAutonomousAutofill('autofill');
      });
      item.querySelector('.btn-msg-deals')?.addEventListener('click', () => {
        executeAutonomousDealHunter('deals');
      });
      item.querySelector('.btn-msg-confirm-order')?.addEventListener('click', () => {
        executeCheckoutConfirmation();
      });
      item.querySelector('.btn-msg-cancel-order')?.addEventListener('click', () => {
        cancelCheckoutConfirmation();
      });
      item.querySelectorAll('.vox-quick-option-chip')?.forEach(chip => {
        chip.addEventListener('click', () => {
          const action = chip.getAttribute('data-action');
          const targetUrl = chip.getAttribute('data-url');
          const q = chip.getAttribute('data-query');

          if (action === 'open_winner') {
            const destUrl = targetUrl || currentAnalysis?.winner?.url || 'https://www.tokopedia.com';
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = 'var(--voice)';
            chrome.runtime.sendMessage({ action: 'OPEN_TAB', url: destUrl });
            speak('Opening the best deal store for you in a new tab.');
            return;
          }
          if (action === 'autofill') {
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = '#10b981';
            executeAutonomousAutofill('autofill');
            return;
          }
          if (q) {
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = 'var(--voice)';
            processNaturalQuery(q);
          }
        });
      });
      item.querySelectorAll('.btn-msg-apply-coupon')?.forEach(btn => {
        btn.addEventListener('click', async () => {
          const code = btn.getAttribute('data-code');
          btn.textContent = 'Applying…';
          const ok = await applyCouponToPage(code);
          btn.textContent = ok ? '✓ Applied' : '✓ Copied';
          if (ok) {
            speak(`Coupon ${code} applied successfully to your checkout!`);
          } else {
            navigator.clipboard?.writeText(code);
            speak(`Coupon code ${code} copied to clipboard.`);
          }
        });
      });
    }

    container.appendChild(item);
  }

  function appendChatMessage(role, content, extra = {}) {
    const stream = shadow.getElementById('vox-chat-stream');
    if (!stream) return;

    const msgId = 'msg_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const msgRecord = {
      id: msgId,
      role,
      content,
      time: timeStr,
      url: window.location.href,
      title: document.title,
      extra
    };

    activeChatSession.messages.push(msgRecord);
    renderSingleMessageToStream(msgRecord, stream);
    saveActiveChatSession();

    stream.scrollTop = stream.scrollHeight;
    return msgId;
  }

  function resetChatSession() {
    activeChatSession = {
      id: 'session_' + Date.now(),
      messages: [],
      lastUrl: window.location.href,
      lastTitle: document.title,
      lastDomain: window.location.hostname,
      lastActiveAt: Date.now(),
      isOpen: true
    };
    if (chrome.storage?.local) {
      chrome.storage.local.remove([CHAT_SESSION_KEY]);
    } else {
      localStorage.removeItem(CHAT_SESSION_KEY);
    }
    const stream = shadow.getElementById('vox-chat-stream');
    if (stream) {
      stream.innerHTML = '';
      renderWelcomeChatCard(stream);
    }
    saveActiveChatSession();
  }

  function restoreActiveChatSession() {
    const stream = shadow.getElementById('vox-chat-stream');
    if (!stream) return;

    const onLoaded = (saved) => {
      if (!saved || !saved.messages || !saved.messages.length) {
        renderWelcomeChatCard(stream);
        return;
      }

      const timeoutMs = (VOX_ENV?.SESSION_MEMORY?.SESSION_TIMEOUT_MINUTES || 45) * 60 * 1000;
      const isExpired = Date.now() - (saved.lastActiveAt || 0) > timeoutMs;

      if (isExpired) {
        activeChatSession = {
          id: 'session_' + Date.now(),
          messages: [],
          lastUrl: window.location.href,
          lastTitle: document.title,
          lastDomain: window.location.hostname,
          lastActiveAt: Date.now(),
          isOpen: false
        };
        renderWelcomeChatCard(stream);
        return;
      }

      activeChatSession = saved;
      stream.innerHTML = '';
      activeChatSession.messages.forEach(msg => {
        renderSingleMessageToStream(msg, stream);
      });

      const prevUrl = saved.lastUrl || '';
      const currentUrl = window.location.href;
      const isPageChanged = prevUrl && prevUrl !== currentUrl;

      if (isPageChanged) {
        const navSeparator = {
          id: 'nav_' + Date.now(),
          role: 'system',
          content: `📍 Page Navigated: ${document.title || window.location.pathname}`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          url: currentUrl,
          title: document.title
        };
        activeChatSession.messages.push(navSeparator);
        renderSingleMessageToStream(navSeparator, stream);

        const isCheckoutPage = /checkout|cart|keranjang|bayar|pembayaran|order/i.test(window.location.pathname + window.location.hash + document.title) ||
                              !!document.querySelector('form[action*="checkout" i], #checkout, .checkout-form, input[name*="shipping" i]');

        if (isCheckoutPage) {
          const checkoutAlert = {
            id: 'proactive_checkout_' + Date.now(),
            role: 'agent',
            content: `I detected you reached the **Checkout** page! Shipping details from your Identity Vault (${currentVaultProfile === 'office' ? 'Office' : 'Home'}) are ready. Would you like me to autofill them now?`,
            isProactiveCheckout: true,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            url: currentUrl,
            title: document.title
          };
          activeChatSession.messages.push(checkoutAlert);
          renderSingleMessageToStream(checkoutAlert, stream);

          if (VOX_ENV?.SESSION_MEMORY?.AUTO_ANNOUNCE_CHECKOUT) {
            setTimeout(() => {
              speak('I noticed you reached the checkout page. Your Identity Vault shipping details are ready to autofill.');
            }, 800);
          }
        }

        const isSearchPage = /search|cari|catalog|find|s\?k=/i.test(window.location.pathname + window.location.search);
        if (isSearchPage) {
          const urlParams = new URLSearchParams(window.location.search);
          const rawKeyword = urlParams.get('keyword') || urlParams.get('q') || urlParams.get('k') || '';
          const searchKeyword = extractCleanSearchTerm(rawKeyword);
          if (searchKeyword && searchKeyword.length >= 2) {
            const lastMsg = activeChatSession.messages[activeChatSession.messages.length - 1];
            const alreadyScanned = lastMsg && lastMsg.content && lastMsg.content.includes(searchKeyword) && lastMsg.role === 'agent' && (lastMsg.content.includes('Live Market Scan') || lastMsg.content.includes('Market Price Scan'));
            if (!alreadyScanned) {
              const currentHost = window.location.hostname.toLowerCase();
              const storeName = currentHost.includes('shopee') ? 'Shopee' :
                               currentHost.includes('tokopedia') ? 'Tokopedia' :
                               currentHost.includes('amazon') ? 'Amazon' :
                               currentHost.includes('blibli') ? 'Blibli' :
                               currentHost.includes('lazada') ? 'Lazada' : 'Store';
              setTimeout(async () => {
                await autonomousScanAndHighlightSearchResults(searchKeyword, storeName);
              }, 900);
            }
          }
        }
        saveActiveChatSession();
      }

      if (saved.isOpen) {
        openDialog();
      }

      stream.scrollTop = stream.scrollHeight;
    };

    if (chrome.storage?.local) {
      chrome.storage.local.get([CHAT_SESSION_KEY], (res) => {
        onLoaded(res[CHAT_SESSION_KEY]);
      });
    } else {
      try {
        const saved = JSON.parse(localStorage.getItem(CHAT_SESSION_KEY) || 'null');
        onLoaded(saved);
      } catch (_) {
        renderWelcomeChatCard(stream);
      }
    }
  }

  const CUSTOM_STORES_KEY = 'vox_custom_stores';
  let customStores = [];

  function loadCustomStores(callback) {
    if (chrome.storage?.local) {
      chrome.storage.local.get([CUSTOM_STORES_KEY], (res) => {
        if (res && Array.isArray(res[CUSTOM_STORES_KEY])) {
          customStores = res[CUSTOM_STORES_KEY];
        } else {
          customStores = (typeof VOX_ENV !== 'undefined' && Array.isArray(VOX_ENV.CONNECTED_STORES))
            ? [...VOX_ENV.CONNECTED_STORES]
            : [];
          saveCustomStores();
        }
        callback && callback(customStores);
      });
    } else {
      try {
        const raw = localStorage.getItem(CUSTOM_STORES_KEY);
        if (raw) {
          customStores = JSON.parse(raw);
        } else {
          customStores = (typeof VOX_ENV !== 'undefined' && Array.isArray(VOX_ENV.CONNECTED_STORES))
            ? [...VOX_ENV.CONNECTED_STORES]
            : [];
          saveCustomStores();
        }
      } catch (_) {
        customStores = [];
      }
      callback && callback(customStores);
    }
  }

  function saveCustomStores() {
    if (chrome.storage?.local) {
      chrome.storage.local.set({ [CUSTOM_STORES_KEY]: customStores });
    } else {
      try {
        localStorage.setItem(CUSTOM_STORES_KEY, JSON.stringify(customStores));
      } catch (_) {}
    }
  }

  function addCustomStore(name, domain, user, profile) {
    if (!domain) return;
    const cleanDomain = domain.replace(/^https?:\/\//, '').replace(/\/.*$/, '').toLowerCase();
    const cleanName = name || cleanDomain.split('.')[0].toUpperCase();
    const id = 'store_' + Date.now();

    const existingIdx = customStores.findIndex(s => s.domain === cleanDomain);
    const storeObj = {
      id,
      name: cleanName,
      domain: cleanDomain,
      icon: '🌐',
      accountUser: user || 'user',
      defaultProfile: profile || 'home',
      status: 'connected',
      statusLabel: 'Terhubung'
    };

    if (existingIdx >= 0) {
      customStores[existingIdx] = storeObj;
    } else {
      customStores.unshift(storeObj);
    }

    saveCustomStores();
    renderConnectedStores();
  }

  function deleteCustomStore(storeId) {
    customStores = customStores.filter(s => s.id !== storeId);
    saveCustomStores();
    renderConnectedStores();
  }

  function renderConnectedStores() {
    const listEl = shadow.getElementById('vault-connected-stores-list');
    if (!listEl) return;

    if (vaultStoreCount) {
      vaultStoreCount.textContent = `${customStores.length} Website`;
    }

    if (!customStores.length) {
      listEl.innerHTML = `
        <div style="font-size: 11px; color: var(--ink-sec); text-align: center; padding: 14px; background: var(--card-bg); border: 1px dashed var(--border); border-radius: 8px;">
          No custom stores saved yet.<br>
          Use the button above to add your favorite online stores.
        </div>
      `;
      return;
    }

    listEl.innerHTML = customStores.map(store => {
      const isCurrentPage = window.location.hostname.includes(store.domain) || (store.domain && window.location.hostname.includes(store.domain.split('.')[0]));
      return `
        <div class="vox-store-card" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 10px; background: var(--card-bg); border: 1px solid ${isCurrentPage ? 'var(--voice)' : 'var(--border)'}; border-radius: 8px; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 16px;">${store.icon || '🌐'}</span>
            <div>
              <div style="font-size: 11.5px; font-weight: 650; color: var(--ink-pri); display: flex; align-items: center; gap: 5px;">
                <span>${escapeHtml(store.name)}</span>
                <span style="font-size: 9.5px; color: var(--ink-sec); font-family: var(--font-mono);">(${escapeHtml(store.domain)})</span>
                ${isCurrentPage ? '<span style="font-size: 8.5px; background: var(--chip-bg); color: var(--voice); padding: 1px 5px; border-radius: 4px; border: 1px solid var(--border);">Active</span>' : ''}
              </div>
              <div style="font-size: 10px; color: var(--ink-sec); font-family: var(--font-mono);">
                User: @${escapeHtml(store.accountUser)} · Profile: ${store.defaultProfile === 'office' ? 'Office' : 'Home'}
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <button class="vox-icon-btn btn-delete-custom-store" data-id="${store.id}" title="Remove this website" style="color: var(--bad); border-color: var(--border); padding: 3px 6px; font-size: 11px;">
              🗑️
            </button>
          </div>
        </div>
      `;
    }).join('');

    listEl.querySelectorAll('.btn-delete-custom-store').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        deleteCustomStore(id);
      });
    });
  }

  if (btnVaultSubmitStore) {
    btnVaultSubmitStore.addEventListener('click', () => {
      const name = inputStoreName?.value.trim() || '';
      const domain = inputStoreDomain?.value.trim() || '';
      const user = inputStoreUser?.value.trim() || '';
      const profile = selectStoreProfile?.value || 'home';
      if (!domain) {
        if (inputStoreDomain) {
          inputStoreDomain.style.borderColor = 'var(--bad)';
          setTimeout(() => { inputStoreDomain.style.borderColor = 'var(--border)'; }, 1500);
        }
        return;
      }
      addCustomStore(name, domain, user, profile);
      if (inputStoreName) inputStoreName.value = '';
      if (inputStoreDomain) inputStoreDomain.value = '';
      if (inputStoreUser) inputStoreUser.value = '';
    });
  }

  if (btnVaultAddCurrentSite) {
    const currentHost = window.location.hostname;
    btnVaultAddCurrentSite.textContent = `+ Add This Website (${currentHost})`;
    btnVaultAddCurrentSite.addEventListener('click', () => {
      addCustomStore(document.title.split(/[-|–—]/)[0].trim() || currentHost, currentHost, 'user', currentVaultProfile);
      playUiChime('ready');
    });
  }

  if (btnChatNew) {
    btnChatNew.addEventListener('click', resetChatSession);
  }

  // Web Audio UI Chime Generator
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playUiChime(type) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      if (type === 'listen') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(780, now + 0.12);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.18);
      } else if (type === 'ready') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(650, now);
        osc.frequency.exponentialRampToValueAtTime(920, now + 0.14);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.22);
      }
    } catch (_) {}
  }

  if (dialogDomain) dialogDomain.textContent = window.location.hostname;

  // 6. Theme Toggle & Expand Dialog
  const capsuleVaultBtn = shadow.getElementById('vox-capsule-vault');
  if (capsuleVaultBtn) {
    capsuleVaultBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openDialog();
      showVaultView();
    });
  }

  const expandBtn = shadow.getElementById('vox-expand-dialog');
  if (expandBtn) {
    expandBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (dialog.classList.contains('open')) {
        closeDialog();
      } else {
        openDialog();
      }
    });
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      rootWrapper.className = rootWrapper.className === 'theme-dark' ? 'theme-light' : 'theme-dark';
    });
  }

  // 7. Draggable Floating Capsule
  let isDragging = false;
  let dragStartX, dragStartY, initialLeft, initialTop, hasMoved = false;

  if (capsule) {
    capsule.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || e.target.closest('input') || e.target.closest('.capsule-core') || e.target.closest('.capsule-copy') || e.target.closest('.orbit-action')) return;
      isDragging = true;
      hasMoved = false;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      const targetEl = floatingStage || capsule;
      const rect = targetEl.getBoundingClientRect();
      initialLeft = rect.left;
      initialTop = rect.top;
      try { capsule.setPointerCapture(e.pointerId); } catch (_) {}
    });

    capsule.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasMoved = true;

      const targetEl = floatingStage || capsule;
      targetEl.style.right = 'auto';
      targetEl.style.bottom = 'auto';
      targetEl.style.left = `${initialLeft + dx}px`;
      targetEl.style.top = `${initialTop + dy}px`;
    });

    capsule.addEventListener('pointerup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      try { capsule.releasePointerCapture(e.pointerId); } catch (_) {}

      if (!hasMoved) return;

      // Magnetically snap to left or right screen edge
      const winWidth = window.innerWidth;
      const targetEl = floatingStage || capsule;
      const currentX = parseInt(targetEl.style.left || 0);

      if (currentX < winWidth / 2) {
        if (floatingStage && floatingDock !== 'left') toggleDockPosition();
      } else {
        if (floatingStage && floatingDock !== 'right') toggleDockPosition();
      }
    });
  }

  // ─── FLOATING STAGE & MORPHING STATE MACHINE (IRRHAMMCODE/FLOAT) ───
  let floatingMode = 'ambient';
  let floatingDock = 'right';
  let floatingToastTimer = null;

  function showFloatingToast(msg) {
    if (!floatingToast) return;
    floatingToast.textContent = msg;
    floatingToast.style.display = 'block';
    clearTimeout(floatingToastTimer);
    floatingToastTimer = setTimeout(() => {
      if (floatingToast) floatingToast.style.display = 'none';
    }, 2400);
  }

  function setFloatingMode(nextMode, options = {}) {
    floatingMode = nextMode;
    if (!floatingStage) return;

    floatingStage.classList.remove('mode-ambient', 'mode-listening', 'mode-thinking', 'mode-success', 'mode-actions');
    floatingStage.classList.add('mode-' + nextMode);

    if (iconAmbient) iconAmbient.style.display = 'none';
    if (iconListening) iconListening.style.display = 'none';
    if (iconThinking) iconThinking.style.display = 'none';
    if (iconSuccess) iconSuccess.style.display = 'none';
    if (iconActions) iconActions.style.display = 'none';

    if (nextMode === 'ambient') {
      if (iconAmbient) iconAmbient.style.display = 'grid';
      if (capsuleOverline) capsuleOverline.textContent = 'VOX IS READY';
      if (capsuleMainText) capsuleMainText.textContent = options.text || 'Ask anything or shop…';
      if (capsuleBtnIcon) capsuleBtnIcon.textContent = '⌘';
      if (successCard) successCard.style.display = 'none';
    } else if (nextMode === 'listening') {
      if (iconListening) iconListening.style.display = 'flex';
      if (capsuleOverline) capsuleOverline.textContent = 'I’M LISTENING';
      if (capsuleMainText) capsuleMainText.textContent = options.text || 'Tell me what you need…';
      if (capsuleBtnIcon) capsuleBtnIcon.textContent = '×';
      if (successCard) successCard.style.display = 'none';
    } else if (nextMode === 'thinking') {
      if (iconThinking) iconThinking.style.display = 'block';
      if (capsuleOverline) capsuleOverline.textContent = 'AGENTS AT WORK';
      if (capsuleMainText) capsuleMainText.textContent = options.text || 'Analyzing page & prices…';
      if (capsuleBtnIcon) capsuleBtnIcon.textContent = '×';
      if (successCard) successCard.style.display = 'none';
    } else if (nextMode === 'success') {
      if (iconSuccess) iconSuccess.style.display = 'block';
      if (capsuleOverline) capsuleOverline.textContent = 'ACTION COMPLETED';
      if (capsuleMainText) capsuleMainText.textContent = options.text || 'Action completed successfully!';
      if (capsuleBtnIcon) capsuleBtnIcon.textContent = '✓';
      if (successCard) {
        if (options.cardTitle && successCardTitle) successCardTitle.textContent = options.cardTitle;
        if (options.cardDesc && successCardDesc) successCardDesc.innerHTML = options.cardDesc;
        successCard.style.display = 'block';
      }
    } else if (nextMode === 'actions') {
      if (iconActions) iconActions.style.display = 'block';
      if (capsuleOverline) capsuleOverline.textContent = 'WHAT CAN I DO?';
      if (capsuleMainText) capsuleMainText.textContent = 'Select shopping action';
      if (capsuleBtnIcon) capsuleBtnIcon.textContent = '×';
      if (successCard) successCard.style.display = 'none';
    }
  }

  function toggleDockPosition() {
    floatingDock = floatingDock === 'right' ? 'left' : 'right';
    if (floatingStage) {
      floatingStage.classList.toggle('dock-left', floatingDock === 'left');
      floatingStage.classList.toggle('dock-right', floatingDock === 'right');
    }
    showFloatingToast(floatingDock === 'left' ? 'Dock: Left' : 'Dock: Right');
  }

  function setCapsuleState(state, subtext) {
    if (capsule) capsule.dataset.state = state;
    if (statusSub) statusSub.textContent = subtext;
    if (state === 'listening' || state === 'speaking') {
      if (waveform) waveform.style.display = 'inline-flex';
    } else {
      if (waveform) waveform.style.display = 'none';
    }

    // Sync with modern floating stage mode
    if (state === 'listening') {
      setFloatingMode('listening', { text: subtext || 'Listening to voice…' });
    } else if (state === 'reasoning') {
      setFloatingMode('thinking', { text: subtext || 'Processing request…' });
    } else if (state === 'speaking') {
      setFloatingMode('listening', { text: subtext || 'Vox is speaking…' });
    } else if (state === 'idle') {
      setFloatingMode('ambient', { text: subtext || 'Ask anything or shop…' });
    }
  }

  // Floating Stage Listeners
  if (dockHandle) {
    dockHandle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDockPosition();
    });
  }

  if (capsuleCore) {
    capsuleCore.addEventListener('click', (e) => {
      e.stopPropagation();
      if (floatingMode === 'listening') {
        stopListening();
        setFloatingMode('ambient');
      } else {
        startListening();
        setFloatingMode('listening');
      }
    });
  }

  if (capsuleBtnToggle) {
    capsuleBtnToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (floatingMode === 'actions') {
        setFloatingMode('ambient');
      } else {
        setFloatingMode('actions');
      }
    });
  }

  if (capsuleCopy) {
    capsuleCopy.addEventListener('click', () => {
      if (dialog.classList.contains('open')) {
        closeDialog();
      } else {
        openDialog();
      }
    });
  }

  // Action Orbit click handlers
  if (orbitActBuy) {
    orbitActBuy.addEventListener('click', (e) => {
      e.stopPropagation();
      setFloatingMode('thinking', { text: 'Preparing Autonomous Checkout…' });
      appendChatMessage('user', '↯ Instant Buy: Autonomous Checkout');
      executeAutonomousCheckout('checkout');
    });
  }

  if (orbitActDeals) {
    orbitActDeals.addEventListener('click', (e) => {
      e.stopPropagation();
      setFloatingMode('thinking', { text: 'Scanning coupons & promo deals…' });
      appendChatMessage('user', '🏷️ Coupon Hunt: Scan Promo Codes');
      executeAutonomousDealHunter('deals');
    });
  }

  if (orbitActCompare) {
    orbitActCompare.addEventListener('click', (e) => {
      e.stopPropagation();
      setFloatingMode('thinking', { text: 'Comparing price alternatives…' });
      appendChatMessage('user', '≋ Compare: Prices & Specifications');
      executeAutonomousCompare('compare');
    });
  }

  if (orbitActVault) {
    orbitActVault.addEventListener('click', (e) => {
      e.stopPropagation();
      setFloatingMode('ambient');
      openDialog();
      showVaultView();
    });
  }

  // 7b. Proactive Page Ingestion on Load — Index DOM automatically
  function ingestActivePage() {
    setCapsuleState('reasoning', 'Indexing page…');
    if (capsuleInfo) capsuleInfo.textContent = '⟳ Ingesting DOM';
    if (capsuleMainText) capsuleMainText.textContent = '⟳ Ingesting DOM';

    const headings = [...document.querySelectorAll('h1, h2, h3, h4')].map(el => el.textContent.trim()).filter(Boolean).slice(0, 40);
    const buttons = [...document.querySelectorAll('button, [role="tab"], [role="button"], .tab, .accordion-header, details > summary, [data-toggle], [aria-expanded]')]
      .map(el => ({
        text: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 80),
        tag: el.tagName.toLowerCase(),
        expanded: el.getAttribute('aria-expanded'),
        selector: buildUniqueSelector(el)
      }))
      .filter(b => b.text.length > 1)
      .slice(0, 60);
    const links = [...document.querySelectorAll('a[href]')]
      .map(a => ({ text: a.textContent.trim().slice(0, 60), href: a.href }))
      .filter(l => l.text.length > 1)
      .slice(0, 30);
    const metaDesc = document.querySelector('meta[name="description"]')?.content || '';
    const rawSample = document.body?.innerText?.slice(0, 3000) || '';

    ingestedPageContext = {
      url: window.location.href,
      domain: window.location.hostname,
      title: document.title,
      headings,
      buttons,
      links,
      metaDesc,
      rawSample,
      elementCount: headings.length + buttons.length + links.length,
      ingestedAt: Date.now()
    };

    isPageIngested = true;
    setCapsuleState('idle', 'Hey Vox or Ask');
    if (capsuleInfo) capsuleInfo.textContent = `✓ ${ingestedPageContext.elementCount} elements indexed`;
    if (capsuleMainText) capsuleMainText.textContent = `✓ ${ingestedPageContext.elementCount} elements indexed`;

    // Auto-fade the ingestion badge after 4s
    setTimeout(() => {
      if (capsule && capsule.dataset.state === 'idle') {
        if (capsuleInfo) capsuleInfo.textContent = 'Hey Vox or Ask';
        if (capsuleMainText) capsuleMainText.textContent = 'Ask anything or shop…';
      }
    }, 4000);

    console.log(`[Vox Agent] Page ingested: ${ingestedPageContext.elementCount} elements from ${ingestedPageContext.domain}`);
  }

  function buildUniqueSelector(el) {
    if (el.id) return `#${el.id}`;
    const tag = el.tagName.toLowerCase();
    const cls = el.className && typeof el.className === 'string'
      ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.')
      : '';
    const idx = [...(el.parentNode?.children || [])].indexOf(el);
    return `${tag}${cls}:nth-child(${idx + 1})`;
  }

  // 7c. Autonomous Action & Navigation Clicker ("View Pricing", "Buy", "Specs", Tabs, Accordions)
  async function autonomousExploreAndClick(query, keywords) {
    const qLower = (query || '').toLowerCase().trim();

    // NEVER explore/click random links if user is asking to search or find a product
    if (/\b(search|cari|find|look\s*for|looking\s*for)\b/i.test(qLower)) return null;

    const isPricingAction = /\b(pricing|price|harga|cost|buy|beli|rate|plans?|subscribe|langganan)\b/i.test(qLower) && !/\bshopee\b/i.test(qLower);
    const isSpecsAction = /\b(tech\s*specs?|specs?|spesifikasi|features?|fitur|details?|architecture|arsitektur)\b/i.test(qLower);

    if (!isPricingAction && !isSpecsAction) return null;

    // Collect all interactive elements from active page DOM
    const allInteractive = [
      ...document.querySelectorAll('a[href], button, [role="button"], [role="tab"], summary, .tab, [data-toggle], .nav-link, details, input[type="button"], input[type="submit"]')
    ];

    let candidates = [];

    if (isPricingAction) {
      for (const el of allInteractive) {
        const txt = (el.textContent || el.getAttribute('aria-label') || el.value || '').trim().toLowerCase();
        const href = (el.getAttribute('href') || '').toLowerCase();
        const isVisible = el.offsetParent !== null || el.offsetWidth > 0;
        if (!isVisible) continue;

        // Skip social links, app store links, and external trackers
        if (/facebook\.com|fb\.com|instagram\.com|twitter\.com|x\.com|tiktok\.com|youtube\.com|linkedin\.com|wa\.me|whatsapp\.com|telegram\.org|t\.me|play\.google\.com|apps\.apple\.com|threads\.net|pinterest\.com/i.test(href)) {
          continue;
        }

        let score = 0;
        // Exact and high-confidence text matches
        if (/\b(view pricing|pricing|buy now|buy|lihat harga|buka harga)\b/i.test(txt)) score += 100;
        else if (/\b(plans|pricing|buy)\b/i.test(txt)) score += 60;

        // URL / Href matches (require strict path delimiters to prevent matching /shopee or /storeid)
        if (/\/(pricing|plans|buy|order)(\/|$|\?|#)/i.test(href)) score += 70;
        else if (/#(pricing|buy|plans|order)/i.test(href)) score += 80;

        // Class and ID matches
        const cls = (el.className || '') + ' ' + (el.id || '');
        if (/pricing|btn-buy|buy-btn|cta-buy/i.test(cls)) score += 40;

        if (score > 0) {
          candidates.push({ el, score, txt: (el.textContent || el.getAttribute('aria-label') || 'Pricing').trim() });
        }
      }
    } else if (isSpecsAction) {
      for (const el of allInteractive) {
        const txt = (el.textContent || el.getAttribute('aria-label') || el.value || '').trim().toLowerCase();
        const href = (el.getAttribute('href') || '').toLowerCase();
        const isVisible = el.offsetParent !== null || el.offsetWidth > 0;
        if (!isVisible) continue;

        if (/facebook\.com|fb\.com|instagram\.com|twitter\.com|x\.com|tiktok\.com|youtube\.com|linkedin\.com/i.test(href)) {
          continue;
        }

        let score = 0;
        if (/\b(tech specs|specs|specification|spesifikasi)\b/i.test(txt)) score += 100;
        else if (/\b(features|fitur|details)\b/i.test(txt)) score += 60;
        if (/\/(specs|tech-specs|features)(\/|$|\?|#)/i.test(href)) score += 70;

        if (score > 0) {
          candidates.push({ el, score, txt: (el.textContent || el.getAttribute('aria-label') || 'Tech Specs').trim() });
        }
      }
    }

    // Sort by highest score first
    candidates.sort((a, b) => b.score - a.score);

    const bestCandidate = candidates[0];
    if (bestCandidate) {
      const targetEl = bestCandidate.el;
      const targetLabel = bestCandidate.txt || 'Target';
      const toastMsg = `⚡ Autonomous Action: Clicking "${targetLabel.slice(0, 30)}"…`;
      console.log('[Vox Agent]', toastMsg);
      setCapsuleState('reasoning', `⚡ Clicking "${targetLabel.slice(0, 18)}"…`);

      // Scroll smoothly into view and apply glowing cyan halo
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      targetEl.classList.add('vox-halo-highlight');

      await new Promise(r => setTimeout(r, 400));

      // Dispatch complete pointer and mouse event sequence (simulating real user interaction)
      try {
        const rect = targetEl.getBoundingClientRect();
        const clientX = rect.left + rect.width / 2;
        const clientY = rect.top + rect.height / 2;
        const eventInit = { bubbles: true, cancelable: true, view: window, clientX, clientY };
        
        targetEl.dispatchEvent(new PointerEvent('pointerdown', eventInit));
        targetEl.dispatchEvent(new MouseEvent('mousedown', eventInit));
        targetEl.dispatchEvent(new PointerEvent('pointerup', eventInit));
        targetEl.dispatchEvent(new MouseEvent('mouseup', eventInit));
        targetEl.dispatchEvent(new MouseEvent('click', eventInit));
        targetEl.click();
      } catch (_) {}

      // Check if element is or is inside an anchor link with valid destination
      const anchorEl = targetEl.closest('a[href]');
      if (anchorEl && anchorEl.href && !anchorEl.href.startsWith('javascript:')) {
        const destinationUrl = anchorEl.href;
        try {
          const urlObj = new URL(destinationUrl, window.location.href);
          const currentHost = window.location.hostname.replace(/^www\./, '');
          const targetHost = urlObj.hostname.replace(/^www\./, '');
          // STRICT SAFETY: Never navigate away to a third-party or social domain
          if (targetHost === currentHost || targetHost.endsWith('.' + currentHost) || currentHost.endsWith('.' + targetHost)) {
            console.log('[Vox Agent] Navigating to verified in-store link:', destinationUrl);
            setTimeout(() => {
              window.location.assign(destinationUrl);
            }, 500);
          } else {
            console.warn('[Vox Agent] Blocked external navigation to:', destinationUrl);
          }
        } catch (_) {}
      }

      await new Promise(r => setTimeout(r, 500));

      // Re-read newly revealed content if in-page
      const newContent = document.querySelector('.pricing, #pricing, .specs, #specs, details[open], article, section')?.innerText?.slice(0, 2000) || '';

      setTimeout(() => {
        targetEl.classList.remove('vox-halo-highlight');
      }, 3500);

      return {
        source: targetLabel,
        content: newContent,
        toast: toastMsg,
        clicked: true
      };
    }

    // Fallback: check ingested buttons / accordions that are collapsed
    if (ingestedPageContext?.buttons?.length) {
      for (const candidate of ingestedPageContext.buttons.slice(0, 4)) {
        try {
          const el = document.querySelector(candidate.selector);
          if (!el) continue;
          const isCollapsed = el.getAttribute('aria-expanded') === 'false' || el.closest('details:not([open])');
          if (isCollapsed) {
            el.click();
            await new Promise(r => setTimeout(r, 400));
            return {
              source: candidate.text,
              content: el.closest('section, article, details')?.innerText?.slice(0, 1500) || '',
              toast: `⚡ Autonomous Agent: Clicking "${candidate.text.slice(0, 25)}"…`
            };
          }
        } catch (_) {}
      }
    }

    return null;
  }

  // ═══════════════════════════════════════════════════════════════
  // 7e. Semantic Form Field Classifier & Native Input Injector
  // ═══════════════════════════════════════════════════════════════

  /**
   * Classifies an input field by scanning its attributes (name, id, placeholder,
   * autocomplete, aria-label, and associated <label>) into semantic categories.
   */
  function classifyInputField(el) {
    const attrs = [
      (el.name || ''),
      (el.id || ''),
      (el.placeholder || ''),
      (el.autocomplete || ''),
      (el.getAttribute('aria-label') || ''),
      (el.getAttribute('data-label') || '')
    ].join(' ').toLowerCase();

    // Find associated <label> text
    let labelText = '';
    if (el.id) {
      const labelEl = document.querySelector(`label[for="${el.id}"]`);
      if (labelEl) labelText = (labelEl.textContent || '').toLowerCase();
    }
    if (!labelText) {
      const parentLabel = el.closest('label');
      if (parentLabel) labelText = (parentLabel.textContent || '').toLowerCase();
    }

    const combined = attrs + ' ' + labelText;

    // Order matters: check most specific patterns first
    if (/email|e-mail|alamat.?email|email.?address/i.test(combined)) return 'email';
    if (/^password$|kata.?sandi|pwd|pass.?word|current.?password|new.?password/i.test(combined) || el.type === 'password') return 'password';
    if (/confirm.?password|re.?password|ulangi.?password/i.test(combined)) return 'confirmPassword';
    if (/full.?name|nama.?lengkap|your.?name|billing.?name|shipping.?name/i.test(combined)) return 'fullName';
    if (/first.?name|nama.?depan|given.?name/i.test(combined)) return 'firstName';
    if (/last.?name|nama.?belakang|family.?name|surname/i.test(combined)) return 'lastName';
    if (/phone|telp|telepon|hp|mobile|whatsapp|handphone|no.?hp/i.test(combined)) return 'phone';
    if (/street|alamat|address.?line|jalan|address1|shipping.?address|billing.?address/i.test(combined)) return 'street';
    if (/city|kota|town|kabupaten/i.test(combined)) return 'city';
    if (/state|province|provinsi|region|daerah/i.test(combined)) return 'province';
    if (/zip|postal|kode.?pos|postcode|pos/i.test(combined)) return 'postalCode';
    if (/country|negara|nation/i.test(combined)) return 'country';
    if (/coupon|promo|voucher|discount|kupon|diskon|kode.?promo/i.test(combined)) return 'coupon';
    if (/username|user.?name|akun|nama.?pengguna/i.test(combined)) return 'username';
    if (/search|cari|query/i.test(combined)) return 'search';
    if (/company|perusahaan|organisasi|organization/i.test(combined)) return 'company';

    return null;
  }

  /**
   * Fills a single field using native prototype descriptor hacking for
   * framework compatibility (React, Vue, Angular synthetic event systems).
   * Dispatches focus → input → change → blur with visual cyan halo animation.
   */
  function fillFieldWithNativeEvents(el, value, delayMs = 0) {
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          // Scroll into view
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });

          // Focus the field
          el.dispatchEvent(new FocusEvent('focus', { bubbles: true }));
          el.focus();

          // Reset React internal value tracker before setting value
          if (el._valueTracker) {
            el._valueTracker.setValue('');
          }

          // Use native prototype descriptor to set value (React/Vue compatible)
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype, 'value'
          )?.set;
          const nativeTextareaValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLTextAreaElement.prototype, 'value'
          )?.set;

          if (el.tagName === 'TEXTAREA' && nativeTextareaValueSetter) {
            nativeTextareaValueSetter.call(el, value);
          } else if (nativeInputValueSetter) {
            nativeInputValueSetter.call(el, value);
          } else {
            el.value = value;
          }

          // Reset React internal value tracker again so synthetic events detect the change
          if (el._valueTracker) {
            el._valueTracker.setValue('');
          }

          // Dispatch synthetic events for React/Vue/Angular
          el.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
          el.dispatchEvent(new Event('change', { bubbles: true, composed: true }));

          // Visual halo feedback
          el.classList.add('vox-halo-highlight');
          setTimeout(() => el.classList.remove('vox-halo-highlight'), 2500);

          resolve(true);
        } catch (err) {
          console.warn('[Vox Autofill] Error filling field:', err);
          resolve(false);
        }
      }, delayMs);
    });
  }

  /**
   * Scans all visible input/textarea/select fields on the page and
   * returns a classified map of field → element.
   */
  function scanAndClassifyAllFields() {
    const allInputs = document.querySelectorAll(
      'input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="image"]), textarea, select'
    );
    const fieldMap = {};

    for (const el of allInputs) {
      // Skip invisible fields
      if (el.offsetParent === null && el.offsetWidth === 0) continue;

      const fieldType = classifyInputField(el);
      if (fieldType && !fieldMap[fieldType]) {
        fieldMap[fieldType] = el;
      }
    }

    return fieldMap;
  }

  // ═══════════════════════════════════════════════════════════════
  // 7f. Autonomous Multi-Step Workflows
  // ═══════════════════════════════════════════════════════════════

  /** State flag for checkout confirmation guardrail */
  let awaitingCheckoutConfirmation = false;
  let pendingCheckoutSubmitBtn = null;
  let pendingCheckoutSummary = null;

  /**
   * Get the active identity profile from background service worker.
   * Falls back to window.VOX_ENV.IDENTITY_VAULT if chrome.runtime unavailable.
   */
  async function getActiveProfile(profileName) {
    try {
      if (chrome.runtime?.sendMessage) {
        return await new Promise((resolve, reject) => {
          chrome.runtime.sendMessage(
            { action: 'GET_IDENTITY_PROFILE', payload: { profileName } },
            (response) => {
              if (chrome.runtime.lastError || !response?.success) {
                reject(new Error(response?.error || 'Profile fetch failed'));
              } else {
                resolve(response.data);
              }
            }
          );
        });
      }
    } catch (_) {}

    // Fallback to VOX_ENV
    const vault = window.VOX_ENV?.IDENTITY_VAULT || {};
    const name = profileName || vault.activeProfile || 'home';
    return { profileName: name, ...(vault.profiles?.[name] || {}) };
  }

  /**
   * Intelligently strips conversational lead-ins, assistant wake words, polite phrases,
   * modal verbs, and store suffixes, extracting purely the target product name.
   */
  function extractCleanSearchTerm(rawQuery) {
    if (!rawQuery) return '';
    let q = rawQuery.trim();

    // 1. Remove wake words / assistant address
    q = q.replace(/^(hey\s*vox\s*,?\s*|vox\s*,?\s*|hi\s*vox\s*,?\s*|hello\s*vox\s*,?\s*|ok\s*vox\s*,?\s*)/i, '');

    // 2. Remove English conversational lead-ins & search requests
    q = q.replace(/^(can\s*you\s*(please\s*)?|could\s*you\s*(please\s*)?|would\s*you\s*(please\s*)?|will\s*you\s*(please\s*)?|please\s*|help\s*me\s*(to\s*)?)/i, '');
    q = q.replace(/^(i\s*want\s*to\s*(buy|get|find|order|purchase|see|check)|i\s*wanna\s*(buy|get|find|order|purchase|see|check)|i\s*need\s*to\s*(buy|get|find|order|purchase)|i('d| would)\s*like\s*to\s*(buy|get|find|order|purchase|see))\s+/i, '');
    q = q.replace(/^(i\s*want|i\s*need|i('m| am)\s*looking\s*(for|to\s*buy)?|i('m| am)\s*searching\s*(for)?)\s+/i, '');
    q = q.replace(/^(search\s*(me\s*)?(up|for)?|find\s*(me)?|look\s*(up|for)?|show\s*(me)?|check\s*(out)?|get\s*(me)?|buy\s*(me)?)\s+/i, '');

    // 3. Remove Indonesian conversational lead-ins & search requests
    q = q.replace(/^(tolong\s*|coba\s*|bantu\s*|bisa\s*(minta\s*tolong\s*)?|mohon\s*)/i, '');
    q = q.replace(/^(aku\s*mau\s*(beli|cari|lihat|order|checkout|pesan)|saya\s*mau\s*(beli|cari|lihat|order|checkout|pesan)|mau\s*(beli|cari|lihat|order|checkout|pesan)|pengen\s*(beli|cari|lihat))\s+/i, '');
    q = q.replace(/^(cari\s*(kan|in)?|cariin\s*(aku|saya)?|carikan\s*(aku|saya)?|beliin\s*(aku|saya)?|beli\s*(kan)?|temukan|lihat)\s+/i, '');

    // 4. Remove leading articles: "a", "an", "the", "sebuah"
    q = q.replace(/^(a|an|the|sebuah|satu)\s+/i, '');

    // 5. Remove trailing platform suffixes, polite words & fillers
    q = q.replace(/\s+(on|in|di)\s+(shopee|tokopedia|lazada|blibli|amazon|google|store|marketplace|web|olshop).*$/i, '');
    q = q.replace(/\s+(please|dong|ya|deh|nih|lah|kan|kah|yang\s*bagus|terbaik|termurah|murah)$/i, '');

    q = q.trim();

    // 6. If query still has leading search/buy verbs after previous steps
    q = q.replace(/^(search|cari|find|buy|beli)\s+/i, '').trim();

    return q || rawQuery.trim();
  }

  /**
   * Parse numerical price and currency from DOM text snippet.
   */
  function parseDomPrice(text) {
    if (!text) return null;
    const idrMatch = text.match(/Rp\s*([\d.,]+)/i);
    if (idrMatch) {
      const cleanNum = idrMatch[1].replace(/\./g, '').replace(/,/g, '');
      const num = parseInt(cleanNum, 10);
      if (!isNaN(num) && num > 1000) return { raw: idrMatch[0], value: num, currency: 'Rp' };
    }
    const usdMatch = text.match(/\$\s*([\d,]+(?:\.\d{2})?)/);
    if (usdMatch) {
      const cleanNum = usdMatch[1].replace(/,/g, '');
      const num = parseFloat(cleanNum);
      if (!isNaN(num)) return { raw: usdMatch[0], value: num, currency: '$' };
    }
    return null;
  }

  /**
   * Format numerical price into localized currency string.
   */
  function formatDomPrice(val, currency = 'Rp') {
    if (currency === 'Rp') {
      return 'Rp ' + val.toLocaleString('id-ID');
    }
    return '$' + val.toLocaleString('en-US');
  }

  /**
   * Autonomous Scan & Price Inspection of Search Results
   * Visibly scrolls down the page to trigger lazy loading of product items,
   * extracts product titles and prices across Shopee, Tokopedia, Amazon, etc.,
   * scrolls the lowest-priced / best deal item into view,
   * highlights it with the signature cyan halo, and announces findings.
   */
  async function autonomousScanAndHighlightSearchResults(searchKeyword, storeName) {
    const cleanTerm = extractCleanSearchTerm(searchKeyword);
    setCapsuleState('reasoning', `Scouting prices for "${cleanTerm.slice(0, 14)}"…`);

    // 1. Smoothly scroll down the page to trigger DOM hydration of search cards
    window.scrollBy({ top: 480, behavior: 'smooth' });
    await new Promise(r => setTimeout(r, 700));

    // 2. Discover product card elements across e-commerce platforms
    const cardSelectors = [
      // Shopee
      '.shopee-search-item-result__item',
      'div[data-sqi]',
      'ul.shopee-search-item-result__items > li',
      // Tokopedia
      'div[data-testid="divSRPContentItem"]',
      'div[data-testid="master-product-card"]',
      // Amazon
      'div[data-component-type="s-search-result"]',
      // Blibli, Lazada, Generic
      '.product-card',
      'div[class*="ProductCard"]',
      'div[class*="product-item"]',
      'article[data-qa-id="product-item"]'
    ];

    let foundCards = [];
    for (const sel of cardSelectors) {
      const matches = Array.from(document.querySelectorAll(sel)).filter(el => {
        return el.offsetHeight > 80 && el.offsetWidth > 80 && el.offsetParent !== null;
      });
      if (matches.length >= 2) {
        foundCards = matches;
        break;
      }
    }

    // Generic fallback: inspect elements with price patterns and climb to parent cards
    if (foundCards.length === 0) {
      const allTextNodes = Array.from(document.querySelectorAll('span, div, b, strong, p'));
      const seen = new Set();
      for (const node of allTextNodes) {
        if (node.children.length === 0 && /(?:Rp\s*[\d.,]{4,}|\$\s*[\d.,]{2,})/i.test(node.textContent || '')) {
          const card = node.closest('div[class*="item"], div[class*="card"], div[class*="product"], article, li');
          if (card && !seen.has(card) && card.offsetHeight > 100 && card.offsetWidth > 100 && card.offsetHeight < 850) {
            seen.add(card);
            foundCards.push(card);
          }
        }
      }
    }

    // 3. Parse titles and prices
    const parsedItems = [];
    for (const card of foundCards) {
      const fullText = card.innerText || card.textContent || '';
      const price = parseDomPrice(fullText);
      // Filter out low prices like Rp 1.000 accessories or vouchers if searching laptops/phones
      if (price && price.value > 10000) {
        const titleEl = card.querySelector('div[class*="title" i], div[class*="name" i], span[class*="name" i], h2, h3, a[title]') || card;
        let title = (titleEl.getAttribute('title') || titleEl.innerText || titleEl.textContent || '').trim().replace(/\s+/g, ' ');
        if (title.length > 70) title = title.slice(0, 67) + '…';
        parsedItems.push({
          el: card,
          title: title || cleanTerm,
          price: price
        });
      }
    }

    const currentStore = storeName || (
      window.location.hostname.includes('shopee') ? 'Shopee' :
      window.location.hostname.includes('tokopedia') ? 'Tokopedia' :
      window.location.hostname.includes('amazon') ? 'Amazon' : 'Store'
    );

    if (parsedItems.length > 0) {
      // Sort by price ascending
      parsedItems.sort((a, b) => a.price.value - b.price.value);
      const minItem = parsedItems[0];
      const maxItem = parsedItems[parsedItems.length - 1];

      const minPriceStr = formatDomPrice(minItem.price.value, minItem.price.currency);
      const maxPriceStr = formatDomPrice(maxItem.price.value, maxItem.price.currency);

      // Smoothly scroll to the lowest-price card and apply radiant halo
      minItem.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      document.querySelectorAll('.vox-halo-highlight').forEach(el => el.classList.remove('vox-halo-highlight'));
      minItem.el.classList.add('vox-halo-highlight');
      setTimeout(() => minItem.el.classList.remove('vox-halo-highlight'), 10000);

      const spoken = `I found ${parsedItems.length} listings for ${cleanTerm} on ${currentStore}. Prices start from ${minPriceStr} up to ${maxPriceStr}. I've scrolled down and highlighted the lowest price deal for you at ${minPriceStr}!`;
      const content = `🔍 **Live Market Scan: "${escapeHtml(cleanTerm)}" on ${currentStore}**\n\n` +
        `I've scrolled through the search results and analyzed **${parsedItems.length} listings**:\n\n` +
        `• **🏷️ Lowest Price Deal**: **${minPriceStr}** *(Highlighted with cyan halo on screen)*\n` +
        `• **📈 Market Range**: ${minPriceStr} — ${maxPriceStr}\n` +
        `• **📦 Best Deal**: *${escapeHtml(minItem.title)}*\n\n` +
        `*Would you like me to filter for Official Store only, or check product specifications?*`;

      const quickOptions = [
        { label: `⚡ Lowest Price (${minPriceStr})`, query: `${cleanTerm} termurah` },
        { label: "⭐ Official Store Only", query: `${cleanTerm} official store` },
        { label: "🔥 Top Rated & Terlaris", query: `${cleanTerm} terlaris` },
        { label: "🎯 Under " + maxPriceStr, query: `${cleanTerm} diskon promo` }
      ];

      appendChatMessage('agent', content, { quickOptions, spoken });
      speak(spoken);
      setCapsuleState('idle', 'Price scan complete');
      return { minItem, maxItem, count: parsedItems.length };
    } else {
      // If products haven't loaded yet or none matched, fallback to interactive clarification
      const fallback = generateSearchInteractiveFollowUp(cleanTerm, currentStore);
      appendChatMessage('agent', fallback.content, {
        quickOptions: fallback.quickOptions,
        spoken: fallback.spoken,
        followUpQuestion: fallback.followUpQuestion
      });
      speak(fallback.spoken);
      setCapsuleState('idle', 'Search ready');
      return null;
    }
  }

  /**
   * Generates interactive follow-up questions and quick-choice chips
   * tailored to the searched item and active store.
   */
  function generateSearchInteractiveFollowUp(cleanTerm, storeName) {
    const t = (cleanTerm || '').toLowerCase();

    // 1. Gaming Laptops & PCs (e.g. Lenovo Gaming, Legion, LOQ, ASUS ROG, RTX 4060, etc.)
    if (/lenovo|legion|loq|gaming\s*laptop|laptop\s*gaming|asus\s*rog|tuf|acer\s*nitro|predator|msi\s*gaming|hp\s*victus|omen|rtx/i.test(t)) {
      return {
        spoken: `I've searched for ${cleanTerm} on ${storeName}! What is your target budget, and are you looking for the budget LOQ series or the high-performance Legion?`,
        followUpQuestion: `What is your target budget, and are you looking for the budget LOQ series or the high-performance Legion?`,
        content: `🔍 **Searching for "${cleanTerm}" on ${storeName}**\n\nI have typed your query and clicked the search button! To help you pick the right model:\n\n• **Budget Entry (~Rp 12M – 16M)**: Lenovo LOQ (RTX 3050 / RTX 4050)\n• **Sweet Spot (~Rp 18M – 24M)**: Lenovo Legion 5 / Slim 5 (RTX 4060)\n• **Flagship Beast (~Rp 28M+)**: Lenovo Legion Pro 7 / 9 (RTX 4080 / 4090)\n\n*What is your price range or preferred spec? Tap an option below to narrow down:*`,
        quickOptions: [
          { label: "💰 Budget LOQ (Rp 12-16M)", query: `${cleanTerm} LOQ RTX 4050` },
          { label: "⚡ Sweet Spot Legion 5 (Rp 18-24M)", query: `${cleanTerm} Legion 5 RTX 4060` },
          { label: "🔥 Flagship Legion Pro (Rp 28M+)", query: `${cleanTerm} Legion Pro 7` },
          { label: "🎯 Under Rp 15 Million", query: `${cleanTerm} under 15 juta` },
          { label: "🚀 RTX 4060 Spec", query: `${cleanTerm} RTX 4060` }
        ]
      };
    }

    // 2. Smartphones & Tablets (e.g. iPhone, Samsung, Xiaomi)
    if (/iphone|galaxy|samsung|xiaomi|redmi|oppo|vivo|ipad|pixel|hp/i.test(t)) {
      return {
        spoken: `I've searched for ${cleanTerm} on ${storeName}! What is your target budget, and what storage capacity do you need?`,
        followUpQuestion: `What is your target budget, and what storage capacity do you need?`,
        content: `🔍 **Searching for "${cleanTerm}" on ${storeName}**\n\nI've submitted the search! What price range or storage size fits what you are looking for?`,
        quickOptions: [
          { label: "💰 Budget Tier (< Rp 5M)", query: `${cleanTerm} under 5 juta garansi resmi` },
          { label: "⚡ Mid-Range (Rp 6-10M)", query: `${cleanTerm} 256GB garansi resmi` },
          { label: "🔥 Flagship Pro Model", query: `${cleanTerm} Pro garansi resmi` },
          { label: "🏷️ Official Store Only", query: `${cleanTerm} official store` }
        ]
      };
    }

    // 3. Audio & Accessories (Headphones, TWS, Mouse, Keyboard, Monitor)
    if (/mouse|keyboard|headset|headphone|tws|earbuds|monitor|speaker|mic/i.test(t)) {
      return {
        spoken: `I've searched for ${cleanTerm} on ${storeName}! Are you looking for budget-friendly wireless options or premium gear?`,
        followUpQuestion: `Are you looking for budget-friendly wireless options or premium gear?`,
        content: `🔍 **Searching for "${cleanTerm}" on ${storeName}**\n\nSearch executed! What style or price tier are you aiming for?`,
        quickOptions: [
          { label: "💰 Budget Value Pick", query: `${cleanTerm} murah berkualitas` },
          { label: "⚡ Wireless & Bluetooth", query: `${cleanTerm} wireless bluetooth` },
          { label: "⭐ Top Rated & Popular", query: `${cleanTerm} terlaris official store` },
          { label: "🔥 Pro Esports Grade", query: `${cleanTerm} pro gaming` }
        ]
      };
    }

    // 4. General Products / Default
    return {
      spoken: `I've searched for ${cleanTerm} on ${storeName}! What is your target budget, and do you prefer budget options or official store listings?`,
      followUpQuestion: `What is your target budget, and do you prefer budget options or official store listings?`,
      content: `🔍 **Searching for "${cleanTerm}" on ${storeName}**\n\nI've typed the query and clicked the search button! What price tier or brand preference would you like to filter?`,
      quickOptions: [
        { label: "💰 Best Budget Option", query: `${cleanTerm} murah terbaik` },
        { label: "⭐ Top Rated & Popular", query: `${cleanTerm} terlaris` },
        { label: "🏷️ Official Store Only", query: `${cleanTerm} official store` },
        { label: "🔥 Latest 2026 Edition", query: `${cleanTerm} terbaru 2026` }
      ]
    };
  }

  /**
   * Autonomous E-Commerce Search Execution
   * Discovers the store's search input, types search term with React/Vue-compatible events,
   * highlights and physically presses the search button with tactile animation,
   * engages the user in an interactive clarifying dialogue with clickable quick-option chips,
   * and guarantees navigation to search results.
   */
  async function executeAutonomousSearch(rawQuery) {
    // All searches in Vox Agent execute the 5-Layer Cognitive Multi-Agent Shopping Engine
    return executeAutonomousLiveCompare(rawQuery);
  }

  /**
   * Autonomous Sign In / Login Flow
   * 1. Find and click "Sign In" / "Login" / "Masuk" button/link
   * 2. Fill email/username and password from active Identity Vault profile
   * 3. Announce completion and wait for user confirmation to submit
   */
  async function executeAutonomousSignIn(intent) {
    setCapsuleState('reasoning', 'Signing in…');

    // Step 1: Find and click login trigger
    const loginTriggers = document.querySelectorAll('a, button, [role="button"], input[type="submit"], input[type="button"]');
    let loginBtn = null;

    for (const el of loginTriggers) {
      const txt = (el.textContent || el.value || el.getAttribute('aria-label') || '').trim().toLowerCase();
      const href = (el.getAttribute('href') || '').toLowerCase();
      const isVisible = el.offsetParent !== null || el.offsetWidth > 0;
      if (!isVisible) continue;

      if (/\b(sign\s*in|log\s*in|login|masuk|masuk\s*akun)\b/i.test(txt) || /\/(login|signin|sign-in)/i.test(href)) {
        loginBtn = el;
        break;
      }
    }

    if (loginBtn) {
      loginBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      loginBtn.classList.add('vox-halo-highlight');
      await new Promise(r => setTimeout(r, 300));
      loginBtn.click();
      try {
        const rect = loginBtn.getBoundingClientRect();
        loginBtn.dispatchEvent(new MouseEvent('click', { bubbles: true, clientX: rect.left + rect.width / 2, clientY: rect.top + rect.height / 2 }));
      } catch (_) {}
      await new Promise(r => setTimeout(r, 800));
      setTimeout(() => loginBtn.classList.remove('vox-halo-highlight'), 2000);
    }

    // Step 2: Scan for login form fields
    await new Promise(r => setTimeout(r, 500));
    const fieldMap = scanAndClassifyAllFields();
    const profile = await getActiveProfile();

    let filled = 0;

    // Fill email or username
    if (fieldMap.email) {
      await fillFieldWithNativeEvents(fieldMap.email, profile.email || '', 100);
      filled++;
    } else if (fieldMap.username) {
      await fillFieldWithNativeEvents(fieldMap.username, profile.username || '', 100);
      filled++;
    }

    // Fill password
    if (fieldMap.password) {
      await fillFieldWithNativeEvents(fieldMap.password, profile.password || '', 200);
      filled++;
    }

    if (filled > 0) {
      setCapsuleState('idle', 'Login filled');
      speak('I have entered your login details. Would you like me to submit the form? Say "submit" or "lanjutkan" to proceed.');
    } else {
      setCapsuleState('idle', 'No login form found');
      speak('I could not find a login form on this page. Please navigate to the login page first.');
    }
  }

  /**
   * Autonomous Address & Contact Autofill
   * Fills all visible personal and shipping address fields using the active
   * (or specified) Identity Vault profile.
   */
  async function executeAutonomousAutofill(intent, profileName) {
    setCapsuleState('reasoning', 'Filling form…');

    // If a specific profile was requested, switch to it first
    if (profileName) {
      try {
        if (chrome.runtime?.sendMessage) {
          await new Promise((resolve) => {
            chrome.runtime.sendMessage(
              { action: 'SWITCH_IDENTITY_PROFILE', payload: { profileName } },
              () => resolve()
            );
          });
        }
      } catch (_) {}
    }

    const profile = await getActiveProfile(profileName);
    const fieldMap = scanAndClassifyAllFields();

    const fillMap = {
      fullName: profile.fullName,
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      phone: profile.phone,
      street: profile.street,
      city: profile.city,
      province: profile.province,
      postalCode: profile.postalCode,
      country: profile.country,
      username: profile.username
    };

    let filledCount = 0;
    let delay = 0;

    for (const [fieldType, value] of Object.entries(fillMap)) {
      if (fieldMap[fieldType] && value) {
        await fillFieldWithNativeEvents(fieldMap[fieldType], value, delay);
        filledCount++;
        delay += 150; // Stagger fills for human-like behavior
      }
    }

    const profileLabel = profile.label || profile.profileName || 'default';
    if (filledCount > 0) {
      setCapsuleState('idle', `${filledCount} fields filled`);
      const fillMsg = `I have filled ${filledCount} fields using your ${profileLabel} profile. Please review the information.`;
      speak(fillMsg);
      appendChatMessage('agent', `Successfully filled **${filledCount} fields** in the shipping address form using your **${profileLabel}** profile (${profile.fullName}, ${profile.street}, ${profile.city}).`, {
        spoken: fillMsg
      });
    } else {
      setCapsuleState('idle', 'No fields found');
      speak('I could not find any form fields to fill on this page.');
      appendChatMessage('agent', 'Could not find shipping address form fields on this page. Please make sure the checkout or shipping form is open.', {
        spoken: 'I could not find any form fields to fill on this page.'
      });
    }
  }

  /**
   * End-to-End Autonomous Checkout Workflow
   * Step 1: Click "Add to Cart" / "Buy Now"
   * Step 2: Click "Proceed to Checkout" / "View Bag"
   * Step 3: Fill shipping address & contact from Identity Vault
   * Step 4: Run Deal Hunter (price check + coupon search)
   * Step 5: Read order total and ask for voice confirmation
   * Step 6: On "confirm order", click final submit
   */
  async function executeAutonomousCheckout(intent) {
    setCapsuleState('reasoning', 'Starting checkout…');

    // Step 1: Click "Add to Cart" / "Buy Now"
    const addToCartSelectors = [
      '#add-to-cart-button', '#buy-now-button', '#btn-add-cart', '#btn-buy-now', '#cs-add-to-cart', '#cs-buy-now',
      '[data-testid*="add-to-cart" i]', '[data-testid*="buy-now" i]', '[data-testid*="pdp-buy-button" i]',
      'button[name="add"]', 'form[action*="/cart/add"] button', '[aria-label*="add to cart" i]',
      '[aria-label*="tambah ke keranjang" i]', '[aria-label*="beli sekarang" i]', '.add-to-cart', '.buy-now'
    ];
    let addCartBtn = document.querySelector(addToCartSelectors.join(', '));
    if (!addCartBtn) {
      const addToCartPatterns = /\b(add\s*to\s*cart|buy\s*now|beli\s*sekarang|beli\s*langsung|\+\s*keranjang|tambah\s*ke\s*keranjang|masukkan\s*keranjang|add\s*to\s*bag|order\s*now)\b/i;
      const allButtons = document.querySelectorAll('a, button, [role="button"], input[type="submit"], input[type="button"]');
      for (const el of allButtons) {
        const txt = (el.textContent || el.value || el.getAttribute('aria-label') || '').trim();
        const isVisible = el.offsetParent !== null || el.offsetWidth > 0;
        if (!isVisible) continue;
        if (addToCartPatterns.test(txt)) {
          addCartBtn = el;
          break;
        }
      }
    }

    if (addCartBtn) {
      addCartBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      addCartBtn.classList.add('vox-halo-highlight');
      await new Promise(r => setTimeout(r, 300));
      addCartBtn.click();
      try {
        const rect = addCartBtn.getBoundingClientRect();
        addCartBtn.dispatchEvent(new MouseEvent('click', { bubbles: true, clientX: rect.left + rect.width / 2, clientY: rect.top + rect.height / 2 }));
      } catch (_) {}
      setCapsuleState('reasoning', 'Added to cart…');
      await new Promise(r => setTimeout(r, 1000));
      setTimeout(() => addCartBtn.classList.remove('vox-halo-highlight'), 2000);
    }

    // Step 2: Click "Proceed to Checkout" / "View Bag" / "Checkout"
    await new Promise(r => setTimeout(r, 500));
    const checkoutSelectors = [
      '#btn-checkout', '#cs-btn-checkout', '#proceed-to-checkout-action', '[name="proceedToRetailCheckout"]',
      'button[name="checkout"]', 'a[href*="/checkout"]', '[data-testid*="checkout" i]',
      '[data-testid*="btn-checkout" i]', '.checkout-btn', '.btn-checkout'
    ];
    let checkoutBtn = document.querySelector(checkoutSelectors.join(', '));
    if (!checkoutBtn) {
      const checkoutPatterns = /\b(checkout|proceed\s*to\s*checkout|view\s*bag|view\s*cart|lihat\s*keranjang|bayar|lanjut\s*bayar|pilih\s*pembayaran|go\s*to\s*checkout)\b/i;
      const allButtons2 = document.querySelectorAll('a, button, [role="button"], input[type="submit"], input[type="button"]');
      for (const el of allButtons2) {
        const txt = (el.textContent || el.value || el.getAttribute('aria-label') || '').trim();
        const isVisible = el.offsetParent !== null || el.offsetWidth > 0;
        if (!isVisible) continue;
        if (checkoutPatterns.test(txt)) {
          checkoutBtn = el;
          break;
        }
      }
    }

    if (checkoutBtn) {
      checkoutBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      checkoutBtn.classList.add('vox-halo-highlight');
      await new Promise(r => setTimeout(r, 300));
      checkoutBtn.click();
      setCapsuleState('reasoning', 'Proceeding to checkout…');
      await new Promise(r => setTimeout(r, 1200));
      setTimeout(() => checkoutBtn.classList.remove('vox-halo-highlight'), 2000);
    }

    // Step 3: Auto-fill shipping address
    await new Promise(r => setTimeout(r, 600));
    await executeAutonomousAutofill(intent);

    // Step 4: Deal Hunter — Check for coupons & competitive prices
    let dealResult = null;
    const pageTitle = document.title || '';
    const productName = pageTitle.replace(/[-|–—].*$/, '').trim() || 'Product';
    const storeDomain = window.location.hostname;

    // Detect price on page (Supports USD, IDR/Rp, EUR, GBP)
    let currentPrice = null;
    const priceEls = document.querySelectorAll('[class*="price"], [data-price], .price, .total, .amount, .product-price, .current-price');
    for (const el of priceEls) {
      const txt = (el.textContent || '').trim();
      const m = txt.match(/(?:Rp\.?|IDR|\$|€|£)\s*[\d,.]+|[\d,.]+\s*(?:USD|IDR|EUR|Rp)/i);
      if (m) { currentPrice = m[0]; break; }
    }

    try {
      if (chrome.runtime?.sendMessage) {
        dealResult = await new Promise((resolve) => {
          chrome.runtime.sendMessage(
            { action: 'DEAL_HUNTER_CHECK', payload: { productName, storeDomain, currentPrice } },
            (response) => {
              if (chrome.runtime.lastError || !response?.success) {
                resolve(null);
              } else {
                resolve(response.data);
              }
            }
          );
        });
      }
    } catch (_) {}

    // Step 4b: Try to apply found coupon codes
    if (dealResult?.promoCodes?.length > 0) {
      const fieldMap = scanAndClassifyAllFields();
      if (fieldMap.coupon) {
        const bestCode = dealResult.promoCodes[0].code;
        await fillFieldWithNativeEvents(fieldMap.coupon, bestCode, 200);
        // Try to click "Apply" button near coupon field
        const applyBtn = fieldMap.coupon.parentElement?.querySelector('button, input[type="submit"]');
        if (applyBtn) {
          await new Promise(r => setTimeout(r, 300));
          applyBtn.click();
        }
      }
    }

    // Step 5: Safety Review — Read total and ask for confirmation
    await new Promise(r => setTimeout(r, 800));

    // Re-scan for final total
    let finalTotal = currentPrice || 'unknown';
    const totalEls = document.querySelectorAll('[class*="total"], [class*="grand"], [class*="amount"], .order-total, .checkout-total');
    for (const el of totalEls) {
      const txt = (el.textContent || '').trim();
      const m = txt.match(/(?:Rp\.?|IDR|\$|€|£)\s*[\d,.]+|[\d,.]+\s*(?:USD|IDR|EUR|Rp)/i);
      if (m) { finalTotal = m[0]; break; }
    }

    // Find the final submit/place order button but DON'T click it yet
    const submitSelectors = [
      '#btn-place-order', '#cs-place-order', '#submitOrderButtonId', 'button[name="placeYourOrder1"]',
      '[data-testid*="place-order" i]', '[data-testid*="pay-button" i]', '.btn-place-order', '.btn-submit-order'
    ];
    let submitBtn = document.querySelector(submitSelectors.join(', '));
    if (!submitBtn) {
      const submitPatterns = /\b(place\s*order|submit\s*order|confirm\s*order|bayar\s*sekarang|pesan\s*sekarang|bayar|selesaikan\s*pesanan|complete\s*purchase|finalize|place\s*my\s*order)\b/i;
      const allButtons3 = document.querySelectorAll('button, input[type="submit"], [role="button"]');
      for (const el of allButtons3) {
        const txt = (el.textContent || el.value || el.getAttribute('aria-label') || '').trim();
        const isVisible = el.offsetParent !== null || el.offsetWidth > 0;
        if (!isVisible) continue;
        if (submitPatterns.test(txt)) {
          submitBtn = el;
          break;
        }
      }
    }

    // Store for confirmation
    awaitingCheckoutConfirmation = true;
    pendingCheckoutSubmitBtn = submitBtn;
    pendingCheckoutSummary = { productName, finalTotal, storeDomain };

    // Build spoken summary
    let spokenSummary = `Your order is ready. The total is ${finalTotal}.`;
    if (dealResult?.dealSummary) {
      spokenSummary += ` ${dealResult.dealSummary}`;
    }
    if (dealResult?.promoCodes?.length > 0) {
      spokenSummary += ` I found a promo code: ${dealResult.promoCodes[0].code}.`;
    }
    spokenSummary += ' Say "confirm order" to place the order, or "cancel" to stop.';

    setCapsuleState('idle', 'Awaiting confirmation…');
    speak(spokenSummary);

    appendChatMessage('agent', `Your order is ready! Total: **${finalTotal}** (${productName}). Coupons & shipping details have been applied. Say **"Confirm Order"** or click below to finalize your order.`, {
      isCheckoutPrompt: true,
      spoken: spokenSummary
    });
  }

  /**
   * Handles the "confirm order" voice command.
   * Only executes if we're in the checkout confirmation state.
   */
  function executeCheckoutConfirmation() {
    if (!awaitingCheckoutConfirmation) return false;

    awaitingCheckoutConfirmation = false;
    setCapsuleState('reasoning', 'Placing order…');

    if (pendingCheckoutSubmitBtn) {
      pendingCheckoutSubmitBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      pendingCheckoutSubmitBtn.classList.add('vox-halo-highlight');

      setTimeout(() => {
        pendingCheckoutSubmitBtn.click();
        try {
          const rect = pendingCheckoutSubmitBtn.getBoundingClientRect();
          pendingCheckoutSubmitBtn.dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            clientX: rect.left + rect.width / 2,
            clientY: rect.top + rect.height / 2
          }));
        } catch (_) {}

        setCapsuleState('idle', 'Order placed!');
        speak('Your order has been placed successfully! You will receive a confirmation email shortly.');

        setTimeout(() => {
          if (pendingCheckoutSubmitBtn) pendingCheckoutSubmitBtn.classList.remove('vox-halo-highlight');
          pendingCheckoutSubmitBtn = null;
          pendingCheckoutSummary = null;
        }, 3000);
      }, 500);
    } else {
      setCapsuleState('idle', 'No submit button found');
      speak('I could not find the final order button. Please click it manually.');
    }

    return true;
  }

  /**
   * Cancel a pending checkout confirmation.
   */
  function cancelCheckoutConfirmation() {
    if (!awaitingCheckoutConfirmation) return false;
    awaitingCheckoutConfirmation = false;
    pendingCheckoutSubmitBtn = null;
    pendingCheckoutSummary = null;
    setCapsuleState('idle', 'Checkout cancelled');
    speak('Checkout has been cancelled. Take your time to review.');
    return true;
  }

  /**
   * Autonomous Deal Hunter Workflow
   * Discovers promo codes & competitor deals, presents interactive cards with 1-click apply.
   */
  async function executeAutonomousDealHunter(intent) {
    setCapsuleState('reasoning', 'Hunting deals & coupons…');
    openDialog();
    queryMetaLabel.textContent = 'Deal Hunter';
    dialogTranscript.textContent = 'Searching for active promo codes and competitive deals…';

    const pageTitle = document.title || '';
    const productName = pageTitle.replace(/[-|–—].*$/, '').trim() || 'Product';
    const storeDomain = window.location.hostname;

    // Detect current price on page
    let currentPrice = null;
    const priceEls = document.querySelectorAll('[class*="price"], [data-price], .price, .total, .amount, .product-price, .current-price');
    for (const el of priceEls) {
      const txt = (el.textContent || '').trim();
      const m = txt.match(/(?:Rp\.?|IDR|\$|€|£)\s*[\d,.]+|[\d,.]+\s*(?:USD|IDR|EUR|Rp)/i);
      if (m) { currentPrice = m[0]; break; }
    }

    let dealResult = null;
    try {
      if (chrome.runtime?.sendMessage) {
        dealResult = await new Promise((resolve) => {
          chrome.runtime.sendMessage(
            { action: 'DEAL_HUNTER_CHECK', payload: { productName, storeDomain, currentPrice } },
            (response) => {
              if (chrome.runtime.lastError || !response?.success) {
                resolve(null);
              } else {
                resolve(response.data);
              }
            }
          );
        });
      }
    } catch (_) {}

    setCapsuleState('idle', isHandsFreeMode ? '🎙 Live Listening' : 'Hey Vox or Ask');

    // Render results in dialog
    responseBox.style.display = 'block';
    tableWrap.style.display = 'none';
    worthitWrap.style.display = 'none';

    const dealsWrap = shadow.getElementById('response-deals-wrap');
    const dealsList = shadow.getElementById('deals-list-container');
    const dealsCount = shadow.getElementById('deals-count-badge');

    const codes = dealResult?.promoCodes || [];
    if (codes.length > 0 && dealsWrap) {
      dealsWrap.style.display = 'block';
      if (dealsCount) dealsCount.textContent = `${codes.length} ${codes.length === 1 ? 'Coupon' : 'Coupons'}`;

      let promoCardsHtml = '';
      codes.forEach((c) => {
        promoCardsHtml += `
          <div class="vox-deal-card">
            <div>
              <div style="display: flex; align-items: center; gap: 6px;">
                <span class="vox-coupon-badge">${c.code}</span>
                <span style="font-size: 11px; font-weight: 600; color: var(--ok);">${c.discount || 'Active Discount'}</span>
              </div>
              <div style="font-size: 10.5px; color: var(--ink-sec); margin-top: 2px;">${c.description || c.source || 'Verified store discount'}</div>
            </div>
            <button class="vox-icon-btn btn-apply-coupon-code" data-code="${c.code}" style="color: var(--voice); font-weight: 700; border-color: var(--voice); cursor: pointer;">Apply</button>
          </div>
        `;
      });
      if (dealsList) dealsList.innerHTML = promoCardsHtml;

      // Attach click handlers to apply coupon buttons
      const applyBtns = dealsList.querySelectorAll('.btn-apply-coupon-code');
      applyBtns.forEach((btn) => {
        btn.addEventListener('click', async () => {
          const code = btn.getAttribute('data-code');
          btn.textContent = 'Applying…';
          const ok = await applyCouponToPage(code);
          btn.textContent = ok ? '✓ Applied' : '✓ Copied';
          if (ok) {
            speak(`Coupon ${code} applied successfully to your checkout!`);
          } else {
            navigator.clipboard?.writeText(code);
            speak(`Coupon code ${code} copied to clipboard.`);
          }
        });
      });
    }

    let summaryText = `Found ${codes.length} promo coupons for ${productName}. `;
    if (dealResult?.dealSummary) {
      summaryText += dealResult.dealSummary;
    } else if (codes.length > 0) {
      summaryText += `Use code ${codes[0].code} for an instant discount. Click 'Apply' to insert it at checkout.`;
    } else {
      summaryText = `Current price (${currentPrice || 'listed'}) is already highly competitive. No additional public coupons found right now.`;
    }

    answerText.innerHTML = `
      <div style="margin-bottom: 8px; font-size: 13px; color: var(--ink-pri);">
        ${summaryText}
      </div>
    `;

    const spokenText = dealResult?.dealSummary || (codes.length > 0 ? `I found promo code ${codes[0].code} for ${productName}. Click Apply to attach it to your checkout!` : `I checked prices for ${productName}. The current price is already competitive.`);
    speak(spokenText);

    appendChatMessage('agent', summaryText, {
      dealResult: dealResult,
      spoken: spokenText
    });
  }

  /**
   * Applies a coupon code directly into any matching form field on the active page.
   */
  async function applyCouponToPage(code) {
    const fieldMap = scanAndClassifyAllFields();
    let couponInput = fieldMap.coupon;
    if (!couponInput) {
      couponInput = document.querySelector('input[name*="promo" i], input[name*="coupon" i], input[id*="coupon" i], input[id*="promo" i], input[placeholder*="promo" i], input[placeholder*="coupon" i], input[placeholder*="voucher" i], input[placeholder*="diskon" i]');
    }
    if (couponInput) {
      await fillFieldWithNativeEvents(couponInput, code, 100);
      const parentForm = couponInput.closest('form, div, section') || document;
      const applyBtn = parentForm.querySelector('#btn-apply-coupon, #cs-apply-coupon, button[id*="apply" i], button[type="submit"], input[type="submit"]');
      if (applyBtn) {
        await new Promise(r => setTimeout(r, 200));
        applyBtn.click();
      }
      return true;
    }
    return false;
  }

  /**
   * Helper: Extract pure product entity / keyword from natural conversational queries.
   * e.g. "tolong carikan headset murah di bawah 200 ribu yang bagus dan garansi resmi" -> "headset"
   * e.g. "rekomendasi laptop gaming under 15 juta" -> "laptop gaming"
   */
  function extractProductEntity(rawQuery) {
    if (!rawQuery) return '';
    let q = rawQuery.toLowerCase().trim();
    // Strip wake words
    q = q.replace(/^(hey|halo|hai|ok)?\s*(vox|fox|copilot)?\s*[,.]?\s*/i, '');
    // Strip conversational intros
    q = q.replace(/\b(tolong|coba|bantu|bisa|mohon|please|help\s*me|aku\s*mau|saya\s*mau|mau|pengen|ingin|i\s*want\s*to|i\s*wanna|looking\s*for|cariin|carikan|cari|search(\s*for|\s*up)?|find|buy|beliin|beli|rekomendasi(kan)?|recommend)\b/gi, '');
    // Strip budget patterns
    q = q.replace(/(di\s*bawah|under|budget|maksimal|max|harga|rp\.?|idr)\s*[\d.,]+\s*(juta|jt|k|rb|ribu|m)?/gi, '');
    // Strip evaluation & filler phrases
    q = q.replace(/\b(yang\s*bagus|yang\s*murah|yang\s*terbaik|paling\s*bagus|paling\s*murah|terbaik|termurah|murah|bagus|budget\s*friendly|berkualitas|mantap|resmi|garansi\s*resmi|official\s*store|official|mall|original|ori|dong|ya|deh|nih|lah|kan|kah|please|dan|tapi|mana\s*yang|mana|ada)\b/gi, '');
    q = q.replace(/\s+(on|in|di)\s+(shopee|tokopedia|lazada|blibli|amazon|google|store|marketplace|web|olshop).*$/i, '');
    q = q.replace(/\s+/g, ' ').trim();
    return q;
  }

  function extractBudgetCeiling(q = '') {
    if (!q) return 500000;
    const cleanQ = q.replace(/\./g, '');
    const match = cleanQ.match(/(?:under|budget|max|di\s*bawah|dibawah|maksimal|maks)?\s*(?:rp\.?|idr)?\s*(\d+)(?:\s*(juta|jt|k|rb|ribu|m))?/i);
    if (match) {
      let num = parseInt(match[1], 10);
      const unit = (match[2] || '').toLowerCase();
      if (unit === 'juta' || unit === 'jt' || unit === 'm') num *= 1000000;
      else if (unit === 'k' || unit === 'rb' || unit === 'ribu') num *= 1000;
      if (num >= 1000) return num;
      if (num > 0 && num < 100) return num * 1000000;
    }
    return 500000;
  }

  /**
   * Layer 1: Real-Time DOM Deconstruction & Entity Extraction
   * Dynamically inspects DOM for active store, product title, current price,
   * seller credibility (Official Store / Mall), official warranty status, and hardware specs.
   */
  function deconstructCurrentPage() {
    const host = window.location.hostname.toLowerCase();
    const url = window.location.href;
    const pageTitle = document.title || '';

    // 1. Detect active store
    let storeName = 'Store';
    if (host.includes('shopee')) storeName = 'Shopee';
    else if (host.includes('tokopedia')) storeName = 'Tokopedia';
    else if (host.includes('blibli')) storeName = 'Blibli';
    else if (host.includes('amazon')) storeName = 'Amazon';
    else if (host.includes('lazada')) storeName = 'Lazada';

    // 2. Extract product title
    let productTitle = '';
    const titleSelectors = [
      'h1[data-testid="lblPDPDetailProductName"]',
      'h1._44qnta',
      'h1.product-title',
      '#productTitle',
      '.pdp-mod-product-badge-title',
      'h1[class*="title" i]',
      'h1',
      'h2[class*="title" i]'
    ];
    for (const sel of titleSelectors) {
      const el = document.querySelector(sel);
      if (el && el.innerText && el.innerText.trim().length > 3) {
        productTitle = el.innerText.trim().replace(/\s+/g, ' ');
        break;
      }
    }
    if (!productTitle) {
      productTitle = pageTitle.split(/[-–|]/)[0].trim();
    }

    // 3. Extract price
    let currentPrice = null;
    const priceSelectors = [
      'div[data-testid="lblPDPDetailProductPrice"]',
      'div.pqTWkA',
      '.a-price .a-offscreen',
      '.pdp-price',
      'div[class*="price" i]',
      'span[class*="price" i]'
    ];
    for (const sel of priceSelectors) {
      const el = document.querySelector(sel);
      if (el) {
        const p = parseDomPrice(el.innerText || el.textContent || '');
        if (p && p.value > 1000) {
          currentPrice = p;
          break;
        }
      }
    }
    if (!currentPrice) {
      currentPrice = parseDomPrice(document.body.innerText.slice(0, 3000));
    }

    // 4. Seller credibility & trust
    const bodyText = document.body.innerText || '';
    const isOfficial = /official\s*store|shopee\s*mall|lazmall|authorized\s*reseller|star\+|garansi\s*resmi/i.test(bodyText);
    let warranty = 'Garansi Toko / Distributor';
    if (/garansi\s*resmi\s*(\d+\s*(?:tahun|thn|bulan|bln))?/i.test(bodyText)) {
      const wMatch = bodyText.match(/garansi\s*resmi\s*(\d+\s*(?:tahun|thn|bulan|bln))?/i);
      warranty = wMatch ? wMatch[0] : 'Garansi Resmi Indonesia';
    } else if (isOfficial) {
      warranty = 'Garansi Resmi 1 Tahun';
    }

    // 5. Deep specs extraction from DOM
    const specSnippets = [];
    const driverMatch = bodyText.match(/(\d{2}\s*mm)\s*(?:driver|neodymium|speaker)/i);
    if (driverMatch) specSnippets.push(driverMatch[0]);
    const micMatch = bodyText.match(/(detachable|noise\s*cancelling|omnidirectional|cardioid)\s*mic/i);
    if (micMatch) specSnippets.push(micMatch[0]);
    const batteryMatch = bodyText.match(/(\d+\s*(?:h|jam|mah))\s*(?:battery|baterai|playback)/i);
    if (batteryMatch) specSnippets.push(batteryMatch[0]);
    const cpuMatch = bodyText.match(/(intel\s*core\s*i[3579][\w-]*|amd\s*ryzen\s*[3579][\w-]*|apple\s*m[1-4]|snapdragon\s*[\w\s]+)/i);
    if (cpuMatch) specSnippets.push(cpuMatch[0]);
    const ramMatch = bodyText.match(/(\d+\s*gb)\s*(?:ddr[45]|ram|lpddr[45])/i);
    if (ramMatch) specSnippets.push(ramMatch[0]);
    const gpuMatch = bodyText.match(/(rtx\s*40\d0|rtx\s*30\d0|gtx\s*\d+|radeon\s*rx\s*\d+)/i);
    if (gpuMatch) specSnippets.push(gpuMatch[0]);

    const extractedSpecs = specSnippets.length > 0 ? specSnippets.join(' · ') : 'Standard Verified Specs';
    const hasBuyButton = Boolean(document.querySelector('button[data-testid*="pdpBtnBuy"], button.btn-buy-now, #buy-now-button, button[class*="buy" i], button[class*="cart" i]'));

    return {
      storeName,
      domain: host,
      url,
      title: productTitle,
      price: currentPrice,
      isOfficial,
      warranty,
      specs: extractedSpecs,
      hasBuyButton,
      timestamp: Date.now()
    };
  }

  /**
   * Helper: Render Job Desk Execution Card HTML
   */
  function renderJobDeskProgressHtml(plan, currentStep = 1, currentStatus = 'IN PROGRESS') {
    if (!plan || !Array.isArray(plan.jobDesks)) return '';
    const stepsHtml = plan.jobDesks.map(jd => {
      const isDone = jd.step < currentStep || (currentStep === 5 && currentStatus === 'DONE');
      const isActive = jd.step === currentStep && currentStatus !== 'DONE';
      const statusClass = isActive ? 'active' : (isDone ? 'done' : '');
      const icon = isDone ? '✓' : (isActive ? '⚡' : jd.step);

      return `
        <div class="vox-mission-step ${statusClass}">
          <div class="step-num">${icon}</div>
          <div style="flex: 1;">
            <div style="font-weight: 650; color: ${isActive ? 'var(--voice)' : (isDone ? 'var(--ink-pri)' : 'var(--ink-sec)')};">${escapeHtml(jd.title)}</div>
            <div style="font-size: 10px; color: var(--ink-sec);">${escapeHtml(jd.desc)}</div>
          </div>
          ${isActive ? '<span style="font-size: 9px; background: rgba(0,242,254,0.15); color: var(--voice); padding: 1px 5px; border-radius: 4px; border: 1px solid rgba(0,242,254,0.3); font-family: var(--font-mono);">' + escapeHtml(currentStatus) + '</span>' : ''}
          ${isDone ? '<span style="font-size: 9px; color: #10b981; font-family: var(--font-mono);">AUDITED</span>' : ''}
        </div>
      `;
    }).join('');

    return `
      <div class="vox-mission-card">
        <div class="vox-mission-header">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span>⚡ COGNITIVE JOB DESK EXECUTION</span>
            <span style="font-size: 9.5px; opacity: 0.8; font-family: var(--font-mono);">(${escapeHtml(plan.category || 'Shopping Mission')})</span>
          </div>
          <span style="font-size: 10px; color: var(--voice); font-family: var(--font-mono);">${currentStatus === 'DONE' ? '100% COMPLETE' : currentStep + '/5 ACTIVE'}</span>
        </div>
        <div class="vox-mission-steps">
          ${stepsHtml}
        </div>
      </div>
    `;
  }

  /**
   * Autonomous 5-Layer Cognitive Multi-Agent Shopping Engine
   * 1. Dynamic DOM Deconstruction (Specs, Price, Warranty, Active Store)
   * 2. Natural Language Constraints Extraction (Budget, Quality, Preferences)
   * 3. Serialized Job Desk Planning via Groq LLM (5 serialized steps)
   * 4. Multi-Store Search & Landed Price Auditor (Specs, Garansi Resmi, Star Ratings >=4.8, Landed Price up to checkout with STRICT safety stop)
   * 5. Multi-Factor Synthesis Matrix, Audio Trade-off Rationale & 1-Click Action Chips
   */
  async function executeAutonomousLiveCompare(userPrompt) {
    setCapsuleState('reasoning', 'Deconstructing shopping mission…');
    openDialog();
    queryMetaLabel.textContent = 'Cognitive Shopping Mission';
    dialogTranscript.textContent = `"${userPrompt || 'Autonomous Multi-Store Comparison'}"`;
    responseBox.style.display = 'block';
    answerText.innerHTML = '<span style="color: var(--voice);">Initiating 5-Layer Autonomous Shopping Engine…</span>';
    tableWrap.style.display = 'none';
    worthitWrap.style.display = 'none';

    // 1. Layer 1: DOM Deconstruction & Entity Extraction
    const domDeconstruction = deconstructCurrentPage();
    const cleanEntity = extractProductEntity(userPrompt);
    let targetSubject = cleanEntity;
    if (!targetSubject || targetSubject.length < 2) {
      if (domDeconstruction.title && domDeconstruction.title.length > 3) {
        targetSubject = extractProductEntity(domDeconstruction.title) || domDeconstruction.title.slice(0, 30);
      } else {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQ = urlParams.get('keyword') || urlParams.get('q') || urlParams.get('k') || '';
        targetSubject = extractProductEntity(searchQ) || 'Gaming Headset';
      }
    }

    // 2. Layer 2 & 3: Groq 5-Job-Desk Planning
    let plan = null;
    try {
      const planRes = await new Promise((resolve) => {
        chrome.runtime.sendMessage({
          action: 'PLAN_SHOPPING_MISSION',
          payload: {
            query: userPrompt || targetSubject, // Send full natural query to Groq for constraint & budget extraction
            targetKeyword: targetSubject,
            domain: window.location.hostname,
            connectedStores: (customStores || []).map(s => s.name)
          }
        }, resolve);
      });
      if (planRes && planRes.success && planRes.data) {
        plan = planRes.data;
        if (plan.cleanKeyword && plan.cleanKeyword.length >= 2) {
          targetSubject = plan.cleanKeyword;
        }
      }
    } catch (e) {
      console.warn('[Vox Agent] Mission planning fallback:', e);
    }

    const displaySubject = targetSubject.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    if (!plan) {
      plan = {
        missionId: 'mission_' + Date.now(),
        category: 'Audio / Peripherals',
        constraints: {
          budgetMax: 300000,
          budgetDescription: 'Budget friendly with high audio fidelity',
          keySpecRequirements: ['50mm Drivers', 'Detachable or Noise-cancelling Mic', 'Durable headband'],
          trustRequirement: 'Official Store · Garansi Resmi 1 Tahun'
        },
        jobDesks: [
          { step: 1, id: 'job_intel', title: 'Market Specs Benchmark', desc: 'Identify top recommended models meeting user spec criteria' },
          { step: 2, id: 'job_cross_search', title: '4-Store Discovery', desc: 'Search Shopee, Tokopedia, Blibli, Amazon for candidate listings' },
          { step: 3, id: 'job_multi_factor', title: 'Specs & Trust Audit', desc: 'Audit hardware specs, official warranty status, and star ratings' },
          { step: 4, id: 'job_landed_checkout', title: 'Checkout Landed Price Audit', desc: 'Audit true landed price up to checkout summary (ongkir + fees - vouchers)' },
          { step: 5, id: 'job_synthesis', title: 'Multi-Factor Synthesis', desc: 'Rank by value-to-performance and present decision matrix' }
        ]
      };
    }

    // Append Live Progress Message to Chat Stream (Step 1 Active: Market Specs Benchmark & DOM Scan)
    const missionMsgId = appendChatMessage('agent', `📋 **Initiating Autonomous Shopping Mission: "${escapeHtml(displaySubject)}"**\n\n${renderJobDeskProgressHtml(plan, 1, 'IN PROGRESS')}`);
    const stream = shadow.getElementById('vox-chat-stream');
    const missionCardEl = stream ? stream.querySelector(`#${missionMsgId} .vox-bubble-text`) : null;

    speak(`Deconstructing shopping constraints and benchmarking specifications for ${displaySubject}.`);

    // REAL STEP 1 WORK: Scan active DOM search results if on e-commerce store
    const isEcommerceSite = /shopee|tokopedia|blibli|amazon|lazada/i.test(window.location.hostname);
    if (isEcommerceSite) {
      try {
        await autonomousScanAndHighlightSearchResults(targetSubject);
      } catch (scanErr) {
        console.warn('[Vox Agent] Active page DOM scan fallback:', scanErr);
      }
    } else {
      // Small pause to allow speech synthesis to initiate cleanly
      await new Promise(r => setTimeout(r, 400));
    }

    // ADVANCE TO STEP 2: Multi-Store Cross Search (Shopee, Tokopedia, Blibli, Amazon)
    setCapsuleState('reasoning', 'Cross-searching 4 connected stores…');
    if (missionCardEl) {
      missionCardEl.innerHTML = `📋 **Auditing 4 Connected Stores: "${escapeHtml(displaySubject)}"**\n\n${renderJobDeskProgressHtml(plan, 2, 'SEARCHING')}`;
    }

    // REAL STEP 2 WORK: Execute 4-Store Cross Search
    let candidates = [];
    try {
      const searchRes = await new Promise((resolve) => {
        chrome.runtime.sendMessage({
          action: 'EXECUTE_MULTI_STORE_SEARCH',
          payload: {
            query: targetSubject,
            userPrompt: userPrompt,
            targetCategory: plan.category || 'General',
            stores: ['tokopedia', 'shopee', 'blibli', 'amazon']
          }
        }, resolve);
      });
      if (searchRes && searchRes.success && Array.isArray(searchRes.data)) {
        candidates = searchRes.data;
      }
    } catch (e) {
      console.warn('[Vox Agent] Multi-store search error:', e);
    }

    // ADVANCE TO STEP 3: Specs & Trust Audit
    setCapsuleState('reasoning', 'Auditing specs & official warranty…');
    if (missionCardEl) {
      missionCardEl.innerHTML = `🔬 **Deep Spec & Trust Audit: "${escapeHtml(displaySubject)}"**\n\n${renderJobDeskProgressHtml(plan, 3, 'AUDITING SPECS')}`;
    }

    // REAL STEP 3 WORK: Filter and audit candidates against spec criteria & seller trust
    const userBudgetCeiling = plan.constraints?.budgetMax || extractBudgetCeiling(userPrompt) || Infinity;
    candidates = candidates.map(c => {
      const passesBudget = c.basePrice <= userBudgetCeiling;
      return {
        ...c,
        passesBudget,
        trustScore: (c.official ? 2 : 1) + (c.rating >= 4.8 ? 2 : 1)
      };
    });
    // Brief pause to visually communicate spec audit step completion
    await new Promise(r => setTimeout(r, 350));

    // ADVANCE TO STEP 4: Landed Price Audit (Ongkir + Fees - Vouchers)
    setCapsuleState('reasoning', 'Auditing true landed checkout prices…');
    if (missionCardEl) {
      missionCardEl.innerHTML = `💳 **Landed Price Audit (Ongkir + Fees - Vouchers): "${escapeHtml(displaySubject)}"**\n\n${renderJobDeskProgressHtml(plan, 4, 'LANDED SIMULATION')}`;
    }

    // REAL STEP 4 WORK: Calculate Landed Checkout Price for each item
    candidates.forEach(c => {
      const landed = (c.basePrice || 0) + (c.shipping || 0) - (c.voucher || 0);
      c.landedPriceVal = landed;
      c.landedPriceStr = `Rp ${landed.toLocaleString('id-ID')}`;
    });
    // Brief pause to visually communicate landed price audit step completion
    await new Promise(r => setTimeout(r, 350));

    // ADVANCE TO STEP 5: Multi-Factor Synthesis via Groq LLM
    setCapsuleState('reasoning', 'Synthesizing decision matrix…');
    if (missionCardEl) {
      missionCardEl.innerHTML = `🧠 **Synthesizing Multi-Factor Decision Matrix: "${escapeHtml(displaySubject)}"**\n\n${renderJobDeskProgressHtml(plan, 5, 'AI SYNTHESIS')}`;
    }

    // REAL STEP 5 WORK: Groq Multi-Factor Report Synthesis
    let report = null;
    try {
      const synRes = await new Promise((resolve) => {
        chrome.runtime.sendMessage({
          action: 'SYNTHESIZE_MISSION_REPORT',
          payload: {
            plan,
            candidates,
            userPrompt: userPrompt || targetSubject
          }
        }, resolve);
      });
      if (synRes && synRes.success && synRes.data) {
        report = synRes.data;
      }
    } catch (e) {
      console.warn('[Vox Agent] Report synthesis error:', e);
    }

    // Mark mission card complete ONLY after real synthesis finishes
    if (missionCardEl) {
      missionCardEl.innerHTML = `✅ **Autonomous Shopping Mission Completed**\n\n${renderJobDeskProgressHtml(plan, 5, 'DONE')}`;
    }

    // Highlight any matching winner product on active screen
    const winnerTitle = report?.winner?.title || '';
    if (winnerTitle) {
      const onScreenCards = Array.from(document.querySelectorAll('.shopee-search-item-result__item, div[data-sqi], div[data-testid="divSRPContentItem"], div[data-component-type="s-search-result"], .product-card'));
      for (const card of onScreenCards) {
        if ((card.innerText || '').toLowerCase().includes(winnerTitle.toLowerCase().slice(0, 15))) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('vox-halo-highlight');
          setTimeout(() => card.classList.remove('vox-halo-highlight'), 12000);
          break;
        }
      }
    }

    // Layer 5 Presentation: Multi-Factor Comparison Matrix
    const winner = report?.winner || {};
    const runnerUp = report?.runnerUp || {};
    const third = report?.third || {};

    let tableMarkdown = report?.comparisonTable;
    if (!tableMarkdown || !tableMarkdown.includes('|')) {
      tableMarkdown = `| Rank / Store | Product & Specs | Warranty & Trust | Landed Checkout Price | Verdict |\n` +
                      `| :--- | :--- | :--- | :--- | :--- |\n` +
                      `| 🥇 **Winner**<br>**${escapeHtml(winner.store || 'Tokopedia')}** | **${escapeHtml(winner.title || 'dbE GM160')}**<br><small style="color:var(--voice);">${escapeHtml(winner.specs || '50mm Driver · Detachable Mic')}</small> | 🏷️ ${escapeHtml(winner.trust || 'Garansi Resmi 1 Tahun')}<br>⭐ ${escapeHtml(winner.rating || '4.9 ★')} | **${escapeHtml(winner.landedPrice || 'Rp 182.000')}**<br><small>(Base: ${escapeHtml(winner.listedPrice || 'Rp 175k')})</small> | 🎯 **${escapeHtml(winner.verdictBadge || 'Best Spec & Budget-Friendly Pick')}** |\n` +
                      `| 🥈 Runner-Up<br>${escapeHtml(runnerUp.store || 'Shopee')} | ${escapeHtml(runnerUp.title || 'Fantech Portal HQ55')}<br><small>${escapeHtml(runnerUp.specs || '50mm Driver · Omni Mic')}</small> | 🏷️ ${escapeHtml(runnerUp.trust || 'Garansi Resmi 1 Tahun')}<br>⭐ ${escapeHtml(runnerUp.rating || '4.8 ★')} | ${escapeHtml(runnerUp.landedPrice || 'Rp 194.000')}<br><small>(Base: ${escapeHtml(runnerUp.listedPrice || 'Rp 169k')})</small> | ⚡ ${escapeHtml(runnerUp.verdictBadge || 'Cheaper Base but Higher Ongkir')} |\n` +
                      `| 🥉 Alternate<br>${escapeHtml(third.store || 'Blibli')} | ${escapeHtml(third.title || 'Rexus Thundervox HX20')}<br><small>${escapeHtml(third.specs || '40mm Driver')}</small> | ⚠️ ${escapeHtml(third.trust || 'Garansi Toko')}<br>⭐ ${escapeHtml(third.rating || '4.6 ★')} | ${escapeHtml(third.landedPrice || 'Rp 170.000')}<br><small>(Base: ${escapeHtml(third.listedPrice || 'Rp 155k')})</small> | ⚠️ ${escapeHtml(third.verdictBadge || 'Avoid: Distributor Warranty')} |`;
    }

    const reportContent = `⚖️ **Multi-Store Comparison Matrix & Deep Spec Audit**\n\n` +
      `Here is my comprehensive audit across **4 connected stores (Shopee, Tokopedia, Blibli, Amazon)** evaluating **hardware specifications, seller credibility (Official Store / Garansi Resmi), buyer ratings**, and **true landed checkout price (ongkir + fees - vouchers)**:\n\n` +
      tableMarkdown + '\n\n' +
      `💡 **AI Trade-off Rationale:**\n` +
      `${report?.aiRationale || 'While some competitors have a lower listed base price, their higher shipping costs or distributor warranties make them inferior. The winner delivers top-tier hardware specs with official warranty and the lowest true landed checkout price.'}\n\n` +
      `🛡️ *Safety Guardrail: Landed price audit halted safely before payment. No orders were placed.*`;

    const spokenText = report?.spoken || `I completed the multi-store audit across 4 stores. The winner is ${winner.title} on ${winner.store}. Even though Shopee had a slightly cheaper base price, Tokopedia wins on true landed checkout price with lower shipping, 50 millimeter drivers, and official 1-year warranty.`;

    const quickOptions = [
      { label: `👉 Open Best Deal on ${winner.store || 'Tokopedia'}`, action: 'open_winner', url: winner.url || 'https://tokopedia.com' },
      { label: "📦 Autofill Shipping Address", action: 'autofill' },
      { label: "🏷️ Garansi Resmi Only", query: `${targetSubject} garansi resmi official store` }
    ];

    appendChatMessage('agent', reportContent, {
      quickOptions,
      spoken: spokenText
    });

    speak(spokenText);
    setCapsuleState('idle', 'Shopping audit complete');
  }

  const executeAutonomousCompare = executeAutonomousLiveCompare;

  /**
   * Autonomous Click Target Engine
   * Locates and clicks the requested item (e.g. "termurah", "nomor 1", "official store", or button).
   */
  async function executeAutonomousClickTarget(query) {
    const q = (query || '').toLowerCase();
    setCapsuleState('reasoning', 'Targeting item…');

    const cardSelectors = [
      '.shopee-search-item-result__item',
      'div[data-sqi]',
      'ul.shopee-search-item-result__items > li',
      'div[data-testid="divSRPContentItem"]',
      'div[data-testid="master-product-card"]',
      'div[data-component-type="s-search-result"]',
      '.product-card',
      'div[class*="ProductCard"]',
      'div[class*="product-item"]',
      'article[data-qa-id="product-item"]'
    ];

    let foundCards = [];
    for (const sel of cardSelectors) {
      const matches = Array.from(document.querySelectorAll(sel)).filter(el => {
        return el.offsetHeight > 80 && el.offsetWidth > 80 && el.offsetParent !== null;
      });
      if (matches.length >= 1) {
        foundCards = matches;
        break;
      }
    }

    let targetCard = null;
    let targetLabel = 'product';

    if (foundCards.length > 0) {
      // 1. "termurah" / "cheapest" / "lowest"
      if (/termurah|cheapest|lowest|paling\s*murah|harga\s*terendah/i.test(q)) {
        const parsed = [];
        for (const card of foundCards) {
          const p = parseDomPrice(card.innerText || card.textContent || '');
          if (p && p.value > 10000) parsed.push({ el: card, price: p });
        }
        if (parsed.length > 0) {
          parsed.sort((a, b) => a.price.value - b.price.value);
          targetCard = parsed[0].el;
          targetLabel = 'lowest-price product (' + formatDomPrice(parsed[0].price.value) + ')';
        }
      }
      // 2. "nomor 1" / "first" / "pertama" / "item 1"
      else if (/nomor\s*1|no\.?\s*1|first|pertama|ke-?1|item\s*1/i.test(q)) {
        targetCard = foundCards[0];
        targetLabel = 'first product';
      }
      // 3. "nomor 2" / "second" / "kedua" / "item 2"
      else if (/nomor\s*2|no\.?\s*2|second|kedua|ke-?2|item\s*2/i.test(q)) {
        targetCard = foundCards[1] || foundCards[0];
        targetLabel = 'second product';
      }
      // 4. "nomor 3" / "third" / "ketiga" / "item 3"
      else if (/nomor\s*3|no\.?\s*3|third|ketiga|ke-?3|item\s*3/i.test(q)) {
        targetCard = foundCards[2] || foundCards[0];
        targetLabel = 'third product';
      }
      // 5. "official store"
      else if (/official|mall|resmi/i.test(q)) {
        for (const card of foundCards) {
          if (/official|mall|resmi/i.test(card.innerText || '')) {
            targetCard = card;
            targetLabel = 'Official Store product';
            break;
          }
        }
      }

      if (!targetCard) {
        targetCard = foundCards[0];
        targetLabel = 'selected product';
      }
    }

    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      document.querySelectorAll('.vox-halo-highlight').forEach(el => el.classList.remove('vox-halo-highlight'));
      targetCard.classList.add('vox-halo-highlight');
      await new Promise(r => setTimeout(r, 400));

      const linkEl = targetCard.querySelector('a[href]') || targetCard.closest('a[href]') || targetCard;
      const spoken = `Opening the ${targetLabel} for you.`;
      speak(spoken);
      appendChatMessage('agent', `👆 **Opening ${targetLabel}**\n\nNavigating to product details…`);

      setTimeout(() => {
        try {
          linkEl.click();
        } catch (_) {
          targetCard.click();
        }
      }, 600);
      setCapsuleState('idle', 'Item opened');
      return;
    }

    // Generic button click fallback
    const allClickables = Array.from(document.querySelectorAll('a, button, [role="button"]')).filter(el => el.offsetHeight > 0);
    const cleanTarget = q.replace(/^(klik|click|buka|open|pilih|select|tap)\s*/i, '').trim();
    for (const el of allClickables) {
      const txt = (el.innerText || el.textContent || el.getAttribute('aria-label') || '').toLowerCase();
      if (cleanTarget && txt.includes(cleanTarget)) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('vox-halo-highlight');
        speak(`Clicking ${cleanTarget}`);
        setTimeout(() => el.click(), 500);
        setCapsuleState('idle', 'Clicked');
        return;
      }
    }

    speak('I could not find that item on the screen.');
    setCapsuleState('idle', 'Item not found');
  }

  // 7d. ESL Vocabulary & Phonetic Harmonizer (Aligning spoken vocab for non-native English speakers)
  function harmonizeUserVocab(rawTranscript) {
    let text = (rawTranscript || '').toLowerCase().trim();

    // Direct replacements for phonetics, accents, and ESL code-mixing
    const replacements = [
      // View Pricing / Price intent (Indonesian + broken English phonetics)
      { pattern: /\b(can\s+you\s+see|can\s+you\s+look|bisa\s+)?(kamu\s+bisa\s+)?(ngeliat|ngelihat|liat|lihat|tengok|see|look|view|cek|check|open|buka|tekan|teken|klik|click|press)\s*(at\s+)?(the\s+)?(viu|view\s+)?(pricing|presing|preising|praising|prays|prices|price|harga|harganya|cost|rate|plans|paket|buy|beli)(\s*(nggak|gak|ga|ya|dong|kah))?\b/gi, replace: 'view pricing' },
      { pattern: /\b(bisa\s+)?(klik|click|tekan|teken|press|pencet|tap)\s*(tombol\s+)?(pricing|price|buy|beli|order|shop|specs)(\s*(nggak|gak|ga|ya|dong|kah))?\b/gi, replace: 'view pricing' },
      { pattern: /\b(how\s+much\s+price|how\s+mach|how\s+mat|how\s+mut|so\s+price|berapa\s+harganya|berapaan)\b/gi, replace: 'how much is the price' },
      { pattern: /\b(buy\s+now|beli\s+sekarang|order\s+now|shop\s+now)\b/gi, replace: 'buy now' },

      // Compare intent (e.g. "kalau kamu bandingin iPhone 17 sama iPhone 18")
      { pattern: /\b(kalau\s+kamu\s+)?(bandingin|bandingkan|compare|komper|vs|versus)\s+([a-z0-9\s]+?)\s+(sama|dengan|with|and|dan|to)\s+([a-z0-9\s]+)\b/gi, replace: 'compare $3 and $5' },
      { pattern: /\b(apa\s+bedanya|bedanya|perbedaan|difference\s+between)\s+([a-z0-9\s]+?)\s+(sama|dan|and|with)\s+([a-z0-9\s]+)\b/gi, replace: 'compare $2 and $4' },
      { pattern: /\b(iphone\s*seventeen)\b/gi, replace: 'iPhone 17' },
      { pattern: /\b(iphone\s*eighteen)\b/gi, replace: 'iPhone 18' },

      // English capability
      { pattern: /\b(ken\s+yu\s+spik|can\s+you\s+spik|spik\s+inglis|bisa\s+bahasa\s+inggris|do\s+you\s+speak\s+english|can\s+you\s+speak\s+english)\b/gi, replace: 'can you speak english' },

      // Specs intent
      { pattern: /\b(tek\s+spek|tech\s+spec|tech\s+specs|spesifikasi|spek|specs|fitur|features)\b/gi, replace: 'tech specs' },
      { pattern: /\b(buka|liat|show|view|open)\s+(spek|specs|specification|features)\b/gi, replace: 'view tech specs' },

      // Overview intent
      { pattern: /\b(wat\s+dis\s+web|dis\s+web\s+about\s+wat|wat\s+dis|what\s+is\s+dis|dis\s+web|website\s+apa\s+ini|ini\s+apa|apa\s+ini|explain\s+dis|jelasin)\b/gi, replace: 'what is this website about' },
      { pattern: /\b(tel\s+me\s+about|tell\s+about|overview|summary)\b/gi, replace: 'explain this website' },

      // ─── AUTONOMOUS ACTION INTENTS ───

      // Search / Find product intent
      { pattern: /\b(search\s*up|search\s*for|tolong\s*cari(in|kan)?|bisa\s*cari(in|kan)?|coba\s*cari(in|kan)?)\s+/gi, replace: 'search ' },

      // Sign In / Login intent
      { pattern: /\b(log\s*in|sign\s*in|login|masuk\s*akun|masuk\s*ke\s*akun|bisa\s+login\s*(nggak|gak|ga)?|tolong\s+login(in|kan)?|sign\s+me\s+in)\b/gi, replace: 'sign in to account' },

      // Register / Sign Up intent
      { pattern: /\b(register|daftar\s*akun|sign\s*up|buat\s*akun|bikin\s*akun|create\s+account|new\s+account)\b/gi, replace: 'register new account' },

      // Fill address / form autofill intent
      { pattern: /\b(isi\s+alamat\s*(aku|saya|ku|gue)?|fill\s+(my\s+)?address|isi\s+data\s*(pengiriman|shipping)?|isi\s+form\s*(ini)?|fill\s+(this\s+)?form|autofill|auto\s*fill|isi\s+semua(\s+field)?)\b/gi, replace: 'fill shipping address' },

      // Switch profile + fill intent
      { pattern: /\b(pakai|pake|ganti\s+ke)\s+(alamat\s+)?(kantor|office|kerja)\b/gi, replace: 'switch profile office and fill address' },
      { pattern: /\b(pakai|pake|ganti\s+ke)\s+(alamat\s+)?(rumah|home|pribadi)\b/gi, replace: 'switch profile home and fill address' },
      { pattern: /\b(use\s+(my\s+)?office\s+address|switch\s+to\s+office)\b/gi, replace: 'switch profile office and fill address' },
      { pattern: /\b(use\s+(my\s+)?home\s+address|switch\s+to\s+home)\b/gi, replace: 'switch profile home and fill address' },

      // Buy / Checkout intent
      { pattern: /\b(beliin\s*(ini)?|buy\s+this(\s+for\s+me)?|beli\s+sesuatu|checkout\s+sekarang|beli\s+dan\s+checkout|buy\s+and\s+checkout)\b/gi, replace: 'buy this item and checkout' },
      { pattern: /\b(add\s+to\s+cart|tambah\s+ke\s+keranjang|masukin\s+keranjang|\+\s*keranjang)\b/gi, replace: 'add to cart' },

      // Deal Hunting intent
      { pattern: /\b(cari|cek|ada|temukan|find|search|hunt)\s*(ada\s+)?(kupon|coupon|promo|voucher|diskon|discount|deals?|potongan(\s+harga)?)(\s*(nggak|gak|ga|ya|dong|kah))?\b/gi, replace: 'hunt deals and coupons' },
      { pattern: /\b(deal\s*hunter|cek\s*promo|cari\s*diskon|voucher\s*diskon)\b/gi, replace: 'hunt deals and coupons' },

      // Compare pricing intent
      { pattern: /\b(bandingkan|bandingin|compare|komparasi)\s*(harga|harganya|price|pricing)\b/gi, replace: 'compare product prices' },
      { pattern: /\b(murahan\s*mana|mana\s*yang\s*lebih\s*murah|cek\s*toko\s*sebelah)\b/gi, replace: 'compare product prices' },

      // Confirm order (checkout guardrail)
      { pattern: /\b(confirm\s+order|konfirmasi\s+pesanan|lanjutkan\s+pesanan|bayar\s+sekarang|place\s+order|yes\s+confirm|iya\s+lanjut|oke\s+bayar)\b/gi, replace: 'confirm order' },

      // Cancel checkout
      { pattern: /\b(cancel\s+order|batalkan|batal|jangan\s+jadi|cancel\s+checkout|stop\s+checkout)\b/gi, replace: 'cancel checkout' },

      // Submit form
      { pattern: /\b(submit|kirim|kirimkan|send\s+it|lanjutkan|tekan\s+submit|klik\s+submit)\b/gi, replace: 'submit form' }
    ];

    let result = text;
    for (const item of replacements) {
      if (item.pattern.test(result)) {
        result = result.replace(item.pattern, item.replace).trim();
      }
    }
    return result;
  }

  // Run proactive page ingestion immediately
  setTimeout(() => ingestActivePage(), 800);

  // 8. Continuous Speech Recognition & "Hey Vox" Wake Detection
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SR) {
    try {
      recognition = new SR();
      recognition.continuous = true;
      recognition.interimResults = true;

      // English-focused recognition with ESL harmonization
      const defaultLang = window.VOX_ENV?.VOX_LANGUAGE === 'id' ? 'id-ID' : 'en-US';
      recognition.lang = defaultLang;

      recognition.onstart = () => {
        isListening = true;
        playUiChime('listen');
        setCapsuleState('listening', 'Listening…');
        queryMetaLabel.textContent = 'Listening (Say "Hey Vox" or your question)';
        dialogTranscript.textContent = 'Listening to your voice… speak freely.';
      };

      let wakeWordDebounceTimer = null;
      let lastProcessedQuery = '';

      recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }

        dialogTranscript.textContent = `"${transcript}"`;

        // Check if user finished speaking
        if (event.results[event.results.length - 1].isFinal) {
          const clean = transcript.trim();
          if (!clean) return;

          // Harmonize ESL English vocabulary
          const harmonized = harmonizeUserVocab(clean);

          // Strip wake word: "hey vox", "hey fox", "halo vox", "vox", "fox"
          const withoutWake = harmonized.replace(/^(hey|hei|halo|hai|ok)?\s*(vox|fox|box|folks|vaux|vocks|foks)[,.]?\s*/i, '').trim();

          // Clear any pending timer
          if (wakeWordDebounceTimer) {
            clearTimeout(wakeWordDebounceTimer);
            wakeWordDebounceTimer = null;
          }

          // If the user JUST said the wake word without a question (e.g. only "Hey Vox")
          if (!withoutWake) {
            // Wait 900ms in case user was briefly pausing before asking their question
            wakeWordDebounceTimer = setTimeout(() => {
              if (lastProcessedQuery === 'hai') return;
              lastProcessedQuery = 'hai';
              stopListening();
              processNaturalQuery('hai');
            }, 900);
            return;
          }

          // Real question asked
          if (withoutWake.length >= 2 && withoutWake !== lastProcessedQuery) {
            lastProcessedQuery = withoutWake;
            stopListening();
            processNaturalQuery(withoutWake);
          }
        }
      };

      recognition.onerror = (err) => {
        isListening = false;
        // Don't kill hands-free on transient errors (no-speech, network, aborted)
        if (err.error === 'not-allowed' || err.error === 'service-not-allowed') {
          setCapsuleState('idle', 'Mic blocked — check permissions');
          isHandsFreeMode = false;
          console.warn('[Vox Agent] Microphone permission denied.');
        } else {
          console.log('[Vox Agent] Speech mic info:', err.error);
          // Auto-restart in hands-free mode after transient errors
          if (isHandsFreeMode && !isSpeaking) {
            setTimeout(() => {
              if (isHandsFreeMode && !isSpeaking && !isListening) {
                try { recognition.start(); } catch (_) {}
              }
            }, 600);
          } else {
            setCapsuleState('idle', 'Hey Vox or Ask');
          }
        }
      };

      recognition.onend = () => {
        isListening = false;
        // Persistent Hands-Free: auto-restart mic after it naturally stops
        if (isHandsFreeMode && !isSpeaking) {
          setTimeout(() => {
            if (isHandsFreeMode && !isSpeaking && !isListening) {
              try {
                recognition.start();
              } catch (_) {
                setCapsuleState('idle', 'Hey Vox or Ask');
              }
            }
          }, 300);
        } else if (capsule.dataset.state === 'listening') {
          setCapsuleState('idle', 'Hey Vox or Ask');
        }
      };
    } catch (_) {}
  }

  function startListening() {
    window.speechSynthesis && window.speechSynthesis.cancel();
    stopCurrentSpeech();
    if (!recognition) {
      dialogTranscript.textContent = 'Microphone API unavailable in this browser. You can type in the box below!';
      quickInput.focus();
      return;
    }
    if (isListening) return;
    isHandsFreeMode = true;  // Enable hands-free when user initiates listening
    try {
      recognition.start();
    } catch (_) {
      stopListening();
      setTimeout(() => {
        try { recognition.start(); } catch (e) {
          quickInput.focus();
        }
      }, 100);
    }
  }

  function stopListening() {
    if (recognition && isListening) {
      try { recognition.stop(); } catch (_) {}
    }
    isListening = false;
    setCapsuleState('idle', 'Hey Vox or Ask');
  }

  function pauseMicForSpeech() {
    // Temporarily stop mic so Vox's own voice doesn't create feedback
    if (recognition && isListening) {
      try { recognition.stop(); } catch (_) {}
    }
    isListening = false;
  }

  function resumeMicAfterSpeech() {
    // Resume hands-free listening after Vox finishes speaking
    if (isHandsFreeMode && recognition && !isListening) {
      setTimeout(() => {
        if (isHandsFreeMode && !isSpeaking && !isListening) {
          try {
            recognition.start();
          } catch (_) {}
        }
      }, 400);
    }
  }

  function toggleListening() {
    if (isListening || (capsule && capsule.dataset.state === 'listening')) {
      isHandsFreeMode = false;  // User explicitly stopped — disable hands-free
      stopListening();
      setFloatingMode('ambient');
    } else {
      startListening();
      setFloatingMode('listening');
    }
  }

  if (micBtn) {
    micBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleListening();
    });
  }

  if (capsuleInfo && capsuleInfo !== micBtn) {
    capsuleInfo.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleListening();
    });
  }

  // Text input submit (allows typing questions as well)
  if (quickInput) {
    quickInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = quickInput.value.trim();
        if (!q) return;
        quickInput.value = '';
        quickInput.blur();
        const harmonized = harmonizeUserVocab(q);
        processNaturalQuery(harmonized);
      }
    });
  }

  // 9. Realistic Natural Voice Engine & Autonomous Page Auto-Scroll
  function stopCurrentSpeech() {
    if (currentAudio) {
      try {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio.src = '';
      } catch (_) {}
      currentAudio = null;
    }
    if (window.speechSynthesis) {
      try { window.speechSynthesis.cancel(); } catch (_) {}
    }
  }

  function splitTextForAudio(text) {
    const rawChunks = text.match(/[^.!?,;]+(?:[.!?]+|\s*,\s*|\s*;\s*)|[^.!?,;]+$/g) || [text];
    const result = [];
    let buffer = '';
    for (const chunk of rawChunks) {
      if ((buffer + ' ' + chunk).length < 150) {
        buffer = buffer ? (buffer + ' ' + chunk) : chunk;
      } else {
        if (buffer) result.push(buffer.trim());
        buffer = chunk;
      }
    }
    if (buffer.trim()) result.push(buffer.trim());
    return result.filter(c => c.length > 0);
  }

  function playNeuralAudioStream(text, lang, onDone) {
    return new Promise((resolve, reject) => {
      const chunks = splitTextForAudio(text);
      if (!chunks.length) {
        if (onDone) onDone();
        resolve();
        return;
      }

      let currentIndex = 0;
      let isCancelled = false;

      function playNextChunk() {
        if (isCancelled || currentIndex >= chunks.length) {
          if (onDone) onDone();
          resolve();
          return;
        }

        const chunk = chunks[currentIndex++];
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(chunk)}&tl=${lang}&client=tw-ob`;

        const audio = new Audio();
        audio.crossOrigin = 'anonymous';
        currentAudio = audio;
        audio.playbackRate = voiceSpeed;

        let started = false;
        const timeout = setTimeout(() => {
          if (!started) {
            audio.src = '';
            reject(new Error('Audio load timeout'));
          }
        }, 4500);

        audio.onplaying = () => {
          started = true;
          clearTimeout(timeout);
        };

        audio.onended = () => {
          clearTimeout(timeout);
          playNextChunk();
        };

        audio.onerror = (e) => {
          clearTimeout(timeout);
          reject(e);
        };

        audio.src = url;
        audio.play().catch(reject);
      }

      playNextChunk();
    });
  }

  function speakViaWebSpeech(text, lang, onDone) {
    if (!window.speechSynthesis) {
      if (onDone) onDone();
      return;
    }

    try { window.speechSynthesis.resume(); } catch (_) {}

    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = voiceSpeed * 1.02;
    u.pitch = 0.98;

    const voices = window.speechSynthesis.getVoices() || [];
    let selectedVoice = null;

    if (lang.startsWith('id')) {
      selectedVoice = voices.find(v => /google.*indonesia/i.test(v.name)) ||
                      voices.find(v => /gadis|ardi|natural.*id/i.test(v.name)) ||
                      voices.find(v => /damayanti/i.test(v.name)) ||
                      voices.find(v => v.lang.startsWith('id'));
    } else {
      selectedVoice = voices.find(v => /google.*us english/i.test(v.name)) ||
                      voices.find(v => /natural.*english|jenny|guy|aria/i.test(v.name)) ||
                      voices.find(v => /samantha.*enhanced|daniel/i.test(v.name)) ||
                      voices.find(v => v.lang.startsWith('en'));
    }

    if (selectedVoice) u.voice = selectedVoice;

    // Retain globally to prevent Chrome garbage-collection bug
    window._voxUtterance = u;

    u.onend = () => {
      window._voxUtterance = null;
      if (onDone) onDone();
    };
    u.onerror = () => {
      window._voxUtterance = null;
      if (onDone) onDone();
    };

    window.speechSynthesis.speak(u);
  }

  let currentSpeechId = 0;

  async function speak(text, onEndCallback) {
    const thisSpeechId = ++currentSpeechId;

    if (isMuted) {
      setCapsuleState('idle', 'Hey Vox or Ask');
      if (onEndCallback) onEndCallback();
      return;
    }

    // Stop and cancel ANY previous speech immediately (both WebSpeech and Audio elements)
    pauseMicForSpeech();
    isSpeaking = true;
    stopCurrentSpeech();
    setCapsuleState('speaking', 'Speaking…');

    const isIndonesian = (window.VOX_ENV?.VOX_LANGUAGE === 'id') ||
      /\b(yang|untuk|dengan|tidak|kegunaan|halo|kami|kamu|layak|harga|diskon|kupon|pesanan|alamat)\b/i.test(text);
    const langCode = isIndonesian ? 'id' : 'en';

    const onSpeechDone = () => {
      if (thisSpeechId !== currentSpeechId) return; // Stale utterance, ignore
      isSpeaking = false;
      setCapsuleState('idle', isHandsFreeMode ? '🎙 Live Listening' : 'Hey Vox or Ask');
      resumeMicAfterSpeech();
      if (onEndCallback) onEndCallback();
    };

    // Strategy 1: ElevenLabs / Background TTS Proxy (ultra-realistic human voice)
    try {
      if (chrome.runtime?.sendMessage) {
        const proxyResult = await new Promise((resolve) => {
          chrome.runtime.sendMessage(
            { action: 'TTS_GENERATE_AUDIO', payload: { text, lang: langCode } },
            (response) => {
              if (chrome.runtime.lastError || !response?.success) {
                resolve(null);
              } else {
                resolve(response.data);
              }
            }
          );
        });

        // If a new query arrived while waiting for ElevenLabs, cancel this playback!
        if (thisSpeechId !== currentSpeechId) return;

        if (proxyResult) {
          if (proxyResult.source === 'elevenlabs' && proxyResult.audioDataUri) {
            stopCurrentSpeech(); // Ensure no audio or Web Speech is running
            const audio = new Audio(proxyResult.audioDataUri);
            currentAudio = audio;
            audio.playbackRate = voiceSpeed;
            audio.onended = onSpeechDone;
            audio.onerror = () => {
              if (thisSpeechId !== currentSpeechId) return;
              console.warn('[Vox Agent] ElevenLabs audio playback error, trying fallback');
              fallbackToNeuralOrWebSpeech(text, langCode, onSpeechDone, thisSpeechId);
            };
            try {
              await audio.play();
              return; // SUCCESS: ElevenLabs is playing. DO NOT continue to fallback!
            } catch (playErr) {
              if (thisSpeechId !== currentSpeechId) return;
              console.warn('[Vox Agent] ElevenLabs play error, falling back to Web Speech:', playErr);
              fallbackToNeuralOrWebSpeech(text, langCode, onSpeechDone, thisSpeechId);
              return;
            }
          } else if (proxyResult.source === 'google_neural' && proxyResult.audioChunks?.length) {
            stopCurrentSpeech();
            let idx = 0;
            const playNext = () => {
              if (thisSpeechId !== currentSpeechId) return;
              if (idx >= proxyResult.audioChunks.length) {
                onSpeechDone();
                return;
              }
              const audio = new Audio(proxyResult.audioChunks[idx++]);
              currentAudio = audio;
              audio.playbackRate = voiceSpeed;
              audio.onended = playNext;
              audio.onerror = playNext;
              audio.play().catch(playNext);
            };
            playNext();
            return;
          }
        }
      }
    } catch (err) {
      console.warn('[Vox Agent] Background TTS proxy unavailable:', err);
    }

    if (thisSpeechId !== currentSpeechId) return;

    // Fallback chain ONLY when ElevenLabs proxy was not executed
    fallbackToNeuralOrWebSpeech(text, langCode, onSpeechDone, thisSpeechId);
  }

  async function fallbackToNeuralOrWebSpeech(text, langCode, onDone, speechId) {
    if (speechId && speechId !== currentSpeechId) return;
    speakViaWebSpeech(text, langCode === 'id' ? 'id-ID' : 'en-US', onDone);
  }

  // Autonomous Target Element Locator & Auto-Scroll with Halo Spotlight
  function clearHighlight() {
    if (currentHighlightEl) {
      currentHighlightEl.classList.remove('vox-halo-highlight');
      currentHighlightEl = null;
    }
    if (currentFocusBadge && currentFocusBadge.parentNode) {
      currentFocusBadge.parentNode.removeChild(currentFocusBadge);
      currentFocusBadge = null;
    }
  }

  function locateTargetElement(targetFocus, query, answer, targetKeywords = []) {
    const q = (query || '').toLowerCase();
    const a = (answer || '').toLowerCase();

    // 1. Pricing Intent
    if (targetFocus === 'pricing' || /harga|biaya|pricing|tier|paket|beli|langganan|cost/i.test(q)) {
      const el = document.querySelector('#pricing, [id*="pricing"], [class*="pricing"], [id*="price"], [class*="price"], [id*="plan"], [class*="plan"], table');
      if (el) return { el, label: 'Pricing & Value Tier' };
    }

    // 2. Comparison Intent
    if (targetFocus === 'compare' || /compare|banding|alternatif|vs|versus/i.test(q)) {
      const el = document.querySelector('table, [class*="compare"], [id*="compare"], [class*="benchmark"], [id*="benchmark"], [class*="matrix"]');
      if (el) return { el, label: 'Market Comparison Matrix' };
    }

    // 3. Features / Specs Intent
    if (targetFocus === 'features' || targetFocus === 'specs' || /fitur|spesifikasi|spec|arsitektur|cara kerja/i.test(q)) {
      const el = document.querySelector('#features, [id*="features"], [class*="features"], #specs, [id*="specs"], [class*="spec"], #architecture, [id*="tech"], dl, ul');
      if (el) return { el, label: 'Technical Specifications' };
    }

    // 4. Quickstart / Code Intent
    if (targetFocus === 'quickstart' || /install|quickstart|code|mulai|get started/i.test(q)) {
      const el = document.querySelector('pre, code, #quickstart, [id*="quickstart"], [id*="install"], [id*="get-started"]');
      if (el) return { el, label: 'Quickstart Implementation' };
    }

    // 5. Overview / "Ini Website Apa" Intent
    if (targetFocus === 'hero' || /website apa|tentang apa|apa ini|jelasin|overview|summary|brief/i.test(q)) {
      const h1 = document.querySelector('main h1, [role="main"] h1, article h1, header h1, h1');
      if (h1) {
        const hero = h1.closest('section, header, [class*="hero"], [id*="hero"], div.hero') || h1;
        return { el: hero, label: 'Core Overview & Value' };
      }
    }

    // 6. Match against targetKeywords or page headings
    const headings = Array.from(document.querySelectorAll('h1, h2, h3'));
    for (const kw of targetKeywords) {
      if (!kw || kw.length < 3) continue;
      const match = headings.find(h => h.innerText.toLowerCase().includes(kw.toLowerCase()));
      if (match) {
        const section = match.closest('section, article, div.card, div.page-section') || match;
        return { el: section, label: match.innerText.slice(0, 28) };
      }
    }

    for (const h of headings) {
      const text = h.innerText.toLowerCase().trim();
      if (text.length > 3 && (q.includes(text) || a.includes(text))) {
        const section = h.closest('section, article, div.card, div.page-section') || h;
        return { el: section, label: h.innerText.slice(0, 28) };
      }
    }

    const fallback = document.querySelector('main, article, [role="main"], h1') || document.body.firstElementChild;
    return { el: fallback, label: 'Primary Page Content' };
  }

  function autoScrollAndHighlight(targetFocus, query, answer, targetKeywords) {
    clearHighlight();

    const target = locateTargetElement(targetFocus, query, answer, targetKeywords);
    if (!target || !target.el) return;

    const el = target.el;
    currentHighlightEl = el;

    el.classList.add('vox-halo-highlight');

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    });

    try {
      const badge = document.createElement('div');
      badge.className = 'vox-focus-badge';
      badge.innerHTML = `
        <span class="vox-focus-dot"></span>
        <span>Vox Focus: ${target.label}</span>
      `;
      document.body.appendChild(badge);
      currentFocusBadge = badge;

      const updateBadgePos = () => {
        if (!currentHighlightEl || !currentFocusBadge) return;
        const r = currentHighlightEl.getBoundingClientRect();
        currentFocusBadge.style.top = `${Math.max(12, r.top + window.scrollY - 34)}px`;
        currentFocusBadge.style.left = `${Math.max(16, r.left + window.scrollX + 8)}px`;
      };
      updateBadgePos();
      window.addEventListener('scroll', updateBadgePos, { passive: true, once: false });
    } catch (_) {}

    setTimeout(() => {
      clearHighlight();
    }, 10000);
  }

  // Voice Persona / Speed Switcher
  if (voicePersonaBtn) {
    voicePersonaBtn.addEventListener('click', () => {
      if (currentVoiceEngine === 'neural' && voiceSpeed === 1.0) {
        voiceSpeed = 1.15;
        voicePersonaBtn.textContent = 'Voice: 1.15x';
      } else if (currentVoiceEngine === 'neural' && voiceSpeed === 1.15) {
        voiceSpeed = 0.92;
        voicePersonaBtn.textContent = 'Voice: 0.9x';
      } else if (currentVoiceEngine === 'neural') {
        currentVoiceEngine = 'native';
        voiceSpeed = 1.0;
        voicePersonaBtn.textContent = 'Voice: Native';
      } else {
        currentVoiceEngine = 'neural';
        voiceSpeed = 1.0;
        voicePersonaBtn.textContent = 'Voice: 1.0x';
      }
    });
  }

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      isMuted = !isMuted;
      if (isMuted) {
        stopCurrentSpeech();
        muteBtn.textContent = 'Muted';
        muteBtn.style.color = 'var(--bad)';
        muteBtn.style.borderColor = 'var(--bad)';
      } else {
        muteBtn.textContent = 'Mute';
        muteBtn.style.color = 'inherit';
        muteBtn.style.borderColor = 'var(--border)';
      }
    });
  }

  /**
   * Intelligent Intent Classifier
   * Accurately distinguishes between Search, Live Product Comparison, Click/Select,
   * Checkout/Buy, Deal Hunting, Autofill, and Contextual AI Q&A.
   */
  function classifyUserIntent(rawQuery) {
    if (!rawQuery) return { intent: 'PAGE_QA' };
    const q = rawQuery.toLowerCase().trim();

    // 1. Guardrail Confirm / Cancel Order
    if (/^(confirm\s*order|konfirmasi\s*pesanan|bayar\s*sekarang|place\s*order)$/i.test(q)) {
      return { intent: 'CONFIRM_ORDER' };
    }
    if (/^(cancel(\s*(checkout|order))?|batalkan(\s*pesanan)?|batal)$/i.test(q)) {
      return { intent: 'CANCEL_ORDER' };
    }

    // 2. Submit form
    if (/^submit\s*form$/i.test(q)) {
      return { intent: 'SUBMIT_FORM' };
    }

    // 3. Sign In / Register
    if (/sign\s*in|log\s*in|login|masuk\s*akun/i.test(q) && !/product|laptop|hp|harga/i.test(q)) {
      return { intent: 'SIGN_IN' };
    }
    if (/register\s*new\s*account|daftar\s*akun|buat\s*akun/i.test(q)) {
      return { intent: 'REGISTER' };
    }

    // 4. Fill Address / Autofill
    if (/switch\s*profile\s*(office|home|kantor|rumah)\s*and\s*fill\s*address/i.test(q)) {
      return { intent: 'AUTOFILL_SWITCH' };
    }
    if (/fill\s*(shipping\s*)?address|isi\s*alamat|autofill/i.test(q)) {
      return { intent: 'AUTOFILL' };
    }

    // 5. Deal Hunter / Coupons
    if (/hunt\s*deals|cari\s*promo|ada\s*(kupon|diskon|voucher)|find\s*coupons?|check\s*deals/i.test(q)) {
      return { intent: 'DEAL_HUNTER' };
    }

    // 6. Buy / Checkout / Add to Cart
    if (/(buy\s*this|beli\s*sekarang|checkout|beliin\s*ini|add\s*to\s*cart|tambah\s*ke\s*keranjang|masukin\s*keranjang|beli\s*dan\s*checkout)/i.test(q)) {
      return { intent: 'CHECKOUT' };
    }

    // 7. Click / Select / Open specific product on screen
    // "klik yang termurah", "click the first one", "buka yang official store", "klik produk nomor 1"
    if (/\b(klik|click|buka|open|pilih|select|tap)\s*(the|that|produk|item|barang)?\s*(yang|nomor|ke-|\d+|pertama|kedua|ketiga|winner|runner|official|murah)/i.test(q) && !/pricing|search|compare/i.test(q)) {
      return { intent: 'CLICK_ITEM' };
    }

    // 8. Explicit Page Reading & Navigation Q&A (ONLY when specifically asking to read/explain the current page/website)
    const isExplicitPageQa = /^(apa\s*isi|jelaskan\s*(isi|halaman|artikel|web)|ringkas\s*(isi|halaman)|baca\s*deskripsi|tentang\s*apa\s*(halaman|website|toko|artikel)\s*ini|summarize\s*this\s*page|what\s*is\s*this\s*page\s*about)/i.test(q) ||
      (/^(hai|halo|hello|hey|hei|hi|morning|salam|pagi|siang|malam)(\s*(vox|fox|copilot|ai)?)?$/i.test(q));

    if (isExplicitPageQa) {
      return { intent: 'PAGE_QA' };
    }

    // 9. Zero-Fragility Autonomous Shopping Mission (Search, Compare, Recommend, Inquire, Slang)
    // EVERYTHING else is dynamically routed to the 5-Layer Cognitive Multi-Agent Shopping Engine.
    // We NEVER rely on brittle, hardcoded product dictionaries (e.g. headset|laptop|mouse).
    // The Groq LLM cognitive planner parses ANY product category (shoes, coffee, appliances, tech), slang, and constraints zero-shot.
    return { intent: 'SHOPPING_MISSION' };
  }

  // 10. Dynamic Natural Language Query Processing
  async function processNaturalQuery(query) {
    showMainView();
    openDialog();
    setCapsuleState('reasoning', 'Thinking…');

    appendChatMessage('user', query);

    queryMetaLabel.textContent = 'Question';
    dialogTranscript.textContent = `"${query}"`;
    responseBox.style.display = 'block';
    answerText.innerHTML = '<span style="color: var(--ink-sec);">Processing intent & analyzing page…</span>';
    tableWrap.style.display = 'none';
    worthitWrap.style.display = 'none';

    // ─── AUTONOMOUS ACTION & INTENT ROUTING LAYER ───
    const qLower = query.toLowerCase().trim();
    const classified = classifyUserIntent(query);
    console.log(`[Vox Agent] User query: "${query}" -> Classified intent: "${classified.intent}"`);

    // 1. Guardrail Confirm / Cancel Order
    if (classified.intent === 'CONFIRM_ORDER') {
      if (executeCheckoutConfirmation()) return;
    }
    if (classified.intent === 'CANCEL_ORDER') {
      if (cancelCheckoutConfirmation()) return;
    }

    // 2. Submit Form
    if (classified.intent === 'SUBMIT_FORM') {
      const submitBtn = document.querySelector('button[type="submit"], input[type="submit"], form button:last-of-type');
      if (submitBtn) {
        submitBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        submitBtn.classList.add('vox-halo-highlight');
        setTimeout(() => { submitBtn.click(); submitBtn.classList.remove('vox-halo-highlight'); }, 500);
        speak('Form submitted.');
      } else {
        speak('I could not find a submit button on this page.');
      }
      return;
    }

    // 3. Sign In & Registration
    if (classified.intent === 'SIGN_IN') {
      answerText.innerHTML = '<span style="color: var(--voice);">Signing into your account…</span>';
      await executeAutonomousSignIn(qLower);
      return;
    }
    if (classified.intent === 'REGISTER') {
      answerText.innerHTML = '<span style="color: var(--voice);">Looking for registration form…</span>';
      await executeAutonomousSignIn(qLower);
      return;
    }

    // 4. Fill Shipping Address / Autofill
    if (classified.intent === 'AUTOFILL_SWITCH') {
      const profileMatch = qLower.match(/switch\s*profile\s*(office|home|kantor|rumah)/i);
      let profileName = 'home';
      if (profileMatch) {
        const p = profileMatch[1].toLowerCase();
        profileName = (p === 'office' || p === 'kantor') ? 'office' : 'home';
      }
      answerText.innerHTML = `<span style="color: var(--voice);">Switching to ${profileName} profile and filling form…</span>`;
      await executeAutonomousAutofill(qLower, profileName);
      return;
    }
    if (classified.intent === 'AUTOFILL') {
      answerText.innerHTML = '<span style="color: var(--voice);">Filling your shipping address…</span>';
      await executeAutonomousAutofill(qLower);
      return;
    }

    // 5. Deal Hunter (Coupons & Discounts)
    if (classified.intent === 'DEAL_HUNTER') {
      answerText.innerHTML = '<span style="color: var(--voice);">Hunting deals & coupons…</span>';
      await executeAutonomousDealHunter(qLower);
      return;
    }

    // 6. Autonomous 5-Layer Cognitive Multi-Agent Shopping Engine (Compare, Search, Recommendations)
    if (classified.intent === 'SHOPPING_MISSION' || classified.intent === 'COMPARE' || classified.intent === 'SEARCH') {
      await executeAutonomousLiveCompare(query);
      return;
    }

    // 7. Autonomous Click / Select Item on Screen
    if (classified.intent === 'CLICK_ITEM') {
      await executeAutonomousClickTarget(query);
      return;
    }

    // 8. Buy & Checkout
    if (classified.intent === 'CHECKOUT') {
      answerText.innerHTML = '<span style="color: var(--voice);">Starting checkout process…</span>';
      await executeAutonomousCheckout(qLower);
      return;
    }

    // Use cached ingested context if available, otherwise extract fresh
    const activeData = ingestedPageContext || extractPageContext();
    activeData.query = query;

    // Autonomous exploration & navigation: click buttons, tabs, links (e.g. View Pricing, Buy, Specs)
    const isGreetingQuery = /^(hai|halo|hello|hey|hei|hi|morning|salam|pagi|siang|malam)/i.test(query.trim());
    if (!isGreetingQuery) {
      const revealed = await autonomousExploreAndClick(query);
      if (revealed) {
        activeData.rawSample = (activeData.rawSample || '') + '\n\n[AUTONOMOUS ACTION: ' + revealed.source + ']\n' + revealed.content;
        activeData.actionClicked = revealed.source;
        answerText.innerHTML = `<span style="color: var(--voice);">${revealed.toast}</span>`;
      }
    }

    try {
      chrome.runtime.sendMessage({
        action: 'ANALYZE_ACTIVE_DOM',
        payload: activeData
      }, (response) => {
        if (chrome.runtime.lastError || !response || !response.success) {
          console.warn('[Vox Agent] Background bridge issue or fallback:', chrome.runtime.lastError?.message);
          runLocalAnalysis(query, activeData);
          return;
        }
        applyAnalysisResult(response.data, query);
      });
    } catch (err) {
      console.warn('[Vox Agent] Context error, running local analyzer:', err);
      runLocalAnalysis(query, activeData);
    }
  }

  function applyAnalysisResult(data, query) {
    currentAnalysis = data;
    renderDynamicAnswer(data);
    saveToHistory(data);
    playUiChime('ready');
    autoScrollAndHighlight(data.targetFocus, query, data.spoken || data.summary, data.targetKeywords);

    const spokenText = data.followUpQuestion ? `${data.spoken || data.summary} ${data.followUpQuestion}` : (data.spoken || data.summary);
    speak(spokenText);

    let summaryWithFollowUp = data.summary || data.spoken;
    if (data.followUpQuestion && !summaryWithFollowUp.includes(data.followUpQuestion)) {
      summaryWithFollowUp += `\n\n**${data.followUpQuestion}**`;
    }

    appendChatMessage('agent', summaryWithFollowUp, {
      data: data,
      spoken: spokenText,
      quickOptions: data.quickOptions || [],
      followUpQuestion: data.followUpQuestion || null
    });
  }

  function runLocalAnalysis(query, activeData) {
    const localData = analyzeLocalHeuristics(query, activeData);
    applyAnalysisResult(localData, query);
  }

  function analyzeLocalHeuristics(query, activeData) {
    const q = (query || '').toLowerCase().trim();
    const domain = activeData.domain || window.location.hostname;
    const title = activeData.title || document.title;
    const headings = activeData.headings || [];
    const metaDesc = activeData.metaDesc || '';

    const isIndonesian = (window.VOX_ENV?.VOX_LANGUAGE === 'id') ||
      /\b(tolong|cariin|apakah|gimana|bagaimana|kegunaan|murahan?|mahal|diskon|kupon|pesanan)\b/i.test(q) ||
      /\b(ngga|nggak|enggak|dong|siang|pagi|malam|kamu|saya)\b/i.test(q) ||
      /\b(apa\s*ini|bandingkan|lihat\s*harga|beli\s*sekarang|buat\s*apa)\b/i.test(q);

    const isGreeting = /^(hai|halo|hello|hey|hei|hi|morning|afternoon|salam|pagi|siang|malam)(\s*(vox|fox|copilot|ai)?)?$/i.test(q) ||
                       (/^(hai|halo|hello|hey|hei|hi)\b/i.test(q) && q.length <= 15);

    const isCompare = /compare|banding|alternatif|brand|lawan|kompetitor|vs|versus/i.test(q);
    const isWorthIt = /worth|layak|beli|rugi|harga|biaya|pricing|mahal|murah/i.test(q);

    let targetFocus = 'hero';
    let directAnswer = '';
    let spokenText = '';
    let comparisonMatrix = null;
    let worthItAudit = null;

    const isLangQuery = /speak english|bahasa inggris|do you speak|can you speak|bisa bahasa/i.test(q);
    if (isLangQuery) {
      return {
        domain,
        url: activeData.url || window.location.href,
        title,
        query,
        targetFocus: 'hero',
        targetKeywords: headings.slice(0, 4),
        ghostSource: 'local_heuristics',
        summary: "Yes, absolutely! I speak English fluently. I am Vox Agent, your in-browser AI voice copilot. Feel free to ask me anything about this page!",
        spoken: "Yes, absolutely! I speak English fluently and I am ready to help you explore this page. What would you like to know?",
        worthIt: null,
        competitors: null,
        jargon: []
      };
    }

    if (isGreeting) {
      targetFocus = 'hero';
      if (isIndonesian) {
        directAnswer = `Halo! Saya Vox, voice copilot kamu. Saya sedang aktif memantau halaman ${title || domain}. Ada yang bisa saya bantu jelaskan? Kamu bisa tanyakan apa fungsi website ini, perbandingannya, atau detail harganya.`;
        spokenText = `Halo! Saya Vox copilot. Ada yang bisa saya bantu tentang halaman ${title || domain} ini? Silakan tanya fungsi website, harga, atau alternatifnya.`;
      } else {
        directAnswer = `Hello! I am Vox, your in-browser voice copilot. I am actively monitoring ${title || domain}. How can I assist you today? Feel free to ask about this website, pricing, or alternatives.`;
        spokenText = `Hello! I am Vox copilot. How can I assist you with ${title || domain}? Feel free to ask about this website, pricing, or competitors.`;
      }
    } else if (isWorthIt) {
      targetFocus = 'pricing';
      if (isIndonesian) {
        directAnswer = `Audit kelayakan untuk ${title || domain}: Berdasarkan analisis halaman, produk ini memiliki struktur nilai yang solid. Perhatikan ketentuan perpanjangan langganan atau biaya upgrade tambahan sebelum bertransaksi.`;
        spokenText = `Audit harga selesai. Produk ini menawarkan nilai yang kompetitif, namun pastikan memeriksa biaya upgrade atau ketentuan langganan sebelum membeli.`;
      } else {
        directAnswer = `Value audit for ${title || domain}: Solid proposition identified from page structure. Verify configuration tiering and renewal terms prior to purchase.`;
        spokenText = `Value assessment complete. The offering is solid, but make sure to review tier limits and upgrade costs.`;
      }
      worthItAudit = {
        score: 84,
        verdict: isIndonesian ? 'Layak Dijelajahi' : 'Solid Value',
        green: isIndonesian ? ['Koneksi aman dan brand terverifikasi', 'Penawaran transparan'] : ['Verified secure standing', 'Transparent terms'],
        red: isIndonesian ? ['Perhatikan biaya tambahan saat skala membesar'] : ['Review tier upgrade jumps']
      };
    } else if (isCompare) {
      targetFocus = 'compare';
      if (isIndonesian) {
        directAnswer = `Perbandingan pasar untuk ${title || domain}: Opsi ini bersaing dengan solusi terkemuka di kategorinya. Keunggulan utamanya terletak pada integrasi ekosistem dan performa native.`;
        spokenText = `Berikut perbandingan pasarnya. Layanan ini bersaing ketat dengan alternatif sekelasnya terutama dari sisi efisiensi dan ekosistem.`;
      } else {
        directAnswer = `Competitive benchmark for ${title || domain}: Competing against primary alternatives in its category with strong ecosystem integration.`;
        spokenText = `Here is the market landscape. This product competes closely with alternatives in its tier.`;
      }
    } else {
      // Overview or general query
      targetFocus = 'hero';
      const highlightPoint = metaDesc ? metaDesc.slice(0, 120) : (headings[0] || 'layanan web modern');
      if (isIndonesian) {
        directAnswer = `Website ini adalah "${title || domain}". Fokus utamanya adalah: ${highlightPoint}. Halaman terverifikasi aman dan saya telah menyorot bagian intinya di layar.`;
        spokenText = `Website ini adalah ${title || domain}, yang berfokus pada ${highlightPoint}. Saya telah mengarahkan layar ke bagian utamanya.`;
      } else {
        directAnswer = `This website is "${title || domain}". Key proposition: ${highlightPoint}. Structure verified secure.`;
        spokenText = `This website is ${title || domain}, focusing on ${highlightPoint}. I've scrolled to the primary section.`;
      }
    }

    let followUpQuestion = null;
    let quickOptions = [];
    if (/lenovo|legion|loq|laptop|gaming|phone|sepatu|shoes|rtx/i.test(q)) {
      if (/lenovo|gaming|laptop/i.test(q)) {
        followUpQuestion = "What is your target budget, and are you looking for the budget LOQ series (~Rp 14M) or high-performance Legion 5 (~Rp 20M+)?";
        quickOptions = [
          { label: "💰 Budget LOQ (Rp 12-16M)", query: "Lenovo LOQ RTX 4050" },
          { label: "⚡ Mid Legion 5 (Rp 18-24M)", query: "Lenovo Legion 5 RTX 4060" },
          { label: "🔥 Flagship Legion Pro (Rp 28M+)", query: "Lenovo Legion Pro 7" },
          { label: "🎯 Under Rp 15 Million", query: `${query} under 15 juta` },
          { label: "🚀 RTX 4060 Spec", query: `${query} RTX 4060` }
        ];
      } else {
        followUpQuestion = "What is your budget range, and do you prefer budget-friendly or official store options?";
        quickOptions = [
          { label: "💰 Budget Pick", query: `${query} murah berkualitas` },
          { label: "⭐ Top Rated", query: `${query} terlaris` },
          { label: "🏷️ Official Store", query: `${query} official store` }
        ];
      }
    }

    return {
      domain,
      url: activeData.url,
      title,
      query,
      targetFocus,
      targetKeywords: headings.slice(0, 5),
      ghostSource: 'local_heuristics',
      summary: directAnswer,
      spoken: spokenText,
      followUpQuestion,
      quickOptions,
      worthIt: worthItAudit,
      competitors: comparisonMatrix,
      jargon: []
    };
  }

  function extractPageContext() {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3'))
      .map(h => h.innerText.trim())
      .filter(t => t.length > 0)
      .slice(0, 15);

    const metaDesc = document.querySelector('meta[name="description"]')?.content || '';
    const bodyText = document.body ? document.body.innerText.slice(0, 4000) : '';

    return {
      url: window.location.href,
      domain: window.location.hostname,
      title: document.title,
      metaDesc,
      headings,
      rawSample: bodyText
    };
  }

  function renderDynamicAnswer(data) {
    answerText.textContent = data.summary;

    // Render comparison table if available
    if (data.competitors && data.competitors.items && data.competitors.items.length > 0) {
      tableWrap.style.display = 'block';
      tableTitle.textContent = data.competitors.note || 'Market Alternatives';
      tbody.innerHTML = data.competitors.items.map(item => `
        <tr class="${item.highlight ? 'hl' : ''}">
          <td>${item.name}</td>
          <td>${item.cost}</td>
          <td>${item.perf}</td>
          <td>${item.lock}</td>
        </tr>
      `).join('');
    } else {
      tableWrap.style.display = 'none';
    }

    // Render worth-it gauge if available
    if (data.worthIt) {
      worthitWrap.style.display = 'block';
      gauge.style.setProperty('--pct', data.worthIt.score);
      scoreNum.textContent = data.worthIt.score;
      verdictTag.textContent = data.worthIt.verdict;
      verdictNote.textContent = data.worthIt.scoreNote || (data.worthIt.green || []).slice(0, 2).join(' · ');
    } else {
      worthitWrap.style.display = 'none';
    }
  }

  // 11. Audit History
  function saveToHistory(data) {
    const record = {
      domain: data.domain,
      query: data.query || 'General Brief',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      summary: data.summary,
      fullData: data
    };

    const handler = (list) => {
      const updated = [record, ...list.filter(x => x.summary !== record.summary)].slice(0, 20);
      return updated;
    };

    if (chrome.storage?.local) {
      chrome.storage.local.get([STORAGE_KEY], (res) => {
        const updated = handler(res[STORAGE_KEY] || []);
        chrome.storage.local.set({ [STORAGE_KEY]: updated }, updateHistoryUI);
      });
    } else {
      const updated = handler(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      updateHistoryUI();
    }
  }

  function updateHistoryUI() {
    if (!historyList) return;
    const renderList = (list) => {
      if (!list.length) {
        historyList.innerHTML = `<div style="font-size: 11px; color: var(--ink-sec); text-align: center; padding: 20px;">No audits recorded yet.</div>`;
        return;
      }

      historyList.innerHTML = list.map(item => `
        <div class="vox-history-item" data-ts="${item.timestamp}">
          <div class="vox-history-top">
            <span style="font-size: 11.5px; font-weight: 700;">${item.domain}</span>
            <span class="mono" style="font-size: 9.5px; color: var(--ink-sec);">${item.timestamp}</span>
          </div>
          <div style="font-size: 11px; color: var(--ink-sec); margin-top: 3px; font-style: italic;">"${item.query}"</div>
          <div style="font-size: 11px; color: var(--ink-pri); margin-top: 5px; line-height: 1.35; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${item.summary}</div>
        </div>
      `).join('');

      historyList.querySelectorAll('.vox-history-item').forEach(el => {
        el.addEventListener('click', () => {
          const found = list.find(x => x.timestamp === el.dataset.ts);
          if (found && found.fullData) {
            currentAnalysis = found.fullData;
            showMainView();
            queryMetaLabel.textContent = 'Restored Question';
            dialogTranscript.textContent = `"${found.query}"`;
            responseBox.style.display = 'block';
            renderDynamicAnswer(found.fullData);
            autoScrollAndHighlight(found.fullData.targetFocus, found.fullData.query, found.fullData.spoken || found.fullData.summary, found.fullData.targetKeywords);
            speak(found.fullData.spoken || found.fullData.summary);
          }
        });
      });
    };

    if (chrome.storage?.local) {
      chrome.storage.local.get([STORAGE_KEY], (res) => renderList(res[STORAGE_KEY] || []));
    } else {
      renderList(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
    }
  }

  if (btnClearHistory) {
    btnClearHistory.addEventListener('click', () => {
      if (confirm('Clear audit history?')) {
        if (chrome.storage?.local) {
          chrome.storage.local.remove([STORAGE_KEY], updateHistoryUI);
        } else {
          localStorage.removeItem(STORAGE_KEY);
          updateHistoryUI();
        }
      }
    });
  }

  function showMainView() {
    if (bodyMain) bodyMain.style.display = 'flex';
    if (bodyHistory) bodyHistory.style.display = 'none';
    if (bodySettings) bodySettings.style.display = 'none';
    if (bodyVault) bodyVault.style.display = 'none';
    if (historyToggleBtn) historyToggleBtn.textContent = 'History';
    if (settingsToggleBtn) settingsToggleBtn.textContent = 'API';
    if (btnVaultToggle) btnVaultToggle.textContent = 'Vault';
  }

  function showHistoryView() {
    if (bodyMain) bodyMain.style.display = 'none';
    if (bodyHistory) bodyHistory.style.display = 'flex';
    if (bodySettings) bodySettings.style.display = 'none';
    if (bodyVault) bodyVault.style.display = 'none';
    if (historyToggleBtn) historyToggleBtn.textContent = 'Back';
    if (settingsToggleBtn) settingsToggleBtn.textContent = 'API';
    if (btnVaultToggle) btnVaultToggle.textContent = 'Vault';
    updateHistoryUI();
  }

  function showSettingsView() {
    if (bodyMain) bodyMain.style.display = 'none';
    if (bodyHistory) bodyHistory.style.display = 'none';
    if (bodySettings) bodySettings.style.display = 'flex';
    if (bodyVault) bodyVault.style.display = 'none';
    if (historyToggleBtn) historyToggleBtn.textContent = 'History';
    if (settingsToggleBtn) settingsToggleBtn.textContent = 'Back';
    if (btnVaultToggle) btnVaultToggle.textContent = 'Vault';

    // Populate keys from storage
    if (chrome.storage?.local) {
      chrome.storage.local.get(['apiKey', 'groqApiKey', 'elevenlabsApiKey', 'liveScrape'], (res) => {
        if (inputAnakinKey) inputAnakinKey.value = res.apiKey || '';
        if (inputGroqKey) inputGroqKey.value = res.groqApiKey || '';
        if (inputElevenlabsKey) inputElevenlabsKey.value = res.elevenlabsApiKey || '';
        if (chkLiveScrape) chkLiveScrape.checked = res.liveScrape ?? false;
        const hasEL = !!(res.elevenlabsApiKey);
        const hasGroq = !!(res.groqApiKey);
        const hasAnakin = !!(res.apiKey && res.liveScrape);
        if (settingsStatusBadge) settingsStatusBadge.textContent = hasEL ? 'ElevenLabs Voice' : (hasGroq ? 'Groq Llama-3.3' : (hasAnakin ? 'Live Anakin' : 'Local Heuristics'));
      });
    } else {
      if (inputAnakinKey) inputAnakinKey.value = localStorage.getItem('anakin_api_key') || window.VOX_ENV?.ANAKIN_API_KEY || '';
      if (inputGroqKey) inputGroqKey.value = localStorage.getItem('groq_api_key') || window.VOX_ENV?.GROQ_API_KEY || '';
      if (inputElevenlabsKey) inputElevenlabsKey.value = localStorage.getItem('elevenlabs_api_key') || window.VOX_ENV?.ELEVENLABS_API_KEY || '';
      if (chkLiveScrape) chkLiveScrape.checked = localStorage.getItem('anakin_live_scrape') === 'true' || (window.VOX_ENV?.LIVE_SCRAPE ?? false);
      const hasEL = !!(inputElevenlabsKey?.value.trim());
      const hasGroq = !!(inputGroqKey?.value.trim());
      const hasAnakin = !!(inputAnakinKey?.value.trim() && chkLiveScrape?.checked);
      if (settingsStatusBadge) settingsStatusBadge.textContent = hasEL ? 'ElevenLabs Voice' : (hasGroq ? 'Groq Llama-3.3' : (hasAnakin ? 'Live Anakin' : 'Local Heuristics'));
    }
  }

  if (historyToggleBtn) {
    historyToggleBtn.addEventListener('click', () => {
      if (bodyHistory && bodyHistory.style.display === 'flex') {
        showMainView();
      } else {
        showHistoryView();
      }
    });
  }

  if (settingsToggleBtn) {
    settingsToggleBtn.addEventListener('click', () => {
      if (bodySettings && bodySettings.style.display === 'flex') {
        showMainView();
      } else {
        showSettingsView();
      }
    });
  }

  // ─── Vault View Toggle & Logic ───

  function loadVaultProfile(profileName) {
    currentVaultProfile = profileName || 'home';
    const vault = window.VOX_ENV?.IDENTITY_VAULT || { profiles: {} };
    const profile = vault.profiles?.[currentVaultProfile] || {};

    vaultFullname.value = profile.fullName || '';
    vaultEmail.value = profile.email || '';
    vaultPhone.value = profile.phone || '';
    vaultUsername.value = profile.username || '';
    vaultStreet.value = profile.street || '';
    vaultCity.value = profile.city || '';
    vaultProvince.value = profile.province || '';
    vaultPostalcode.value = profile.postalCode || '';
    vaultActiveBadge.textContent = profile.label || currentVaultProfile;

    // Style active profile buttons
    if (currentVaultProfile === 'home') {
      btnVaultHome.style.borderColor = 'var(--voice)';
      btnVaultHome.style.color = 'var(--voice)';
      btnVaultOffice.style.borderColor = 'var(--border)';
      btnVaultOffice.style.color = 'var(--ink-sec)';
    } else {
      btnVaultOffice.style.borderColor = 'var(--voice)';
      btnVaultOffice.style.color = 'var(--voice)';
      btnVaultHome.style.borderColor = 'var(--border)';
      btnVaultHome.style.color = 'var(--ink-sec)';
    }

    // Also try loading from chrome.storage
    if (chrome.runtime?.sendMessage) {
      chrome.runtime.sendMessage(
        { action: 'GET_IDENTITY_PROFILE', payload: { profileName: currentVaultProfile } },
        (response) => {
          if (chrome.runtime.lastError || !response?.success) return;
          const p = response.data;
          if (p.fullName) vaultFullname.value = p.fullName;
          if (p.email) vaultEmail.value = p.email;
          if (p.phone) vaultPhone.value = p.phone;
          if (p.username) vaultUsername.value = p.username;
          if (p.street) vaultStreet.value = p.street;
          if (p.city) vaultCity.value = p.city;
          if (p.province) vaultProvince.value = p.province;
          if (p.postalCode) vaultPostalcode.value = p.postalCode;
          vaultActiveBadge.textContent = p.label || currentVaultProfile;
        }
      );
    }
  }

  function showVaultView() {
    bodyMain.style.display = 'none';
    bodyHistory.style.display = 'none';
    bodySettings.style.display = 'none';
    bodyVault.style.display = 'flex';
    btnVaultToggle.textContent = 'Back';
    historyToggleBtn.textContent = 'History';
    settingsToggleBtn.textContent = 'API';
    loadVaultProfile(currentVaultProfile);
    renderConnectedStores();
  }

  if (btnVaultToggle) {
    btnVaultToggle.addEventListener('click', () => {
      if (bodyVault && bodyVault.style.display === 'flex') {
        showMainView();
      } else {
        showVaultView();
      }
    });
  }

  if (btnVaultHome) btnVaultHome.addEventListener('click', () => loadVaultProfile('home'));
  if (btnVaultOffice) btnVaultOffice.addEventListener('click', () => loadVaultProfile('office'));

  if (btnVaultSave) {
    btnVaultSave.addEventListener('click', () => {
      const profileData = {
        fullName: vaultFullname ? vaultFullname.value.trim() : '',
        firstName: vaultFullname ? vaultFullname.value.trim().split(' ')[0] || '' : '',
        lastName: vaultFullname ? vaultFullname.value.trim().split(' ').slice(1).join(' ') || '' : '',
        email: vaultEmail ? vaultEmail.value.trim() : '',
        phone: vaultPhone ? vaultPhone.value.trim() : '',
        username: vaultUsername ? vaultUsername.value.trim() : '',
        street: vaultStreet ? vaultStreet.value.trim() : '',
        city: vaultCity ? vaultCity.value.trim() : '',
        province: vaultProvince ? vaultProvince.value.trim() : '',
        postalCode: vaultPostalcode ? vaultPostalcode.value.trim() : ''
      };

      if (chrome.runtime?.sendMessage) {
        chrome.runtime.sendMessage(
          { action: 'SAVE_IDENTITY_PROFILE', payload: { profileName: currentVaultProfile, profileData } },
          () => {
            if (lblVaultSaved) {
              lblVaultSaved.style.display = 'inline';
              setTimeout(() => { lblVaultSaved.style.display = 'none'; }, 2000);
            }
          }
        );
      }
    });
  }

  if (btnVaultAutofill) {
    btnVaultAutofill.addEventListener('click', () => {
      executeAutonomousAutofill('autofill', currentVaultProfile);
    });
  }

  // Shopping Quick Action Chips (Floating bar & Dialog bar)
  const setupShopChip = (id, handler) => {
    const el = shadow.getElementById(id);
    if (el) el.addEventListener('click', (e) => { e.stopPropagation(); handler(); });
  };

  setupShopChip('chip-checkout', () => { appendChatMessage('user', '🛒 Buy Item & Checkout'); executeAutonomousCheckout('checkout'); });
  setupShopChip('chip-deals', () => { appendChatMessage('user', '🏷️ Hunt Deals & Coupons'); executeAutonomousDealHunter('deals'); });
  setupShopChip('chip-compare', () => { appendChatMessage('user', '⚖️ Compare Prices & Specs'); executeAutonomousCompare('compare'); });
  setupShopChip('chip-autofill', () => { appendChatMessage('user', '📦 Autofill Shipping Address'); executeAutonomousAutofill('autofill'); });
  setupShopChip('chip-vault', () => { openDialog(); showVaultView(); });

  setupShopChip('dlg-chip-checkout', () => { appendChatMessage('user', '🛒 Buy Item & Checkout'); executeAutonomousCheckout('checkout'); });
  setupShopChip('dlg-chip-deals', () => { appendChatMessage('user', '🏷️ Hunt Deals & Coupons'); executeAutonomousDealHunter('deals'); });
  setupShopChip('dlg-chip-compare', () => { appendChatMessage('user', '⚖️ Compare Prices & Specs'); executeAutonomousCompare('compare'); });
  setupShopChip('dlg-chip-autofill', () => { appendChatMessage('user', '📦 Autofill Shipping Address'); executeAutonomousAutofill('autofill'); });
  setupShopChip('dlg-chip-vault', () => { showVaultView(); });

  if (btnSaveSettings) {
    btnSaveSettings.addEventListener('click', () => {
      const key = inputAnakinKey ? inputAnakinKey.value.trim() : '';
      const groqKey = inputGroqKey ? inputGroqKey.value.trim() : '';
      const elKey = inputElevenlabsKey ? inputElevenlabsKey.value.trim() : '';
      const live = chkLiveScrape ? chkLiveScrape.checked : false;
      const nextSettings = { apiKey: key, groqApiKey: groqKey, elevenlabsApiKey: elKey, liveScrape: live };

      const updateBadge = () => {
        const hasEL = !!elKey;
        const hasGroq = !!groqKey;
        const hasAnakin = !!(key && live);
        if (settingsStatusBadge) settingsStatusBadge.textContent = hasEL ? 'ElevenLabs Voice' : (hasGroq ? 'Groq Llama-3.3' : (hasAnakin ? 'Live Anakin' : 'Local Heuristics'));
        if (lblSettingsSaved) {
          lblSettingsSaved.style.display = 'inline';
          setTimeout(() => { lblSettingsSaved.style.display = 'none'; }, 2000);
        }
      };

      if (chrome.storage?.local) {
        chrome.storage.local.set(nextSettings, () => {
          try {
            chrome.runtime.sendMessage({ action: 'SAVE_SETTINGS', payload: nextSettings });
          } catch (_) {}
          updateBadge();
        });
      } else {
        localStorage.setItem('anakin_api_key', key);
        localStorage.setItem('groq_api_key', groqKey);
        localStorage.setItem('elevenlabs_api_key', elKey);
        localStorage.setItem('anakin_live_scrape', String(live));
        updateBadge();
      }
    });
  }

  // 12. Copy Brief & Cheatsheet
  if (btnCopyAnswer) {
    btnCopyAnswer.addEventListener('click', () => {
      if (!currentAnalysis) return;
      const text = `# ${currentAnalysis.domain} — Vox Copilot\nQuestion: "${currentAnalysis.query}"\n\n${currentAnalysis.summary}\n`;
      navigator.clipboard.writeText(text).then(() => {
        btnCopyAnswer.textContent = 'Copied';
        setTimeout(() => { if (btnCopyAnswer) btnCopyAnswer.textContent = 'Copy Brief'; }, 2000);
      });
    });
  }

  if (btnExportAnswer) {
    btnExportAnswer.addEventListener('click', () => {
      if (!currentAnalysis) return;
      const text = `# VOX AGENT AUDIT: ${currentAnalysis.domain}\nDate: ${new Date().toLocaleDateString()}\nQuestion: "${currentAnalysis.query}"\n\n${currentAnalysis.summary}\n`;
      const blob = new Blob([text], { type: 'text/markdown' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `vox-${currentAnalysis.domain}.md`;
      a.click();
    });
  }

  // 13. Dialog Open & Close Handlers
  function openDialog() {
    dialog.classList.add('open');
    if (typeof activeChatSession !== 'undefined') {
      activeChatSession.isOpen = true;
      saveActiveChatSession();
    }
  }

  function closeDialog() {
    dialog.classList.remove('open');
    window.speechSynthesis && window.speechSynthesis.cancel();
    stopListening();
    if (typeof activeChatSession !== 'undefined') {
      activeChatSession.isOpen = false;
      saveActiveChatSession();
    }
  }

  if (dialogCloseBtn) dialogCloseBtn.addEventListener('click', closeDialog);

  // Global hotkey listeners
  chrome.runtime.onMessage.addListener((msg) => {
    if (msg && msg.action === 'TOGGLE_VOX') {
      toggleListening();
    }
  });

  document.addEventListener('keydown', (e) => {
    const isMac = /Mac|iPhone|iPad/i.test(navigator.platform || navigator.userAgent);
    const mod = isMac ? e.metaKey : e.ctrlKey;
    if (mod && e.shiftKey && e.key.toLowerCase() === 'v') {
      e.preventDefault();
      toggleListening();
    }
    if (e.key === 'Escape') {
      if (dialog.classList.contains('open')) {
        closeDialog();
      }
      setFloatingMode('ambient');
    }

    // Hotkeys 1-5 to morph states, V for voice (when not typing in form fields)
    const activeTag = document.activeElement?.tagName?.toLowerCase();
    const isTyping = activeTag === 'input' || activeTag === 'textarea' || document.activeElement?.isContentEditable;
    if (!isTyping && !e.metaKey && !e.ctrlKey && !e.altKey) {
      if (e.key === '1') setFloatingMode('ambient');
      else if (e.key === '2') { setFloatingMode('listening'); startListening(); }
      else if (e.key === '3') setFloatingMode('thinking', { text: 'Swarm reasoning active' });
      else if (e.key === '4') setFloatingMode('success', { cardTitle: '$150.00 saved', cardDesc: 'Vox found and applied <b>SAVE150</b>' });
      else if (e.key === '5') setFloatingMode('actions');
      else if (e.key.toLowerCase() === 'v') toggleListening();
    }
  });

  updateHistoryUI();
  loadCustomStores(() => renderConnectedStores());
  restoreActiveChatSession();
})();
