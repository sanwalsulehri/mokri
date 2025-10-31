'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Switch } from '../ui/switch';
import { Checkbox } from '../ui/checkbox';
import { Radio } from '../ui/radio';
import { RadioCard } from '../ui/radio-card';
import Avatar, { AvatarGroup } from '../ui/avatar';
import { Slider } from '../ui/slider';
import { MagicCard } from '../ui/magic-card';
import Container from '../ui/container';
import { Navbar } from '../navbar';
import { Banner } from '../ui/banner';
import { Breadcrumbs } from '../ui/breadcrumbs';
import { ButtonGroup, ButtonGroupItem } from '../ui/button-group';
import { Calendar } from '../ui/calendar';
import { Collapsible } from '../ui/collapsible';
import { Command } from '../ui/command';
import { Pagination } from '../ui/pagination';
import { Loader } from '../ui/loader';
import { PaymentForm } from '../ui/payment-form';
import { ProfileVerification } from '../ui/profile-verification';
import { Marquee } from '../ui/marquee';
import TextArea from '../ui/textarea';
import { Select } from '../ui/select';
import { ScrollArea } from '../ui/scroll-area';
import { Dropdown } from '../ui/dropdown';
import { DataTable } from '../ui/data-table';
import { DatePicker } from '../ui/date-picker';
import { DropdownMenu } from '../ui/dropdown-menu';
import { Modal } from '../ui/modal';
import { Drawer } from '../ui/drawer';
import { Accordion } from '../ui/accordion';
import { Tooltip } from '../ui/tooltip';
import { Carousel, BeautifulCardCarousel, BeautifulImageCarousel } from '../ui/carousel';
import { ToastProvider } from '../ui/toast';
import { Tabs } from '../ui/tabs';
import { Testimonials } from '../ui/testimonials';
import Image from '../ui/image';
import Typography from '../ui/typography';
import { ProgressBar } from '../ui/progress-bar';
import Skeleton from '../ui/skeleton';

// CLI theme colors for light and dark modes (industry-style terminal palette)
const cliTheme = {
  light: {
    background: '#0B1220',
    foreground: '#E6EDF3',
    muted: '#9DA7B3',
    accent: '#3FB950',
    window: { red: '#FF5F56', yellow: '#FFBD2E', green: '#27C93F' },
  },
  dark: {
    background: '#0B1220',
    foreground: '#E6EDF3',
    muted: '#9DA7B3',
    accent: '#3FB950',
    window: { red: '#FF5F56', yellow: '#FFBD2E', green: '#27C93F' },
  },
} as const;

export const componentsRegistry = [
  { name: 'Accordion', path: 'accordion', component: null },
  { name: 'Avatar', path: 'avatar', component: Avatar },
  { name: 'Badge', path: 'badge', component: Badge },
  { name: 'Banner', path: 'banner', component: Banner },
  { name: 'Breadcrumbs', path: 'breadcrumbs', component: Breadcrumbs },
  { name: 'Button', path: 'button', component: Button },
  { name: 'ButtonGroup', path: 'button-group', component: ButtonGroup },
  { name: 'Calendar', path: 'calendar', component: Calendar },
  { name: 'Card', path: 'card', component: Card },
  { name: 'Carousel', path: 'carousel', component: Carousel },
  { name: 'Checkbox', path: 'checkbox', component: Checkbox },
  { name: 'Collapsible', path: 'collapsible', component: Collapsible },
  { name: 'Command', path: 'command', component: Command },
  { name: 'Container', path: 'container', component: Container },
  { name: 'DataTable', path: 'data-table', component: DataTable },
  { name: 'DatePicker', path: 'date-picker', component: DatePicker },
  { name: 'Drawer', path: 'drawer', component: Drawer },
  { name: 'Dropdown', path: 'dropdown', component: Dropdown },
  { name: 'DropdownMenu', path: 'dropdown-menu', component: DropdownMenu },
  { name: 'Fade', path: 'fade', component: Fade },
  { name: 'HeaderBar', path: 'header-bar', component: HeaderBar },
  { name: 'IconButton', path: 'icon-button', component: IconButton },
  { name: 'Image', path: 'image', component: Image },
  { name: 'ImageCarousel', path: 'image-carousel', component: BeautifulImageCarousel },
  { name: 'Input', path: 'input', component: Input },
  { name: 'InputOTP', path: 'input-otp', component: InputOTP },
  { name: 'Loader', path: 'loader', component: Loader },
  { name: 'MagicCard', path: 'magic-card', component: MagicCard },
  { name: 'Marquee', path: 'marquee', component: Marquee },
  { name: 'Modal', path: 'modal', component: Modal },
  { name: 'Pagination', path: 'pagination', component: Pagination },
  { name: 'PaymentForm', path: 'payment-form', component: PaymentForm },
  { name: 'ProfileVerification', path: 'profile-verification', component: ProfileVerification },
  { name: 'ProgressBar', path: 'progress-bar', component: ProgressBar },
  { name: 'Radio', path: 'radio', component: Radio },
  { name: 'RadioCard', path: 'radio-card', component: RadioCard },
  { name: 'ScrollArea', path: 'scroll-area', component: ScrollArea },
  { name: 'Select', path: 'select', component: Select },
  { name: 'Skeleton', path: 'skeleton', component: Skeleton },
  { name: 'Slider', path: 'slider', component: Slider },
  { name: 'Switch', path: 'switch', component: Switch },
  { name: 'Tabs', path: 'tabs', component: Tabs },
  { name: 'Testimonials', path: 'testimonials', component: Testimonials },
  { name: 'Textarea', path: 'textarea', component: TextArea },
  { name: 'Toast', path: 'toast', component: ToastProvider },
  { name: 'Tooltip', path: 'tooltip', component: Tooltip },
  { name: 'Typography', path: 'typography', component: Typography },
];

