import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mb-10 flex items-center gap-3">
        <GraduationCap className="h-8 w-8 text-[rgb(173,110,202)]" />
        <h2 className="text-4xl font-bold text-white">Education</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-[28px] border border-[rgba(173,110,202,0.25)] bg-[rgba(173,110,202,0.08)] p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(173,110,202,0.42)] hover:bg-[rgba(173,110,202,0.12)] hover:shadow-[0_18px_45px_rgba(173,110,202,0.12)]">
          <h3 className="text-2xl font-semibold text-white">
            B.Sc. in Systems Engineering
          </h3>
          <p className="mt-2 text-zinc-400">2023 - 2027</p>
          <p className="mt-6 text-zinc-300">
            Universidad Nacional de Costa Rica (UNA)
          </p>
          <p className="mt-4 leading-7 text-zinc-400">
            GPA: 9.41 / 10.0. Focused on software development, databases, data
            structures, operating systems, and computer networks.
          </p>
        </article>

        <article className="rounded-[28px] border border-white/10 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(173,110,202,0.28)] hover:bg-white/[0.03] hover:shadow-[0_18px_45px_rgba(173,110,202,0.08)]">
          <h3 className="text-2xl font-semibold text-white">
            Diploma in Software Application Programming
          </h3>
          <p className="mt-2 text-zinc-400">2023 - 2025</p>
          <p className="mt-6 text-zinc-300">
            Universidad Nacional de Costa Rica (UNA)
          </p>
          <p className="mt-4 leading-7 text-zinc-400">
            Practical training in application development and programming
            foundations. Additional certifications include UiPath RPA
            Automation and Introduction to Data Science by Cisco.
          </p>
        </article>
      </div>
    </section>
  );
}
