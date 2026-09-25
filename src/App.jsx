import './App.css';

function App() {
  return (
  <>
    {/*  Background Particle Animation Canvas  */}
  <div class="bg-mesh-container" id="particleContainer">
    <div class="glow-blob blob-cyan"></div>
    <div class="glow-blob blob-magenta"></div>
    <div class="glow-blob blob-purple"></div>
  </div>

  <main class="w-full max-w-lg p-4 sm:p-6 my-auto relative z-10">
    <div class="glass-card p-6 sm:p-8 flex flex-col items-center">
      
      {/*  Top Header & Theme Switcher  */}
      <div class="w-full flex items-center justify-between mb-8 pb-4 border-b border-purple-300/40 dark:border-slate-800/80">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-amber-500 dark:from-cyan-500 dark:to-fuchsia-500 p-[2px] flex items-center justify-center shadow-lg shadow-purple-900/20">
            <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <i class="fa-solid fa-bolt text-amber-400 dark:text-cyan-400 text-lg"></i>
            </div>
          </div>
          <div>
            <h1 class="text-xl font-extrabold tracking-wider text-purple-950 dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:via-fuchsia-400 dark:to-amber-300 dark:bg-clip-text" style="font-family: var(--font-digital);">
              CHRONO<span class="text-xs text-purple-700 dark:text-cyan-400 ml-1 px-1.5 py-0.5 rounded border border-purple-400/50 dark:border-cyan-400/40">NEON</span>
            </h1>
            <p class="text-xs text-purple-900/80 dark:text-slate-400 font-medium">Precision Digital Timer</p>
          </div>
        </div>

        {/*  High-Contrast Theme Toggle */}
        <button id="themeToggleBtn" aria-label="Toggle Theme" class="relative group p-2.5 rounded-2xl bg-amber-100/60 dark:bg-slate-900/80 border border-purple-300/80 dark:border-slate-700/60 hover:border-purple-600 dark:hover:border-cyan-400 transition-all duration-300 shadow-md">
          <div class="flex items-center gap-2 text-xs font-bold text-purple-950 dark:text-slate-300 group-hover:text-purple-700 dark:group-hover:text-cyan-300">
            <i class="fa-solid fa-palette text-purple-700 dark:text-fuchsia-400 text-sm"></i>
            <span class="hidden sm:inline">Theme</span>
          </div>
        </button>
      </div>

      <div class="dial-wrapper my-2">
        <div class="ring-outer-glow" id="outerRing"></div>
        <div class="ring-dashed-tracker" id="dashedRing"></div>
        
        <div class="dial-body">
          <div class="text-center px-4">
            {/* <!-- Main HH:MM:SS Time Display --> */}
            <div class="time-digits text-3xl sm:text-4xl md:text-5xl" id="timeDisplay">
              00:00:00
            </div>
            {/* <!-- Milliseconds Display --> */}
            <div class="ms-digits text-xl sm:text-2xl mt-1 tracking-widest" id="msDisplay">
              .000
            </div>
            {/* <!-- Status Label --> */}
            <div class="mt-3 flex items-center justify-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-slate-400" id="statusIndicator"></span>
              <span class="text-xs font-semibold tracking-widest uppercase text-slate-300" id="statusText">READY</span>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full grid grid-cols-3 gap-3 sm:gap-4 mt-8">
        <!-- Start / Pause Button -->
        <button id="startBtn" class="btn-neon btn-start py-3.5 px-3 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-bold">
          <i class="fa-solid fa-play text-base" id="startIcon"></i>
          <span id="startText">START</span>
        </button>

        <!-- Stop Button -->
        <button id="stopBtn" disabled class="btn-neon btn-stop py-3.5 px-3 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-bold">
          <i class="fa-solid fa-square text-base"></i>
          <span>STOP</span>
        </button>

        <!-- Reset Button -->
        <button id="resetBtn" disabled class="btn-neon btn-reset py-3.5 px-3 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-bold">
          <i class="fa-solid fa-rotate-right text-base"></i>
          <span>RESET</span>
        </button>
      </div>

      <div class="w-full mt-6">
        <div class="flex items-center justify-between mb-3 px-1">
          <span class="text-xs font-bold tracking-wider text-purple-950 dark:text-slate-400 uppercase flex items-center gap-1.5">
            <i class="fa-solid fa-flag text-purple-700 dark:text-fuchsia-400"></i> Lap Records
          </span>
          <button id="lapBtn" disabled class="text-xs font-bold text-purple-900 dark:text-cyan-400 hover:text-purple-950 dark:hover:text-cyan-300 disabled:opacity-30 transition-colors flex items-center gap-1 bg-amber-200/60 dark:bg-cyan-950/40 px-2.5 py-1 rounded-lg border border-purple-400/40 dark:border-cyan-500/30">
            <i class="fa-solid fa-plus text-[10px]"></i> LAP
          </button>
        </div>

        <div class="w-full h-32 overflow-y-auto custom-scrollbar rounded-xl bg-amber-100/50 dark:bg-black/40 border border-purple-200/80 dark:border-slate-800/80 p-2 text-xs" id="lapContainer">
          <div class="h-full flex items-center justify-center text-purple-900/60 dark:text-slate-600 italic" id="emptyLapText">
            No laps recorded yet
          </div>
          <ul id="lapList" class="space-y-1.5 hidden"></ul>
        </div>
      </div>

    </div>
  </main>
  </>
  );
}

export default App;
