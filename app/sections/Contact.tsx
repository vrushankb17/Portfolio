'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    SiX,
    SiLinkedin,
    SiLeetcode,
    SiGithub,
} from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
    return (
        <section id="contact" className="my-32">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mx-auto max-w-3xl space-y-8 text-center"
            >
                <h2 className="text-4xl font-bold">Get in Touch</h2>

                <p className="text-muted-foreground">
                    I&apos;m always open to discussing new opportunities, collaborations,
                    or interesting ideas.
                </p>

                <div className="flex flex-wrap justify-center gap-6 pt-4">
                    <ContactIcon
                        href="https://x.com/_vrushankk"
                        label="X"
                        icon={SiX}
                    />

                    <ContactIcon
                        href="https://www.linkedin.com/in/vrushank-bhavsar-4696212a0/"
                        label="LinkedIn"
                        icon={SiLinkedin}
                    />

                    <ContactIcon
                        href="https://leetcode.com/u/vrushankk/"
                        label="LeetCode"
                        icon={SiLeetcode}
                    />

                    <ContactIcon
                        href="mailto:vrushankbhavsar1706@gmail.com"
                        label="Email"
                        icon={MdEmail}
                    />

                    <ContactIcon
                        href="https://github.com/vrushankb17"
                        label="GitHub"
                        icon={SiGithub}
                    />
                </div>
            </motion.div>
        </section>
    );
}

function ContactIcon({
    href,
    label,
    icon: Icon,
}: {
    href: string;
    label: string;
    icon: React.ElementType;
}) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-12 w-12 items-center justify-center rounded-full
                 border border-white/10 bg-white/5
                 transition
                 hover:border-white/30
                 hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]"
        >
            <Icon className="h-5 w-5 opacity-80" />
        </Link>
    );
}
