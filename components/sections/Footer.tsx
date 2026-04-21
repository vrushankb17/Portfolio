'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="pt-4 pb-12 text-left text-[13px] text-zinc-400 dark:text-zinc-500"
        >
            © 2026 vrushank bhavsar
        </motion.footer>
    );
}
