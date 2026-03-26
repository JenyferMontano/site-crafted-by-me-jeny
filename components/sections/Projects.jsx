"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, CircleDot } from "lucide-react";

const techIcons = {
  "Next.js": "/devicons/nextjs-original.svg",
  React: "/devicons/react-original.svg",
  TypeScript: "/devicons/typescript-original.svg",
  "Tailwind CSS": "/devicons/tailwindcss-original.svg",
  "ShadCN UI": null,
  Prisma: "/devicons/prisma-original.svg",
  Supabase: "/devicons/supabase-original.svg",
  "API Routes": null,
  Go: "/devicons/go-original.svg",
  Angular: "/devicons/angularjs-original.svg",
  "REST API": null,
  "Microsoft SQL Server": null,
  "Azure SQL Database": null,
  Java: "/devicons/java-original.svg",
  JSF: null,
  PrimeFaces: null,
  MySQL: "/devicons/mysql-original.svg",
  "HTML/CSS": "/devicons/html5-original.svg",
  Figma: "/devicons/figma-original.svg",
  "Java SE": "/devicons/java-original.svg",
  Swing: null,
  "XML DOM": null,
  Maven: null,
  "JUnit 5": null,
  "C++": "/devicons/cplusplus-original.svg",
  "Binary File Handling": null,
  "Console Application": null,
};

const projects = [
  {
    title: "CRM for External Sales",
    summary:
      "Full-stack CRM platform for internal and external sales operations, with client management, reporting, supplier workflows, and responsive dashboards.",
    details:
      "Built with a modern React and Next.js stack, this project combines frontend dashboard work, API integration, and database logic to support real operational processes. It is currently one of my strongest portfolio pieces and remains under active development.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Prisma",
      "Supabase",
      "API Routes",
    ],
    role: "Full-stack developer",
    status: "In Progress",
    github: null,
    demo: null,
    featured: true,
    images: [],
    imageLabel: "Private product",
  },
  {
    title: "Tour Reservation System",
    summary:
      "Reservation platform for hotel tour operations, centralizing bookings, billing, authentication, and access traceability in one workflow.",
    details:
      "The final architecture combines a modular Go backend, an Angular frontend, REST API consumption, and a Microsoft SQL Server database hosted in Azure. It was designed to support secure session handling, audit logging, and structured business operations.",
    stack: [
      "Go",
      "Angular",
      "REST API",
      "Microsoft SQL Server",
      "Azure SQL Database",
    ],
    role: null,
    status: "Live Demo / GitHub",
    github: "https://github.com/JenyferMontano/Sistema-de-Reservas-de-Tour-BD",
    demo: "https://sistema-de-reservas-de-tour-bd-f.onrender.com",
    featured: true,
    images: [
      "/projects/tours-reservation-login.png",
      "/projects/profile-tours-reservations.png",
      "/projects/tours-reservation-moduleReserva.png",
      "/projects/tours-reservation-invoices.png",
    ],
    imageLabel: "4 screenshots",
  },
  {
    title: "EnviosTucan Remittance System",
    summary:
      "Web-based remittance management system for requests, approvals, tracking, logistics coordination, and reporting workflows.",
    details:
      "This project supports both administrative and client-facing processes, including agent and vehicle management. I worked on the implementation while also serving as Project Lead, helping guide coordination and delivery decisions.",
    stack: ["Java", "JSF", "PrimeFaces", "MySQL", "HTML/CSS", "Figma"],
    role: "Project Lead and developer",
    status: "GitHub",
    github: "https://github.com/JenyferMontano/Sistema-de-Remesas",
    demo: null,
    featured: false,
    images: ["/projects/envios-tucan1.jpg", "/projects/envios-tucan2.jpg"],
    imageLabel: "2 screenshots",
  },
  {
    title: "Medical Appointment System",
    summary:
      "Desktop application for managing appointments, patient records, doctor records, and user administration in a university clinic setting.",
    details:
      "Developed as an academic project, it follows an MVC structure and includes XML persistence, authentication, JUnit testing, and Maven-based project management. It reflects maintainability and software engineering fundamentals more than visual complexity.",
    stack: ["Java SE", "Swing", "XML DOM", "Maven", "JUnit 5"],
    role: null,
    status: "GitHub",
    github: "https://github.com/JenyferMontano/Sistema-de-Citas-Medicas",
    demo: null,
    featured: false,
    images: ["/projects/medical-appointments.jpg"],
    imageLabel: "Project preview",
  },
  {
    title: "Veterinary Appointment System",
    summary:
      "C++ console application for managing veterinary appointments, veterinarians, and service packages with persistent file-based records.",
    details:
      "This academic project focuses on structured CRUD logic and binary file handling in a console environment. While simpler in scope, it demonstrates programming fundamentals, data persistence, and clean procedural problem solving.",
    stack: ["C++", "Binary File Handling", "Console Application"],
    role: null,
    status: "GitHub",
    github: "https://github.com/JenyferMontano/Sistema-de-Citas-de-Veterinaria",
    demo: null,
    featured: false,
    images: [],
    imageLabel: "Console application",
  },
];

function TechChip({ tech }) {
  const icon = techIcons[tech];

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-200">
      {icon ? (
        <Image
          src={icon}
          alt=""
          aria-hidden="true"
          width={16}
          height={16}
          className="h-4 w-4 object-contain"
        />
      ) : (
        <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full border border-[rgba(173,110,202,0.3)] px-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[rgb(173,110,202)]">
          {getAbbreviation(tech)}
        </span>
      )}
      <span>{tech}</span>
    </span>
  );
}

