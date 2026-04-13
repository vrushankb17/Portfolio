'use client';

import Link from 'next/link';
import {
    SiX,
    SiLinkedin,
    SiLeetcode,
    SiGithub,
} from 'react-icons/si';

export default function Contact() {
    return (
        <section id="contact" className="pt-8 pb-4">
            <div className="space-y-12">
                
                <div className="space-y-4">
                    <h3 className="text-[15px] font-medium text-gray-900 dark:text-gray-100">notes</h3>
                    
                    <div className="flex flex-col gap-1.5">
                        <BlogLine 
                            title="the peril of laziness lost"
                            desc="bcantrill.dtrace.org"
                            href="https://bcantrill.dtrace.org/2026/04/12/the-peril-of-laziness-lost/"
                        />
                        <BlogLine 
                            title="don't trust, verify"
                            desc="daniel.haxx.se"
                            href="https://daniel.haxx.se/blog/2026/03/26/dont-trust-verify/"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-[15px] font-medium text-gray-900 dark:text-gray-100">resume</h3>
                    
                    <div className="flex flex-col gap-1.5">
                        <Link 
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-wrap items-baseline gap-x-3 text-[15px] hover:bg-gray-100 dark:hover:bg-white/5 px-1 -mx-1 rounded-sm transition-colors py-0.5 w-fit pr-4"
                        >
                            <h4 className="font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100">view my resume &rarr;</h4>
                        </Link>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-[15px] font-medium text-gray-900 dark:text-gray-100">contact</h2>

                    <div className="flex flex-wrap gap-5 pt-1">
                        <ContactIcon href="https://x.com/_vrushankk" icon={SiX} aria="X (Twitter)" />
                        <ContactIcon href="https://www.linkedin.com/in/vrushank-bhavsar-4696212a0/" icon={SiLinkedin} aria="LinkedIn" />
                        <ContactIcon href="https://leetcode.com/u/vrushankk/" icon={SiLeetcode} aria="LeetCode" />
                        <ContactIcon href="https://github.com/vrushankb17" icon={SiGithub} aria="GitHub" />
                    </div>
                </div>

            </div>
        </section>
    );
}

function BlogLine({ title, desc, href }: { title: string, desc: string, href: string }) {
    return (
        <Link 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-wrap items-baseline gap-x-3 text-[15px] hover:bg-gray-100 dark:hover:bg-white/5 px-1 -mx-1 rounded-sm transition-colors py-0.5"
        >
            <h4 className="font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100">{title}</h4>
            <p className="text-gray-400 dark:text-gray-500 line-clamp-1">{desc}</p>
        </Link>
    )
}

function ContactIcon({ href, icon: Icon, aria }: { href: string; icon: React.ElementType; aria: string; }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={aria}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
            <Icon className="h-4 w-4" />
        </Link>
    );
}
