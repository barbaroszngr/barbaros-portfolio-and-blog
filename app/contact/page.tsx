"use client";
import { Github, Mail, Twitter, Linkedin, Pen } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    icon: <Github size={20} />,
    href: "https://github.com/barbaroszngr",
    label: "Github",
    handle: "barbaroszngr",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/barbaroszongur",
    label: "LinkedIn",
    handle: "barbaros zöngür",
  },
  {
    icon: <Pen size={20} />,
    href: "https://medium.com/@barbaroszongur22",
    label: "Medium",
    handle: "@barbaroszongur22",
  },
  {
    icon: <Twitter size={20} />,
    href: "https://x.com/barbaroszongur",
    label: "Twitter",
    handle: "@barbaroszongur",
  },
  {
    icon: <Mail size={20} />,
    href: "#",
    label: "Email",
    handle: "barbaroszongur22@gmail.com",
    action: "sendEmail",
  },
  
  
];

export default function Example() {
  const sendEmail = (e: React.MouseEvent<HTMLAnchorElement>, email: string) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
  <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-16">
    {socials.map((s) => (
      <Card key={s.label}>
        <Link
          href={s.href}
          onClick={(e) => s.action === "sendEmail" ? sendEmail(e, s.handle) : null}
          target={s.action === "sendEmail" ? "_self" : "_blank"}
          className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-12 lg:py-16"
        >
          <span className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent" aria-hidden="true" />
          <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
            {s.icon}
          </span>
          <div className="z-10 flex flex-col items-center">
            <span className="text-sm font-medium duration-150 lg:text-base text-zinc-200 group-hover:text-white font-display">
              {s.handle}
            </span>
            <span className="mt-2 text-xs text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
              {s.label}
            </span>
          </div>
        </Link>
      </Card>
    ))}
  </div>
</div>
    </div>
  );
}
