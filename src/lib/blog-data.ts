import { blogPostsPart1 } from "./blog-data-part1";
import { blogPostsPart2 } from "./blog-data-part2";
import { blogPostsPart3 } from "./blog-data-part3";

export type BlogPost = import("./blog-data-part1").BlogPost;

export const blogCategories: Record<string, { name: string; description: string }> = {
  "discount-codes": {
    name: "Discount Codes",
    description: "Latest verified Noon discount codes for the UAE. Save on every order with tested and working codes.",
  },
  "coupon-codes": {
    name: "Coupon Codes",
    description: "Noon coupon codes verified and updated daily. Get the best promo codes for electronics, fashion and more.",
  },
  "promo-codes": {
    name: "Promo Codes",
    description: "Active Noon promo codes for UAE shoppers. First order deals, sitewide offers and exclusive promotions.",
  },
  cashback: {
    name: "Cashback Deals",
    description: "Maximise your savings with Noon cashback codes. Get money back on every purchase you make.",
  },
  seasonal: {
    name: "Seasonal Sales",
    description: "Noon sale codes for Yellow Friday, Ramadan, Eid and more. The biggest deals of the year.",
  },
  "category-deals": {
    name: "Category Deals",
    description: "Category-specific Noon deals for electronics, fashion, beauty, groceries and more.",
  },
  tips: {
    name: "Tips & Guides",
    description: "Expert guides on how to save money on Noon. Step-by-step tutorials and savings strategies.",
  },
};

// All blog posts sorted by date (newest first)
export const blogPosts: BlogPost[] = [
  ...blogPostsPart1,
  ...blogPostsPart2,
  ...blogPostsPart3,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Get latest N posts
export function getLatestPosts(count: number): BlogPost[] {
  return blogPosts.slice(0, count);
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

// Get related posts (same category, excluding current)
export function getRelatedPosts(slug: string, count: number = 3): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  return blogPosts
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, count);
}
