"use client";

import { Button } from "@/components/ui/button";
import { Github, Code, Shield, Database, Zap } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function LoginPage() {
  const handleGitHubLogin = () => {
    // TODO: Implement GitHub OAuth
    console.log("GitHub login clicked");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">GitNote</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Github className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Welcome to GitNote</h1>
            <p className="text-muted-foreground">
              Sign in with your GitHub account to get started
            </p>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 border">
            <Button 
              onClick={handleGitHubLogin}
              className="w-full" 
              size="lg"
            >
              <Github className="w-5 h-5 mr-2" />
              Sign in with GitHub
            </Button>

            <div className="mt-6 space-y-4">
              <div className="text-sm text-muted-foreground">
                <p className="font-medium mb-2">Why GitHub?</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-green-600" />
                    <span>Secure authentication</span>
                  </li>
                  <li className="flex items-center">
                    <Database className="w-4 h-4 mr-2 text-blue-600" />
                    <span>Your data stays in your repositories</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-yellow-600" />
                    <span>No additional passwords to remember</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center space-y-4">
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">What happens when you sign in:</p>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-start space-x-3 text-left">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Connect to GitHub</p>
                    <p className="text-xs text-muted-foreground">
                      We&apos;ll securely connect to your GitHub account
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 text-left">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Create GitNote Repository</p>
                    <p className="text-xs text-muted-foreground">
                      A private repository will be created for your notes
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 text-left">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Start Taking Notes</p>
                    <p className="text-xs text-muted-foreground">
                      Begin creating beautiful markdown notes with code support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="mt-8 p-4 bg-muted/20 rounded-lg border">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium">Your privacy matters</p>
                <p className="text-muted-foreground mt-1">
                  GitNote only accesses repositories you explicitly grant permission to. 
                  Your notes remain in your GitHub account under your full control.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 text-center text-sm text-muted-foreground space-x-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/help" className="hover:text-foreground transition-colors">
              Help
            </Link>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full opacity-5">
          <div className="w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full opacity-5">
          <div className="w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
