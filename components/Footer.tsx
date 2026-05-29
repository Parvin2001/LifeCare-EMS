import { Phone, MapPin, FileText } from "lucide-react";
import Image from "next/image";
import { PHONE, PHONE_HREF, ADDRESS } from "@/lib/data";

const serviceLinks = [
  "Inter-facility Transport",
  "Dialysis Transport",
  "Basic Life Support (BLS)",
  "Hospice Transport",
  "Event EMS",
  "Long-Distance Transport",
];

const forms = [
  {
    label: "Notice of Privacy Practices",
    href: "/forms/notice-of-privacy-practices.pdf",
  },
  // Additional forms coming soon
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111827] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 inline-block bg-white rounded-lg px-3 py-2">
              <Image
                src="/images/logo.jpg"
                alt="LifeCare EMS of Georgia"
                width={140}
                height={52}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-[#94A3B8] text-xs leading-relaxed mb-3">
              Georgia &amp; Alabama&apos;s trusted emergency and non-emergency medical transport provider. Patient-Focused &amp; Professionally Driven.
            </p>
            <p className="text-[#94A3B8] text-xs">Licensed &amp; Insured in Georgia &amp; Alabama</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-4 tracking-wide uppercase">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="/#services" className="text-[#94A3B8] text-xs hover:text-[#5AB8E8] transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-4 tracking-wide uppercase">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-2 text-[#94A3B8] text-xs hover:text-white transition-colors">
                  <Phone size={13} className="text-[#5AB8E8] shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-[#94A3B8] text-xs">
                  <MapPin size={13} className="text-[#5AB8E8] shrink-0 mt-0.5" />
                  {ADDRESS}
                </div>
              </li>
            </ul>
          </div>

          {/* Forms */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-4 tracking-wide uppercase">Forms</h4>
            <ul className="space-y-3">
              {forms.map((form) => (
                <li key={form.label}>
                  <a
                    href={form.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#94A3B8] text-xs hover:text-[#5AB8E8] transition-colors"
                  >
                    <FileText size={13} className="text-[#5AB8E8] shrink-0" />
                    {form.label}
                  </a>
                </li>
              ))}
              {/* Placeholders for upcoming forms */}
              <li className="text-[#94A3B8]/40 text-xs italic">More forms coming soon</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#94A3B8] text-xs">
            &copy; {new Date().getFullYear()} LifeCare EMS of Georgia, LLC. All rights reserved.
          </p>
          <p className="text-[#94A3B8] text-xs">Patient-Focused &amp; Professionally Driven</p>
        </div>
      </div>
    </footer>
  );
}
