import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const technicalGroups = [
  "TypeScript, JavaScript, Python, Java, C++, Go, SQL",
  "React, Next.js, Tailwind CSS, ShadCN UI, Material-UI",
  "NestJS, Prisma, TypeORM, PostgreSQL, MySQL, Supabase",
  "Docker, Azure DevOps, Metabase",
  "Git, GitHub, UiPath",
  "Spanish (Native), English (B2)",
];

const softSkills = [
  "Problem-solving & analytical thinking",
  "Team collaboration",
  "Fast learning and adaptability",
  "Strong written communication",
  "Time management and organization",
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[rgba(173,110,202,0.82)]">
            Skills
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technical and professional strengths
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
            A focused overview of the tools I use and the working style I bring
            to collaborative software projects.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="relative overflow-hidden border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(10,14,23,0.92))] text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(173,110,202,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_38%)]" />
            <CardHeader className="relative pb-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[rgba(173,110,202,0.82)]">
                Technical Skills
              </p>
              <CardTitle className="text-3xl font-semibold tracking-tight text-white">
                Full-stack tools and delivery workflow
              </CardTitle>
              <CardDescription className="max-w-xl text-base leading-7 text-zinc-300">
                I work across both frontend and backend development, building
                web applications that are responsive, functional, and secure.
                From creating interfaces with React and Next.js to managing
                databases, APIs, and authentication, I enjoy turning ideas into
                complete solutions. I also have experience with automation
                tools and collaborative development workflows.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-3">
              {technicalGroups.map((group) => (
                <div
                  key={group}
                  className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm leading-6 text-zinc-100 backdrop-blur-sm sm:text-[15px]"
                >
                  {group}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-white/10 bg-[linear-gradient(180deg,rgba(18,18,18,0.94),rgba(12,17,22,0.92))] text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(173,110,202,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(120,119,198,0.16),transparent_38%)]" />
            <CardHeader className="relative pb-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[rgba(173,110,202,0.82)]">
                Soft Skills
              </p>
              <CardTitle className="text-3xl font-semibold tracking-tight text-white">
                Personal attributes that shape my work
              </CardTitle>
              <CardDescription className="max-w-xl text-base leading-7 text-zinc-300">
                I approach my work with a strong problem-solving mindset, a
                willingness to learn, and a collaborative attitude. I value
                clear communication, adaptability, and staying organized to
                work effectively in team environments and deliver high-quality
                results.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-3">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm font-medium text-zinc-100 backdrop-blur-sm sm:text-[15px]"
                >
                  <span>{skill}</span>
                  <span className="h-2 w-2 rounded-full bg-[rgb(173,110,202)] shadow-[0_0_16px_rgba(173,110,202,0.75)]" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
