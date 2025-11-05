"use client";

import React from "react";
import { DocsLayout, CodeWindow } from "../../../components/docs/docs-layout";
import Container from "../../../components/ui/container";
import { Breadcrumbs } from "../../../components/ui/breadcrumbs";
import { Badge } from "../../../components/ui/badge";

export default function ThemingPage() {
  const cssVariables = `// app/globals.css (Tailwind v4)
@import "tailwindcss";
@plugin "tailwindcss-animate";
@import "mokri-ui/tailwind.css"; // makes Tailwind scan mokri-ui

:root {
  --background: #ffffff;
  --foreground: #171717;
  --card: #ffffff;
  --card-foreground: #171717;
  --popover: #ffffff;
  --popover-foreground: #171717;
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

[data-theme="dark"] {
  --background: #0A0A0A;
  --foreground: #E5E5E5;
  --card: #0A0A0A;
  --card-foreground: #E5E5E5;
  --popover: #0A0A0A;
  --popover-foreground: #E5E5E5;
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
  --border: #262626;
  --input: #262626;
  --ring: #3d3e3f;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
}
`;

  const customColors = `// app/globals.css - Custom Color Example
:root {
  /* Your custom theme colors */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... other colors ... */
}`;

  const usageExample = `// Using theme colors in components
import { Button } from 'mokri-ui'
import { Card } from 'mokri-ui'

export default function ThemedComponent() {
  return (
    <Card className="bg-card text-card-foreground">
      <h2 className="text-primary font-bold">Primary Heading</h2>
      <p className="text-muted-foreground">Muted text content</p>
      <Button className="bg-primary text-primary-foreground">
        Primary Button
      </Button>
    </Card>
  )
}`;

  const customTheme = `// Example: Customizing individual colors
:root {
  /* Change primary color */
  --primary: 221.2 83.2% 53.3%; /* Blue */
  
  /* Change radius */
  --radius: 0.75rem; /* More rounded corners */
}

.dark {
  --primary: 217.2 91.2% 59.8%; /* Lighter blue for dark mode */
}`;

  const colorMapping = `// How CSS variables map to Tailwind classes (via @theme inline)
--background → bg-background
--foreground → text-foreground
--primary → bg-primary, text-primary, border-primary
--primary-foreground → text-primary-foreground
--secondary → bg-secondary, text-secondary
--muted → bg-muted, text-muted-foreground
--accent → bg-accent, text-accent
--destructive → bg-destructive, text-destructive
--border → border-border
--ring → ring-ring`;

  return (
    <DocsLayout>
      <Container size="md">
        <div className="px-6 md:px-8 space-y-10">
          <div className="pt-2">
            <Breadcrumbs
              showHome={false}
              items={[{ label: "Docs", href: "/docs" }, { label: "Theming" }]}
            />
          </div>

          <header className="space-y-4">
            <div className="flex items-center gap-2">
              <h1 className="text-4xl font-bold tracking-tight">Theming</h1>
              <Badge variant="secondary">CSS Variables</Badge>
            </div>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Customize the appearance of your components using CSS variables
              and Tailwind CSS. mokri UI uses a CSS variable-based theming
              system that works seamlessly with both light and dark modes.
            </p>
          </header>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-foreground/70">
                mokri UI uses CSS variables for theming, which allows you to
                customize colors globally. All colors are defined using HSL
                format, making it easy to create cohesive color schemes that
                automatically adapt to light and dark modes.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">CSS Variables</h2>
              <p className="text-foreground/70">
                Define your theme colors using CSS variables in your{" "}
                <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                  globals.css
                </code>{" "}
                file:
              </p>
            </div>
            <CodeWindow code={cssVariables} filename="app/globals.css" />
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Tailwind v4 mapping</h2>
              <p className="text-foreground/70">
                No <code className="px-1.5 py-0.5 bg-muted rounded text-xs">tailwind.config.ts</code> is required. Mapping is done in CSS with
                <code className="px-1.5 py-0.5 bg-muted rounded text-xs">@theme inline</code> as shown below:
              </p>
            </div>
            <CodeWindow code={`@theme inline {\n  --color-background: var(--background);\n  --color-foreground: var(--foreground);\n  --color-primary: var(--primary);\n  --color-primary-foreground: var(--primary-foreground);\n  // ... see globals.css\n}`} filename="globals.css (@theme inline)" />
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Color Mapping</h2>
              <p className="text-foreground/70">
                Understand how CSS variables map to Tailwind utility classes:
              </p>
            </div>
            <CodeWindow code={colorMapping} filename="color-mapping.txt" />
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Customizing Colors</h2>
              <p className="text-foreground/70">
                You can customize any color by updating the corresponding CSS
                variable:
              </p>
            </div>
            <CodeWindow code={customTheme} filename="app/globals.css" />
            <p className="text-sm text-foreground/60">
              Colors use HSL format:{" "}
              <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                hue saturation% lightness%
              </code>
              . The values are space-separated (not comma-separated) for use
              with Tailwind's HSL function.
            </p>
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Usage in Components</h2>
              <p className="text-foreground/70">
                Use theme colors in your components with Tailwind utility
                classes:
              </p>
            </div>
            <CodeWindow code={usageExample} filename="components/themed.tsx" />
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Dark Mode</h2>
              <p className="text-foreground/70">
                Dark mode is automatically supported through the{" "}
                <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                  .dark
                </code>{" "}
                class. When the dark class is applied to your{" "}
                <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                  html
                </code>{" "}
                or{" "}
                <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                  body
                </code>{" "}
                element, all components will automatically use the dark theme
                colors.
              </p>
            </div>
            <CodeWindow
              code={`// Enable dark mode
<html lang="en" className="dark">
  <body>...</body>
</html>

// Or toggle dynamically
document.documentElement.classList.toggle('dark')`}
              filename="app/layout.tsx"
            />
          </section>

          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Available Color Tokens</h2>
              <p className="text-foreground/70">
                The following color tokens are available for customization:
              </p>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Base Colors</h3>
                  <ul className="text-sm text-foreground/70 space-y-1 ml-4 list-disc">
                    <li>
                      <code>--background</code> - Page background
                    </li>
                    <li>
                      <code>--foreground</code> - Primary text
                    </li>
                    <li>
                      <code>--border</code> - Border color
                    </li>
                    <li>
                      <code>--input</code> - Input border
                    </li>
                    <li>
                      <code>--ring</code> - Focus ring
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Semantic Colors</h3>
                  <ul className="text-sm text-foreground/70 space-y-1 ml-4 list-disc">
                    <li>
                      <code>--primary</code> - Primary brand color
                    </li>
                    <li>
                      <code>--secondary</code> - Secondary color
                    </li>
                    <li>
                      <code>--accent</code> - Accent highlights
                    </li>
                    <li>
                      <code>--muted</code> - Muted backgrounds
                    </li>
                    <li>
                      <code>--destructive</code> - Error/danger color
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Component Colors</h3>
                  <ul className="text-sm text-foreground/70 space-y-1 ml-4 list-disc">
                    <li>
                      <code>--card</code> - Card backgrounds
                    </li>
                    <li>
                      <code>--popover</code> - Popover backgrounds
                    </li>
                    <li>
                      <code>--radius</code> - Border radius value
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </DocsLayout>
  );
}
