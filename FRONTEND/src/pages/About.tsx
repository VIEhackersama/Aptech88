import React from "react";
import MissionVision from "../components/about/MissionVision";
import Timeline from "../components/about/Timeline";
import TeamPortal from "../components/about/TeamPortal";
import ContactBlock from "../components/about/ContactBlock";

export default function About() {
  return (
    <div className="bg-white">
      <section className="mt-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">About Us</h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Introduce project background, purpose, and who we serve. Keep a clear layout with anchors matching header sub-links.
          </p>
        </div>
      </section>
      <MissionVision />
      <Timeline />
      <TeamPortal />
      <ContactBlock />
    </div>
  );
}
