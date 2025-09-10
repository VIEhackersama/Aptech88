import React, { useMemo, useState } from "react";

export type NewsTag =
  | "Thị trường"
  | "Chính sách"
  | "Công nghệ"
  | "Chuyên gia"
  | "Sự kiện"
  | "Hoạt động"
  | "Tuyển dụng"
  | "Tất cả";

export type NewsItem = {
  id: string;
  title: string;
  date: string;     // yyyy-mm-dd hoặc chuỗi tự do
  tag: Exclude<NewsTag, "Tất cả">;
  excerpt: string;
  image?: string;
  href?: string;
};

type Props = {
  title: string;
  items: NewsItem[];
  tags?: NewsTag[]; // nếu không truyền, sẽ tự suy ra từ items + "Tất cả"
  ctaHref?: string;
  ctaText?: string;
};

function formatDate(d: string) {
  const iso = /^\d{4}-\d{2}-\d{2}$/;
  if (iso.test(d)) {
    const [y, m, day] = d.split("-");
    return `${day}/${m}/${y}`;
  }
  return d;
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group rounded-2xl overflow-hidden border-2 border-[#FFE28C] bg-white shadow-sm hover:shadow-lg transition">
      <div className="h-44 w-full overflow-hidden">
        <img
          src={item.image || "/assets/home1.jpeg"}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 mb-2">
          <span className="inline-block bg-[#FFF4CC] border border-[#FFE28C] text-[#C48C00] px-2 py-1 rounded">
            {item.tag}
          </span>
          <span className="text-gray-500">•</span>
          <time className="text-gray-600">{formatDate(item.date)}</time>
        </div>

        <h3 className="text-lg md:text-xl font-extrabold text-blue-900 leading-snug">
          {item.title}
        </h3>
        <p className="mt-2 text-gray-700 text-sm leading-relaxed">{item.excerpt}</p>

        <div className="mt-4">
          <a
            href={item.href || "#"}
            className="inline-block rounded-lg border-2 border-[#FFC72C] text-blue-900 font-semibold px-4 py-2
                       hover:bg-[#FFC72C] hover:text-blue-900 transition"
          >
            Xem chi tiết
          </a>
        </div>
      </div>
    </article>
  );
}

export default function NewsPage({
  title,
  items,
  tags,
  ctaHref = "/contact",
  ctaText = "Liên hệ với chúng tôi",
}: Props) {
  const computedTags: NewsTag[] = useMemo(() => {
    if (tags && tags.length) return tags;
    const set = new Set<NewsTag>();
    items.forEach((i) => set.add(i.tag));
    return ["Tất cả", ...Array.from(set)];
  }, [items, tags]);

  const [activeTag, setActiveTag] = useState<NewsTag>("Tất cả");
  const filtered = useMemo(
    () => (activeTag === "Tất cả" ? items : items.filter((n) => n.tag === activeTag)),
    [activeTag, items]
  );

  return (
    <div className="pt-0 pb-12 px-4 md:px-8 bg-white min-h-screen">

      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 uppercase tracking-wide text-center mb-8">
          {title}
        </h1>

        {/* Filter tags */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-center mb-8">
          {computedTags.map((t) => {
            const active = t === activeTag;
            return (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`px-3 md:px-4 py-2 rounded-full text-sm font-semibold transition border-2
                ${
                  active
                    ? "bg-[#FFC72C] border-[#FFC72C] text-blue-900 shadow"
                    : "bg-white border-[#FFE28C] text-gray-800 hover:bg-[#FFF4CC]"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={ctaHref}
            className="inline-block rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 font-bold
                       border-2 border-[#FFC72C] shadow hover:brightness-105 transition"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}
