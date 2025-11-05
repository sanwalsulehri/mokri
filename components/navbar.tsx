'use client';

import { ThemeToggle } from './ui/theme-toggle';
import { Button } from './ui/button';
import { IconButton } from './ui/icon-button';
import Container from './ui/container';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Drawer } from './ui/drawer';
import Link from 'next/link';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const isDocs = pathname?.startsWith('/');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    });
    observer.observe(document.documentElement, { attributes: true });
    setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <nav className="w-full bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-[999999]">
      <Container size={isDocs ? "3xl" : "2xl"} padding="lg">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link href="/" aria-label="Go to home">
              <Image
                src={isDark ? "/logo_white.png" : "/logo_dark.png"}
                alt="mokri"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <Button bg={false} size="sm" className="text-sm font-medium">
                <Link href="/docs">Docs</Link>
              </Button>
              <Button bg={false} size="sm" className="text-sm font-medium">
                <Link href="/docs/components/button">Components</Link>
              </Button>
              <Button bg={false} size="sm" className="text-sm font-medium">
                <Link href="/docs/theming">Theme</Link>
              </Button>
              <Button bg={false} size="sm" className="text-sm font-medium">
                <Link href="/colors">Colors</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Social icons and theme toggle */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Social Icons */}
            <IconButton href="https://github.com/sanwalsulehri/mokri" size="sm" aria-label="GitHub">
              <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </IconButton>
            <IconButton size="sm" aria-label="X" href="https://x.com/Mosulehri">
              <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zM17.083 19.77h1.833L7.084 4.126H5.117z"/>
              </svg>
            </IconButton>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <IconButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </IconButton>
          </div>
        </div>

        {/* Mobile Navigation - Drawer */}
        <Drawer 
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          title="Menu"
          position="right"
          size="md"
        >
          <div className="space-y-2">
            <Button bg={false} size="sm" className="w-full justify-start text-xl font-medium px-4 py-4">
              <Link href="/docs">Docs</Link>
            </Button>
            <Button bg={false} size="sm" className="w-full justify-start text-xl font-medium px-4 py-4">
              <Link href="/docs/components/button">Components</Link>
            </Button>
            <Button bg={false} size="sm" className="w-full justify-start text-xl font-medium px-4 py-4">
              <Link href="/docs/theming">Theme</Link>
            </Button>
            <Button bg={false} size="sm" className="w-full justify-start text-xl font-medium px-4 py-4">
              <Link href="/colors">Colors</Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-4 pt-8 border-t border-foreground/10">
            <IconButton size="sm" aria-label="GitHub" href="https://github.com/sanwalsulehri/mokri">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </IconButton>
            <IconButton size="sm" aria-label="X" href="https://x.com/Mosulehri">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zM17.083 19.77h1.833L7.084 4.126H5.117z"/>
              </svg>
            </IconButton>
          </div>
        </Drawer>
      </Container>
    </nav>
    {/* Spacer to offset fixed navbar height */}
    <div className="h-16" />
    </>
  );
}
