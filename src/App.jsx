import React, { useEffect, useRef, useState } from 'react';
import FunnyLanding from './pages/FunnyLanding';

const App = () => {
  const canvasRef = useRef(null);
  const [chapter, setChapter] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [flash, setFlash] = useState(false);

  // --- Rain Logic ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const drops = Array.from({ length: 120 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      l: Math.random() * 20 + 10,
      v: Math.random() * 5 + 4,
      a: Math.random() * 0.3 + 0.1
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      drops.forEach(d => {
        ctx.strokeStyle = `rgba(220, 235, 255, ${d.a})`;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.l);
        ctx.stroke();
        d.y += d.v;
        if (d.y > h) { d.y = -d.l; d.x = Math.random() * w; }
      });
      requestAnimationFrame(render);
    };
    render();

    // Random Lightning Flash
    const flashInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        setFlash(true);
        setTimeout(() => setFlash(false), 150);
      }
    }, 4000);

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(flashInterval);
    };
  }, []);

  const stories = [
    { title: "The Gilded Mist", text: "Look... even the darkest clouds can't hide the light forever. It finds its way through the cracks.", btn: "Follow the Light" },
    { title: "A Golden Promise", text: "The rain hasn't stopped, but the world feels warmer now. Can you feel the sun on your face?", btn: "Reach Out" },
    { title: "Beyond the Storm", text: "We stood through the rain together. Now, we walk in the gold.", btn: null }
  ];

  const nextChapter = () => {
    setIsFading(true);
    setTimeout(() => {
      setChapter(prev => Math.min(prev + 1, stories.length - 1));
      setIsFading(false);
    }, 800);
  };

  return (
    <div className={`relative w-full h-screen overflow-y-scroll overflow-x-hidden transition-colors duration-150 ${flash ? 'bg-slate-700' : 'bg-[#161a2b]'}`}>

      {/* ☀️ Sunlight Scattering */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] animate-[spin_120s_linear_infinite] opacity-40">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-full h-[100px] bg-gradient-to-r from-yellow-100/20 via-transparent to-transparent blur-[100px] origin-left"
              style={{ transform: `rotate(${i * 36}deg) translateY(-50%)` }}
            />
          ))}
        </div>
      </div>

      {/* ⛰️ Distant Mountain */}
      <div className="absolute bottom-0 w-full h-[60%] z-10 opacity-20">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full">
          <path fill="#4b5563" d="M0,224L200,100L400,250L600,120L850,220L1100,80L1440,240L1440,320L0,320Z"></path>
        </svg>
      </div>

      {/* ⛰️ Foreground Mountain */}
      <div className="absolute bottom-0 w-full h-[45%] z-20">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full">
          <path fill="#0f172a" d="M0,192L300,260L600,140L900,280L1200,180L1440,240L1440,320L0,320Z"></path>
        </svg>
      </div>

      {/* 🌧️ Rain Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-30 pointer-events-none" />

      {/* 🌫️ Atmosphere Mist */}
      <div className="absolute inset-0 z-40 bg-gradient-to-t from-[#0f172a] via-transparent to-black/20 pointer-events-none" />
      {/* 🌫️ The "Mist Portal" (Replacing Glassmorphism) */}

      <FunnyLanding />


    </div>
  );
};

export default App;
