'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
    return (
        <section className="space-y-6 pb-2">
            <h1 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-gray-100">
                hi i'm vrushank
            </h1>

            <div className="space-y-1 mt-6">
                <p className="text-[15px] font-medium text-gray-600 dark:text-gray-400">
                    currently
                </p>
                <p className="text-[15px] text-gray-500 dark:text-gray-500">
                    full-stack developer • crafting clean software experiences
                </p>
            </div>
            
            <p className="pt-2 text-[15px] leading-relaxed text-gray-500 dark:text-gray-500 max-w-[650px]">
                i like working across the stack — blending design with development to build clean, functional, and fast systems.
            </p>
        </section>
    );
}
