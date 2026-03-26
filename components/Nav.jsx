import { cn } from "@/lib/utils";

export const links = [
  { name: "About", path: "#about" },
  { name: "Education", path: "#education" },
  { name: "Projects", path: "#projects" },
   { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" },
];

export default function Nav({ className, mobile = false }) {
  return (
    <nav
      className={cn(
        mobile
          ? "flex flex-col gap-2"
          : "flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-xl",
        className
      )}
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.path}
          className={cn(
            "transition-all duration-300",
            mobile
              ? "rounded-2xl px-4 py-3 text-base font-medium text-zinc-200 hover:bg-[rgba(173,110,202,0.12)] hover:text-white"
              : "rounded-full px-4 py-2 text-sm font-medium text-zinc-300 hover:bg-[rgba(173,110,202,0.14)] hover:text-white"
          )}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
