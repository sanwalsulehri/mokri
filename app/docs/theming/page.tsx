'use client';

import React from 'react';
import { DocsLayout, CodeWindow } from '../../../components/docs/docs-layout';
import Container from '../../../components/ui/container';
import { Breadcrumbs } from '../../../components/ui/breadcrumbs';

export default function ThemingPage() {
  const cssVars = `/* globals.css */
:root {
  --background: 255 255 255;
  --foreground: 17 24 39;
  --muted: 243 244 246;
  --border: 229 231 235;
  --primary: 99 102 241;
  --accent: 59 130 246;
}

.dark {
  --background: 10 10 12;
  --foreground: 230 237 243;
  --muted: 20 24 32;
  --border: 35 40 52;
  --primary: 129 140 248;
  --accent: 96 165 250;
}`;

  const tailwindTheme = `// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)'
      }
    }
  }
}`;

  const usage = `// Using theme tokens
<div className="bg-background text-foreground border border-border rounded-lg p-4">
  <h3 className="text-primary font-semibold">Brand heading</h3>
  <button className="mt-3 px-3 py-2 rounded-md bg-accent/10 text-accent border border-accent/30">
    Accent button
  </button>
</div>`;

  return (
    <DocsLayout>
      <Container size="sm">
        <div className="px-6 md:px-8 max-w-5xl mx-auto space-y-10">
          <div className="pt-2">
            <Breadcrumbs showHome={false} items={[{ label: 'Docs', href: '/docs' }, { label: 'Theming' }]} />
          </div>

          <header className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Theming</h1>
            <p className="text-foreground/70">Customize colors using CSS variables and Tailwind extension.</p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Define CSS Variables</h2>
            <CodeWindow code={cssVars} filename="globals.css" />
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Map variables to Tailwind</h2>
            <CodeWindow code={tailwindTheme} filename="tailwind.config.ts" />
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Usage</h2>
            <CodeWindow code={usage} filename="example.tsx" />
          </section>
        </div>
      </Container>
    </DocsLayout>
  );
}


