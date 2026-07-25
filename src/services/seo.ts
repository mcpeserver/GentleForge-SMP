import { SeoData, DeveloperData } from "../types";

export function updateSeo(seoData: SeoData, devData?: DeveloperData) {
  if (typeof document === "undefined") return;

  // 1. Update Title
  document.title = seoData.title;

  // 2. Update/Create Meta tags
  const metaTags = {
    "description": seoData.description,
    "keywords": seoData.keywords,
    // Open Graph
    "og:title": seoData.title,
    "og:description": seoData.description,
    "og:type": "website",
    "og:url": seoData.url,
    "og:image": `${seoData.url}/assets/hero.jpg`,
    "og:site_name": "GentleForge",
    // Twitter Card
    "twitter:card": "summary_large_image",
    "twitter:title": seoData.title,
    "twitter:description": seoData.description,
    "twitter:image": `${seoData.url}/assets/hero.jpg`
  };

  Object.entries(metaTags).forEach(([name, value]) => {
    let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
    if (!el) {
      el = document.createElement("meta");
      if (name.startsWith("og:")) {
        el.setAttribute("property", name);
      } else {
        el.setAttribute("name", name);
      }
      document.head.appendChild(el);
    }
    el.setAttribute("content", value);
  });

  // 3. Update Canonical URL
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement("link");
    canonicalEl.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute("href", seoData.url);

  // 4. Inject JSON-LD
  // Remove any existing JSON-LD scripts
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach(el => el.remove());

  // Organization
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GentleForge",
    "alternateName": "Forge SMP",
    "url": seoData.url,
    "logo": `${seoData.url}/assets/logo.webp`,
    "contactPoint": devData ? {
      "@type": "ContactPoint",
      "telephone": `+${devData.contact.phone}`,
      "contactType": "technical support"
    } : undefined
  };

  // Website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GentleForge",
    "url": seoData.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${seoData.url}/?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": seoData.url
      }
    ]
  };

  const schemas = [orgSchema, websiteSchema, breadcrumbSchema];

  schemas.forEach(schema => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}
