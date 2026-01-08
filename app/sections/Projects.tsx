'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { SiGithub } from 'react-icons/si';

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
        <section className="my-32 text-center">
            <h2 className="mb-4 text-4xl font-bold">Proof of Work</h2>
            <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
                Projects that showcase my problem-solving skills, applied machine learning,
                and real-world system design.
            </p>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({
    title,
    description,
    tech,
    repo,
    wide,
}: Project) {
    return (
        <Card
            className={`flex h-full flex-col justify-between p-8 text-left ${wide ? 'md:col-span-2' : ''
                }`}
        >
            {/* Content */}
            <div>
                <h3 className="mb-3 text-2xl font-semibold">{title}</h3>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>

                <p className="mb-6 text-xs text-muted-foreground">{tech}</p>
            </div>

            {/* Action */}
            <Link
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium
                   text-muted-foreground transition hover:text-foreground"
            >
                <SiGithub className="h-4 w-4" />
                Code
            </Link>
        </Card>
    );
}
