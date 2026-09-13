# 🎨 MASTER MEGA-PROMPT V2: "VOX AGENT" END-TO-END REVOLUTION
> **Target:** Xiaomi MiMo Desktop (Code Generation & QA)  
> **Mission:** Transform Vox Agent into an intuitive, zero-slop, adaptive in-browser copilot with Auto Light/Dark Mode, Draggable Floating Widget, Audit History, and Human-First Usability.

---

## 📌 ARCHITECTURAL OBJECTIVE FOR MIMO DESKTOP
Upgrade the Vox Agent Chrome Extension into a commercial-grade, end-to-end product that anyone (from non-technical users to seasoned engineers) can use effortlessly on **any website in the world**.

The design must strictly reject "AI Slop" (no tacky emoji grids, no generic purple blur, no messy unaligned text). Instead, it must embody **bespoke precision, adaptive elegance, and zero-friction usability**.

---

```markdown
# SPECIFICATION: VOX AGENT PRODUCTION-GRADE END-TO-END UPGRADE

## 1. DUAL ADAPTIVE THEME SYSTEM (LIGHT & DARK MODE ENGINE)
The user browses both pure-white sites (e.g., Google, Wikipedia, Apple Store) and dark-mode sites (e.g., GitHub, Twitter/X, IDE docs). Vox Agent must adapt seamlessly.

### A. Automatic Luminance Sampling
- In `content.js`, calculate the effective background color and luminance of `document.body`.
- If background brightness > 60%, default to **Frosted Pearl (Light Glass)**.
- If background brightness ≤ 60%, default to **Obsidian Glass (Dark Mode)**.
- Include a manual theme toggle button (☀️ / 🌙) in the HUD header so users can force their preferred mode.

### B. Curated Design Tokens
| Token | Dark Glass Mode | Light Glass Mode | Role |
|---|---|---|---|
| `--hud-bg` | `rgba(11, 16, 30, 0.90)` | `rgba(255, 255, 255, 0.92)` | Main HUD background |
| `--card-bg`| `rgba(18, 26, 44, 0.70)` | `rgba(241, 245, 249, 0.85)` | Card backgrounds |
| `--ink-pri` | `#F1F5F9` | `#0F172A` | Primary text |
| `--ink-sec` | `#94A3B8` | `#64748B` | Labels and captions |
| `--border`  | `rgba(255, 255, 255, 0.12)` | `rgba(15, 23, 42, 0.10)` | Hairline borders |
| `--accent`  | `#22D3EE` (Electric Cyan) | `#0284C7` (Cobalt Sky) | Voice and highlights |
| `--agent`   | `#A855F7` (Neon Purple) | `#7C3AED` (Royal Violet) | Multi-agent reasoning |
| `--shadow`  | `0 20px 60px rgba(0,0,0,0.6)`| `0 20px 60px rgba(15,23,42,0.15)` | Drop shadows |

---

## 2. HUMAN-CENTERED USABILITY & ANTI-SLOP PRINCIPLES
1. **No Tacky Card Grids:** Group data into clear, scannable hierarchies:
   - *Executive 30-Second Brief* (one clear paragraph + key takeaway bullet).
   - *Ghost Comparison Table* (clean monospace grid with zebra borders).
   - *Jargon Accordion* (clean expandable pill tags with "Explain Like I'm 12" analogies).
2. **Actionable Utility (Export & Share):**
   - **"📋 Copy Brief" Button:** One-click copies a clean Markdown summary to clipboard (for Slack, Notion, WhatsApp).
   - **"📥 Download Cheatsheet":** Exports a clean 1-page `.md` or `.txt` cheatsheet of the audited site.
3. **Audio Waveform & Mute Mode:**
   - Visual soundwave that pulses naturally when AI is speaking.
   - Quick mute toggle (🔇 / 🔊) in the header for quiet environments (library, office).

---

## 3. AUDIT HISTORY & RECENT PAGES (CHROME.STORAGE)
Users should not lose their past audits when closing a tab or navigating to a new page!

### A. History Data Model
```typescript
interface AuditRecord {
  id: string;
  domain: string;
  url: string;
  title: string;
  timestamp: string;
  score: number;
  verdict: string;
  summary: string;
  jargonCount: number;
}
```

### B. In-HUD History Drawer
- Add a **"🕒 History"** tab in the HUD navigation bar alongside **"Active Audit"**.
- Clicking **History** displays chronological cards of past analyzed sites (e.g., *apple.com · 79/100 · 2 hours ago*).
- Clicking any past record **instantly reloads its full comparison report and audio summary** without re-scraping the web!
- Clear History button with confirmation.

---

## 4. DRAGGABLE & REPOSITIONABLE FLOATING ORB
On real websites, a fixed orb might sometimes cover a website's native chat widget (Intercom/Zendesk) or an "Add to Cart" button.
- **Solution:** Make the floating orb **freely draggable** along the screen edges!
- User can click & drag the orb anywhere along the screen.
- On release, the orb magnetically snaps smoothly to the nearest edge (left or right).
- Stores the last position in `chrome.storage.local` so it stays where the user placed it.

---

## 5. COMPLETE CODE IMPLEMENTATION REQUIREMENTS

Please output the complete, updated files for the Chrome Extension:

1. **`manifest.json`**:
   - Ensure permissions include `["activeTab", "scripting", "storage"]` and `"matches": ["<all_urls>"]`.
   - Add `"commands"` for the global hotkey:
     - `_execute_action` or `"toggle-vox": { "suggested_key": { "default": "Ctrl+Shift+V", "mac": "Command+Shift+V" } }`.

2. **`content.js`**:
   - Complete Shadow DOM injection.
   - Dual theme styling (Light & Dark mode auto-detection + toggle).
   - Draggable floating orb with edge snapping.
   - History storage & retrieval via `chrome.storage.local`.
   - Complete Web Speech API (STT mic recognition & TTS vocalization).
   - Ghost Comparison table, Jargon pills, and Worth-It gauge.
   - Copy to Clipboard & Download Cheatsheet functions.

3. **`background.js`**:
   - Handles message listeners, shortcut command dispatch, and Anakin.io API background scraping.

Ensure all buttons, tabs, drag events, and audio engines are 100% wired up with zero console warnings!
```
