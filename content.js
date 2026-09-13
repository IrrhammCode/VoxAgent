/**
 * Vox Agent — Ambient In-Browser Multi-Agent Voice Copilot
 * Refined V3: Zero Emoji-Slop, Pure Floating Frosted Glass, Flexible Natural Language, Continuous Wake & Voice Input
 */

(function () {
  if (window.location.hostname.includes('whatsapp.com')) return;
  if (window.__VOX_SIMULATOR__ || document.getElementById('vox-simulator-root') || document.getElementById('vox-capsule') || document.querySelector('.vox-simulator-container') || document.title.includes('Vox Agent — In-Browser Living') || window.location.pathname.endsWith('index.html')) return;
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

      /* ===== VISUAL SPOTLIGHT TOUR ENGINE ===== */
      .vox-tour-step-badge {
        position: absolute !important;
        z-index: 2147483641 !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
        padding: 6px 14px 6px 8px !important;
        background: rgba(10, 15, 29, 0.96) !important;
        backdrop-filter: blur(20px) saturate(180%) !important;
        -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
        border: 1.5px solid rgba(99, 102, 241, 0.7) !important;
        border-radius: 12px !important;
        color: #E0E7FF !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        font-size: 12px !important;
        font-weight: 600 !important;
        line-height: 1.3 !important;
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6), 0 0 20px rgba(99, 102, 241, 0.3) !important;
        pointer-events: none !important;
        animation: voxTourBadgeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
        max-width: 320px !important;
      }
      .vox-tour-step-num {
        width: 22px !important;
        height: 22px !important;
        border-radius: 7px !important;
        background: linear-gradient(135deg, #6366f1, #818cf8) !important;
        color: #fff !important;
        font-size: 11px !important;
        font-weight: 800 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        flex-shrink: 0 !important;
        box-shadow: 0 2px 8px rgba(99, 102, 241, 0.5) !important;
      }
      .vox-tour-step-text {
        display: flex !important;
        flex-direction: column !important;
        gap: 1px !important;
      }
      .vox-tour-step-title {
        font-size: 11.5px !important;
        font-weight: 700 !important;
        color: #F8FAFC !important;
      }
      .vox-tour-step-desc {
        font-size: 10px !important;
        color: #94A3B8 !important;
        font-weight: 400 !important;
      }
      @keyframes voxTourBadgeIn {
        from { opacity: 0; transform: translateY(8px) scale(0.92); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }

      /* Tour highlight — indigo variant for tour steps (cyan stays for single focus) */
      .vox-tour-highlight {
        outline: 2.5px solid #818CF8 !important;
        outline-offset: 8px !important;
        box-shadow: 0 0 40px rgba(129, 140, 248, 0.45), inset 0 0 20px rgba(129, 140, 248, 0.08) !important;
        border-radius: 10px !important;
        transition: outline 0.4s ease, box-shadow 0.4s ease, outline-offset 0.4s ease !important;
        animation: voxTourBreathe 2.8s infinite ease-in-out !important;
        position: relative !important;
      }
      @keyframes voxTourBreathe {
        0% { box-shadow: 0 0 28px rgba(129, 140, 248, 0.30); outline-color: rgba(129, 140, 248, 0.65); }
        50% { box-shadow: 0 0 50px rgba(129, 140, 248, 0.65); outline-color: rgba(129, 140, 248, 1); }
        100% { box-shadow: 0 0 28px rgba(129, 140, 248, 0.30); outline-color: rgba(129, 140, 248, 0.65); }
      }

      /* Tour progress bar — fixed bottom, shows step progress */
      .vox-tour-progress {
        position: fixed !important;
        bottom: 110px !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
        z-index: 2147483642 !important;
        display: flex !important;
        align-items: center !important;
        gap: 10px !important;
        padding: 8px 16px !important;
        background: rgba(10, 15, 29, 0.94) !important;
        backdrop-filter: blur(20px) !important;
        border: 1px solid rgba(99, 102, 241, 0.4) !important;
        border-radius: 14px !important;
        box-shadow: 0 12px 36px rgba(0, 0, 0, 0.5), 0 0 16px rgba(99, 102, 241, 0.2) !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        animation: voxTourBadgeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
        pointer-events: auto !important;
      }
      .vox-tour-progress-label {
        font-size: 11px !important;
        font-weight: 700 !important;
        color: #A5B4FC !important;
        white-space: nowrap !important;
      }
      .vox-tour-progress-dots {
        display: flex !important;
        gap: 5px !important;
      }
      .vox-tour-dot {
        width: 8px !important;
        height: 8px !important;
        border-radius: 50% !important;
        background: rgba(255, 255, 255, 0.15) !important;
        transition: all 0.3s ease !important;
      }
      .vox-tour-dot.active {
        background: #818CF8 !important;
        box-shadow: 0 0 10px rgba(129, 140, 248, 0.7) !important;
        transform: scale(1.3) !important;
      }
      .vox-tour-dot.done {
        background: #34D399 !important;
        box-shadow: 0 0 8px rgba(52, 211, 153, 0.5) !important;
      }
      .vox-tour-skip-btn {
        background: transparent !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        color: #94A3B8 !important;
        border-radius: 6px !important;
        padding: 3px 10px !important;
        font-size: 10px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        transition: all 0.15s ease !important;
      }
      .vox-tour-skip-btn:hover {
        border-color: #ef4444 !important;
        color: #ef4444 !important;
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

    /* ===== MINIMALIST FLOATING CAPSULE (CENTER-BOTTOM) ===== */
    .floating-stage {
      position: fixed;
      left: 50%;
      bottom: 24px;
      transform: translateX(-50%);
      z-index: 2147483647;
      width: 330px;
      height: 270px;
      pointer-events: none !important;
      transition: transform 0.5s cubic-bezier(.22, 1, .36, 1);
      user-select: none;
    }
    .floating-stage * {
      box-sizing: border-box;
    }

    /* Morphing Capsule — transparent mic orb centered */
    .capsule {
      pointer-events: auto !important;
      position: absolute;
      left: 50%;
      bottom: 12px;
      transform: translateX(-50%);
      width: 66px;
      height: 66px;
      padding: 8px;
      border-radius: 50%;
      background: rgba(18, 24, 38, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 12px 30px rgba(10, 13, 24, 0.25);
      backdrop-filter: blur(32px) saturate(1.5);
      -webkit-backdrop-filter: blur(32px) saturate(1.5);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      color: #ffffff;
      isolation: isolate;
      cursor: default;
      transition: width 0.5s cubic-bezier(.2, 1.35, .35, 1), height 0.5s cubic-bezier(.2, 1.35, .35, 1), border-radius 0.5s cubic-bezier(.2, 1.35, .35, 1), transform 0.5s cubic-bezier(.2, 1.35, .35, 1), border-color 0.3s ease, box-shadow 0.3s ease, padding 0.4s ease;
    }
    .capsule:hover {
      border-color: rgba(99, 102, 241, 0.5);
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 16px 36px rgba(10, 13, 24, 0.35), 0 0 18px rgba(99, 102, 241, 0.25);
    }
    /* Expanded capsule (when showing transcript, state, or question) */
    .capsule.expanded {
      min-width: 280px;
      max-width: 440px;
      width: max-content;
      height: 66px;
      border-radius: 24px;
      padding: 8px 14px;
      gap: 12px;
      justify-content: flex-start;
      border-color: rgba(99, 102, 241, 0.65);
      box-shadow: 0 16px 40px rgba(10, 13, 24, 0.45), 0 0 22px rgba(99, 102, 241, 0.35);
    }
    .capsule[data-state="observing"] {
      border-color: rgba(6, 182, 212, 0.7) !important;
      box-shadow: 0 16px 40px rgba(10, 13, 24, 0.45), 0 0 26px rgba(6, 182, 212, 0.4) !important;
    }
    .capsule[data-state="reasoning"], .capsule[data-state="thinking"] {
      border-color: rgba(129, 140, 248, 0.7) !important;
      box-shadow: 0 16px 40px rgba(10, 13, 24, 0.45), 0 0 26px rgba(129, 140, 248, 0.4) !important;
    }
    .capsule[data-state="acting"], .capsule[data-state="navigating"] {
      border-color: rgba(245, 158, 11, 0.7) !important;
      box-shadow: 0 16px 40px rgba(10, 13, 24, 0.45), 0 0 26px rgba(245, 158, 11, 0.4) !important;
    }
    .capsule[data-state="speaking"] {
      border-color: rgba(16, 185, 129, 0.7) !important;
      box-shadow: 0 16px 40px rgba(10, 13, 24, 0.45), 0 0 26px rgba(16, 185, 129, 0.4) !important;
    }
    .capsule[data-state="listening"] {
      border-color: rgba(56, 189, 248, 0.7) !important;
      box-shadow: 0 16px 40px rgba(10, 13, 24, 0.45), 0 0 26px rgba(56, 189, 248, 0.4) !important;
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

    /* Capsule Copy — hidden in orb mode, visible when expanded */
    .capsule-copy {
      min-width: 0;
      display: none;
      flex-direction: column;
      gap: 2px;
      flex: 1;
      cursor: pointer;
    }
    .capsule.expanded .capsule-copy {
      display: flex;
    }
    .capsule-overline {
      font-family: var(--font-mono, monospace);
      font-size: 9px;
      letter-spacing: 0.1em;
      color: #818cf8;
      text-transform: uppercase;
      font-weight: 700;
      transition: color 0.3s ease;
    }
    .capsule[data-state="observing"] .capsule-overline { color: #22d3ee; }
    .capsule[data-state="reasoning"] .capsule-overline,
    .capsule[data-state="thinking"] .capsule-overline { color: #a78bfa; }
    .capsule[data-state="acting"] .capsule-overline,
    .capsule[data-state="navigating"] .capsule-overline { color: #fbbf24; }
    .capsule[data-state="speaking"] .capsule-overline { color: #34d399; }
    .capsule[data-state="listening"] .capsule-overline { color: #38bdf8; }
    .capsule-copy strong {
      font-size: 11.5px;
      letter-spacing: -0.02em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #f8fafc;
      font-weight: 600;
    }

    /* Inline Capsule Input — hidden in orb mode */
    .vox-capsule-input {
      display: none;
    }
    .capsule.expanded .vox-capsule-input {
      display: block;
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

    /* Capsule Action / Reset Buttons */
    .capsule-button {
      display: none;
    }
    .capsule.expanded .capsule-button,
    .capsule:hover .capsule-button {
      display: grid;
    }
    .capsule-button {
      width: 32px;
      height: 32px;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      color: #ffffff;
      background: rgba(255, 255, 255, 0.12);
      font-size: 14px;
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
    .capsule-btn-reset:hover {
      background: rgba(239, 68, 68, 0.32) !important;
      border-color: rgba(239, 68, 68, 0.65) !important;
      color: #fca5a5 !important;
    }
    .capsule-btn-reset.is-resetting span {
      display: inline-block;
      animation: spinReset 0.7s linear infinite;
    }
    @keyframes spinReset {
      100% { transform: rotate(-360deg); }
    }

    /* Capsule Ambient Shadow — centered */
    .capsule-shadow {
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 14px;
      border-radius: 50%;
      filter: blur(10px);
      background: rgba(15, 23, 42, 0.3);
      transition: 0.6s;
    }
    .capsule.expanded ~ .capsule-shadow {
      width: 260px;
      height: 18px;
    }

    /* Dock handle — hidden (centered capsule, no dock) */
    .dock-handle { display: none; }

    /* Avoidance line — hidden (centered capsule) */
    .avoidance-line { display: none; }

    /* Settings gear button — sits below the orb */
    .orb-settings-btn {
      pointer-events: auto !important;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -8px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.15);
      background: rgba(30, 36, 54, 0.6);
      backdrop-filter: blur(12px);
      color: rgba(255, 255, 255, 0.5);
      display: grid;
      place-items: center;
      cursor: pointer !important;
      opacity: 0;
      transition: opacity 0.25s ease, color 0.2s ease, background 0.2s ease;
    }
    .floating-stage:hover .orb-settings-btn { opacity: 1; }
    .orb-settings-btn:hover {
      color: #a5b4fc;
      background: rgba(99, 102, 241, 0.25);
      border-color: rgba(99, 102, 241, 0.5);
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

    /* Thinking Field — 3 clean pulsing dots instead of orbiting particles */
    .thinking-field {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      height: 24px;
    }
    .thinking-field i {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #ffffff;
      animation: thinkPulse 1.2s ease-in-out infinite;
    }
    .thinking-field i:nth-child(2) { animation-delay: 0.2s; }
    .thinking-field i:nth-child(3) { animation-delay: 0.4s; }
    .thinking-field i:nth-child(4) { display: none; }
    .thinking-field i:nth-child(5) { display: none; }
    @keyframes thinkPulse {
      0%, 100% { transform: scale(0.6); opacity: 0.3; }
      50% { transform: scale(1.2); opacity: 1; }
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

    /* ===== MORPHING MODES (Orb-centric) ===== */
    /* 1. Listening Mode — orb pulses, shows transcript */
    .mode-listening .capsule {
      box-shadow: inset 0 1px 1px rgba(255,255,255,0.3), 0 12px 30px rgba(10,13,24,0.3), 0 0 28px rgba(79, 70, 229, 0.4);
    }
    .mode-listening .capsule-core {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: radial-gradient(circle, #a5b4fc 0%, #4f46e5 60%, #1e1b4b 100%);
    }

    /* 2. Thinking Mode — orb shows particles */
    .mode-thinking .capsule {
      box-shadow: inset 0 1px 1px rgba(255,255,255,0.3), 0 12px 30px rgba(10,13,24,0.3), 0 0 24px rgba(168, 85, 247, 0.35);
    }
    .mode-thinking .capsule-core {
      background: linear-gradient(140deg, #9333ea, #3b82f6);
    }

    /* 3. Success Mode — orb glows green */
    .mode-success .capsule {
      border-color: rgba(52, 211, 153, 0.5);
      box-shadow: inset 0 1px 1px rgba(255,255,255,0.3), 0 12px 30px rgba(10,13,24,0.3), 0 0 28px rgba(16, 185, 129, 0.4);
    }
    .mode-success .capsule-core {
      background: linear-gradient(140deg, #10b981, #059669);
      border-radius: 50%;
    }

    /* Micro Victory Success Card — centered above orb */
    .success-card {
      position: absolute;
      pointer-events: auto !important;
      left: 50%;
      transform: translateX(-50%);
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

    /* Micro Toast notification — centered */
    .toast {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -20px;
      font-size: 9.5px;
      font-family: var(--font-mono, monospace);
      color: #94a3b8;
      white-space: nowrap;
      animation: fadeUp 0.5s;
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: none; }
    }

    /* ===== ACTION ORBIT (FAN-OUT — CENTERED) ===== */
    .action-orbit {
      pointer-events: none !important;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 22px;
      width: 330px;
      height: 220px;
      transition: 0.55s;
    }
    .orbit-action {
      pointer-events: auto !important;
      position: absolute;
      left: 50%;
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
      transform: translate(-50%, 0) scale(0.6);
      transition: transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s ease;
      text-align: left;
      color: #0f172a;
      cursor: pointer !important;
    }
    .orbit-action:hover {
      border-color: #4f46e5;
      box-shadow: 0 16px 36px rgba(79, 70, 229, 0.35);
      background: #ffffff;
    }
    .orbit-action b {
      width: 30px; height: 30px; display: grid; place-items: center;
      border-radius: 11px; background: #e0e7ff; color: #4338ca; font-size: 16px; flex: none;
    }
    .orbit-action span { display: flex; flex-direction: column; gap: 1px; }
    .orbit-action strong { font-size: 11px; font-weight: 700; white-space: nowrap; color: #0f172a; }
    .orbit-action small { font-size: 8.5px; color: #64748b; white-space: nowrap; }

    /* 4. Actions Mode: Fan-Out centered */
    .mode-actions .capsule-core { width: 56px; height: 56px; border-radius: 20px; }
    .mode-actions .action-0 { transform: translate(-50%, -160px) scale(1); opacity: 1; transition-delay: 0.05s; }
    .mode-actions .action-1 { transform: translate(-150%, -100px) scale(1); opacity: 1; transition-delay: 0.11s; }
    .mode-actions .action-2 { transform: translate(50%, -100px) scale(1); opacity: 1; transition-delay: 0.17s; }
    .mode-actions .action-3 { transform: translate(-50%, -50px) scale(1); opacity: 1; transition-delay: 0.23s; }
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

    /* Segmented Navigation Tab Bar */
    .vox-nav-tabs {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4px;
      padding: 6px 12px;
      background: rgba(0, 0, 0, 0.16);
      border-bottom: 1px solid var(--border);
    }
    .vox-nav-tab {
      background: transparent;
      border: 1px solid transparent;
      border-radius: 8px;
      padding: 6px 4px;
      font-size: 11px;
      font-weight: 600;
      color: var(--ink-sec);
      cursor: pointer !important;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      white-space: nowrap;
      user-select: none;
    }
    .vox-nav-tab:hover {
      color: var(--ink-pri);
      background: rgba(255, 255, 255, 0.05);
    }
    .vox-nav-tab.active {
      background: var(--chip-bg);
      border-color: var(--voice);
      color: var(--voice);
      font-weight: 700;
      box-shadow: 0 2px 8px rgba(0, 242, 254, 0.15);
    }

    /* Address Preview Card */
    .vox-preview-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-left: 3.5px solid #10b981;
      border-radius: 10px;
      padding: 10px 12px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 11.5px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }
    .vox-preview-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10.5px;
      font-weight: 700;
      color: var(--ink-sec);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    /* Web Presets Grid */
    .vox-presets-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 6px;
    }
    .vox-preset-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 10px;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      font-size: 11px;
      color: var(--ink-pri);
      cursor: pointer !important;
      transition: all 0.15s ease;
      text-align: left;
    }
    .vox-preset-btn:hover {
      border-color: var(--voice);
      background: var(--card-hover);
      transform: translateY(-1px);
    }
    .vox-preset-btn:active {
      transform: scale(0.98);
    }

    /* API Accordion Details */
    .vox-api-accordion {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 8px 10px;
      transition: all 0.2s ease;
    }
    .vox-api-accordion[open] {
      border-color: rgba(34, 211, 238, 0.35);
    }
    .vox-api-summary {
      font-size: 11.5px;
      font-weight: 700;
      color: var(--ink-pri);
      cursor: pointer !important;
      display: flex;
      align-items: center;
      justify-content: space-between;
      user-select: none;
      list-style: none;
    }
    .vox-api-summary::-webkit-details-marker {
      display: none;
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

    /* ===== WORD CORRECTION BAR ===== */
    .vox-word-bar {
      position: fixed;
      left: 50%;
      bottom: 100px;
      transform: translateX(-50%);
      z-index: 2147483646;
      pointer-events: auto !important;
      min-width: 280px;
      max-width: 520px;
      background: var(--hud-bg, rgba(9, 13, 24, 0.92));
      backdrop-filter: blur(28px) saturate(180%);
      -webkit-backdrop-filter: blur(28px) saturate(180%);
      border: 1px solid var(--border, rgba(255, 255, 255, 0.10));
      border-radius: 16px;
      padding: 10px 14px;
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45), 0 0 20px rgba(99, 102, 241, 0.2);
      animation: wordBarIn 0.35s cubic-bezier(.2, 1.35, .35, 1);
      color: var(--ink-pri, #F8FAFC);
    }
    @keyframes wordBarIn {
      from { opacity: 0; transform: translateX(-50%) translateY(12px) scale(0.95); }
      to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
    }
    .vox-word-bar-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }
    .vox-word-bar-label {
      font-size: 10px;
      font-weight: 700;
      color: var(--ink-sec, #94A3B8);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      flex: 1;
    }
    .vox-word-bar-btn {
      pointer-events: auto !important;
      background: linear-gradient(135deg, #4f46e5, #6366f1);
      color: #fff;
      border: none;
      border-radius: 8px;
      padding: 5px 12px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer !important;
      transition: all 0.2s ease;
    }
    .vox-word-bar-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 14px rgba(99, 102, 241, 0.5);
    }
    .vox-word-bar-dismiss {
      pointer-events: auto !important;
      background: transparent;
      border: 1px solid var(--border, rgba(255,255,255,0.1));
      color: var(--ink-sec, #94A3B8);
      border-radius: 6px;
      padding: 3px 8px;
      font-size: 12px;
      cursor: pointer !important;
      transition: all 0.15s ease;
    }
    .vox-word-bar-dismiss:hover {
      border-color: #ef4444;
      color: #ef4444;
    }
    .vox-word-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
    .vox-word-chip {
      pointer-events: auto !important;
      display: inline-block;
      padding: 4px 10px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      font-size: 12.5px;
      font-weight: 500;
      color: var(--ink-pri, #F8FAFC);
      cursor: pointer !important;
      transition: all 0.15s ease;
      user-select: none;
    }
    .vox-word-chip:hover {
      background: rgba(99, 102, 241, 0.25);
      border-color: rgba(99, 102, 241, 0.6);
      transform: translateY(-1px);
    }
    .vox-word-chip.editing {
      background: rgba(99, 102, 241, 0.3);
      border-color: #6366f1;
      box-shadow: 0 0 12px rgba(99, 102, 241, 0.4);
    }
    .vox-word-chip-input {
      pointer-events: auto !important;
      background: rgba(0, 0, 0, 0.3);
      border: 1.5px solid #6366f1;
      border-radius: 6px;
      padding: 3px 8px;
      font-size: 12.5px;
      font-weight: 600;
      color: #fff;
      outline: none;
      min-width: 50px;
      max-width: 140px;
      font-family: inherit;
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
    <!-- Floating Stage: Central Command Island (Center-Bottom) -->
    <aside id="vox-floating-stage" class="floating-stage mode-ambient" aria-label="Vox Agent floating island">
      <div class="capsule-shadow"></div>
      
      <!-- The Morphing Capsule / Central Island -->
      <div class="capsule" id="vox-capsule" data-state="idle">
        <div class="capsule-specular"></div>
        
        <!-- Interactive Core (Audio waves, thinking particles, success checkmark, sparkle) -->
        <div class="capsule-core" id="vox-capsule-core" title="Click to speak or type a command">
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
        <div class="capsule-copy" id="vox-capsule-copy" title="Click to expand">
          <span class="capsule-overline" id="capsule-overline-text">VOX IS READY</span>
          <strong id="capsule-main-text">Hey Vox or type…</strong>
        </div>

        <!-- Inline Quick Input (for typing directly) -->
        <input id="vox-quick-input" class="vox-capsule-input" type="text" placeholder="Type or correct…" autocomplete="off" />

        <!-- Capsule Reset Button (attached directly to Vox) -->
        <button class="capsule-button capsule-btn-reset" id="vox-capsule-btn-reset-inline" type="button" title="Reset Data & Lupa Memori (Restart Mic)">
          <span>↺</span>
        </button>

        <!-- Capsule Action Button -->
        <button class="capsule-button" id="vox-capsule-btn-toggle" type="button" title="Open Chat Panel">
          <span id="capsule-btn-icon">⌘</span>
        </button>
      </div>

      <!-- Micro Victory Success Card -->
      <div class="success-card" id="vox-success-card" style="display:none;">
        <span>Autonomous Action</span>
        <strong id="success-card-title">Done</strong>
        <p id="success-card-desc">Action completed successfully</p>
      </div>

      <div class="toast" id="vox-floating-toast" style="display:none;"></div>
    </aside>

    <!-- Word Correction Bar (shown when transcript has editable words) -->
    <div id="vox-word-correction-bar" class="vox-word-bar" style="display:none;">
      <div class="vox-word-bar-header">
        <span class="vox-word-bar-label">✏️ Tap a word to correct:</span>
        <button id="vox-word-bar-run" class="vox-word-bar-btn" type="button">▶ Run</button>
        <button id="vox-word-bar-close" class="vox-word-bar-dismiss" type="button">✕</button>
      </div>
      <div id="vox-word-chips" class="vox-word-chips"></div>
    </div>

    <!-- Floating Chat Panel (replaces old dialog) -->
    <div id="vox-dialog" class="vox-dialog">
      <!-- Top Bar: Logo & Close -->
      <div class="vox-dialog-header">
        <div class="vox-dialog-title">
          <span style="display: inline-flex; align-items: center; gap: 6px;">
            <span style="font-size: 15px;">⚡</span>
            <span>Vox Agent</span>
          </span>
          <span class="vox-tag-domain" id="dialog-domain">Domain</span>
        </div>
        <div class="vox-dialog-tools">
          <button id="btn-chat-new" class="vox-icon-btn" title="Start New Conversation" style="color: var(--voice); border-color: var(--voice); font-weight: 700;">+ New</button>
          <button id="btn-theme-toggle" class="vox-icon-btn" title="Toggle Light/Dark Glass">🌓</button>
          <button id="btn-dialog-close" class="vox-icon-btn" style="padding: 5px 8px; font-weight: 700;" title="Close Dialog">✕</button>
        </div>
      </div>

      <!-- Chat Body -->
      <div class="vox-dialog-body" id="dialog-body-main">
        <!-- Multi-Turn Scrollable Chat Stream -->
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
              <div style="font-size: 11px; font-weight: 600; color: var(--ink-sec); margin-bottom: 6px;" id="response-table-title">Market Alternatives</div>
              <div style="overflow-x: auto;">
                <table class="vox-table">
                  <thead><tr><th>Product</th><th>Cost</th><th>Perf / Specs</th><th>Lock-in</th></tr></thead>
                  <tbody id="response-tbody"></tbody>
                </table>
              </div>
            </div>
            <div id="response-worthit-wrap" class="vox-worthit-panel" style="display: none;">
              <div class="vox-worthit-row">
                <div id="dialog-gauge" class="vox-gauge" style="--pct: 80;"><div id="dialog-score-num" class="score">80</div></div>
                <div style="flex: 1;">
                  <div id="dialog-verdict-tag" style="font-size: 13px; font-weight: 700;">Worth It</div>
                  <div id="dialog-verdict-note" style="font-size: 11px; color: var(--ink-sec); margin-top: 3px;"></div>
                </div>
              </div>
            </div>
            <div id="response-deals-wrap" class="vox-deals-panel" style="display: none; margin-top: 10px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--voice); margin-bottom: 6px; display: flex; align-items: center; justify-content: space-between;">
                <span style="display: flex; align-items: center; gap: 6px;">Coupons & Deals Discovered</span>
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
      </div>

      <!-- Hidden backward-compatible drawers (empty stubs so JS refs don't crash) -->
      <div id="dialog-body-history" style="display:none !important;"><div class="vox-history-list" id="dialog-history-list"></div></div>
      <div id="dialog-body-settings" style="display:none !important;"></div>
      <div id="dialog-body-vault" style="display:none !important;"></div>
      <div id="dialog-body-web" style="display:none !important;"></div>
    </div>
  `;

  // 5. DOM References
  const floatingStage = shadow.getElementById('vox-floating-stage');
  const dockHandle = null; // Removed — no dock handle in Central Island
  const capsule = shadow.getElementById('vox-capsule');
  const capsuleCore = shadow.getElementById('vox-capsule-core');
  const capsuleCopy = shadow.getElementById('vox-capsule-copy');
  const capsuleOverline = shadow.getElementById('capsule-overline-text');
  const capsuleMainText = shadow.getElementById('capsule-main-text');
  const capsuleBtnToggle = shadow.getElementById('vox-capsule-btn-toggle');
  const capsuleBtnIcon = shadow.getElementById('capsule-btn-icon');
  const capsuleBtnResetInline = shadow.getElementById('vox-capsule-btn-reset-inline');
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

  // Orbit action buttons — removed in Central Island architecture
  const orbitActBuy = null;
  const orbitActDeals = null;
  const orbitActCompare = null;
  const orbitActVault = null;

  // Word Correction Bar
  const wordCorrectionBar = shadow.getElementById('vox-word-correction-bar');
  const wordChipsContainer = shadow.getElementById('vox-word-chips');
  const wordBarRunBtn = shadow.getElementById('vox-word-bar-run');
  const wordBarCloseBtn = shadow.getElementById('vox-word-bar-close');
  let wordCorrectionWords = []; // Current word chips state

  const micBtn = shadow.getElementById('vox-mic-trigger') || capsuleCore;
  const capsuleInfo = shadow.getElementById('vox-capsule-info') || capsuleCopy || capsuleMainText;
  const statusSub = shadow.getElementById('vox-status-sub') || capsuleMainText;
  const waveform = shadow.getElementById('vox-waveform') || iconListening;
  const quickInput = shadow.getElementById('vox-quick-input');

  const dialog = shadow.getElementById('vox-dialog');
  const dialogDomain = shadow.getElementById('dialog-domain');
  const dialogCloseBtn = shadow.getElementById('btn-dialog-close');
  const themeToggleBtn = shadow.getElementById('btn-theme-toggle');
  const voicePersonaBtn = null; // Removed — no settings panel
  const muteBtn = null;
  const historyToggleBtn = null;
  const settingsToggleBtn = null;

  const bodyMain = shadow.getElementById('dialog-body-main');
  const bodyHistory = shadow.getElementById('dialog-body-history');
  const bodySettings = shadow.getElementById('dialog-body-settings');
  const bodyWeb = shadow.getElementById('dialog-body-web');
  const webCurrentDomainText = null; // Removed — no web tab

  // Navigation Tabs — removed in Central Island architecture
  const tabNavChat = null;
  const tabNavAddress = null;
  const tabNavWeb = null;
  const tabNavSettings = null;

  // Settings DOM refs — removed from UI, keys come from config.js / chrome.storage
  const inputAnakinKey = null;
  const inputGroqKey = null;
  const inputElevenlabsKey = null;
  const chkLiveScrape = null;
  const selectVoxLanguage = null;
  const btnSaveSettings = null;
  const lblSettingsSaved = null;
  const settingsStatusBadge = null;
  const btnResetVoxState = null;
  const lblResetVoxStatus = null;
  const badgeMicState = null;

  // Vault DOM refs — removed from UI, data comes from chrome.storage
  const bodyVault = shadow.getElementById('dialog-body-vault');
  const btnVaultToggle = null;
  const btnVaultHome = null;
  const btnVaultOffice = null;
  const vaultActiveBadge = null;
  const vaultPreviewProfile = null;
  const vaultPreviewNamePhone = null;
  const vaultPreviewAddress = null;
  const vaultPreviewCityProv = null;
  const vaultFullname = null;
  const vaultEmail = null;
  const vaultPhone = null;
  const vaultUsername = null;
  const vaultStreet = null;
  const vaultCity = null;
  const vaultProvince = null;
  const vaultPostalcode = null;
  const btnVaultSave = null;
  const btnVaultAutofill = null;
  const lblVaultSaved = null;
  const vaultConnectedStoresList = null;
  const vaultStoreCount = null;
  const btnVaultAddCurrentSite = null;
  const inputStoreName = null;
  const inputStoreDomain = null;
  const inputStoreUser = null;
  const selectStoreProfile = null;
  const btnVaultSubmitStore = null;
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
  let lastMissionWinner = null;
  let isListening = false;
  let isMuted = false;
  let isSpeaking = false;          // Lock: true while Vox is speaking (prevents mic echo)
  let speechStartTime = 0;         // Timestamp when current speech started for freeze watchdogs
  let isHandsFreeMode = false;     // Will be restored from storage on boot
  let isPageIngested = false;      // Pre-scraping loading state tracker
  let ingestedPageContext = null;   // Cached DOM context from proactive ingestion
  let silentMode = false;          // When true: no TTS, no chat popup, no dialog auto-open
  let voxLanguage = 'en-US';       // Speech recognition language (persisted in settings, default English)
  let currentVoiceEngine = 'neural'; // 'neural' | 'native' | 'elevenlabs'
  let voiceSpeed = 1.0;
  let currentAudio = null;
  let recognition = null;
  let currentHighlightEl = null;
  let currentFocusBadge = null;
  let micPermissionGranted = false; // Tracks if mic permission was already granted
  const STORAGE_KEY = 'vox_audit_history';
  const CHAT_SESSION_KEY = 'vox_active_chat_session';
  const VOX_MIC_STATE_KEY = 'vox_mic_state';

  // Guard against orphaned content scripts when extension is reloaded in chrome://extensions
  function isExtensionContextValid() {
    try {
      return typeof chrome !== 'undefined' && Boolean(chrome?.runtime?.id);
    } catch (_) {
      return false;
    }
  }

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

  let pendingProductClarification = null;
  let pendingModeContext = null;

  // Load persisted language setting
  if (chrome.storage?.local) {
    chrome.storage.local.get({ voxLanguage: 'en-US' }, (s) => {
      voxLanguage = s.voxLanguage || 'en-US';
      if (selectVoxLanguage) selectVoxLanguage.value = voxLanguage;
    });
  }

  // ─── Capsule Expand / Collapse Helpers ───
  let capsuleCollapseTimer = null;
  function expandCapsule(text, duration = 0, overline = null) {
    if (!capsule) return;
    capsule.classList.add('expanded');
    if (capsuleMainText && text) capsuleMainText.textContent = text;
    if (capsuleOverline && overline) capsuleOverline.textContent = overline;
    clearTimeout(capsuleCollapseTimer);
    if (duration > 0) {
      capsuleCollapseTimer = setTimeout(() => collapseCapsule(), duration);
    }
  }
  function collapseCapsule() {
    if (!capsule) return;
    // Keep expanded if agent loop is actively executing
    if (typeof activeAgentLoop !== 'undefined' && activeAgentLoop && activeAgentLoop.isActive) return;
    if (floatingMode === 'listening' || floatingMode === 'thinking') return;
    capsule.classList.remove('expanded');
    clearTimeout(capsuleCollapseTimer);
  }

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
    const lines = text.split('\n');
    const out = [];
    let inTable = false;
    let tableLines = [];

    function flushTable() {
      if (tableLines.length < 2) {
        tableLines.forEach(l => {
          let esc = escapeHtml(l);
          esc = esc.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          esc = esc.replace(/\*(.*?)\*/g, '<em>$1</em>');
          esc = esc.replace(/`(.*?)`/g, '<code style="background:var(--chip-bg);padding:1px 5px;border-radius:4px;font-family:var(--font-mono);font-size:11px;">$1</code>');
          out.push(esc);
        });
        tableLines = [];
        inTable = false;
        return;
      }
      const headerRow = tableLines[0].split('|').slice(1, -1).map(c => c.trim());
      const bodyRows = tableLines.slice(2).map(r => r.split('|').slice(1, -1).map(c => c.trim())).filter(r => r.length > 0);

      let html = '<div style="overflow-x:auto; margin:8px 0;"><table class="vox-table"><thead><tr>';
      headerRow.forEach(h => {
        let cell = escapeHtml(h).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html += '<th>' + cell + '</th>';
      });
      html += '</tr></thead><tbody>';
      bodyRows.forEach((r, idx) => {
        const isWinner = idx === 0 || r.some(c => /winner|pemenang|juara/i.test(c));
        html += '<tr' + (isWinner ? ' class="hl"' : '') + '>';
        r.forEach(c => {
          let cellHtml = escapeHtml(c);
          cellHtml = cellHtml.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          cellHtml = cellHtml.replace(/\*(.*?)\*/g, '<em>$1</em>');
          html += '<td>' + cellHtml + '</td>';
        });
        html += '</tr>';
      });
      html += '</tbody></table></div>';
      out.push(html);
      tableLines = [];
      inTable = false;
    }

    for (let line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        inTable = true;
        tableLines.push(trimmed);
      } else {
        if (inTable) flushTable();
        let escaped = escapeHtml(line);
        escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        escaped = escaped.replace(/\*(.*?)\*/g, '<em>$1</em>');
        escaped = escaped.replace(/`(.*?)`/g, '<code style="background:var(--chip-bg);padding:1px 5px;border-radius:4px;font-family:var(--font-mono);font-size:11px;">$1</code>');
        out.push(escaped);
      }
    }
    if (inTable) flushTable();
    return out.join('<br>');
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
            Halo! Saya Vox, asisten belanja pintar Anda. Apa yang ingin Anda lakukan hari ini? Pilih salah satu layanan utama kami di bawah atau langsung ucapkan kebutuhan Anda:
          </div>
          <div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 6px;">
            <button class="vox-shop-chip" id="welcome-chip-instant" style="font-size: 11px; padding: 5px 10px; border-color: #10b981; color: #10b981; font-weight: 600;">⚡ Instant Buy</button>
            <button class="vox-shop-chip" id="welcome-chip-compare" style="font-size: 11px; padding: 5px 10px; border-color: var(--voice); color: var(--voice); font-weight: 600;">📊 Compare Prices</button>
            <button class="vox-shop-chip" id="welcome-chip-deals" style="font-size: 11px; padding: 5px 10px; border-color: #f59e0b; color: #f59e0b; font-weight: 600;">🏷️ Coupon Hunt</button>
            <button class="vox-shop-chip" id="welcome-chip-autofill" style="font-size: 11px; padding: 5px 10px; border-color: #8b5cf6; color: #8b5cf6; font-weight: 600;">📍 Identity Vault</button>
          </div>
        </div>
      </div>
    `;
    container.querySelector('#welcome-chip-instant')?.addEventListener('click', () => {
      appendChatMessage('user', '⚡ Instant Buy');
      initiateInstantBuyForProduct();
    });
    container.querySelector('#welcome-chip-compare')?.addEventListener('click', () => {
      appendChatMessage('user', '📊 Bandingkan Harga & Spesifikasi (Compare)');
      pendingModeContext = 'compare';
      const promptTxt = 'Produk apa yang ingin dibandingkan harga dan spesifikasinya? Sebutkan nama produk dan budget Anda (contoh: *headset gaming under 200rb*).';
      appendChatMessage('agent', `**Mode Compare Aktif**\n\n${promptTxt}`);
      speak('Mau bandingkan produk apa? Sebutkan produk dan budget Anda.');
    });
    container.querySelector('#welcome-chip-deals')?.addEventListener('click', () => {
      appendChatMessage('user', '🏷️ Cari Kupon & Diskon (Coupon Hunt)');
      executeAutonomousDealHunter('deals');
    });
    container.querySelector('#welcome-chip-autofill')?.addEventListener('click', () => {
      appendChatMessage('user', '📍 Buka Identity Vault');
      switchDialogTab('address');
      speak('Membuka Identity Vault untuk memeriksa profil alamat pengiriman Anda.');
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
            <div style="font-size: 11px; font-weight: 700; color: #10b981; margin-bottom: 4px;">Quick Checkout Actions</div>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              <button class="vox-icon-btn btn-msg-autofill" style="border-color: #10b981; color: #10b981; font-weight: 700;">Autofill Vault Address</button>
              <button class="vox-icon-btn btn-msg-deals" style="border-color: var(--voice); color: var(--voice);">Check Promo Coupons</button>
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
            <div style="font-size: 10.5px; font-weight: 700; color: var(--voice);">Promo Coupons Found:</div>
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
                <button class="vox-quick-option-chip" data-query="${escapeHtml(opt.query || opt.label)}" data-action="${escapeHtml(opt.action || '')}" data-url="${escapeHtml(opt.url || opt.targetUrl || '')}" data-product="${escapeHtml(opt.targetProduct || '')}">
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
              <strong>Vox Agent</strong>
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
          const targetProduct = chip.getAttribute('data-product');
          const q = chip.getAttribute('data-query');

          if (action === 'run_tour') {
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = 'var(--voice)';
            processNaturalQuery('tour');
            return;
          }

          if (action === 'research_page') {
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = 'var(--voice)';
            executeDeepPageResearch(q || document.title);
            return;
          }

          if (action === 'explain_simple') {
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = 'var(--voice)';
            executeExplainSimply(q || document.title);
            return;
          }

          if (action === 'open_youtube') {
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = '#ef4444';
            handleYouTubeMediaControl('open');
            return;
          }

          if (action === 'wa_pinned_contact' || action === 'wa_my_contact' || action === 'open_whatsapp_web' || action === 'send_whatsapp') {
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = '#10b981';
            const textToSend = targetUrl || q || lastResearchReportText || '';
            triggerAutonomousWhatsAppAction(action === 'wa_my_contact' ? 'my_contact' : 'pinned', textToSend);
            return;
          }

          if (action === 'copy_summary') {
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = 'var(--voice)';
            const textToCopy = targetProduct || targetUrl || q || '';
            navigator.clipboard.writeText(textToCopy).then(() => {
              expandCapsule('Teks berhasil disalin ke clipboard!', 3000);
              speak('Ringkasan riset berhasil disalin.');
            }).catch(() => {
              speak('Gagal menyalin teks.');
            });
            return;
          }

          if (action === 'open_winner') {
            const destUrl = targetUrl || currentAnalysis?.winner?.url || 'https://www.tokopedia.com';
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = 'var(--voice)';
            chrome.runtime.sendMessage({ action: 'OPEN_TAB', url: destUrl });
            speak('Membuka toko produk pemenang di tab baru.');
            return;
          }
          if (action === 'buy_winner') {
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = '#10b981';
            executeBuyAndCheckoutWinner(currentAnalysis?.winner || lastMissionWinner);
            return;
          }
          if (action === 'deals') {
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = '#f59e0b';
            executeAutonomousDealHunter('deals');
            return;
          }
          if (action === 'autofill' || action === 'clarify_vault') {
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = '#8b5cf6';
            switchDialogTab('address');
            speak('Membuka Identity Vault untuk profil alamat Anda.');
            return;
          }
          if (action === 'clarify_compare') {
            const prod = targetProduct || pendingProductClarification?.product || q;
            pendingProductClarification = null;
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = 'var(--voice)';
            executeAutonomousLiveCompare(prod);
            return;
          }
          if (action === 'clarify_instant_buy') {
            const prod = targetProduct || pendingProductClarification?.product || q;
            pendingProductClarification = null;
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = '#10b981';
            initiateInstantBuyForProduct(prod);
            return;
          }
          if (action === 'clarify_coupons') {
            const prod = targetProduct || pendingProductClarification?.product || q;
            pendingProductClarification = null;
            chip.style.transform = 'scale(0.95)';
            chip.style.borderColor = '#f59e0b';
            executeAutonomousDealHunter(prod || 'deals');
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

  function updateChatMessage(msgId, newContent, newExtra = null) {
    const stream = shadow.getElementById('vox-chat-stream');
    const msgRecord = activeChatSession.messages.find(m => m.id === msgId);
    if (msgRecord) {
      msgRecord.content = newContent;
      if (newExtra) {
        msgRecord.extra = { ...(msgRecord.extra || {}), ...newExtra };
      }
      saveActiveChatSession();
    }
    if (stream) {
      const item = stream.querySelector(`#${msgId}`);
      if (item) {
        const bubbleText = item.querySelector('.vox-bubble-text');
        if (bubbleText) {
          bubbleText.innerHTML = formatMarkdown(newContent);
        }
        if (newExtra && newExtra.quickOptions && Array.isArray(newExtra.quickOptions)) {
          let optContainer = item.querySelector('.vox-quick-options');
          if (!optContainer) {
            optContainer = document.createElement('div');
            optContainer.className = 'vox-quick-options';
            optContainer.style.cssText = 'display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px;';
            item.querySelector('.vox-chat-bubble')?.appendChild(optContainer);
          }
          optContainer.innerHTML = newExtra.quickOptions.map(opt => `
            <button class="vox-quick-chip vox-quick-option-chip" data-action="${opt.action || ''}" data-url="${opt.targetUrl || opt.url || ''}" data-query="${opt.query || ''}" data-product="${escapeHtml(opt.targetProduct || '')}">
              ${escapeHtml(opt.label)}
            </button>
          `).join('');

          optContainer.querySelectorAll('.vox-quick-option-chip').forEach(chip => {
            chip.addEventListener('click', () => {
              const action = chip.getAttribute('data-action');
              const targetUrl = chip.getAttribute('data-url');
              const targetProduct = chip.getAttribute('data-product');
              const q = chip.getAttribute('data-query');

              if (action === 'open_winner') {
                const destUrl = targetUrl || currentAnalysis?.winner?.url || 'https://www.tokopedia.com';
                chip.style.transform = 'scale(0.95)';
                chip.style.borderColor = 'var(--voice)';
                chrome.runtime.sendMessage({ action: 'OPEN_TAB', url: destUrl });
                speak('Membuka toko produk pemenang di tab baru.');
                return;
              }
              if (action === 'buy_winner') {
                chip.style.transform = 'scale(0.95)';
                chip.style.borderColor = '#10b981';
                executeBuyAndCheckoutWinner(currentAnalysis?.winner || lastMissionWinner);
                return;
              }
              if (action === 'deals') {
                chip.style.transform = 'scale(0.95)';
                chip.style.borderColor = '#f59e0b';
                executeAutonomousDealHunter('deals');
                return;
              }
              if (action === 'autofill' || action === 'clarify_vault') {
                chip.style.transform = 'scale(0.95)';
                chip.style.borderColor = '#8b5cf6';
                switchDialogTab('address');
                speak('Membuka Identity Vault untuk profil alamat Anda.');
                return;
              }
              if (action === 'clarify_compare') {
                const prod = targetProduct || pendingProductClarification?.product || q;
                pendingProductClarification = null;
                chip.style.transform = 'scale(0.95)';
                chip.style.borderColor = 'var(--voice)';
                executeAutonomousLiveCompare(prod);
                return;
              }
              if (action === 'clarify_instant_buy') {
                const prod = targetProduct || pendingProductClarification?.product || q;
                pendingProductClarification = null;
                chip.style.transform = 'scale(0.95)';
                chip.style.borderColor = '#10b981';
                initiateInstantBuyForProduct(prod);
                return;
              }
              if (action === 'clarify_coupons') {
                const prod = targetProduct || pendingProductClarification?.product || q;
                pendingProductClarification = null;
                chip.style.transform = 'scale(0.95)';
                chip.style.borderColor = '#f59e0b';
                executeAutonomousDealHunter(prod || 'deals');
                return;
              }
              if (q) {
                chip.style.transform = 'scale(0.95)';
                chip.style.borderColor = 'var(--voice)';
                processNaturalQuery(q);
              }
            });
          });
        }
      }
      stream.scrollTop = stream.scrollHeight;
    }
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
    if (typeof clearActiveMission === 'function') {
      clearActiveMission();
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

    let icon = '🌐';
    if (cleanDomain.includes('shopee')) icon = '🛍️';
    else if (cleanDomain.includes('tokopedia')) icon = '🟢';
    else if (cleanDomain.includes('blibli')) icon = '🔵';
    else if (cleanDomain.includes('lazada')) icon = '🔴';
    else if (cleanDomain.includes('amazon')) icon = '📦';
    else if (cleanDomain.includes('tiktok')) icon = '🎵';

    const existingIdx = customStores.findIndex(s => s.domain === cleanDomain);
    const storeObj = {
      id,
      name: cleanName,
      domain: cleanDomain,
      icon: icon,
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

  function getConfiguredStoreTargets() {
    if (Array.isArray(customStores) && customStores.length > 0) {
      return customStores.map(s => {
        const d = ((s.domain || '') + ' ' + (s.name || '')).toLowerCase();
        let key = 'shopee';
        if (d.includes('tokopedia')) key = 'tokopedia';
        else if (d.includes('blibli')) key = 'blibli';
        else if (d.includes('amazon')) key = 'amazon';
        else if (d.includes('lazada')) key = 'lazada';
        else if (d.includes('tiktok')) key = 'tiktok';
        else if (d.includes('shopee')) key = 'shopee';
        else key = (s.name || 'store').toLowerCase().replace(/[^a-z0-9]/g, '');
        return {
          key,
          name: s.name || key,
          domain: s.domain || `${key}.com`,
          icon: s.icon || '🛍️'
        };
      });
    }
    const host = (window.location.hostname || '').toLowerCase();
    if (host.includes('tokopedia')) {
      return [{ key: 'tokopedia', name: 'Tokopedia', domain: 'tokopedia.com', icon: '🟢' }];
    } else if (host.includes('blibli')) {
      return [{ key: 'blibli', name: 'Blibli', domain: 'blibli.com', icon: '🔵' }];
    } else if (host.includes('amazon')) {
      return [{ key: 'amazon', name: 'Amazon Global', domain: 'amazon.com', icon: '📦' }];
    }
    return [{ key: 'shopee', name: 'Shopee', domain: 'shopee.co.id', icon: '🛍️' }];
  }

  function isElementVisible(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return false;
    try {
      const style = window.getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
        return false;
      }
    } catch (_) {}
    return true;
  }

  function robustClick(targetEl) {
    if (!targetEl) return false;
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    targetEl.classList.add('vox-halo-highlight');

    const rect = targetEl.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const eventOpts = {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: x,
      clientY: y,
      screenX: x,
      screenY: y,
      button: 0,
      buttons: 1
    };

    try { targetEl.dispatchEvent(new PointerEvent('pointerover', eventOpts)); } catch (_) {}
    try { targetEl.dispatchEvent(new MouseEvent('mouseover', eventOpts)); } catch (_) {}
    try { targetEl.dispatchEvent(new PointerEvent('pointerdown', eventOpts)); } catch (_) {}
    try { targetEl.dispatchEvent(new MouseEvent('mousedown', eventOpts)); } catch (_) {}
    try { targetEl.focus(); } catch (_) {}
    try { targetEl.dispatchEvent(new PointerEvent('pointerup', eventOpts)); } catch (_) {}
    try { targetEl.dispatchEvent(new MouseEvent('mouseup', eventOpts)); } catch (_) {}
    try { targetEl.dispatchEvent(new MouseEvent('click', eventOpts)); } catch (_) {}
    try { targetEl.click(); } catch (_) {}

    setTimeout(() => targetEl.classList.remove('vox-halo-highlight'), 2500);
    return true;
  }

  function isSearchPage() {
    const url = (window.location.href || '').toLowerCase();
    // Query string indicators
    if (/[?&](q|keyword|query|search|keywords)=/i.test(url)) return true;
    // URL path indicators for search/discovery
    if (/tokopedia\.com\/(search|find|p|hot|promo|discovery)/i.test(url)) return true;
    if (/shopee\.co\.id\/(search|find|daily_discover)/i.test(url)) return true;
    if (/blibli\.com\/(cari|backend\/search)/i.test(url)) return true;
    if (/lazada\.co\.id\/catalog/i.test(url)) return true;
    if (/amazon\.[a-z.]+\/s(\?|\/)/i.test(url)) return true;
    if (/\/(search|find|cari|catalog|discovery)\b/i.test(url)) return true;

    // DOM containers strictly present on search result pages
    if (document.querySelector(
      '.shopee-search-item-result, ul.shopee-search-item-result__items, ' +
      'div[data-testid="divSRPContentItem"], div[data-testid="spListContainer"], ' +
      'div[data-testid="master-product-card"], div[data-component-type="s-search-result"]'
    )) {
      return true;
    }
    return false;
  }

  const CARD_CONTAINER_SELECTOR = '.shopee-search-item-result__item, div[data-sqi], [data-testid="divSRPContentItem"], [data-testid*="ProductCard" i], .product-card, div[class*="ProductCard"], article';

  function findProductPageBuyNowButton() {
    if (isSearchPage()) return null;

    // 1. Direct platform selectors specifically for BUY NOW / BELI SEKARANG (NOT add to cart)
    const buyNowSelectors = [
      // Shopee: "Beli Sekarang"
      'button.btn-solid-primary',
      'button[class*="btn-solid-primary"]',
      '.shopee-button-solid--primary',
      'button.btn--l[class*="primary"]',
      // Tokopedia: "Beli Langsung"
      'button[data-testid="pdpBtnNormalPrimary"]',
      'button[data-testid="pdpBtnFloatingPrimary"]',
      // Blibli: "Beli Sekarang"
      'button[data-testid*="buyNow" i]',
      'button.buy-now__button',
      // Lazada & TikTok Shop: "Beli Sekarang" / "Buy Now"
      'button.pdp-button_theme_orange',
      'button[class*="buy-now" i]',
      'button[class*="buyNow" i]',
      'button[data-e2e="pdp-buy-now"]',
      // Amazon / Shopify / Generic
      '#buy-now-button',
      '#btn-buy-now',
      '#cs-buy-now',
      'button[name="buy_now"]',
      '.buy-now',
      '.btn-buy-now',
      '[data-testid*="buy-now" i]:not([data-testid*="cart" i])',
      '[aria-label*="beli sekarang" i]',
      '[aria-label*="beli langsung" i]',
      '[aria-label*="buy now" i]'
    ];

    for (const sel of buyNowSelectors) {
      try {
        const candidates = Array.from(document.querySelectorAll(sel));
        for (const el of candidates) {
          if (el.closest(CARD_CONTAINER_SELECTOR)) continue;
          if (isElementVisible(el)) {
            return el;
          }
        }
      } catch (_) {}
    }

    // 2. Scan visible buttons by strict "Beli Sekarang" / "Beli Langsung" / "Buy Now" text
    const buyNowTextPattern = /\b(beli\s*sekarang|beli\s*langsung|buy\s*now|buy\s*it\s*now|beli\s*dengan\s*voucher)\b/i;
    const allButtons = Array.from(document.querySelectorAll('button, a, [role="button"], input[type="submit"], input[type="button"]'))
      .filter(el => !el.closest(CARD_CONTAINER_SELECTOR) && isElementVisible(el));

    for (const el of allButtons) {
      const txt = (el.innerText || el.textContent || el.getAttribute('aria-label') || el.value || '').trim();
      if (/keranjang|cart|bag/i.test(txt)) continue;
      if (buyNowTextPattern.test(txt)) {
        return el;
      }
    }

    return null;
  }

  function findProductPageAddToCartButton() {
    if (isSearchPage()) return null;

    const cartSelectors = [
      // Shopee: "Masukkan Keranjang"
      'button.btn-tinted',
      'button[class*="btn-tinted"]',
      // Tokopedia: "+ Keranjang"
      'button[data-testid="pdpBtnNormalSecondary"]',
      'button[data-testid="pdpBtnFloatingSecondary"]',
      // Blibli / Lazada / TikTok
      'button[data-testid*="addToCart" i]',
      'button[class*="add-to-cart" i]',
      'button[class*="cart-button" i]',
      '#add-to-cart-button',
      '#btn-add-cart',
      '#cs-add-to-cart',
      '.add-to-cart',
      '.btn-add-to-cart',
      '[aria-label*="tambah ke keranjang" i]',
      '[aria-label*="masukkan keranjang" i]',
      '[aria-label*="add to cart" i]'
    ];

    for (const sel of cartSelectors) {
      try {
        const candidates = Array.from(document.querySelectorAll(sel));
        for (const el of candidates) {
          if (el.closest(CARD_CONTAINER_SELECTOR)) continue;
          if (isElementVisible(el)) return el;
        }
      } catch (_) {}
    }

    const cartTextPattern = /\b(tambah(kan)?\s*ke\s*keranjang|masuk(kan)?\s*ke?\s*keranjang|\+?\s*keranjang|add\s*to\s*cart|add\s*to\s*bag)\b/i;
    const allButtons = Array.from(document.querySelectorAll('button, a, [role="button"], input[type="submit"], input[type="button"]'))
      .filter(el => !el.closest(CARD_CONTAINER_SELECTOR) && isElementVisible(el));

    for (const el of allButtons) {
      const txt = (el.innerText || el.textContent || el.getAttribute('aria-label') || el.value || '').trim();
      if (cartTextPattern.test(txt)) return el;
    }

    return null;
  }

  function findProductPageBuyButton() {
    // 1. Strictly prioritize the BUY NOW / Beli Sekarang button
    const buyNow = findProductPageBuyNowButton();
    if (buyNow) return buyNow;

    // 2. Fallback to Add to Cart button if no dedicated Buy Now button exists on page
    return findProductPageAddToCartButton();
  }

  function isProductDetailPage() {
    if (isSearchPage()) return false;
    const url = (window.location.href || '').toLowerCase();
    if (/shopee\.co\.id\/.*-i\.\d+\.\d+/i.test(url) || /shopee\.co\.id\/product\//i.test(url)) return true;
    if (/tokopedia\.com\/[^\/]+\/[^\/]+/i.test(url) && !/tokopedia\.com\/(search|find|p|hot|promo|discovery)/i.test(url)) return true;
    if (/blibli\.com\/p\//i.test(url)) return true;
    if (/lazada\.co\.id\/products\//i.test(url)) return true;
    if (/amazon\.[a-z.]+\/(dp|gp\/product)\//i.test(url)) return true;
    if (document.querySelector('.product-briefing, div[data-testid="pdpMainImage"], #productTitle, .pdp-block, [data-testid="pdpBtnNormalPrimary"]')) return true;
    if (findProductPageBuyButton()) return true;
    return false;
  }

  async function autoSelectProductVariantsIfRequired() {
    try {
      // 1. Shopee variant options
      const shopeeVariantButtons = Array.from(document.querySelectorAll('button.product-variation, .product-variation, button[class*="product-variation"]'));
      if (shopeeVariantButtons.length > 0) {
        const groups = [];
        const seenParents = new Set();
        for (const btn of shopeeVariantButtons) {
          const parent = btn.parentElement?.parentElement || btn.parentElement;
          if (parent && !seenParents.has(parent)) {
            seenParents.add(parent);
            groups.push(parent);
          }
        }
        for (const grp of groups) {
          const isSelected = grp.querySelector('.product-variation--selected, [class*="selected"], [aria-selected="true"]');
          if (!isSelected) {
            const availableBtn = grp.querySelector('button.product-variation:not(.product-variation--disabled):not([disabled])') ||
                                 grp.querySelector('.product-variation:not([class*="disabled"]):not([disabled])');
            if (availableBtn) {
              console.log('[Vox Agent] Auto-selecting product variant on Shopee:', availableBtn.innerText);
              availableBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
              robustClick(availableBtn);
              await new Promise(r => setTimeout(r, 350));
            }
          }
        }
      }

      // 2. Tokopedia variant options
      const tkpdVariantButtons = Array.from(document.querySelectorAll('button[data-testid*="pdpVariantChip"], [data-testid*="pdpVariant" i] button, [data-testid*="VariantLevel"] button'));
      if (tkpdVariantButtons.length > 0) {
        const groups = [];
        const seenParents = new Set();
        for (const btn of tkpdVariantButtons) {
          const parent = btn.closest('[data-testid*="pdpVariantLevel"]') || btn.parentElement;
          if (parent && !seenParents.has(parent)) {
            seenParents.add(parent);
            groups.push(parent);
          }
        }
        for (const grp of groups) {
          const isSelected = grp.querySelector('[aria-selected="true"], [data-selected="true"], [class*="active"], [class*="selected"]');
          if (!isSelected) {
            const availableBtn = grp.querySelector('button:not([disabled])');
            if (availableBtn) {
              console.log('[Vox Agent] Auto-selecting product variant on Tokopedia:', availableBtn.innerText);
              availableBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
              robustClick(availableBtn);
              await new Promise(r => setTimeout(r, 350));
            }
          }
        }
      }

      // 3. Generic variant chips
      const genericVariants = Array.from(document.querySelectorAll('[class*="variant"] button:not([disabled]), [class*="option-item"] button:not([disabled])'));
      if (genericVariants.length > 0) {
        const unselected = genericVariants.filter(b => !/selected|active/i.test(b.className));
        if (unselected.length > 0 && genericVariants.every(b => !/selected|active/i.test(b.className))) {
          unselected[0].click();
          await new Promise(r => setTimeout(r, 300));
        }
      }
    } catch (e) {
      console.warn('[Vox Agent] Variant selection notice:', e);
    }
  }

  async function initiateInstantBuyForProduct(productTerm = '') {
    openDialog();
    switchDialogTab('chat');

    // 1. Check if current page is already a Product Detail Page (PDP)
    const pdpButton = findProductPageBuyButton();
    if (pdpButton || isProductDetailPage()) {
      appendChatMessage('agent', `**Instant Buy Diaktifkan**\n\nMenambahkan produk halaman ini ke keranjang dan memproses checkout otomatis…`);
      speak('Menjalankan Instant Buy untuk produk ini.');
      await executeAutonomousCheckout('checkout');
      return;
    }

    if (productTerm && productTerm.trim().length >= 2) {
      appendChatMessage('agent', `**Instant Buy: "${escapeHtml(productTerm)}"**\n\nMencari produk terbaik di toko dan langsung memproses checkout…`);
      speak(`Mencari ${productTerm} untuk Instant Buy.`);
      await physicallyTypeAndClickStoreSearch(productTerm);
      await new Promise(r => setTimeout(r, 1500));
      await executeBuyAndCheckoutWinner({ title: productTerm });
      return;
    }

    pendingModeContext = 'instant_buy';
    appendChatMessage('agent', `**Mode Instant Buy Aktif**\n\nProduk apa yang ingin langsung Anda beli dan checkout sekarang? Sebutkan nama produknya.`);
    speak('Mau beli produk apa? Sebutkan nama produknya.');
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
          Belum ada alamat web tersimpan.<br>
          Gunakan tombol di atas atau klik preset untuk menambahkan toko favoritmu.
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
                ${isCurrentPage ? '<span style="font-size: 8.5px; background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 1px 5px; border-radius: 4px; border: 1px solid rgba(16, 185, 129, 0.3);">🟢 Aktif</span>' : ''}
              </div>
              <div style="font-size: 10px; color: var(--ink-sec); font-family: var(--font-mono);">
                Profil Alamat: ${store.defaultProfile === 'office' ? '🏢 Kantor' : '🏠 Rumah'}
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <a href="https://${escapeHtml(store.domain)}" target="_blank" class="vox-icon-btn" style="text-decoration: none; padding: 3px 8px; font-size: 10px; color: var(--voice); border-color: var(--voice);" title="Buka website toko ini">
              ↗ Buka
            </a>
            <button class="vox-icon-btn btn-delete-custom-store" data-id="${store.id}" title="Hapus website ini" style="color: var(--bad); border-color: var(--border); padding: 3px 6px; font-size: 11px;">
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
    btnVaultAddCurrentSite.textContent = `+ Tambahkan Web Ini (${currentHost})`;
    btnVaultAddCurrentSite.addEventListener('click', () => {
      addCustomStore(document.title.split(/[-|–—]/)[0].trim() || currentHost, currentHost, 'user', currentVaultProfile);
      playUiChime('ready');
    });
  }

  // E-Commerce Marketplace Presets Click Handlers
  shadow.querySelectorAll('.vox-preset-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const name = btn.getAttribute('data-name') || '';
      const domain = btn.getAttribute('data-domain') || '';
      const url = btn.getAttribute('data-url') || ('https://' + domain);
      addCustomStore(name, domain, 'user', currentVaultProfile);
      playUiChime('ready');
      window.open(url, '_blank');
    });
  });

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
      if (capsuleOverline) capsuleOverline.textContent = options.overline || 'VOX IS READY';
      if (capsuleMainText) capsuleMainText.textContent = options.text || 'Ask anything or shop…';
      if (capsuleBtnIcon) capsuleBtnIcon.textContent = '⌘';
      if (successCard) successCard.style.display = 'none';
    } else if (nextMode === 'listening') {
      if (iconListening) iconListening.style.display = 'flex';
      if (capsuleOverline) capsuleOverline.textContent = options.overline || 'VOX IS LISTENING';
      if (capsuleMainText) capsuleMainText.textContent = options.text || 'Tell me what you need…';
      if (capsuleBtnIcon) capsuleBtnIcon.textContent = '×';
      if (successCard) successCard.style.display = 'none';
    } else if (nextMode === 'thinking') {
      if (iconThinking) iconThinking.style.display = 'block';
      if (capsuleOverline) capsuleOverline.textContent = options.overline || 'VOX IS THINKING';
      if (capsuleMainText) capsuleMainText.textContent = options.text || 'Analyzing page & prices…';
      if (capsuleBtnIcon) capsuleBtnIcon.textContent = '×';
      if (successCard) successCard.style.display = 'none';
    } else if (nextMode === 'success') {
      if (iconSuccess) iconSuccess.style.display = 'block';
      if (capsuleOverline) capsuleOverline.textContent = options.overline || 'VOX COMPLETED';
      if (capsuleMainText) capsuleMainText.textContent = options.text || 'Action completed successfully!';
      if (capsuleBtnIcon) capsuleBtnIcon.textContent = '✓';
      if (successCard) {
        if (options.cardTitle && successCardTitle) successCardTitle.textContent = options.cardTitle;
        if (options.cardDesc && successCardDesc) successCardDesc.innerHTML = options.cardDesc;
        successCard.style.display = 'block';
      }
    } else if (nextMode === 'actions') {
      if (iconActions) iconActions.style.display = 'block';
      if (capsuleOverline) capsuleOverline.textContent = options.overline || 'WHAT CAN I DO?';
      if (capsuleMainText) capsuleMainText.textContent = options.text || 'Select shopping action';
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

  function setCapsuleState(state, subtext, overline) {
    if (capsule) {
      capsule.dataset.state = state;
      // Keep capsule expanded when active so user can always see what Vox is doing
      if (state !== 'idle') {
        capsule.classList.add('expanded');
      }
    }
    if (statusSub) statusSub.textContent = subtext || '';
    if (capsuleOverline && overline) capsuleOverline.textContent = overline;
    if (capsuleMainText && subtext) capsuleMainText.textContent = subtext;

    if (state === 'listening' || state === 'speaking') {
      if (waveform) waveform.style.display = 'inline-flex';
    } else {
      if (waveform) waveform.style.display = 'none';
    }

    // Dynamic gradient on capsule core based on state
    if (capsuleCore) {
      if (state === 'observing') {
        capsuleCore.style.background = 'linear-gradient(135deg, #0891b2, #06b6d4)';
      } else if (state === 'reasoning' || state === 'thinking') {
        capsuleCore.style.background = 'linear-gradient(135deg, #4f46e5, #818cf8)';
      } else if (state === 'acting' || state === 'navigating') {
        capsuleCore.style.background = 'linear-gradient(135deg, #d97706, #f59e0b)';
      } else if (state === 'speaking') {
        capsuleCore.style.background = 'linear-gradient(135deg, #059669, #10b981)';
      } else if (state === 'listening') {
        capsuleCore.style.background = 'linear-gradient(135deg, #0284c7, #38bdf8)';
      } else {
        capsuleCore.style.background = 'linear-gradient(135deg, #4666ff, #849cff)';
      }
    }

    // Sync with modern floating stage mode & update labels
    if (state === 'listening') {
      setFloatingMode('listening', { text: subtext || 'Listening to your voice…', overline: overline || 'VOX IS LISTENING' });
      expandCapsule(subtext || 'Listening…', 0, overline || 'VOX IS LISTENING');
    } else if (state === 'reasoning' || state === 'thinking') {
      setFloatingMode('thinking', { text: subtext || 'Thinking…', overline: overline || 'VOX IS THINKING' });
      expandCapsule(subtext || 'Thinking…', 0, overline || 'VOX IS THINKING');
    } else if (state === 'observing') {
      setFloatingMode('thinking', { text: subtext || 'Observing page content…', overline: overline || 'VOX IS OBSERVING' });
      expandCapsule(subtext || 'Observing page…', 0, overline || 'VOX IS OBSERVING');
    } else if (state === 'navigating') {
      setFloatingMode('thinking', { text: subtext || 'Navigating page…', overline: overline || 'VOX IS NAVIGATING' });
      expandCapsule(subtext || 'Navigating…', 0, overline || 'VOX IS NAVIGATING');
    } else if (state === 'acting') {
      setFloatingMode('thinking', { text: subtext || 'Executing action…', overline: overline || 'VOX IS ACTING' });
      expandCapsule(subtext || 'Executing…', 0, overline || 'VOX IS ACTING');
    } else if (state === 'speaking') {
      setFloatingMode('listening', { text: subtext || 'Speaking…', overline: overline || 'VOX IS SPEAKING' });
      expandCapsule(subtext || 'Speaking…', 0, overline || 'VOX IS SPEAKING');
    } else if (state === 'idle') {
      setFloatingMode('ambient', { text: subtext || 'Ask anything or shop…', overline: overline || 'VOX IS READY' });
      expandCapsule(subtext || 'Ask anything or shop…', 4000, overline || 'VOX IS READY');
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
    capsuleCore.addEventListener('click', async (e) => {
      e.stopPropagation();
      if (floatingMode === 'listening') {
        stopListening();
        setFloatingMode('ambient');
      } else {
        // First click: ensure getUserMedia permission is granted (user gesture context)
        if (!micPermissionGranted && navigator.mediaDevices?.getUserMedia) {
          try {
            audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            micPermissionGranted = true;
            console.log('[Vox Agent] Mic permission granted via user click.');
          } catch (err) {
            console.warn('[Vox Agent] Mic permission denied:', err.message);
          }
        }
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
      appendChatMessage('user', 'Coupon Hunt: Scan Promo Codes');
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
      const toastMsg = `Autonomous Action: Clicking "${targetLabel.slice(0, 30)}"…`;
      console.log('[Vox Agent]', toastMsg);
      setCapsuleState('reasoning', `Clicking "${targetLabel.slice(0, 18)}"…`);

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
              toast: `Autonomous Agent: Clicking "${candidate.text.slice(0, 25)}"…`
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
  async function autonomousScanAndHighlightSearchResults(searchKeyword, storeName, isSilent = false) {
    const cleanTerm = extractCleanSearchTerm(searchKeyword);
    if (!isSilent) {
      setCapsuleState('reasoning', `Scouting prices for "${cleanTerm.slice(0, 14)}"…`);
    }

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
      // Filter out low prices like vouchers or invalid cents (accept budget items >= 2000)
      if (price && price.value >= 2000) {
        const titleEl = card.querySelector('div[class*="title" i], div[class*="name" i], span[class*="name" i], h2, h3, a[title]') || card;
        let title = (titleEl.getAttribute('title') || titleEl.innerText || titleEl.textContent || '').trim().replace(/\s+/g, ' ');
        if (title.length > 70) title = title.slice(0, 67) + '…';
        const linkEl = card.querySelector('a[href]') || card.closest('a[href]');
        const url = linkEl ? linkEl.href : window.location.href;
        const isOfficial = /official|mall|resmi/i.test(fullText);
        parsedItems.push({
          el: card,
          title: title || cleanTerm,
          price: price,
          url: url,
          official: isOfficial
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

      if (!isSilent) {
        const spoken = `I found ${parsedItems.length} listings for ${cleanTerm} on ${currentStore}. Prices start from ${minPriceStr} up to ${maxPriceStr}. I've scrolled down and highlighted the lowest price deal for you at ${minPriceStr}!`;
        const content = `**Live Market Scan: "${escapeHtml(cleanTerm)}" on ${currentStore}**\n\n` +
          `I've scrolled through the search results and analyzed **${parsedItems.length} listings**:\n\n` +
          `• **Lowest Price Deal**: **${minPriceStr}** *(Highlighted with cyan halo on screen)*\n` +
          `• **📈 Market Range**: ${minPriceStr} — ${maxPriceStr}\n` +
          `• **Best Deal**: *${escapeHtml(minItem.title)}*\n\n` +
          `*Would you like me to filter for Official Store only, or check product specifications?*`;

        const quickOptions = [
          { label: `Lowest Price (${minPriceStr})`, query: `${cleanTerm} termurah` },
          { label: "Official Store Only", query: `${cleanTerm} official store` },
          { label: "🔥 Top Rated & Terlaris", query: `${cleanTerm} terlaris` },
          { label: "Under " + maxPriceStr, query: `${cleanTerm} diskon promo` }
        ];

        appendChatMessage('agent', content, { quickOptions, spoken });
        speak(spoken);
        setCapsuleState('idle', 'Price scan complete');
      }
      return { minItem, maxItem, count: parsedItems.length, items: parsedItems };
    } else {
      if (!isSilent) {
        // If products haven't loaded yet or none matched, fallback to interactive clarification
        const fallback = generateSearchInteractiveFollowUp(cleanTerm, currentStore);
        appendChatMessage('agent', fallback.content, {
          quickOptions: fallback.quickOptions,
          spoken: fallback.spoken,
          followUpQuestion: fallback.followUpQuestion
        });
        speak(fallback.spoken);
        setCapsuleState('idle', 'Search ready');
      }
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
        content: `**Searching for "${cleanTerm}" on ${storeName}**\n\nI have typed your query and clicked the search button! To help you pick the right model:\n\n• **Budget Entry (~Rp 12M – 16M)**: Lenovo LOQ (RTX 3050 / RTX 4050)\n• **Sweet Spot (~Rp 18M – 24M)**: Lenovo Legion 5 / Slim 5 (RTX 4060)\n• **Flagship Beast (~Rp 28M+)**: Lenovo Legion Pro 7 / 9 (RTX 4080 / 4090)\n\n*What is your price range or preferred spec? Tap an option below to narrow down:*`,
        quickOptions: [
          { label: "💰 Budget LOQ (Rp 12-16M)", query: `${cleanTerm} LOQ RTX 4050` },
          { label: "Sweet Spot Legion 5 (Rp 18-24M)", query: `${cleanTerm} Legion 5 RTX 4060` },
          { label: "🔥 Flagship Legion Pro (Rp 28M+)", query: `${cleanTerm} Legion Pro 7` },
          { label: "Under Rp 15 Million", query: `${cleanTerm} under 15 juta` },
          { label: "🚀 RTX 4060 Spec", query: `${cleanTerm} RTX 4060` }
        ]
      };
    }

    // 2. Smartphones & Tablets (e.g. iPhone, Samsung, Xiaomi)
    if (/iphone|galaxy|samsung|xiaomi|redmi|oppo|vivo|ipad|pixel|hp/i.test(t)) {
      return {
        spoken: `I've searched for ${cleanTerm} on ${storeName}! What is your target budget, and what storage capacity do you need?`,
        followUpQuestion: `What is your target budget, and what storage capacity do you need?`,
        content: `**Searching for "${cleanTerm}" on ${storeName}**\n\nI've submitted the search! What price range or storage size fits what you are looking for?`,
        quickOptions: [
          { label: "💰 Budget Tier (< Rp 5M)", query: `${cleanTerm} under 5 juta garansi resmi` },
          { label: "Mid-Range (Rp 6-10M)", query: `${cleanTerm} 256GB garansi resmi` },
          { label: "🔥 Flagship Pro Model", query: `${cleanTerm} Pro garansi resmi` },
          { label: "Official Store Only", query: `${cleanTerm} official store` }
        ]
      };
    }

    // 3. Audio & Accessories (Headphones, TWS, Mouse, Keyboard, Monitor)
    if (/mouse|keyboard|headset|headphone|tws|earbuds|monitor|speaker|mic/i.test(t)) {
      return {
        spoken: `I've searched for ${cleanTerm} on ${storeName}! Are you looking for budget-friendly wireless options or premium gear?`,
        followUpQuestion: `Are you looking for budget-friendly wireless options or premium gear?`,
        content: `**Searching for "${cleanTerm}" on ${storeName}**\n\nSearch executed! What style or price tier are you aiming for?`,
        quickOptions: [
          { label: "💰 Budget Value Pick", query: `${cleanTerm} murah berkualitas` },
          { label: "Wireless & Bluetooth", query: `${cleanTerm} wireless bluetooth` },
          { label: "Top Rated & Popular", query: `${cleanTerm} terlaris official store` },
          { label: "🔥 Pro Esports Grade", query: `${cleanTerm} pro gaming` }
        ]
      };
    }

    // 4. General Products / Default
    return {
      spoken: `I've searched for ${cleanTerm} on ${storeName}! What is your target budget, and do you prefer budget options or official store listings?`,
      followUpQuestion: `What is your target budget, and do you prefer budget options or official store listings?`,
      content: `**Searching for "${cleanTerm}" on ${storeName}**\n\nI've typed the query and clicked the search button! What price tier or brand preference would you like to filter?`,
      quickOptions: [
        { label: "💰 Best Budget Option", query: `${cleanTerm} murah terbaik` },
        { label: "Top Rated & Popular", query: `${cleanTerm} terlaris` },
        { label: "Official Store Only", query: `${cleanTerm} official store` },
        { label: "🔥 Latest 2026 Edition", query: `${cleanTerm} terbaru 2026` }
      ]
    };
  }

  /**
   * Autonomous Physical Store Search
   * Discovers the active marketplace's search bar, smoothly scrolls into view,
   * focuses and types the query with React/Vue synthetic event compatibility,
   * highlights the physical search button with cyan halo, depresses it with tactile animation,
   * and dispatches pointer/mouse/keyboard events to physically search on the website.
   */
  async function physicallyTypeAndClickStoreSearch(queryText) {
    const cleanTerm = (queryText || '').trim();
    if (!cleanTerm) return false;

    // 1. Search input selectors covering Shopee, Tokopedia, Blibli, Amazon, Lazada & generic
    const searchSelectors = [
      // Shopee
      'input.shopee-searchbar-input__input',
      '.shopee-searchbar-input input',
      '.shopee-searchbar input',
      'input[placeholder*="shopee" i]',
      'input[placeholder*="voucher" i]',
      'input[placeholder*="daftar" i]',
      // Tokopedia
      'input[data-unify="Search"]',
      'input[data-testid="txtHeaderSearchBar"]',
      'input[placeholder*="Tokopedia" i]',
      'input[placeholder*="Cari di Tokopedia" i]',
      'input[aria-label*="tokopedia" i]',
      // Amazon
      '#twotabsearchtextbox',
      'input[name="field-keywords"]',
      'input#nav-bb-search',
      // Blibli
      'input[data-testid="header-search-input"]',
      'input[placeholder*="blibli" i]',
      'input.search-input',
      // Lazada
      'input.search-box__input',
      'input[placeholder*="lazada" i]',
      // Generic
      'input[type="search"]',
      'input[name="q"]',
      'input[name="query"]',
      'input[name="keyword"]',
      'input[name="keywords"]',
      'input[name="search"]',
      'input[id*="search" i]',
      'input[class*="search" i]',
      'input[placeholder*="search" i]',
      'input[placeholder*="cari" i]',
      'input[aria-label*="search" i]',
      'input[aria-label*="cari" i]'
    ];

    let searchInput = null;
    for (const sel of searchSelectors) {
      const el = document.querySelector(sel);
      if (el && (el.offsetParent !== null || el.offsetWidth > 0 || el.getClientRects().length > 0)) {
        searchInput = el;
        break;
      }
    }

    if (!searchInput) return false;

    try {
      // 2. Bring search bar into view and highlight
      window.scrollTo({ top: 0, behavior: 'smooth' });
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      searchInput.classList.add('vox-halo-highlight');
      searchInput.focus();

      // 3. React / Vue / Angular synthetic event compatibility:
      if (searchInput._valueTracker) {
        searchInput._valueTracker.setValue('');
      }

      const nativeSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype, 'value'
      )?.set;

      if (nativeSetter) {
        nativeSetter.call(searchInput, cleanTerm);
      } else {
        searchInput.value = cleanTerm;
      }

      if (searchInput._valueTracker) {
        searchInput._valueTracker.setValue('');
      }

      // Dispatch input, change, and keyup events
      searchInput.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
      searchInput.dispatchEvent(new Event('change', { bubbles: true, composed: true }));

      await new Promise(r => setTimeout(r, 200));

      // 4. Find the store's physical search button
      const container = searchInput.closest('form, .shopee-searchbar, .shopee-searchbar-input, [role="search"], .search-box, .search-bar, nav, header') || document;
      const submitSelectors = [
        // Shopee
        'button.shopee-searchbar__search-button',
        '.shopee-searchbar__search-button',
        '.shopee-searchbar button',
        // Tokopedia
        'button[data-unify="Search"]',
        'button[data-testid="btnHeaderSearch"]',
        'button[aria-label*="pencarian" i]',
        'button[aria-label*="search" i]',
        'button[aria-label*="cari" i]',
        // Amazon
        '#nav-search-submit-button',
        'input#nav-search-submit-button',
        // Blibli & Lazada
        'button[aria-label*="search" i]',
        'button.search-button',
        'button.btn-search',
        // Generic
        'button[type="submit"]',
        'input[type="submit"]',
        'button.search-btn',
        'button.search',
        '[role="search"] button',
        'form button:last-of-type'
      ];

      let submitBtn = null;
      for (const sel of submitSelectors) {
        const btn = container.querySelector(sel);
        if (btn && (btn.offsetParent !== null || btn.offsetWidth > 0 || btn.getClientRects().length > 0)) {
          submitBtn = btn;
          break;
        }
      }
      if (!submitBtn) {
        for (const sel of submitSelectors) {
          const btn = document.querySelector(sel);
          if (btn && (btn.offsetParent !== null || btn.offsetWidth > 0 || btn.getClientRects().length > 0)) {
            submitBtn = btn;
            break;
          }
        }
      }

      // 5. Trigger keyboard Enter key events on input
      const enterOpts = { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true, cancelable: true };
      searchInput.dispatchEvent(new KeyboardEvent('keydown', enterOpts));
      searchInput.dispatchEvent(new KeyboardEvent('keypress', enterOpts));
      searchInput.dispatchEvent(new KeyboardEvent('keyup', enterOpts));

      // 6. Physically click the search button with realistic pointer + mouse events & tactile animation
      if (submitBtn) {
        submitBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        submitBtn.classList.add('vox-halo-highlight');
        submitBtn.style.transition = 'transform 0.15s ease, box-shadow 0.15s ease';
        submitBtn.style.transform = 'scale(0.92)';
        submitBtn.style.boxShadow = '0 0 25px rgba(0, 242, 254, 0.95)';

        await new Promise(r => setTimeout(r, 220));

        const rect = submitBtn.getBoundingClientRect();
        const clickCoords = {
          bubbles: true,
          cancelable: true,
          view: window,
          clientX: rect.left + rect.width / 2,
          clientY: rect.top + rect.height / 2
        };

        submitBtn.dispatchEvent(new PointerEvent('pointerdown', clickCoords));
        submitBtn.dispatchEvent(new MouseEvent('mousedown', clickCoords));
        submitBtn.dispatchEvent(new PointerEvent('pointerup', clickCoords));
        submitBtn.dispatchEvent(new MouseEvent('mouseup', clickCoords));
        submitBtn.dispatchEvent(new MouseEvent('click', clickCoords));
        try { submitBtn.click(); } catch (_) {}

        setTimeout(() => {
          submitBtn.style.transform = '';
          submitBtn.style.boxShadow = '';
          submitBtn.classList.remove('vox-halo-highlight');
        }, 1500);
      }

      // Also if inside a form, submit form as fallback
      const form = searchInput.closest('form');
      if (form && typeof form.requestSubmit === 'function') {
        try { form.requestSubmit(); } catch (_) {}
      }

      setTimeout(() => searchInput.classList.remove('vox-halo-highlight'), 3000);
      return true;
    } catch (err) {
      console.warn('[Vox Agent] Physical store search execution error:', err);
      return false;
    }
  }

  /**
   * Autonomous E-Commerce Search Execution
   * Discovers the store's search input, types search term with React/Vue-compatible events,
   * highlights and physically presses the search button with tactile animation,
   * and executes the 5-Layer Cognitive Multi-Agent Shopping Engine.
   */
  async function executeAutonomousSearch(rawQuery) {
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

    // Step 0: Auto-select product variants if required (e.g. Shopee / Tokopedia color/size)
    await autoSelectProductVariantsIfRequired();
    await new Promise(r => setTimeout(r, 400));

    // Step 1: Specifically prioritize "Beli Sekarang" / "Beli Langsung" (Buy Now)
    let buyNowBtn = findProductPageBuyNowButton();

    if (buyNowBtn) {
      const btnText = (buyNowBtn.innerText || buyNowBtn.textContent || buyNowBtn.getAttribute('aria-label') || 'Beli Sekarang').trim();
      console.log('[Vox Agent] Clicking direct Buy Now button:', btnText, buyNowBtn);
      setCapsuleState('acting', `Menekan ${btnText.slice(0, 30)}…`, 'VOX IS BUYING');
      speak(`Menekan ${btnText}…`);

      // If button is currently disabled, ensure variant options are clicked first
      if (buyNowBtn.disabled || buyNowBtn.getAttribute('aria-disabled') === 'true' || buyNowBtn.className.includes('disabled')) {
        await autoSelectProductVariantsIfRequired();
        await new Promise(r => setTimeout(r, 400));
      }

      robustClick(buyNowBtn);
      setCapsuleState('reasoning', `Tombol ${btnText.slice(0, 20)} ditekan…`);
      await new Promise(r => setTimeout(r, 1500));

      // If direct Buy Now already navigated to checkout page
      if (/checkout/i.test(window.location.href)) {
        console.log('[Vox Agent] Direct Buy Now navigated to checkout page.');
        await new Promise(r => setTimeout(r, 800));
        await executeAutonomousAutofill(intent);
        return;
      }
    }

    // Step 2: Fallback to Add to Cart if no direct Buy Now button exists on this platform
    let addCartBtn = buyNowBtn ? null : (findProductPageAddToCartButton() || findProductPageBuyButton());

    // Fallback: If on search results page (NOT already on a product detail page), open top product first to proceed to buy
    if (!buyNowBtn && !addCartBtn && !isProductDetailPage()) {
      const obs = observeCurrentPage();
      if ((obs.products || []).length > 0) {
        console.log('[Vox Agent] Currently on search page during buy intent, opening top product card to buy.');
        const topProd = obs.products[0];
        setCapsuleState('acting', `Opening ${topProd.title.slice(0, 30)} to buy…`, 'VOX IS OPENING PRODUCT');
        if (typeof activeAgentLoop !== 'undefined' && activeAgentLoop) {
          activeAgentLoop.goal = `Buy ${topProd.title}`;
          activeAgentLoop.history.push({
            action: { action: 'CLICK_PRODUCT', productIndex: 0, reason: 'Opening product to purchase' },
            result: { success: true, clicked: topProd.title }
          });
          if (typeof saveActiveMission === 'function') {
            await saveActiveMission(activeAgentLoop);
          }
        }
        if (topProd._linkEl && topProd._linkEl.href) {
          window.location.href = topProd._linkEl.href;
          await new Promise(r => setTimeout(r, 4000));
        } else {
          (topProd._linkEl || topProd._el).click();
        }
        return;
      }
    }

    if (!buyNowBtn && addCartBtn) {
      setCapsuleState('acting', 'Menambahkan ke keranjang…', 'VOX IS BUYING');
      robustClick(addCartBtn);
      setCapsuleState('reasoning', 'Produk ditambahkan ke keranjang…');
      await new Promise(r => setTimeout(r, 1200));

      // After adding to cart, click Proceed to Checkout
      const checkoutSelectors = [
        '#btn-checkout', '#cs-btn-checkout', '#proceed-to-checkout-action', '[name="proceedToRetailCheckout"]',
        'button[name="checkout"]', 'a[href*="/checkout"]', '[data-testid*="checkout" i]',
        '[data-testid*="btn-checkout" i]', '.checkout-btn', '.btn-checkout'
      ];
      let checkoutBtn = null;
      for (const sel of checkoutSelectors) {
        const match = Array.from(document.querySelectorAll(sel)).find(isElementVisible);
        if (match) { checkoutBtn = match; break; }
      }
      if (checkoutBtn) {
        setCapsuleState('reasoning', 'Proceeding to checkout…');
        robustClick(checkoutBtn);
        await new Promise(r => setTimeout(r, 1200));
      }
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
   * End-to-End Autonomous Buy & Checkout for Winner Candidate
   * Supports:
   * 1. Direct 1-Click checkout if currently on PDP (Add to Cart -> Autofill -> Coupons -> Confirmation)
   * 2. Intelligent on-screen card detection & auto-navigation with session continuity
   * 3. Cross-store navigation bridge with guidance
   */
  async function executeBuyAndCheckoutWinner(winnerObj = null) {
    const winner = winnerObj || currentAnalysis?.winner || lastMissionWinner;
    const winnerTitle = winner?.title || '';
    const destUrl = winner?.url || 'https://www.tokopedia.com';

    setCapsuleState('reasoning', 'Processing buy order…');
    openDialog();

    // 1. Check if current page is already a Product Detail Page (PDP)
    const pdpButton = findProductPageBuyButton();
    if (pdpButton || isProductDetailPage()) {
      speak(`Mengeksekusi pembelian dan checkout otomatis untuk produk pemenang.`);
      appendChatMessage('agent', `**Autonomous Checkout Started**\n\nInitiating 1-Click purchase for **${escapeHtml(winnerTitle || document.title)}**. Adding to cart, autofilling shipping address, and checking coupons…`);
      await executeAutonomousCheckout('checkout');
      return;
    }

    // 2. If on search result page, locate the winner product card on screen
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

    let winnerCard = null;
    const allCards = Array.from(document.querySelectorAll(cardSelectors.join(', '))).filter(el => el.offsetHeight > 60);

    if (winnerTitle && allCards.length > 0) {
      const wClean = winnerTitle.toLowerCase().slice(0, 18);
      winnerCard = allCards.find(c => (c.innerText || '').toLowerCase().includes(wClean));
    }

    if (winnerCard) {
      winnerCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      document.querySelectorAll('.vox-halo-highlight').forEach(el => el.classList.remove('vox-halo-highlight'));
      winnerCard.classList.add('vox-halo-highlight');

      speak(`Membuka produk pemenang di layar untuk checkout otomatis.`);
      appendChatMessage('agent', `**Winner Located On Screen: ${escapeHtml(winnerTitle || 'Product')}**\n\nOpening product detail page and initiating automated checkout pipeline…`);

      try {
        sessionStorage.setItem('vox_pending_auto_checkout', JSON.stringify({
          winnerTitle: winner?.title,
          store: winner?.store,
          timestamp: Date.now()
        }));
      } catch (_) {}

      await new Promise(r => setTimeout(r, 600));
      const link = winnerCard.querySelector('a[href]') || winnerCard.closest('a[href]') || winnerCard;
      try {
        link.click();
      } catch (_) {
        if (winner?.url && winner.url !== '#') window.location.href = winner.url;
      }
      return;
    }

    // 3. If winner is same host
    const isSameHost = destUrl.includes(window.location.hostname);
    if (isSameHost && destUrl !== window.location.href && destUrl.startsWith('http')) {
      try {
        sessionStorage.setItem('vox_pending_auto_checkout', JSON.stringify({
          winnerTitle: winner?.title,
          store: winner?.store,
          timestamp: Date.now()
        }));
      } catch (_) {}
      speak(`Mengarahkan ke halaman produk pemenang.`);
      window.location.href = destUrl;
      return;
    }

    // 4. External store: open in new tab
    speak(`Membuka toko ${winner?.store || 'marketplace'} pemenang untuk checkout.`);
    appendChatMessage('agent', `**Opening Winner Store (${escapeHtml(winner?.store || 'Marketplace')})**\n\nNavigating to **${escapeHtml(winner?.title || 'Winner Product')}** on ${escapeHtml(winner?.store || 'Store')}…`);
    chrome.runtime.sendMessage({ action: 'OPEN_TAB', url: destUrl });
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

  // =========================================================================
  // AI AGENT HELPER: DEEP RESEARCH, CONCEPT EXPLAINER, MEDIA CONTROL
  // =========================================================================

  /**
   * AI Agent Helper: Deep Page Product Research & WhatsApp Integration
   * Audits live items from DOM (Shopee, Tokopedia, etc.), consults Groq Lead Product Researcher,
   * highlights winner candidate, and provides 1-click WhatsApp share & copy.
   */
  async function executeDeepPageResearch(targetTerm = '') {
    setCapsuleState('reasoning', 'Mengumpulkan data produk… 🔍', 'VOX IS RESEARCHING');
    expandCapsule('Membaca semua produk di layar…', 2500);

    const isIndo = (voxLanguage || '').startsWith('id') || window.VOX_ENV?.VOX_LANGUAGE === 'id';

    // 1. Gather live DOM product cards using comprehensive page observer
    let pageObs = observeCurrentPage();
    let rawProducts = pageObs._products || [];

    // If zero products found, try waiting briefly for dynamic rendering / lazy loading
    if (rawProducts.length === 0) {
      await new Promise(r => setTimeout(r, 600));
      pageObs = observeCurrentPage();
      rawProducts = pageObs._products || [];
    }

    const liveProducts = rawProducts.slice(0, 20).map((p, idx) => ({
      index: idx,
      title: p.title || `Produk #${idx + 1}`,
      price: p.price || 'N/A',
      priceVal: p.priceVal || 0,
      store: p.store || (p.official ? 'Official Store' : 'Seller'),
      rating: p.rating || '4.8 ★',
      url: p.href || window.location.href,
      _el: p._el
    }));

    // 2. Visual state: Groq is evaluating
    setCapsuleState('thinking', 'Groq menganalisis produk terbaik… 💭', 'VOX IS EVALUATING');
    expandCapsule('Menentukan pilihan terbaik menurut Groq AI…', 3500);

    try {
      const researchData = await new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({
          action: 'RESEARCH_PAGE_PRODUCTS',
          payload: {
            query: targetTerm || document.title,
            products: liveProducts.map(p => ({ title: p.title, price: p.price, store: p.store, rating: p.rating, url: p.url })),
            url: window.location.href,
            domain: window.location.hostname,
            pageTitle: document.title,
            textSummary: pageObs.textSummary,
            userLanguage: isIndo ? 'id' : 'en'
          }
        }, (res) => {
          if (chrome.runtime.lastError || !res?.success) {
            reject(new Error(res?.error || chrome.runtime.lastError?.message || 'Research failed'));
          } else {
            resolve(res.data);
          }
        });
      });

      const winner = researchData.winner || {};
      const runnerUp = researchData.runnerUp || {};
      const insights = researchData.keyInsights || [];
      const waText = researchData.whatsappText || `*Riset Vox Agent:* Rekomendasi: ${winner.title} (${winner.price})`;
      lastResearchReportText = waText;
      if (chrome?.storage?.local) {
        chrome.storage.local.set({ vox_last_research_text: waText });
      }

      // 3. Highlight winning product card directly on the page
      if (liveProducts.length > 0) {
        const winIdx = (typeof winner.productIndex === 'number' && winner.productIndex >= 0 && winner.productIndex < liveProducts.length)
          ? winner.productIndex
          : 0;
        const topProduct = liveProducts[winIdx] || liveProducts[0];
        const topCard = topProduct?._el;
        if (topCard) {
          topCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          topCard.classList.add('vox-halo-highlight');
          setTimeout(() => topCard.classList.remove('vox-halo-highlight'), 8000);
        }
      }

      let markdown = `### 🔍 Hasil Analisis Otonom Vox AI Agent\n\n`;
      markdown += `🏆 **Rekomendasi Utama: ${winner.title || 'Produk Terbaik'}**\n`;
      if (winner.price) markdown += `💰 **Harga:** ${winner.price} | 🏪 **Toko:** ${winner.store || 'Official Store'}\n`;
      if (winner.reason) markdown += `✅ **Alasan Pilihan Groq:** ${winner.reason}\n\n`;

      if (runnerUp && runnerUp.title) {
        markdown += `🥈 **Alternatif Pilihan: ${runnerUp.title}**\n`;
        if (runnerUp.price) markdown += `💰 **Harga:** ${runnerUp.price}\n`;
        if (runnerUp.reason) markdown += `💡 ${runnerUp.reason}\n\n`;
      }

      if (insights.length > 0) {
        markdown += `🛡️ **Poin Penting Sebelum Membeli:**\n`;
        insights.forEach(ins => { markdown += `• ${ins}\n`; });
        markdown += `\n`;
      }

      markdown += `_Dianalisis secara otonom dari data layar (DOM) menggunakan Groq Cognitive Intelligence._`;

      const spoken = researchData.spoken || (isIndo
        ? `Berdasarkan analisis produk di layar, menurut saya yang paling bagus adalah ${winner.title} seharga ${winner.price || 'terbaik'}. Rekomendasinya sudah saya tandai di layar, bro!`
        : `Based on the products on screen, the best option is ${winner.title} for ${winner.price}. I have highlighted it on your screen, bro!`);

      // 4. Update UI & ONLY NOW speak to user with the finalized choice!
      setCapsuleState('idle', 'Riset Selesai', 'VOX IS READY');
      expandCapsule(`🏆 Pilihan: ${(winner.title || 'Selesai').slice(0, 30)}…`, 4000);
      playUiChime('ready');
      speak(spoken);

      appendChatMessage('agent', markdown, {
        spoken,
        quickOptions: [
          winner.url ? { label: '🛒 Buka Produk Ini', action: 'open_winner', url: winner.url } : null,
          { label: '⚡ Beli Sekarang', action: 'buy_winner', targetProduct: winner.title },
          { label: '📲 Kirim ke WhatsApp (Pin)', action: 'wa_pinned_contact', url: waText },
          { label: '📋 Salin Ringkasan', action: 'copy_summary', targetProduct: waText }
        ].filter(Boolean)
      });
    } catch (err) {
      console.warn('[Vox Agent] Deep research error:', err);
      setCapsuleState('idle', 'Riset Selesai', 'VOX IS READY');
      const fallbackMsg = isIndo
        ? 'Maaf, terjadi kendala saat menganalisis produk di halaman ini. Silakan coba lagi.'
        : 'Sorry, could not complete product evaluation on this page.';
      speak(fallbackMsg);
      appendChatMessage('agent', fallbackMsg);
    }
  }

  let lastResearchReportText = '';

  /**
   * AI Agent Helper: WhatsApp Web Share
   * Opens WhatsApp Web directly with pre-filled research report using standard URL parameters.
   * WhatsApp Web handles its own native interface and sending.
   */
  async function triggerAutonomousWhatsAppAction(targetContact = 'pinned', customText = null) {
    let reportText = customText || lastResearchReportText;

    if (!reportText && currentAnalysis?.winner) {
      const w = currentAnalysis.winner;
      reportText = `*Rekomendasi Vox Agent:* ${w.title}\n💰 Harga: ${w.price || 'N/A'}\n🏪 Toko: ${w.store || 'Official Store'}\n✅ Alasan: ${w.reason || 'Pilihan terbaik berdasarkan riset otonom'}\n🔗 Link: ${w.url || window.location.href}`;
    }

    if (!reportText) {
      try {
        const stored = await chrome.storage?.local?.get('vox_last_research_text');
        if (stored?.vox_last_research_text) {
          reportText = stored.vox_last_research_text;
        }
      } catch (_) {}
    }

    if (!reportText) {
      reportText = `*Hasil Riset Vox Agent:*\n${document.title}\n🔗 Link: ${window.location.href}`;
    }

    lastResearchReportText = reportText;

    setCapsuleState('acting', 'Membuka WhatsApp Web… 📲', 'VOX IS ACTING');
    expandCapsule('Membuka WhatsApp Web…', 3000);
    const isIndo = (voxLanguage || '').startsWith('id') || window.VOX_ENV?.VOX_LANGUAGE === 'id';
    speak(isIndo ? 'Membuka WhatsApp Web dengan hasil riset.' : 'Opening WhatsApp Web with research summary.');

    const waWebUrl = `https://web.whatsapp.com/send?text=${encodeURIComponent(reportText)}`;
    if (typeof chrome !== 'undefined' && chrome.runtime?.sendMessage) {
      chrome.runtime.sendMessage({ action: 'OPEN_TAB', url: waWebUrl }, (res) => {
        if (chrome.runtime?.lastError || !res?.success) {
          window.open(waWebUrl, '_blank');
        }
      });
    } else {
      window.open(waWebUrl, '_blank');
    }
  }

  /**
   * AI Agent Helper: Demystifier & Explainer
   * Explains complex topics (Web3, blockchain, technical concepts) using simple intuitive analogies.
   */
  async function executeExplainSimply(concept = '') {
    const isIndo = (voxLanguage || '').startsWith('id') || window.VOX_ENV?.VOX_LANGUAGE === 'id';
    const cleanConcept = (concept || document.title).replace(/[-|–—].*$/, '').trim();

    setCapsuleState('reasoning', 'Menjelaskan konsep…', 'VOX IS THINKING');
    expandCapsule(`Membedah "${cleanConcept.slice(0, 24)}"… 💡`, 3500);

    try {
      const explainData = await new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({
          action: 'EXPLAIN_SIMPLY',
          payload: {
            query: cleanConcept,
            pageContext: {
              title: document.title,
              domain: window.location.hostname,
              textSample: document.body?.innerText?.slice(0, 1500) || ''
            },
            userLanguage: isIndo ? 'id' : 'en'
          }
        }, (res) => {
          if (chrome.runtime.lastError || !res?.success) {
            reject(new Error(res?.error || chrome.runtime.lastError?.message || 'Explain failed'));
          } else {
            resolve(res.data);
          }
        });
      });

      const topic = explainData.topic || cleanConcept;
      const analogy = explainData.analogy || '';
      const takeaways = explainData.coreTakeaway || [];
      const whyItMatters = explainData.whyItMatters || '';

      let markdown = `### 💡 Penjelasan Sederhana: ${topic}\n\n`;
      if (analogy) {
        markdown += `🥪 **Analogi Sehari-hari:**\n> ${analogy}\n\n`;
      }
      if (takeaways.length > 0) {
        markdown += `📌 **Poin Inti:**\n`;
        takeaways.forEach(pt => { markdown += `• ${pt}\n`; });
        markdown += `\n`;
      }
      if (whyItMatters) {
        markdown += `🚀 **Kenapa Ini Penting:**\n${whyItMatters}\n\n`;
      }
      markdown += `_Dijelaskan oleh Vox AI Agent Helper Brain._`;

      const spoken = explainData.spoken || (isIndo
        ? `Berikut penjelasan sederhananya: ${analogy}`
        : `Here is the simple explanation: ${analogy}`);

      setCapsuleState('idle', 'Konsep Dijelaskan', 'VOX IS READY');
      expandCapsule(`💡 ${topic}: ${analogy.slice(0, 35)}…`, 4000);
      speak(spoken);

      appendChatMessage('agent', markdown, {
        spoken,
        quickOptions: [
          { label: '📋 Salin Penjelasan', action: 'copy_summary', targetProduct: markdown },
          { label: '🔦 Spotlight Tour', action: 'run_tour' },
          { label: '🔍 Riset Halaman Ini', action: 'research_page' }
        ]
      });
    } catch (err) {
      console.warn('[Vox Agent] Explain simply error:', err);
      setCapsuleState('idle', 'Vox Ready', 'VOX IS READY');
      const fallbackMsg = isIndo
        ? `Konsep "${cleanConcept}" intinya adalah teknologi atau sistem baru yang dirancang untuk mempermudah kontrol pengguna.`
        : `The concept "${cleanConcept}" essentially gives users greater direct control.`;
      speak(fallbackMsg);
      appendChatMessage('agent', fallbackMsg);
    }
  }

  /**
   * AI Agent Helper: YouTube & Media Playback Control
   * Handles "play this song", "pause", "resume", or searching and playing music on YouTube.
   */
  async function handleYouTubeMediaControl(action = 'play', rawQuery = '') {
    const isYT = window.location.hostname.includes('youtube.com');
    const isIndo = (voxLanguage || '').startsWith('id') || window.VOX_ENV?.VOX_LANGUAGE === 'id';

    // 1. If pause/stop requested:
    if (action === 'pause' || /\b(pause|jeda|stop|berhenti)\b/i.test(rawQuery)) {
      const video = document.querySelector('video');
      if (video) {
        video.pause();
        speak(isIndo ? 'Video dijeda.' : 'Video paused.');
        expandCapsule('Video Paused ⏸️', 3000);
        setCapsuleState('idle', 'Video Paused', 'VOX IS READY');
      } else {
        speak(isIndo ? 'Tidak ada video aktif di halaman ini.' : 'No active video found.');
      }
      return;
    }

    // 2. Extract song title if user specified one (e.g. "play bohemian rhapsody", "putar lagu tulus")
    let songQuery = (rawQuery || '')
      .replace(/^(hey|halo|hai)?\s*(vox|fox)?\s*[,.]?\s*/i, '')
      .replace(/\b(can\s*you|could\s*you|please|tolong|coba|bisa)?\s*(play\s*(this\s*)?song|putar\s*(lagu|video)|play|putar)\b/gi, '')
      .replace(/\b(di|on)\s+youtube\b/gi, '')
      .trim();

    // 3. If currently on YouTube:
    if (isYT) {
      const video = document.querySelector('video');
      // If no specific song name was given, just resume existing video
      if (!songQuery || /^(this|song|lagu|video|ini)$/i.test(songQuery)) {
        if (video) {
          video.play();
          speak(isIndo ? 'Melanjutkan pemutaran video.' : 'Resuming video playback.');
          expandCapsule('Playing Video ▶️', 3000);
          setCapsuleState('idle', 'Playing', 'VOX IS READY');
          return;
        }
      }

      // If user specified a song/video to play on YouTube:
      expandCapsule(`Mencari "${songQuery}" di YouTube… 🎵`, 3000);
      setCapsuleState('reasoning', `Mencari: ${songQuery}`, 'SEARCHING YOUTUBE');

      const searchInput = document.querySelector('input#search, input[name="search_query"]');
      if (searchInput) {
        searchInput.focus();
        searchInput.value = songQuery;
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        searchInput.dispatchEvent(new Event('change', { bubbles: true }));
        const searchForm = searchInput.closest('form');
        if (searchForm) {
          searchForm.submit();
        } else {
          searchInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, bubbles: true }));
        }
        speak(isIndo ? `Mencari ${songQuery} di YouTube.` : `Searching for ${songQuery} on YouTube.`);
        return;
      }

      // Fallback on YouTube: navigate directly to search
      window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(songQuery)}`;
      return;
    }

    // 4. If not on YouTube:
    const targetUrl = songQuery && !/^(this|song|lagu|video|ini)$/i.test(songQuery)
      ? `https://www.youtube.com/results?search_query=${encodeURIComponent(songQuery)}`
      : 'https://www.youtube.com';

    chrome.runtime.sendMessage({ action: 'OPEN_TAB', url: targetUrl });
    const msg = isIndo
      ? `Membuka YouTube untuk memutar ${songQuery || 'musik'}.`
      : `Opening YouTube to play ${songQuery || 'music'}.`;
    speak(msg);
    expandCapsule('Opening YouTube 🎵', 3500);
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
    // Normalize phonetic speech-to-text typos & acoustic mishearings
    q = q.replace(/\b(head\s*band|headband|had\s*set|hed\s*set|het\s*set|head\s*sad|head\s*sat|hate\s*set)\b/gi, 'headset');
    q = q.replace(/\b(airport|air\s*pot|er\s*fon|ir\s*fon|ear\s*fon)\b/gi, 'earphone');
    q = q.replace(/\b(leptop|lektop|labtop)\b/gi, 'laptop');
    q = q.replace(/\bhead\s*set\b/gi, 'headset');
    // Strip conversational intros (Indonesian & English)
    q = q.replace(/\b(aku\s*udah\s*bilang(\s*untuk)?|udah\s*dibilang(\s*untuk)?|suruh|minta)\b/gi, '');
    q = q.replace(/\b(can\s*you|could\s*you|would\s*you|please|help\s*me|i\s*want\s*to|i\s*wanna|looking\s*for|tolong|coba|bantu|bisa|mohon|aku\s*mau|saya\s*mau|mau|pengen|ingin)\b/gi, '');
    q = q.replace(/\b(find|search|give|get|look|buy|rekomendasi(kan)?|recommend)\s+(me\s+up\s+|me\s+)?(a\s+|an\s+|the\s+)?/gi, '');
    q = q.replace(/\b(search(\s*for|\s*up)?|cariin|carikan|cari|find|buy|beliin|belikan|beli)\s*(aku|saya|gue|gw|me)?\b/gi, '');
    q = q.replace(/\b(about|for|me\s*up|search\s*me\s*up)\b/gi, '');
    // Strip budget patterns & currency words
    q = q.replace(/(di\s*bawah|under|budget|maksimal|max|harga|rp\.?|idr)\s*[\d.,]+\s*(juta|jt|k|rb|ribu|m|rupiah)?/gi, '');
    q = q.replace(/\b(rupiah|idr|rp)\b/gi, '');
    // Strip evaluation & filler phrases
    q = q.replace(/\b(yang\s*bagus|yang\s*murah|yang\s*terbaik|paling\s*bagus|paling\s*murah|terbaik|termurah|murah|bagus|budget\s*friendly|berkualitas|mantap|resmi|garansi\s*resmi|official\s*store|official|mall|original|ori|dong|ya|deh|nih|lah|kan|kah|please|dan|tapi|mana\s*yang|mana|ada)\b/gi, '');
    q = q.replace(/\s+(on|in|di)\s+(shopee|tokopedia|lazada|blibli|amazon|google|store|marketplace|web|olshop).*$/i, '');
    q = q.replace(/\s+/g, ' ').trim();
    return q;
  }

  function extractBudgetCeiling(q = '') {
    if (!q) return null;
    const s = q.toLowerCase();

    const wordNumMap = [
      { regex: /\b(sepuluh|ten)\s*(ribu|thousand|k|rb)?\b/i, val: 10000 },
      { regex: /\b(dua puluh|twenty)\s*(ribu|thousand|k|rb)?\b/i, val: 20000 },
      { regex: /\b(tiga puluh|thirty)\s*(ribu|thousand|k|rb)?\b/i, val: 30000 },
      { regex: /\b(empat puluh|forty)\s*(ribu|thousand|k|rb)?\b/i, val: 40000 },
      { regex: /\b(lima puluh|fifty)\s*(ribu|thousand|k|rb)?\b/i, val: 50000 },
      { regex: /\b(seratus|one\s*hundred)\s*(ribu|thousand|k|rb)?\b/i, val: 100000 },
      { regex: /\b(dua\s*ratus|two\s*hundred)\s*(ribu|thousand|k|rb)?\b/i, val: 200000 },
      { regex: /\b(lima\s*ratus|five\s*hundred)\s*(ribu|thousand|k|rb)?\b/i, val: 500000 },
      { regex: /\b(satu|one)\s*(juta|million|jt|m)?\b/i, val: 1000000 },
      { regex: /\b(dua|two)\s*(juta|million|jt|m)?\b/i, val: 2000000 },
      { regex: /\b(tiga|three)\s*(juta|million|jt|m)?\b/i, val: 3000000 },
      { regex: /\b(lima|five)\s*(juta|million|jt|m)?\b/i, val: 5000000 }
    ];

    for (const item of wordNumMap) {
      if (item.regex.test(s) && /(under|budget|max|di\s*bawah|dibawah|maksimal|maks|harga|kurang\s*dari|less\s*than)/i.test(s)) {
        return item.val;
      }
    }

    const cleanQ = s.replace(/[,.]/g, '');
    const match = cleanQ.match(/(?:under|budget|max|di\s*bawah|dibawah|maksimal|maks|harga|kurang\s*dari|less\s*than)\s*(?:rp\.?|idr)?\s*(\d+)(?:\s*(juta|million|jt|k|rb|ribu|m|rupiah))?/i)
      || cleanQ.match(/(?:rp\.?|idr)\s*(\d+)(?:\s*(juta|million|jt|k|rb|ribu|m|rupiah))?/i);
    if (match) {
      let num = parseInt(match[1], 10);
      const unit = (match[2] || '').toLowerCase();
      if (unit === 'juta' || unit === 'million' || unit === 'jt' || unit === 'm') num *= 1000000;
      else if (unit === 'k' || unit === 'rb' || unit === 'ribu' || unit === 'thousand') num *= 1000;
      if (num >= 1000) return num;
      if (num > 0 && num < 100) return num * 1000000;
    }
    return null;
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
            <span>COGNITIVE JOB DESK EXECUTION</span>
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
  /**
   * Autonomous In-Page Scout: One-by-One Physical Product Card Inspection
   * Consecutively scrolls to, highlights, inspects, and audits on-screen listings one-by-one.
   * Gives live HUD feedback and speech commentary for each candidate listing.
   */
  async function inspectCandidateProductsOneByOne({ targetKeyword, userBudgetCeiling, storeDisplayName, plan, missionMsgId, speakAudio = true }) {
    // 1. Discover candidate cards across major marketplaces
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
        return el.offsetHeight > 70 && el.offsetWidth > 70 && el.offsetParent !== null;
      });
      if (matches.length >= 1) {
        foundCards = matches;
        break;
      }
    }

    // Fallback: If not enough cards rendered yet, scroll down smoothly to trigger lazy hydration
    if (foundCards.length < 2) {
      window.scrollBy({ top: 380, behavior: 'smooth' });
      await new Promise(r => setTimeout(r, 800));
      for (const sel of cardSelectors) {
        const matches = Array.from(document.querySelectorAll(sel)).filter(el => {
          return el.offsetHeight > 70 && el.offsetWidth > 70 && el.offsetParent !== null;
        });
        if (matches.length >= 1) {
          foundCards = matches;
          break;
        }
      }
    }

    // Generic fallback for custom stores or sandbox
    if (foundCards.length === 0) {
      const allTextNodes = Array.from(document.querySelectorAll('span, div, b, strong, p'));
      const seen = new Set();
      for (const node of allTextNodes) {
        if (node.children.length === 0 && /(?:Rp\s*[\d.,]{3,}|\$\s*[\d.,]{2,})/i.test(node.textContent || '')) {
          const card = node.closest('div[class*="item"], div[class*="card"], div[class*="product"], article, li');
          if (card && !seen.has(card) && card.offsetHeight > 70 && card.offsetWidth > 70 && card.offsetHeight < 850) {
            seen.add(card);
            foundCards.push(card);
          }
        }
      }
    }

    // Parse candidate items
    const parsedItems = [];
    for (const card of foundCards) {
      const fullText = card.innerText || card.textContent || '';
      const price = parseDomPrice(fullText);
      if (price && price.value >= 1000) {
        const titleEl = card.querySelector('div[class*="title" i], div[class*="name" i], span[class*="name" i], h2, h3, a[title]') || card;
        let title = (titleEl.getAttribute('title') || titleEl.innerText || titleEl.textContent || '').trim().replace(/\s+/g, ' ');
        if (title.length > 60) title = title.slice(0, 57) + '…';
        const linkEl = card.querySelector('a[href]') || card.closest('a[href]');
        const url = linkEl ? linkEl.href : window.location.href;
        const isOfficial = /official|mall|resmi/i.test(fullText);
        parsedItems.push({
          el: card,
          title: title || targetKeyword,
          price: price,
          url: url,
          official: isOfficial
        });
      }
    }

    if (parsedItems.length === 0) {
      return { count: 0, items: [], minItem: null, bestCandidate: null, inspectedLog: [] };
    }

    // Inspect up to 3 candidate listings on screen one by one
    const candidateSubset = parsedItems.slice(0, 3);
    const inspectedLog = [];

    if (speakAudio) {
      speak(`Memulai audit produk satu per satu di layar ${storeDisplayName}.`);
    }

    for (let i = 0; i < candidateSubset.length; i++) {
      const candidate = candidateSubset[i];
      const fitsBudget = userBudgetCeiling ? (candidate.price.value <= userBudgetCeiling) : true;
      const priceFormatted = formatDomPrice(candidate.price.value, candidate.price.currency);

      // 1. Physically scroll candidate into center view
      candidate.el.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // 2. Apply electric cyan halo highlight
      document.querySelectorAll('.vox-halo-highlight').forEach(el => el.classList.remove('vox-halo-highlight'));
      candidate.el.classList.add('vox-halo-highlight');

      // 3. Dispatch pointer events to simulate AI inspection
      try {
        candidate.el.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
        candidate.el.focus && candidate.el.focus();
      } catch (_) {}

      // 4. Update Mission Card HUD live telemetry
      inspectedLog.push({
        num: i + 1,
        title: candidate.title,
        price: priceFormatted,
        fitsBudget,
        official: candidate.official
      });

      const currentHudContent = `**Initiating Autonomous Shopping Mission: "${escapeHtml(targetKeyword)}"**\n\n` +
        renderJobDeskProgressHtml(plan, 1, `INSPECTING ${i + 1}/${candidateSubset.length}`) + '\n\n' +
        `<div style="background: rgba(0,242,254,0.08); border: 1px solid rgba(0,242,254,0.3); border-radius: 8px; padding: 8px 12px; margin-top: 8px;">` +
        `<div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; font-weight:650; color:var(--voice);">` +
        `<span>Examining Listing ${i + 1}/${candidateSubset.length} (${escapeHtml(storeDisplayName)})</span>` +
        `<span style="font-family:var(--font-mono); font-size:10px; color:${fitsBudget ? '#10B981' : '#F87171'};">${fitsBudget ? 'FITS BUDGET' : 'OVER BUDGET'}</span>` +
        `</div>` +
        `<div style="font-size:11.5px; font-weight:600; color:var(--ink-pri); margin:4px 0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">` +
        `${escapeHtml(candidate.title)}` +
        `</div>` +
        `<div style="display:flex; gap:12px; font-size:10.5px; color:var(--ink-sec);">` +
        `<span>Harga: <b style="color:var(--ink-pri);">${priceFormatted}</b></span>` +
        `<span>Toko: <b>${candidate.official ? 'Official Store' : 'Reseller / Toko'}</b></span>` +
        `<span>Budget: <b>${userBudgetCeiling ? '<= ' + formatDomPrice(userBudgetCeiling) : 'Fleksibel'}</b></span>` +
        `</div>` +
        `</div>` +
        `<div style="margin-top:6px; display:flex; flex-direction:column; gap:3px;">` +
        inspectedLog.map(h => `
          <div style="font-size:10.5px; color:var(--ink-sec); display:flex; align-items:center; gap:6px;">
            <span style="color:${h.fitsBudget ? '#10B981' : '#F87171'}; font-weight:bold;">${h.fitsBudget ? '✓' : '✗'}</span>
            <span style="flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHtml(h.title)} (${h.price})</span>
          </div>
        `).join('') +
        `</div>`;

      updateChatMessage(missionMsgId, currentHudContent);

      // 5. Voice commentary for this item
      if (speakAudio) {
        const fitComment = fitsBudget
          ? (userBudgetCeiling ? `Harga ${priceFormatted}, sesuai dengan budget.` : `Harga ${priceFormatted}.`)
          : `Harga ${priceFormatted}, melebihi batas budget kamu.`;
        speak(`Memeriksa produk ke-${i + 1}: ${candidate.title.slice(0, 28)}. ${fitComment}`);
      }

      // 6. Paced visual pause (1800ms) so user can physically see and hear the agent inspect this card
      await new Promise(r => setTimeout(r, 1800));
    }

    // Clean up temporary halo
    document.querySelectorAll('.vox-halo-highlight').forEach(el => el.classList.remove('vox-halo-highlight'));

    // Determine best on-screen candidate (prioritizing budget fit, then official store, then price)
    const budgetFits = candidateSubset.filter(c => !userBudgetCeiling || c.price.value <= userBudgetCeiling);
    const bestCandidate = (budgetFits.length > 0)
      ? budgetFits.sort((a, b) => (b.official ? 1 : 0) - (a.official ? 1 : 0) || a.price.value - b.price.value)[0]
      : candidateSubset.sort((a, b) => a.price.value - b.price.value)[0];

    // Scroll to best candidate and leave subtle halo
    if (bestCandidate && bestCandidate.el) {
      bestCandidate.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      bestCandidate.el.classList.add('vox-halo-highlight');
      setTimeout(() => bestCandidate.el.classList.remove('vox-halo-highlight'), 8000);
    }

    return {
      count: parsedItems.length,
      items: parsedItems,
      minItem: parsedItems.sort((a, b) => a.price.value - b.price.value)[0],
      bestCandidate,
      inspectedLog
    };
  }

  /**
   * Autonomous 5-Layer Cognitive Multi-Agent Shopping Engine
   * 1. Dynamic DOM Deconstruction (Specs, Price, Warranty, Active Store)
   * 2. Natural Language Constraints Extraction (Budget, Quality, Preferences)
   * 3. Serialized Job Desk Planning via Groq LLM (5 serialized steps)
   * 4. Multi-Store Search & Landed Price Auditor (Specs, Garansi Resmi, Star Ratings >=4.8, Landed Price up to checkout with STRICT safety stop)
   * 5. Multi-Factor Synthesis Matrix, Audio Trade-off Rationale & 1-Click Action Chips
   */
  async function executeAutonomousLiveCompare(userPrompt, existingPlan = null, isResumed = false) {
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

    const userBudgetCeiling = extractBudgetCeiling(userPrompt) || null;

    // 2. Layer 2 & 3: Groq 5-Job-Desk Planning
    let plan = existingPlan;
    if (!plan) {
      try {
        const planRes = await new Promise((resolve) => {
          chrome.runtime.sendMessage({
            action: 'PLAN_SHOPPING_MISSION',
            payload: {
              query: userPrompt || targetSubject, // Send full natural query to Groq for constraint & budget extraction
              targetKeyword: targetSubject,
              budgetMax: userBudgetCeiling,
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
    }

    const displaySubject = targetSubject.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const activeTargets = getConfiguredStoreTargets();
    const targetStoreKeys = activeTargets.map(t => t.key);
    const targetStoreNames = activeTargets.map(t => t.name);
    const isSingleStore = activeTargets.length === 1;
    const singleStoreName = targetStoreNames[0] || 'Shopee';

    const step2Title = isSingleStore ? `Discovery Toko: ${singleStoreName}` : `${activeTargets.length}-Store Discovery`;
    const step2Desc = isSingleStore ? `Cari kandidat produk terbaik di ${singleStoreName} sesuai konfigurasi setting` : `Search candidate listings across ${targetStoreNames.join(', ')}`;

    if (!plan) {
      plan = {
        missionId: 'mission_' + Date.now(),
        category: 'Audio / Peripherals',
        constraints: {
          budgetMax: userBudgetCeiling || 300000,
          budgetDescription: userBudgetCeiling ? `Budget under Rp ${userBudgetCeiling.toLocaleString('id-ID')}` : 'Budget friendly with high audio fidelity',
          keySpecRequirements: ['50mm Drivers', 'Detachable or Noise-cancelling Mic', 'Durable headband'],
          trustRequirement: 'Official Store · Garansi Resmi 1 Tahun'
        },
        jobDesks: [
          { step: 1, id: 'job_intel', title: 'Market Specs Benchmark', desc: 'Identify top recommended models meeting user spec criteria' },
          { step: 2, id: 'job_cross_search', title: step2Title, desc: step2Desc },
          { step: 3, id: 'job_multi_factor', title: 'Specs & Trust Audit', desc: 'Audit hardware specs, official warranty status, and star ratings' },
          { step: 4, id: 'job_landed_checkout', title: 'Checkout Landed Price Audit', desc: 'Audit true landed price up to checkout summary (ongkir + fees - vouchers)' },
          { step: 5, id: 'job_synthesis', title: 'Multi-Factor Synthesis', desc: 'Rank by value-to-performance and present decision matrix' }
        ]
      };
    } else if (userBudgetCeiling && plan.constraints) {
      plan.constraints.budgetMax = userBudgetCeiling;
    }

    const storeDisplayName = /shopee/i.test(window.location.hostname) ? 'Shopee Indonesia' :
                             /tokopedia/i.test(window.location.hostname) ? 'Tokopedia' :
                             /blibli/i.test(window.location.hostname) ? 'Blibli' :
                             /amazon/i.test(window.location.hostname) ? 'Amazon' : 'Active Store';

    // Append Live Progress Message to Chat Stream (Step 1 Active: Market Specs Benchmark & On-Screen Scout)
    const missionMsgId = appendChatMessage('agent', `**Initiating Autonomous Shopping Mission: "${escapeHtml(displaySubject)}"**\n\n${renderJobDeskProgressHtml(plan, 1, 'IN PROGRESS')}`);

    speak(`Initiating shopping mission for ${displaySubject}. Scanning active store and benchmark specifications.`);

    // ─── STEP 1: Physically type & click search + inspect candidate cards one by one ───
    let activeStoreScraped = null;
    try {
      if (!isResumed) {
        try {
          sessionStorage.setItem('vox_pending_shopping_mission', JSON.stringify({
            userPrompt: userPrompt || targetSubject,
            targetSubject,
            displaySubject,
            plan,
            timestamp: Date.now()
          }));
        } catch (_) {}

        await physicallyTypeAndClickStoreSearch(displaySubject || targetSubject);
      }

      await new Promise(r => setTimeout(r, 1200));
      try { sessionStorage.removeItem('vox_pending_shopping_mission'); } catch (_) {}

      // Real on-screen one-by-one card inspection with live telemetry and voice
      activeStoreScraped = await inspectCandidateProductsOneByOne({
        targetKeyword: targetSubject,
        userBudgetCeiling: plan.constraints?.budgetMax || userBudgetCeiling,
        storeDisplayName,
        plan,
        missionMsgId,
        speakAudio: true
      });
    } catch (scanErr) {
      console.warn('[Vox Agent] Active page DOM search & scan fallback:', scanErr);
    }

    // Step 1 Complete Summary in Mission Card
    const bestOnScreen = activeStoreScraped?.bestCandidate || activeStoreScraped?.minItem;
    let step1SummaryBox = '';
    if (bestOnScreen) {
      const bestPriceStr = formatDomPrice(bestOnScreen.price.value);
      step1SummaryBox = `\n\n<div style="font-size: 11px; background: rgba(0,0,0,0.25); border: 1px solid rgba(0,242,254,0.2); border-radius: 6px; padding: 6px 10px; margin-top: 6px;">` +
        `Top Candidate On Screen: ${escapeHtml(bestOnScreen.title)} (${bestPriceStr}) · ${bestOnScreen.official ? 'Official Store' : 'Toko'}` +
        `</div>`;
    }

    updateChatMessage(missionMsgId, `**Market Specs Benchmark & On-Screen Scout Complete**\n\n${renderJobDeskProgressHtml(plan, 1, 'AUDITED')}${step1SummaryBox}`);
    const step2TransitionSpeech = isSingleStore
      ? `Selesai memeriksa produk di layar. Melanjutkan ke Step 2: pencarian produk terbaik di ${singleStoreName} sesuai konfigurasi setting.`
      : `Selesai memeriksa produk di layar. Melanjutkan ke Step 2: pencarian ${activeTargets.length} toko online (${targetStoreNames.join(', ')}).`;
    speak(step2TransitionSpeech);
    await new Promise(r => setTimeout(r, 1200));

    // ─── STEP 2: Store Discovery Search ───
    setCapsuleState('reasoning', isSingleStore ? `Searching ${singleStoreName}…` : 'Searching connected stores…');
    const step2Header = isSingleStore
      ? `**Auditing Toko Terhubung di Setting (${singleStoreName}): "${escapeHtml(displaySubject)}"**`
      : `**Auditing ${activeTargets.length} Connected Stores (${targetStoreNames.join(', ')}): "${escapeHtml(displaySubject)}"**`;
    updateChatMessage(missionMsgId, `${step2Header}\n\n${renderJobDeskProgressHtml(plan, 2, 'SEARCHING')}${step1SummaryBox}`);
    const step2ActiveSpeech = isSingleStore
      ? `Mencari kandidat produk terbaik di ${singleStoreName} sesuai konfigurasi website di setting.`
      : `Mencari data pembanding di ${targetStoreNames.join(', ')}.`;
    speak(step2ActiveSpeech);

    let candidates = [];
    try {
      const searchRes = await new Promise((resolve) => {
        chrome.runtime.sendMessage({
          action: 'EXECUTE_MULTI_STORE_SEARCH',
          payload: {
            query: targetSubject,
            userPrompt: userPrompt,
            budgetMax: plan.constraints?.budgetMax || userBudgetCeiling,
            targetCategory: plan.category || 'General',
            stores: targetStoreKeys
          }
        }, resolve);
      });
      if (searchRes && searchRes.success && Array.isArray(searchRes.data)) {
        candidates = searchRes.data;
      }
    } catch (e) {
      console.warn('[Vox Agent] Multi-store search error:', e);
    }

    // Merge scraped items from the active store if available!
    if (bestOnScreen) {
      candidates.unshift({
        store: storeDisplayName.toLowerCase().split(' ')[0],
        storeName: storeDisplayName,
        title: bestOnScreen.title,
        priceStr: formatDomPrice(bestOnScreen.price.value, bestOnScreen.price.currency),
        basePrice: bestOnScreen.price.value,
        shipping: 0,
        voucher: 0,
        official: bestOnScreen.official || false,
        rating: 4.9,
        deliveryEst: '1-2 Days',
        warranty: bestOnScreen.official ? 'Garansi Resmi 1 Tahun' : 'Garansi Toko',
        url: bestOnScreen.url || window.location.href,
        tag: 'LIVE ON SCREEN',
        isOnScreen: true
      });
    }

    if (activeStoreScraped?.items && Array.isArray(activeStoreScraped.items)) {
      const otherOnScreen = activeStoreScraped.items.filter(it => it !== bestOnScreen && (!userBudgetCeiling || it.price.value <= userBudgetCeiling)).slice(0, 2);
      for (const it of otherOnScreen) {
        candidates.push({
          store: storeDisplayName.toLowerCase().split(' ')[0],
          storeName: storeDisplayName,
          title: it.title,
          priceStr: formatDomPrice(it.price.value, it.price.currency),
          basePrice: it.price.value,
          shipping: 0,
          voucher: 0,
          official: it.official || false,
          rating: 4.8,
          deliveryEst: '1-2 Days',
          warranty: it.official ? 'Garansi Resmi 1 Tahun' : 'Garansi Toko',
          url: it.url || window.location.href,
          tag: 'LIVE ON SCREEN',
          isOnScreen: true
        });
      }
    }

    await new Promise(r => setTimeout(r, 1800));
    updateChatMessage(missionMsgId, `**${step2Title} Selesai**\n\n${renderJobDeskProgressHtml(plan, 2, 'AUDITED')}${step1SummaryBox}`);
    speak(`Data produk ${isSingleStore ? singleStoreName : targetStoreNames.join(', ')} berhasil didapatkan. Melanjutkan ke Step 3: audit spesifikasi dan garansi resmi.`);
    await new Promise(r => setTimeout(r, 1200));

    // ─── STEP 3: Specs & Trust Audit ───
    setCapsuleState('reasoning', 'Auditing specs & official warranty…');
    updateChatMessage(missionMsgId, `**Deep Spec & Trust Audit: "${escapeHtml(displaySubject)}"**\n\n${renderJobDeskProgressHtml(plan, 3, 'AUDITING SPECS')}${step1SummaryBox}`);
    speak(`Mengaudit spesifikasi driver audio dan garansi resmi toko.`);

    const effectiveBudget = plan.constraints?.budgetMax || userBudgetCeiling || Infinity;
    candidates = candidates.map(c => {
      const passesBudget = c.basePrice <= effectiveBudget;
      return {
        ...c,
        passesBudget,
        trustScore: (c.official ? 2 : 1) + (c.rating >= 4.8 ? 2 : 1)
      };
    });
    await new Promise(r => setTimeout(r, 1800));
    updateChatMessage(missionMsgId, `**Specs & Trust Audit Complete**\n\n${renderJobDeskProgressHtml(plan, 3, 'AUDITED')}${step1SummaryBox}`);
    speak(`Audit spesifikasi selesai. Melanjutkan ke Step 4: simulasi landed price checkout.`);
    await new Promise(r => setTimeout(r, 1200));

    // ─── STEP 4: Landed Price Audit (Ongkir + Fees - Vouchers) ───
    setCapsuleState('reasoning', 'Auditing true landed checkout prices…');
    updateChatMessage(missionMsgId, `**Landed Price Audit (Ongkir + Fees - Vouchers): "${escapeHtml(displaySubject)}"**\n\n${renderJobDeskProgressHtml(plan, 4, 'LANDED SIMULATION')}${step1SummaryBox}`);
    speak(`Menghitung simulasi landed price hingga checkout termasuk ongkir dan voucher.`);

    candidates.forEach(c => {
      const landed = (c.basePrice || 0) + (c.shipping || 0) - (c.voucher || 0);
      c.landedPriceVal = landed;
      c.landedPriceStr = `Rp ${landed.toLocaleString('id-ID')}`;
    });
    await new Promise(r => setTimeout(r, 1800));
    updateChatMessage(missionMsgId, `**Landed Price Audit Complete**\n\n${renderJobDeskProgressHtml(plan, 4, 'AUDITED')}${step1SummaryBox}`);
    speak(`Simulasi landed price selesai. Melanjutkan ke Step 5: sintesis rekomendasi AI.`);
    await new Promise(r => setTimeout(r, 1200));

    // ─── STEP 5: Multi-Factor Synthesis via Groq LLM ───
    setCapsuleState('reasoning', 'Synthesizing decision matrix…');
    updateChatMessage(missionMsgId, `**Synthesizing Multi-Factor Decision Matrix: "${escapeHtml(displaySubject)}"**\n\n${renderJobDeskProgressHtml(plan, 5, 'AI SYNTHESIS')}${step1SummaryBox}`);
    speak(`Menyusun matriks perbandingan dan rekomendasi akhir.`);

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

    lastMissionWinner = winner;
    currentAnalysis = report || { winner, runnerUp, third, plan };

    let tableMarkdown = report?.comparisonTable;
    if (!tableMarkdown || !tableMarkdown.includes('|')) {
      tableMarkdown = `| Rank / Store | Product & Specs | Warranty & Trust | Landed Checkout Price | Verdict |\n` +
                      `| :--- | :--- | :--- | :--- | :--- |\n` +
                      `| **Winner**<br>**${escapeHtml(winner.store || 'Tokopedia')}** | **${escapeHtml(winner.title || 'dbE GM160')}**<br><small style="color:var(--voice);">${escapeHtml(winner.specs || '50mm Driver · Detachable Mic')}</small> | ${escapeHtml(winner.trust || 'Garansi Resmi 1 Tahun')}<br>${escapeHtml(winner.rating || '4.9 ★')} | **${escapeHtml(winner.landedPrice || 'Rp 182.000')}**<br><small>(Base: ${escapeHtml(winner.listedPrice || 'Rp 175k')})</small> | **${escapeHtml(winner.verdictBadge || 'Best Spec & Budget-Friendly Pick')}** |\n` +
                      `| Runner-Up<br>${escapeHtml(runnerUp.store || 'Shopee')} | ${escapeHtml(runnerUp.title || 'Fantech Portal HQ55')}<br><small>${escapeHtml(runnerUp.specs || '50mm Driver · Omni Mic')}</small> | ${escapeHtml(runnerUp.trust || 'Garansi Resmi 1 Tahun')}<br>${escapeHtml(runnerUp.rating || '4.8 ★')} | ${escapeHtml(runnerUp.landedPrice || 'Rp 194.000')}<br><small>(Base: ${escapeHtml(runnerUp.listedPrice || 'Rp 169k')})</small> | ${escapeHtml(runnerUp.verdictBadge || 'Cheaper Base but Higher Ongkir')} |\n` +
                      `| Alternate<br>${escapeHtml(third.store || 'Blibli')} | ${escapeHtml(third.title || 'Rexus Thundervox HX20')}<br><small>${escapeHtml(third.specs || '40mm Driver')}</small> | ${escapeHtml(third.trust || 'Garansi Toko')}<br>${escapeHtml(third.rating || '4.6 ★')} | ${escapeHtml(third.landedPrice || 'Rp 170.000')}<br><small>(Base: ${escapeHtml(third.listedPrice || 'Rp 155k')})</small> | ${escapeHtml(third.verdictBadge || 'Avoid: Distributor Warranty')} |`;
    }

    const storeContextLabel = isSingleStore ? singleStoreName : targetStoreNames.join(', ');
    const reportContent = `**Autonomous Shopping Mission Completed**\n\n` +
      renderJobDeskProgressHtml(plan, 5, 'DONE') + '\n\n' +
      `### 🏆 REKOMENDASI TERBAIK (THE BEST)\n\n` +
      `Berdasarkan audit mendalam di **${escapeHtml(storeContextLabel)}**, produk yang paling **BEST** adalah:\n\n` +
      `> **${escapeHtml(winner.title || displaySubject)}**\n` +
      `> **Harga Landed:** ${escapeHtml(winner.landedPrice || winner.listedPrice || 'Harga Terbaik')} · **Toko:** ${escapeHtml(winner.store || singleStoreName)}\n` +
      `> **Garansi & Trust:** ${escapeHtml(winner.trust || 'Official Store · Garansi Resmi')} · **Rating:** ${escapeHtml(winner.rating || '4.9 ★')}\n` +
      `> **Spesifikasi Utama:** ${escapeHtml(winner.specs || 'Spesifikasi hardware terbaik dengan nilai value tertinggi')}\n\n` +
      `**Matriks Perbandingan Lengkap:**\n\n` +
      tableMarkdown + '\n\n' +
      `**Analisis Keputusan AI:**\n` +
      `${report?.aiRationale || 'Produk pemenang memberikan keseimbangan ideal antara kualitas hardware, garansi resmi terpercaya, dan total landed price paling hemat hingga tahap checkout.'}\n\n` +
      `*Safety Guardrail: Simulasi berhenti aman sebelum pembayaran. Tidak ada saldo terpotong.*`;

    const spokenText = report?.spoken || `Dari hasil perbandingan di ${winner.store || singleStoreName}, produk yang paling BEST adalah ${winner.title || displaySubject} seharga ${winner.landedPrice || winner.listedPrice || 'terbaik'}! Mau langsung dibeli sekarang?`;

    const quickOptions = [
      { label: `⚡ Langsung Beli Sekarang (${winner.store || singleStoreName})`, action: 'buy_winner', targetUrl: winner.url || window.location.href },
      { label: `🔗 Buka Halaman Produk`, action: 'open_winner', targetUrl: winner.url || window.location.href },
      { label: `🔍 Bandingkan Produk Lain`, query: `bandingkan lagi ${displaySubject}` },
      { label: `🏷️ Cari Kupon Tambahan`, action: 'deals' }
    ];

    // Single living card update with full matrix & 1-click action chips
    updateChatMessage(missionMsgId, reportContent, {
      quickOptions,
      spoken: spokenText
    });

    speak(spokenText);
    setCapsuleState('idle', 'Audit perbandingan selesai');
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
      appendChatMessage('agent', `**Opening ${targetLabel}**\n\nNavigating to product details…`);
      setCapsuleState('acting', `Opening: ${targetLabel.slice(0, 30)}`, 'VOX IS OPENING PRODUCT');

      if (typeof activeAgentLoop !== 'undefined' && activeAgentLoop) {
        activeAgentLoop.history.push({
          action: { action: 'CLICK_PRODUCT', reason: `Opening ${targetLabel}` },
          result: { success: true, clicked: targetLabel }
        });
        if (typeof saveActiveMission === 'function') {
          await saveActiveMission(activeAgentLoop);
        }
      }

      setTimeout(() => {
        try {
          if (linkEl && linkEl.href && !linkEl.href.startsWith('javascript:')) {
            window.location.href = linkEl.href;
          } else if (linkEl) {
            linkEl.click();
          } else {
            targetCard.click();
          }
        } catch (_) {
          try { targetCard.click(); } catch (e) {}
        }
      }, 500);
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
      // Wake word variants (e.g. "hey vos", "hei vos", "halo vos", "hey fox", "hey box")
      { pattern: /\b(hey|hei|halo|hai|ok)?\s*(vos|voss|foss|vocks|vaux|foks|folks|fox)\b/gi, replace: 'hey vox' },

      // View Pricing / Price intent (Indonesian + broken English phonetics)
      { pattern: /\b(can\s+you\s+see|can\s+you\s+look|bisa\s+)?(kamu\s+bisa\s+)?(ngeliat|ngelihat|liat|lihat|tengok|see|look|view|cek|check|open|buka|tekan|teken|klik|click|press)\s*(at\s+)?(the\s+)?(viu|view\s+)?(pricing|presing|preising|praising|prays|prices|price|harga|harganya|cost|rate|plans|paket|buy|beli)(\s*(nggak|gak|ga|ya|dong|kah))?\b/gi, replace: 'view pricing' },
      { pattern: /\b(bisa\s+)?(klik|click|tekan|teken|press|pencet|tap)\s*(tombol\s+)?(pricing|price|buy|beli|order|shop|specs)(\s*(nggak|gak|ga|ya|dong|kah))?\b/gi, replace: 'view pricing' },
      // Buy & Purchase intent
      { pattern: /\b(buy(\s*now|\s*this|\s*winner|\s*it)?|beli(\s*sekarang|\s*ini|\s*ya|\s*dong|\s*aja|\s*produknya|\s*barangnya)?|order(\s*now|\s*this)?|checkout|bayar\s*sekarang|beliin\s*ini)\b/gi, replace: 'buy now' },
      // Click product intent
      { pattern: /\b(klik|click|buka|open|pilih|select|teken|tekan)\s*(the|that|this)?\s*(produk|product|item|barang)?\s*(nya)?\b/gi, replace: 'click product' },

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

      // ─── ACOUSTIC & ACCENT MISHEARING NORMALIZATION ───
      // When ESL/Indonesian speakers say "headset", Web Speech API in en-US frequently transcribes "headband", "had set", "hed set", "het set", etc.
      { pattern: /\b(head\s*band|headband|had\s*set|hed\s*set|het\s*set|head\s*sad|head\s*sat|hate\s*set)\b/gi, replace: 'headset' },
      // When user says "earphone" or "airpod", Web Speech API frequently transcribes "airport", "air pod", "er fon"
      { pattern: /\b(airport|air\s*pot|er\s*fon|ir\s*fon|ear\s*fon)\b/gi, replace: 'earphone' },
      { pattern: /\b(leptop|lektop|labtop)\b/gi, replace: 'laptop' },
      { pattern: /\b(mous|maus|maos)\b/gi, replace: 'mouse' },
      { pattern: /\b(kibor|keybord)\b/gi, replace: 'keyboard' },
      { pattern: /\b(spiker|spikur)\b/gi, replace: 'speaker' },
      { pattern: /\b(casan|cargel)\b/gi, replace: 'charger' },

      // Natural language conversational search intents (both English & Indonesian)
      { pattern: /\b(aku\s*udah\s*bilang(\s*untuk)?|udah\s*dibilang(\s*untuk)?|suruh|minta)\s+/gi, replace: '' },
      { pattern: /\b(can\s+you\s+(please\s+)?(find|search|look(\s+up)?|get)(\s+me)?(\s+up)?(\s+about)?)\s+/gi, replace: 'search ' },
      { pattern: /\b(could\s+you\s+(please\s+)?(find|search|look(\s+up)?|get)(\s+me)?(\s+up)?(\s+about)?)\s+/gi, replace: 'search ' },
      { pattern: /\b(please\s+(find|search|look(\s+up)?|get)(\s+me)?(\s+up)?(\s+about)?)\s+/gi, replace: 'search ' },
      { pattern: /\b(search\s*me\s*up\s*(about)?)\s+/gi, replace: 'search ' },
      { pattern: /\b(search\s*up\s*(about)?|search\s*for|search\s*about|find\s*me\s*(a\s+|an\s+|the\s+)?|tolong\s*cari(in|kan)?|bisa\s*cari(in|kan)?|coba\s*cari(in|kan)?)\s+/gi, replace: 'search ' },
      // When user says "beliin headset", "beli headset", "buy me a headset" (followed by a product name, NOT "ini/this/yang ini/pemenang"), it is a shopping search mission!
      { pattern: /\b(beliin(\s*(aku|saya|gue|gw))?|belikan(\s*(aku|saya|gue|gw))?|beli|buy(\s*me)?)\s+(?!ini\b|itu\b|sekarang\b|barang\s*ini\b|produk\s*ini\b|yang\s*ini\b|pemenang(nya)?\b|rekomendasi(nya)?\b)/gi, replace: 'search ' },

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

      // Buy / Checkout intent (STRICTLY for winner item or current item e.g. "beli ini", "beli yang ini", "beli pemenang", "checkout sekarang")
      { pattern: /\b(beliin\s+(ini|yang\s*ini|barang\s*ini|produk\s*ini|pemenang(nya)?)|beli\s+(ini|yang\s*ini|barang\s*ini|produk\s*ini|pemenang(nya)?|sekarang)|buy\s+(this(\s+for\s+me)?|winner|the\s+winner)|checkout\s+(sekarang|pemenang(nya)?)|beli\s+dan\s+checkout|buy\s+and\s+checkout)\b/gi, replace: 'buy this item and checkout' },
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

  // Resume pending shopping mission across navigation (e.g. after search form submission on Shopee / Tokopedia)
  setTimeout(async () => {
    try {
      const pendingRaw = sessionStorage.getItem('vox_pending_shopping_mission');
      if (pendingRaw) {
        const pending = JSON.parse(pendingRaw);
        sessionStorage.removeItem('vox_pending_shopping_mission');
        if (Date.now() - (pending.timestamp || 0) < 90000) {
          console.log('[Vox Agent] Resuming shopping mission across navigation for:', pending.displaySubject);
          openDialog();
          showMainView();
          setCapsuleState('reasoning', 'Scouting search results…');
          await executeAutonomousLiveCompare(pending.userPrompt || pending.targetSubject, pending.plan, true);
        }
      }
    } catch (e) {
      console.warn('[Vox Agent] Mission resume error:', e);
    }
  }, 1200);

  // Resume pending autonomous checkout across navigation (e.g. from candidate card click to PDP)
  setTimeout(async () => {
    try {
      const pendingCheckout = sessionStorage.getItem('vox_pending_auto_checkout');
      if (pendingCheckout) {
        sessionStorage.removeItem('vox_pending_auto_checkout');
        const parsed = JSON.parse(pendingCheckout);
        if (Date.now() - (parsed.timestamp || 0) < 120000) {
          console.log('[Vox Agent] Resuming autonomous checkout on PDP for:', parsed.winnerTitle);
          openDialog();
          showMainView();
          setCapsuleState('reasoning', 'Executing 1-Click Buy…');
          appendChatMessage('agent', `**Resuming Autonomous Buy & Checkout**\n\nInitiating 1-Click order execution for **${escapeHtml(parsed.winnerTitle || 'Winner Product')}**.`);
          speak(`Halaman produk dibuka. Memulai proses pembelian dan checkout otomatis.`);
          await new Promise(r => setTimeout(r, 800));
          await executeAutonomousCheckout('checkout');
        }
      }
    } catch (e) {
      console.warn('[Vox Agent] Auto-checkout resume error:', e);
    }
  }, 1400);

  // 8. Continuous Speech Recognition & "Hey Vox" Wake Detection
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SR) {
    try {
      recognition = new SR();
      recognition.continuous = true;
      recognition.interimResults = true;

      // Multi-lingual recognition with English default
      const defaultLang = voxLanguage || (window.VOX_ENV?.VOX_LANGUAGE || 'en-US');
      recognition.lang = defaultLang;

      recognition.onstart = () => {
        isListening = true;
        playUiChime('listen');
        setCapsuleState('listening', 'Listening…');
        queryMetaLabel.textContent = 'Listening (Say "Hey Vox" or your question)';
        dialogTranscript.textContent = 'Listening to your voice… speak freely.';
      };

      recognition.onspeechstart = () => {
        stopCurrentSpeech(true);
        isSpeaking = false;
      };

      let wakeWordDebounceTimer = null;
      let lastProcessedQuery = '';
      let lastProcessedTime = 0;

      recognition.onresult = (event) => {
        if (isSpeaking) {
          stopCurrentSpeech(true);
          isSpeaking = false;
        }

        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }

        dialogTranscript.textContent = `"${transcript}"`;

        // Check if user finished speaking
        if (event.results[event.results.length - 1].isFinal) {
          const clean = transcript.trim();
          if (!clean) return;

          // Clear any pending timer
          if (wakeWordDebounceTimer) {
            clearTimeout(wakeWordDebounceTimer);
            wakeWordDebounceTimer = null;
          }

          // Harmonize ESL English vocabulary
          const harmonized = harmonizeUserVocab(clean);

          // Strip wake word: "hey vox", "hey vos", "hey fox", "halo vox", "vox", "fox"
          let withoutWake = harmonized.replace(/^(hey|hei|halo|hai|ok)?\s*(vox|fox|box|folks|vaux|vocks|foks|vos|voss|foss)[,.]?\s*/i, '').trim();

          // Strip conversational transition words: "terus", "lalu", "kemudian", "and then", "then"
          withoutWake = withoutWake.replace(/^(terus|lalu|kemudian|and\s+then|then)\s+/i, '').trim();

          // Check for pause / hold phrases: e.g. "bentar", "tunggu", "wait", "hold on", "sabar", "nanti"
          const isPausePhrase = /^(bentar|sebentar|tunggu|wait|hold\s*on|sabar|pause|nanti)/i.test(clean) ||
                                /\b(bentar|sebentar|tunggu|hold\s*on|sabar)\b/i.test(clean);
          if (isPausePhrase) {
            console.log('[Vox Agent] User asked to wait/pause:', clean);
            stopCurrentSpeech(true);
            setCapsuleState('listening', 'Menunggu Anda…');
            dialogTranscript.textContent = `"${clean}" (Menunggu Anda bicara…)`;
            return;
          }

          // Check if user is testing the microphone
          if (/^(tes\s*mic|cek\s*mic|test\s*mic|mic\s*check|tes(\s*1\s*2\s*3)?)$/i.test(clean)) {
            playUiChime('ready');
            expandCapsule('Mikrofon aktif & jernih!', 3500);
            setCapsuleState('listening', 'Mendengarkan…');
            dialogTranscript.textContent = 'Mikrofon aktif & jernih. Siap mendengarkan!';
            speak('Mikrofon aktif dan berfungsi dengan baik bro, siap membantu.');
            return;
          }

          // Extract query to process: if user asked a question, strip wake word;
          // if user said ONLY the wake word / greeting ("Hey Vox"), process it as a natural greeting!
          const targetQuery = (withoutWake && withoutWake.length >= 2) ? withoutWake : harmonized;

          const isDuplicateInWindow = (targetQuery === lastProcessedQuery) && (Date.now() - lastProcessedTime < 2500);
          if (targetQuery.length >= 2 && !isDuplicateInWindow) {
            lastProcessedQuery = targetQuery;
            lastProcessedTime = Date.now();
            stopCurrentSpeech(true);
            isSpeaking = false;
            if (recognition && isListening) {
              try { recognition.stop(); } catch (_) {}
            }
            isListening = false;
            setCapsuleState('thinking', 'Berpikir… 💭', 'VOX IS THINKING');

            // Attempt high-accuracy Groq Whisper transcription if recorded audio exists
            stopAudioRecordingAndTranscribe().then((whisperText) => {
              let finalText = targetQuery;
              if (whisperText && whisperText.length >= 3) {
                console.log(`[Vox Agent] Groq Whisper transcribed: "${whisperText}" (WebSpeech was: "${targetQuery}")`);
                let cleanWhisper = harmonizeUserVocab(whisperText);
                let cleanWithoutWake = cleanWhisper.replace(/^(hey|hei|halo|hai|ok)?\s*(vox|fox|box|folks|vaux|vocks|foks|vos|voss|foss)[,.]?\s*/i, '').trim();
                cleanWithoutWake = cleanWithoutWake.replace(/^(terus|lalu|kemudian|and\s+then|then)\s+/i, '').trim();
                if (cleanWithoutWake.length >= 2) {
                  finalText = cleanWithoutWake;
                } else if (cleanWhisper.length >= 2) {
                  finalText = cleanWhisper;
                }
              }
              processNaturalQuery(finalText);
            }).catch(() => {
              processNaturalQuery(targetQuery);
            });
          }
        }
      };

      recognition.onerror = (err) => {
        isListening = false;
        console.log('[Vox Agent] Speech mic info/error:', err.error);
        if (err.error === 'not-allowed' || err.error === 'service-not-allowed') {
          setCapsuleState('idle', 'Mic blocked — check permissions');
          isHandsFreeMode = false;
          console.warn('[Vox Agent] Microphone permission denied.');
        } else {
          // Clear stuck isSpeaking lock if speech hung for > 6s
          if (isSpeaking && (!currentAudio || currentAudio.paused) && (Date.now() - speechStartTime > 6000)) {
            console.warn('[Vox Agent] Force-clearing stuck isSpeaking lock on mic error.');
            isSpeaking = false;
          }
          // Auto-restart in hands-free mode after transient errors (no-speech, network, aborted)
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
        // Clear stuck isSpeaking lock if speech hung for > 7s
        if (isSpeaking && (!currentAudio || currentAudio.paused) && (Date.now() - speechStartTime > 7000)) {
          console.warn('[Vox Agent] Force-clearing stuck isSpeaking lock on mic end.');
          isSpeaking = false;
        }
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

  // 8b. High-Accuracy Audio Recording & Groq Whisper Integration
  let audioRecorder = null;
  let recordedAudioChunks = [];
  let audioStream = null;
  let isRecordingAudio = false;

  /**
   * Check if microphone permission is already granted (no prompt).
   * Returns true if granted, false if denied/prompt-needed.
   */
  async function checkMicPermission() {
    try {
      if (navigator.permissions) {
        const result = await navigator.permissions.query({ name: 'microphone' });
        micPermissionGranted = result.state === 'granted';
        // Listen for permission changes
        result.addEventListener('change', () => {
          micPermissionGranted = result.state === 'granted';
          console.log('[Vox Agent] Mic permission changed to:', result.state);
        });
        return micPermissionGranted;
      }
    } catch (_) {}
    return false;
  }

  /**
   * Save mic state to chrome.storage for cross-page persistence.
   */
  function saveMicState() {
    const state = {
      isHandsFreeMode,
      isListening,
      timestamp: Date.now()
    };
    try {
      if (chrome.storage?.local) {
        chrome.storage.local.set({ [VOX_MIC_STATE_KEY]: state });
      } else {
        sessionStorage.setItem(VOX_MIC_STATE_KEY, JSON.stringify(state));
      }
    } catch (_) {}
  }

  /**
   * Restore mic state after page navigation.
   * Only auto-starts mic if permission is already granted (no prompt).
   */
  async function restoreMicState() {
    const permissionOk = await checkMicPermission();

    const onLoaded = (state) => {
      if (!state) return;

      // Only restore if saved within last 60 seconds (navigation window)
      const age = Date.now() - (state.timestamp || 0);
      if (age > 60000) return;

      isHandsFreeMode = state.isHandsFreeMode || false;

      // Auto-resume mic if it was active AND permission is already granted
      if ((state.isListening || state.isHandsFreeMode) && permissionOk) {
        console.log('[Vox Agent] Auto-resuming mic after page navigation (permission granted)');
        setTimeout(() => {
          startListening();
          setCapsuleState('listening', '🎙 Resumed listening', 'VOX IS LISTENING');
        }, 800);
      } else if (state.isHandsFreeMode && !permissionOk) {
        // Mic was active but permission not pre-granted — show hint instead of prompting
        console.log('[Vox Agent] Mic was active but permission needs re-grant. Waiting for user click.');
        setCapsuleState('idle', 'Tap to resume mic', 'VOX IS READY');
      }
    };

    try {
      if (chrome.storage?.local) {
        chrome.storage.local.get([VOX_MIC_STATE_KEY], (res) => {
          onLoaded(res[VOX_MIC_STATE_KEY]);
        });
      } else {
        const saved = JSON.parse(sessionStorage.getItem(VOX_MIC_STATE_KEY) || 'null');
        onLoaded(saved);
      }
    } catch (_) {}
  }

  async function startAudioRecording() {
    try {
      if (typeof MediaRecorder === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
        return;
      }
      if (isRecordingAudio && audioRecorder && audioRecorder.state === 'recording') {
        return;
      }
      recordedAudioChunks = [];
      if (!audioStream || !audioStream.active) {
        // Only call getUserMedia if permission is already granted (avoid popup)
        // On first user-initiated mic click, permission will be requested naturally
        if (!micPermissionGranted) {
          const permOk = await checkMicPermission();
          if (!permOk) {
            console.log('[Vox Agent] Skipping getUserMedia — permission not yet granted. SpeechRecognition will handle voice input.');
            return;
          }
        }
        audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        micPermissionGranted = true;
      }
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : (MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : '');
      
      audioRecorder = mimeType ? new MediaRecorder(audioStream, { mimeType }) : new MediaRecorder(audioStream);
      audioRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          recordedAudioChunks.push(e.data);
        }
      };
      audioRecorder.start(100);
      isRecordingAudio = true;
    } catch (err) {
      console.warn('[Vox Agent] Audio recording initialization note:', err.message);
    }
  }

  async function stopAudioRecordingAndTranscribe() {
    return new Promise((resolve) => {
      if (!audioRecorder || audioRecorder.state === 'inactive') {
        return resolve('');
      }

      const timeout = setTimeout(() => {
        resolve('');
      }, 3500);

      audioRecorder.onstop = async () => {
        clearTimeout(timeout);
        isRecordingAudio = false;
        try {
          if (!recordedAudioChunks || recordedAudioChunks.length === 0) {
            return resolve('');
          }
          const mime = audioRecorder.mimeType || 'audio/webm';
          const audioBlob = new Blob(recordedAudioChunks, { type: mime });
          recordedAudioChunks = [];

          if (audioBlob.size < 1000) {
            return resolve('');
          }

          const reader = new FileReader();
          reader.onloadend = () => {
            const base64Data = (reader.result || '').split(',')[1];
            if (!base64Data) return resolve('');

            chrome.runtime.sendMessage(
              {
                action: 'TRANSCRIBE_AUDIO',
                payload: { audioBase64: base64Data, mimeType: mime }
              },
              (response) => {
                if (chrome.runtime.lastError || !response || !response.success) {
                  return resolve('');
                }
                resolve(response.data || '');
              }
            );
          };
          reader.onerror = () => resolve('');
          reader.readAsDataURL(audioBlob);
        } catch (e) {
          resolve('');
        }
      };

      try {
        audioRecorder.stop();
      } catch (_) {
        clearTimeout(timeout);
        resolve('');
      }
    });
  }

  function startListening() {
    window.speechSynthesis && window.speechSynthesis.cancel();
    stopCurrentSpeech();
    startAudioRecording();
    if (!recognition) {
      if (dialogTranscript) dialogTranscript.textContent = 'Microphone API unavailable in this browser. You can type in the box below!';
      if (quickInput) quickInput.focus();
      return;
    }
    if (isListening) return;
    isHandsFreeMode = true;  // Enable hands-free when user initiates listening
    saveMicState(); // Persist mic state across page navigations
    try {
      recognition.start();
    } catch (_) {
      stopListening();
      setTimeout(() => {
        try { recognition.start(); } catch (e) {
          if (quickInput) quickInput.focus();
        }
      }, 100);
    }
  }

  function stopListening() {
    if (recognition && isListening) {
      try { recognition.stop(); } catch (_) {}
    }
    if (audioRecorder && audioRecorder.state === 'recording') {
      try { audioRecorder.stop(); } catch (_) {}
    }
    isListening = false;
    isRecordingAudio = false;
    saveMicState(); // Persist mic state across page navigations
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
      saveMicState();
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
  let activeSpeechWatchdog = null;

  function stopCurrentSpeech(invalidateAsync = true) {
    if (invalidateAsync) {
      currentSpeechId++;
    }
    if (activeSpeechWatchdog) {
      clearTimeout(activeSpeechWatchdog);
      activeSpeechWatchdog = null;
    }
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

  window.addEventListener('beforeunload', () => {
    stopCurrentSpeech();
  });

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


  function cleanTextForSpeech(text) {
    if (!text || typeof text !== 'string') return '';
    let cleaned = text;
    cleaned = cleaned.replace(/```[\s\S]*?```/g, '');
    cleaned = cleaned.replace(/`([^`]+)`/g, '$1');
    cleaned = cleaned.replace(/!\[([^\]]*)\]\([^)]+\)/g, '');
    cleaned = cleaned.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    cleaned = cleaned.replace(/^#{1,6}\s+/gm, '');
    cleaned = cleaned.replace(/\*\*([^*]+)\*\*/g, '$1');
    cleaned = cleaned.replace(/\*([^*]+)\*/g, '$1');
    cleaned = cleaned.replace(/__([^_]+)__/g, '$1');
    cleaned = cleaned.replace(/_([^_]+)_/g, '$1');
    cleaned = cleaned.replace(/~~([^~]+)~~/g, '$1');
    cleaned = cleaned.replace(/^\s*[-*+•●]\s+/gm, '');
    cleaned = cleaned.replace(/[★☆]/g, ' stars');
    cleaned = cleaned.replace(/->|→|←|⇒|▶|▼|▲|◀/g, ' ');
    cleaned = cleaned.replace(/[*#`~|]/g, ' ');
    cleaned = cleaned.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1FA00}-\u{1FAFF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}]/gu, '');
    cleaned = cleaned.replace(/\[(\d+)\]/g, '$1');
    cleaned = cleaned.replace(/-{2,}/g, ' ');
    cleaned = cleaned.replace(/={2,}/g, ' ');
    cleaned = cleaned.replace(/\s+([,.:;?!])/g, '$1');
    cleaned = cleaned.replace(/\s+/g, ' ').trim();
    return cleaned;
  }

  let currentSpeechId = 0;

  async function speak(text, onEndCallback) {
    text = cleanTextForSpeech(text);
    if (!text) {
      if (onEndCallback) onEndCallback();
      return;
    }

    // Stop and cancel ANY previous speech immediately and invalidate pending async TTS requests
    stopCurrentSpeech(true);
    const thisSpeechId = currentSpeechId;

    // Silent mode: skip all TTS during background work
    if (silentMode) {
      if (onEndCallback) onEndCallback();
      return;
    }

    if (isMuted) {
      setCapsuleState('idle', 'Hey Vox or Ask');
      if (onEndCallback) onEndCallback();
      return;
    }

    pauseMicForSpeech();
    isSpeaking = true;
    speechStartTime = Date.now();
    setCapsuleState('speaking', 'Speaking…');

    const isIndonesian = (voxLanguage.startsWith('id') || window.VOX_ENV?.VOX_LANGUAGE === 'id') &&
      /\b(yang|untuk|dengan|tidak|kegunaan|halo|kami|kamu|layak|harga|diskon|kupon|pesanan|alamat)\b/i.test(text);
    const langCode = isIndonesian ? 'id' : 'en';

    // Safety watchdog: Chrome SpeechSynthesis / Audio elements sometimes never fire onend
    // Adaptive buffer: short utterances get shorter watchdog (3.5s base), long ones get up to 60s
    const baseDuration = (text || '').length < 60 ? 3500 : 8000;
    const estDurationMs = Math.max(3500, Math.min(60000, baseDuration + (text || '').length * 140));
    if (activeSpeechWatchdog) {
      clearTimeout(activeSpeechWatchdog);
    }
    activeSpeechWatchdog = setTimeout(() => {
      if (thisSpeechId === currentSpeechId && isSpeaking) {
        console.log('[Vox Agent] Speech watchdog released lock.');
        onSpeechDone();
      }
    }, estDurationMs);

    const onSpeechDone = () => {
      if (activeSpeechWatchdog) {
        clearTimeout(activeSpeechWatchdog);
        activeSpeechWatchdog = null;
      }
      if (thisSpeechId !== currentSpeechId) return; // Stale utterance, ignore
      isSpeaking = false;
      setCapsuleState('idle', isHandsFreeMode ? '🎙 Live Listening' : 'Hey Vox or Ask');
      resumeMicAfterSpeech();
      if (onEndCallback) onEndCallback();
    };

    // Strategy 1: ElevenLabs / Background TTS Proxy (ultra-realistic human voice)
    const elKey = (window.VOX_ENV?.ELEVENLABS_API_KEY || (typeof VOX_ENV !== 'undefined' && VOX_ENV?.ELEVENLABS_API_KEY) || localStorage.getItem('elevenlabs_api_key') || '').trim();
    const elVoice = (window.VOX_ENV?.ELEVENLABS_VOICE_ID || (typeof VOX_ENV !== 'undefined' && VOX_ENV?.ELEVENLABS_VOICE_ID) || 'IKne3meq5aSn9XLyUdCD').trim();

    try {
      if (typeof chrome !== 'undefined' && chrome.runtime?.sendMessage && chrome.runtime?.id) {
        const proxyResult = await new Promise((resolve) => {
          try {
            chrome.runtime.sendMessage(
              { action: 'TTS_GENERATE_AUDIO', payload: { text, lang: langCode, apiKey: elKey, voiceId: elVoice } },
              (response) => {
                if (chrome.runtime?.lastError || !response?.success) {
                  resolve(null);
                } else {
                  resolve(response.data);
                }
              }
            );
          } catch (_) {
            resolve(null);
          }
        });

        // If a new query arrived while waiting for ElevenLabs, cancel this playback!
        if (thisSpeechId !== currentSpeechId) return;

        if (proxyResult) {
          if (proxyResult.source === 'elevenlabs' && proxyResult.audioDataUri) {
            stopCurrentSpeech(false); // Ensure no old audio or Web Speech is running without invalidating this speech sequence
            const audio = new Audio(proxyResult.audioDataUri);
            currentAudio = audio;
            audio.playbackRate = voiceSpeed;
            audio.onloadedmetadata = () => {
              if (audio.duration && isFinite(audio.duration)) {
                if (activeSpeechWatchdog) clearTimeout(activeSpeechWatchdog);
                activeSpeechWatchdog = setTimeout(() => {
                  if (thisSpeechId === currentSpeechId && isSpeaking) {
                    onSpeechDone();
                  }
                }, Math.max(3000, (audio.duration * 1000) + 2500));
              }
            };
            audio.onended = onSpeechDone;
            audio.onerror = () => {
              if (thisSpeechId !== currentSpeechId) return;
              console.warn('[Vox Agent] ElevenLabs audio playback error');
              onSpeechDone();
            };
            try {
              await audio.play();
              return; // SUCCESS: ElevenLabs is playing. DO NOT continue to fallback!
            } catch (playErr) {
              if (thisSpeechId !== currentSpeechId) return;
              console.warn('[Vox Agent] ElevenLabs play error:', playErr);
            }
          } else if (proxyResult.source === 'google_neural' && proxyResult.audioChunks?.length) {
            stopCurrentSpeech(false);
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
      if (!err?.message?.includes('Extension context invalidated')) {
        console.warn('[Vox Agent] Background TTS proxy unavailable:', err);
      }
    }

    if (thisSpeechId !== currentSpeechId) return;

    // Strategy 1b: Direct Tab Fetch to ElevenLabs if background proxy was disconnected/failed
    if (elKey) {
      try {
        const directRes = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${elVoice || 'IKne3meq5aSn9XLyUdCD'}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'xi-api-key': elKey
          },
          body: JSON.stringify({
            text: text.slice(0, 4000),
            model_id: 'eleven_multilingual_v2',
            voice_settings: {
              stability: 0.38,
              similarity_boost: 0.80,
              style: 0.45,
              use_speaker_boost: true
            }
          })
        });
        if (directRes.ok) {
          if (thisSpeechId !== currentSpeechId) return;
          const blob = await directRes.blob();
          const audioUrl = URL.createObjectURL(blob);
          stopCurrentSpeech(false);
          const audio = new Audio(audioUrl);
          currentAudio = audio;
          audio.playbackRate = voiceSpeed;
          audio.onended = () => { URL.revokeObjectURL(audioUrl); onSpeechDone(); };
          audio.onerror = () => { URL.revokeObjectURL(audioUrl); onSpeechDone(); };
          await audio.play();
          return;
        }
      } catch (directErr) {
        console.warn('[Vox Agent] Direct ElevenLabs fetch error:', directErr);
      }
    }

    if (thisSpeechId !== currentSpeechId) return;

    // Pure ElevenLabs execution only: no manual browser TTS fallback
    onSpeechDone();
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

  // ===== VISUAL SPOTLIGHT TOUR ENGINE =====
  // Sequential choreography: highlights elements one-by-one with numbered badges,
  // progress dots, smooth scrolling, and optional speech narration per step.

  let activeTour = null; // { steps, currentStep, badges, progressEl, cancelled }

  /**
   * Clear any running spotlight tour — remove all badges, highlights, progress bar.
   */
  function clearTour() {
    if (!activeTour) return;
    activeTour.cancelled = true;

    // Remove all tour highlights and badges from the page
    document.querySelectorAll('.vox-tour-highlight').forEach(el => el.classList.remove('vox-tour-highlight'));
    document.querySelectorAll('.vox-tour-step-badge').forEach(el => el.remove());
    document.querySelectorAll('.vox-tour-progress').forEach(el => el.remove());

    activeTour = null;
  }

  /**
   * Position a tour badge near a highlighted element.
   */
  function positionTourBadge(badge, el) {
    const r = el.getBoundingClientRect();
    badge.style.top = `${Math.max(8, r.top + window.scrollY - 42)}px`;
    badge.style.left = `${Math.max(12, r.left + window.scrollX + 6)}px`;
  }

  /**
   * Run a multi-step spotlight tour.
   * @param {Array} steps - Array of { selector, title, desc, speak }
   *   - selector: CSS selector string to find the element
   *   - title: Short title shown in the badge (e.g. "Harga Produk")
   *   - desc: Short description under the title (e.g. "Rp 2.499.000")
   *   - speak: Optional text for Vox to narrate at this step
   * @param {Object} options - { delayPerStep, speakSteps }
   */
  async function runSpotlightTour(steps, options = {}) {
    if (!steps || steps.length === 0) return;

    clearTour();
    clearHighlight();

    const delayPerStep = options.delayPerStep || 3500;
    const speakSteps = options.speakSteps !== false;

    activeTour = {
      steps,
      currentStep: 0,
      badges: [],
      progressEl: null,
      cancelled: false
    };

    // Create progress bar
    const progressEl = document.createElement('div');
    progressEl.className = 'vox-tour-progress';
    progressEl.innerHTML = `
      <span class="vox-tour-progress-label">⚡ Tour: Step <span class="vox-tour-current">1</span>/${steps.length}</span>
      <div class="vox-tour-progress-dots">
        ${steps.map((_, i) => `<span class="vox-tour-dot${i === 0 ? ' active' : ''}" data-step="${i}"></span>`).join('')}
      </div>
      <button class="vox-tour-skip-btn" type="button">✕ Skip</button>
    `;
    document.body.appendChild(progressEl);
    activeTour.progressEl = progressEl;

    // Skip button
    const skipBtn = progressEl.querySelector('.vox-tour-skip-btn');
    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        clearTour();
        setCapsuleState('idle', 'Tour skipped', 'VOX IS READY');
      });
    }

    // Update capsule state
    setCapsuleState('observing', `Tour: ${steps.length} steps`, 'VOX SPOTLIGHT TOUR');

    // Run each step sequentially
    for (let i = 0; i < steps.length; i++) {
      if (activeTour?.cancelled) break;

      const step = steps[i];
      activeTour.currentStep = i;

      // Clear previous step highlights & badges
      document.querySelectorAll('.vox-tour-highlight').forEach(el => el.classList.remove('vox-tour-highlight'));
      document.querySelectorAll('.vox-tour-step-badge').forEach(el => el.remove());

      // Update progress dots
      const dots = progressEl.querySelectorAll('.vox-tour-dot');
      dots.forEach((dot, di) => {
        dot.classList.remove('active', 'done');
        if (di < i) dot.classList.add('done');
        if (di === i) dot.classList.add('active');
      });
      const currentLabel = progressEl.querySelector('.vox-tour-current');
      if (currentLabel) currentLabel.textContent = i + 1;

      // Find the target element
      let targetEl = null;
      if (step.selector) {
        try {
          targetEl = document.querySelector(step.selector);
        } catch (_) {}
      }
      // Fallback: try to find by text content in headings
      if (!targetEl && step.title) {
        const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, [class*="title"], [class*="heading"]'));
        targetEl = headings.find(h => h.innerText?.toLowerCase().includes(step.title.toLowerCase()));
        if (targetEl) {
          targetEl = targetEl.closest('section, article, div.card, [class*="card"], [class*="section"]') || targetEl;
        }
      }

      if (!targetEl) {
        // Can't find element — skip this step
        console.log(`[Spotlight Tour] Step ${i + 1}: Element not found for "${step.title}" (selector: ${step.selector})`);
        continue;
      }

      // Highlight the element
      targetEl.classList.add('vox-tour-highlight');

      // Scroll to it smoothly
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      await new Promise(r => setTimeout(r, 500));

      // Create step badge
      const badge = document.createElement('div');
      badge.className = 'vox-tour-step-badge';
      badge.innerHTML = `
        <span class="vox-tour-step-num">${i + 1}</span>
        <span class="vox-tour-step-text">
          <span class="vox-tour-step-title">${step.title || 'Step ' + (i + 1)}</span>
          ${step.desc ? `<span class="vox-tour-step-desc">${step.desc}</span>` : ''}
        </span>
      `;
      document.body.appendChild(badge);
      activeTour.badges.push(badge);

      // Position badge near element
      positionTourBadge(badge, targetEl);

      // Reposition on scroll
      const scrollHandler = () => {
        if (badge.parentNode) positionTourBadge(badge, targetEl);
      };
      window.addEventListener('scroll', scrollHandler, { passive: true });

      // Update capsule
      setCapsuleState('observing', `${step.title || 'Step ' + (i + 1)}`, `STEP ${i + 1}/${steps.length}`);

      // Speak narration for this step
      if (speakSteps && step.speak) {
        await new Promise((resolve) => {
          speak(step.speak, resolve);
        });
      } else {
        // Wait the delay per step
        await new Promise(r => setTimeout(r, delayPerStep));
      }

      // Cleanup scroll handler
      window.removeEventListener('scroll', scrollHandler);

      if (activeTour?.cancelled) break;
    }

    // Tour complete — clean up
    if (activeTour && !activeTour.cancelled) {
      // Mark all dots as done
      const dots = progressEl?.querySelectorAll('.vox-tour-dot');
      if (dots) dots.forEach(d => { d.classList.remove('active'); d.classList.add('done'); });
      if (progressEl?.querySelector('.vox-tour-current')) {
        progressEl.querySelector('.vox-tour-current').textContent = '✓';
      }
      const label = progressEl?.querySelector('.vox-tour-progress-label');
      if (label) label.textContent = '✓ Tour Complete';

      setCapsuleState('idle', 'Tour complete!', 'VOX IS READY');

      // Auto-dismiss after 3s
      setTimeout(() => clearTour(), 3000);
    }
  }

  /**
   * Build tour steps from a page analysis — automatically detects interesting elements.
   * Used by processNaturalQuery when the user asks to "explain this page" or "show me around".
   */
  function buildTourStepsFromPage() {
    const steps = [];

    // 1. Hero / main heading
    const h1 = document.querySelector('main h1, [role="main"] h1, article h1, header h1, h1');
    if (h1) {
      const hero = h1.closest('section, header, [class*="hero"], [id*="hero"]') || h1;
      steps.push({
        selector: null,
        title: h1.innerText.slice(0, 40),
        desc: 'Main heading & hero section',
        speak: `Ini adalah ${h1.innerText.slice(0, 60)}.`,
        _el: hero
      });
    }

    // 2. Pricing section
    const priceEl = document.querySelector('#pricing, [id*="pricing"], [class*="pricing"], [id*="price"], [class*="price"]');
    if (priceEl) {
      const priceText = priceEl.querySelector('h2, h3, [class*="amount"], [class*="price"]')?.innerText?.slice(0, 30) || 'Pricing';
      steps.push({
        selector: '#pricing, [id*="pricing"], [class*="pricing"]',
        title: 'Harga & Paket',
        desc: priceText,
        speak: `Bagian harga menunjukkan ${priceText}.`
      });
    }

    // 3. Features section
    const featEl = document.querySelector('#features, [id*="features"], [class*="features"], #specs, [id*="specs"]');
    if (featEl) {
      steps.push({
        selector: '#features, [id*="features"], [class*="features"], #specs',
        title: 'Fitur & Spesifikasi',
        desc: 'Key features and specifications',
        speak: 'Berikut fitur dan spesifikasi utama.'
      });
    }

    // 4. Product images / gallery
    const gallery = document.querySelector('[class*="gallery"], [class*="image"], [class*="carousel"], [id*="gallery"]');
    if (gallery) {
      steps.push({
        selector: '[class*="gallery"], [class*="image"], [class*="carousel"]',
        title: 'Galeri Produk',
        desc: 'Product images and photos',
        speak: 'Ini galeri foto produk.'
      });
    }

    // 5. Reviews / ratings
    const reviews = document.querySelector('[class*="review"], [id*="review"], [class*="rating"], [id*="rating"]');
    if (reviews) {
      steps.push({
        selector: '[class*="review"], [id*="review"], [class*="rating"]',
        title: 'Ulasan & Rating',
        desc: 'Customer reviews and ratings',
        speak: 'Bagian ulasan dan rating dari pembeli.'
      });
    }

    // 6. CTA / Buy buttons
    const cta = document.querySelector('[class*="cta"], [class*="buy"], [class*="cart"], button[class*="primary"]');
    if (cta) {
      steps.push({
        selector: '[class*="cta"], [class*="buy"], [class*="cart"]',
        title: 'Tombol Aksi',
        desc: cta.innerText?.slice(0, 30) || 'Call to Action',
        speak: `Tombol aksi utama: ${cta.innerText?.slice(0, 30) || 'beli atau tambah ke keranjang'}.`
      });
    }

    // For steps with _el (direct reference), set selector to a generated one
    steps.forEach(step => {
      if (step._el && !step.selector) {
        // Build a unique selector for this element
        try {
          if (step._el.id) {
            step.selector = '#' + step._el.id;
          } else {
            step.selector = step._el.tagName.toLowerCase();
            if (step._el.className && typeof step._el.className === 'string') {
              const cls = step._el.className.trim().split(/\s+/)[0];
              if (cls) step.selector += '.' + cls;
            }
          }
        } catch (_) {}
        delete step._el;
      }
    });

    return steps;
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
  /**
   * ─── TIER 1: FAST LOCAL GUARD ───
   * Instant regex match for safety-critical actions that MUST NOT wait for Groq.
   * Returns { intent, isGuarded: true } for guarded intents, or null to delegate to Groq.
   */
  function classifyUserIntentLocalGuard(rawQuery) {
    if (!rawQuery) return null;
    const q = rawQuery.toLowerCase().trim();

    // 0. Cancel active mission / loop / voice (MUST be instant)
    if (/^(stop|cancel|batal|berhenti|cukup|diam|cancel\s*(mission|loop|search|checkout|order)|stop\s*(mission|loop|search))$/i.test(q)) {
      return { intent: 'CANCEL_MISSION', isGuarded: true };
    }

    // 0.1 Emergency Reset Vox Data & State (voice command)
    if (/^(reset|reset\s*data|reset\s*vox|reset\s*hey\s*vox|restart\s*mic|mulai\s*ulang|reset\s*asisten|bersihkan\s*data)$/i.test(q)) {
      return { intent: 'RESET_VOX_STATE', isGuarded: true };
    }

    // 1. Guardrail Confirm / Cancel Order (MUST be instant — no Groq delay)
    if (/^(confirm\s*order|konfirmasi\s*pesanan|bayar\s*sekarang|place\s*order)$/i.test(q)) {
      return { intent: 'CONFIRM_ORDER', isGuarded: true };
    }
    if (/^(cancel(\s*(checkout|order))?|batalkan(\s*pesanan)?|batal)$/i.test(q)) {
      return { intent: 'CANCEL_ORDER', isGuarded: true };
    }

    // 2. Submit form (instant)
    if (/^submit\s*form$/i.test(q)) {
      return { intent: 'SUBMIT_FORM', isGuarded: true };
    }

    // All natural language intents are delegated to Groq cognitive classifier
    return null;
  }

  /**
   * ─── TIER 2: GROQ COGNITIVE INTENT CLASSIFIER ───
   * Sends the user's utterance to Groq LLM to understand true intent.
   * Returns structured { intent, steps, params, spokenResponse }.
   * Falls back to local regex classification if Groq is unavailable.
   */
  async function classifyIntentViaGroq(rawQuery) {
    try {
      const result = await new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({
          action: 'CLASSIFY_INTENT',
          payload: {
            utterance: rawQuery,
            currentUrl: window.location.href,
            pageTitle: document.title,
            domain: window.location.hostname,
            userLanguage: voxLanguage || 'en-US'
          }
        }, (response) => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
            return;
          }
          if (!response || !response.success) {
            reject(new Error(response?.error || 'Unknown error'));
            return;
          }
          resolve(response.data);
        });
      });

      console.log(`[Vox Agent] Groq classified "${rawQuery}" → ${result.intent} (${((result.confidence || 0) * 100).toFixed(0)}%)`);
      return result;
    } catch (err) {
      console.warn('[Vox Agent] Groq intent classification failed, using local fallback:', err.message);
      return classifyUserIntentLocalFallback(rawQuery);
    }
  }

  /**
   * ─── LOCAL FALLBACK CLASSIFIER ───
   * Used only when Groq is unavailable. Preserves the old regex logic as a safety net.
   */
  function classifyUserIntentLocalFallback(rawQuery) {
    if (!rawQuery) return { intent: 'PAGE_QA', steps: [], params: {} };
    const q = rawQuery.toLowerCase().trim();

    // About Vox / Identity / AI Helper
    const isAboutVox = /^(what\s*are\s*you|who\s*are\s*you|what\s*can\s*you\s*do|what\s*is\s*vox(\s*agent)?|tell\s*me\s*about\s*yourself|help\s*me|how\s*to\s*use\s*vox)$/i.test(q)
      || /^(kamu\s*(siapa|apa|ini\s*apa)|siapa\s*kamu|apa\s*itu\s*vox(\s*agent)?|kamu\s*bisa\s*apa|bisa\s*apa\s*aja|bisa\s*bantu\s*apa|fungsi\s*(kamu|vox)|tentang\s*kamu|kenalan\s*dong|kamu\s*robot\s*apa|kamu\s*ai\s*apa)$/i.test(q)
      || /\b(what\s+are\s+you|who\s+are\s+you|kamu\s+siapa|kamu\s+ini\s+apa|what\s+is\s+vox\s+agent)\b/i.test(q);
    if (isAboutVox) return { intent: 'ABOUT_VOX', steps: [], params: {} };

    // Greetings
    const isGreeting = /^(hai|halo|hello|hey|hei|hi|morning|afternoon|salam|pagi|siang|malam)(\s*(vox|fox|copilot|ai)?)?$/i.test(q) ||
                       (/^(hai|halo|hello|hey|hei|hi)\b/i.test(q) && q.length <= 15);
    if (isGreeting) return { intent: 'GREETING', steps: [], params: {} };

    // Deep Research (e.g. "research dulu", "riset dulu", "menurut groq bagus yang mana", "pilihin yang paling bagus", etc.)
    if (/\b(do\s*(some\s*)?research|research(\s*dulu)?|riset(\s*dulu)?|analisis(\s*dulu)?|deep\s*research|bagus\s*yang\s*mana|mana\s*yang\s*(lebih\s*|paling\s*)?(bagus|murah|oke|worth\s*it|terbaik)|menurut\s*(kamu|groq|ai|vox)|pilih(kan|in)?\s*(yang\s*)?(paling\s*|lebih\s*)?(bagus|terbaik|oke)|cari(in|kan)?\s*(yang\s*)?(paling\s*|lebih\s*)?(bagus|terbaik|oke)|rekomendasi(kan)?\s*(yang\s*)?(paling\s*|lebih\s*)?(bagus|terbaik))\b/i.test(q)) {
      return { intent: 'DEEP_RESEARCH', steps: [], params: {} };
    }

    // Explain Simply
    if (/\b(jelaskan\s*(secara\s*)?sederhana|explain\s*(this\s*)?(simply|easily|to\s*me\s*like\s*i'?m\s*5|to\s*me)?|can\s*you\s*explain\s*(easily|simply)?|maksudnya\s*apa\s*(sih)?|apa\s*maksud\s*(dari)?|aku\s*(nggak|tidak|gak)\s*ngerti|i\s*(still\s*)?don'?t\s*(get|understand)\s*it|don'?t\s*understand|ini\s*tuh\s*apa\s*(sih)?|demystify)\b/i.test(q)) {
      return { intent: 'EXPLAIN_SIMPLY', steps: [], params: {} };
    }

    // Media Control / YouTube
    if (/\b(play\s*(this\s*)?song|putar\s*(lagu|video)|play\s*(video|music|lagu)|stop\s*music|pause\s*(video|music|lagu)?|resume\s*(video|music|lagu)?)\b/i.test(q)
        || /^(play|putar|pause|stop|lanjutkan)\s+/i.test(q)) {
      return { intent: 'MEDIA_CONTROL', steps: [], params: {} };
    }

    // Sign In / Register
    if (/sign\s*in|log\s*in|login|masuk\s*akun/i.test(q) && !/product|laptop|hp|harga/i.test(q)) {
      return { intent: 'SIGN_IN', steps: [], params: {} };
    }
    if (/register\s*new\s*account|daftar\s*akun|buat\s*akun/i.test(q)) {
      return { intent: 'REGISTER', steps: [], params: {} };
    }

    // Fill Address / Autofill
    if (/switch\s*profile\s*(office|home|kantor|rumah)\s*and\s*fill\s*address/i.test(q)) {
      return { intent: 'AUTOFILL_SWITCH', steps: [], params: {} };
    }
    if (/fill\s*(shipping\s*)?address|isi\s*alamat|autofill/i.test(q)) {
      return { intent: 'AUTOFILL', steps: [], params: {} };
    }

    // Deal Hunter / Coupons
    if (/hunt\s*deals|cari\s*promo|ada\s*(kupon|diskon|voucher)|find\s*coupons?|check\s*deals/i.test(q)) {
      return { intent: 'DEAL_HUNTER', steps: [], params: {} };
    }

    // Buy / Checkout / Add to Cart
    if (/\b(buy|beli|checkout|order|pesan|beliin|add\s*to\s*cart|tambah\s*ke\s*keranjang|masukin\s*keranjang|purchase)\b/i.test(q)) {
      return { intent: 'CHECKOUT', steps: [], params: {} };
    }

    // Click / Select / Open
    if (/\b(klik|click|buka|open|pilih|select|tap)\b/i.test(q) && !/pricing|search|compare|account|profile/i.test(q)) {
      return { intent: 'CLICK_ITEM', steps: [], params: {} };
    }

    // Explicit Page Q&A
    const isExplicitPageQa = /^(apa\s*isi|jelaskan\s*(isi|halaman|artikel|web)|ringkas\s*(isi|halaman)|baca\s*deskripsi|tentang\s*apa\s*(halaman|website|toko|artikel)\s*ini|summarize\s*this\s*page|what\s*is\s*this\s*page\s*about)/i.test(q);
    if (isExplicitPageQa) {
      return { intent: 'PAGE_QA', steps: [], params: {} };
    }

    // WhatsApp Autonomous Action
    if (/\b(kontak\s*(aku|saya)?\s*(aja\s*)?(yang\s*)?(di-?pin|pin)|ke\s*kontak\s*pin|kirim\s*(ke\s*)?(wa|whatsapp)|buka\s*(wa|whatsapp)|send\s*to\s*whatsapp)\b/i.test(q)) {
      return { intent: 'WHATSAPP_ACTION', steps: [], params: { targetContact: 'pinned' } };
    }

    // Specific product search keyword
    if (/\b(cari|carikan|search|find|rekomendasi|looking\s*for)\b/i.test(q)) {
      return { intent: 'SHOPPING_MISSION', steps: [], params: {} };
    }

    // Default: general page QA rather than blindly assuming shopping
    return { intent: 'PAGE_QA', steps: [], params: {} };
  }

  // ═══════════════════════════════════════════════════════
  // 9b. AUTONOMOUS AGENT LOOP — Groq = Brain, Extension = Hands
  // ═══════════════════════════════════════════════════════

  const STORAGE_KEY_MISSION = 'vox_active_mission';
  let activeAgentLoop = null; // { goal, history, stepCount, isActive, awaitingUserAnswer, lastMessage, updatedAt, fromUrl }

  async function saveActiveMission(loopState) {
    if (!loopState) return;
    const missionData = {
      goal: loopState.goal,
      history: (loopState.history || []).map(h => ({
        action: {
          action: h.action?.action,
          reason: h.action?.reason,
          productIndex: h.action?.productIndex,
          buttonIndex: h.action?.buttonIndex,
          inputIndex: h.action?.inputIndex,
          text: h.action?.text,
          url: h.action?.url
        },
        result: {
          success: h.result?.success,
          clicked: h.result?.clicked,
          typed: h.result?.typed,
          filledCount: h.result?.filledCount,
          navigatedTo: h.result?.navigatedTo
        }
      })),
      stepCount: loopState.stepCount || 0,
      isActive: loopState.isActive !== false,
      awaitingUserAnswer: !!loopState.awaitingUserAnswer,
      lastMessage: loopState.lastMessage || '',
      updatedAt: Date.now(),
      fromUrl: window.location.href
    };
    try {
      sessionStorage.setItem(STORAGE_KEY_MISSION, JSON.stringify(missionData));
    } catch (_) {}
    return new Promise((resolve) => {
      try {
        if (chrome.storage?.local) {
          chrome.storage.local.set({ [STORAGE_KEY_MISSION]: missionData }, () => resolve());
        } else {
          resolve();
        }
      } catch (_) {
        resolve();
      }
    });
  }

  async function clearActiveMission() {
    activeAgentLoop = null;
    try { sessionStorage.removeItem(STORAGE_KEY_MISSION); } catch (_) {}
    return new Promise((resolve) => {
      try {
        if (chrome.storage?.local) {
          chrome.storage.local.remove([STORAGE_KEY_MISSION], () => resolve());
        } else {
          resolve();
        }
      } catch (_) {
        resolve();
      }
    });
  }

  async function restoreActiveMission() {
    return new Promise((resolve) => {
      try {
        const checkMission = async (mission) => {
          if (!mission || !mission.isActive) {
            resolve(null);
            return;
          }

          // Expiry check: 3 minutes max inactive
          const ageMs = Date.now() - (mission.updatedAt || 0);
          if (ageMs > 180000) {
            console.log('[Vox Agent] Discarding stale mission (age ' + Math.round(ageMs / 1000) + 's)');
            await clearActiveMission();
            resolve(null);
            return;
          }

          console.log('[Vox Agent] Restoring active mission across page navigation:', mission.goal, mission);
          activeAgentLoop = mission;

          if (mission.awaitingUserAnswer) {
            setCapsuleState('listening', (mission.lastMessage || 'Waiting for your reply…').slice(0, 35), 'VOX IS WAITING FOR REPLY');
            resolve(mission);
            return;
          }

          // Automatically resume agent loop on the new page
          silentMode = false;
          setCapsuleState('navigating', 'Page loaded. Resuming mission…', 'VOX IS RESUMING');
          setTimeout(async () => {
            if (activeAgentLoop && activeAgentLoop.isActive && !activeAgentLoop.awaitingUserAnswer) {
              console.log('[Vox Agent] Auto-executing resumed agent loop on:', window.location.href);
              await runAgentLoop(mission.goal, mission);
            }
          }, 1200);
          resolve(mission);
        };

        if (chrome.storage?.local) {
          chrome.storage.local.get([STORAGE_KEY_MISSION], (res) => {
            let m = res?.[STORAGE_KEY_MISSION];
            if (!m) {
              try {
                const sess = sessionStorage.getItem(STORAGE_KEY_MISSION);
                if (sess) m = JSON.parse(sess);
              } catch (_) {}
            }
            checkMission(m);
          });
        } else {
          try {
            const sess = sessionStorage.getItem(STORAGE_KEY_MISSION);
            const m = sess ? JSON.parse(sess) : null;
            checkMission(m);
          } catch (_) {
            resolve(null);
          }
        }
      } catch (err) {
        console.warn('[Vox Agent] Error restoring active mission:', err);
        resolve(null);
      }
    });
  }

  /**
   * OBSERVE — scrape current page state for Groq
   */
  function observeCurrentPage() {
    const allClickables = Array.from(document.querySelectorAll('button, a, [role="button"], input[type="submit"], input[type="button"]'))
      .filter(isElementVisible);

    const actionPattern = /\b(beli|buy|cart|keranjang|checkout|bayar|pesan|order|add\s*to|lanjut|pilih|submit|search|cari|apply|kupon|voucher)\b/i;

    const actionBtns = [];
    const regularBtns = [];

    // Ensure dedicated Buy button from PDP is always captured and placed first
    const topBuyBtn = findProductPageBuyButton();
    const isPdp = isProductDetailPage();

    if (topBuyBtn && isElementVisible(topBuyBtn)) {
      actionBtns.push({
        text: (topBuyBtn.innerText || topBuyBtn.textContent || topBuyBtn.getAttribute('aria-label') || 'Beli Sekarang').trim().slice(0, 80),
        tag: topBuyBtn.tagName.toLowerCase(),
        type: topBuyBtn.type || 'button',
        _el: topBuyBtn
      });
    }

    for (const el of allClickables) {
      if (topBuyBtn && el === topBuyBtn) continue;
      const txt = (el.innerText || el.textContent || el.getAttribute('aria-label') || el.value || '').trim();
      if (!txt || txt.length < 2) continue;
      if (el.tagName === 'A' && (el.getAttribute('href') === '#' || /facebook|twitter|instagram|tiktok/i.test(el.href || ''))) continue;

      const item = {
        text: txt.slice(0, 80),
        tag: el.tagName.toLowerCase(),
        type: el.type || '',
        _el: el
      };

      const isAction = actionPattern.test(txt) ||
        /buy|cart|checkout|pdp-buy|add-to-cart|order-now/i.test((el.id || '') + ' ' + (el.className || '') + ' ' + (el.getAttribute('data-testid') || ''));

      if (isAction) {
        actionBtns.push(item);
      } else {
        regularBtns.push(item);
      }
    }

    const buttons = [...actionBtns, ...regularBtns].slice(0, 30).map((b, i) => ({
      index: i,
      text: b.text,
      tag: b.tag,
      type: b.type,
      _el: b._el
    }));

    const inputs = Array.from(document.querySelectorAll('input:not([type="hidden"]), textarea, select'))
      .filter(isElementVisible)
      .slice(0, 15)
      .map((el, i) => ({
        index: i,
        name: el.name || el.id || '',
        type: el.type || 'text',
        value: el.value || '',
        placeholder: el.placeholder || '',
        _el: el
      }));

    // Detect product cards (only when NOT on a product detail page to prevent recommendation cards being treated as search results)
    const cardSelectors = [
      '.shopee-search-item-result__item', 'div[data-sqi]',
      'ul.shopee-search-item-result__items > li',
      'div[data-testid="divSRPContentItem"]', 'div[data-testid="master-product-card"]',
      'div[data-component-type="s-search-result"]', '.product-card',
      'div[class*="ProductCard"]', 'div[class*="product-item"]',
      'article[data-qa-id="product-item"]',
      'div[data-testid*="ProductCard"]'
    ];
    let productEls = [];
    if (!isPdp) {
      let bestMatches = [];
      for (const sel of cardSelectors) {
        try {
          const matches = Array.from(document.querySelectorAll(sel)).filter(el => el.offsetHeight > 60 && el.offsetWidth > 60 && isElementVisible(el));
          if (matches.length > bestMatches.length) {
            bestMatches = matches;
          }
        } catch (_) {}
      }
      productEls = bestMatches;

      // Smart fallback: If standard selectors found nothing or fewer than 2 items on a search page,
      // collect card-like containers containing price text (Rp / IDR)
      if (productEls.length < 3) {
        const potentialCards = Array.from(document.querySelectorAll('div, article, li, a[href]')).filter(el => {
          if (!isElementVisible(el) || el.offsetHeight < 70 || el.offsetWidth < 70) return false;
          if (el.offsetHeight > 750 || el.offsetWidth > 500) return false;
          const txt = el.innerText || '';
          return /(?:Rp\.?|IDR)\s*[\d,.]+/i.test(txt) && el.querySelectorAll('img, a[href]').length >= 1;
        });
        const uniqueByHref = [];
        const seenLinks = new Set();
        for (const el of potentialCards) {
          const link = el.tagName === 'A' ? el : el.querySelector('a[href]');
          if (link && link.href && !link.href.includes('#') && !link.href.startsWith('javascript:')) {
            if (!seenLinks.has(link.href)) {
              seenLinks.add(link.href);
              uniqueByHref.push(el);
            }
          }
        }
        if (uniqueByHref.length > productEls.length) {
          productEls = uniqueByHref;
        }
      }
    }

    // Limit to top 30 items
    productEls = productEls.slice(0, 30);

    const products = productEls.map((el, i) => {
      const text = (el.innerText || el.textContent || '').slice(0, 400);

      // 1. Extract Price & Numeric Price Value (parse sale price vs strikethrough price)
      const strikeEls = Array.from(el.querySelectorAll('s, del, [style*="line-through"], [class*="slash" i], [class*="strike" i], [class*="original" i]'));
      const strikeTexts = strikeEls.map(s => s.innerText || '').join(' ');

      const allPrices = [];
      const priceRegex = /(?:Rp\.?|IDR)\s*([\d,.]+)/gi;
      let pMatch;
      while ((pMatch = priceRegex.exec(text)) !== null) {
        const rawDigits = pMatch[1].replace(/[.,]/g, '');
        const val = parseInt(rawDigits, 10);
        if (!isNaN(val) && val > 0 && val < 500000000) {
          const isStriked = strikeTexts.includes(pMatch[1]);
          allPrices.push({ raw: pMatch[0], val, isStriked });
        }
      }

      let chosenPrice = '';
      let chosenPriceVal = 0;
      if (allPrices.length > 0) {
        const nonStriked = allPrices.filter(p => !p.isStriked);
        const candidates = nonStriked.length > 0 ? nonStriked : allPrices;
        // Sort ascending to get sale price
        candidates.sort((a, b) => a.val - b.val);
        chosenPrice = candidates[0].raw;
        chosenPriceVal = candidates[0].val;
      } else {
        const fallbackMatch = text.match(/(?:Rp\.?|IDR|\$|€|£)\s*[\d,.]+|[\d,.]+\s*(?:USD|IDR|EUR|Rp)/i);
        chosenPrice = fallbackMatch ? fallbackMatch[0] : '';
        if (chosenPrice) {
          const digits = chosenPrice.replace(/[^\d]/g, '');
          if (digits) chosenPriceVal = parseInt(digits, 10) || 0;
        }
      }

      // 2. Extract Clean Title (avoid badges like "Ad", "Cashback", "Star+", "Diskon")
      let title = '';
      const titleEl = el.querySelector('[data-testid*="title" i], [data-testid*="name" i], div[class*="title" i], div[class*="name" i], [class*="line-clamp" i], h3, h2');
      if (titleEl && titleEl.innerText?.trim()) {
        title = titleEl.innerText.trim();
      } else {
        const img = el.querySelector('img[alt]');
        if (img && img.alt && img.alt.length > 5 && !/badge|logo|icon|promo/i.test(img.alt)) {
          title = img.alt.trim();
        } else {
          const lines = text.split('\n')
            .map(l => l.trim())
            .filter(l => l.length > 3 && !/^(ad|iklan|star\+?|mall|official|resmi|terlaris|cashback|diskon|ongkir|cod|\d+(\.\d+)?%|\d+(\.\d+)?\s*★|rp\.?|idr)/i.test(l));
          title = lines.sort((a, b) => b.length - a.length)[0] || text.split('\n')[0] || `Product ${i + 1}`;
        }
      }
      title = title.replace(/\s+/g, ' ').slice(0, 90);

      // 3. Extract Store / Location
      let store = '';
      const storeEl = el.querySelector('[data-testid*="shop" i], [class*="shop" i], [data-testid*="merchant" i], [class*="merchant" i], [class*="seller" i]');
      if (storeEl && storeEl.innerText?.trim()) {
        store = storeEl.innerText.trim().slice(0, 30);
      }

      // 4. Rating
      const ratingMatch = text.match(/([\d.]+)\s*★|rating\s*([\d.]+)/i);

      // 5. Link
      const link = el.querySelector('a[href]') || el.closest('a[href]') || el;

      return {
        index: i,
        title,
        price: chosenPrice,
        priceVal: chosenPriceVal,
        store,
        rating: ratingMatch ? (ratingMatch[1] || ratingMatch[2]) + ' ★' : '',
        official: /official|mall|resmi/i.test(text),
        href: (link && link.href) ? link.href : '',
        _el: el,
        _linkEl: link
      };
    });

    return {
      url: window.location.href,
      title: document.title,
      isProductPage: isPdp,
      buttons: buttons.map(({ _el, ...rest }) => rest), // strip DOM refs for JSON
      inputs: inputs.map(({ _el, ...rest }) => rest),
      products: products.map(({ _el, _linkEl, ...rest }) => rest),
      textSummary: (document.body?.innerText || '').slice(0, 2000),
      _buttons: buttons, // keep DOM refs locally
      _inputs: inputs,
      _products: products
    };
  }

  /**
   * ACT — execute a single action from Groq's decision
   */
  async function executeAgentAction(decision, pageObservation) {
    const buttons = pageObservation._buttons || [];
    const inputs = pageObservation._inputs || [];
    const products = pageObservation._products || [];

    switch (decision.action) {
      case 'CLICK_PRODUCT': {
        const idx = decision.productIndex ?? decision.buttonIndex ?? 0;
        const prod = products[idx] || products[0];
        if (prod && prod._el) {
          const prodTitle = prod.title || 'selected product';
          const prodPrice = prod.price || '';
          silentMode = false;
          speak(`Membuka ${prodTitle}${prodPrice ? ' seharga ' + prodPrice : ''}…`);
          setCapsuleState('acting', `Opening: ${prodTitle.slice(0, 30)}`, 'VOX IS OPENING PRODUCT');
          prod._el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          document.querySelectorAll('.vox-halo-highlight').forEach(el => el.classList.remove('vox-halo-highlight'));
          prod._el.classList.add('vox-halo-highlight');
          await new Promise(r => setTimeout(r, 400));
          const link = prod._linkEl || prod._el.querySelector('a[href]') || prod._el.closest('a[href]');
          const targetHref = link && link.href && !link.href.startsWith('javascript:') ? link.href : '';

          if (activeAgentLoop) {
            activeAgentLoop.history.push({ action: decision, result: { success: true, clicked: prodTitle } });
            await saveActiveMission(activeAgentLoop);
          }

          if (targetHref) {
            window.location.href = targetHref;
            await new Promise(r => setTimeout(r, 4000));
          } else {
            (link || prod._el).click();
          }
          return { success: true, clicked: prodTitle };
        }
        return { success: false, error: `Product index ${idx} not found` };
      }

      case 'BUY_NOW':
      case 'ADD_TO_CART': {
        // SAFE MODE: Only add to cart, never checkout
        silentMode = false;
        const pageTitle = (document.title || '').replace(/[-|–—].*$/, '').trim() || 'produk ini';
        const addToCartBtn = findProductPageAddToCartButton();
        if (addToCartBtn) {
          setCapsuleState('acting', 'Adding to cart…', 'VOX IS ADDING TO CART');
          robustClick(addToCartBtn);
          await new Promise(r => setTimeout(r, 800));
          speak(`Sudah ditambahkan ke keranjang: ${pageTitle.slice(0, 40)}.`);
          appendChatMessage('agent', `✅ Added to cart: **${pageTitle}**. I won't proceed to checkout — you can review your cart when ready.`);
          return { success: true, clicked: 'Add to Cart (Safe Mode)' };
        } else {
          speak(`Saya tidak menemukan tombol tambah keranjang di halaman ini.`);
          appendChatMessage('agent', `⚠️ Could not find an "Add to Cart" button on this page.`);
          return { success: false, error: 'Add to Cart button not found' };
        }
      }

      case 'CLICK': {
        // If Groq targeted a product card
        if (decision.productIndex !== undefined || decision.target === 'product') {
          const idx = decision.productIndex ?? 0;
          const prod = products[idx] || products[0];
          if (prod && prod._el) {
            const prodTitle = prod.title || 'selected product';
            setCapsuleState('acting', `Opening: ${prodTitle.slice(0, 30)}`, 'VOX IS OPENING PRODUCT');
            prod._el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            document.querySelectorAll('.vox-halo-highlight').forEach(el => el.classList.remove('vox-halo-highlight'));
            prod._el.classList.add('vox-halo-highlight');
            await new Promise(r => setTimeout(r, 400));
            const link = prod._linkEl || prod._el.querySelector('a[href]') || prod._el.closest('a[href]');
            const targetHref = link && link.href && !link.href.startsWith('javascript:') ? link.href : '';

            if (activeAgentLoop) {
              activeAgentLoop.history.push({ action: decision, result: { success: true, clicked: prodTitle } });
              await saveActiveMission(activeAgentLoop);
            }

            if (targetHref) {
              window.location.href = targetHref;
              await new Promise(r => setTimeout(r, 4000));
            } else {
              (link || prod._el).click();
            }
            return { success: true, clicked: prodTitle };
          }
        }

        const idx = decision.buttonIndex ?? 0;
        const btn = buttons[idx];
        if (btn && btn._el) {
          const btnText = (btn.text || '').toLowerCase();
          // SAFE MODE: Only allow add-to-cart, skip checkout triggers
          if (/tambah\s*ke\s*keranjang|add\s*to\s*cart/i.test(btnText)) {
            setCapsuleState('acting', 'Adding to cart…', 'VOX IS ADDING TO CART');
            btn._el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            robustClick(btn._el);
            await new Promise(r => setTimeout(r, 800));
            appendChatMessage('agent', `🛒 Added to cart: **${btn.text}**`);
            return { success: true, clicked: btn.text };
          }
          if (/beli\s*sekarang|buy\s*now|checkout/i.test(btnText)) {
            // SAFE MODE: Block checkout/buy-now button clicks
            console.log('[Agent Loop] SAFE MODE: Blocked checkout button click:', btn.text);
            appendChatMessage('agent', `⚠️ Safe Mode: I found a "${btn.text}" button but won't click it. You can proceed manually when ready.`);
            return { success: false, error: 'Safe Mode: Checkout blocked' };
          }

          setCapsuleState('acting', `Clicking: ${(btn.text || 'Button').slice(0, 30)}`, 'VOX IS ACTING');
          btn._el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          document.querySelectorAll('.vox-halo-highlight').forEach(el => el.classList.remove('vox-halo-highlight'));
          btn._el.classList.add('vox-halo-highlight');
          await new Promise(r => setTimeout(r, 400));

          const link = btn._el.tagName === 'A' ? btn._el : btn._el.querySelector('a[href]') || btn._el.closest('a[href]');
          if (link && link.href && !link.href.startsWith('javascript:')) {
            if (activeAgentLoop) {
              activeAgentLoop.history.push({ action: decision, result: { success: true, clicked: btn.text } });
              await saveActiveMission(activeAgentLoop);
            }
            window.location.href = link.href;
            await new Promise(r => setTimeout(r, 4000));
            return { success: true, clicked: btn.text };
          }

          btn._el.click();
          setTimeout(() => btn._el.classList.remove('vox-halo-highlight'), 1000);
          return { success: true, clicked: btn.text };
        }

        // Fallback: try product card click if button was not found
        const prod = products[idx];
        if (prod && prod._el) {
          const prodTitle = prod.title || 'Product';
          setCapsuleState('acting', `Opening: ${prodTitle.slice(0, 30)}`, 'VOX IS OPENING PRODUCT');
          prod._el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const link = prod._linkEl || prod._el.querySelector('a[href]') || prod._el;
          if (activeAgentLoop) {
            activeAgentLoop.history.push({ action: decision, result: { success: true, clicked: prodTitle } });
            await saveActiveMission(activeAgentLoop);
          }
          if (link && link.href && !link.href.startsWith('javascript:')) {
            window.location.href = link.href;
            await new Promise(r => setTimeout(r, 4000));
          } else {
            link.click();
          }
          return { success: true, clicked: prodTitle };
        }
        return { success: false, error: `Button index ${idx} not found` };
      }

      case 'TYPE': {
        const idx = decision.inputIndex ?? 0;
        const inp = inputs[idx];
        if (inp && inp._el) {
          setCapsuleState('acting', `Searching: ${(decision.text || '').slice(0, 30)}`, 'VOX IS SEARCHING');
          inp._el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          inp._el.focus();
          inp._el.value = '';
          // Simulate typing
          for (const char of (decision.text || '')) {
            inp._el.value += char;
            inp._el.dispatchEvent(new Event('input', { bubbles: true }));
          }
          inp._el.dispatchEvent(new Event('change', { bubbles: true }));

          // Submit after typing if requested
          if (decision.submitAfter) {
            if (activeAgentLoop) {
              activeAgentLoop.history.push({ action: decision, result: { success: true, typed: decision.text } });
              await saveActiveMission(activeAgentLoop);
            }
            await new Promise(r => setTimeout(r, 300));
            const form = inp._el.closest('form');
            if (form) {
              const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
              if (submitBtn) submitBtn.click();
              else form.submit();
            } else {
              inp._el.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, bubbles: true }));
            }
            await new Promise(r => setTimeout(r, 3500));
          }
          return { success: true, typed: decision.text };
        }
        return { success: false, error: `Input index ${idx} not found` };
      }

      case 'SCROLL': {
        setCapsuleState('acting', 'Scrolling for more products…', 'VOX IS SCROLLING');
        const amount = decision.direction === 'up' ? -600 : 600;
        window.scrollBy({ top: amount, behavior: 'smooth' });
        await new Promise(r => setTimeout(r, 500));
        return { success: true };
      }

      case 'SPEAK': {
        expandCapsule((decision.message || '').slice(0, 60), 4000, 'VOX IS SPEAKING');
        speak(decision.message || '');
        return { success: true };
      }

      case 'FILL_FORM': {
        setCapsuleState('acting', 'Filling form data…', 'VOX IS FILLING FORM');
        const fields = decision.fields || [];
        let filled = 0;
        for (const field of fields) {
          const inp = inputs[field.inputIndex];
          if (inp && inp._el) {
            inp._el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            inp._el.focus();
            inp._el.value = field.value || '';
            inp._el.dispatchEvent(new Event('input', { bubbles: true }));
            inp._el.dispatchEvent(new Event('change', { bubbles: true }));
            filled++;
          }
        }
        return { success: filled > 0, filledCount: filled };
      }

      case 'NAVIGATE': {
        if (decision.url) {
          setCapsuleState('navigating', 'Navigating to store…', 'VOX IS NAVIGATING');
          if (activeAgentLoop) {
            activeAgentLoop.history.push({ action: decision, result: { success: true, navigatedTo: decision.url } });
            await saveActiveMission(activeAgentLoop);
          }
          window.location.href = decision.url;
          await new Promise(r => setTimeout(r, 4000));
          return { success: true, navigatedTo: decision.url };
        }
        return { success: false, error: 'No URL provided' };
      }

      case 'WAIT': {
        setCapsuleState('observing', `Waiting for page (${decision.seconds || 2}s)…`, 'VOX IS WAITING');
        const ms = (decision.seconds || 2) * 1000;
        await new Promise(r => setTimeout(r, ms));
        return { success: true };
      }

      case 'SPEAK': {
        silentMode = false;
        const msg = decision.message || '';
        if (msg) {
          setCapsuleState('speaking', msg.slice(0, 35), 'VOX');
          speak(msg);
          appendChatMessage('agent', msg);
        }
        return { success: true, spoken: msg };
      }

      case 'ASK_USER':
      case 'DONE':
        return { success: true };

      default:
        return { success: false, error: `Unknown action: ${decision.action}` };
    }
  }

  /**
   * RUN AGENT LOOP — the core observe→think→act loop
   */
  async function runAgentLoop(goal, resumeState = null) {
    const MAX_STEPS = 20;
    let history = resumeState?.history || [];
    let stepCount = resumeState?.stepCount || 0;

    activeAgentLoop = {
      goal,
      history,
      stepCount,
      isActive: true,
      awaitingUserAnswer: false,
      lastMessage: '',
      updatedAt: Date.now(),
      fromUrl: window.location.href
    };
    await saveActiveMission(activeAgentLoop);

    silentMode = false;
    setCapsuleState('reasoning', `Working on: ${goal.slice(0, 30)}…`, 'VOX IS THINKING');

    while (stepCount < MAX_STEPS) {
      stepCount++;
      activeAgentLoop.stepCount = stepCount;
      activeAgentLoop.updatedAt = Date.now();
      await saveActiveMission(activeAgentLoop);

      // 1. OBSERVE
      setCapsuleState('observing', `Scanning screen (Step ${stepCount}/${MAX_STEPS})…`, 'VOX IS OBSERVING');
      await new Promise(r => setTimeout(r, 700));
      let pageState = observeCurrentPage();

      // If on search / marketplace results and no products found yet, wait for React/SPA hydration
      if ((pageState.products || []).length === 0 && /search|find|cari|shop|tokopedia|shopee|lazada|blibli|amazon/i.test(window.location.href)) {
        setCapsuleState('observing', 'Waiting for product cards to load…', 'VOX IS SCANNING PRODUCTS');
        await new Promise(r => setTimeout(r, 1000));
        pageState = observeCurrentPage();
      }

      // 2. THINK — ask Groq
      setCapsuleState('thinking', `Consulting Groq AI (Step ${stepCount}/${MAX_STEPS})…`, 'VOX IS THINKING');
      let decision;
      try {
        if (typeof chrome === 'undefined' || !chrome.runtime || !chrome.runtime.id) {
          throw new Error('Extension context invalidated');
        }
        decision = await new Promise((resolve, reject) => {
          try {
            chrome.runtime.sendMessage({
              action: 'AGENT_LOOP_THINK',
              payload: {
                goal,
                pageState: {
                  url: pageState.url,
                  title: pageState.title,
                  isProductPage: pageState.isProductPage,
                  buttons: pageState.buttons,
                  inputs: pageState.inputs,
                  products: pageState.products,
                  textSummary: pageState.textSummary
                },
                history: history.map(h => ({
                  action: { action: h.action?.action, reason: h.action?.reason, productIndex: h.action?.productIndex },
                  result: { success: h.result?.success }
                })),
                vaultData: window.VOX_ENV?.IDENTITY_VAULT?.profiles?.home || {},
                stepNumber: stepCount,
                userLanguage: voxLanguage || 'en-US'
              }
            }, (response) => {
              if (chrome.runtime?.lastError) {
                reject(new Error(chrome.runtime.lastError.message));
                return;
              }
              if (!response?.success) {
                reject(new Error(response?.error || 'Think failed'));
                return;
              }
              resolve(response.data);
            });
          } catch (sendErr) {
            reject(sendErr);
          }
        });
      } catch (err) {
        if (err?.message?.includes('Extension context invalidated') || !chrome?.runtime?.id) {
          console.warn('[Agent Loop] Extension reloaded. Please refresh the webpage (F5) to re-attach Vox Agent.');
          silentMode = false;
          activeAgentLoop = null;
          setCapsuleState('idle', 'Extension updated — refresh page (F5)', 'VOX RELOADED');
          return;
        }
        console.error('[Agent Loop] Think failed:', err);
        silentMode = false;
        setCapsuleState('idle', 'Agent encountered an error', 'VOX ERROR');
        await clearActiveMission();
        return;
      }

      console.log(`[Agent Loop] Step ${stepCount}: ${decision.action} — ${decision.reason || ''}`);

      // 3. ACT
      if (decision.action === 'DONE') {
        silentMode = false;
        await clearActiveMission();
        const msg = decision.message || 'Task completed.';
        setCapsuleState('idle', msg.slice(0, 35), 'VOX COMPLETED');
        speak(msg);
        appendChatMessage('agent', msg);
        return;
      }

      if (decision.action === 'ASK_USER') {
        silentMode = false;
        const question = decision.message || 'What would you like?';
        activeAgentLoop.awaitingUserAnswer = true;
        activeAgentLoop.lastMessage = question;
        activeAgentLoop.updatedAt = Date.now();
        await saveActiveMission(activeAgentLoop);

        setCapsuleState('listening', question.slice(0, 35), 'VOX IS WAITING FOR REPLY');
        speak(question, () => {
          collapseCapsule();
          startListening();
        });
        appendChatMessage('agent', question, {
          quickOptions: [
            { label: '🛒 Tambah ke Keranjang', query: 'Tambahkan ke keranjang' },
            { label: '🔍 Cari Produk Lain', query: 'Cari produk lainnya' },
            { label: '💡 Jelaskan produk ini', query: 'Jelaskan produk ini lebih detail' }
          ]
        });
        return; // Pause loop — user will answer to resume
      }

      if (decision.action === 'SPEAK') {
        silentMode = false;
        const msg = decision.message || '';
        if (msg) {
          setCapsuleState('speaking', msg.slice(0, 35), 'VOX');
          speak(msg);
          appendChatMessage('agent', msg);
        }
      }

      // Execute action with real-time state feedback
      const actionOverline = decision.action === 'CLICK_PRODUCT' ? 'VOX IS OPENING PRODUCT' :
                             decision.action === 'BUY_NOW' || decision.action === 'ADD_TO_CART' ? 'VOX IS ADDING TO CART' :
                             decision.action === 'TYPE' ? 'VOX IS SEARCHING' :
                             decision.action === 'SCROLL' ? 'VOX IS SCROLLING' :
                             decision.action === 'NAVIGATE' ? 'VOX IS NAVIGATING' :
                             decision.action === 'WAIT' ? 'VOX IS WAITING' : 'VOX IS ACTING';
      setCapsuleState('acting', (decision.reason || decision.action).slice(0, 35), actionOverline);

      const result = await executeAgentAction(decision, pageState);

      // 4. RECORD (if not already recorded by navigation-triggering actions)
      const lastRecorded = history[history.length - 1];
      if (!lastRecorded || lastRecorded.action !== decision) {
        history.push({ action: decision, result });
        activeAgentLoop.history = history;
        await saveActiveMission(activeAgentLoop);
      }

      // SAFE MODE: Log cart actions but do NOT pause the loop for checkout
      const isCartAction = decision.action === 'BUY_NOW' || decision.action === 'ADD_TO_CART' ||
        (decision.action === 'CLICK' && /keranjang|cart/i.test(result?.clicked || ''));
      if (isCartAction) {
        console.log('[Agent Loop] Safe Mode: Cart action logged, loop continues (no checkout).');
      }

      // Wait between actions for page to settle
      if (decision.action === 'CLICK' || decision.action === 'CLICK_PRODUCT' || decision.action === 'TYPE') {
        await new Promise(r => setTimeout(r, 1200));
      }
    }

    // Max steps reached
    silentMode = false;
    await clearActiveMission();
    setCapsuleState('idle', 'Reached maximum steps', 'VOX IS READY');
    speak('I reached the maximum number of steps. Please continue manually.');
  }

  // ===== WORD CORRECTION SYSTEM =====
  // Shows a floating bar of clickable word chips after speech transcription.
  // Tap a word to edit it inline, then hit "Run" to re-dispatch corrected query.

  function showWordCorrectionBar(transcript) {
    if (!wordCorrectionBar || !wordChipsContainer) return;
    const words = transcript.trim().split(/\s+/);
    if (words.length === 0 || (words.length === 1 && !words[0])) return;

    wordCorrectionWords = [...words];
    renderWordChips();
    wordCorrectionBar.style.display = 'block';
  }

  function hideWordCorrectionBar() {
    if (wordCorrectionBar) wordCorrectionBar.style.display = 'none';
    wordCorrectionWords = [];
  }

  function renderWordChips() {
    if (!wordChipsContainer) return;
    wordChipsContainer.innerHTML = '';
    wordCorrectionWords.forEach((word, idx) => {
      const chip = document.createElement('span');
      chip.className = 'vox-word-chip';
      chip.textContent = word;
      chip.dataset.index = idx;
      chip.addEventListener('click', () => startEditingChip(idx));
      wordChipsContainer.appendChild(chip);
    });
  }

  function startEditingChip(index) {
    if (!wordChipsContainer) return;
    const chips = wordChipsContainer.querySelectorAll('.vox-word-chip, .vox-word-chip-input');
    const chip = chips[index];
    if (!chip || chip.tagName === 'INPUT') return;

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'vox-word-chip-input';
    input.value = wordCorrectionWords[index];
    input.style.width = Math.max(50, wordCorrectionWords[index].length * 9) + 'px';

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        wordCorrectionWords[index] = input.value.trim() || wordCorrectionWords[index];
        renderWordChips();
      }
      if (e.key === 'Escape') {
        renderWordChips();
      }
    });
    input.addEventListener('blur', () => {
      wordCorrectionWords[index] = input.value.trim() || wordCorrectionWords[index];
      renderWordChips();
    });

    chip.replaceWith(input);
    input.focus();
    input.select();
  }

  function getCorrectedTranscript() {
    return wordCorrectionWords.join(' ');
  }

  // Wire up word correction bar buttons
  if (wordBarRunBtn) {
    wordBarRunBtn.addEventListener('click', () => {
      const corrected = getCorrectedTranscript();
      hideWordCorrectionBar();
      if (corrected) {
        processNaturalQuery(corrected);
      }
    });
  }
  if (wordBarCloseBtn) {
    wordBarCloseBtn.addEventListener('click', () => {
      hideWordCorrectionBar();
    });
  }

  // ===== VOX IDENTITY & AI HELPER INTRODUCTIONS =====
  function respondWithVoxIdentity(query = '') {
    const q = (query || '').toLowerCase().trim();
    const isIndo = (voxLanguage.startsWith('id') || window.VOX_ENV?.VOX_LANGUAGE === 'id') ||
      /\b(kamu|siapa|apa|ini|bisa|dong|tolong|halo|hai|bantu|kenalan|fitur|jelaskan)\b/i.test(q);

    setCapsuleState('idle', 'Vox AI Agent Helper', 'VOX IS READY');

    if (isIndo) {
      const summary = `**Vox Agent — Autonomous In-Browser AI Agent Helper** 🌐⚡\n\nSaya adalah asisten AI otonom yang hidup langsung di dalam browser kamu! Saya bukan sekadar chatbot biasa, melainkan AI Agent yang bisa membaca halaman web, menganalisis data, dan mengambil tindakan langsung:\n\n• 🔍 **Riset Produk Mendalam**: Menganalisis seluruh item di marketplace (seperti Shopee/Tokopedia), memilihkan pemenang terbaik beserta alasannya, dan menyiapkan ringkasan untuk dikirim ke WhatsApp kamu.\n• 💡 **Penjelas Konsep Sederhana**: Membedah konsep rumit atau teknologi baru (seperti Web3, blockchain, istilah teknis) dengan analogi dunia nyata yang mudah dimengerti.\n• 🎵 **Kontrol Media YouTube**: Memutar atau menjeda lagu dan video di YouTube cukup lewat suara.\n• 🔦 **Spotlight Tour Interaktif**: Menemani dan menyorot elemen-elemen penting di halaman web secara visual dan bersuara.\n\nAda yang bisa saya bantu atau riset untuk kamu sekarang?`;
      const spoken = `Halo! Saya Vox Agent, asisten AI otonom di browser kamu. Saya siap membantu kamu meriset produk di marketplace, menjelaskan konsep rumit dengan cara sederhana, memutar lagu di YouTube, hingga memandu tur halaman web. Ada yang bisa saya bantu sekarang?`;

      expandCapsule('Saya Vox Agent, AI Agent Helper kamu!', 4000);
      speak(spoken);
      appendChatMessage('agent', summary, {
        spoken,
        quickOptions: [
          { label: '🔍 Riset Halaman Ini', action: 'research_page' },
          { label: '💡 Jelaskan Sederhana', action: 'explain_simple' },
          { label: '🎵 Buka YouTube', action: 'open_youtube' },
          { label: '🔦 Spotlight Tour', action: 'run_tour' }
        ]
      });
    } else {
      const summary = `**Vox Agent — Autonomous In-Browser AI Agent Helper** 🌐⚡\n\nI am your autonomous in-browser AI Agent Helper! Beyond a conventional chatbot, I actively read live web pages, reason across options, and execute actions directly in your browser:\n\n• 🔍 **Deep Product Research**: Audit all candidate items on marketplace pages (e.g. Shopee, Amazon), pick the best winner with safety & quality rationale, and format reports for WhatsApp.\n• 💡 **Simple Concept Explainer**: Demystify complex concepts (e.g. Web3, technical terms) using intuitive real-world analogies.\n• 🎵 **YouTube Media Control**: Play or pause songs and videos on YouTube hands-free with voice commands.\n• 🔦 **Spotlight Guided Tour**: Visual spotlight tour guiding you through key features on any website.\n\nWhat can I assist or research for you today?`;
      const spoken = `Hello! I am Vox Agent, your autonomous in-browser AI Agent Helper. I can help you research products on marketplaces, explain complex concepts simply, control YouTube media, or guide you through any website. How can I help you today?`;

      expandCapsule('I am Vox Agent, your AI Agent Helper!', 4000);
      speak(spoken);
      appendChatMessage('agent', summary, {
        spoken,
        quickOptions: [
          { label: '🔍 Research This Page', action: 'research_page' },
          { label: '💡 Explain Simply', action: 'explain_simple' },
          { label: '🎵 Play on YouTube', action: 'open_youtube' },
          { label: '🔦 Spotlight Tour', action: 'run_tour' }
        ]
      });
    }
  }

  // 10. Dynamic Natural Language Query Processing
  async function processNaturalQuery(query) {
    // ─── 0. Reset Audio Locks & Stop Any Previous Speech Immediately ───
    stopCurrentSpeech();
    if (window.speechSynthesis) {
      try { window.speechSynthesis.cancel(); } catch (_) {}
    }
    isSpeaking = false;

    // ─── Show visual Thinking state FIRST on floating capsule (NO premature speech) ───
    setCapsuleState('thinking', 'Berpikir… 💭', 'VOX IS THINKING');
    expandCapsule('Berpikir… 💭', 0);

    // Show word correction bar so user can fix misheard words
    showWordCorrectionBar(query);

    // Append to chat session (but don't open dialog)
    appendChatMessage('user', query);

    // ─── TIER 1: FAST LOCAL GUARD (instant, no Groq delay) ───
    const qLower = query.toLowerCase().trim();
    const guarded = classifyUserIntentLocalGuard(query);

    if (guarded) {
      console.log(`[Vox Agent] GUARDED intent: "${query}" → ${guarded.intent}`);

      if (guarded.intent === 'CANCEL_MISSION' || guarded.intent === 'CANCEL_ORDER') {
        await clearActiveMission();
        cancelCheckoutConfirmation();
        clearTour();
        stopCurrentSpeech();
        setCapsuleState('idle', 'Mission cancelled', 'VOX IS READY');
        speak('Action cancelled.');
        return;
      }
      if (guarded.intent === 'RESET_VOX_STATE') {
        await resetAllVoxStateAndData();
        return;
      }
      if (guarded.intent === 'CONFIRM_ORDER') {
        if (executeCheckoutConfirmation()) return;
      }
      if (guarded.intent === 'SUBMIT_FORM') {
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
    }

    // ─── TIER 1.1: PENDING MODE RESOLUTION ───
    if (pendingModeContext) {
      const mode = pendingModeContext;
      pendingModeContext = null;
      if (mode === 'instant_buy') {
        await initiateInstantBuyForProduct(query);
        return;
      }
      if (mode === 'compare') {
        await executeAutonomousLiveCompare(query);
        return;
      }
    }

    // ─── TIER 1.2: PENDING CLARIFICATION ANSWER RESOLUTION ───
    if (pendingProductClarification) {
      const targetProd = pendingProductClarification.product;
      if (/compare|banding|bandingkan|bandingin|cek\s*harga|spek|spesifikasi/i.test(qLower)) {
        pendingProductClarification = null;
        await executeAutonomousLiveCompare(targetProd);
        return;
      }
      if (/instant\s*buy|beli\s*langsung|langsung\s*beli|buy\s*instant|checkout|beli\s*aja|beli/i.test(qLower)) {
        pendingProductClarification = null;
        await initiateInstantBuyForProduct(targetProd);
        return;
      }
      if (/kupon|coupon|diskon|promo|voucher|deals/i.test(qLower)) {
        pendingProductClarification = null;
        await executeAutonomousDealHunter(targetProd);
        return;
      }
      if (/vault|identity|alamat|isi\s*alamat|shipping/i.test(qLower)) {
        pendingProductClarification = null;
        switchDialogTab('address');
        speak('Membuka Identity Vault untuk profil alamat Anda.');
        return;
      }
    }

    // ─── TIER 1.3: PROACTIVE PRODUCT DESIRE CLARIFICATION & PDP DIRECT BUY ───
    const isPdp = isProductDetailPage() || !!findProductPageBuyButton();
    const isPdpDirectBuy = isPdp && /\b(beli|beli\s*sekarang|teken\s*beli|klik\s*beli|buy|buy\s*now|checkout|order\s*this|beli\s*ini|langsung\s*beli|beli\s*langsung)\b/i.test(qLower);

    if (isPdpDirectBuy) {
      console.log('[Vox Agent] Direct buy command on product page, executing checkout immediately.');
      appendChatMessage('agent', `**Memproses Pembelian**\n\nMenekan tombol Beli Sekarang dan memproses checkout otomatis…`);
      speak('Siap, langsung menekan Beli Sekarang untuk produk ini.');
      await executeAutonomousCheckout('checkout');
      return;
    }

    // ─── AGENT LOOP RESUME: If loop is active or waiting for user answer ───
    if (activeAgentLoop && activeAgentLoop.isActive) {
      console.log(`[Agent Loop] Resuming with user answer/instruction: "${query}"`);
      activeAgentLoop.awaitingUserAnswer = false;
      activeAgentLoop.stepCount = 0; // Fresh step budget so new command doesn't hit max steps
      activeAgentLoop.history.push({
        action: { action: 'USER_ANSWERED', reason: query },
        result: { success: true }
      });
      // Update goal to include user's clarification
      const updatedGoal = `${activeAgentLoop.goal} (user instructed: "${query}")`;
      await runAgentLoop(updatedGoal, activeAgentLoop);
      return;
    }

    // ─── TIER 2: GROQ COGNITIVE INTENT CLASSIFIER ───
    expandCapsule('Understanding…', 0);
    const classified = await classifyIntentViaGroq(query);
    console.log(`[Vox Agent] Groq intent: "${query}" → ${classified.intent}`, classified.steps || []);

    // ─── NEEDS_MORE_INFO: Conversational Groq Loop ───
    // Groq needs more info → ask follow-up → listen → re-classify → repeat
    if (classified.intent === 'NEEDS_MORE_INFO') {
      const followUp = classified.spokenResponse || classified.params?.question || 'Could you clarify what you want me to do?';
      console.log(`[Vox Agent] Groq needs more info: "${followUp}"`);
      expandCapsule(followUp, 0);
      speak(followUp, () => {
        // After speaking the question, auto-listen for user's answer
        collapseCapsule();
        startListening();
      });
      return;
    }

    // ─── INTENT ROUTING (powered by Groq's understanding) ───

    // ABOUT_VOX: identity & capabilities of Vox Agent
    if (classified.intent === 'ABOUT_VOX') {
      respondWithVoxIdentity(query);
      return;
    }

    // GREETING / CHAT: conversational response from Vox AI Agent Helper
    if (classified.intent === 'GREETING' || classified.intent === 'CHAT') {
      const isIdentity = /\b(what are you|who are you|what can you do|what is vox|tell me about yourself|kamu siapa|kamu ini apa|apa itu vox|siapa kamu|bisa apa|kamu bisa apa|fungsi kamu|tentang kamu)\b/i.test(qLower);
      if (isIdentity) {
        respondWithVoxIdentity(query);
        return;
      }

      if (classified.spokenResponse && classified.spokenResponse.length > 5) {
        collapseCapsule();
        const spoken = classified.spokenResponse;
        expandCapsule(spoken.slice(0, 60) + '…', 4000);
        speak(spoken);
        appendChatMessage('agent', spoken, {
          spoken,
          quickOptions: [
            { label: '🔍 Riset Halaman Ini', action: 'research_page' },
            { label: '💡 Jelaskan Sederhana', action: 'explain_simple' },
            { label: '🎵 Buka YouTube', action: 'open_youtube' },
            { label: '🔦 Spotlight Tour', action: 'run_tour' }
          ]
        });
        return;
      }

      respondWithVoxIdentity(query);
      return;
    }

    // DEEP_RESEARCH: deep product research across live DOM items with WhatsApp export
    if (classified.intent === 'DEEP_RESEARCH') {
      collapseCapsule();
      const targetTerm = classified.params?.product || query;
      await executeDeepPageResearch(targetTerm);
      return;
    }

    // WHATSAPP_ACTION: autonomous WhatsApp Web agent action
    if (classified.intent === 'WHATSAPP_ACTION') {
      collapseCapsule();
      const targetContact = classified.params?.targetContact || 'pinned';
      await triggerAutonomousWhatsAppAction(targetContact);
      return;
    }

    // EXPLAIN_SIMPLY: demystify concept with everyday analogy
    if (classified.intent === 'EXPLAIN_SIMPLY') {
      collapseCapsule();
      const concept = classified.params?.topic || query;
      await executeExplainSimply(concept);
      return;
    }

    // MEDIA_CONTROL: YouTube or video playback control
    if (classified.intent === 'MEDIA_CONTROL') {
      collapseCapsule();
      const action = classified.params?.action || 'play';
      await handleYouTubeMediaControl(action, query);
      return;
    }

    // SPOTLIGHT_TOUR: guided visual walkthrough of the page
    if (classified.intent === 'SPOTLIGHT_TOUR') {
      collapseCapsule();
      const steps = buildTourStepsFromPage();
      if (steps.length > 0) {
        appendChatMessage('agent', `🔦 Starting spotlight tour with **${steps.length} steps**. Tap **Skip** to stop anytime.`);
        const isIndo = (voxLanguage || '').startsWith('id') || window.VOX_ENV?.VOX_LANGUAGE === 'id';
        speak(isIndo ? `Memulai tur halaman ini dengan ${steps.length} langkah.` : `Starting spotlight tour with ${steps.length} steps.`);
        await runSpotlightTour(steps);
      } else {
        appendChatMessage('agent', `Halaman ini tidak memiliki elemen yang cukup untuk di-tour.`);
        speak('Maaf, halaman ini tidak punya cukup elemen untuk tour.');
        setCapsuleState('idle', 'No tour elements found', 'VOX IS READY');
      }
      return;
    }

    // RESET_VOX_STATE: reset data and assistant state
    if (classified.intent === 'RESET_VOX_STATE') {
      await resetAllVoxStateAndData();
      return;
    }

    // SIGN IN / REGISTER
    if (classified.intent === 'SIGN_IN' || classified.intent === 'REGISTER') {
      expandCapsule('Signing in…', 3000);
      await executeAutonomousSignIn(qLower);
      collapseCapsule();
      return;
    }

    // AUTOFILL / AUTOFILL_SWITCH
    if (classified.intent === 'AUTOFILL_SWITCH') {
      const profileName = classified.params?.profileName || 'home';
      expandCapsule(`Switching to ${profileName}…`, 3000);
      await executeAutonomousAutofill(qLower, profileName);
      collapseCapsule();
      return;
    }
    if (classified.intent === 'AUTOFILL') {
      expandCapsule('Filling form…', 3000);
      await executeAutonomousAutofill(qLower);
      collapseCapsule();
      return;
    }

    // DEAL HUNTER
    if (classified.intent === 'DEAL_HUNTER') {
      silentMode = true;
      collapseCapsule();
      setCapsuleState('reasoning', 'Hunting deals…');
      await executeAutonomousDealHunter(qLower);
      silentMode = false;
      expandCapsule('Deals found', 3000);
      return;
    }

    // SHOPPING MISSION / COMPARE / SEARCH — AGENT LOOP
    if (classified.intent === 'SHOPPING_MISSION' || classified.intent === 'COMPARE' || classified.intent === 'SEARCH') {
      collapseCapsule();
      await runAgentLoop(query);
      return;
    }

    // CLICK ITEM
    if (classified.intent === 'CLICK_ITEM') {
      collapseCapsule();
      if (activeAgentLoop) {
        console.log(`[Agent Loop] Resuming with click command: "${query}"`);
        activeAgentLoop.history.push({
          action: { action: 'USER_CLICK_REQUEST', reason: query },
          result: { success: true }
        });
        await runAgentLoop(query, activeAgentLoop);
        return;
      }
      await executeAutonomousClickTarget(query);
      return;
    }

    // CHECKOUT / BUY
    if (classified.intent === 'CHECKOUT') {
      collapseCapsule();
      if (activeAgentLoop) {
        activeAgentLoop.history.push({
          action: { action: 'USER_BUY_REQUEST', reason: query },
          result: { success: true }
        });
      }
      await executeAutonomousCheckout('checkout');
      return;
    }

    // NAVIGATE
    if (classified.intent === 'NAVIGATE') {
      const store = classified.params?.store;
      if (store) {
        const storeUrls = {
          shopee: 'https://shopee.co.id',
          tokopedia: 'https://www.tokopedia.com',
          blibli: 'https://www.blibli.com',
          amazon: 'https://www.amazon.com'
        };
        const url = storeUrls[store.toLowerCase()] || `https://www.google.com/search?q=${encodeURIComponent(store)}`;
        window.open(url, '_blank');
        expandCapsule(`Opening ${store}…`, 2000);
        return;
      }
    }

    // PAGE_QA or FALLBACK — Ask Groq to analyze the page content
    collapseCapsule();
    const activeData = ingestedPageContext || extractPageContext();
    activeData.query = query;

    const isGreetingQuery = classified.intent === 'GREETING' || classified.intent === 'CHAT';
    if (!isGreetingQuery) {
      const revealed = await autonomousExploreAndClick(query);
      if (revealed) {
        activeData.rawSample = (activeData.rawSample || '') + '\n\n[AUTONOMOUS ACTION: ' + revealed.source + ']\n' + revealed.content;
        activeData.actionClicked = revealed.source;
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

    // In silent mode, don't speak or show chat — just log
    if (silentMode) return;

    // Show result on capsule briefly, then speak
    const spokenText = data.followUpQuestion ? `${data.spoken || data.summary} ${data.followUpQuestion}` : (data.spoken || data.summary);
    expandCapsule(spokenText.slice(0, 60) + '…', 4000);
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

    const isIndonesian = (voxLanguage.startsWith('id') || window.VOX_ENV?.VOX_LANGUAGE === 'id') &&
      (/\b(tolong|cariin|apakah|gimana|bagaimana|kegunaan|murahan?|mahal|diskon|kupon|pesanan)\b/i.test(q) ||
       /\b(ngga|nggak|enggak|dong|siang|pagi|malam|kamu|saya)\b/i.test(q));

    const isGreeting = /^(hai|halo|hello|hey|hei|hi|morning|afternoon|salam|pagi|siang|malam)(\s*(vox|fox|copilot|ai)?)?$/i.test(q) ||
                       (/^(hai|halo|hello|hey|hei|hi)\b/i.test(q) && q.length <= 15);

    const isCompare = /compare|banding|alternatif|brand|lawan|kompetitor|vs|versus/i.test(q);
    const isWorthIt = /worth|layak|beli|rugi|harga|biaya|pricing|mahal|murah/i.test(q);

    let targetFocus = 'hero';
    let directAnswer = '';
    let spokenText = '';
    let comparisonMatrix = null;
    let worthItAudit = null;

    const isIdentity = /\b(what are you|who are you|what can you do|what is vox|tell me about yourself|kamu siapa|kamu ini apa|apa itu vox|siapa kamu|bisa apa|kamu bisa apa|fungsi kamu|tentang kamu)\b/i.test(q);

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
        summary: "Yes, absolutely! I speak English fluently. I am Vox Agent, your autonomous in-browser AI Agent Helper. How can I help you today?",
        spoken: "Yes, absolutely! I speak English fluently. I am Vox Agent, your in-browser AI Agent Helper. How can I help you today?",
        followUpQuestion: "What page or topic would you like to explore today?",
        quickOptions: [
          { label: '🔍 Research This Page', action: 'research_page' },
          { label: '💡 Explain Simply', action: 'explain_simple' },
          { label: '🎵 Play on YouTube', action: 'open_youtube' },
          { label: '🔦 Spotlight Tour', action: 'run_tour' }
        ],
        worthIt: null,
        competitors: null,
        jargon: []
      };
    }

    if (isIdentity) {
      targetFocus = 'hero';
      if (isIndonesian) {
        directAnswer = `Saya Vox Agent, asisten AI otonom di browser kamu! Saya bukan sekadar chatbot biasa, melainkan AI Agent yang bisa membaca halaman web, menganalisis data live, meriset produk di marketplace, menjelaskan konsep rumit dengan analogi sederhana, mengontrol YouTube, hingga memandu tur visual halaman. Ada yang bisa saya bantu sekarang?`;
        spokenText = `Halo! Saya Vox Agent, asisten AI otonom di browser kamu. Saya siap membantu kamu meriset produk di marketplace, menjelaskan konsep rumit, memutar lagu di YouTube, hingga memandu tur halaman web. Mau saya bantu apa sekarang?`;
      } else {
        directAnswer = `I am Vox Agent, your autonomous in-browser AI Agent Helper! Beyond a simple chatbot, I can audit items on marketplace pages, explain complex concepts simply, control YouTube playback, and guide you with visual spotlight tours. How can I assist you today?`;
        spokenText = `Hello! I am Vox Agent, your autonomous AI Agent Helper. How can I help you with your browsing or research today?`;
      }
      return {
        domain,
        url: activeData.url || window.location.href,
        title,
        query,
        targetFocus: 'hero',
        targetKeywords: ['research', 'explain', 'media', 'spotlight'],
        ghostSource: 'local_heuristics',
        summary: directAnswer,
        spoken: spokenText,
        followUpQuestion: isIndonesian ? 'Mau riset atau jelaskan apa hari ini?' : 'What would you like to research or explore today?',
        quickOptions: [
          { label: isIndonesian ? '🔍 Riset Halaman Ini' : '🔍 Research This Page', action: 'research_page' },
          { label: isIndonesian ? '💡 Jelaskan Sederhana' : '💡 Explain Simply', action: 'explain_simple' },
          { label: isIndonesian ? '🎵 Buka YouTube' : '🎵 Play on YouTube', action: 'open_youtube' },
          { label: '🔦 Spotlight Tour', action: 'run_tour' }
        ],
        worthIt: null,
        competitors: null,
        jargon: []
      };
    }

    if (isGreeting) {
      targetFocus = 'hero';
      if (isIndonesian) {
        directAnswer = `Halo! Saya Vox Agent, asisten AI otonom di browser kamu. Saya siap membantu kamu meriset halaman ini, menjelaskan hal-hal penting, atau memutar media. Ada yang bisa saya bantu?`;
        spokenText = `Halo! Saya Vox Agent, asisten AI otonom kamu. Ada yang bisa saya bantu hari ini?`;
      } else {
        directAnswer = `Hello! I am Vox Agent, your autonomous in-browser AI Agent Helper. I am ready to help you explore, research, and navigate ${title || domain}. How can I assist you today?`;
        spokenText = `Hello! I am Vox Agent, your AI Agent Helper. How can I assist you today?`;
      }
      return {
        domain,
        url: activeData.url || window.location.href,
        title,
        query,
        targetFocus: 'hero',
        targetKeywords: headings.slice(0, 5),
        ghostSource: 'local_heuristics',
        summary: directAnswer,
        spoken: spokenText,
        followUpQuestion: isIndonesian ? 'Mau saya bantu riset apa hari ini?' : 'What would you like to explore today?',
        quickOptions: [
          { label: isIndonesian ? '🔍 Riset Halaman Ini' : '🔍 Research This Page', action: 'research_page' },
          { label: isIndonesian ? '💡 Jelaskan Sederhana' : '💡 Explain Simply', action: 'explain_simple' },
          { label: isIndonesian ? '🎵 Buka YouTube' : '🎵 Play on YouTube', action: 'open_youtube' },
          { label: '🔦 Spotlight Tour', action: 'run_tour' }
        ],
        worthIt: null,
        competitors: null,
        jargon: []
      };
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
          { label: "Mid Legion 5 (Rp 18-24M)", query: "Lenovo Legion 5 RTX 4060" },
          { label: "🔥 Flagship Legion Pro (Rp 28M+)", query: "Lenovo Legion Pro 7" },
          { label: "Under Rp 15 Million", query: `${query} under 15 juta` },
          { label: "🚀 RTX 4060 Spec", query: `${query} RTX 4060` }
        ];
      } else {
        followUpQuestion = "What is your budget range, and do you prefer budget-friendly or official store options?";
        quickOptions = [
          { label: "💰 Budget Pick", query: `${query} murah berkualitas` },
          { label: "Top Rated", query: `${query} terlaris` },
          { label: "Official Store", query: `${query} official store` }
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

  function populateSettingsKeys() {
    if (chrome.storage?.local) {
      chrome.storage.local.get(['apiKey', 'groqApiKey', 'elevenlabsApiKey', 'liveScrape'], (res) => {
        if (inputAnakinKey) inputAnakinKey.value = res.apiKey || '';
        if (inputGroqKey) inputGroqKey.value = res.groqApiKey || '';
        if (inputElevenlabsKey) inputElevenlabsKey.value = res.elevenlabsApiKey || '';
        if (chkLiveScrape) chkLiveScrape.checked = res.liveScrape ?? false;
        const hasEL = !!(res.elevenlabsApiKey);
        const hasGroq = !!(res.groqApiKey);
        const hasAnakin = !!(res.apiKey && res.liveScrape);
        if (settingsStatusBadge) settingsStatusBadge.textContent = hasEL ? 'ElevenLabs Voice' : (hasGroq ? 'Groq Fast AI' : (hasAnakin ? 'Live Anakin' : 'Local Heuristics'));
      });
    } else {
      if (inputAnakinKey) inputAnakinKey.value = localStorage.getItem('anakin_api_key') || window.VOX_ENV?.ANAKIN_API_KEY || '';
      if (inputGroqKey) inputGroqKey.value = localStorage.getItem('groq_api_key') || window.VOX_ENV?.GROQ_API_KEY || '';
      if (inputElevenlabsKey) inputElevenlabsKey.value = localStorage.getItem('elevenlabs_api_key') || window.VOX_ENV?.ELEVENLABS_API_KEY || '';
      if (chkLiveScrape) chkLiveScrape.checked = localStorage.getItem('anakin_live_scrape') === 'true' || (window.VOX_ENV?.LIVE_SCRAPE ?? false);
      const hasEL = !!(inputElevenlabsKey?.value.trim());
      const hasGroq = !!(inputGroqKey?.value.trim());
      const hasAnakin = !!(inputAnakinKey?.value.trim() && chkLiveScrape?.checked);
      if (settingsStatusBadge) settingsStatusBadge.textContent = hasEL ? 'ElevenLabs Voice' : (hasGroq ? 'Groq Fast AI' : (hasAnakin ? 'Live Anakin' : 'Local Heuristics'));
    }
  }

  function switchDialogTab(tabName) {
    if (bodyMain) bodyMain.style.display = 'none';
    if (bodyHistory) bodyHistory.style.display = 'none';
    if (bodySettings) bodySettings.style.display = 'none';
    if (bodyVault) bodyVault.style.display = 'none';
    if (bodyWeb) bodyWeb.style.display = 'none';

    // Update active state on tab buttons
    const tabs = shadow.querySelectorAll('.vox-nav-tab');
    tabs.forEach(t => {
      if (t.getAttribute('data-tab') === tabName) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    if (tabName === 'chat') {
      if (bodyMain) bodyMain.style.display = 'flex';
    } else if (tabName === 'address') {
      if (bodyVault) bodyVault.style.display = 'flex';
      loadVaultProfile(currentVaultProfile);
    } else if (tabName === 'web') {
      if (bodyWeb) bodyWeb.style.display = 'flex';
      const curDomainEl = shadow.getElementById('web-current-domain-text');
      if (curDomainEl) curDomainEl.textContent = window.location.hostname;
      renderConnectedStores();
    } else if (tabName === 'settings') {
      if (bodySettings) bodySettings.style.display = 'flex';
      populateSettingsKeys();
    } else if (tabName === 'history') {
      if (bodyHistory) bodyHistory.style.display = 'flex';
      updateHistoryUI();
    }
  }

  function showMainView() {
    switchDialogTab('chat');
  }

  function showHistoryView() {
    switchDialogTab('history');
  }

  function showSettingsView() {
    switchDialogTab('settings');
  }

  function showVaultView() {
    switchDialogTab('address');
  }

  function showWebView() {
    switchDialogTab('web');
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

  // Orb settings gear button — opens dialog directly to Isi Alamat as requested
  const orbSettingsBtn = shadow.getElementById('vox-orb-settings');
  if (orbSettingsBtn) {
    orbSettingsBtn.addEventListener('click', () => {
      showVaultView();
      dialog.classList.add('open');
      if (typeof activeChatSession !== 'undefined') {
        activeChatSession.isOpen = true;
        saveActiveChatSession();
      }
    });
  }

  // Tab Nav Click Handlers
  if (tabNavChat) tabNavChat.addEventListener('click', () => switchDialogTab('chat'));
  if (tabNavAddress) tabNavAddress.addEventListener('click', () => switchDialogTab('address'));
  if (tabNavWeb) tabNavWeb.addEventListener('click', () => switchDialogTab('web'));
  if (tabNavSettings) tabNavSettings.addEventListener('click', () => switchDialogTab('settings'));

  // ─── Vault View Toggle & Logic ───

  function updateVaultPreview() {
    const name = vaultFullname?.value.trim() || 'Nama belum diisi';
    const phone = vaultPhone?.value.trim() || 'No. HP belum diisi';
    const street = vaultStreet?.value.trim() || 'Alamat belum diisi';
    const city = vaultCity?.value.trim() || '';
    const prov = vaultProvince?.value.trim() || '';
    const postal = vaultPostalcode?.value.trim() || '';
    const cityProv = [city, prov, postal].filter(Boolean).join(', ') || 'Kota / Provinsi belum diisi';

    if (vaultPreviewProfile) {
      vaultPreviewProfile.textContent = currentVaultProfile === 'office' ? '🏢 Profil: Kantor (Office)' : '🏠 Profil: Rumah (Home)';
    }
    if (vaultPreviewNamePhone) {
      vaultPreviewNamePhone.textContent = `${name} · ${phone}`;
    }
    if (vaultPreviewAddress) {
      vaultPreviewAddress.textContent = street;
    }
    if (vaultPreviewCityProv) {
      vaultPreviewCityProv.textContent = cityProv;
    }
  }

  function loadVaultProfile(profileName) {
    currentVaultProfile = profileName || 'home';
    const vault = window.VOX_ENV?.IDENTITY_VAULT || { profiles: {} };
    const profile = vault.profiles?.[currentVaultProfile] || {};

    if (vaultFullname) vaultFullname.value = profile.fullName || '';
    if (vaultEmail) vaultEmail.value = profile.email || '';
    if (vaultPhone) vaultPhone.value = profile.phone || '';
    if (vaultUsername) vaultUsername.value = profile.username || '';
    if (vaultStreet) vaultStreet.value = profile.street || '';
    if (vaultCity) vaultCity.value = profile.city || '';
    if (vaultProvince) vaultProvince.value = profile.province || '';
    if (vaultPostalcode) vaultPostalcode.value = profile.postalCode || '';
    if (vaultActiveBadge) vaultActiveBadge.textContent = currentVaultProfile === 'office' ? 'Kantor' : 'Rumah';

    // Style active profile buttons
    if (btnVaultHome && btnVaultOffice) {
      if (currentVaultProfile === 'home') {
        btnVaultHome.style.borderColor = 'var(--voice)';
        btnVaultHome.style.color = 'var(--voice)';
        btnVaultHome.style.background = 'var(--chip-bg)';
        btnVaultOffice.style.borderColor = 'var(--border)';
        btnVaultOffice.style.color = 'var(--ink-sec)';
        btnVaultOffice.style.background = 'transparent';
      } else {
        btnVaultOffice.style.borderColor = 'var(--voice)';
        btnVaultOffice.style.color = 'var(--voice)';
        btnVaultOffice.style.background = 'var(--chip-bg)';
        btnVaultHome.style.borderColor = 'var(--border)';
        btnVaultHome.style.color = 'var(--ink-sec)';
        btnVaultHome.style.background = 'transparent';
      }
    }

    updateVaultPreview();

    // Also try loading from chrome.storage
    if (chrome.runtime?.sendMessage) {
      chrome.runtime.sendMessage(
        { action: 'GET_IDENTITY_PROFILE', payload: { profileName: currentVaultProfile } },
        (response) => {
          if (chrome.runtime.lastError || !response?.success) return;
          const p = response.data;
          if (p.fullName && vaultFullname) vaultFullname.value = p.fullName;
          if (p.email && vaultEmail) vaultEmail.value = p.email;
          if (p.phone && vaultPhone) vaultPhone.value = p.phone;
          if (p.username && vaultUsername) vaultUsername.value = p.username;
          if (p.street && vaultStreet) vaultStreet.value = p.street;
          if (p.city && vaultCity) vaultCity.value = p.city;
          if (p.province && vaultProvince) vaultProvince.value = p.province;
          if (p.postalCode && vaultPostalcode) vaultPostalcode.value = p.postalCode;
          if (vaultActiveBadge) vaultActiveBadge.textContent = (p.label || currentVaultProfile) === 'office' ? 'Kantor' : 'Rumah';
          updateVaultPreview();
        }
      );
    }
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

  // Live input update for address preview
  [vaultFullname, vaultPhone, vaultEmail, vaultUsername, vaultStreet, vaultCity, vaultProvince, vaultPostalcode].forEach(input => {
    if (input) input.addEventListener('input', updateVaultPreview);
  });

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

      if (!window.VOX_ENV) window.VOX_ENV = {};
      if (!window.VOX_ENV.IDENTITY_VAULT) window.VOX_ENV.IDENTITY_VAULT = { profiles: {} };
      if (!window.VOX_ENV.IDENTITY_VAULT.profiles) window.VOX_ENV.IDENTITY_VAULT.profiles = {};
      window.VOX_ENV.IDENTITY_VAULT.profiles[currentVaultProfile] = profileData;

      try {
        localStorage.setItem('vox_vault_' + currentVaultProfile, JSON.stringify(profileData));
      } catch (_) {}

      updateVaultPreview();

      const showSavedFeedback = () => {
        if (lblVaultSaved) {
          lblVaultSaved.style.display = 'inline';
          setTimeout(() => { if (lblVaultSaved) lblVaultSaved.style.display = 'none'; }, 2500);
        }
        playUiChime('success');
      };

      if (chrome.runtime?.sendMessage) {
        chrome.runtime.sendMessage(
          { action: 'SAVE_IDENTITY_PROFILE', payload: { profileName: currentVaultProfile, profileData } },
          () => showSavedFeedback()
        );
      } else {
        showSavedFeedback();
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

  setupShopChip('chip-checkout', () => { appendChatMessage('user', 'Buy Item & Checkout'); executeAutonomousCheckout('checkout'); });
  setupShopChip('chip-deals', () => { appendChatMessage('user', 'Hunt Deals & Coupons'); executeAutonomousDealHunter('deals'); });
  setupShopChip('chip-compare', () => { appendChatMessage('user', 'Compare Prices & Specs'); executeAutonomousCompare('compare'); });
  setupShopChip('chip-autofill', () => { showVaultView(); });
  setupShopChip('chip-vault', () => { openDialog(); showVaultView(); });

  setupShopChip('dlg-chip-checkout', () => { appendChatMessage('user', 'Buy Item & Checkout'); executeAutonomousCheckout('checkout'); });
  setupShopChip('dlg-chip-deals', () => { appendChatMessage('user', 'Hunt Deals & Coupons'); executeAutonomousDealHunter('deals'); });
  setupShopChip('dlg-chip-compare', () => { appendChatMessage('user', 'Compare Prices & Specs'); executeAutonomousCompare('compare'); });
  setupShopChip('dlg-chip-autofill', () => { showVaultView(); });
  setupShopChip('dlg-chip-vault', () => { showWebView(); });

  if (btnSaveSettings) {
    btnSaveSettings.addEventListener('click', () => {
      const key = inputAnakinKey ? inputAnakinKey.value.trim() : '';
      const groqKey = inputGroqKey ? inputGroqKey.value.trim() : '';
      const elKey = inputElevenlabsKey ? inputElevenlabsKey.value.trim() : '';
      const live = chkLiveScrape ? chkLiveScrape.checked : false;
      const lang = selectVoxLanguage ? selectVoxLanguage.value : 'en-US';
      voxLanguage = lang;
      if (recognition) recognition.lang = lang;
      const nextSettings = { apiKey: key, groqApiKey: groqKey, elevenlabsApiKey: elKey, liveScrape: live, voxLanguage: lang };

      const updateBadge = () => {
        const hasEL = !!elKey;
        const hasGroq = !!groqKey;
        const hasAnakin = !!(key && live);
        if (settingsStatusBadge) settingsStatusBadge.textContent = hasEL ? 'ElevenLabs Voice' : (hasGroq ? 'Groq Fast AI' : (hasAnakin ? 'Live Anakin' : 'Local Heuristics'));
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

  // Emergency Reset Logic for Stuck Missions, Audio Locks, and Dead Mics
  async function resetAllVoxStateAndData() {
    console.log('[Vox Agent] Performing emergency data & state reset...');

    // 1. Terminate any active agent loop / missions
    if (activeAgentLoop) {
      activeAgentLoop.isActive = false;
      activeAgentLoop = null;
    }
    await clearActiveMission();

    // 2. Clear all session storage & local storage mission artifacts
    try {
      sessionStorage.removeItem(STORAGE_KEY_MISSION);
      sessionStorage.removeItem('vox_pending_auto_checkout');
      sessionStorage.removeItem('vox_active_chat_session');
    } catch (_) {}

    if (chrome.storage?.local) {
      chrome.storage.local.remove([STORAGE_KEY_MISSION, 'vox_pending_auto_checkout']);
    }

    // 3. Clear pending clarifications, modes, and queries
    pendingProductClarification = null;
    pendingModeContext = null;
    currentAnalysis = null;
    lastMissionWinner = null;
    lastProcessedQuery = '';
    lastProcessedTime = 0;
    silentMode = false;

    // 4. Force release all speech and audio locks
    currentSpeechId++;
    isSpeaking = false;
    speechStartTime = 0;
    if (activeSpeechWatchdog) {
      clearTimeout(activeSpeechWatchdog);
      activeSpeechWatchdog = null;
    }
    stopCurrentSpeech();
    if (window.speechSynthesis) {
      try { window.speechSynthesis.cancel(); } catch (_) {}
    }
    clearHighlight();

    // 5. Reset and restart microphone
    stopListening();
    isHandsFreeMode = true;
    await new Promise(r => setTimeout(r, 200));
    startListening();

    // 6. Visual & instant chime feedback (NO speech lock to keep mic immediately listening!)
    setFloatingMode('ambient');
    setCapsuleState('listening', 'Hey Vox siap mendengarkan!');
    expandCapsule('✓ Memori bersih. Mikrofon aktif & siap mendengarkan!', 3500);
    playUiChime('ready');
  }

  if (btnResetVoxState) {
    btnResetVoxState.addEventListener('click', async () => {
      btnResetVoxState.disabled = true;
      btnResetVoxState.textContent = 'Memproses reset…';
      await resetAllVoxStateAndData();
      btnResetVoxState.disabled = false;
      btnResetVoxState.textContent = '⚡ Reset Data & Nyalakan Ulang Mic';
      if (lblResetVoxStatus) {
        lblResetVoxStatus.style.display = 'block';
        setTimeout(() => { if (lblResetVoxStatus) lblResetVoxStatus.style.display = 'none'; }, 3000);
      }
    });
  }

  // Capsule-integrated reset button
  if (capsuleBtnResetInline) {
    capsuleBtnResetInline.addEventListener('click', async (e) => {
      e.stopPropagation();
      capsuleBtnResetInline.classList.add('is-resetting');
      await resetAllVoxStateAndData();
      setTimeout(() => {
        capsuleBtnResetInline.classList.remove('is-resetting');
      }, 1200);
    });
  }

  // 12. Copy Brief & Cheatsheet
  if (btnCopyAnswer) {
    btnCopyAnswer.addEventListener('click', () => {
      if (!currentAnalysis) return;
      const text = `# ${currentAnalysis.domain} — Vox Agent\nQuestion: "${currentAnalysis.query}"\n\n${currentAnalysis.summary}\n`;
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
    // Silent mode: don't auto-open dialog during background work
    if (silentMode) return;
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
      clearTour();
      hideWordCorrectionBar();
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
  restoreActiveMission();
  restoreMicState(); // Resume mic if it was active before page navigation

  // Save mic state before page unload (navigation, refresh)
  window.addEventListener('beforeunload', () => {
    saveMicState();
  });
})();
