'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Breadcrumbs } from './ui/breadcrumbs';
import Container from './ui/container';
import Image from 'next/image';

interface FooterProps {
  className?: string;
  showNewsletter?: boolean;
  showSocial?: boolean;
  showBreadcrumbs?: boolean;
  columns?: number;
  containerSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export function Footer({ 
  className = "", 
  showNewsletter = true, 
  showSocial = true, 
  showBreadcrumbs = true, 
  columns = 4,
  containerSize = '2xl'
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    });
    observer.observe(document.documentElement, { attributes: true });
    setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    return () => observer.disconnect();
  }, []);

  return (
    <footer className={`bg-background ${className}`}>
      <Container size={containerSize} className="py-12">
        {/* Main Footer Content - only show if not minimal */}
        {columns > 1 && (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 ${
            columns === 2 ? 'lg:grid-cols-2' : 
            columns === 3 ? 'lg:grid-cols-3' : 
            'lg:grid-cols-4'
          }`}>
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src={isDark ? "/logo_white.png" : "/logo_dark.png"}
                  alt="tertex"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Building beautiful, accessible, and performant user interfaces with modern design principles.
              </p>
              <div className="flex gap-2">
                <Badge>React</Badge>
                <Badge bg={false}>TypeScript</Badge>
                <Badge variant="secondary">Next.js</Badge>
              </div>
            </div>

            {/* Quick Links - only show if we have more than 1 column */}
            {columns > 1 && (
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
                <nav className="space-y-2">
                  <a href="#" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                    Documentation
                  </a>
                  <a href="#" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                    Components
                  </a>
                  <a href="#" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                    Examples
                  </a>
                  <a href="#" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                    Templates
                  </a>
                </nav>
              </div>
            )}

            {/* Resources - only show if we have more than 2 columns */}
            {columns > 2 && (
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground">Resources</h3>
                <nav className="space-y-2">
                  <a href="#" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                    GitHub
                  </a>
                  <a href="#" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                    Discord
                  </a>
                  <a href="#" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                    Blog
                  </a>
                  <a href="#" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                    Support
                  </a>
                </nav>
              </div>
            )}

            {/* Newsletter */}
            {showNewsletter && (
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground">Stay Updated</h3>
                <p className="text-sm text-foreground/70">
                  Get the latest updates and new components delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  />
                  <Button size="sm" className="w-full">Subscribe</Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Breadcrumbs Navigation */}
        {showBreadcrumbs && (
          <div className="pt-6 mb-6">
            <Breadcrumbs 
              items={[
                { label: 'Home' },
                { label: 'Components' },
                { label: 'Footer' }
              ]}
            />
          </div>
        )}

      </Container>

      {/* Bottom Section - Outside Container for full width */}
      <div className="py-6">
        <Container size={containerSize}>
          {/* Minimal footer - centered */}
          {columns === 1 ? (
            <div className="text-center text-sm text-foreground/70">
              Built by <a href="https://github.com" className="underline hover:text-foreground transition-colors">tertex</a> at <a href="https://vercel.com" className="underline hover:text-foreground transition-colors">Vercel</a>. The source code is available on <a href="https://github.com" className="underline hover:text-foreground transition-colors">GitHub</a>.
            </div>
          ) : (
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4 text-sm text-foreground/70">
                <span>© {currentYear} tertex. All rights reserved.</span>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Social Links */}
                {showSocial && (
                  <div className="flex gap-2">
                    <Button bg={false} size="sm" className="p-2">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </Button>
                    <Button bg={false} size="sm" className="p-2">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </Button>
                    <Button bg={false} size="sm" className="p-2">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </Button>
                    <Button bg={false} size="sm" className="p-2">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Button>
                  </div>
                )}

                {/* Full footer with heart */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-foreground/70">Made with</span>
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="text-sm text-foreground/70">by tertex Team</span>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </footer>
  );
}

// Footer presets for different layouts
export const FooterPresets = {
  // Minimal footer
  minimal: {
    showNewsletter: false,
    showSocial: false,
    showBreadcrumbs: false,
    columns: 1
  },

  // Full featured footer
  full: {
    showNewsletter: true,
    showSocial: true,
    showBreadcrumbs: true,
    columns: 4
  },

  // Company footer
  company: {
    showNewsletter: true,
    showSocial: true,
    showBreadcrumbs: false,
    columns: 3
  }
};