function getAbbreviation(tech) {
  return tech
    .split(/[\s/]+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 3);
}

function ProjectMedia({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasImages = project.images.length > 0;
  const hasMultipleImages = project.images.length > 1;

  if (!hasImages) {
    return (
      <div className="relative mb-5 overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(135deg,rgba(25,18,45,0.95),rgba(8,8,18,0.98))]">
        <div className="relative flex aspect-[5/4] min-h-[220px] items-end overflow-hidden p-5 sm:aspect-[16/10] sm:min-h-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(173,110,202,0.3),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(120,119,198,0.22),transparent_38%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.24em] text-[rgba(173,110,202,0.82)]">
              {project.imageLabel}
            </p>
            <p className="mt-2 max-w-[14rem] text-lg font-semibold text-white">
              {project.title}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const previousImage = () =>
    setActiveIndex((current) =>
      current === 0 ? project.images.length - 1 : current - 1
    );

  const nextImage = () =>
    setActiveIndex((current) =>
      current === project.images.length - 1 ? 0 : current + 1
    );

  return (
    <div className="relative mb-5 overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(135deg,rgba(25,18,45,0.95),rgba(8,8,18,0.98))]">
      <div className="relative aspect-[5/4] min-h-[220px] bg-[rgba(3,0,20,0.58)] sm:aspect-[16/10] sm:min-h-0">
        <Image
          src={project.images[activeIndex]}
          alt={`${project.title} preview ${activeIndex + 1}`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-contain p-3 transition-opacity duration-300 sm:object-cover sm:object-top sm:p-0"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(3,0,20,0.84),rgba(3,0,20,0.06)_42%,transparent)]" />

      {hasMultipleImages ? (
        <>
          <button
            type="button"
            onClick={previousImage}
            aria-label={`Previous ${project.title} screenshot`}
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[rgba(3,0,20,0.62)] text-white/80 backdrop-blur-sm transition duration-300 hover:bg-[rgba(173,110,202,0.85)] hover:text-[rgb(3,0,20)] active:scale-[0.96] sm:left-3 sm:h-9 sm:w-9"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label={`Next ${project.title} screenshot`}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[rgba(3,0,20,0.62)] text-white/80 backdrop-blur-sm transition duration-300 hover:bg-[rgba(173,110,202,0.85)] hover:text-[rgb(3,0,20)] active:scale-[0.96] sm:right-3 sm:h-9 sm:w-9"
          >
            <ArrowRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[rgba(3,0,20,0.55)] px-2.5 py-1 backdrop-blur-sm sm:bottom-3">
            {project.images.map((_, index) => (
              <button
                key={`${project.title}-dot-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show screenshot ${index + 1} for ${project.title}`}
                className={`h-2.5 w-2.5 rounded-full transition duration-300 ${
                  index === activeIndex
                    ? "bg-[rgb(173,110,202)]"
                    : "bg-white/35 hover:bg-white/55"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[rgba(173,110,202,0.82)]">
          Selected Work
        </p>
        <h2 className="text-4xl font-bold text-white sm:text-5xl">Projects</h2>
        <p className="mt-4 text-base leading-7 text-zinc-300 sm:text-lg">
          A compact view of the projects that best represent my full-stack
          development, academic foundation, and ongoing product work.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(173,110,202,0.35)] ${
              project.featured
                ? "border-[rgba(173,110,202,0.22)] bg-[linear-gradient(180deg,rgba(18,12,34,0.92),rgba(9,8,22,0.94))] shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
                : "border-white/10 bg-white/[0.02]"
            }`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(173,110,202,0.12),transparent_34%)]" />

            <div className="relative flex h-full flex-col">
              <ProjectMedia project={project} />

              <div className="flex flex-wrap items-center gap-2">
                {project.featured ? (
                  <span className="rounded-full border border-[rgba(173,110,202,0.28)] bg-[rgba(173,110,202,0.12)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[rgb(173,110,202)]">
                    Featured
                  </span>
                ) : null}
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                  {project.status}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-300">
                {project.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <TechChip key={`${project.title}-${tech}`} tech={tech} />
                ))}
              </div>

              <div className="mt-5 space-y-2 text-sm text-zinc-300">
                {project.role ? (
                  <p>
                    <span className="font-medium text-white">Role:</span>{" "}
                    {project.role}
                  </p>
                ) : null}
                <p className="flex items-center gap-2">
                  <CircleDot className="h-3.5 w-3.5 text-[rgb(173,110,202)]" />
                  <span>
                    <span className="font-medium text-white">Status:</span>{" "}
                    {project.status}
                  </span>
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[rgb(173,110,202)] px-4 py-2 text-sm font-medium text-[rgb(173,110,202)] transition duration-300 hover:bg-[rgb(173,110,202)] hover:text-[rgb(3,0,20)]"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-200 transition duration-300 hover:border-[rgba(173,110,202,0.35)] hover:text-white"
                  >
                    GitHub
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>

              <details className="group mt-5 rounded-2xl border border-white/10 bg-white/[0.03]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-sm font-medium text-zinc-200 transition duration-300 hover:text-white">
                  <span>Info</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[rgb(173,110,202)] transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-white/8 px-4 py-3 text-sm leading-6 text-zinc-300">
                  {project.details}
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
