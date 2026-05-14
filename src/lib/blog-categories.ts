export const blogCategories = {
  "discount-codes": {
    name: "Discount Codes",
    description:
      "Verified Noon discount codes for the UAE — save on electronics, fashion, home and more with working promo codes.",
  },
  "coupon-codes": {
    name: "Coupon Codes",
    description:
      "Latest Noon coupon codes hand-tested and updated daily. Find cashback codes, sitewide offers and exclusive deals.",
  },
  "promo-codes": {
    name: "Promo Codes",
    description:
      "Active Noon promo codes that work at checkout. Get instant discounts and cashback on every purchase in the UAE.",
  },
  "cashback": {
    name: "Cashback Deals",
    description:
      "Maximise your savings with Noon cashback codes — get money back on every order credited to your Noon wallet.",
  },
  "seasonal": {
    name: "Seasonal Sales",
    description:
      "Special Noon coupon codes for seasonal events — Yellow Friday, Ramadan, Eid, 11.11 and more across the UAE.",
  },
  "category-deals": {
    name: "Category Deals",
    description:
      "Category-specific Noon discount codes for electronics, fashion, beauty, groceries and free delivery offers.",
  },
  "tips": {
    name: "Tips & Guides",
    description:
      "Expert guides on how to apply Noon codes, maximise savings, and shop smarter during sales events in the UAE.",
  },
} as const;

export type BlogCategoryKey = keyof typeof blogCategories;
