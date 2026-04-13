'use client';

import Link from 'next/link';

type Project = {
    title: string;
    description: string;
    tech: string;
    repo: string;
    wide?: boolean;
};

const projects: Project[] = [
    {
        title: 'Home Seekr',
        description:
            'A machine learning–powered web application that predicts house prices based on user-provided property and location details. The project focuses on data preprocessing, feature engineering, and delivering reliable price estimations through a clean web interface.',
        tech: 'Python • Machine Learning • Data Processing • Web App',
        repo: 'https://github.com/vrushankb17/Home-Seekr',
    },
    {
        title: 'AquaSafe',
        description:
            'A machine learning–based risk prediction system designed to assess the presence of Naegleria fowleri using water quality parameters such as temperature, pH, turbidity, and contamination levels.',
        tech: 'Machine Learning • Environmental Data • Water Quality Analysis',
        repo: 'https://github.com/vrushankb17/Aqua-Safe',
    },
    {
        title: 'FindMe',
        description:
            'An AI-based surveillance system that uses computer vision and CNN models to identify missing persons from CCTV footage and assist law enforcement through automated matching.',
        tech: 'Computer Vision • CNN • AI Surveillance • Web Application',
        repo: 'https://github.com/vrushankb17/Find-me',
    },
    {
        title: 'Craftfolio',
        description:
            'A single-page personal portfolio showcasing my skills, projects, and experience with a focus on clean UI, performance, and modern web practices.',
        tech: 'Next.js • React • TypeScript • Tailwind CSS • Framer Motion',
        repo: 'https://github.com/vrushankb17/portfolio',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="pt-8 pb-4">
            <h2 className="mb-4 text-[15px] font-medium text-gray-900 dark:text-gray-100">projects</h2>

            <div className="flex flex-col gap-1.5">
                {projects.map((project) => (
                    <ProjectLine key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}

function ProjectLine({
    title,
    description,
    repo,
}: Project) {
    return (
        <Link
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-wrap items-baseline gap-x-3 text-[15px] hover:bg-gray-100 dark:hover:bg-white/5 px-1 -mx-1 rounded-sm transition-colors py-0.5"
        >
            <h3 className="font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 lowercase">{title}</h3>
            <p className="text-gray-400 dark:text-gray-500 lowercase line-clamp-1 flex-1 min-w-[200px]">
                {description}
            </p>
        </Link>
    );
}
