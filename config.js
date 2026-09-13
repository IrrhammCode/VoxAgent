/**
 * Vox Agent — Environment Configuration
 * 
 * Masukkan API Key Anakin.io di bawah ini jika kamu ingin mengaktifkan Live Web Scraping
 * untuk Anakin Forge Hackathon.
 * 
 * JIKA DIBIARKAN KOSONG:
 * Vox Agent tetap berjalan 100% normal dan lancar menggunakan Simulated Intelligence & Local Scout
 * tanpa memerlukan API key apa pun!
 */

const VOX_ENV = {
  // Masukkan API Key dari Anakin.io di sini (atau biarkan kosong untuk local intelligence)
  ANAKIN_API_KEY: '',

  // Ubah ke true jika ingin mengaktifkan Live Scrape secara default saat API Key terisi
  LIVE_SCRAPE: false,

  // Groq API Key (LLM super cepat 500 tokens/sec via Llama 3.3 / Qwen)
  // Dapatkan gratis di https://console.groq.com
  GROQ_API_KEY: '',
  GROQ_MODEL: 'qwen/qwen3.8-27b',

  // ElevenLabs TTS (Suara manusia ultra-realistis)
  // Dapatkan di https://elevenlabs.io
  ELEVENLABS_API_KEY: '',
  ELEVENLABS_VOICE_ID: 'EXAVITQu4vr4xnSDxMaL',  // Bella — Multilingual Natural (Free Tier Compatible)
  ELEVENLABS_MODEL: 'eleven_multilingual_v2',

  // Endpoint resmi Anakin.io Scraper API
  ANAKIN_SCRAPE_ENDPOINT: 'https://api.anakin.io/v1/scrape',
  ANAKIN_SEARCH_ENDPOINT: 'https://api.anakin.io/v1/search',

  // Pengaturan default suara & perilaku agen
  VOX_LANGUAGE: 'en',          // Bahasa default English (ESL Optimized)
  VOICE_DEFAULT_SPEED: 1.0,
  AUTO_SCROLL_FOCUS: true,
  HANDS_FREE_MIC: true,        // Mic terus aktif tanpa perlu klik ulang
  AUTONOMOUS_CLICK: true,        // Otomatis klik tab/accordion untuk cari info tersembunyi

  // Identity Vault — Multi-Profile System (for Autonomous Autofill & Checkout)
  IDENTITY_VAULT: {
    activeProfile: 'home',
    profiles: {
      home: {
        label: 'Home',
        fullName: 'Irham Pratama',
        firstName: 'Irham',
        lastName: 'Pratama',
        email: 'irham@example.com',
        phone: '+6281234567890',
        street: 'Jl. Jenderal Sudirman No. 45, RT 02 / RW 05',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        postalCode: '12190',
        country: 'Indonesia',
        username: 'irham_user',
        password: 'VoxSecurePassword2026!'
      },
      office: {
        label: 'Office',
        fullName: 'Irham Pratama',
        firstName: 'Irham',
        lastName: 'Pratama',
        email: 'irham.work@example.com',
        phone: '+6281298765432',
        street: 'Gedung Cyber 2 Lantai 18, Jl. HR Rasuna Said',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        postalCode: '12950',
        country: 'Indonesia',
        username: 'irham_work',
        password: 'VoxWorkSecure2026!'
      }
    }
  },

  // Checkout Safety: require voice confirmation before final submit
  CHECKOUT_CONFIRM_REQUIRED: true,

  // Pre-Configured Connected E-Commerce Stores & Marketplaces
  CONNECTED_STORES: [
    {
      id: 'shopee',
      name: 'Shopee Indonesia',
      domain: 'shopee.co.id',
      icon: '🛍️',
      status: 'connected',
      statusLabel: 'Active Session · Connected',
      accountUser: 'irham_user',
      defaultProfile: 'home',
      autoCoupon: true
    },
    {
      id: 'tokopedia',
      name: 'Tokopedia',
      domain: 'tokopedia.com',
      icon: '🟢',
      status: 'connected',
      statusLabel: 'Active Session · Connected',
      accountUser: 'irham_user',
      defaultProfile: 'home',
      autoCoupon: true
    },
    {
      id: 'blibli',
      name: 'Blibli',
      domain: 'blibli.com',
      icon: '🔵',
      status: 'connected',
      statusLabel: 'Active Session · Connected',
      accountUser: 'irham_work',
      defaultProfile: 'office',
      autoCoupon: true
    },
    {
      id: 'amazon',
      name: 'Amazon Global',
      domain: 'amazon.com',
      icon: '📦',
      status: 'guest_ready',
      statusLabel: 'Guest Checkout Ready',
      accountUser: 'Guest (1-Click)',
      defaultProfile: 'office',
      autoCoupon: true
    },
    {
      id: 'cyberstore',
      name: 'CyberStore Tech',
      domain: 'cyberstore.shop',
      icon: '⚡',
      status: 'connected',
      statusLabel: 'Connected (Sandbox)',
      accountUser: 'irham_user',
      defaultProfile: 'home',
      autoCoupon: true
    }
  ],

  // Session Continuity & Memory Policy
  SESSION_MEMORY: {
    PERSIST_CROSS_PAGE: true,     // Pertahankan percakapan saat navigasi/pindah URL
    SESSION_TIMEOUT_MINUTES: 45,  // Sesi aktif selama 45 menit sebelum diarsipkan
    AUTO_ANNOUNCE_CHECKOUT: true  // Otomatis sapa & tawarkan autofill saat masuk halaman checkout
  }
};

// Export untuk Service Worker & Browser Window
if (typeof self !== 'undefined') {
  self.VOX_ENV = VOX_ENV;
}
if (typeof window !== 'undefined') {
  window.VOX_ENV = VOX_ENV;
}
