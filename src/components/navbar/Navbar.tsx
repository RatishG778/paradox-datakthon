"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Problems", id: "problems" },
  { label: "Rules", id: "rules" },
  { label: "Prizes", id: "prizes" },
  { label: "Timeline", id: "timeline" },
  { label: "Team", id: "team" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] =
    useState("home");

  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {
    const sections = [
      "home",
      "problems",
      "rules",
      "prizes",
      "timeline",
      "team",
      "registration",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;

      let current = "home";

      for (const id of sections) {
        const element =
          document.getElementById(id);

        if (!element) continue;

        if (
          scrollPosition >= element.offsetTop
        ) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollTo = (id: string) => {
    const element =
      document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="fixed left-0 right-0 top-0 z-[100] px-4 pt-4 md:px-6"
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between rounded-full border border-white/10 bg-[#020609]/70 px-4 py-3 shadow-2xl backdrop-blur-xl md:px-5">

          {/* LOGO */}

          <button
            onClick={() =>
              scrollTo("home")
            }
            className="group flex items-center gap-3"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/[0.05]">

              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_#5ee7ff]" />

            </span>

            <span className="text-sm font-black tracking-[-0.03em] text-white">
              PARADOX
              <span className="text-cyan-300">
                .
              </span>
            </span>

          </button>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-1 lg:flex">

            {links.map((link) => {

              const active =
                activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() =>
                    scrollTo(link.id)
                  }
                  className={`relative rounded-full px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] transition ${
                    active
                      ? "text-cyan-300"
                      : "text-white/35 hover:text-white"
                  }`}
                >

                  {link.label}

                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_10px_#5ee7ff]"
                    />
                  )}

                </button>
              );
            })}

          </nav>

          {/* REGISTER */}

          <button
            onClick={() =>
              scrollTo("registration")
            }
            className="hidden rounded-full bg-cyan-300 px-5 py-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-black transition hover:scale-105 hover:bg-white md:block"
          >
            Register →
          </button>

          {/* MOBILE MENU */}

          <button
            onClick={() =>
              setMenuOpen((value) => !value)
            }
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 lg:hidden"
            aria-label="Toggle navigation"
          >

            <div className="space-y-1.5">

              <span
                className={`block h-px w-4 bg-white transition ${
                  menuOpen
                    ? "translate-y-[3px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`block h-px w-4 bg-white transition ${
                  menuOpen
                    ? "-rotate-45"
                    : ""
                }`}
              />

            </div>

          </button>

        </div>

        {/* MOBILE NAV */}

        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mx-auto mt-2 max-w-[1500px] rounded-[2rem] border border-white/10 bg-[#020609]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >

            <div className="grid gap-1">

              {links.map((link) => {

                const active =
                  activeSection === link.id;

                return (
                  <button
                    key={link.id}
                    onClick={() =>
                      scrollTo(link.id)
                    }
                    className={`flex items-center justify-between rounded-xl px-4 py-4 text-left text-[10px] font-bold uppercase tracking-[0.25em] transition ${
                      active
                        ? "bg-cyan-300/[0.06] text-cyan-300"
                        : "text-white/40 hover:bg-white/[0.03] hover:text-white"
                    }`}
                  >

                    {link.label}

                    <span>→</span>

                  </button>
                );
              })}

              <button
                onClick={() =>
                  scrollTo("registration")
                }
                className="mt-2 rounded-xl bg-cyan-300 px-4 py-4 text-[10px] font-black uppercase tracking-[0.25em] text-black"
              >
                Register Your Team →
              </button>

            </div>

          </motion.div>
        )}

      </motion.header>
    </>
  );
}