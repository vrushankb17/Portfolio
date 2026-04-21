'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Home Seekr',
        description:
            'A machine learning–powered web application predicting house prices based on user-provided property details. Built with focus on data preprocessing and clean web interface.',
        tech: 'Python • Machine Learning • Data Processing',
        repo: 'https://github.com/vrushankb17/Home-Seekr',
    },
    {
        title: 'AquaSafe',
        description:
            'A machine learning–based risk prediction system assessing the presence of Naegleria fowleri using water quality parameters like pH and contamination levels.',
        tech: 'Machine Learning • Environmental Data',
        repo: 'https://github.com/vrushankb17/Aqua-Safe',
    },
    {
        title: 'FindMe',
        description:
            'An AI-based surveillance system using computer vision and CNN models to identify missing persons from CCTV footage to assist law enforcement.',
        tech: 'Computer Vision • CNN • AI Surveillance',
        repo: 'https://github.com/vrushankb17/Find-me',
    },
    {
        title: 'Craftfolio',
        description:
            'A single-page personal portfolio showcasing my skills, projects, and experience with a focus on clean UI, performance, and modern web practices.',
        tech: 'Next.js • React • TypeScript • Tailwind CSS',
        repo: 'https://github.com/vrushankb17/portfolio',
    },
    {
        title: 'Bhej-Mujhe',
        description:
            'A peer-to-peer file transfer application built with WebRTC that enables secure, browser-to-browser file sharing without server-side storage.',
        tech: 'WebRTC • JavaScript • HTML',
        repo: 'https://github.com/vrushankb17/Bhej-Mujhe',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="space-y-12 scroll-mt-32 font-mono mt-32 w-full flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-4xl"
            >
                <div className="flex items-center gap-4 mb-8 opacity-50">
                    <div className="w-full h-px bg-white/20" />
                    <span className="text-xs tracking-widest uppercase whitespace-nowrap text-white">Work_Data</span>
                    <div className="w-full h-px bg-white/20" />
                </div>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 w-full max-w-4xl">
                {projects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-cyan-500/50 hover:bg-[#111111] transition-all relative overflow-hidden p-8 flex flex-col justify-between"
            >
                {/* Hover Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-4">
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors tracking-tight">
                            {project.title}
                        </h3>
                        <span className="text-zinc-600 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all font-mono text-xs">
                            [↗]
                        </span>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono">
                        {project.description}
                    </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-white/5 space-y-2">
                    <p className="text-[10px] tracking-wide text-zinc-600 uppercase font-mono group-hover:text-purple-400 transition-colors">
                        {project.tech}
                    </p>
                </div>
            </a>
        </motion.div>
    );
}
