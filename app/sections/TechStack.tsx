'use client';

import TechRow from '../components/TechRow';
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript,
    SiReact, SiTailwindcss, SiExpress, SiWeb3Dotjs, SiShadcnui,
    SiNodedotjs, SiPostgresql, SiMongodb,
    SiGit, SiGithub, SiVercel, SiPostman, SiFigma,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function TechStack() {
    return (
        <section className="my-32">
            <h2 className="mb-3 text-4xl font-bold">Tech Stack</h2>


            <div className="space-y-12">
                <TechRow
                    title="< LANGUAGES />"
                    items={[
                        { name: 'HTML', icon: SiHtml5 },
                        { name: 'CSS', icon: SiCss3 },
                        { name: 'JavaScript', icon: SiJavascript },
                        { name: 'TypeScript', icon: SiTypescript },
                        { name: 'Java', icon: FaJava },
                    ]}
                />

                <TechRow
                    title="< FRAMEWORKS & LIBS />"
                    items={[
                        { name: 'React', icon: SiReact },
                        { name: 'TailwindCSS', icon: SiTailwindcss },
                        { name: 'Express.js', icon: SiExpress },
                        { name: 'Web3.js', icon: SiWeb3Dotjs },
                        { name: 'shadcn/ui', icon: SiShadcnui },
                    ]}
                />

                <TechRow
                    title="< BACKEND & DATABASE />"
                    items={[
                        { name: 'Node.js', icon: SiNodedotjs },
                        { name: 'PostgreSQL', icon: SiPostgresql },
                        { name: 'MongoDB', icon: SiMongodb },


                    ]}
                />

                <TechRow
                    title="< DEVELOPER TOOLS />"
                    items={[
                        { name: 'Git', icon: SiGit },
                        { name: 'GitHub', icon: SiGithub },
                        { name: 'Vercel', icon: SiVercel },
                        { name: 'Postman', icon: SiPostman },
                        { name: 'Figma', icon: SiFigma },
                    ]}
                />
            </div>
        </section>
    );
}
