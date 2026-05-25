import {
  ArrowLeftRight,
  Droplets,
  HeartPulse,
  Heart,
  ShieldCheck,
  MapPin,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import { services, additionalServices } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  ArrowLeftRight,
  Droplets,
  HeartPulse,
  Heart,
  ShieldCheck,
  MapPin,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#D42A22] text-sm font-semibold tracking-widest uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            Comprehensive Medical Transport Solutions
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Emergency and non-emergency transport across North Georgia — staffed by certified EMTs and paramedics.
          </p>
        </div>

        {/* Primary service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-xl p-7 hover:border-[#5AB8E8]/40 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-[#5AB8E8]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#5AB8E8]/20 transition-colors">
                  {Icon && <Icon size={24} className="text-[#5AB8E8]" />}
                </div>
                {service.badge && (
                  <span className="inline-block bg-[#C0392B]/15 text-[#E74C3C] text-xs font-semibold px-2.5 py-1 rounded-full mb-3 tracking-wide">
                    {service.badge}
                  </span>
                )}
                <h3 className="text-[#111827] font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional services */}
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h3 className="text-[#111827] font-semibold text-base mb-6">We Also Provide</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {additionalServices.map((s) => (
              <div key={s} className="flex items-center gap-3">
                <CheckCircle size={15} className="text-[#5AB8E8] shrink-0" />
                <span className="text-gray-600 text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Not sure which service you need? We&apos;ll help you find the right option.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#5AB8E8]/40 text-[#5AB8E8] hover:bg-[#5AB8E8] hover:text-white font-semibold text-sm px-6 py-3 rounded-md transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
