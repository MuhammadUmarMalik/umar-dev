import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.umarmalik-dev.com'
  const hostOnly = (() => {
    try { return new URL(baseUrl).host } catch { return 'www.umarmalik-dev.com' }
  })()

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/_next/', '/api/'],
      },
      // Explicitly allow major AI crawlers
      { userAgent: 'GPTBot', allow: '/' }, // OpenAI
      { userAgent: 'ChatGPT-User', allow: '/' }, // OpenAI user-side fetcher
      { userAgent: 'ClaudeBot', allow: '/' }, // Anthropic
      { userAgent: 'Claude-Web', allow: '/' }, // Anthropic web crawler
      { userAgent: 'Google-Extended', allow: '/' }, // Google / Gemini data opt-in
      { userAgent: 'DeepSeekBot', allow: '/' }, // DeepSeek
      { userAgent: 'PerplexityBot', allow: '/' }, // Perplexity AI
      { userAgent: 'CCBot', disallow: '/' }, // CommonCrawl; block if undesired
    ],
    sitemap: `${baseUrl.replace(/\/$/, '')}/sitemap.xml`,
    host: hostOnly,
  }
}


