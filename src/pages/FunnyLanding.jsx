import React, { useState } from 'react';
import { SecondPage } from './SecondPage';
const FunnyLanding = () => {
    const [isHovered, setIsHovered] = useState(false);
    // Tracking hover state for each button individually
    const [hoveredButton, setHoveredButton] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const [showNext, setShowNext] = useState(false);

    const buttonData = [
        {
            id: 'pink',
            label: 'TAP ON ME',
            hoverText: "choose me, blue vala accha nahi 😂",
            color: 'bg-pink-600',
            hoverColor: 'hover:bg-pink-500',
            shadow: 'shadow-[0_10px_0_rgb(157,23,77)]',
            border: 'border-pink-400',
            rotation: '-rotate-6' // Tilts Left
        },
        {
            id: 'cyan',
            label: 'I AM AN INTROVERT',
            hoverText: "Kya haal hain laadle..  ",
            color: 'bg-cyan-600',
            hoverColor: 'hover:bg-cyan-500',
            shadow: 'shadow-[0_10px_0_rgb(8,145,178)]',
            border: 'border-cyan-400',
            rotation: 'rotate-6' // Tilts Right
        },
        // {
        //     id: 'purple',
        //     label: 'DO NOT PRESS',
        //     hoverText: "I'm calling your mom! 📱",
        //     color: 'bg-purple-600',
        //     hoverColor: 'hover:bg-purple-500',
        //     shadow: 'shadow-[0_10px_0_rgb(107,33,168)]',
        //     border: 'border-purple-400',
        //     rotation: '-rotate-12' // Tilts Left even more
        // }
    ];

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 overflow-hidden font-mono">
            {/* The "Cutie" Character Section */}
            <div
                className={`relative mb-12 transition-all duration transform hover:scale-110 cursor-pointer transition-all duration-1000 ease-in-out transform ${isClicked
                    ? '-translate-y-[150vh] opacity-0 scale-75'
                    : 'translate-y-0 opacity-100 scale-100'
                    }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* 1. The Outer Soft Glow (Blurry) */}
                <div className="absolute inset-[-15px] rounded-full bg-pink-500 blur-3xl opacity-30 animate-pulse"></div>

                {/* 2. The Sharp Neon Ring */}
                <div className="relative z-10 w-48 h-48 
                 lg:w-67 lg:h-67 rounded-full p-1.5 bg-gradient-to-tr from-pink-400 via-pink-600 to-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.6)]">

                    {/* 3. The Image Container */}
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-pink-100 bg-slate-800">
                        <img
                            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGVhb2p5ZHd3eXBrb3FiMm8zN2pzcnA0MWE5b2Y1NmZoanY0eThtZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9Z7SJLN4UYgGcVZQaJ/giphy.gif"
                            alt="Cute Anime Character"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Floating Speech Bubble */}
                <div className={`absolute -bottom-8 text-xs z-50 left-1/2 -translate-x-1/2 bg-white px-12 py-1 rounded-xl text-slate-900 font-bold border-2 border-slate-900 transition-all duration-300 shadow-[0_8px_0_rgba(0,0,0,0.2)] ${isHovered && !isClicked
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
                    }`}>
                    {/* The Text */}
                    <span className="whitespace-nowrap tracking-tighter text-lg">
                        He heheh....
                    </span>

                    {/* Inverted Tail (Pointing UP) */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-white"></div>

                    {/* Border for the tail */}
                    <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[18px] border-b-slate-900 -z-10"></div>
                </div>
            </div>

            {/* Hero Text */}
            <div className={`text-center space-y-6 px-4 max-w-4xl mx-auto transition-all duration-1000 transform ${isClicked ? 'translate-x-[150vw] opacity-0' : 'translate-x-0'}`}>
                <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 tracking-normal sm:tracking-tight lg:tracking-tighter uppercase animate-pulse leading-none">
                    Welcome hai ji wlecome
                </h1>

                <div className="z-50 relative space-y-4">
                    <p className="text-lg sm:text-xl md:text-xl lg:text-xl text-pink-200 italic font-light leading-relaxed max-w-3xl mx-auto">
                        To Dekhna ye hai ki main kitni bewakoofi ki hain is site main. jaanne ke liye Button par click karen, agar dar lag raha toh zarur click karen.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-cyan-300 font-bold tracking-widest uppercase opacity-80">
                        "Try hovering over the buttons below, they might do something unexpected!"
                    </p>
                </div>
            </div>

            {/* Useless Action Buttons */}
            <div className="relative z-50 mt-12 flex flex-wrap gap-10 justify-center w-full max-w-6xl mx-auto">
                {buttonData.map((btn) => (
                    <div key={btn.id} className="relative flex flex-col items-center">

                        {/* Funny Hover Text Popup */}
                        <div
                            className={`absolute -top-14 whitespace-nowrap px-4 py-2 bg-yellow-300 text-slate-900 text-sm font-black rounded-lg border-4 border-slate-900 transition-all duration-200 shadow-[4px_4px_0_black] z-50 ${hoveredButton === btn.id && !isClicked
                                ? 'opacity-100 -translate-y-2 scale-110'
                                : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
                                }`}
                        >
                            {btn.hoverText}
                        </div>

                        {/* The Alternating Rotating Button */}
                        <button
                            onMouseEnter={() => setHoveredButton(btn.id)}
                            onMouseLeave={() => setHoveredButton(null)}
                            onClick={() => {
                                setIsClicked(true);
                                // Wait 1 second (matching your transition duration) then show the next thing
                                setTimeout(() => {
                                    setShowNext(true);
                                }, 1000);
                            }} // Logic: Trigger the exit sequence
                            className={`
                    /* Sizing & Colors */
                    px-10 py-5 ${btn.color} ${btn.hoverColor} border-2 ${btn.border}
                    text-white font-black uppercase tracking-widest
                    
                    /* Initial Chaotic Rotation */
                    ${btn.rotation} 
                    
                    /* Animations & Interaction */
                    transform transition-all duration-[1000ms] ease-in-out rounded-xl
                    ${btn.shadow} 
                    
                    /* Click Logic: Drop the buttons down */
                    ${isClicked ? 'translate-y-[200vh] rotate-[45deg] opacity-0' : 'translate-y-0'}

                    /* Hover: Disabled if clicked */
                    ${!isClicked ? 'hover:scale-105 hover:skew-x-2' : ''}
                    
                    /* Active: The physical click 'squish' */
                    active:scale-90 active:rotate-0 active:translate-y-2 active:shadow-none
                `}
                        >
                            {btn.label}
                        </button>
                    </div>
                ))}
            </div>

            {/* Chaos Decoration */}
            <div className="fixed z-45 bottom-6 right-6 text-slate-400 text-xs sm:text-sm font-bold opacity-30 hover:opacity-100 transition-opacity cursor-help">
                LETS BEGIN THE GAME OF CLICKS.
            </div>
            {/* The element that appears after everything disappears */}
            {showNext && (<SecondPage />)}
        </div>
    );
};

export default FunnyLanding;

