import React from "react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionTitle({ eyebrow, title, subtitle, className }: Props) {
  return (
    <div className={className ?? ""}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 text-xs font-semibold">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-slate-900">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}
