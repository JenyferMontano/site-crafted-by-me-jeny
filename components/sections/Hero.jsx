import { ArrowRight } from "lucide-react";

function GitHubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.589 2 12.248c0 4.526 2.865 8.365 6.839 9.72.5.096.682-.222.682-.495 0-.244-.009-.89-.014-1.747-2.782.617-3.369-1.37-3.369-1.37-.455-1.184-1.11-1.499-1.11-1.499-.908-.636.069-.623.069-.623 1.004.072 1.532 1.055 1.532 1.055.892 1.565 2.341 1.113 2.91.851.091-.664.349-1.113.635-1.369-2.221-.261-4.555-1.137-4.555-5.061 0-1.118.389-2.033 1.029-2.75-.103-.262-.446-1.316.098-2.743 0 0 .84-.276 2.75 1.05A9.303 9.303 0 0 1 12 6.836a9.27 9.27 0 0 1 2.504.348c1.909-1.326 2.748-1.05 2.748-1.05.546 1.427.203 2.481.1 2.743.64.717 1.028 1.632 1.028 2.75 0 3.934-2.337 4.797-4.565 5.053.359.319.679.948.679 1.911 0 1.38-.012 2.493-.012 2.833 0 .275.18.596.688.494A10.254 10.254 0 0 0 22 12.248C22 6.589 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.3 3.88 3.3 4.96c0 1.08.87 1.96 1.95 1.96 1.08 0 1.95-.88 1.95-1.96C7.2 3.88 6.33 3 5.25 3ZM20.7 12.83c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.11-3.38 1.89V8.5H9.62c.04.76 0 11.5 0 11.5H13v-6.42c0-.34.02-.68.13-.92.27-.68.9-1.39 1.95-1.39 1.38 0 1.93 1.05 1.93 2.58V20h3.38l.01-7.17Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
            Software Engineer 
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Hi, I&apos;m Jenyfer Montano
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
             Systems Engineering student and aspiring full-stack developer 
             with a strong interest in web development, automation, machine learning,
             and emerging technologies. I enjoy building modern applications 
             with Next.js, React, TypeScript, and Tailwind CSS, while continuously 
             learning through experimentation, problem-solving, and hands-on projects.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-[rgb(173,110,202)] px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[rgb(173,110,202)] transition hover:bg-[rgb(173,110,202)] hover:text-[rgb(3,0,20)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="https://github.com/JenyferMontano"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[rgb(173,110,202)] p-3 text-[rgb(173,110,202)] transition hover:bg-[rgb(173,110,202)] hover:text-[rgb(3,0,20)]"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>

            <a
              href="https://linkedin.com/in/jenyfer-montano-44b186334"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[rgb(173,110,202)] p-3 text-[rgb(173,110,202)] transition hover:bg-[rgb(173,110,202)] hover:text-[rgb(3,0,20)]"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
