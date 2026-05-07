import Link from "next/link";
import { SITE_NAME } from "@/lib/store-data";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": SITE_NAME, "item": "https://thatcoupon.com/" },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.href ? { "item": `https://thatcoupon.com${item.href}` } : {})
      }))
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
        <li>
          <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-emerald-700 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-800 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
