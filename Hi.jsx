import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  Code2, 
  Cpu, 
  Globe,
  MapPin,
  ArrowUpRight,
  Briefcase,
  Layers
} from 'lucide-react';

// ==========================================
// 📝 PORTFOLIO DATA 
// ==========================================
const MY_DATA = {
  name: "V. Jathin Bhargav",
  username: "jathin.dev",
  title: "Independent Software Developer",
  location: "Dharmavaram, AP, India",
  bio: "I build custom tools, full-stack websites, and mobile applications from the ground up, specializing in C++, Python, React, and Kotlin.",
  email: "hello@example.com", 
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  skills: [
    "C++", "Python", "React", "Kotlin", 
    "Full-Stack Dev", "Mobile Architecture", "Vercel", "UI/UX Design", 
    "Database Management", "Local Hardware Optimization"
  ],
  projects: [
    {
      id: 1,
      title: "Biz Pulse",
      description: "A streamlined business data application built to calculate operational health scores and generate structured strategic readouts. Built, tested, and deployed via Vercel.",
      tech: ["Full-Stack", "Data Analytics", "Vercel"],
      link: "#",
      color: "from-blue-500/20 to-cyan-500/20",
      border: "group-hover:border-blue-500/50"
    },
    {
      id: 2,
      title: "Project Kinetic",
      description: "An entirely independent cyberpunk-themed fitness mobile application featuring goal tracking, interactive challenges, and integrated BLE smartwatch connectivity.",
      tech: ["Kotlin", "Mobile UI", "BLE Integration"],
      link: "#",
      color: "from-purple-500/20 to-fuchsia-500/20",
      border: "group-hover:border-purple-500/50"
    },
    {
      id: 3,
      title: "Zovio",
      description: "A standalone e-commerce platform utilizing a modern frontend framework, designed with a distinct dark space aesthetic and custom typography.",
      tech: ["React", "Frontend", "E-Commerce"],
      link: "#",
      color: "from-emerald-500/20 to-teal-500/20",
      border: "group-hover:border-emerald-500/50"
    },
    {
      id: 4,
      title: "AXORION",
      description: "A custom mathematical language programmed from scratch to optimize matrix mathematics and tensor manipulation directly on local hardware.",
      tech: ["C++", "Engine Arch", "Math Logic"],
      link: "#",
      color: "from-rose-500/20 to-orange-500/20",
      border: "group-hover:border-rose-500/50"
    }
  ],
  experience: [
    {
      role: "Independent Developer",
      company: "Self-Employed",
      period: "Present"
    }
  ]
};

// ==========================================
// 🎨 COMPONENTS
// ==========================================

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans p-4 md:p-8 lg:p-12 selection:bg-white/20">
      
      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-12 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 text-white font-semibold text-xl tracking-tight">
            <Terminal className="w-6 h-6 text-blue-400" />
            <span>{MY_DATA.username}</span>
          </div>
          <a 
            href={`mailto:${MY_DATA.email}`}
            className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-md"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Let's Talk</span>
          </a>
        </header>

        {/* Bento Grid Layout */}
        <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4 md:gap-6">
          
          {/* 1. Hero / Intro Box */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:border-white/20 transition-all overflow-hidden relative animate-in fade-in zoom-in-95 duration-700 delay-100">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 className="w-32 h-32" />
            </div>
            
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider mb-6 border border-blue-500/20">
                INDEPENDENT BUILDER
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                Hi, I'm {MY_DATA.name.split(' ')[1]}. <br/>
                <span className="text-zinc-500">{MY_DATA.title}</span>
              </h1>
            </div>
            
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md mt-6">
              {MY_DATA.bio}
            </p>
          </div>

          {/* 2. Map / Location Box */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 bg-zinc-900 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden group hover:border-white/20 transition-all animate-in fade-in zoom-in-95 duration-700 delay-200">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <MapPin className="w-10 h-10 text-rose-400 mb-3 group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
            <h3 className="text-white font-medium text-lg text-center">{MY_DATA.location}</h3>
            <p className="text-zinc-500 text-sm mt-1 flex items-center gap-1">
              {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} Local Time
            </p>
          </div>

          {/* 3. Socials Box */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 flex flex-row md:flex-col gap-4 animate-in fade-in zoom-in-95 duration-700 delay-300">
            <a href={MY_DATA.socials.github} target="_blank" rel="noreferrer" className="flex-1 bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all group">
              <Github className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors" />
            </a>
            <a href={MY_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="flex-1 bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-center hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 transition-all group">
              <Linkedin className="w-8 h-8 text-zinc-400 group-hover:text-[#0A66C2] transition-colors" />
            </a>
          </div>

          {/* 4. Experience Box */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-zinc-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-center group hover:border-white/20 transition-all animate-in fade-in zoom-in-95 duration-700 delay-400">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-zinc-400" />
              <h3 className="text-white font-semibold text-xl">Experience</h3>
            </div>
            <div className="space-y-4">
              {MY_DATA.experience.map((exp, i) => (
                <div key={i} className="flex justify-between items-center group/item">
                  <div>
                    <h4 className="text-white font-medium group-hover/item:text-blue-400 transition-colors">{exp.role}</h4>
                    <p className="text-zinc-500 text-sm">{exp.company}</p>
                  </div>
                  <div className="text-zinc-500 text-sm font-mono bg-white/5 px-3 py-1 rounded-full">
                    {exp.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Skills Box */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-zinc-900 border border-white/10 rounded-3xl p-8 group hover:border-white/20 transition-all animate-in fade-in zoom-in-95 duration-700 delay-500">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-5 h-5 text-zinc-400" />
              <h3 className="text-white font-semibold text-xl">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {MY_DATA.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-zinc-950 border border-white/5 text-zinc-300 text-sm rounded-xl hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects Section Header */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 mt-8 mb-2 flex items-center justify-between animate-in fade-in duration-700 delay-700">
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Cpu className="w-8 h-8 text-blue-400" />
              Shipped Projects
            </h2>
          </div>

          {/* Project Boxes */}
          {MY_DATA.projects.map((project, index) => (
            <a 
              key={project.id}
              href={project.link}
              className={`col-span-1 md:col-span-1 lg:col-span-2 row-span-1 bg-zinc-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 animate-in fade-in zoom-in-95 ${project.border}`}
              style={{ animationDelay: `${700 + (index * 100)}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center border border-white/5`}>
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-zinc-500 bg-black/30 px-3 py-1.5 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}

        </main>

        {/* Footer */}
        <footer className="mt-20 py-8 text-center border-t border-white/10 text-zinc-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {MY_DATA.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built with React & Tailwind <Code2 className="w-4 h-4" />
          </p>
        </footer>

      </div>
    </div>
  );
}
