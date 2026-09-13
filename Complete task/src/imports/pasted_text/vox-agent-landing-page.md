Design a single-page landing page for "Vox Agent", an autonomous in-browser AI agent built as a Chrome Extension (Manifest V3). This is a hackathon project for the Anakin Forge Hackathon under the theme "Build AI Agents That Read, Reason, and Act."

--- PRODUCT IDENTITY ---

Name: Vox Agent
Tagline: "Read, Reason, and Act — Directly Inside Your Browser"
One-liner: An autonomous voice AI agent that lives as a floating capsule on any website, scraping live DOM elements, reasoning through complex decisions via Groq Cloud, and executing physical browser actions hands-free with realistic human voice feedback via ElevenLabs.

It is NOT a sidebar chatbot. It is NOT a popup window. It physically sees the page, thinks about it, and acts on it.

--- VISUAL DIRECTION ---

Dark theme. Deep navy or near-black background (#0a0a0f or similar). The accent color is cyan (#00e5ff or similar) used for glows, highlights, borders, and call-to-action elements. Secondary accent: a warm amber or gold (#f5a623) for badges and trust signals.

Typography: Use Inter or Outfit from Google Fonts. Headings should be bold and large. Body text should be light gray (#b0b8c8 range) on the dark background for comfortable reading.

The overall feel should be: premium, technical, trustworthy, and alive. Think of landing pages from Linear, Raycast, or Vercel — minimal but rich with depth. Use subtle glassmorphism on cards (frosted glass with backdrop-blur). Use soft gradient glows behind key sections, not harsh neon.

No stock photography. No generic illustrations of robots or brains. All visuals should be either screenshots of the actual product UI, abstract geometric patterns, or clean iconography.

--- HERO SECTION ---

The hero should immediately communicate what Vox Agent does in under 5 seconds of reading.

Headline: "The AI Agent That Actually Touches Your Browser"
Subheadline: "Vox Agent reads live web pages, reasons through complex decisions, and executes actions directly inside your browser — all by voice. No copy-pasting. No tab switching. No manual clicks."

Below the subheadline, place two buttons:
- Primary CTA: "Watch Demo" (links to a video)
- Secondary CTA: "View on GitHub" (links to https://github.com/IrrhammCode/VoxAgent)

Below the buttons, show a wide browser mockup or screenshot area representing the Vox Agent floating capsule overlay on top of a real website (like an Apple product page or Shopee search results). The capsule is a small frosted-glass pill shape floating in the bottom-right corner of the browser, with a soft cyan glow pulse animation.

--- THE THREE PILLARS SECTION ---

Section title: "How Vox Agent Works"

Present three columns or cards, each representing one pillar. Use a clean icon (not emoji) for each.

1. READ
   Subtitle: "Live DOM Perception"
   Description: "Vox Agent scrapes and interprets real-time DOM elements — product listings, pricing tables, spec sheets, headings, forms, and media players — directly from the active webpage. No browser extensions that just read highlighted text. Vox sees the entire page structure."
   
2. REASON
   Subtitle: "Cognitive Multi-Agent Brain"
   Description: "Every user utterance is classified by a Groq-powered cognitive intent classifier running at 500 tokens per second across an 8-key round-robin pool. The reasoning layer evaluates product safety certifications, compares pricing across stores, and translates complex technical jargon into everyday analogies anyone can understand."

3. ACT
   Subtitle: "Physical Browser Execution"
   Description: "Vox Agent does not suggest links for you to click. It physically types into search bars, scrolls to target elements, highlights winning products with a Cyan Halo Spotlight, controls YouTube video playback, fills shipping forms from an encrypted local Identity Vault, and bridges research summaries to WhatsApp Web with one tap."

--- FEATURES SECTION ---

Section title: "Capabilities"

Present these as a grid of feature cards (2 or 3 columns). Each card has a small icon, a title, and a 1-2 sentence description. Use frosted glass card styling with subtle borders.

Feature 1: Deep Marketplace Research
"Audits all visible product listings on Shopee, Tokopedia, or Amazon. Evaluates safety certifications (SNI/DOT), material quality, seller credibility, and price-to-value ratio. Picks a winner and offers a 1-click WhatsApp export."

Feature 2: Concept Demystifier
"When you land on a page full of technical jargon — Web3, zero-knowledge proofs, neural architectures — say 'explain this simply' and Vox breaks it down using an intuitive real-world analogy, like explaining cloud computing as renting an apartment instead of building a house."

Feature 3: Hands-Free YouTube Control
"Say 'play Bohemian Rhapsody' from any tab. Vox opens YouTube, types the query, and starts playback. Say 'pause' to stop. No tab switching, no mouse, no keyboard."

Feature 4: Cyan Halo Spotlight
"After evaluating products, Vox physically scrolls the page and highlights the winning item with a glowing cyan ring (the Halo Spotlight), drawing your eyes directly to the best pick."

Feature 5: Identity Vault Autofill
"Stores shipping addresses and personal info in encrypted local Chrome storage profiles (Home, Office). When you hit a checkout form, say 'fill my address' and Vox autofills every field safely."

Feature 6: WhatsApp Research Bridge
"After completing a product research audit, Vox generates a formatted summary and offers a 1-click button that opens WhatsApp Web with the full report pre-filled as a message, ready to send to anyone."

Feature 7: Visual Spotlight Tours
"Say 'show me around' on any webpage and Vox launches a synchronized multi-step visual tour, highlighting key sections of the page one by one with voice narration explaining each area."

Feature 8: Acoustic ESL Harmonizer
"Built for non-native English speakers. The phonetic normalizer corrects common speech-to-text mishearings — 'hey fox' becomes 'hey vox', 'headband' becomes 'headset', 'airport' becomes 'earphone' — so the agent always understands you."

--- TECH STACK SECTION ---

Section title: "Built With"

Display these as a horizontal row of tech badges or small cards with logos:

- Chrome Manifest V3 (the extension runtime)
- Groq Cloud (sub-second LLM inference, 8-key round-robin pool, model: qwen3.8-27b)
- ElevenLabs (ultra-realistic human male voice, voice: Charlie, model: eleven_turbo_v2_5)
- Anakin.io (live web scraping and search intelligence API)
- Shadow DOM (isolated UI injection that never breaks host page CSS)
- Web Speech API (continuous speech recognition with wake word detection)

--- ARCHITECTURE DIAGRAM SECTION ---

Section title: "Architecture"

Include a simplified flow diagram showing:
User Voice Input -> Speech Recognition + Phonetic Normalizer -> Groq Cognitive Intent Classifier (8-key round-robin) -> branches into READ (DOM Scraper), REASON (Product Auditor / Concept Demystifier), ACT (Spotlight, WhatsApp Bridge, Media Control, Form Autofill) -> ElevenLabs Voice Output + Visual Feedback

This can be rendered as a clean SVG or Mermaid-style diagram with the dark theme styling, using cyan lines and nodes on the dark background.

--- DEMO VIDEO SECTION ---

Section title: "See It In Action"

A large centered video embed area (16:9 aspect ratio) with rounded corners and a subtle cyan glow border. This is where the demo recording will be embedded. For now, use a dark placeholder with a centered play button icon.

--- QUICK START SECTION ---

Section title: "Get Started in 10 Seconds"

Show a minimal 4-step install guide:

Step 1: Clone the repository
  git clone https://github.com/IrrhammCode/VoxAgent.git

Step 2: Open chrome://extensions in your browser

Step 3: Enable Developer Mode and click "Load unpacked"

Step 4: Select the VoxAgent folder. Done — Vox Agent is now live on every website.

--- FOOTER ---

Keep it minimal. Show:
- "Vox Agent" wordmark on the left
- Links: GitHub, Demo Video, Anakin Forge Hackathon
- "Built for the Anakin Forge Hackathon 2025" text
- MIT License badge

--- IMPORTANT DESIGN CONSTRAINTS ---

- Do NOT use any emoji in the rendered page. Use clean SVG icons or Lucide/Heroicons instead.
- Do NOT use generic AI imagery (robot heads, neural network stock art, glowing brains).
- Do NOT use bright white backgrounds anywhere. The entire page is dark-themed.
- All section transitions should use subtle gradient fades, not hard lines.
- Cards should have frosted glass (backdrop-blur + semi-transparent background + thin border).
- Interactive elements (buttons, cards) should have smooth hover transitions (scale, glow, or border color shift).
- The page should be fully responsive (mobile, tablet, desktop).
- Use semantic HTML with proper heading hierarchy (single h1 in hero, h2 for sections, h3 for sub-items).
- Add smooth scroll behavior for internal navigation.
- The Cyan Halo Spotlight effect that the product uses should be subtly reflected in the design language of the landing page itself — perhaps as glowing rings around featured elements or as the hover state for cards.
