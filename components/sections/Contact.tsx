'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

type Message = {
    id: string;
    sender: 'system' | 'user';
    text: React.ReactNode;
};

const INITIAL_MESSAGES: Message[] = [
    {
        id: 'init-1',
        sender: 'system',
        text: "hello i am vrushank. i'm a full-stack engineer building beautiful, fast, and scalable digital experiences.",
    },
    {
        id: 'init-2',
        sender: 'system',
        text: "ask me anything. (for example, type /help for all commands)",
    }
];

export default function Contact() {
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [input, setInput] = useState('');
    const chatRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    const handleCommand = (cmd: string) => {
        const lowerCmd = cmd.trim().toLowerCase();
        let responseText: React.ReactNode = '';

        switch (lowerCmd) {
            case '/help':
                responseText = (
                    <span className="text-zinc-400">
                        Available commands:<br/>
                        <span className="text-cyan-400">/projects</span> - View my selected work<br/>
                        <span className="text-cyan-400">/resume</span> - Get a link to my resume<br/>
                        <span className="text-cyan-400">/contact</span> - Get my contact information<br/>
                        <span className="text-cyan-400">/clear</span> - Clear the terminal
                    </span>
                );
                break;
            case '/projects':
                responseText = (
                    <span className="text-zinc-400">
                        Selected Projects:<br/>
                        <br/>
                        [1] <a href="https://github.com/vrushankb17/Home-Seekr" target="_blank" className="text-cyan-400 hover:text-cyan-300">Home Seekr</a> - ML web app predicting house prices.<br/>
                        [2] <a href="https://github.com/vrushankb17/Aqua-Safe" target="_blank" className="text-cyan-400 hover:text-cyan-300">AquaSafe</a> - ML system for water quality analysis.<br/>
                        [3] <a href="https://github.com/vrushankb17/Find-me" target="_blank" className="text-cyan-400 hover:text-cyan-300">FindMe</a> - Computer Vision CCTV surveillance system.<br/>
                        [4] <a href="https://github.com/vrushankb17/Bhej-Mujhe" target="_blank" className="text-cyan-400 hover:text-cyan-300">Bhej-Mujhe</a> - P2P WebRTC file transfer application.<br/>
                        <br/>
                        Type <span className="text-cyan-400">/github</span> or click the links to see the repos.
                    </span>
                );
                break;
            case '/github':
                responseText = "Redirecting to GitHub (https://github.com/vrushankb17)...";
                setTimeout(() => window.open('https://github.com/vrushankb17', '_blank'), 500);
                break;
            case '/resume':
                responseText = "Opening resume...";
                setTimeout(() => window.open('/resume.pdf', '_blank'), 500);
                break;
            case '/contact':
                responseText = (
                    <span className="text-zinc-400">
                        Email: <a href="mailto:vrushankbhavsar17@gmail.com" className="text-cyan-400">vrushankbhavsar17@gmail.com</a><br/>
                        Twitter: <a href="https://x.com/_vrushankk" target="_blank" className="text-cyan-400">@_vrushankk</a><br/>
                        GitHub: <a href="https://github.com/vrushankb17" target="_blank" className="text-cyan-400">vrushankb17</a><br/>
                        LinkedIn: <a href="https://linkedin.com/in/vrushank-bhavsar-4696212a0" target="_blank" className="text-cyan-400">Vrushank Bhavsar</a>
                    </span>
                );
                break;
            case '/clear':
                setMessages([]);
                return; // Return early so we don't push the clear message
            default:
                responseText = `Command not found: ${lowerCmd}. Type /help for available commands.`;
        }

        setMessages((prev) => [
            ...prev,
            { id: Date.now().toString(), sender: 'system', text: responseText }
        ]);
    };

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        setInput('');

        // Push user message
        setMessages((prev) => [
            ...prev,
            { id: Date.now().toString() + '-user', sender: 'user', text: `> ${userMsg}` }
        ]);

        // Small delay for system response to feel natural
        setTimeout(() => {
            handleCommand(userMsg);
        }, 300);
    };

    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="contact" 
            className="w-full flex justify-center scroll-mt-32 px-2 sm:px-0"
        >
            <div className="w-full max-w-5xl bg-[#0D0D0D] rounded-xl overflow-hidden font-mono border border-white/5 flex flex-col h-[75vh] min-h-[500px] max-h-[800px] shadow-2xl">
                
                {/* Header Profile / Top Bar */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/5 bg-[#0a0a0a]">
                    <div className="flex flex-col gap-2 relative z-10 w-16">
                        {/* the 3 dots */}
                        <div className="flex items-center gap-1.5 opacity-50">
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-500" />
                        </div>
                    </div>
                    
                    <div className="absolute left-1/2 -translate-x-1/2 text-xs sm:text-sm text-zinc-300 font-bold tracking-widest text-center">
                        vrushank.exe
                    </div>

                    <button 
                        onClick={() => setMessages(INITIAL_MESSAGES)}
                        className="text-zinc-400 hover:text-white text-[10px] sm:text-xs font-semibold tracking-wider transition-colors duration-200 uppercase w-16 text-right relative z-10"
                    >
                        Reset ↺
                    </button>
                </div>

                {/* Chat Area */}
                <div 
                    ref={chatRef}
                    className="flex-1 p-6 sm:p-12 flex flex-col overflow-y-auto space-y-4 custom-scrollbar bg-black/40"
                >
                    <div className="mt-auto space-y-3 sm:space-y-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className="text-sm sm:text-base md:text-lg leading-relaxed">
                                {msg.sender === 'user' ? (
                                    <span className="text-zinc-300 font-bold">{msg.text}</span>
                                ) : (
                                    <span className="text-zinc-400">{msg.text}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Input Area */}
                <form onSubmit={handleSubmit} className="px-4 sm:px-6 py-4 sm:py-5 border-t border-white/5 bg-[#0a0a0a] flex items-center justify-between">
                    <span className="text-cyan-500 font-bold mr-2 sm:mr-3">{'>'}</span>
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a command..." 
                        className="bg-transparent text-sm sm:text-base w-full outline-none text-zinc-300 placeholder-zinc-700 font-mono"
                        autoComplete="off"
                    />
                    <button 
                        type="submit"
                        className="text-zinc-500 hover:text-white text-[10px] sm:text-xs uppercase font-semibold tracking-wider transition-colors duration-200 whitespace-nowrap ml-4 flex items-center gap-1"
                    >
                        [Send] <span className="hidden sm:inline">↑</span>
                    </button>
                </form>
            </div>
        </motion.section>
    );
}
