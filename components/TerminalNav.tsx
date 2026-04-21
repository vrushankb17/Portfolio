'use client';

const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'creations', label: 'Creations' },
  { id: 'reflections', label: 'Reflections' },
  { id: 'contact', label: 'Contacts' },
];

export default function TerminalNav({ active, setActive }: { active: string, setActive: (id: string) => void }) {
  return (
    <div className="pt-4 pb-8 font-mono">
      <div className="flex flex-wrap gap-4 sm:gap-8 text-sm sm:text-[15px]">
        {sections.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`relative transition-colors ${
                isActive ? 'text-cyan-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <span className="absolute -left-4 w-3">{isActive ? '+' : ''}</span>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
