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
          <p className="text-sm text-zinc-400 leading-relaxed space-y-4">
  <span className="block">Hello, I'm Barbaros Zöngür.</span>

  <span className="block">After graduating from Kuleli Military High School, one of Turkey's prestigious high schools, I completed my education at the Turkish Military Academy, graduating as an officer with a bachelor's degree in Electrical and Electronics Engineering. Subsequently, I worked as a project manager on various projects during my 8-year service in the Turkish Armed Forces. My military background has given me discipline, a unique sense of responsibility, time management skills, leadership, and the ability to plan at any scale.</span>

  <span className="block">Following my 8-year military career, I decided to pursue my long-standing interest in software development. This transition provided me with the opportunity to apply my strong skills in problem-solving, analytical thinking, sense of responsibility, and discipline to the world of technology. Software development has always appealed to me as a field where I can both use my creativity and continuously advance myself in an ever-evolving domain.</span>

  <span className="block">With my career change, I have developed expertise in .NET Core technologies, the Angular framework, and React and Next.js libraries in the software world. Additionally, I have created robust and reliable systems by working with databases such as PostgreSQL and MSSQL. As technology constantly evolves, I continuously strive to improve my skills and explore new technologies.</span>

  <span className="block">The vast potential of software development continues to inspire me daily. I'm committed to ongoing learning and creating more efficient, innovative solutions by leveraging advanced technologies, including artificial intelligence.</span>
</p>
        </div>
      </div>
    </div>
  );
}

