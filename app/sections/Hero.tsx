'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
    return (
        <section className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                Vrushank Bhavsar
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl">
                I&apos;m Vrushank, Full-Stack Developer • Building things that scale and delight.
            </p>

            <p className="leading-relaxed text-muted-foreground">
                I like working across the stack — blending design with development to craft clean,
                functional, and fast experiences. If you&apos;re looking for someone passionate, skilled, and ready to contribute,
                I&apos;m here to help bring your ideas to life.
            </p>


            <div className="flex flex-wrap justify-center gap-4 pt-4">
                <span className="inline-flex items-center gap-2 rounded-full
                         border border-green-500/30 bg-green-500/10
                         px-4 py-1.5 text-sm text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    Available for new opportunities
                </span>

                <Button variant="outline" asChild>
                    <Link href="/resume.pdf" target="_blank">
                        View Resume
                    </Link>
                </Button>
            </div>
        </section>
    );
}
