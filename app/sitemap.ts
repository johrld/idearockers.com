import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://www.idearockers.com"
  const routes = [
    "",
    "/impress",
    "/privacy",
  ] as const

  const urls: MetadataRoute.Sitemap = routes.flatMap((path) => {
    const url = `${baseUrl}${path}`
    return [
      {
        url,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.5,
      },
      // Language alternate via hl=de
      {
        url: `${url}${path === "" ? "" : ""}?hl=de`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: path === "" ? 0.9 : 0.5,
      },
    ]
  })

  return urls
}


