"use client";

import { motion } from "framer-motion";

const contacts = [
  {
    label: "EVENT COORDINATOR",
    name: "Coordinator Name",
    role: "Event Coordinator",
    email: "coordinator@example.com",
    phone: "+91 XXXXX XXXXX",
  },
  {
    label: "FACULTY COORDINATOR",
    name: "Faculty Name",
    role: "Faculty Coordinator",
    email: "faculty@example.com",
    phone: "+91 XXXXX XXXXX",
  },
];

const quickLinks = [
  {
    title: "Registration",
    description: "Register your team for PARADOX.",
    href: "#registration",
  },
  {
    title: "Problem Statements",
    description: "Explore all 13 challenges.",
    href: "#problems",
  },
  {
    title: "Rules",
    description: "Review the mission protocol.",
    href: "#rules",
  },
  {
    title: "Timeline",
    description: "View the event schedule.",
    href: "#timeline",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-40 md:py-52"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-1/2 top-1/3 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-300/[0.035] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-cyan-300" />

            <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-cyan-300">
              Contact
            </p>
          </div>

          <h2 className="mt-8 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.82] tracking-[-0.08em]">
            NEED
            <br />

            <span className="text-white/25">
              HELP?
            </span>
          </h2>

          <p className="mt-10 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
            Questions about registration, problem statements,
            rules or the event? Reach the PARADOX organizing team.
          </p>
        </motion.div>

        {/* MAIN GRID */}

        <div className="mt-20 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">

          {/* CONTACT PEOPLE */}

          <div className="rounded-[2rem] border border-white/10 bg-[#05090d] p-7 md:p-10">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/20">
                  Official Contacts
                </p>

                <h3 className="mt-3 text-2xl font-black text-white md:text-3xl">
                  TALK TO THE TEAM
                </h3>
              </div>

              <span className="font-mono text-[9px] text-cyan-300/50">
                SUPPORT
              </span>

            </div>

            <div className="mt-10 space-y-4">

              {contacts.map((contact, index) => (

                <motion.div
                  key={contact.label}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 transition duration-300 hover:border-cyan-300/20"
                >

                  <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                    <div>

                      <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-cyan-300/60">
                        {contact.label}
                      </p>

                      <h4 className="mt-3 text-xl font-black text-white">
                        {contact.name}
                      </h4>

                      <p className="mt-1 text-xs text-white/25">
                        {contact.role}
                      </p>

                    </div>

                    <div className="space-y-2 md:text-right">

                      <a
                        href={`mailto:${contact.email}`}
                        className="block text-xs text-white/40 transition hover:text-cyan-300"
                      >
                        {contact.email}
                      </a>

                      <a
                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                        className="block font-mono text-[10px] text-white/25 transition hover:text-cyan-300"
                      >
                        {contact.phone}
                      </a>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

          {/* LOCATION */}

          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-cyan-300/[0.025] p-7 md:p-10">

            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-60 w-60 rounded-full bg-cyan-300/[0.06] blur-[80px]" />

            <div className="relative">

              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cyan-300/70">
                Event Location
              </p>

              <h3 className="mt-5 text-3xl font-black text-white md:text-4xl">
                KPR COLLEGE
              </h3>

              <p className="mt-3 text-sm text-white/35">
                KPR College of Arts, Science and Research
              </p>

              <div className="mt-8 border-t border-white/10 pt-7">

                <p className="text-[8px] uppercase tracking-[0.3em] text-white/20">
                  Location
                </p>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Coimbatore, Tamil Nadu, India
                </p>

              </div>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/50 transition hover:border-cyan-300/30 hover:text-cyan-300"
              >
                Get Directions
                <span>↗</span>
              </a>

            </div>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className="mt-20">

          <div className="flex items-end justify-between">

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/20">
                Quick Access
              </p>

              <h3 className="mt-3 text-2xl font-black text-white md:text-3xl">
                FIND YOUR ANSWER
              </h3>
            </div>

            <span className="hidden font-mono text-[9px] text-cyan-300/40 md:block">
              NAVIGATION
            </span>

          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {quickLinks.map((link, index) => (

              <motion.a
                key={link.title}
                href={link.href}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-white/[0.07] bg-[#05090d] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20"
              >

                <div className="flex items-center justify-between">

                  <span className="font-mono text-[9px] text-cyan-300">
                    0{index + 1}
                  </span>

                  <span className="text-white/15 transition group-hover:translate-x-1 group-hover:text-cyan-300">
                    →
                  </span>

                </div>

                <h4 className="mt-8 text-sm font-black text-white">
                  {link.title}
                </h4>

                <p className="mt-3 text-[10px] leading-5 text-white/25">
                  {link.description}
                </p>

              </motion.a>

            ))}

          </div>

        </div>

        {/* SOCIAL / OFFICIAL LINKS */}

        <div className="mt-16 flex flex-col gap-5 rounded-[2rem] border border-white/[0.07] bg-[#05090d] p-7 md:flex-row md:items-center md:justify-between md:p-8">

          <div>

            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">
              Official Channels
            </p>

            <p className="mt-3 text-sm text-white/40">
              Follow the official event channels for announcements
              and updates.
            </p>

          </div>

          <div className="flex flex-wrap gap-2">

            <a
              href="#"
              className="rounded-full border border-white/10 px-4 py-2 font-mono text-[8px] uppercase tracking-[0.2em] text-white/35 transition hover:border-cyan-300/30 hover:text-cyan-300"
            >
              Instagram
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 px-4 py-2 font-mono text-[8px] uppercase tracking-[0.2em] text-white/35 transition hover:border-cyan-300/30 hover:text-cyan-300"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 px-4 py-2 font-mono text-[8px] uppercase tracking-[0.2em] text-white/35 transition hover:border-cyan-300/30 hover:text-cyan-300"
            >
              Website
            </a>

          </div>

        </div>

        {/* FINAL CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-24 text-center"
        >

          <p className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/15">
            PARADOX / DATAKTHON
          </p>

          <h3 className="mt-6 text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
            HAVE A QUESTION?
          </h3>

          <a
            href="mailto:organizer@example.com"
            className="mt-8 inline-flex items-center gap-4 rounded-full border border-cyan-300/30 bg-cyan-300 px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:scale-[1.03] hover:bg-white"
          >
            CONTACT ORGANIZERS
            <span>→</span>
          </a>

        </motion.div>

        {/* NOTE */}

        <div className="mt-10 flex gap-3">

          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />

          <p className="text-xs leading-6 text-white/20">
            Replace placeholder contact names, email addresses,
            phone numbers, location details, map URL and social
            links with the official event information.
          </p>

        </div>

      </div>
    </section>
  );
}