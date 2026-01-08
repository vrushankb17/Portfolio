'use client';

import React from 'react';

type TechItem = {
    name: string;
    icon: React.ElementType;
};

export default function TechRow({
    title,
    items,
}: {
    title: string;
    items: TechItem[];
}) {
    return (
        <div>
            <h3 className="mb-4 font-mono text-sm tracking-wide text-muted-foreground">
                {title}
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
                {items.map(({ name, icon: Icon }) => (
                    <span
                        key={name}
                        className="inline-flex items-center gap-2 rounded-md
                       border border-white/10 bg-white/5
                       px-3 py-1.5 text-sm
                       transition hover:border-white/30
                       hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                    >
                        <Icon className="h-4 w-4 opacity-80" />
                        {name}
                    </span>
                ))}
            </div>
        </div>
    );
}
