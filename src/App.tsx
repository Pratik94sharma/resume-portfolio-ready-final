import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { resumeData } from "./data/resumeData";
import { SectionTitle } from "./components/SectionTitle";
import { FloatingBackdrop } from "./components/FloatingBackdrop";

type NavSection = {
  id: string;
  label: string;
};

const navSections: NavSection[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "highlights", label: "Highlights" },
  { id: "contact", label: "Contact" }
];

const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 }
};

function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -52% 0px", threshold: 0.01 }
    );

    navSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const topContactLinks = useMemo(() => resumeData.contactLinks.slice(0, 3), []);

  return (
    <div className="font-body text-slate-900">
      <FloatingBackdrop />

      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/70 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#hero" className="font-heading text-xl font-semibold tracking-wide">
            Pratik Sharma
          </a>
          <nav className="hidden gap-2 md:flex">
            {navSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                  activeSection === section.id
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-white hover:text-slate-900"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
        <nav className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 pb-3 md:hidden">
          {navSections.map((section) => (
            <a
              key={`mobile-${section.id}`}
              href={`#${section.id}`}
              className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] ${
                activeSection === section.id
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-700"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-20 px-4 pb-20 pt-10 md:space-y-28 md:px-8 md:pt-16">
        <section id="hero" className="scroll-mt-24">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.75, ease: [0.21, 1, 0.33, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-7 shadow-glass md:p-12"
          >
            <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(15,88,117,0.08),rgba(255,255,255,0)_45%,rgba(242,132,76,0.12))]" />
            <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <p className="mb-4 inline-flex items-center rounded-full border border-teal-300/70 bg-teal-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                  Resume Portfolio
                </p>
                <h1 className="font-heading text-4xl font-semibold leading-tight md:text-6xl">
                  {resumeData.profile.name}
                </h1>
                <p className="mt-3 text-lg font-semibold text-teal-700 md:text-2xl">
                  {resumeData.profile.role}
                </p>
                <p className="mt-4 max-w-2xl text-base text-slate-700 md:text-lg">
                  {resumeData.profile.heroIntro}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a className="button-primary" href="mailto:sharmapratik151994@gmail.com">
                    Email Me
                  </a>
                  <a
                    className="button-secondary"
                    href="https://www.linkedin.com/in/pratik-sharma-b91b5925a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a className="button-secondary" href="/Pratik-Sharma-Resume.pdf" target="_blank" rel="noreferrer">
                    View PDF
                  </a>
                </div>
              </div>

              <div className="grid gap-3">
                {topContactLinks.map((item) => (
                  <a key={item.label} href={item.href} className="glass-tile">
                    <p className="text-xs font-bold uppercase tracking-[0.17em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-900 md:text-base">{item.value}</p>
                  </a>
                ))}
                <div className="glass-tile">
                  <p className="text-xs font-bold uppercase tracking-[0.17em] text-slate-500">Location</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900 md:text-base">
                    {resumeData.profile.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="scroll-mt-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="About"
            title="Profile Summary"
            subtitle="A concise overview based on the resume PDF content."
          />
          <div className="rounded-3xl border border-white/80 bg-white/75 p-6 shadow-glass md:p-10">
            <p className="text-base leading-8 text-slate-700 md:text-lg">{resumeData.profile.summary}</p>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="scroll-mt-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Skills"
            title="Tech Stack"
            subtitle="Core tools and languages used in projects and professional work."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {resumeData.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-glass"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{skill.category}</p>
                <p className="mt-3 font-heading text-2xl">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="scroll-mt-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Experience"
            title="Professional Journey"
            subtitle="A timeline of teaching, development, and ERP-focused contribution."
          />
          <div className="relative space-y-6 before:absolute before:left-4 before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-slate-300 md:before:left-6">
            {resumeData.experience.map((job) => (
              <article
                key={`${job.title}-${job.organization}`}
                className="relative ml-10 rounded-3xl border border-white/80 bg-white/80 p-6 shadow-glass md:ml-14"
              >
                <span className="absolute -left-8 top-7 h-3 w-3 rounded-full bg-teal-500 ring-4 ring-teal-100 md:-left-10" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{job.period}</p>
                <h3 className="mt-2 font-heading text-2xl">{job.title}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  {job.organization} | {job.location}
                </p>
                <p className="mt-4 text-slate-700">{job.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="scroll-mt-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Projects"
            title="Featured Work"
            subtitle="Academic and practical projects captured from the resume."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {resumeData.projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-3xl border border-white/80 bg-white/80 p-7 shadow-glass transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <h3 className="font-heading text-2xl">{project.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-slate-700">{project.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="education"
          className="scroll-mt-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle eyebrow="Education" title="Academic Background" />
          <div className="grid gap-4 md:grid-cols-2">
            {resumeData.education.map((edu) => (
              <article key={edu.degree} className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-glass">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{edu.period}</p>
                <h3 className="mt-2 font-heading text-2xl">{edu.degree}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  {edu.institution} | {edu.location}
                </p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="highlights"
          className="scroll-mt-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Highlights"
            title="Achievements and Leadership"
            subtitle="Notable contests, roles, and organizational responsibilities."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-glass">
              <h3 className="font-heading text-2xl">Achievements</h3>
              <ul className="mt-4 space-y-4">
                {resumeData.achievements.map((item) => (
                  <li key={item.title} className="rounded-2xl bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-glass">
              <h3 className="font-heading text-2xl">Leadership</h3>
              <ul className="mt-4 space-y-4">
                {resumeData.leadership.map((item) => (
                  <li key={item.title} className="rounded-2xl bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="scroll-mt-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle eyebrow="Contact" title="Let's Connect" />
          <div className="rounded-3xl border border-white/80 bg-white/80 p-7 shadow-glass md:p-10">
            <p className="max-w-3xl text-slate-700">
              Available for web development and Python opportunities. You can connect directly using the links below.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {resumeData.contactLinks.map((item) => (
                <a key={item.label} href={item.href} className="glass-tile">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{item.value}</p>
                </a>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/70 bg-white/70 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-4 text-sm text-slate-600 md:flex-row md:items-center md:px-8">
          <p>Built with React, Tailwind CSS, and Framer Motion.</p>
          <a className="font-semibold text-teal-700 hover:text-teal-800" href="/Pratik-Sharma-Resume.pdf" target="_blank" rel="noreferrer">
            Download Resume PDF
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
