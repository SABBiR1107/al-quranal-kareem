// The feature list shown on the Home and Features pages.
// Keep it limited to what the app actually does.
export const features = [
  {
    id: 'reading',
    title: 'Read & listen',
    summary: 'The Mushaf page by page, plus recitation by well-known reciters.',
    detail:
      'Read the Mushaf exactly as printed, page by page, with translation, word-by-word meaning and tafsir alongside it — or listen to recitation, ayah by ayah, with the text following along.',
  },
  {
    id: 'interface',
    title: 'Calm, uncluttered design',
    summary: 'Eight light and dark themes, built to keep attention on the words.',
    detail:
      'From a warm, paper-like Sepia to a true-black Midnight, the app is designed to disappear into the background so the Quran stays the thing you actually look at.',
  },
  {
    id: 'navigation',
    title: 'Prayer times & Qibla',
    summary: 'Accurate times and direction, calculated right on your phone.',
    detail:
      'Prayer times, Adhan alerts and the Qibla direction for your city — calculated on the device itself, never by sending your location anywhere.',
  },
  {
    id: 'mobile',
    title: 'Works fully offline',
    summary: 'Download a recitation once, then read and listen with no internet.',
    detail:
      'Save any reciter’s recitation for offline listening, and keep reading the Mushaf, your bookmarks and your progress with no connection at all.',
  },
  {
    id: 'access',
    title: 'No sign-up, no ads',
    summary: 'Open the app and start reading straight away.',
    detail:
      'There is no account to create and nothing to agree to. No advertising, no analytics and no tracking of any kind — just the Quran, and your own reading habit.',
  },
]

// Privacy policy for the app. Mirrors the policy shown on the app's own
// Play Store listing — keep the two in sync when the policy changes.
export const privacyPolicy = {
  effectiveDate: 'November 11, 2026',
  intro:
    'Holy Quran: Read & Listen ("we", "our", or "us") does not collect, store or share any personal data on a server. This Privacy Policy explains what the app does — and, just as importantly, what it does not do — with information about you.',
  highlights: [
    {
      id: 'account',
      title: 'No account needed',
      text: 'Use the app without creating an account or giving your name, email address or phone number.',
    },
    {
      id: 'location',
      title: 'Location stays on your phone',
      text: 'Approximate location is used only to calculate prayer times and Qibla direction, on the device itself, and is never sent to us.',
    },
    {
      id: 'tracking',
      title: 'No ads or tracking',
      text: 'There is no advertising, analytics or tracking of any kind in this app, and no advertising ID.',
    },
    {
      id: 'secure',
      title: 'Encrypted connections',
      text: 'All network requests the app makes take place over encrypted HTTPS connections.',
    },
  ],
  sections: [
    {
      id: 'information-collection',
      title: 'Information collection and use',
      blocks: [
        {
          type: 'p',
          text: 'Holy Quran: Read & Listen does not require you to create an account or provide personally identifiable information (such as your name, email address, or phone number) to use the app. We do not operate a server that receives or stores data about you.',
        },
        { type: 'h3', text: 'A. Location data' },
        {
          type: 'p',
          text: 'If you choose to share your location, the app reads your device’s approximate location solely to calculate prayer times and the Qibla direction, on the device itself. That location is never sent to us or stored beyond the current calculation. You can skip this entirely and pick your city from a list instead.',
        },
        { type: 'h3', text: 'B. Public API usage' },
        {
          type: 'p',
          text: 'The app fetches Quran text, translations, tafsir and recitation audio from public, freely available Quran content providers — AlQuran.cloud and Quran.com. These requests carry only the standard technical information any web request carries (such as your device’s IP address); no account identifier is sent, because the app has none.',
        },
      ],
    },
    {
      id: 'on-device-storage',
      title: 'What stays on your device',
      blocks: [
        {
          type: 'p',
          text: 'To work offline and remember your preferences, the app stores the following only on your own phone. It is never transmitted anywhere:',
        },
        {
          type: 'list',
          items: [
            'Bookmarked ayahs, reading progress, streaks and khatam (completion) tracking',
            'Your chosen theme, translation language, tafsir and reading preferences',
            'Downloaded recitation audio, for offline listening',
            'Your reminder and prayer-alert schedule, kept and triggered entirely on the device',
          ],
        },
        {
          type: 'p',
          text: 'Uninstalling the app, or clearing its storage from your phone’s Settings, permanently deletes all of this. We have no copy of it anywhere.',
        },
      ],
    },
    {
      id: 'data-safety',
      title: 'Data safety & security',
      blocks: [
        { type: 'p', text: 'We value your trust. To be specific about what that means in practice:' },
        {
          type: 'list',
          items: [
            'No personal identifiers are collected by the app, directly or indirectly.',
            'The app contains no advertising SDK, no analytics SDK and no advertising identifier.',
            'All network communication takes place over encrypted HTTPS connections.',
            'The app is not directed at children and does not knowingly collect data from anyone, regardless of age — because it does not collect personal data from anyone at all.',
          ],
        },
      ],
    },
  ],
}

