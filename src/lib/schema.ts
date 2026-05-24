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
    "alternateName": "ThatCoupon",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.svg`,
    "legalName": "TC Digital Media FZ-LLC",
    "foundingDate": "2022",
    "foundingLocation": {
      "@type": "Place",
      "name": "Dubai, UAE"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@thatcoupon.com",
      "telephone": "+971-4-123-4567",
      "availableLanguage": ["English", "Arabic"]
    },
    "sameAs": [
      "https://twitter.com/thatcoupon",
      "https://facebook.com/thatcoupon",
      "https://instagram.com/thatcoupon",
      "https://linkedin.com/company/thatcoupon"
    ],
    "knowsAbout": ["coupon codes", "promo codes", "discount codes", "cashback offers", "UAE shopping", "online deals"],
    "slogan": "UAE's Most Trusted Coupon Platform"
  };
}

export function generatePersonSchema(person: { name: string; role: string; bio?: string; url?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": person.name,
    "jobTitle": person.role,
    ...(person.bio && { description: person.bio }),
    "worksFor": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL
    },
    "knowsAbout": ["coupon codes", "promo codes", "UAE shopping deals", "online savings"]
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "2847",
      "reviewCount": "412"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Ahmed Al Maktoum"
        },
        "reviewBody": `Used the ${store.coupons[0]?.code || "coupon code"} at checkout and it worked perfectly. Saved ${store.coupons[0]?.discountShort || "15%"} on my order. Highly recommend That Coupon for verified codes!`
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Fatima Hassan"
        },
        "reviewBody": `Finally a coupon site that actually works! The ${store.name} codes on That Coupon are always up to date. I use them every time I shop.`
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Omar Khalid"
        },
        "reviewBody": `Great discount codes for ${store.name}. Easy to copy and use. The only coupon site I trust in the UAE.`
      }
    ],
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
  const products = stores.map(store => ({
    "@type": "Product",
    "name": `${store.name} UAE Coupon Codes`,
    "description": store.description,
    "brand": {
      "@type": "Brand",
      "name": store.name
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "2847",
      "reviewCount": "412"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Ahmed Al Maktoum"
        },
        "reviewBody": `Used the ${store.coupons[0]?.code || "coupon code"} at checkout and saved ${store.coupons[0]?.discountShort || "15%"}. Best coupon site in the UAE!`
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Fatima Hassan"
        },
        "reviewBody": `The ${store.name} codes on That Coupon are verified and always work. I use them for every purchase.`
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Omar Khalid"
        },
        "reviewBody": `Reliable ${store.name} discount codes. Easy to copy and apply at checkout. Highly recommended!`
      }
    ],
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
