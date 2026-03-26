import Image from "next/image";

const orbitSkills = [
  {
    name: "React",
    icon: "/devicons/react-original.svg",
    size: "h-18 w-18 sm:h-22 sm:w-22 lg:h-24 lg:w-24",
    position: "left-[6%] top-[6%] lg:left-[8%] lg:top-[8%]",
    motion: "animate-[skills-float-a_8s_ease-in-out_infinite]",
  },
  {
    name: "JavaScript",
    icon: "/devicons/javascript-original.svg",
    size: "h-16 w-16 sm:h-20 sm:w-20 lg:h-22 lg:w-22",
    position: "left-[43%] top-[4%] lg:left-[44%] lg:top-[5%]",
    motion: "animate-[skills-float-b_9s_ease-in-out_infinite]",
  },
  {
    name: "Next.js",
    icon: "/devicons/nextjs-original.svg",
    size: "h-16 w-16 sm:h-20 sm:w-20 lg:h-22 lg:w-22",
    position: "right-[12%] top-[23%] lg:right-[13%] lg:top-[22%]",
    motion: "animate-[skills-float-c_10s_ease-in-out_infinite]",
  },
  {
    name: "TypeScript",
    icon: "/devicons/typescript-original.svg",
    size: "h-18 w-18 sm:h-22 sm:w-22 lg:h-24 lg:w-24",
    position: "left-[37%] top-[42%] lg:left-[38%] lg:top-[43%]",
    motion: "animate-[skills-float-b_8.5s_ease-in-out_infinite]",
  },
  {
    name: "Tailwind CSS",
    icon: "/devicons/tailwindcss-original.svg",
    size: "h-16 w-16 sm:h-20 sm:w-20 lg:h-22 lg:w-22",
    position: "left-[10%] bottom-[14%] lg:left-[12%] lg:bottom-[13%]",
    motion: "animate-[skills-float-c_9.5s_ease-in-out_infinite]",
  },
  {
    name: "GitHub",
    icon: "/devicons/github-original.svg",
    size: "h-15 w-15 sm:h-18 sm:w-18 lg:h-20 lg:w-20",
    position: "left-[44%] bottom-[5%] lg:left-[45%] lg:bottom-[6%]",
    motion: "animate-[skills-float-a_11s_ease-in-out_infinite]",
  },
  {
    name: "Python",
    icon: "/devicons/python-original.svg",
    size: "h-16 w-16 sm:h-20 sm:w-20 lg:h-22 lg:w-22",
    position: "right-[9%] bottom-[24%] lg:right-[10%] lg:bottom-[23%]",
    motion: "animate-[skills-float-b_10.5s_ease-in-out_infinite]",
  },
];

const supportingSkills = [
  { name: "Java", icon: "/devicons/java-original.svg" },
  { name: "SQL", icon: null },
  { name: "Git", icon: "/devicons/git-original.svg" },
  { name: "HTML", icon: "/devicons/html5-original.svg" },
  { name: "CSS", icon: "/devicons/css3-original.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 sm:py-28">
      <div className="skills-stars pointer-events-none absolute inset-0 opacity-70" />
      <div className="skills-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.16),transparent_60%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14">
        <div className="max-w-2xl animate-[skills-rise_700ms_ease-out]">
          <p className="mb-3 text-sm uppercase tracking-[0.32em] text-emerald-300/70">
            Core Stack
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Knowledge
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
            I&apos;m always learning.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#070312] px-5 py-8 shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:px-8 lg:px-10 lg:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_18%_18%,rgba(96,165,250,0.12),transparent_20%),radial-gradient(circle_at_84%_16%,rgba(99,102,241,0.14),transparent_22%),radial-gradient(circle_at_78%_80%,rgba(74,222,128,0.14),transparent_24%)]" />

          <div className="relative mx-auto hidden aspect-[1.15/1] w-full max-w-[720px] lg:block">
            <div className="skills-grid pointer-events-none absolute inset-0 opacity-25" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[60%] -translate-x-1/2 -translate-y-1/2 rotate-[37deg] bg-white/10" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] bg-white/8" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_30px_rgba(110,231,183,0.9)]" />

            {orbitSkills.map((skill) => (
              <div
                key={skill.name}
                className={`absolute ${skill.position} ${skill.motion}`}
              >
                <div className="group flex h-28 w-28 items-center justify-center rounded-[1.6rem] border border-white/12 bg-white/6 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-300/45 hover:bg-white/10 hover:shadow-[0_18px_60px_rgba(16,185,129,0.16)]">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={96}
                    height={96}
                    className={`${skill.size} object-contain drop-shadow-[0_12px_28px_rgba(255,255,255,0.16)] transition duration-300 group-hover:scale-105`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:hidden">
            {orbitSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-4 rounded-[1.4rem] border border-white/12 bg-white/6 px-4 py-4 backdrop-blur-xl transition duration-300 hover:border-emerald-300/40 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/6">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={56}
                    height={56}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">
                    Skill
                  </p>
                  <p className="mt-1 text-base font-medium text-white">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-8 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
              Also working with
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {supportingSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-200 transition duration-300 hover:border-emerald-300/35 hover:text-white"
                >
                  {skill.icon ? (
                    <Image
                      src={skill.icon}
                      alt=""
                      aria-hidden="true"
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  ) : (
                    <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-white/12 px-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
                      DB
                    </span>
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