// Terms of use for the app and this website.
// This is a good-faith plain-language draft, not a substitute for legal advice.
export const termsOfService = {
  effectiveDate: 'November 11, 2026',
  intro:
    'These Terms of Use ("Terms") apply to the Holy Quran: Read & Listen Android app and to this website. By downloading, installing or using the app, or by browsing this site, you agree to these Terms.',
  sections: [
    {
      id: 'the-app',
      title: 'What the app is',
      blocks: [
        {
          type: 'p',
          text: 'Holy Quran: Read & Listen is a free, ad-free Android application for reading, listening to and learning the Quran, with prayer times, Qibla direction and related Islamic tools. It is offered for personal, non-commercial, devotional and educational use.',
        },
      ],
    },
    {
      id: 'content-sources',
      title: 'Quran text, translations and recitation',
      blocks: [
        {
          type: 'p',
          text: 'The Arabic text, translations, tafsir and recitation audio shown in the app are sourced from established, publicly available Quran content providers (including AlQuran.cloud and Quran.com) and recognised reciters and translators. We do not claim authorship of the Quran’s text or translations; our work is the application that presents them.',
        },
        {
          type: 'p',
          text: 'Translations are the work of their named translators and may differ from one another, as translations of any text can. If you need a ruling on a specific matter of Islamic practice, please consult a qualified local scholar rather than relying solely on the app.',
        },
      ],
    },
    {
      id: 'prayer-times',
      title: 'Prayer times and Qibla direction',
      blocks: [
        {
          type: 'p',
          text: 'Prayer times and Qibla direction are calculated automatically from your chosen location and calculation method. They are provided as a convenience and are usually accurate, but small variations are possible depending on your exact location, device sensors and local conventions. For matters where exact timing is important (for example, fasting and Eid), please also check with your local mosque or Islamic authority.',
        },
      ],
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable use',
      blocks: [
        {
          type: 'p',
          text: 'Please use the app as intended: for your own reading, listening and learning. Do not attempt to reverse-engineer, redistribute, resell or rebrand the app, and do not use it in any way that is unlawful or that infringes the rights of the content providers named above.',
        },
      ],
    },
    {
      id: 'availability',
      title: 'Availability and changes',
      blocks: [
        {
          type: 'p',
          text: 'The app depends on third-party Quran content services (§ Quran text, translations and recitation) to fetch text, translations and audio; anything already downloaded for offline use keeps working without an internet connection. We may update, change or discontinue features over time, including in response to changes made by those providers.',
        },
      ],
    },
    {
      id: 'no-warranty',
      title: 'No warranty',
      blocks: [
        {
          type: 'p',
          text: 'The app and this website are provided "as is", without warranty of any kind, to the fullest extent permitted by law. We make reasonable efforts to keep the content accurate and the app working well, but we cannot guarantee it will be error-free or uninterrupted.',
        },
      ],
    },
    {
      id: 'changes-to-terms',
      title: 'Changes to these Terms',
      blocks: [
        {
          type: 'p',
          text: 'If these Terms change, the updated version will be published here with a new effective date. Continuing to use the app after a change means you accept the updated Terms.',
        },
      ],
    },
  ],
}
