'use client';

import React from 'react';
import { DocsLayout, ComponentDemo } from '../../components/docs/docs-layout';
import Container from '../../components/ui/container';

export default function DocsPage() {
  return (
    <DocsLayout>
      <Container size="2xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">tertex UI</h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              A collection of reusable components built with React, TypeScript, and Tailwind CSS. 
              Copy, paste, and customize to your heart's content.
            </p>
          </div>

          {/* Quick Start */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Quick Start</h2>
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Installation</h3>
              <pre className="bg-background rounded-md p-4 overflow-x-auto text-sm">
                <code>npm install @tertex/ui</code>
              </pre>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">🎨 Customizable</h3>
                <p className="text-sm text-foreground/70">Every component is built with customization in mind.</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">📱 Responsive</h3>
                <p className="text-sm text-foreground/70">Mobile-first design that works on all devices.</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">♿ Accessible</h3>
                <p className="text-sm text-foreground/70">Built with accessibility best practices.</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">🌙 Dark Mode</h3>
                <p className="text-sm text-foreground/70">Full dark mode support out of the box.</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">⚡ Fast</h3>
                <p className="text-sm text-foreground/70">Optimized for performance and bundle size.</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">🔧 TypeScript</h3>
                <p className="text-sm text-foreground/70">Full TypeScript support with type safety.</p>
              </div>
            </div>
          </div>

          {/* Components Preview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Components</h2>
            <p className="text-foreground/70">
              Explore our collection of components. Each component is carefully crafted and documented.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Button', 'Card', 'Badge', 'Input', 'Switch', 'Checkbox', 'Radio', 'Avatar', 'Slider', 'MagicCard'].map((name) => (
                <a
                  key={name}
                  href={`/docs/components/${name.toLowerCase()}`}
                  className="bg-muted/50 rounded-lg p-4 hover:bg-muted transition-colors"
                >
                  <h3 className="font-semibold">{name}</h3>
                  <p className="text-sm text-foreground/70 mt-1">View component</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </DocsLayout>
  );
}
