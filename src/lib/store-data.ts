export interface Coupon {
  id: string;
  store: string;
  storeSlug: string;
  code: string;
  title: string;
  description: string;
  discount: string;
  discountShort: string;
  category: string;
  isNew?: boolean;
  isHot?: boolean;
  validFrom: string;
  outboundUrl: string;
  logoText: string;
  logoBg: string;
  logoColor: string;
  cardBg: string;
  cardTextColor: string;
  badgeColor: string;
  badgeText: string;
  borderColor: string;
  copyBtnBg: string;
  metaKeywords: string[];
}

export interface Store {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  category: string;
  outboundUrl: string;
  logoText: string;
  logoBg: string;
  logoColor: string;
  heroBg: string;
  heroGradient: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  h1: string;
  coupons: Coupon[];
  faq: { question: string; answer: string }[];
}

export const SITE_NAME = "That Coupon";
export const SITE_URL = "https://www.thatcoupon.com";
export const LAST_UPDATED = "May 4, 2026";

export const stores: Store[] = [
  {
    name: "Noon",
    slug: "noon-coupon-code",
    description: "The leading e-commerce platform in the UAE and KSA with electronics, fashion, home goods and more.",
    longDescription: `Noon is the largest homegrown e-commerce platform in the Middle East, serving millions of customers across the UAE, Saudi Arabia, and Egypt. Founded in 2017 by Mohamed Alabbar, Noon has quickly become the go-to destination for online shopping in the GCC region. The platform offers an extensive catalog spanning electronics, fashion, beauty, home and kitchen, baby products, groceries, and much more.\n\nWith daily deals, flash sales, and exclusive coupon codes, Noon provides shoppers with multiple ways to save on their purchases. The platform also offers free shipping on qualifying orders, easy returns, and multiple payment options including cash on delivery, credit cards, and Noon's own digital wallet. Their Ramadan and Eid sales are among the most anticipated shopping events in the region, offering discounts of up to 70% across all categories.\n\nFor maximum savings, using the right Noon coupon code at checkout can unlock additional cashback and discounts. New users particularly benefit from welcome offers that can combine with existing sale prices for extraordinary deals. Existing users also have access to exclusive cashback codes that work alongside seasonal promotions.`,
    category: "Electronics, Fashion, Home & More",
    outboundUrl: "https://www.noon.com",
    logoText: "NOON",
    logoBg: "#FEF3C7",
    logoColor: "#92400E",
    heroBg: "from-yellow-400 to-yellow-500",
    heroGradient: "linear-gradient(135deg, #FEEE00, #F7C600)",
    metaTitle: "Noon Coupon Code UAE 2026 – FOREVER, GPZM & Verified Cashback Codes | That Coupon",
    metaDescription: "Get the latest verified Noon coupon codes for UAE 2026. Use FOREVER for 15% cashback (new users) and 10% (existing). Plus GPZM, ADHA10, FOREVER10 codes. Updated daily.",
    metaKeywords: ["Noon coupon code UAE", "Noon cashback code", "FOREVER Noon code", "Noon promo code 2026", "Noon discount code", "GPZM Noon", "ADHA10 Noon", "FOREVER10 Noon"],
    h1: "Noon Coupon Code UAE 2026 – Verified & Working Today",
    faq: [
      {
        question: "What is the best Noon coupon code right now?",
        answer: "The best Noon coupon code is FOREVER. It gives 15% cashback for new users and 10% cashback for existing users on all categories. This is currently the highest cashback offer available for Noon in the UAE."
      },
      {
        question: "How do I apply a coupon code on Noon?",
        answer: "Add items to your cart, proceed to checkout, and look for the 'Apply Coupon' field. Paste your code (e.g., FOREVER) and click 'Apply'. The discount or cashback will be reflected in your order total immediately."
      },
      {
        question: "Can I use multiple Noon coupon codes at once?",
        answer: "No, Noon allows only one coupon code per order. However, you can combine a coupon code with ongoing sales and promotions on the platform for maximum savings."
      },
      {
        question: "Do Noon coupon codes expire?",
        answer: "Yes, most Noon coupon codes have expiration dates. The codes listed on That Coupon are verified daily, and expired codes are removed within 24 hours. We recommend using your code as soon as possible for the best results."
      },
      {
        question: "Is the FOREVER code only for new users?",
        answer: "The FOREVER code provides 15% cashback for new Noon users and 10% cashback for existing users. Both new and returning customers can benefit from this code, making it one of the most versatile offers available."
      },
      {
        question: "What is Noon cashback and how does it work?",
        answer: "Noon cashback is a refund of a percentage of your purchase amount, credited back to your Noon wallet. For example, with the FOREVER code, 15% of your order value is returned to your Noon wallet, which you can use for future purchases."
      }
    ],
    coupons: [
      {
        id: "noon-forever",
        store: "Noon",
        storeSlug: "noon-coupon-code",
        code: "FOREVER",
        title: "Noon Coupon Code FOREVER",
        description: "15% cashback for new users and 10% cashback for existing users on all categories",
        discount: "Up to 15% Cashback",
        discountShort: "15%",
        category: "All Categories",
        isNew: false,
        isHot: true,
        validFrom: "2026-01-01",
        outboundUrl: "https://www.noon.com",
        logoText: "NOON",
        logoBg: "#FEF3C7",
        logoColor: "#92400E",
        cardBg: "linear-gradient(135deg, #FEEE00, #F7C600)",
        cardTextColor: "#1a1a1a",
        badgeColor: "rgba(0,0,0,0.12)",
        badgeText: "#1a1a1a",
        borderColor: "#065F46",
        copyBtnBg: "#065F46",
        metaKeywords: ["Noon FOREVER code", "FOREVER coupon code Noon", "Noon 15% cashback", "Noon new user coupon"]
      },
      {
        id: "noon-gpzm",
        store: "Noon",
        storeSlug: "noon-coupon-code",
        code: "GPZM",
        title: "Noon Cashback Code GPZM",
        description: "Exclusive Noon cashback code for extra savings on all purchases",
        discount: "10% Cashback",
        discountShort: "10%",
        category: "All Categories",
        validFrom: "2026-01-01",
        outboundUrl: "https://www.noon.com",
        logoText: "NOON",
        logoBg: "#FEF3C7",
        logoColor: "#92400E",
        cardBg: "linear-gradient(135deg, #FEEE00, #F7C600)",
        cardTextColor: "#1a1a1a",
        badgeColor: "rgba(0,0,0,0.12)",
        badgeText: "#1a1a1a",
        borderColor: "#065F46",
        copyBtnBg: "#065F46",
        metaKeywords: ["GPZM Noon code", "Noon GPZM cashback", "GPZM coupon code"]
      },
      {
        id: "noon-adha10",
        store: "Noon",
        storeSlug: "noon-coupon-code",
        code: "ADHA10",
        title: "Noon Cashback Code ADHA10",
        description: "Seasonal Noon cashback offer providing 10% back on eligible purchases",
        discount: "10% Cashback",
        discountShort: "10%",
        category: "Seasonal",
        validFrom: "2026-01-01",
        outboundUrl: "https://www.noon.com",
        logoText: "NOON",
        logoBg: "#FEF3C7",
        logoColor: "#92400E",
        cardBg: "linear-gradient(135deg, #FEEE00, #F7C600)",
        cardTextColor: "#1a1a1a",
        badgeColor: "rgba(0,0,0,0.12)",
        badgeText: "#1a1a1a",
        borderColor: "#065F46",
        copyBtnBg: "#065F46",
        metaKeywords: ["ADHA10 Noon code", "Noon seasonal coupon", "ADHA10 cashback"]
      },
      {
        id: "noon-forever10",
        store: "Noon",
        storeSlug: "noon-coupon-code",
        code: "FOREVER10",
        title: "Noon Cashback Code FOREVER10",
        description: "Flat 10% cashback for all Noon users across all product categories",
        discount: "10% Cashback",
        discountShort: "10%",
        category: "All Categories",
        validFrom: "2026-01-01",
        outboundUrl: "https://www.noon.com",
        logoText: "NOON",
        logoBg: "#FEF3C7",
        logoColor: "#92400E",
        cardBg: "linear-gradient(135deg, #FEEE00, #F7C600)",
        cardTextColor: "#1a1a1a",
        badgeColor: "rgba(0,0,0,0.12)",
        badgeText: "#1a1a1a",
        borderColor: "#065F46",
        copyBtnBg: "#065F46",
        metaKeywords: ["FOREVER10 Noon", "Noon FOREVER10 cashback", "FOREVER10 coupon"]
      }
    ]
  },
  {
    name: "Namshi",
    slug: "namshi-coupon-code",
    description: "The leading online fashion and lifestyle destination in the GCC, offering shoes, clothing, and accessories.",
    longDescription: `Namshi is the Middle East's premier online fashion and lifestyle retailer, offering a curated selection of over 50,000 products from more than 500 global and regional brands. Available in the UAE, Saudi Arabia, Kuwait, Bahrain, Oman, and Qatar, Namshi has established itself as the go-to platform for fashion-conscious shoppers across the GCC.\n\nThe platform specializes in streetwear, sneakers, activewear, modest fashion, and beauty products. Popular brands available on Namshi include Nike, Adidas, Puma, New Balance, Vans, Converse, Steve Madden, Aldo, Mango, and many more. Namshi's own private label brands also offer stylish and affordable options across clothing, shoes, and accessories.\n\nNamshi is known for its frequent flash sales, seasonal promotions, and exclusive coupon codes that can save shoppers up to 75% on their favorite brands. The platform offers free shipping on orders above a certain threshold, free returns within 14 days, and same-day delivery in select cities. Their mobile app also features exclusive app-only deals and early access to sales events.\n\nUsing the right Namshi discount code at checkout can significantly reduce your shopping bill. The LL44 code is currently the most versatile offer, providing discounts ranging from 10% to 75% depending on the items in your cart and current promotions. Combining this code with Namshi's seasonal sales during Ramadan, Eid, and National Day can result in extraordinary savings.`,
    category: "Fashion, Shoes & Lifestyle",
    outboundUrl: "https://www.namshi.com",
    logoText: "NMSH",
    logoBg: "#F3F4F6",
    logoColor: "#1F2937",
    heroBg: "from-gray-800 to-gray-900",
    heroGradient: "linear-gradient(135deg, #000000, #333333)",
    metaTitle: "Namshi Discount Code UAE 2026 – LL44 for Up to 75% Off | That Coupon",
    metaDescription: "Use Namshi discount code LL44 for up to 75% off fashion, shoes & accessories in UAE 2026. Verified, working today. Copy & save instantly at That Coupon.",
    metaKeywords: ["Namshi discount code UAE", "Namshi promo code", "LL44 Namshi", "Namshi coupon 2026", "Namshi 75% off", "Namshi fashion code", "Namshi shoes discount"],
    h1: "Namshi Discount Code UAE 2026 – Up to 75% Off Fashion & Shoes",
    faq: [
      {
        question: "What is the best Namshi discount code?",
        answer: "The best Namshi discount code is LL44. This code offers discounts ranging from 10% to 75% off on fashion, shoes, and accessories. The exact discount depends on the item and current promotions, but it consistently provides the highest savings."
      },
      {
        question: "Can I use LL44 on sale items at Namshi?",
        answer: "Yes, LL44 can often be combined with existing sale prices on Namshi. During major sale events like Ramadan and Eid, stacking this code with already reduced prices can result in savings of up to 75% on your favorite brands."
      },
      {
        question: "How do I use a Namshi promo code?",
        answer: "Add your desired items to the Namshi cart, proceed to checkout, and enter your promo code in the 'Promo Code' field. Click 'Apply' and the discount will be immediately reflected in your order total."
      },
      {
        question: "Is the LL44 code still working in 2026?",
        answer: "Yes, LL44 is verified and working as of May 2026. Our team tests this code daily and removes it from the site if it stops working. We recommend checking That Coupon regularly for the latest status."
      },
      {
        question: "Does Namshi offer free shipping with coupon codes?",
        answer: "Namshi offers free shipping on orders above AED 100 in the UAE. The LL44 code focuses on product discounts. During promotional events, Namshi may also offer free shipping codes that can be used alongside discount codes."
      }
    ],
    coupons: [
      {
        id: "namshi-ll44",
        store: "Namshi",
        storeSlug: "namshi-coupon-code",
        code: "LL44",
        title: "Namshi Discount Code LL44",
        description: "From 10% to 75% off on fashion, shoes, and accessories",
        discount: "10%–75% OFF",
        discountShort: "75%",
        category: "Fashion, Shoes & Accessories",
        isNew: false,
        isHot: true,
        validFrom: "2026-01-01",
        outboundUrl: "https://www.namshi.com",
        logoText: "NMSH",
        logoBg: "#F3F4F6",
        logoColor: "#1F2937",
        cardBg: "linear-gradient(135deg, #000000, #333333)",
        cardTextColor: "#FFFFFF",
        badgeColor: "rgba(255,255,255,0.15)",
        badgeText: "#FFFFFF",
        borderColor: "#374151",
        copyBtnBg: "#1F2937",
        metaKeywords: ["LL44 Namshi", "Namshi LL44 code", "Namshi 75% off code", "LL44 discount"]
      }
    ]
  },
  {
    name: "Shosh Arab",
    slug: "shosh-arab-coupon-code",
    description: "Specialized in elegant, traditional, and modest fashion for women across the GCC region.",
    longDescription: `Shosh Arab is a distinguished online fashion brand that specializes in traditional and modest fashion for women across the GCC region. The brand has carved out a unique niche by offering beautifully crafted abayas, kaftans, modest dresses, hijabs, and accessories that blend traditional Middle Eastern aesthetics with contemporary design sensibilities.\n\nWhat sets Shosh Arab apart from other modest fashion retailers is their commitment to quality craftsmanship and attention to detail. Each piece is carefully designed using premium fabrics that are both comfortable and elegant, making them suitable for everyday wear as well as special occasions like Eid celebrations, weddings, and formal gatherings. Their collections frequently draw inspiration from Arabic calligraphy, geometric patterns, and nature motifs.\n\nShosh Arab has built a loyal customer base across the UAE, Saudi Arabia, Kuwait, and other GCC countries. The brand frequently releases new collections aligned with seasonal trends and cultural events. Their Ramadan and Eid collections are particularly popular, featuring luxurious fabrics and intricate embellishments.\n\nUsing the Shosh Arab promo code HH4 at checkout gives you a flat 3% discount on your entire order. While this may seem modest, it stacks on top of Shosh Arab's already competitive pricing and any seasonal promotions they may be running. For regular customers who shop modest fashion frequently, this consistent discount adds up to meaningful savings over time.`,
    category: "Modest Fashion",
    outboundUrl: "https://www.shosharab.com",
    logoText: "SHOSH",
    logoBg: "#EDE9FE",
    logoColor: "#5B21B6",
    heroBg: "from-purple-600 to-purple-800",
    heroGradient: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
    metaTitle: "Shosh Arab Promo Code UAE 2026 – HH4 for 3% Off Modest Fashion | That Coupon",
    metaDescription: "Use Shosh Arab promo code HH4 for 3% off traditional & modest fashion in UAE 2026. Verified and working today. Copy the code at That Coupon and save on abayas & kaftans.",
    metaKeywords: ["Shosh Arab promo code", "HH4 Shosh Arab", "Shosh Arab coupon UAE", "Shosh Arab discount", "modest fashion coupon UAE", "abaya discount code"],
    h1: "Shosh Arab Promo Code UAE 2026 – 3% Off Modest Fashion",
    faq: [
      {
        question: "What is the promo code for Shosh Arab?",
        answer: "The active promo code for Shosh Arab is HH4. This code gives you a flat 3% discount on all traditional and modest fashion items, including abayas, kaftans, dresses, hijabs, and accessories."
      },
      {
        question: "Can I use HH4 on sale items at Shosh Arab?",
        answer: "Yes, the HH4 code typically applies to both regular-priced and sale items at Shosh Arab. This means you can stack the 3% discount on top of already reduced prices during seasonal promotions."
      },
      {
        question: "Does Shosh Arab ship across the GCC?",
        answer: "Yes, Shosh Arab ships to the UAE, Saudi Arabia, Kuwait, Bahrain, Oman, Qatar, and other GCC countries. Shipping times and costs may vary by destination."
      },
      {
        question: "How often does Shosh Arab release new collections?",
        answer: "Shosh Arab releases new collections regularly, with major drops during Ramadan, Eid, and other seasonal events. Sign up for the That Coupon newsletter to be notified of new Shosh Arab collections and exclusive deals."
      }
    ],
    coupons: [
      {
        id: "shosh-hh4",
        store: "Shosh Arab",
        storeSlug: "shosh-arab-coupon-code",
        code: "HH4",
        title: "Shosh Arab Promo Code HH4",
        description: "Flat 3% discount on traditional and modest fashion collections",
        discount: "3% Discount",
        discountShort: "3%",
        category: "Modest Fashion",
        isNew: true,
        isHot: false,
        validFrom: "2026-01-01",
        outboundUrl: "https://www.shosharab.com",
        logoText: "SHOSH",
        logoBg: "#EDE9FE",
        logoColor: "#5B21B6",
        cardBg: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
        cardTextColor: "#FFFFFF",
        badgeColor: "rgba(255,255,255,0.18)",
        badgeText: "#FFFFFF",
        borderColor: "#7C3AED",
        copyBtnBg: "#7C3AED",
        metaKeywords: ["HH4 Shosh Arab", "Shosh Arab HH4", "Shosh Arab 3% off", "modest fashion promo code"]
      }
    ]
  },
  {
    name: "Bloomingdale's",
    slug: "bloomingdales-uae-coupon",
    description: "Iconic luxury department store offering premium fashion, beauty, and home products in the UAE.",
    longDescription: `Bloomingdale's UAE brings the legendary New York shopping experience to the Middle East, with a flagship location in Dubai and a comprehensive online store serving customers across the GCC. The brand is synonymous with luxury retail, offering an exquisite selection of designer fashion, premium beauty products, fine jewelry, and upscale home goods.\n\nShopping at Bloomingdale's UAE means access to world-renowned designer brands including Gucci, Prada, Louis Vuitton, Chanel, Dior, Tom Ford, La Mer, and many more. The store's carefully curated selection spans women's and men's fashion, children's clothing, cosmetics, fragrances, skincare, and home decor. Each brand is handpicked to ensure the highest quality and the latest seasonal collections.\n\nBloomingdale's UAE frequently hosts exclusive events, trunk shows, and private shopping experiences. Their loyalty program offers members early access to sales, exclusive discounts, and personalized styling services. The online store provides the same premium experience with detailed product descriptions, high-resolution imagery, and white-glove delivery options.\n\nThe Bloomingdale's coupon code AB57 provides up to 15% off your purchase, making luxury shopping more accessible. This code works on a wide range of products including ready-to-wear fashion, handbags, shoes, beauty products, and home accessories. For fashion enthusiasts who love designer brands, this discount represents significant savings on premium merchandise.`,
    category: "Luxury Fashion & Beauty",
    outboundUrl: "https://www.bloomingdales.com",
    logoText: "BLM",
    logoBg: "#DBEAFE",
    logoColor: "#1E3A5F",
    heroBg: "from-slate-700 to-slate-900",
    heroGradient: "linear-gradient(135deg, #1E3A5F, #0F2439)",
    metaTitle: "Bloomingdale's UAE Coupon Code 2026 – AB57 for 15% Off | That Coupon",
    metaDescription: "Use Bloomingdale's UAE coupon code AB57 for up to 15% off luxury fashion, beauty & home in 2026. Verified, working today. Copy the code at That Coupon and save.",
    metaKeywords: ["Bloomingdale's coupon UAE", "AB57 Bloomingdale's", "Bloomingdale's discount code", "Bloomingdale's promo code UAE", "luxury fashion coupon UAE", "Bloomingdale's Dubai"],
    h1: "Bloomingdale's UAE Coupon Code 2026 – Up to 15% Off Luxury Fashion",
    faq: [
      {
        question: "Is there a discount code for Bloomingdale's UAE?",
        answer: "Yes, the coupon code AB57 is currently active for Bloomingdale's UAE. This code provides up to 15% off on luxury fashion, beauty products, and home accessories."
      },
      {
        question: "Can I use AB57 on designer brands at Bloomingdale's?",
        answer: "The AB57 code applies to a wide range of products at Bloomingdale's UAE. However, some exclusions may apply to specific designer brands or already discounted items. Check the terms at checkout for full details."
      },
      {
        question: "Does Bloomingdale's UAE offer free shipping?",
        answer: "Bloomingdale's UAE offers free shipping on orders above a certain threshold. During promotional events, they may also offer sitewide free shipping. Check their website for current shipping policies."
      },
      {
        question: "How often does Bloomingdale's UAE have sales?",
        answer: "Bloomingdale's UAE hosts major sales during seasonal events including Ramadan, Eid, Dubai Shopping Festival, and end-of-season clearances. These events can offer discounts of up to 50% on designer merchandise."
      }
    ],
    coupons: [
      {
        id: "bloom-ab57",
        store: "Bloomingdale's",
        storeSlug: "bloomingdales-uae-coupon",
        code: "AB57",
        title: "Bloomingdale's Coupon Code AB57",
        description: "Up to 15% discount on luxury fashion and beauty",
        discount: "Up to 15% OFF",
        discountShort: "15%",
        category: "Luxury Fashion & Beauty",
        isNew: true,
        isHot: false,
        validFrom: "2026-01-01",
        outboundUrl: "https://www.bloomingdales.com",
        logoText: "BLM",
        logoBg: "#DBEAFE",
        logoColor: "#1E3A5F",
        cardBg: "linear-gradient(135deg, #1E3A5F, #0F2439)",
        cardTextColor: "#FFFFFF",
        badgeColor: "rgba(255,255,255,0.15)",
        badgeText: "#FFFFFF",
        borderColor: "#1E3A5F",
        copyBtnBg: "#1E3A5F",
        metaKeywords: ["AB57 Bloomingdale's", "Bloomingdale's AB57 code", "Bloomingdale's 15% off", "luxury fashion coupon"]
      }
    ]
  }
];

export const categories = [
  {
    name: "Fashion",
    slug: "fashion",
    description: "Coupon codes for fashion, shoes, and accessories across top UAE and GCC stores.",
    stores: ["Namshi", "Shosh Arab", "Bloomingdale's"]
  },
  {
    name: "Electronics",
    slug: "electronics",
    description: "Discount codes for electronics, gadgets, and tech products from leading online stores.",
    stores: ["Noon"]
  }
];

export function getAllCoupons(): Coupon[] {
  return stores.flatMap(s => s.coupons);
}

export function getStoreBySlug(slug: string): Store | undefined {
  return stores.find(s => s.slug === slug);
}

export function getRelatedStores(currentSlug: string): Store[] {
  return stores.filter(s => s.slug !== currentSlug);
}
