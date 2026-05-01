import React, { useState, useEffect } from 'react';

export const SecondPage = () => {
    const [startStory, setStartStory] = useState(false);
    const [scene, setScene] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isLeaving, setIsLeaving] = useState(false);
    const [typingFinished, setTypingFinished] = useState(false);
    
    const fullText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...";

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartStory(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (startStory) {
            const sceneTimer = setTimeout(() => {
                setScene(1);
            }, 1600); 
            return () => clearTimeout(sceneTimer);
        }
    }, [startStory]);

    // Typewriter Logic: Handles both Typing and Backtracking
    useEffect(() => {
        if (scene === 1) {
            if (!isLeaving) {
                // Forward Typing
                let i = displayText.length;
                if (i < fullText.length) {
                    const nextDelay = fullText[i] === "." || fullText[i] === "," ? 800 : 70 + Math.random() * 80;
                    const timeout = setTimeout(() => {
                        setDisplayText(fullText.slice(0, i + 1));
                    }, nextDelay);
                    return () => clearTimeout(timeout);
                } else {
                    setTypingFinished(true);
                }
            } else {
                // Backtracking (Deletion)
                if (displayText.length > 0) {
                    const timeout = setTimeout(() => {
                        setDisplayText(prev => prev.slice(0, -1));
                    }, 20); // Fast deletion speed
                    return () => clearTimeout(timeout);
                }
            }
        }
    }, [scene, isLeaving, displayText]);

    return (
        <div className="fixed bg-[url('/images/thumb.jpg')] bg-norepeat bg-cover inset-0 flex items-center justify-center overflow-hidden z-[9999] isolate">
            
            {/* 1. THE MESSAGE AREA (Intro) */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-[5000ms] ease-in-out transform z-[100] ${
                startStory ? '-translate-x-full opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'
            }`}>
                <div className="text-center space-y-6 max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-[0.1em] uppercase">
                        Are <span className="text-red-500 animate-pulse">you sure</span> to continue!
                    </h2>
                    <p className="text-xl md:text-3xl text-slate-300 font-mono italic">
                        "whether you are ready or not <span className="text-cyan-400 font-bold not-italic">let's go.</span>"
                    </p>
                    {!startStory && (
                        <div className="w-48 h-1 bg-slate-800 mx-auto mt-8 overflow-hidden rounded-full">
                            <div className="h-full bg-cyan-500 animate-[progress_5s_linear_forwards]"></div>
                        </div>
                    )}
                </div>
            </div>

            {/* 2. THE STORY CANVAS */}
            <div className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-[1500ms] ease-in-out z-10 ${
                startStory ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="bg-cyan-800/40 relative w-[95vw] h-[85vh] border-2 border-slate-700 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto bg-[#0a0a0a]">
                    <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#0ea5e912_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e912_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                    
                    <div className="relative z-[200] w-full h-full flex flex-col items-center justify-center p-4">
                        {scene === 1 && (
                            <div className="relative flex flex-col items-center justify-center w-full h-full">
                                
                                {/* 🌹 ROSE BOUQUET - Shrink and Vanish */}
                                <div className={`relative w-80 h-80 flex items-center justify-center z-[30] transition-all duration-1000 ${
                                    isLeaving ? 'scale-0 opacity-0' : 'opacity-40 scale-100'
                                }`}>
                                    <div className="absolute inset-0 bg-rose-500/20 blur-[80px] rounded-full animate-pulse"></div>
                                    <svg viewBox="0 0 200 200" className="w-full h-full relative animate-[float_4s_ease-in-out_infinite] drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]">
                                        <rect x="98" y="120" width="4" height="60" rx="2" fill="#166534" transform="rotate(-10 100 150)" />
                                        <rect x="98" y="120" width="4" height="60" rx="2" fill="#166534" transform="rotate(10 100 150)" />
                                        <rect x="98" y="120" width="4" height="60" rx="2" fill="#166534" />
                                        <ellipse cx="80" cy="140" rx="15" ry="8" fill="#15803d" transform="rotate(-30 80 140)" />
                                        <ellipse cx="120" cy="145" rx="15" ry="8" fill="#15803d" transform="rotate(30 120 145)" />
                                        <g transform="translate(100, 80)">
                                            <circle r="35" fill="#be123c" />
                                            <circle r="25" fill="#e11d48" />
                                            <circle r="15" fill="#fb7185" />
                                        </g>
                                        <g transform="translate(65, 110) rotate(-15)">
                                            <circle r="28" fill="#9f1239" />
                                            <circle r="20" fill="#be123c" />
                                            <circle r="10" fill="#f43f5e" />
                                        </g>
                                        <g transform="translate(135, 110) rotate(15)">
                                            <circle r="28" fill="#9f1239" />
                                            <circle r="20" fill="#be123c" />
                                            <circle r="10" fill="#f43f5e" />
                                        </g>
                                        <path d="M85 155 Q100 145 115 155 L110 165 Q100 155 90 165 Z" fill="#f472b6" stroke="#db2777" strokeWidth="2" />
                                    </svg>
                                </div>

                                {/* ✍️ TYPEWRITER MESSAGE */}
                                <div className="absolute inset-0 z-[40] flex items-center justify-center p-8">
                                    <div className="max-w-2xl text-center">
                                        <p className="text-white font-mono text-xl md:text-2xl leading-relaxed drop-shadow-md">
                                            {displayText}
                                            <span className="inline-block w-2 h-6 ml-1 bg-cyan-400 animate-pulse">|</span>
                                        </p>
                                    </div>
                                </div>

                                {/* 👋 MEME / CONTENT REVEAL (Appears after 1000ms delay) */}
                                {isLeaving && displayText.length === 0 && (
                                    <div className="absolute z-[50] animate-in fade-in zoom-in duration-1000 delay-1000 flex flex-col items-center">
                                        <img 
                                            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGVhb2p5ZHd3eXBrb3FiMm8zN2pzcnA0MWE5b2Y1NmZoanY0eThtZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9Z7SJLN4UYgGcVZQaJ/giphy.gif" 
                                            alt="Meme" 
                                            className="rounded-full border-4 border-green-600/70 shadow-[0_0_50px_rgba(34,211,238,0.4)] w-64 md:w-96"
                                        />
                                    </div>
                                )}

                                {/* ⚡ FUNKY BUTTON */}
                                {typingFinished && !isLeaving && (
                                    <div className="absolute bottom-10 z-[60] animate-in slide-in-from-bottom-10 fade-in duration-700">
                                        <button 
                                            onClick={() => setIsLeaving(true)}
                                            className="px-10 py-4 bg-pink-600 text-white font-black uppercase rounded-full border-4 border-white shadow-[0_0_20px_rgba(219,39,119,0.5)] hover:scale-110 hover:bg-pink-500 hover:rotate-3 transition-all active:scale-90"
                                        >
                                            Enough Talk, Bye! 👋
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes progress { from { width: 0%; } to { width: 100%; } }
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-25px) rotate(4deg); }
                }
            `}</style>
        </div>
    );
};
