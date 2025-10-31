'use client';

import React from 'react';
import { DocsLayout, CodeWindow } from '../../../components/docs/docs-layout';
import Container from '../../../components/ui/container';
import { Breadcrumbs } from '../../../components/ui/breadcrumbs';

export default function DarkModePage() {
  const toggleScript = `// theme-toggle.tsx
import { useEffect, useState } from 'react'

export function useTheme() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const root = document.documentElement
    const isDark = root.classList.contains('dark')
    setDark(isDark)
  }, [])
  function toggle() {
    const root = document.documentElement
    root.classList.toggle('dark')
  }
  return { dark, toggle }
}`;

  const toggleUsage = `// In a component
import { useTheme } from './theme-toggle'

export default function ThemeSwitch() {
  const { dark, toggle } = useTheme()
  return (
    <button onClick={toggle} className="px-3 py-2 border rounded-md">
      {dark ? 'Switch to Light' : 'Switch to Dark'}
    </button>
  )
}`;

  const htmlStrategy = `// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">{/* remove 'dark' for light by default */}
      <body>{children}</body>
    </html>
  )
}`;

  return (
    <DocsLayout>
      <Container size="sm">
        <div className="px-6 md:px-8 max-w-5xl mx-auto space-y-10">
          <div className="pt-2">
            <Breadcrumbs showHome={false} items={[{ label: 'Docs', href: '/docs' }, { label: 'Dark Mode' }]} />
          </div>

          <header className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Dark Mode</h1>
            <p className="text-foreground/70">Use the <code className="font-mono">.dark</code> class strategy for instant theming.</p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Hook</h2>
            <CodeWindow code={toggleScript} filename="theme-toggle.tsx" />
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Usage</h2>
            <CodeWindow code={toggleUsage} filename="component.tsx" />
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">HTML class strategy</h2>
            <CodeWindow code={htmlStrategy} filename="app/layout.tsx" />
          </section>
        </div>
      </Container>
    </DocsLayout>
  );
}


