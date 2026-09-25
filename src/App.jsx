import './App.css';
import ToggleTheme from './components/ToggleTheme';

function App() {
  return (
  <>
    {/*  Background Particle Animation Canvas  */}
  <div className="bg-mesh-container" id="particleContainer">
    <div className="glow-blob blob-cyan"></div>
    <div className="glow-blob blob-magenta"></div>
    <div className="glow-blob blob-purple"></div>
  </div>

  <main className="w-full max-w-lg p-4 sm:p-6 my-auto relative z-10">
    <div className="glass-card p-6 sm:p-8 flex flex-col items-center">
      
      {/*  Top Header & Theme Switcher  */}
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
       
        {/*  Toggle Theme(Dark/Light)*/}
        <ToggleTheme />
        
      </div>

      <div className="dial-wrapper my-2">
        <div className="ring-outer-glow" id="outerRing"></div>
        <div className="ring-dashed-tracker" id="dashedRing"></div>
        
        <div className="dial-body">
          <div className="text-center px-4">
            {/* <!-- Main HH:MM:SS Time Display --> */}
            <div className="time-digits text-3xl sm:text-4xl md:text-5xl" id="timeDisplay">
              00:00:00
            </div>
            {/* <!-- Milliseconds Display --> */}
            <div className="ms-digits text-xl sm:text-2xl mt-1 tracking-widest" id="msDisplay">
              .000
            </div>
            {/* <!-- Status Label --> */}
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400" id="statusIndicator"></span>
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-300" id="statusText">READY</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-3 gap-3 sm:gap-4 mt-8">
        {/* <!-- Start / Pause Button --> */}
        <button id="startBtn" className="btn-neon btn-start py-3.5 px-3 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-bold">
          <i className="fa-solid fa-play text-base" id="startIcon"></i>
          <span id="startText">START</span>
        </button>

        {/* <!-- Stop Button --> */}
        <button id="stopBtn" disabled className="btn-neon btn-stop py-3.5 px-3 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-bold">
          <i className="fa-solid fa-square text-base"></i>
          <span>STOP</span>
        </button>

        {/* <!-- Reset Button --> */}
        <button id="resetBtn" disabled className="btn-neon btn-reset py-3.5 px-3 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-bold">
          <i className="fa-solid fa-rotate-right text-base"></i>
          <span>RESET</span>
        </button>
      </div>

      <div className="w-full mt-6">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs font-bold tracking-wider text-purple-950 dark:text-slate-400 uppercase flex items-center gap-1.5">
            <i className="fa-solid fa-flag text-purple-700 dark:text-fuchsia-400"></i> Lap Records
          </span>
          
        </div>

       
      </div>

    </div>
  </main>
  </>
  );
}

export default App;
