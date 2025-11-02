'use client';

import React from 'react';
import { DocsLayout, CodeWindow } from '../../../components/docs/docs-layout';
import Container from '../../../components/ui/container';
import { Breadcrumbs } from '../../../components/ui/breadcrumbs';
import { Badge } from '../../../components/ui/badge';

export default function InstallationPage() {
  const prerequisites = `// Prerequisites
Node.js 18+ required
React 18+ or Next.js 13+ recommended`;

  const installNpm = `npm install @tertex/ui`;
  
  const nextjsTailwind = `// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config`;

  const globalsCSS = `// app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}`;

  const componentsJson = `// components.json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}`;

  const utilsTs = `// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`;

  const componentUsage = `// app/page.tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function Page() {
  return (
    <div className="p-8">
      <Card>
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <Button>Get Started</Button>
      </Card>
    </div>
  )
}`;

  const tsconfig = `// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}`;

  const packageJson = `// package.json dependencies
{
  "dependencies": {
    "@tertex/ui": "latest",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "tailwindcss": "^3.4.0",
    "tailwindcss-animate": "^1.0.7",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "framer-motion": "^10.16.0"
  }
}`;

  return (
    <DocsLayout>
      <Container size="sm">
        <div className="px-6 md:px-8 max-w-5xl mx-auto space-y-10">
          <div className="pt-2">
            <Breadcrumbs showHome={false} items={[{ label: 'Docs', href: '/docs' }, { label: 'Installation' }]} />
          </div>

          <header className="space-y-4">
            <div className="flex items-center gap-2">
              <h1 className="text-4xl font-bold tracking-tight">Installation</h1>
              <Badge variant="secondary">Next.js</Badge>
            </div>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Get started by installing the package and setting up your project. Follow the steps below to add Vexel UI to your Next.js application.
            </p>
          </header>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Prerequisites</h2>
              <p className="text-foreground/70">
                Before installing Vexel UI, make sure you have the following:
              </p>
              <ul className="list-disc list-inside space-y-1 text-foreground/70 ml-4">
                <li>Node.js 18.0 or later</li>
                <li>React 18.0 or later</li>
                <li>Next.js 13.0 or later (recommended)</li>
                <li>Tailwind CSS 3.4 or later</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Installation</h2>
              <p className="text-foreground/70">
                Install the Vexel UI package and required dependencies.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">1. Install the package</h3>
                <CodeWindow code={installNpm} filename="bash" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">2. Install peer dependencies</h3>
                <CodeWindow code={`npm install tailwindcss-animate clsx tailwind-merge framer-motion`} filename="bash" />
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Configuration</h2>
              <p className="text-foreground/70">
                Configure Tailwind CSS and set up your project structure.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">1. Configure Tailwind CSS</h3>
                <p className="text-sm text-foreground/60 mb-2">
                  Update your <code className="px-1.5 py-0.5 bg-muted rounded text-xs">tailwind.config.ts</code> file:
                </p>
                <CodeWindow code={nextjsTailwind} filename="tailwind.config.ts" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">2. Add CSS Variables</h3>
                <p className="text-sm text-foreground/60 mb-2">
                  Add the following to your <code className="px-1.5 py-0.5 bg-muted rounded text-xs">app/globals.css</code> file:
                </p>
                <CodeWindow code={globalsCSS} filename="app/globals.css" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">3. Configure TypeScript paths (optional)</h3>
                <p className="text-sm text-foreground/60 mb-2">
                  Update your <code className="px-1.5 py-0.5 bg-muted rounded text-xs">tsconfig.json</code> for path aliases:
                </p>
                <CodeWindow code={tsconfig} filename="tsconfig.json" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">4. Create utility function (optional)</h3>
                <p className="text-sm text-foreground/60 mb-2">
                  Create a <code className="px-1.5 py-0.5 bg-muted rounded text-xs">lib/utils.ts</code> file for className merging:
                </p>
                <CodeWindow code={utilsTs} filename="lib/utils.ts" />
                <p className="text-sm text-foreground/60 mt-2">
                  Don't forget to install: <code className="px-1.5 py-0.5 bg-muted rounded text-xs">npm install clsx tailwind-merge</code>
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Project Structure</h2>
              <p className="text-foreground/70">
                Organize your components in the following structure:
              </p>
            </div>
            <CodeWindow code={`your-project/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── lib/
│   └── utils.ts
├── tailwind.config.ts
└── tsconfig.json`} filename="project structure" />
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Usage</h2>
              <p className="text-foreground/70">
                Import and use components in your application:
              </p>
            </div>
            <CodeWindow code={componentUsage} filename="app/page.tsx" />
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Required Dependencies</h2>
              <p className="text-foreground/70">
                Make sure these packages are installed in your project:
              </p>
            </div>
            <CodeWindow code={packageJson} filename="package.json" />
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Next Steps</h2>
              <p className="text-foreground/70">
                Now that you have Vexel UI installed, you can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                <li>Browse the <a href="/docs/components" className="text-foreground underline">components</a> to see what's available</li>
                <li>Learn about <a href="/docs/theming" className="text-foreground underline">theming</a> and customization</li>
                <li>Set up <a href="/docs/dark-mode" className="text-foreground underline">dark mode</a> for your application</li>
                <li>Check component documentation for usage examples and API references</li>
              </ul>
            </div>
          </section>
        </div>
      </Container>
    </DocsLayout>
  );
}


