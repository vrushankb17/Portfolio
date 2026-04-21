'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TARGET_TEXT = "VRUSHANK";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!<>-_\\\\/[]{}—=+*^?#________";

export default function Hero() {
    const [text, setText] = useState(TARGET_TEXT);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let frame = 0;

        const scramble = () => {
            let pos = 0;
            interval = setInterval(() => {
                const scrambled = TARGET_TEXT.split("")
                    .map((char, index) => {
                        if (pos / CYCLES_PER_LETTER > index) {
                            return char;
                        }
                        const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                        return CHARS[randomCharIndex];
                    })
                    .join("");

                setText(scrambled);
                pos++;

                if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
                    clearInterval(interval);
                    setText(TARGET_TEXT);
                }
            }, SHUFFLE_TIME);
        };

        // Start scrambling after a short delay
        setTimeout(scramble, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="flex flex-col items-center justify-center min-h-[90vh] text-center space-y-12 scroll-mt-32 font-mono">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
            >
                {/* Glow behind logo */}
                <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full scale-150 pointer-events-none" />
                
                {/* Optional subtle ascii decoration above name */}
                <div className="text-zinc-600 space-y-0.5 text-xs sm:text-sm font-bold tracking-[0.2em] mb-8 select-none">
                    <motion.div
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                        {"// SYSTEM.INIT_"}
                    </motion.div>
                </div>

                <h1 
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter mix-blend-difference drop-shadow-[0_0_15px_rgba(0,240,255,0.8)] cursor-pointer select-none"
                    onMouseEnter={() => {
                        // Optional: trigger on hover again
                        let pos = 0;
                        const interval = setInterval(() => {
                            const scrambled = TARGET_TEXT.split("")
                                .map((char, index) => {
                                    if (pos / CYCLES_PER_LETTER > index) {
                                        return char;
                                    }
                                    const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                                    return CHARS[randomCharIndex];
                                })
                                .join("");
                            setText(scrambled);
                            pos++;
                            if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
                                clearInterval(interval);
                                setText(TARGET_TEXT);
                            }
                        }, SHUFFLE_TIME);
                    }}
                >
                    {text}
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 text-zinc-500 uppercase tracking-widest text-xs font-semibold mt-24"
            >
                <span>Scroll to discover</span>
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent"
                />
            </motion.div>
        </section>
    );
}
