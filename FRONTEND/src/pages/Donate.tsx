import React from "react";
import DonateHero from "../components/donate/DonateHero";
import DonateIntro from "../components/donate/DonateIntro";
import DonorGrid from "../components/donate/DonorGrid";
import DonationKinds from "../components/donate/DonationKinds";
import DonorListBanner from "../components/donate/DonorListBanner";
import PetsOfWeek from "../components/donate/PetsOfWeek";

export default function Donate() {
  return (
    <div className="bg-white">
      <DonateHero />
      <DonateIntro />
      <DonorGrid />
      <DonationKinds />
      <DonorListBanner />
      <PetsOfWeek />
    </div>
  );
}
