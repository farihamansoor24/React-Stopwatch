import './App.css';
import { useState, useEffect } from 'react';
import ToggleTheme from './components/ToggleTheme';

function App() {
  const [millisecond, setMillisecond] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // 1. Milliseconds Timer Loop
  useEffect(() => {
    let msInterval = null;

    if (isRunning) {
      msInterval = setInterval(() => {
        setMillisecond((prev) => {
          if (prev >= 99) {
            setSeconds((c) => c + 1);
            return 0;
          }
          return prev + 1;
        });
      }, 10);
    }

    return () => clearInterval(msInterval);
  }, [isRunning]);

  // When seconds change
  useEffect(() => {
    if (seconds >= 60) {
      setMinutes((prev) => prev + 1);
      setSeconds(0);
    }
  }, [seconds]);

  // When minutes change
  useEffect(() => {
    if (minutes >= 60) {
      setHours((prev) => prev + 1);
      setMinutes(0);
    }
  }, [minutes]);

  // Reset Function
  const handleReset = () => {
    setIsRunning(false);
    setMillisecond(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  // Check if timer has started/has non-zero values
  const hasStarted = hours > 0 || minutes > 0 || seconds > 0 || millisecond > 0;

  // Leading zeros format
  const format = (num) => String(num).padStart(2, '0');

  return (
    <>
      {/* Background Particle Animation Canvas */}
      <div className="bg-mesh-container" id="particleContainer">
        <div className="glow-blob blob-cyan"></div>
        <div className="glow-blob blob-magenta"></div>
        <div className="glow-blob blob-purple"></div>
      </div>

      <main className="w-full max-w-lg p-4 sm:p-6 my-auto relative z-10">
        <div className="glass-card p-6 sm:p-8 flex flex-col items-center">
          
          {/* Top Header & Theme Switcher */}
          <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-purple-300/40 dark:border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-amber-500 dark:from-cyan-500 dark:to-fuchsia-500 p-[2px] flex items-center justify-center shadow-lg shadow-purple-900/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <i className="fa-solid fa-bolt text-amber-400 dark:text-cyan-400 text-lg"></i>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-extrabold tracking-wider text-purple-950 dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:via-fuchsia-400 dark:to-amber-300 dark:bg-clip-text">
                  AURAPULSE
                </h1>
                <p className="text-xs text-purple-900/80 dark:text-slate-400 font-medium">Precision Digital Timer</p>
              </div>
            </div>
            
            {/* Toggle Theme(Dark/Light) */}
            <ToggleTheme />
          </div>

          <div className="dial-wrapper my-2">
            <div className="ring-outer-glow" id="outerRing"></div>
            <div className="ring-dashed-tracker" id="dashedRing"></div>
            
            <div className="dial-body">
              <div className="text-center px-4">
                {/* Main HH:MM:SS Time Display */}
                <div className="time-digits text-3xl sm:text-4xl md:text-5xl" id="timeDisplay">
                  {format(hours)}:{format(minutes)}:{format(seconds)}
                </div>
                {/* Milliseconds Display */}
                <div className="ms-digits text-xl sm:text-2xl mt-1 tracking-widest" id="msDisplay">
                  .{format(millisecond)}
                </div>
                {/* Status Label */}
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${isRunning ? 'bg-emerald-400 animate-pulse' : 'bg-slate-400'}`}></span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-slate-300">
                    {isRunning ? 'RUNNING' : hasStarted ? 'PAUSED' : 'READY'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-3 gap-3 sm:gap-4 mt-8">
            {/* Start Button */}
            <button 
              id="startBtn" 
              disabled={isRunning}
              className={`btn-neon btn-start py-3.5 px-3 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-bold ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`} 
              onClick={() => setIsRunning(true)}
            >
              <i className="fa-solid fa-play text-base"></i>
              <span>START</span>
            </button>

            {/* Stop Button */}
            <button 
              id="stopBtn" 
              disabled={!isRunning} 
              className={`btn-neon btn-stop py-3.5 px-3 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-bold ${!isRunning ? 'opacity-50 cursor-not-allowed' : ''}`} 
              onClick={() => setIsRunning(false)}
            >
              <i className="fa-solid fa-square text-base"></i>
              <span>STOP</span>
            </button>

            {/* Reset Button */}
            <button 
              id="resetBtn" 
              disabled={!hasStarted && !isRunning} 
              className={`btn-neon btn-reset py-3.5 px-3 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-bold ${(!hasStarted && !isRunning) ? 'opacity-50 cursor-not-allowed' : ''}`} 
              onClick={handleReset}
            >
              <i className="fa-solid fa-rotate-right text-base"></i>
              <span>RESET</span>
            </button>
          </div>


        </div>
      </main>
    </>
  );
}

export default App;