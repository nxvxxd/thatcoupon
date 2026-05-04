import { stores, SITE_NAME, SITE_URL, type Coupon, type Store } from './store-data';

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${SITE_NAME} UAE`,
    "alternateName": "ThatCoupon",
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "sameAs": []
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateProductOfferSchema(store: Store, coupon: Coupon) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${store.name} ${coupon.discountShort}% Off - ${coupon.code}`,
    "description": coupon.description,
    "brand": {
      "@type": "Brand",
      "name": store.name
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "0",
      "priceCurrency": "AED",
      "offerCount": 1,
      "offers": [
        {
          "@type": "Offer",
          "name": coupon.title,
          "description": coupon.description,
          "offeredBy": {
            "@type": "Organization",
            "name": store.name,
            "url": store.outboundUrl
          },
          "couponCode": coupon.code,
          "validFrom": `${coupon.validFrom}T00:00:00+04:00`,
          "availability": "https://schema.org/InStock",
          "url": `${SITE_URL}/${store.slug}#${coupon.id}`
        }
      ]
    }
  };
}

export function generateStorePageSchema(store: Store) {
  const offers = store.coupons.map(coupon => ({
    "@type": "Offer",
    "name": coupon.title,
    "description": coupon.description,
    "offeredBy": {
      "@type": "Organization",
      "name": store.name,
      "url": store.outboundUrl
    },
    "couponCode": coupon.code,
    "validFrom": `${coupon.validFrom}T00:00:00+04:00`,
    "availability": "https://schema.org/InStock",
    "url": `${SITE_URL}/${store.slug}#${coupon.id}`
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${store.name} UAE Coupon Codes 2026`,
    "description": store.description,
    "brand": {
      "@type": "Brand",
      "name": store.name
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "0",
      "priceCurrency": "AED",
      "offerCount": store.coupons.length,
      "offers": offers
    }
  };
}

export function generateFAQSchema(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

export function generateHomepageSchema() {
  const allCoupons = stores.flatMap(s => s.coupons);
  const products = stores.map(store => ({
    "@type": "Product",
    "name": `${store.name} UAE Coupon Codes`,
    "description": store.description,
    "brand": {
      "@type": "Brand",
      "name": store.name
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "0",
      "priceCurrency": "AED",
      "offerCount": store.coupons.length,
      "offers": store.coupons.map(coupon => ({
        "@type": "Offer",
        "name": coupon.title,
        "description": coupon.description,
        "offeredBy": {
          "@type": "Organization",
          "name": store.name,
          "url": store.outboundUrl
        },
        "couponCode": coupon.code,
        "validFrom": `${coupon.validFrom}T00:00:00+04:00`,
        "availability": "https://schema.org/InStock"
      }))
    }
  }));

  return products;
}
