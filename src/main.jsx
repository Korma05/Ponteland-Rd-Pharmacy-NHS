import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  ExternalLink,
  HeartPulse,
  Home,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  Pill,
  ShieldCheck,
  Stethoscope,
  Syringe,
  X
} from "lucide-react";
import "./styles.css";

const business = {
  name: "Ponteland Rd Pharmacy NHS",
  address: ["163–167 Ponteland Rd", "Cowgate", "Newcastle upon Tyne", "NE5 3AE", "United Kingdom"],
  phone: "+44 191 214 6022",
  tel: "tel:+441912146022",
  hours: "09:00 AM – 06:00 PM"
};

const services = [
  {
    icon: Pill,
    title: "Prescription Management",
    text: "Support with prescriptions and medication collection. Contact the pharmacy for help with your prescription."
  },
  {
    icon: CalendarDays,
    title: "Repeat Prescriptions",
    text: "A straightforward place to discuss repeat-prescription queries with your local pharmacy team."
  },
  {
    icon: ShieldCheck,
    title: "NHS Services",
    text: "Access pharmacy services within the NHS community-pharmacy setting."
  },
  {
    icon: Syringe,
    title: "Flu Vaccinations",
    text: "Flu vaccination services are among the services identified for the pharmacy."
  },
  {
    icon: Syringe,
    title: "COVID-19 Vaccinations",
    text: "COVID-19 vaccination services are identified as available. Contact the pharmacy for current arrangements."
  },
  {
    icon: Stethoscope,
    title: "Health Consultations",
    text: "A local point of contact for health consultations and pharmacy support."
  },
  {
    icon: MessageCircle,
    title: "Medication Advice",
    text: "Speak with the pharmacy team about medication-related questions and general support."
  },
  {
    icon: HeartPulse,
    title: "General Pharmacy Support",
    text: "Local community-pharmacy support for residents and visitors in the Cowgate area."
  }
];

