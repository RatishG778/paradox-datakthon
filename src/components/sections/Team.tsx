"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    id: "01",
    name: "Organizer Name",
    role: "Event Coordinator",
    department: "Department / Institution",
    image: "/team/organizer-1.jpg",
  },
  {
    id: "02",
    name: "Coordinator Name",
    role: "Faculty Coordinator",
    department: "Department / Institution",
    image: "/team/organizer-2.jpg",
  },
  {
    id: "03",
    name: "Technical Lead",
    role: "Technical Coordinator",
    department: "Department / Institution",
    image: "/team/organizer-3.jpg",
  },
  {
    id: "04",
    name: "Student Lead",
    role: "Student Coordinator",
    department: "Department / Institution",
    image: "/team/organizer-4.jpg",
  },
];

export default function Team() {
  return (
    <section
      id="team"
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

        <div className="absolute right-[-150px] top-1/3 h-[450px] w-[450px] rounded-full bg-cyan-300/[0.025] blur-[130px]" />

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
              The People
            </p>

          </div>

          <h2 className="mt-8 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.82] tracking-[-0.08em]">

            BEHIND
            <br />

            <span className="text-white/25">
              THE CHALLENGE.
            </span>

          </h2>

          <p className="mt-10 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
            PARADOX is powered by the people who design the
            challenge, guide the participants and make the
            experience possible.
          </p>

        </motion.div>

        {/* TEAM GRID */}

        <div className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {team.map((member, index) => (

            <motion.article
              key={member.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >

              {/* PHOTO */}

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#05090d]">

                {/* Placeholder */}

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/10 bg-cyan-300/[0.025]">

                    <span className="font-mono text-2xl text-cyan-300/30">
                      {member.id}
                    </span>

                  </div>

                </div>

                {/* IMAGE */}

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="relative z-10 object-cover opacity-0 transition duration-700 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                {/* OVERLAY */}

                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black via-black/10 to-transparent opacity-70" />

                {/* NUMBER */}

                <div className="absolute right-5 top-5 z-30 font-mono text-[9px] text-white/25">
                  {member.id}
                </div>

                {/* ROLE */}

                <div className="absolute bottom-5 left-5 right-5 z-30">

                  <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-cyan-300/70">
                    {member.role}
                  </p>

                  <h3 className="mt-2 text-xl font-black tracking-tight text-white">
                    {member.name}
                  </h3>

                </div>

              </div>

              {/* INFO */}

              <div className="px-2 pt-5">

                <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                  {member.department}
                </p>

              </div>

            </motion.article>

          ))}

        </div>

        {/* ORGANIZATION MESSAGE */}

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
            delay: 0.2,
          }}
          className="mt-16 grid gap-5 lg:grid-cols-[1fr_1fr]"
        >

          <div className="rounded-[2rem] border border-white/10 bg-[#05090d] p-8 md:p-10">

            <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cyan-300">
              Our Mission
            </p>

            <h3 className="mt-5 text-3xl font-black tracking-tight text-white md:text-4xl">
              BUILD. ANALYSE.
              <br />
              CREATE IMPACT.
            </h3>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/35">
              We created PARADOX to give students a platform
              where data is not just analysed, but transformed
              into ideas capable of addressing meaningful
              real-world challenges.
            </p>

          </div>

          <div className="rounded-[2rem] border border-cyan-300/10 bg-cyan-300/[0.025] p-8 md:p-10">

            <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cyan-300/70">
              Collaboration
            </p>

            <h3 className="mt-5 text-3xl font-black tracking-tight text-white md:text-4xl">
              ONE CHALLENGE.
              <br />
              MANY MINDS.
            </h3>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/35">
              Participants, mentors, coordinators and judges
              come together to create an environment where
              analytical thinking and innovation can grow.
            </p>

          </div>

        </motion.div>

        {/* NOTE */}

        <div className="mt-10 flex gap-3">

          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />

          <p className="text-xs leading-6 text-white/20">
            Replace the placeholder names, roles, departments and
            photographs with the official event team information.
          </p>

        </div>

      </div>
    </section>
  );
}