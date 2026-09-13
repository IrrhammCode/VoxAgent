# 🛒 Vox Agent — Autonomous Voice Shopping Copilot
> **Anakin Forge Hackathon Submission (Anakin.io — Y Combinator S21)**  
> **Theme:** Autonomous AI Shopping Agents That Read, Reason, and Act on Live E-Commerce Data  

---

## 🌟 What is Vox Agent?
Vox Agent is an autonomous, voice-driven **AI Personal Shopper & Shopping Agent** that **lives directly inside every online store you visit** (as a Manifest V3 Chrome Extension).

Instead of manually browsing dozens of tabs, searching for promo codes, and filling repetitive checkout forms, **Vox Agent floats on the store page**. Speak to it (*"Hey Vox"*), and it will:
1. **READ**: Extract live product specs, pricing, stock availability, and shipping details.
2. **REASON (Ghost Comparison & Deal Hunter)**: Search competitor prices across stores and hunt for active promo codes in the background via **Anakin.io API**.
3. **ACT (Autonomous Checkout)**: Automatically add to cart, proceed to checkout, autofill your shipping profile from the **Identity Vault**, apply discounts, and complete the order with voice safety guardrails.

---

## ⚡ How to Install in Google Chrome / Brave (Takes 10 Seconds!)

1. Open your browser and navigate to:
   ```text
   chrome://extensions
   ```
2. Enable **Developer mode** (toggle switch in top-right corner).
3. Click the **"Load unpacked"** button in the top-left corner.
4. Select this directory:
   ```text
   /Users/irham/Documents/code/dwa
   ```
5. **Done! 🎉** Vox Agent is now active across all websites and online shops.

---

## 🛍️ AI Shopping Command Matrix

| Voice Command (Indonesian & English) | Action Executed |
|---|---|
| *"Hey Vox, beliin barang ini"* / *"Buy this now"* | Autonomous 6-step buy flow: Add to Cart → Proceed to Checkout → Autofill Address → Coupon Check → Voice Confirmation → Order Placement |
| *"Hey Vox, cari promo"* / *"Ada diskon gak"* / *"Find coupons"* | Runs **Deal Hunter** via Anakin.io, discovers promo codes (e.g. `SAVE150`), renders interactive cards with 1-click **[Gunakan]** apply button |
| *"Hey Vox, bandingkan harga"* / *"Compare prices"* | Queries competitor stores, displays side-by-side pricing matrix & Worth-It index |
| *"Hey Vox, isi alamat pengiriman"* / *"Fill shipping address"* | Scans 17 semantic form fields and autofills from active **Identity Vault** profile |
| *"Hey Vox, pakai alamat kantor"* / *"Switch to office"* | Switches active vault profile to Office and updates form fields |
| *"Hey Vox, konfirmasi pesanan"* / *"Confirm order"* | Voice guardrail: approves final checkout and places order |
| *"Hey Vox, batalkan"* / *"Cancel order"* | Cancels pending checkout safely |

---

## 🚀 Instant Sandbox Testing (`index.html`)

You can test all voice and autonomous shopping workflows immediately without installing the extension by opening [index.html](file:///Users/irham/Documents/code/dwa/index.html):
1. Open `index.html` in your browser.
2. **CyberStore Shop** opens automatically with 3 switchable tech products (*CyberRig Pro $1,499*, *CyberBuds ANC $199*, *CyberWatch Ultra $399*).
3. Try clicking the quick shopping chips floating on the capsule:
   - 🛒 **Beli**: Runs 1-click autonomous checkout, autofills shipping, applies `SAVE150`, and updates total.
   - 🏷️ **Kupon**: Finds and applies store promo codes.
   - ⚖️ **Bandingkan**: Displays side-by-side alternative comparison.
   - 📦 **Alamat**: Autofills name, email, phone, street, city, postal code.
4. Or speak naturally into your microphone (*"Hey Vox, cari promo"*, *"Hey Vox, beliin ini"*).

---

## 🛠️ Architecture & Tech Stack

- **Manifest V3 Extension**: Injected via an isolated **Shadow DOM** so it never clashes with host e-commerce CSS (Tokopedia, Shopee, Amazon, CyberStore).
- **Autonomous E-Commerce Engine (`content.js`)**:
  - Semantic Form Field Classifier (17 field categories: name, email, phone, street, postal code, coupon, etc.).
  - Native prototype descriptor hacking for React/Vue/Angular synthetic event compatibility.
  - Multi-marketplace button selectors & IDR / USD currency detection.
  - Quick Shopping Action Bar (`.vox-shop-bar`) & Interactive Coupon Cards (`.vox-deal-card`).
- **Background Intelligence Worker (`background.js`)**:
  - Deal Hunter price intelligence & coupon search via **Anakin.io API**.
  - High-speed 500 tok/sec LLM reasoning via **Groq (Qwen 2.5 / Llama 3.3)** specialized as an AI Personal Shopper.
  - Ultra-realistic human voice synthesis via **ElevenLabs Multilingual v2** with zero-latency fallback.
- **Identity Vault (`config.js` & `chrome.storage`)**:
  - Multi-profile vault (Home / Office) with one-click voice switching and encrypted local persistence.
