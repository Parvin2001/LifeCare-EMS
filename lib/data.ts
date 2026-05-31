export const PHONE = "(706) 245-0689";
export const PHONE_HREF = "tel:+17062450689";
export const EMAIL = "info@lifecareemsga.com";
export const ADDRESS = "Georgia & Alabama";

export type Service = {
  icon: string;
  title: string;
  description: string;
  details: string;
  badge?: string;
};

export const services: Service[] = [
  {
    icon: "ArrowLeftRight",
    title: "Inter-facility Transport",
    description:
      "Safe, reliable transport between hospitals, clinics, nursing homes, and medical facilities with certified crews on board.",
    details:
      "Our inter-facility transport service moves patients safely between hospitals, clinics, skilled nursing facilities, and rehabilitation centers. Our crews manage every detail — from bed-to-stretcher transfers to coordinating with receiving staff — so transitions in care are smooth and stress-free. Whether it's a planned transfer or an urgent move, we're equipped and ready.",
  },
  {
    icon: "Droplets",
    title: "Dialysis Transport",
    description:
      "Dependable, on-time transport for dialysis patients to and from treatment centers — scheduled around your routine.",
    details:
      "We provide reliable, on-time transport for dialysis patients — often multiple times per week. Our team handles loading, unloading, and patient positioning with care, ensuring comfort and safety throughout the trip. We build our schedule around your treatment routine so you never miss a session.",
  },
  {
    icon: "HeartPulse",
    title: "Basic Life Support (BLS)",
    description:
      "State-licensed BLS transport staffed by certified EMTs, equipped for non-critical medical transport needs.",
    details:
      "Our state-licensed BLS units are staffed by certified EMTs trained to monitor vital signs, manage oxygen, and respond to changes in a patient's condition en route. Available 24/7, our BLS service covers non-critical but medically necessary transport — keeping patients safe and monitored from pickup to drop-off.",
  },
  {
    icon: "Heart",
    title: "Hospice Transport",
    description:
      "Compassionate, dignified transport for hospice patients, coordinated closely with care teams and families.",
    details:
      "We understand the sensitivity of end-of-life care. Our crews provide dignified, unhurried transport for hospice patients — working closely with families, care teams, and facilities to honor the patient's comfort and wishes at every step. We treat every hospice transport with the respect and compassion it deserves.",
  },
  {
    icon: "ShieldCheck",
    title: "Event EMS",
    description:
      "On-site medical standby coverage for sporting events, concerts, film productions, and large public gatherings.",
    details:
      "From high school football games to major concerts, film productions, and corporate events, our licensed EMTs and paramedics provide on-site medical standby coverage. We work with organizers ahead of time to assess risk, stage the right resources, and ensure immediate response if anyone needs medical attention during your event.",
  },
  {
    icon: "MapPin",
    title: "Long-Distance Transport",
    description:
      "Interstate and out-of-state medical transport with continuous monitoring and experienced crew support throughout.",
    details:
      "When a patient needs to travel across state lines or hundreds of miles, our experienced crews provide continuous monitoring and clinical support the entire way. We coordinate with sending and receiving facilities, keep families informed throughout the journey, and ensure the patient arrives safely — no matter the distance.",
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
  { value: "60,000+", label: "Transports Done in 2025", icon: "Ambulance" },
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

export const adminCompliance: TeamMember[] = [
  {
    name: "Jonathan Herpst",
    title: "Public Relations",
    initials: "JH",
    email: "Jonathan@lifecareemsga.com",
    phone: "(706) 921-9099",
  },
  {
    name: "Grace Haney",
    title: "Compliance (CAC CACO)",
    initials: "GH",
    email: "Grace@temsconsultants.com",
    phone: "(706) 534-0536",
  },
  {
    name: "Sierra Crowe",
    title: "Human Resources Director",
    initials: "SC",
    email: "Sierra@temsconsultants.com",
    phone: "(762) 425-4323",
  },
];

// Keep backward compat
export const team: TeamMember[] = [...leadership, ...regionalManagers, ...adminCompliance];

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
  "Serving Georgia & Alabama Since 2009",
];
