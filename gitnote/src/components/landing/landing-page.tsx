"use client";

import { Button } from "@/components/ui/button";
import { 
  Github, 
  Code, 
  CheckSquare, 
  GitBranch, 
  Monitor, 
  Smartphone, 
  Tablet,
  Star,
  Zap
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">GitNote</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
              Demo
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            GitNote
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Your Code-Focused Note-Taking Companion
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Perfect for students and developers. Take notes, manage tasks, and store everything 
            in your GitHub repository with beautiful markdown support and code syntax highlighting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/login">
              <Button size="lg" className="w-full sm:w-auto">
                <Github className="w-5 h-5 mr-2" />
                Start Taking Notes
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Monitor className="w-5 h-5 mr-2" />
              View Demo
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto max-w-4xl">
            <div className="bg-muted/20 rounded-lg border p-8">
              <div className="bg-background rounded border shadow-sm">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-muted-foreground">my-notes.md</div>
                  <div className="w-16"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-4 border-r">
                    <div className="text-left space-y-2 font-mono text-sm">
                      <div className="text-blue-600"># React Hooks Notes</div>
                      <div></div>
                      <div>## useState Hook</div>
                      <div></div>
                      <div className="text-gray-600">```javascript</div>
                      <div className="text-purple-600">const</div>
                      <div className="pl-4">[count, setCount] = useState(0);</div>
                      <div className="text-gray-600">```</div>
                      <div></div>
                      <div className="text-green-600">- [x] Learn useState</div>
                      <div className="text-green-600">- [ ] Learn useEffect</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-left space-y-3">
                      <h3 className="text-xl font-bold">React Hooks Notes</h3>
                      <h4 className="text-lg font-semibold">useState Hook</h4>
                      <div className="bg-muted p-3 rounded font-mono text-sm">
                        <span className="text-purple-600">const</span> [count, setCount] = useState(0);
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <CheckSquare className="w-4 h-4 text-green-600" />
                          <span className="text-sm line-through text-muted-foreground">Learn useState</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border rounded"></div>
                          <span className="text-sm">Learn useEffect</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GitNote?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built specifically for developers and coding students with powerful features 
              that make note-taking a breeze.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Github className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub Integration</h3>
              <p className="text-muted-foreground">
                Store notes directly in your GitHub repository. Your data stays in your control 
                with full version history and backup.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Code Syntax Highlighting</h3>
              <p className="text-muted-foreground">
                Perfect for coding notes with syntax highlighting for 100+ programming languages. 
                Write beautiful documentation with ease.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Task Management</h3>
              <p className="text-muted-foreground">
                Built-in task tracking with markdown checkboxes. Organize your learning goals 
                and track your progress seamlessly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg p-6 border">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold">Lightning Fast</h3>
              </div>
              <p className="text-muted-foreground">
                Built with modern web technologies for instant loading and real-time sync. 
                No waiting, just pure productivity.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 border">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold">Developer Friendly</h3>
              </div>
              <p className="text-muted-foreground">
                Keyboard shortcuts, markdown support, and a clean interface designed 
                by developers for developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes with our simple four-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Connect GitHub</h3>
              <p className="text-muted-foreground">
                Sign in with your GitHub account. We&apos;ll create a secure repository for your notes.
              </p>
              <div className="mt-4">
                <Github className="w-8 h-8 text-muted-foreground mx-auto" />
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Create Notes & Tasks</h3>
              <p className="text-muted-foreground">
                Write beautiful markdown notes with code blocks and manage your tasks effortlessly.
              </p>
              <div className="mt-4">
                <Code className="w-8 h-8 text-muted-foreground mx-auto" />
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Auto-sync to Repository</h3>
              <p className="text-muted-foreground">
                Everything saves automatically to your GitHub repository with full version control.
              </p>
              <div className="mt-4">
                <GitBranch className="w-8 h-8 text-muted-foreground mx-auto" />
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Access Anywhere</h3>
              <p className="text-muted-foreground">
                Your notes are available on any device, anywhere you have internet access.
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <Monitor className="w-6 h-6 text-muted-foreground" />
                <Tablet className="w-6 h-6 text-muted-foreground" />
                <Smartphone className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Note-Taking?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of developers and students who have revolutionized their 
            learning and documentation workflow with GitNote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <Github className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">GitNote</span>
              </div>
              <p className="text-muted-foreground">
                The perfect note-taking app for developers and coding students.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a></li>
                <li><a href="#demo" className="hover:text-foreground transition-colors">Demo</a></li>
                <li><a href="/pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/docs" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="/help" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="/status" className="hover:text-foreground transition-colors">Status</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="/blog" className="hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 GitNote. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="https://github.com/gitnote" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/gitnote" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
