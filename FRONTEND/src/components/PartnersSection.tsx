// src/components/PartnersSection.tsx
import React from "react";

const partners = [
  {
    name: "VINACONEX",
    link: "http://www.vinatra.com.vn/",
    img: "/assets/vinaconex_logo.png",
  },
  {
    name: "BIDV",
    link: "http://www.bidv.com.vn/",
    img: "/assets/bidv_logo.jpg",
  },
  {
    name: "YANG MING",
    link: "http://www.yangming.com/english/ASP/index.asp",
    img: "/assets/yangming_logo.webp",
  },
  {
    name: "VIETNAM AIRLINES",
    link: "http://www.vietnamairlines.com/",
    img: "/assets/vna_logo.png",
  },
  {
    name: "VINACOMA",
    link: "http://vinacoma.com.vn/",
    img: "/assets/vinacoma_logo.jpg",
  },
  {
    name: "YOOSUNG VINA",
    link: "http://yellowpages.vnn.vn/business/listings_detail.asp?sql_code=1051554",
    img: "/assets/yosungvina_logo.jpg",
  },
  {
    name: "VIETTEL",
    link: "http://www.viettel.com.vn/",
    img: "/assets/viettel_logo.png",
  },
  {
    name: "CANON",
    link: "http://www.canon.com.vn/",
    img: "/assets/cannon_logo.png",
  },
];

const PartnersSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* <h2 className="text-2xl font-bold text-blue-800 mb-10 text-center">
      Đối tác & Khách hàng
    </h2> */}
    <div className="relative overflow-hidden">
      <div className="flex gap-12 animate-scroll-horizontal w-max">
        {partners.concat(partners).map((p, idx) => (
          <a
            key={idx}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300 flex-shrink-0"
          >
            <img
              src={p.img}
              alt={p.name}
              className="h-20 w-auto object-contain rounded border bg-white shadow p-2"
            />
          </a>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default PartnersSection;
