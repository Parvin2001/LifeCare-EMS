export const PHONE = "(706) 245-0689";
export const PHONE_HREF = "tel:+17062450689";
export const EMAIL = "info@lifecareemsga.com";
export const ADDRESS = "North Georgia";

export type Service = {
  icon: string;
  title: string;
  description: string;
  badge?: string;
};

export const services: Service[] = [
  {
    icon: "ArrowLeftRight",
    title: "Inter-facility Transport",
    description:
      "Safe, reliable transport between hospitals, clinics, nursing homes, and medical facilities with certified crews on board.",
  },
  {
    icon: "Droplets",
    title: "Dialysis Transport",
    description:
      "Dependable, on-time transport for dialysis patients to and from treatment centers — scheduled around your routine.",
  },
  {
    icon: "HeartPulse",
    title: "Basic Life Support (BLS)",
    description:
      "State-licensed BLS transport staffed by certified EMTs, equipped for non-critical medical transport needs.",
  },
  {
    icon: "Heart",
    title: "Hospice Transport",
    description:
      "Compassionate, dignified transport for hospice patients, coordinated closely with care teams and families.",
  },
  {
    icon: "ShieldCheck",
    title: "Event EMS",
    description:
      "On-site medical standby coverage for sporting events, concerts, film productions, and large public gatherings.",
  },
  {
    icon: "MapPin",
    title: "Long-Distance Transport",
    description:
      "Interstate and out-of-state medical transport with continuous monitoring and experienced crew support throughout.",
  },
];

export const additionalServices = [
  "Hospital Discharges",
  "Psychiatric Transport",
  "Wound Care Management",
  "Radiation Treatment & Chemotherapy",
  "Surgical Procedure Transport",
  "Physician Appointment Transport",
  "Nursing Home Transport",
];

export type Stat = {
  value: string;
  label: string;
  icon: string;
};

export const stats: Stat[] = [
  { value: "15+", label: "Years in Service", icon: "Clock" },
  { value: "10,000+", label: "Transports Completed", icon: "Ambulance" },
  { value: "50+", label: "Counties Served", icon: "MapPin" },
];

export type TeamMember = {
  name: string;
  title: string;
  initials: string;
  region?: string;
  email?: string;
  phone?: string;
};

export const leadership: TeamMember[] = [
  {
    name: "Brian Haney",
    title: "Chief Executive Officer / Owner",
    initials: "BH",
    email: "Brian@lifecareemsga.com",
  },
  {
    name: "Tru Patel",
    title: "Chief Operating Officer",
    initials: "TP",
    email: "Tru@lifecareemsga.com",
  },
  {
    name: "Jonathan Herpst",
    title: "Public Relations",
    initials: "JH",
    email: "Jonathan@lifecareemsga.com",
    phone: "(706) 921-9099",
  },
];

export const regionalManagers: TeamMember[] = [
  {
    name: "Cal Hardwick",
    title: "Regional Manager",
    initials: "CH",
    region: "Valdosta, Gray",
    email: "Calvin@lifecareemsga.com",
    phone: "(470) 998-9419",
  },
  {
    name: "Carole Pence",
    title: "Regional Manager",
    initials: "CP",
    region: "Habersham",
    email: "Carole@lifecareemsga.com",
    phone: "(706) 776-1526",
  },
  {
    name: "Jenn Morgan",
    title: "Regional Manager",
    initials: "JM",
    region: "Columbus, Byron, Phenix City",
    email: "Jenn@lifecareemsga.com",
    phone: "(762) 425-4319",
  },
];

// Keep backward compat
export const team: TeamMember[] = [...leadership, ...regionalManagers];

export type Testimonial = {
  quote: string;
  name: string;
  relation: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "LifeCare was there when every second counted. The crew was calm, professional, and took incredible care of my father. I cannot thank them enough.",
    name: "Sandra M.",
    relation: "Family Member",
  },
  {
    quote:
      "We rely on LifeCare for all of our dialysis transport. They are reliable, punctual, and genuinely care about the patients they serve.",
    name: "Dr. James K.",
    relation: "Referring Physician",
  },
  {
    quote:
      "I was transported over 200 miles and the team made the entire journey comfortable and stress-free. Truly a world-class operation.",
    name: "Robert T.",
    relation: "Patient",
  },
];

export const features = [
  "State-Licensed EMS Provider",
  "HIPAA Compliant",
  "BLS & ALS Certified Crews",
  "GPS-Tracked Fleet",
  "Fully Insured",
  "Community-Focused Since 2009",
];
