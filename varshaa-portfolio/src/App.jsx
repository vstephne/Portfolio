import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Award, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { profile } from "./data";

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent mb-6"
        >
          {title}
        </motion.h2>
        <div className="grid gap-6">{children}</div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/80 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight">Varshaa Shree</a>
        <nav className="hidden sm:flex gap-6 text-sm">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#experience" className="hover:text-blue-400">Experience</a>
          <a href="#education" className="hover:text-blue-400">Education</a>
          <a href="#awards" className="hover:text-blue-400">Awards</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </nav>
        <a href={profile.linkedin} target="_blank" className="text-sm inline-flex items-center gap-1 rounded-full px-3 py-1.5 bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:opacity-90 transition">
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="relative gradient border-b border-white/10 animate-pulse-slow">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-xl text-slate-300"
        >
          {profile.title}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-slate-300"
        >
          <span className="badge"><MapPin className="h-3.5 w-3.5 mr-1" /> {profile.location}</span>
          <a href={`mailto:${profile.email}`} className="badge hover:border-blue-400"><Mail className="h-3.5 w-3.5 mr-1" /> {profile.email}</a>
          <a href={profile.linkedin} target="_blank" className="badge hover:border-pink-400"><Linkedin className="h-3.5 w-3.5 mr-1" /> LinkedIn</a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 max-w-3xl mx-auto text-slate-300"
        >
          {profile.summary}
        </motion.p>
      </div>
    </div>
  );
}

function Skills() {
  const groups = [
    ["Programming", profile.skills.programming],
    ["ML / AI", profile.skills.ml],
    ["LLM Models", profile.skills.llmModels],
    ["Cloud", profile.skills.cloud],
    ["Containers", profile.skills.containerization],
    ["Databases", profile.skills.databases],
    ["Deployment", profile.skills.deployment],
    ["Tools", profile.skills.tools]
  ];
  return (
    <Section id="skills" title="Skills">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map(([label, items]) => (
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            key={label}
            className="card p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="h-5 w-5 text-blue-400" /><h3 className="font-medium">{label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => <span key={s} className="badge hover:border-blue-400">{s}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative border-s border-white/10 ml-4">
        {profile.experience.map((exp, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
              <Briefcase className="h-3.5 w-3.5" />
            </span>
            <div className="card p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{exp.role} · {exp.company}</h3>
                <span className="text-sm text-slate-400">{exp.period}</span>
              </div>
              <ul className="list-disc ml-5 mt-3 space-y-2 text-slate-300">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              {exp.tech?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tech.map((t) => <span key={t} className="badge hover:border-pink-400">{t}</span>)}
                </div>
              ) : null}
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid md:grid-cols-2 gap-6">
        {profile.education.map((e, i) => (
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="card p-5"
            key={i}
          >
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-pink-400" />
              <h3 className="font-medium">{e.school}</h3>
            </div>
            <p className="mt-2 text-slate-300">{e.degree}</p>
            <p className="text-sm text-slate-400">{e.period}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Awards() {
  return (
    <Section id="awards" title="Certifications & Awards">
      <div className="grid md:grid-cols-2 gap-6">
        {profile.certifications.map((c, i) => (
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="card p-5 flex items-center gap-3"
            key={`c-${i}`}
          >
            <Award className="h-5 w-5 text-blue-400" /><span>{c}</span>
          </motion.div>
        ))}
        {profile.awards.map((a, i) => (
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="card p-5 flex items-center gap-3"
            key={`a-${i}`}
          >
            <Award className="h-5 w-5 text-pink-400" /><span>{a}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-3">
          <a href={`mailto:${profile.email}`} className="badge hover:border-blue-400"><Mail className="h-3.5 w-3.5 mr-1" /> Email</a>
          <a href={profile.linkedin} target="_blank" className="badge hover:border-pink-400"><Linkedin className="h-3.5 w-3.5 mr-1" /> LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <Section id="about" title="About">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-6 text-slate-300"
          >
            {profile.summary}
          </motion.div>
        </Section>
        <Skills />
        <Experience />
        <Education />
        <Awards />
        <Section id="contact" title="Contact">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="card p-6 flex flex-wrap items-center gap-3"
          >
            <Mail className="h-5 w-5 text-blue-400" />
            <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a>
            <Linkedin className="h-5 w-5 text-pink-400 ml-4" />
            <a href={profile.linkedin} target="_blank" className="underline">LinkedIn</a>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
