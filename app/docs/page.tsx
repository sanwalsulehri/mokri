'use client';

import React from 'react';
import { DocsLayout, CodeWindow } from '../../components/docs/docs-layout';
import Container from '../../components/ui/container';
import { Breadcrumbs } from '../../components/ui/breadcrumbs';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

export default function IntroductionPage() {
  const quickInstall = `npm install @tertex/ui`;

  return (
    <DocsLayout>
      <Container size="sm">
        <div className="px-6 md:px-8 max-w-5xl mx-auto space-y-10">
          <div className="pt-2">
            <Breadcrumbs showHome={false} items={[{ label: 'Docs', href: '/docs' }, { label: 'Introduction' }]} />
          </div>

          <header className="space-y-4">
            <div className="flex items-center gap-2">
              <h1 className="text-4xl font-bold tracking-tight">Introduction</h1>
              <Badge variant="secondary">Get Started</Badge>
            </div>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Vexel UI is a collection of beautifully designed, accessible, and customizable React components 
              built with TypeScript and Tailwind CSS. Start building modern user interfaces faster.
            </p>
          </header>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">What is Vexel UI?</h2>
              <p className="text-foreground/70">
                Vexel UI is a component library that provides you with copy-and-paste React components built using 
                Tailwind CSS. Unlike traditional component libraries, you have full control over the source code. 
                This means you can customize every component to match your design system perfectly.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Quick Start</h2>
              <p className="text-foreground/70">
                Get started in minutes. Install the package and start using components right away.
              </p>
            </div>
            <CodeWindow code={quickInstall} filename="bash" />
            <div className="flex gap-3">
              <Button asChild>
                <a href="/docs/installation">Installation Guide</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/docs/components">Browse Components</a>
              </Button>
            </div>
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Features</h2>
              <p className="text-foreground/70">
                Vexel UI is built with modern web standards and best practices in mind.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 p-4 border border-border rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  <h3 className="font-semibold">Fully Customizable</h3>
                </div>
                <p className="text-sm text-foreground/70">
                  Every component is built with customization in mind. Modify styles, add features, or create variants 
                  to match your design system perfectly.
                </p>
              </div>
              <div className="space-y-2 p-4 border border-border rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">♿</span>
                  <h3 className="font-semibold">Accessible</h3>
                </div>
                <p className="text-sm text-foreground/70">
                  Built with accessibility best practices. All components follow WAI-ARIA guidelines and work with 
                  screen readers and keyboard navigation.
                </p>
              </div>
              <div className="space-y-2 p-4 border border-border rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌙</span>
                  <h3 className="font-semibold">Dark Mode</h3>
                </div>
                <p className="text-sm text-foreground/70">
                  Full dark mode support out of the box. All components automatically adapt to light and dark themes 
                  using CSS variables.
                </p>
              </div>
              <div className="space-y-2 p-4 border border-border rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔧</span>
                  <h3 className="font-semibold">TypeScript</h3>
                </div>
                <p className="text-sm text-foreground/70">
                  Full TypeScript support with comprehensive type definitions. Enjoy type safety and better developer 
                  experience with autocomplete and IntelliSense.
                </p>
              </div>
              <div className="space-y-2 p-4 border border-border rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📱</span>
                  <h3 className="font-semibold">Responsive</h3>
                </div>
                <p className="text-sm text-foreground/70">
                  Mobile-first design that works seamlessly across all device sizes. All components are built with 
                  responsive breakpoints in mind.
                </p>
              </div>
              <div className="space-y-2 p-4 border border-border rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <h3 className="font-semibold">Performance</h3>
                </div>
                <p className="text-sm text-foreground/70">
                  Optimized for performance with minimal bundle size. Components are tree-shakeable and only include 
                  what you use.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">How it Works</h2>
              <p className="text-foreground/70">
                Vexel UI components are installed as source code into your project, giving you complete control.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-medium">Install the package</h3>
                  <p className="text-sm text-foreground/70">
                    Add Vexel UI to your project using npm. This installs the component source code and required dependencies.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-medium">Configure Tailwind</h3>
                  <p className="text-sm text-foreground/70">
                    Set up Tailwind CSS with the required configuration. Add CSS variables for theming support.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-medium">Start Building</h3>
                  <p className="text-sm text-foreground/70">
                    Import and use components in your application. Customize them to match your design system.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Next Steps</h2>
              <p className="text-foreground/70">
                Ready to get started? Follow these steps to set up Vexel UI in your project.
              </p>
            </div>
            <div className="space-y-3">
              <div className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <a href="/docs/installation" className="block">
                  <h3 className="font-semibold mb-1">Installation →</h3>
                  <p className="text-sm text-foreground/70">
                    Learn how to install and configure Vexel UI in your Next.js project.
                  </p>
                </a>
              </div>
              <div className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <a href="/docs/theming" className="block">
                  <h3 className="font-semibold mb-1">Theming →</h3>
                  <p className="text-sm text-foreground/70">
                    Customize colors and styling using CSS variables and Tailwind CSS.
                  </p>
                </a>
              </div>
              <div className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <a href="/docs/components" className="block">
                  <h3 className="font-semibold mb-1">Components →</h3>
                  <p className="text-sm text-foreground/70">
                    Browse our collection of components and see usage examples.
                  </p>
                </a>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </DocsLayout>
  );
}
