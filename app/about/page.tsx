"use client";
import React from "react";
import { Navigation } from "../components/nav";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container mx-auto p-6 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-6 text-zinc-300">About</h1>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Driven by a passion for both creativity and technology, I build intuitive digital experiences and continuously challenge the limits of software development. I strive to create innovative solutions that blend form and function, pushing the boundaries of what's possible in the digital realm. Bir sana yandım ben, bir sana kitapsız. Bir sana aldandım bir sana vefasız. Aahahahahahaha eylül geldi hoş geli, sıcaklar bitti güzel bir sonbahar bizi bekliyor. 
          </p>
        </div>
      </div>
    </div>
  );
}

