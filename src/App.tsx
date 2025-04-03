import { ThemeProvider } from "next-themes";
import { SplashCursor } from "@/components/ui/splash-cursor";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SplashCursor />
      <div className="min-h-screen flex flex-col">
        <header className="py-6 bg-primary/10">
          <div className="container">
            <h1 className="text-2xl font-bold">Fluid Cursor Demo</h1>
          </div>
        </header>
        <main className="flex-1">
          <div className="container py-12">
            <h2 className="text-4xl font-bold mb-6">Interactive Fluid Cursor Demo</h2>
            <p className="text-xl mb-8">Move your mouse or touch the screen to see the fluid cursor effect in action.</p>
            <p className="mb-4">This is a WebGL-based fluid simulation that follows your cursor movements.</p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Ankit-cloud12/portfolio" 
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Portfolio Demo. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/Ankit-cloud12" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
