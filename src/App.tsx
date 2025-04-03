import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { SplashCursor } from './components/ui/splash-cursor';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <SplashCursor />
        <div className="min-h-screen flex flex-col">
          <header className="py-6 md:py-8 border-b">
            <div className="container flex items-center justify-between">
              <h1 className="text-2xl font-bold">Portfolio</h1>
              <nav className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Home</a>
                <a href="#" className="hover:text-primary transition-colors">Projects</a>
                <a href="#" className="hover:text-primary transition-colors">About</a>
                <a href="#" className="hover:text-primary transition-colors">Contact</a>
              </nav>
            </div>
          </header>
          <main className="flex-1 container py-12">
            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-4">Hello, I'm a Developer</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                This portfolio website features a fluid cursor effect that creates an interactive experience.
                Move your mouse around to see the effect in action!
              </p>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                  View Projects
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-secondary">
                  Contact Me
                </button>
              </div>
            </section>
            
            <section className="mb-16">
              <h3 className="text-2xl font-bold mb-4">About the SplashCursor Component</h3>
              <p className="mb-4">
                The SplashCursor is a WebGL-based fluid simulation that follows your mouse cursor.
                It creates a dynamic visual effect that enhances user interaction with your website.
              </p>
              <p className="mb-4">
                This component is fully customizable with props for simulation resolution, color behavior,
                fluid dynamics parameters, and more. Check out the README for full documentation.
              </p>
            </section>
          </main>
          <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Portfolio. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
