"use client";

import React from "react";
import { DocsLayout, CodeWindow } from "../../../components/docs/docs-layout";
import Container from "../../../components/ui/container";
import { Breadcrumbs } from "../../../components/ui/breadcrumbs";
import { Badge } from "../../../components/ui/badge";

export default function InstallationPage() {
  const prerequisites = `// Prerequisites
Node.js 18+ required
React 18+ or Next.js 13+ recommended
Tailwind CSS v4.1.0 or later (required)`;

  const installNpm = `npm install mokri-ui`;

  const installDeps = `npm install tailwindcss@^4.1.0 @tailwindcss/postcss@^4.1.16 tailwindcss-animate@^1.0.7 clsx@^2.1.1 tailwind-merge@^3.3.1 framer-motion@^12.23.24 react-slick@^0.31.0 slick-carousel@^1.8.1`;

  const postcssConfig = `// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;`;

  const globalsCSS = `// app/globals.css
@import "tailwindcss";
@plugin "tailwindcss-animate";
@import "mokri-ui/tailwind.css"; // NEW: auto-scan mokri-ui, no @source needed

/* CSS variables for theming */
:root {
  --background: #ffffff;
  --foreground: #171717;
  --secondary: #262626;
  --destructive: #9E4042;
  --muted: #F3F4F6;
  --border: #E5E5E5;
  --focusborder: #c2bfbf;
  --ring: #cbd5e1;
  --accent: #f1f5f9;
  --glow: rgba(0, 0, 0, 0.1);
}

[data-theme="light"] {
  --background: #ffffff;
  --foreground: #171717;
  --secondary: #E5E5E5;
  --destructive: #9E4042;
  --muted: #f5f6f7;
  --border: #E5E5E5;
  --focusborder: #c2bfbf;
  --ring: #e1e2e2;
  --accent: #f1f5f9;
  --glow: rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
  --background: #0A0A0A;
  --foreground: #E5E5E5;
  --secondary: #262626;
  --destructive: #9E4042;
  --muted: #1e1e1e;
  --border: #262626;
  --focusborder: #252525;
  --ring: #3d3e3f;
  --accent: #1e293b;
  --glow: rgba(255, 255, 255, 0.1);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-secondary: var(--secondary);
  --color-destructive: var(--destructive);
  --color-muted: var(--muted);
  --color-border: var(--border);
  --color-focusborder: var(--focusborder);
  --color-ring: var(--ring);
  --color-accent: var(--accent);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Prevent horizontal overflow on mobile */
html, body {
  max-width: 100%;
  overflow-x: hidden;
}

/* Make media naturally responsive */
img, video, canvas, svg {
  max-width: 100%;
  height: auto;
}`;

  const utilsTs = `// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`;

  const componentUsage = `// app/page.tsx
import { Button } from 'mokri-ui'
import { Card } from 'mokri-ui'

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
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}`;

  const packageJson = `// package.json dependencies
{
  "dependencies": {
    "mokri-ui": "latest",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwindcss": "^4.1.0",
    "@tailwindcss/postcss": "^4.1.16",
    "tailwindcss-animate": "^1.0.7",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.3.1",
    "framer-motion": "^12.23.24",
    "react-slick": "^0.31.0",
    "slick-carousel": "^1.8.1"
  },
  "devDependencies": {
    "@types/react-slick": "^0.23.13",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.35",
    "typescript": "^5.3.3"
  }
}`;

  const nextConfig = `// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;`;

  return (
    <DocsLayout>
      <Container size="md">
        <div className="px-6 md:px-8 space-y-10">
          <div className="pt-2">
            <Breadcrumbs
              showHome={false}
              items={[
                { label: "Docs", href: "/docs" },
                { label: "Installation" },
              ]}
            />
          </div>

          <header className="space-y-4">
            <div className="flex items-center gap-2">
              <h1 className="text-4xl font-bold tracking-tight">
                Installation
              </h1>
              <Badge variant="secondary">Next.js</Badge>
            </div>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Get started by installing the package and setting up your project.
              Follow the steps below to add mokri UI to your Next.js
              application.
            </p>
          </header>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Prerequisites</h2>
              <p className="text-foreground/70">
                Before installing mokri UI, make sure you have the following:
              </p>
              <ul className="list-disc list-inside space-y-1 text-foreground/70 ml-4">
                <li>Node.js 18.0 or later</li>
                <li>React 18.0 or later</li>
                <li>Next.js 13.0 or later (recommended)</li>
                <li>Tailwind CSS 4.1.0 or later (required)</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Installation</h2>
              <p className="text-foreground/70">
                Install the mokri UI package and required dependencies.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  1. Install the package
                </h3>
                <CodeWindow code={installNpm} filename="bash" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  2. Install peer dependencies
                </h3>
                <p className="text-sm text-foreground/60 mb-2">
                  Install Tailwind CSS v4 and all required dependencies:
                </p>
                <CodeWindow code={installDeps} filename="bash" />
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
                <h3 className="text-lg font-medium mb-2">
                  1. Configure PostCSS
                </h3>
                <p className="text-sm text-foreground/60 mb-2">
                  Tailwind CSS v4 uses PostCSS for processing. Create or update your{" "}
                  <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                    postcss.config.mjs
                  </code>{" "}
                  file:
                </p>
                <CodeWindow code={postcssConfig} filename="postcss.config.mjs" />
                <p className="text-sm text-foreground/60 mt-2">
                  <strong>Note:</strong> Tailwind CSS v4 does not require a{" "}
                  <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                    tailwind.config.ts
                  </code>{" "}
                  file. Configuration is done directly in CSS.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  2. Configure Tailwind CSS in globals.css
                </h3>
                <p className="text-sm text-foreground/60 mb-2">
                  Add the following to your{" "}
                  <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                    app/globals.css
                  </code>{" "}
                  file. Tailwind v4 uses{" "}
                  <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                    @import
                  </code>{" "}
                  instead of{" "}
                  <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                    @tailwind
                  </code>{" "}
                  directives. With mokri-ui you can now import a single helper
                  file that registers Tailwind sources for the package:
                </p>
                <CodeWindow code={globalsCSS} filename="app/globals.css" />
                <p className="text-sm text-foreground/60 mt-2">
                  <strong>Important:</strong> Make sure to import this CSS file in your{" "}
                  <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                    app/layout.tsx
                  </code>{" "}
                  file:
                </p>
                <CodeWindow
                  code={`// app/layout.tsx
import "./globals.css";
// ... rest of your layout code`}
                  filename="app/layout.tsx"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  3. Configure TypeScript paths (optional)
                </h3>
                <p className="text-sm text-foreground/60 mb-2">
                  Update your{" "}
                  <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                    tsconfig.json
                  </code>{" "}
                  for path aliases:
                </p>
                <CodeWindow code={tsconfig} filename="tsconfig.json" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  4. Create utility function (recommended)
                </h3>
                <p className="text-sm text-foreground/60 mb-2">
                  Create a{" "}
                  <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                    lib/utils.ts
                  </code>{" "}
                  file for className merging. This is used by many components:
                </p>
                <CodeWindow code={utilsTs} filename="lib/utils.ts" />
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
            <CodeWindow
              code={`your-project/
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
├── postcss.config.mjs
└── tsconfig.json`}
              filename="project structure"
            />
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
                Make sure these packages are installed in your project. These are the exact versions used in this project:
              </p>
            </div>
            <CodeWindow code={packageJson} filename="package.json" />
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-foreground/70">
                <strong>Note:</strong> Tailwind CSS v4 requires{" "}
                <code className="px-1.5 py-0.5 bg-background rounded text-xs">
                  @tailwindcss/postcss
                </code>{" "}
                for PostCSS integration. Make sure to install it along with Tailwind CSS v4.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Next Steps</h2>
              <p className="text-foreground/70">
                Now that you have mokri UI installed, you can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                <li>
                  Browse the{" "}
                  <a
                    href="/docs/components"
                    className="text-foreground underline"
                  >
                    components
                  </a>{" "}
                  to see what's available
                </li>
                <li>
                  Learn about{" "}
                  <a href="/docs/theming" className="text-foreground underline">
                    theming
                  </a>{" "}
                  and customization
                </li>
                <li>
                  Set up{" "}
                  <a
                    href="/docs/dark-mode"
                    className="text-foreground underline"
                  >
                    dark mode
                  </a>{" "}
                  for your application
                </li>
                <li>
                  Check component documentation for usage examples and API
                  references
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Container>
    </DocsLayout>
  );
}
