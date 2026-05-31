import { ChevronRight, Shield, CheckCircle, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#5AB8E8]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#D42A22]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#D42A22]/40 bg-[#D42A22]/10 text-[#D42A22] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <Shield size={12} />
          Georgia&apos;s Trusted EMS Provider · 15+ Years
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] leading-tight tracking-tight mb-6 max-w-4xl mx-auto">
          Emergency &amp; Non-Emergency{" "}
          <span className="text-[#5AB8E8]">Medical Transport</span>{" "}
          Across Georgia
        </h1>

        {/* Sub-copy */}
        <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          From 911 emergencies to scheduled medical appointments — LifeCare EMS delivers compassionate, professional transport when it matters most.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#services"
            className="flex items-center gap-2 bg-[#5AB8E8] hover:bg-[#3AAED8] text-white font-semibold px-8 py-4 rounded-md transition-colors text-base shadow-sm"
          >
            Request Transport
            <ChevronRight size={18} />
          </a>
          <a
            href="/contact"
            className="flex items-center gap-2 border-2 border-[#5AB8E8] text-[#5AB8E8] hover:bg-[#5AB8E8] hover:text-white font-semibold px-8 py-4 rounded-md transition-colors text-base"
          >
            <Mail size={18} />
            Contact Us
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CheckCircle size={15} className="text-[#5AB8E8]" />
            State Licensed &amp; Insured
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-2">
            <CheckCircle size={15} className="text-[#5AB8E8]" />
            BLS &amp; ALS Certified Crews
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-2">
            <CheckCircle size={15} className="text-[#5AB8E8]" />
            15+ Years Serving Georgia &amp; Alabama
          </div>
        </div>
      </div>
    </section>
  );
}
