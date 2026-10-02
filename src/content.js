// The feature list shown on the Home and Features pages.
// Keep it limited to what the app actually does.
export const features = [
  {
    id: 'reading',
    title: 'Quran reading',
    summary: 'Read the text of the Holy Quran directly on your Android device.',
    detail:
      'The app exists for one purpose: reading the Quran. Open it on your phone and the text is there for you to read, at home or on the move.',
  },
  {
    id: 'interface',
    title: 'Clean interface',
    summary: 'An uncluttered layout that keeps attention on the text.',
    detail:
      'The interface is kept deliberately simple, so the screen is given to the Quran rather than to the app around it.',
  },
  {
    id: 'navigation',
    title: 'Simple navigation',
    summary: 'Straightforward navigation without a learning curve.',
    detail:
      'Moving around the app is meant to feel obvious. There is no need to learn a complicated set of menus before you begin reading.',
  },
  {
    id: 'mobile',
    title: 'Mobile-friendly design',
    summary: 'Made for phone screens and comfortable to hold and read.',
    detail:
      'The app is designed for Android phones first, with a layout suited to reading on a smaller screen held in one hand.',
  },
  {
    id: 'access',
    title: 'Easy access to Quranic content',
    summary: 'Get to the Quran quickly whenever you want to read.',
    detail:
      'Because the Quran lives on your phone, it is close at hand whenever you have a moment to read.',
  },
]

// Privacy policy for the app. Text mirrors the published policy at
// PRIVACY_POLICY_URL — keep the two in sync when the policy changes.
export const privacyPolicy = {
  effectiveDate: 'September 8, 2026',
  intro:
    'Al-Quran Al-Kareem (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how our mobile application collects, uses, and discloses information about you.',
  highlights: [
    {
      id: 'account',
      title: 'No account needed',
      text: 'Use the app without creating an account or giving your name, email address or phone number.',
    },
    {
      id: 'location',
      title: 'Location stays local',
      text: 'General location is used only for prayer times and Qibla direction, and is never stored or shared on our servers.',
    },
    {
      id: 'ads',
      title: 'Ads by Google AdMob',
      text: 'Ads keep the app free. AdMob may process device information and the advertising ID.',
    },
    {
      id: 'secure',
      title: 'Encrypted connections',
      text: 'All network communication with data services takes place over HTTPS.',
    },
  ],
  sections: [
    {
      id: 'information-collection',
      title: 'Information collection and use',
      blocks: [
        {
          type: 'p',
          text: 'Al-Quran Al-Kareem does not require users to create an account or provide personally identifiable information (such as your name, email address, or phone number) to use the app.',
        },
        { type: 'h3', text: 'A. Location data' },
        {
          type: 'p',
          text: 'The app uses your device’s general location (latitude and longitude) solely to calculate accurate Islamic Prayer Times and Qibla Direction. Location data is processed locally on your device or via secure location services and is never stored or shared on external servers by us.',
        },
        { type: 'h3', text: 'B. Public API usage' },
        {
          type: 'p',
          text: 'The app fetches Islamic data (Surah text, audio recitations, prayer schedules) from public APIs (such as Al-Quran Cloud API). No personal user data is sent during these requests.',
        },
      ],
    },
    {
      id: 'third-party-services',
      title: 'Third-party services & advertising',
      blocks: [
        {
          type: 'p',
          text: 'Our app uses third-party service providers that may collect information used to identify your device for analytics and advertising purposes.',
        },
        { type: 'h3', text: 'Google AdMob' },
        {
          type: 'p',
          text: 'We display advertisements powered by Google AdMob to keep the app free. Google AdMob may collect and process certain non-personally identifiable data, such as:',
        },
        {
          type: 'list',
          items: [
            'Advertising ID (Google Advertising ID)',
            'Device information (model, OS version)',
            'Approximate location',
            'Ad interaction and performance data',
          ],
        },
      ],
    },
    {
      id: 'data-safety',
      title: 'Data safety & security',
      blocks: [
        { type: 'p', text: 'We value your trust in providing us your information. We ensure that:' },
        {
          type: 'list',
          items: [
            'No personal identifiers are collected directly by our application.',
            'All network communications with data services take place over encrypted HTTPS connections.',
          ],
        },
      ],
    },
  ],
}
