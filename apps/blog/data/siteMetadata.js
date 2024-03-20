/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: "Enea's Blog",
  author: 'Enea Scaccabarozzi',
  headerTitle: "Enea's Blog",
  description: 'A personal blog by Enea Scaccabarozzi. I write about software development, security, and more.',
  language: 'en-us',
  theme: 'light', // system, dark or light
  siteUrl: 'https://blog.eneascaccabarozzi.xyz',
  siteRepo: 'https://github.com/enea-scaccabarozzi/portfolio',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'me@eneascaccabarozzi.xyz',
  github: 'https://github.com/enea-scaccabarozzi',
  linkedin: 'https://www.linkedin.com/in/enea-scaccabarozzi-9660ba266',
  locale: 'en-US',
  analytics: {
    plausibleAnalytics: {
      plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '1',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
