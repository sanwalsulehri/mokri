'use client';

import React from 'react';
import { DocsLayout, CodeWindow } from '../../../components/docs/docs-layout';
import Container from '../../../components/ui/container';
import { Breadcrumbs } from '../../../components/ui/breadcrumbs';

export default function InstallationPage() {
  const installNpm = `// Install via npm\nnpm install @tertex/ui`;
  
  const setupTailwind = `// tailwind.config.ts\nimport type { Config } from 'tailwindcss'\n\nexport default {\n  content: [\n    './app/**/*.{ts,tsx}',\n    './components/**/*.{ts,tsx}',\n  ],\n  theme: {\n    extend: {}\n  }\n} satisfies Config`;
  const basicUsage = `// app/page.tsx\nimport { Button } from '@/components/ui/button'\n\nexport default function Page() {\n  return <Button>Install success</Button>\n}`;

  return (
    <DocsLayout>
      <Container size="sm">
        <div className="px-6 md:px-8 max-w-5xl mx-auto space-y-10">
          <div className="pt-2">
            <Breadcrumbs showHome={false} items={[{ label: 'Docs', href: '/docs' }, { label: 'Installation' }]} />
          </div>

          <header className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
            <p className="text-foreground/70">Get started by adding the library and configuring Tailwind.</p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Install the package</h2>
            <CodeWindow code={installNpm} filename="bash" />
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Configure Tailwind</h2>
            <CodeWindow code={setupTailwind} filename="tailwind.config.ts" />
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Usage</h2>
            <CodeWindow code={basicUsage} filename="app/page.tsx" />
          </section>
        </div>
      </Container>
    </DocsLayout>
  );
}


