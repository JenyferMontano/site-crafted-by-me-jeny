import { Mail } from "lucide-react";

const email = "jenifermontano32@gmail.com";

const contactLinks = [
  {
    name: "Email",
    href: `mailto:${email}`,
    icon: MailIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jenyfer-montano-44b186334",
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/JenyferMontano",
    icon: GitHubIcon,
  },
];

function MailIcon(props) {
  return <Mail aria-hidden="true" {...props} />;
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

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[rgba(173,110,202,0.82)]">
          Contact
        </p>
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          Let&apos;s connect
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
          If you&apos;d like to talk about an opportunity, a project, or simply
          connect, I&apos;d be happy to hear from you.
        </p>
      </div>

      <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(18,12,34,0.92),rgba(10,8,22,0.94))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">
              Email
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-2 inline-block text-2xl font-semibold tracking-tight text-white transition-colors duration-300 hover:text-[rgb(173,110,202)] active:text-[rgb(173,110,202)]"
            >
              {email}
            </a>
            <p className="mt-3 max-w-xl text-base leading-7 text-zinc-300">
              Open to internships, collaborations, and software development
              opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={item.name}
                  className="group flex flex-col items-center gap-3"
                >
                  <span className="flex h-18 w-18 items-center justify-center rounded-full border border-[rgb(173,110,202)] text-[rgb(173,110,202)] transition-all duration-300 hover:-translate-y-1 hover:bg-[rgb(173,110,202)] hover:text-[rgb(3,0,20)] active:translate-y-0 active:scale-[0.96] active:bg-[rgb(173,110,202)] active:text-[rgb(3,0,20)] sm:h-20 sm:w-20">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </span>
                  <span className="text-sm font-medium text-zinc-300 transition-colors duration-300 group-hover:text-white group-active:text-white">
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