const gallery = [
  { src: "/images/pharmacy-exterior-01.jpg", alt: "Front exterior of Ponteland Rd Pharmacy NHS", label: "Pharmacy exterior" },
  { src: "/images/pharmacy-exterior-02.jpg", alt: "Ponteland Rd Pharmacy NHS frontage", label: "Main frontage" },
  { src: "/images/pharmacy-exterior-03.jpg", alt: "Ponteland Rd Pharmacy NHS sign and entrance", label: "Pharmacy entrance" },
  { src: "/images/pharmacy-panorama.jpg", alt: "Wide street view showing Ponteland Rd Pharmacy NHS", label: "Local setting" },
  { src: "/images/pharmacy-interior.jpg", alt: "Community pharmacy interior with shelves and customers", label: "Pharmacy interior" },
  { src: "/images/pharmacist-reference.jpg", alt: "Pharmacist working behind a pharmacy counter", label: "Pharmacy team" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeImage || menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeImage, menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-pharmacy-100 selection:text-pharmacy-900">
      <a href="#main" className="skip-link">Skip to content</a>

      <div className="bg-pharmacy-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 text-sm sm:flex-row sm:px-6 lg:px-8">
          <span className="flex items-center gap-2"><ShieldCheck size={15} /> Local community pharmacy in Cowgate</span>
          <a className="flex items-center gap-2 font-semibold hover:underline" href={business.tel}>
            <Phone size={14} /> {business.phone}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <a href="#home" onClick={closeMenu} className="flex items-center gap-3" aria-label="Ponteland Rd Pharmacy NHS home">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-pharmacy-700 text-white shadow-card">
              <span className="text-2xl font-light leading-none">+</span>
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-extrabold tracking-tight text-slate-900 sm:text-base">PONTELAND RD.</span>
              <span className="block text-[11px] font-bold tracking-[0.17em] text-pharmacy-700">PHARMACY NHS</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {["About", "Services", "Prescriptions", "Vaccinations", "Gallery", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            ))}
            <a href={business.tel} className="btn-primary px-5 py-3 text-sm">Contact Us <ArrowRight size={16} /></a>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-800 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {["About", "Services", "Prescriptions", "Vaccinations", "Gallery", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="rounded-xl px-4 py-3 font-semibold hover:bg-pharmacy-50">{item}</a>
              ))}
              <a href={business.tel} className="btn-primary mt-2 justify-center">Call the Pharmacy <Phone size={17} /></a>
            </div>
          </div>
        )}
      </header>

      <main id="main">
        <section id="home" className="hero-section relative overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/pharmacy-exterior-01.jpg" alt="" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/15" />
          </div>
          <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <div className="eyebrow border-white/20 bg-white/10 text-white">
                <span className="h-2 w-2 rounded-full bg-emerald-300" /> Community pharmacy · Cowgate
              </div>
              <h1 className="mt-6 text-balance text-5xl font-extrabold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Your local pharmacy, <span className="text-emerald-300">close to home.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
                Ponteland Rd Pharmacy NHS supports local residents and visitors in Cowgate, Newcastle upon Tyne with prescription and community-pharmacy services.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#services" className="btn-light">Explore services <ArrowRight size={17} /></a>
                <a href={business.tel} className="btn-outline-white"><Phone size={17} /> Call the pharmacy</a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/75">
                <span className="flex items-center gap-2"><MapPin size={16} /> 163–167 Ponteland Rd</span>
                <span className="flex items-center gap-2"><Clock3 size={16} /> {business.hours}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-px px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
            {[
              [MapPin, "Local & accessible", "Serving the Cowgate community"],
              [Pill, "Prescription support", "Help with prescription queries"],
              [ShieldCheck, "NHS pharmacy", "Community pharmacy setting"]
            ].map(([Icon, title, text]) => (
              <div key={title} className="flex items-center gap-4 px-2 py-6 sm:px-7">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-pharmacy-50 text-pharmacy-700"><Icon size={21} /></span>
                <div><p className="font-bold text-slate-900">{title}</p><p className="mt-0.5 text-sm text-slate-500">{text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section-pad">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="relative">
              <div className="overflow-hidden rounded-[28px] shadow-soft">
                <img src="/images/pharmacy-interior.jpg" alt="Inside a community pharmacy" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-5 -right-3 rounded-2xl border border-white bg-white p-4 shadow-soft sm:-right-5">
                <p className="text-xs font-bold uppercase tracking-wider text-pharmacy-700">Visit us</p>
                <p className="mt-1 max-w-[180px] text-sm font-semibold leading-5 text-slate-800">163–167 Ponteland Rd, Cowgate</p>
              </div>
            </div>
            <div>
              <span className="eyebrow">About the pharmacy</span>
              <h2 className="section-title">A local pharmacy with a familiar address.</h2>
              <p className="section-copy">
                Ponteland Rd Pharmacy NHS is a community pharmacy located in Cowgate, Newcastle upon Tyne. The pharmacy serves local residents and visitors with prescription support and community-pharmacy services.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Prescription management", "NHS pharmacy services", "Vaccination services", "Health consultations"].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-pharmacy-600" size={19} />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn-secondary mt-8">Get in touch <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section id="services" className="section-pad bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="eyebrow">Pharmacy services</span>
              <h2 className="section-title">Practical support for everyday healthcare.</h2>
              <p className="section-copy">A clear overview of the prescription, NHS, vaccination and health-support services identified for the pharmacy.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, text }) => (
                <article key={title} className="service-card group">
                  <div className="icon-box group-hover:bg-pharmacy-700 group-hover:text-white"><Icon size={22} /></div>
                  <h3 className="mt-6 text-lg font-extrabold tracking-tight text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                  <a href={business.tel} className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-pharmacy-700 hover:gap-2.5">Ask the pharmacy <ArrowRight size={15} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="prescriptions" className="section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[32px] bg-pharmacy-900 shadow-soft">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className="p-8 text-white sm:p-12 lg:p-16">
                  <span className="eyebrow border-white/15 bg-white/10 text-white">Prescription services</span>
                  <h2 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-[-0.035em] sm:text-5xl">Need help with a prescription?</h2>
                  <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
                    Contact Ponteland Rd Pharmacy NHS directly for prescription-related questions, repeat-prescription queries and collection support.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a href={business.tel} className="btn-light">Contact the pharmacy <Phone size={17} /></a>
                    <a href="#contact" className="btn-outline-white">View contact details <ArrowRight size={17} /></a>
                  </div>
                </div>
                <div className="relative min-h-[300px] overflow-hidden">
                  <img src="/images/pharmacy-exterior-02.jpg" alt="Ponteland Rd Pharmacy NHS frontage" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-pharmacy-900/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vaccinations" className="section-pad bg-pharmacy-50/70">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="eyebrow">Vaccination services</span>
              <h2 className="section-title">Vaccination support, locally.</h2>
              <p className="section-copy">Available information identifies flu and COVID-19 vaccination services. Arrangements can change, so contact the pharmacy to confirm current availability and eligibility.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-pharmacy-100 bg-white p-5 shadow-card">
                  <Syringe className="text-pharmacy-700" size={24} />
                  <h3 className="mt-4 font-extrabold text-slate-900">Flu vaccination</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Ask the pharmacy about the current flu vaccination service.</p>
                </div>
                <div className="rounded-2xl border border-pharmacy-100 bg-white p-5 shadow-card">
                  <Syringe className="text-pharmacy-700" size={24} />
                  <h3 className="mt-4 font-extrabold text-slate-900">COVID-19 vaccination</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Contact the pharmacy for current arrangements and eligibility.</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[30px] shadow-soft">
              <img src="/images/pharmacy-exterior-03.jpg" alt="Ponteland Rd Pharmacy NHS entrance" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        <section id="gallery" className="section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <span className="eyebrow">The pharmacy</span>
                <h2 className="section-title">See the real place.</h2>
                <p className="section-copy">Reference photography is used throughout to keep the website grounded in the pharmacy’s real identity and surroundings.</p>
              </div>
              <span className="hidden rounded-full border border-slate-200 px-4 py-2 text-xs font-bold text-slate-500 sm:inline-flex">Click an image to enlarge</span>
            </div>
            <div className="mt-10 grid auto-rows-[180px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`gallery-item ${index === 0 ? "sm:row-span-2 lg:col-span-2" : ""} ${index === 3 ? "lg:col-span-2" : ""}`}
                  aria-label={`Enlarge ${image.label}`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <span>{image.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-card sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <span className="eyebrow">Opening hours</span>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">09:00 AM – 06:00 PM</h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">These are the general hours supplied for the website. Specific day-by-day opening hours have not been assumed.</p>
                </div>
                <a href={business.tel} className="btn-primary">Check with the pharmacy <Phone size={17} /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <span className="eyebrow">Contact & location</span>
              <h2 className="section-title">Find your local pharmacy.</h2>
              <p className="section-copy">For the latest service availability or prescription queries, contact the pharmacy directly.</p>

              <div className="mt-8 space-y-4">
                <a href={business.tel} className="contact-row">
                  <span className="contact-icon"><Phone size={20} /></span>
                  <span><span className="contact-label">Phone</span><span className="contact-value">{business.phone}</span></span>
                </a>
                <div className="contact-row">
                  <span className="contact-icon"><MapPin size={20} /></span>
                  <span><span className="contact-label">Address</span><span className="contact-value">{business.address.join(", ")}</span></span>
                </div>
                <div className="contact-row">
                  <span className="contact-icon"><Clock3 size={20} /></span>
                  <span><span className="contact-label">Opening hours</span><span className="contact-value">{business.hours}</span></span>
                </div>
              </div>

              <a
                className="btn-secondary mt-8"
                href="https://www.google.com/maps/search/?api=1&query=163-167+Ponteland+Rd,+Cowgate,+Newcastle+upon+Tyne,+NE5+3AE"
                target="_blank"
                rel="noreferrer"
              >
                Get directions <Navigation size={17} />
              </a>
            </div>

            <div className="relative min-h-[390px] overflow-hidden rounded-[30px] border border-slate-200 bg-slate-100 shadow-soft">
              <img src="/images/pharmacy-panorama.jpg" alt="Street view around Ponteland Rd Pharmacy NHS" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="max-w-md rounded-2xl border border-white/20 bg-slate-950/60 p-5 text-white backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Ponteland Rd Pharmacy NHS</p>
                  <p className="mt-2 font-semibold">163–167 Ponteland Rd, Cowgate, Newcastle upon Tyne, NE5 3AE</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=163-167+Ponteland+Rd,+Cowgate,+Newcastle+upon+Tyne,+NE5+3AE" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white hover:underline">Open in Maps <ExternalLink size={15} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-pharmacy-700 text-2xl font-light">+</span>
              <div><p className="font-extrabold">Ponteland Rd Pharmacy NHS</p><p className="text-xs text-white/50">Community Pharmacy · Cowgate</p></div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/55">A local community pharmacy serving residents and visitors in Cowgate, Newcastle upon Tyne.</p>
          </div>
          <div>
            <p className="text-sm font-bold text-white">Explore</p>
            <div className="mt-4 grid gap-2 text-sm text-white/55">
              {["About", "Services", "Prescriptions", "Vaccinations", "Gallery", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white">{item}</a>)}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-white">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-white/55">
              <a href={business.tel} className="block hover:text-white">{business.phone}</a>
              <p>{business.address[0]}<br />{business.address[1]}<br />{business.address[2]}<br />{business.address[3]}</p>
              <p>{business.hours}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <span>© {new Date().getFullYear()} Ponteland Rd Pharmacy NHS</span>
            <span>Website content should be reviewed by the pharmacy before publication.</span>
          </div>
        </div>
      </footer>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeImage.label} onClick={() => setActiveImage(null)}>
          <button type="button" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" onClick={() => setActiveImage(null)} aria-label="Close image">
            <X />
          </button>
          <div className="max-h-[88vh] max-w-6xl px-4" onClick={(e) => e.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.alt} className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl" />
            <p className="mt-3 text-center text-sm font-semibold text-white/80">{activeImage.label}</p>
          </div>
        </div>
      )}

      <a href={business.tel} className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-pharmacy-700 px-5 py-3.5 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-pharmacy-800 lg:hidden">
        <Phone size={17} /> Call pharmacy
      </a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