const sidebarItems = [
  { title: 'Get Started', items: [
    { name: 'Installation', href: '/docs/installation' },
    { name: 'Theming', href: '/docs/theming' },
    { name: 'Dark Mode', href: '/docs/dark-mode' },
  ]},
  { title: 'Components', items: componentsRegistry.map(comp => ({
    name: comp.name,
    href: `/docs/components/${comp.path}`
  }))},
];

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
          <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed left-0 top-0 z-50 w-80 max-h-[80vh] overflow-hidden  backdrop-blur-xl border-r border-border/50 rounded-tr-xl rounded-br-xl
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0  md:left-00 md:top-20 md:rounded-none md:max-h-none md:inset-0
        `}>
          <div className="h-full overflow-y-auto">
            {/* Minimal Sidebar Top Spacer */}
            

            {/* Navigation */}
            <div className="p-4 space-y-6">
              {sidebarItems.map((section) => (
                <div key={section.title}>
                  <h3 className="px-3 text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-3">
                    {section.title}
                  </h3>
                  <nav className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center px-3 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                      >
                        <span className="flex-1 truncate">{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-80 lg:ml-88">
          <div className="py-8">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-background/80 backdrop-blur-sm border border-border rounded-lg hover:bg-muted/50 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export function ComponentDemo({ componentName, Component }: { componentName: string, Component: any }) {
  const [demoState, setDemoState] = useState({
    checked: false,
    switchChecked: false,
    radioValue: 'option1',
    sliderValue: 50,
  });

  // Detect dark mode from document on mount
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'));
    }
  }, []);

  const renderComponentDemo = () => {
    // Copy-paste same structures as component page demos
    switch (componentName) {
      case 'Button':
      case 'Card':
      case 'Badge':
      case 'Input':
      case 'Checkbox':
      case 'Switch':
      case 'Radio':
      case 'RadioCard':
      case 'Avatar':
      case 'Slider':
      case 'MagicCard':
      case 'Breadcrumbs':
      case 'ButtonGroup':
      case 'Calendar':
      case 'Collapsible':
      case 'Command':
        // fall through handled below by reusing curated demos above
        break;
      default:
        if (Component) {
          try {
            return (
              <div className="w-full max-w-full">
                <Component />
              </div>
            );
          } catch {}
        }
        return (
          <Card title={componentName} description="Preview coming soon" dashed>
            <div className="h-24 bg-muted/30 rounded-lg border border-border flex items-center justify-center">
              <span className="text-foreground/50 text-sm">Generic placeholder</span>
            </div>
          </Card>
        );
    }

    // Curated block selected above
    return (() => {
      switch (componentName) {
        case 'Button':
          return (
            <div className="space-y-6">
              <div className="flex gap-3 flex-wrap">
                <Button>Default</Button>
                <Button bg={false}>No Background</Button>
                <Button outline>Outline</Button>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          );
        case 'Card':
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Card Title" description="Card description">
                <p className="text-sm text-foreground/70">Card content goes here.</p>
              </Card>
              <Card title="Dashed Card" description="Card description" dashed>
                <p className="text-sm text-foreground/70">Card content goes here.</p>
              </Card>
            </div>
          );
        case 'Badge':
          return (
            <div className="flex gap-3 flex-wrap">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge bg={false}>No Background</Badge>
            </div>
          );
        case 'Input':
          return (
            <div className="space-y-4 max-w-md">
              <Input placeholder="Enter your email" />
              <Input type="password" placeholder="Password" />
            </div>
          );
        case 'Checkbox':
          return (
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Checkbox defaultChecked />
                <label className="text-sm font-medium">Accept terms and conditions</label>
              </div>
            </div>
          );
        case 'Switch':
          return (
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Switch />
                <label className="text-sm font-medium">Enable notifications</label>
              </div>
            </div>
          );
        case 'Radio':
          return (
            <div className="space-y-4">
              <Radio name="demo" value="option1" label="Option 1" checked />
              <Radio name="demo" value="option2" label="Option 2" />
            </div>
          );
        case 'RadioCard':
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              <RadioCard name="plan" label="Basic Plan" description="Perfect for individuals" value="basic" checked />
              <RadioCard name="plan" label="Pro Plan" description="Best for teams" value="pro" />
            </div>
          );
        case 'Avatar':
          return (
            <div className="space-y-6">
              <div className="flex gap-4">
                <Avatar src="https://i.pravatar.cc/100?img=1" alt="User" />
                <Avatar src="https://i.pravatar.cc/100?img=2" alt="User" />
                <Avatar src="https://i.pravatar.cc/100?img=3" alt="User" />
              </div>
              <AvatarGroup avatars={[
                { src: 'https://i.pravatar.cc/100?img=1', alt: 'John Doe' },
                { src: 'https://i.pravatar.cc/100?img=2', alt: 'Jane Smith' },
                { src: 'https://i.pravatar.cc/100?img=3', alt: 'Bob Johnson' },
              ]} />
            </div>
          );
        case 'Slider':
          return (
            <div className="space-y-4 max-w-md">
              <Slider defaultValue={50} min={0} max={100} step={1} />
            </div>
          );
        case 'MagicCard':
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MagicCard>
                <h3 className="text-lg font-semibold mb-2">Normal Card</h3>
                <p className="text-sm text-foreground/70">This is a regular card without magic effects.</p>
              </MagicCard>
              <MagicCard isMagic>
                <h3 className="text-lg font-semibold mb-2">Magic Card ✨</h3>
                <p className="text-sm text-foreground/70">Hover to see the magic glow follow your cursor!</p>
              </MagicCard>
            </div>
          );
        case 'Breadcrumbs':
          return (
            <div className="w-full max-w-md">
              <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Components', href: '/docs/components' }, { label: 'Breadcrumbs' }]} />
            </div>
          );
        case 'ButtonGroup':
          return (
            <div className="w-full max-w-md">
              <ButtonGroup variant="segmented">
                <ButtonGroupItem active>Day</ButtonGroupItem>
                <ButtonGroupItem>Week</ButtonGroupItem>
                <ButtonGroupItem>Month</ButtonGroupItem>
              </ButtonGroup>
            </div>
          );
        case 'Calendar':
          return (
            <div className="w-full max-w-md">
              <Calendar />
            </div>
          );
        case 'Collapsible':
          return (
            <div className="w-full max-w-md">
              <Collapsible title="Details">Hidden content</Collapsible>
            </div>
          );
        case 'Command':
          return (
            <div className="w-full max-w-md">
              <Command items={[{ id: '1', label: 'Open' }, { id: '2', label: 'Save' }]} />
            </div>
          );
        default:
          return null;
      }
    })();
  };

  return (
    <div className="space-y-8">
      {/* Component Showcase Box */}
      <Card
        title="Live Preview"
        description="Interactive component demo"
        className="shadow-xl"
      >
        <div className="min-h-[30ch] flex items-center justify-center">
          {renderComponentDemo()}
        </div>
      </Card>
    </div>
  );
}

export function getComponentCode(componentName: string): string {
  const codeExamples: Record<string, string> = {
    'Button': `import { Button } from "@/components/ui/button"

