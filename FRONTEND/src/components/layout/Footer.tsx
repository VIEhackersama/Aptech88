import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, PawPrint } from "lucide-react";

export default function Footer() {
  const YEAR = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mt-20">
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#047857 0%,#059669 50%,#10b981 100%)" }} />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <PawPrint size={18} />
              </div>
              <span className="text-xl font-extrabold tracking-wide text-slate-900">FurShield</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Every paw deserves a shield. We connect pet owners, vets, and shelters to build a kinder ecosystem
              for animals—adoption, care tips, and resources in one place.
            </p>

            {/* Newsletter (dummy) */}
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex w-full max-w-sm items-center gap-2" aria-label="Newsletter signup">
              <input
                type="email"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                placeholder="Your email"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600/50"
              >
                Join
              </button>
            </form>

            {/* Social */}
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="Facebook" href="#" className="p-2 rounded-full border border-slate-200 text-slate-600 hover:text-emerald-700 hover:border-emerald-200">
                <Facebook size={18} />
              </a>
              <a aria-label="Instagram" href="#" className="p-2 rounded-full border border-slate-200 text-slate-600 hover:text-emerald-700 hover:border-emerald-200">
                <Instagram size={18} />
              </a>
              <a aria-label="Twitter/X" href="#" className="p-2 rounded-full border border-slate-200 text-slate-600 hover:text-emerald-700 hover:border-emerald-200">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-base font-semibold text-slate-900">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="hover:text-emerald-700" href="/">Home</a></li>
              <li><a className="hover:text-emerald-700" href="/about">About Us</a></li>
              <li><a className="hover:text-emerald-700" href="/adopt">Adopt</a></li>
              <li><a className="hover:text-emerald-700" href="/donate">Donate</a></li>
              <li><a className="hover:text-emerald-700" href="/volunteer">Volunteer</a></li>
              <li><a className="hover:text-emerald-700" href="/contact">Contact</a></li>
            </ul>
          </nav>

          {/* Help & Resources */}
          <nav aria-label="Footer resources">
            <h3 className="text-base font-semibold text-slate-900">Help & Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="hover:text-emerald-700" href="/care-tips">Care Tips</a></li>
              <li><a className="hover:text-emerald-700" href="/news">News</a></li>
              <li><a className="hover:text-emerald-700" href="/shop">Shop</a></li>
              <li><a className="hover:text-emerald-700" href="/faq">FAQ</a></li>
              <li><a className="hover:text-emerald-700" href="/terms">Terms</a></li>
              <li><a className="hover:text-emerald-700" href="/privacy">Privacy</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5 text-emerald-600" aria-hidden />
                <a href="mailto:hello@furshield.app" className="hover:text-emerald-700">hello@furshield.app</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-0.5 text-emerald-600" aria-hidden />
                <a href="tel:+84393201068" className="hover:text-emerald-700">(+84) 39 320 1068</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 text-emerald-600" aria-hidden />
                <span>123 Pet Street, Ha Noi, Viet Nam</span>
              </li>
            </ul>
            <div className="mt-4 h-28 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50" />
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 h-14 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-600">
          <span>© {YEAR} FurShield. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-emerald-700">Privacy</a>
            <a href="/terms" className="hover:text-emerald-700">Terms</a>
            <a href="#top" className="hover:text-emerald-700">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
