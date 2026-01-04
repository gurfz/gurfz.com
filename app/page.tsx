import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white overflow-hidden relative">
      {/* Subtle cyberpunk background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-cyan-900/20 pointer-events-none" />
      
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-32 max-w-4xl gap-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
          GURFZ
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
          Built different. Glitch the ordinary.<br />
          The future doesn't follow rules.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <a
            href="mailto:gurfz@gurfz.com"
            className="px-8 py-4 text-lg font-medium bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all shadow-lg shadow-purple-500/30"
          >
            Say Hello
          </a>
          <a
            href="#"
            className="px-8 py-4 text-lg font-medium border border-cyan-500 rounded-full hover:bg-cyan-500/10 transition-all"
          >
            Coming Soon
          </a>
        </div>
        
        <footer className="absolute bottom-8 text-zinc-600 text-sm">
          © 2026 Gurfz • gurfz@gurfz.com
        </footer>
      </main>
    </div>
  );
}