<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button size="sm">Small</Button>`,
    
    'Card': `import { Card } from "@/components/ui/card"

<Card title="Card Title" description="Card description">
  <p>Card content goes here.</p>
</Card>`,
    
    'Badge': `import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>`,
    
    'Input': `import { Input } from "@/components/ui/input"

<Input placeholder="Enter your email" />
<Input type="password" placeholder="Password" />`,
    
    'Switch': `import { Switch } from "@/components/ui/switch"

<Switch checked={checked} onChange={setChecked} />`,
    
    'Checkbox': `import { Checkbox } from "@/components/ui/checkbox"

<Checkbox checked={checked} onChange={setChecked} />`,
    
    'Radio': `import { Radio } from "@/components/ui/radio"

<Radio
  name="group"
  value="option1"
  label="Option 1"
  checked={value === "option1"}
  onChange={setValue}
/>`,
    
    'RadioCard': `import { RadioCard } from "@/components/ui/radio-card"

<RadioCard
  title="Plan Name"
  description="Plan description"
  value="plan"
  checked={selected === "plan"}
  onChange={setSelected}
/>`,
    
    'Avatar': `import { Avatar, AvatarGroup } from "@/components/ui/avatar"

<Avatar src="/avatar.jpg" alt="User" />
<AvatarGroup avatars={avatars} />`,
    
    'Slider': `import { Slider } from "@/components/ui/slider"

