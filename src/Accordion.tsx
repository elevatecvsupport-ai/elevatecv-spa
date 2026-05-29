import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Zap,
  FileCheck2,
  Globe2,
  LifeBuoy,
  ArrowRight,
  Check,
  Star,
  Sparkles,
  Send,
  Mail,
  ChevronDown,
  Search,
  Wand2,
  Package,
  RotateCw,
  Lock,
} from "lucide-react";
import { useReveal, useMouseParallax } from "../hooks/use-landing";
import { ResumeMockup } from "../components/ResumeMockup";
import { Accordion } from "../components/Accordion";

export default function Home() {
  useReveal();
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground bg-ambient">
      <BackgroundOrbs />
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <Pricing />
      <BeforeAfter />
      <Testimonials />
      <Process />
      <FAQ />
      <FinalCTA />
      <Terms />
      <Footer />
    </main>
  );
}

function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full animate-orb"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.35), transparent 60%)", filter: "blur(60px)" }} />
      <div className="absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full animate-orb"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.28), transparent 60%)", filter: "blur(70px)", animationDelay: "4s" }} />
      <div className="absolute -bottom-32 left-[-10%] h-[460px] w-[460px] rounded-full animate-orb"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.25), transparent 60%)", filter: "blur(70px)", animationDelay: "8s" }} />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Services", "#services"],
    ["Pricing", "#pricing"],
    ["Process", "#process"],
    ["FAQ", "#faq"],
  ] as const;
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-lg">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-base font-semibold tracking-tight">ElevateCV</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {links.map(([l, h]) => (
              <a key={l} href={h} className="text-sm text-white/70 transition-colors hover:text-white">{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-shimmer hidden rounded-xl px-4 py-2 text-sm font-medium text-white sm:inline-flex">
              Request a Review
            </a>
            <button onClick={() => setOpen((v) => !v)} className="btn-ghost-glass grid h-9 w-9 place-items-center rounded-lg md:hidden" aria-label="Toggle menu">
              <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
          </div>
        </nav>
        {open && (
          <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-2 md:hidden">
            {links.map(([l, h]) => (
              <a key={l} href={h} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5">{l}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useMouseParallax(ref);
  return (
    <section ref={ref} className="relative mx-auto max-w-6xl px-4 pb-24 pt-16 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            Boutique studio · Personally reviewed within 24h
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            <span className="gradient-text">Build a Career Brand</span><br />
            <span className="text-white">Recruiters Notice</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg">
            A premium freelance personal-branding studio crafting ATS-optimized resumes, professional portfolio websites, and refined career presentation for ambitious professionals.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-shimmer group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white">
              Request Professional Review
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#services" className="btn-ghost-glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white">
              View Services
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-white/60">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                ))}
              </div>
              4.9 from 1,200+ professionals
            </div>
            <div className="hidden h-3 w-px bg-white/15 sm:block" />
            <div className="hidden sm:block">Hand-crafted · Privately reviewed</div>
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: "0.15s" }}>
          <ResumeMockup />
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { icon: ShieldCheck, label: "ATS Optimized", desc: "Parses cleanly across every major ATS." },
    { icon: Zap, label: "Fast Delivery", desc: "Most projects shipped in 24–72 hours." },
    { icon: FileCheck2, label: "Editorial Formatting", desc: "Considered typography and elegant layouts." },
    { icon: Globe2, label: "Portfolio Websites", desc: "Personal sites that convert visits." },
    { icon: LifeBuoy, label: "Personal Support", desc: "Every project handled by a real specialist." },
    { icon: Lock, label: "Private & Confidential", desc: "Your information is never shared." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <div key={it.label} className="glass lift reveal rounded-2xl p-5" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-blue-500/30 ring-1 ring-white/10">
                <it.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{it.label}</div>
                <div className="mt-1 text-sm text-white/60">{it.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { title: "Resume Analysis", price: "$9", bullets: ["ATS review", "Recruiter readability feedback", "Formatting analysis", "Improvement recommendations"] },
    { title: "Resume Rewrite", price: "$29", bullets: ["Complete ATS-optimized rewrite", "Editorial formatting", "Achievement-focused bullets"] },
    { title: "LinkedIn Optimization", price: "+$10", bullets: ["Headline optimization", "About section rewrite", "Recruiter visibility improvements"] },
    { title: "Professional Portfolio Website", price: "$29", bullets: ["Responsive personal site", "Resume integration", "Contact form", "Modern branding"] },
    {
      title: "One-Time Website Update & Maintenance",
      price: "From $19",
      suffix: " / update",
      bullets: [
        "Pay only when you need updates — no subscription",
        "Content edits, portfolio changes & new sections",
        "Bug fixes & responsiveness adjustments",
        "Design tweaks & feature additions",
        "Flexible — request support whenever needed",
      ],
    },
  ];
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading eyebrow="Services" title="A complete personal branding studio"
        subtitle="Boutique services delivered personally — choose what fits your goals, refine as your career grows." />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div key={s.title} className="glass gradient-border lift reveal group relative overflow-hidden rounded-2xl p-6" style={{ transitionDelay: `${i * 70}ms` }}>
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
              style={{ background: "radial-gradient(circle, rgba(139,92,246,0.25), transparent 70%)" }} />
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <div className="shrink-0 text-right">
                <span className="text-2xl font-semibold gradient-text">{s.price}</span>
                {s.suffix && <span className="text-sm text-white/60">{s.suffix}</span>}
              </div>
            </div>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <ul className="mt-5 space-y-2.5">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-white/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />{b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: "Starter Review", price: "$9", tag: "Try us out", features: ["Resume analysis", "ATS scorecard", "Quick recommendations"], cta: "Start with analysis", featured: false },
    { name: "Professional Rewrite", price: "$39", tag: "Most popular", features: ["ATS-optimized rewrite", "Editorial formatting", "LinkedIn headline + about", "1 revision round"], cta: "Choose Professional", featured: true },
    { name: "Personal Brand Kit", price: "$69", tag: "Full package", features: ["Everything in Professional", "Portfolio website", "Custom branding", "2 revision rounds"], cta: "Build my brand", featured: false },
    { name: "One-Time Website Update", price: "From $19", suffix: " / update", tag: "No subscription", features: ["Pay only when updates are needed", "Content, portfolio & section edits", "Bug fixes & responsiveness", "Design adjustments & new features"], cta: "Request an update", featured: false },
  ];
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading eyebrow="Pricing" title="Simple, transparent packages"
        subtitle="Honest pricing. No monthly subscriptions — website updates are billed per request, only when you need them." />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((p, i) => (
          <div key={p.name} className={`reveal lift relative rounded-2xl p-6 ${p.featured ? "glass-strong gradient-border ring-1 ring-violet-400/30" : "glass"}`}
            style={{ transitionDelay: `${i * 70}ms`, transform: p.featured ? "translateY(-8px)" : undefined }}>
            {p.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg">
                Most popular
              </div>
            )}
            <div className="text-xs font-medium uppercase tracking-wider text-violet-300">{p.tag}</div>
            <div className="mt-2 text-lg font-semibold text-white">{p.name}</div>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-semibold gradient-text">{p.price}</span>
              {p.suffix && <span className="text-sm text-white/60">{p.suffix}</span>}
            </div>
            <ul className="mt-6 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />{f}
                </li>
              ))}
            </ul>
            <a href="#contact" className={`mt-8 inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium ${p.featured ? "btn-shimmer text-white" : "btn-ghost-glass text-white"}`}>
              {p.cta}<ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading eyebrow="Before / After" title="See the difference of an optimized resume"
        subtitle="Same person. Same experience. Dramatically different recruiter response." />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <FakeResume variant="before" label="Before" name="Alex M." role="Designer looking for opportunities" score="42"
          bullets={["Worked on various design projects.", "Helped with team meetings and tasks.", "Did some user research occasionally.", "Used Figma and other tools."]} />
        <FakeResume variant="after" label="After" name="Alex Morgan" role="Senior Product Designer" score="96"
          bullets={["Led redesign that lifted activation by 38% (Q3 2024).", "Shipped design system adopted across 12 product teams.", "Drove research that cut onboarding drop-off 24%.", "Mentored 4 designers; 2 promoted within a year."]} />
      </div>
    </section>
  );
}

function FakeResume({ variant, label, name, role, score, bullets }: { variant: "before" | "after"; label: string; name: string; role: string; score: string; bullets: string[] }) {
  const isAfter = variant === "after";
  return (
    <div className={`reveal lift relative overflow-hidden rounded-3xl p-7 ${isAfter ? "glass-strong gradient-border" : "glass"}`}>
      <div className="mb-4 flex items-center justify-between">
        <span className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${isAfter ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-300" : "border border-red-400/30 bg-red-400/10 text-red-300"}`}>{label}</span>
        <div className={`text-sm font-medium ${isAfter ? "text-emerald-300" : "text-red-300"}`}>ATS {score}/100</div>
      </div>
      <div className={`text-base font-semibold ${isAfter ? "text-white" : "text-white/70"}`}>{name}</div>
      <div className="text-xs text-white/60">{role}</div>
      <div className="my-4 h-px w-full bg-white/10" />
      <ul className="space-y-2 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className={`flex gap-2 ${isAfter ? "text-white/85" : "text-white/55"}`}>
            <span className={isAfter ? "text-violet-300" : "text-white/30"}>•</span>{b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Testimonials() {
  const items = [
    { quote: "Three weeks in, my callback rate tripled. The rewrite finally made my impact feel real on the page.", name: "Priya R.", role: "CS Student → Software Engineer Intern" },
    { quote: "Honest feedback, fast turnaround, and a final document I felt genuinely proud to send.", name: "Daniel K.", role: "Product Manager, Fintech" },
    { quote: "Premium feel from start to finish. My portfolio site is exactly the polish my brand was missing.", name: "Marisol C.", role: "Senior Designer" },
    { quote: "Personal, thoughtful service. It felt like working with a true career partner, not a service desk.", name: "Jordan T.", role: "Data Analyst" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading eyebrow="Testimonials" title="Loved by ambitious professionals"
        subtitle="Students, switchers, and senior leads — same outcome: more interviews, faster." />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {items.map((t, i) => (
          <figure key={i} className="glass lift reveal rounded-2xl p-6" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-amber-300 text-amber-300" />
              ))}
            </div>
            <blockquote className="mt-4 text-base leading-relaxed text-white/85">"{t.quote}"</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-xs font-semibold text-white">{t.name[0]}</div>
              <div>
                <div className="text-sm font-medium text-white">{t.name}</div>
                <div className="text-xs text-white/55">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { icon: Send, title: "Submit Resume", desc: "Send us your current resume and target roles." },
    { icon: Search, title: "Career Review", desc: "We audit positioning, gaps, and recruiter signals." },
    { icon: Wand2, title: "ATS Optimization", desc: "Rewriting, formatting, and keyword alignment." },
    { icon: Package, title: "Delivery", desc: "Polished assets delivered in 24–72 hours." },
    { icon: RotateCw, title: "Revision Support", desc: "Iterate until it feels unmistakably you." },
  ];
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading eyebrow="Process" title="A calm, considered five-step process"
        subtitle="No back-and-forth chaos. Just clear milestones and high-craft outputs." />
      <div className="relative mt-14">
        <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px md:block"
          style={{ background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.5), rgba(96,165,250,0.5), transparent)" }} />
        <ol className="grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="relative">
                <div className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-lg ring-4 ring-background">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="glass lift mt-4 rounded-2xl p-5 text-center">
                <div className="text-xs font-semibold uppercase tracking-wider text-violet-300">Step {i + 1}</div>
                <div className="mt-1 text-sm font-semibold text-white">{s.title}</div>
                <div className="mt-2 text-xs text-white/65">{s.desc}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Is the resume ATS-friendly?", a: "Yes. Every rewrite is structured for clean ATS parsing — proper headings, semantic sections, no risky elements like tables or text-in-images." },
    { q: "How long does delivery take?", a: "Most projects are delivered within 24–72 hours. Larger packages with a portfolio website typically wrap in 5–7 days." },
    { q: "Do you provide revisions?", a: "Every paid package includes at least one revision round. The Personal Brand Kit includes two. Minor revisions are included where applicable." },
    { q: "How does payment work?", a: "Payments are discussed manually after we review your request and confirm scope. No subscriptions, no surprises — including for website updates." },
    { q: "Do you create portfolio websites?", a: "Yes. Responsive, fast, and on-brand — with resume integration and a contact form. Future updates are billed one-time per request whenever you need them, never on a recurring subscription." },
    { q: "How do website updates and maintenance work?", a: "We offer a flexible one-time update service. Whenever you need a content change, design tweak, bug fix, responsiveness adjustment, portfolio update, or a new section, simply request it and pay only for that update. There is no monthly subscription." },
  ];
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24">
      <SectionHeading eyebrow="FAQ" title="Questions, answered" subtitle="Still unsure? Reach out and we'll happily walk you through it." />
      <div className="reveal mt-12">
        <Accordion items={faqs} />
      </div>
    </section>
  );
}

function FinalCTA() {
  useEffect(() => {
    const SRC = "https://tally.so/widgets/embed.js";
    const load = () => {
      // @ts-expect-error - Tally global
      if (typeof window.Tally !== "undefined") window.Tally.loadEmbeds();
    };
    if (document.querySelector(`script[src="${SRC}"]`)) { load(); return; }
    const s = document.createElement("script");
    s.src = SRC; s.onload = load; s.onerror = load;
    document.body.appendChild(s);
  }, []);
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-24 scroll-mt-24">
      <SectionHeading eyebrow="Work With Us" title="Professional Career Branding Request"
        subtitle="Submit your resume and details below to receive ATS-focused resume optimization and professional branding support designed to improve recruiter visibility and interview opportunities." />
      <div className="reveal mt-6 text-center text-sm text-white/60">
        Prefer email? Reach our studio at{" "}
        <a href="mailto:elevatecv.support@gmail.com" className="font-medium text-violet-300 hover:text-white">elevatecv.support@gmail.com</a>
      </div>
      <div className="reveal mt-10">
        <div className="glass-strong gradient-border relative overflow-hidden rounded-3xl p-2 sm:p-4">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-0"
            style={{ background: "radial-gradient(ellipse at 20% 0%, rgba(139,92,246,0.28), transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(59,130,246,0.24), transparent 60%)" }} />
          <div className="relative z-10 rounded-2xl bg-white/[0.03] p-3 sm:p-8 tally-frame">
            <iframe
              data-tally-src="https://tally.so/embed/0Qad7A?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy" width="100%" height={900}
              frameBorder={0} marginHeight={0} marginWidth={0}
              title="Professional Career Branding Request" className="w-full"
            />
          </div>
        </div>
        <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-white/55">
          <Lock className="h-3.5 w-3.5 text-violet-300" />
          Your information and uploaded files remain completely private and secure.
        </p>
        <p className="mt-2 text-center text-xs text-white/40">
          Replies typically arrive within 12–24 hours regarding the next steps.
        </p>
      </div>
    </section>
  );
}

function Terms() {
  const terms = [
    "All submitted resumes and information remain private and confidential.",
    "Services are delivered digitally.",
    "Delivery timelines may vary depending on workload and project complexity.",
    "Clients are responsible for reviewing submitted information for accuracy.",
    "Minor revisions are included where applicable.",
    "Website updates and maintenance are billed one-time per request — no monthly subscription is required.",
    "No guarantees of interview selection or job placement.",
    "Payments are discussed manually after project review and approval.",
    "ElevateCV reserves the right to decline projects outside the service scope.",
  ];
  return (
    <section id="terms" className="mx-auto max-w-4xl px-4 py-24 scroll-mt-24">
      <SectionHeading eyebrow="Terms & Conditions" title="Working together, clearly"
        subtitle="A short, transparent overview of how our studio engagements work." />
      <div className="reveal mt-10">
        <ul className="glass gradient-border space-y-3 rounded-3xl p-6 sm:p-8">
          {terms.map((t, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-white/75">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-12">
      <div className="glass rounded-3xl p-8 sm:p-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-lg font-semibold tracking-tight">ElevateCV</span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/60">
            A premium freelance personal-branding studio for ambitious professionals.
          </p>
          <a href="mailto:elevatecv.support@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:border-violet-400/40 hover:text-white">
            <Mail className="h-4 w-4 text-violet-300" />
            <span>elevatecv.support@gmail.com</span>
          </a>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <div>© {new Date().getFullYear()} ElevateCV Studio. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#terms" className="hover:text-white/70">Terms</a>
            <a href="#contact" className="hover:text-white/70">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-violet-300">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-base text-white/65">{subtitle}</p>}
    </div>
  );
}
