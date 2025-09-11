import React from "react";
import Hero from "../components/home/Hero";
import AudienceGrid from "../components/home/AudienceGrid";
import FeaturedPets from "../components/home/FeaturedPets";
import CareTipsTeaser from "../components/home/CareTipsTeaser";
import ProductsShowcase from "../components/home/ProductsShowcase";
import DonateCta from "../components/home/DonateCta";
import Faq from "../components/home/Faq";
import Newsletter from "../components/home/Newsletter";
import LogoCloud from "../components/common/LogoCloud";
import { HERO_IMG, CARD_IMG, FEATURED_PETS, TIPS, PRODUCTS, FAQS, PARTNER_LOGOS } from "../data/home";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero image={HERO_IMG} />
      <AudienceGrid />
      <FeaturedPets items={FEATURED_PETS} />
      <CareTipsTeaser tips={TIPS} />
      <ProductsShowcase products={PRODUCTS} />
      <DonateCta image={CARD_IMG} />
      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Trusted by partners</h2>
          <LogoCloud logos={PARTNER_LOGOS} />
        </div>
      </section>
      <Faq items={FAQS} />
      <Newsletter />
    </div>
  );
}