<Slider
  value={[value]}
  onChange={setValue}
  min={0}
  max={100}
/>`,
    
    'MagicCard': `import { MagicCard } from "@/components/ui/magic-card"

<MagicCard isMagic>
  <h3>Magic Card ✨</h3>
  <p>Hover to see the glow effect!</p>
</MagicCard>`
  };

  // If we have a curated example, use it
  if (codeExamples[componentName]) return codeExamples[componentName];

  // Fallback: generate a minimal import + usage based on the registry
  const reg = componentsRegistry.find(c => c.name === componentName);
  if (!reg) return `// Component code example`;

  // Some components export default instead of named
  const defaultExports = new Set(['Container', 'Image', 'Typography', 'Skeleton']);
  const importPath = `@/components/ui/${reg.path}`;
  const importLine = defaultExports.has(componentName)
    ? `import ${componentName} from "${importPath}"`
    : `import { ${componentName} } from "${importPath}"`;

  return `${importLine}

<${componentName} />`;
}

export function CodeWindow({ code, filename = 'component.tsx' }: { code: string; filename?: string }) {
  const [isDark, setIsDark] = React.useState(false);
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'));
    }
  }, []);

  const editorTheme = React.useMemo(() => {
    return isDark
      ? {
          bg: '#1e1e1e',
          fg: '#d4d4d4',
          headerBg: '#252526',
          border: 'rgba(255,255,255,0.08)',
          colors: {
            comment: '#6A9955',
            string: '#CE9178',
            keyword: '#C586C0',
            type: '#4EC9B0',
            tag: '#569CD6',
          },
        }
      : {
          bg: '#ffffff',
          fg: '#24292e',
          headerBg: '#f6f8fa',
          border: 'rgba(27,31,35,0.15)',
          colors: {
            comment: '#6a737d',
            string: '#032f62',
            keyword: '#d73a49',
            type: '#005cc5',
            tag: '#22863a',
          },
        };
  }, [isDark]);
  function escapeHtml(input: string) {
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function highlight(input: string) {
    let out = escapeHtml(input);
    // Comments
    out = out.replace(/(^|\n)\s*(\/\/.*)$/gmu, (m) => `<span style="color:${editorTheme.colors.comment}">${m}</span>`);
    // Strings
    out = out.replace(/(['"])((?:\\.|(?!\1).)*)\1/gm, (m) => `<span style="color:${editorTheme.colors.string}">${m}</span>`);
    // Keywords
    out = out.replace(/\b(import|from|const|let|var|return|function|export|default|new|class|extends|if|else|switch|case|for|while|await|async|type|interface)\b/gm, `<span style="color:${editorTheme.colors.keyword}">$1</span>`);
    // Types
    out = out.replace(/\b(React|string|number|boolean|any|void|unknown|Record|Array)\b/gm, `<span style="color:${editorTheme.colors.type}">$1</span>`);
    // JSX tag names (opening)
    out = out.replace(/&lt;(\/?)([A-Za-z][A-Za-z0-9]*)/gm, (full, slash, name) => `&lt;${slash}<span style="color:${editorTheme.colors.tag}">${name}</span>`);
    return out;
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (_) {
      // no-op
    }
  };
  return (
    <div className="rounded-xl overflow-hidden bg-secondary text-foreground border border-border">
      <div className="flex items-center justify-between px-4 py-3 bg-muted border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-foreground/70 font-mono">{filename}</span>
          <button
            onClick={copyToClipboard}
            className="px-2 py-1 rounded-md text-xs font-medium border border-border hover:bg-muted transition-colors"
            aria-label="Copy code"
          >
            Copy
          </button>
        </div>
      </div>
      <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
        <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
      </pre>
    </div>
  );
}
