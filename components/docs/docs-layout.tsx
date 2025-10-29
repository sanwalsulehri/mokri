'use client';

import React, { useState } from 'react';
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

export const componentsRegistry = [
  { name: 'Accordion', path: 'accordion', component: null },
  { name: 'Avatar', path: 'avatar', component: Avatar },
  { name: 'Badge', path: 'badge', component: Badge },
  { name: 'Banner', path: 'banner', component: null },
  { name: 'Breadcrumbs', path: 'breadcrumbs', component: null },
  { name: 'Button', path: 'button', component: Button },
  { name: 'ButtonGroup', path: 'button-group', component: null },
  { name: 'Calendar', path: 'calendar', component: null },
  { name: 'Card', path: 'card', component: Card },
  { name: 'Carousel', path: 'carousel', component: null },
  { name: 'Checkbox', path: 'checkbox', component: Checkbox },
  { name: 'Collapsible', path: 'collapsible', component: null },
  { name: 'Command', path: 'command', component: null },
  { name: 'Container', path: 'container', component: Container },
  { name: 'DataTable', path: 'data-table', component: null },
  { name: 'DatePicker', path: 'date-picker', component: null },
  { name: 'Drawer', path: 'drawer', component: null },
  { name: 'Dropdown', path: 'dropdown', component: null },
  { name: 'DropdownMenu', path: 'dropdown-menu', component: null },
  { name: 'Fade', path: 'fade', component: null },
  { name: 'HeaderBar', path: 'header-bar', component: null },
  { name: 'IconButton', path: 'icon-button', component: null },
  { name: 'Image', path: 'image', component: null },
  { name: 'ImageCarousel', path: 'image-carousel', component: null },
  { name: 'Input', path: 'input', component: Input },
  { name: 'InputOTP', path: 'input-otp', component: null },
  { name: 'Loader', path: 'loader', component: null },
  { name: 'MagicCard', path: 'magic-card', component: MagicCard },
  { name: 'Marquee', path: 'marquee', component: null },
  { name: 'Modal', path: 'modal', component: null },
  { name: 'Pagination', path: 'pagination', component: null },
  { name: 'PaymentForm', path: 'payment-form', component: null },
  { name: 'ProfileVerification', path: 'profile-verification', component: null },
  { name: 'ProgressBar', path: 'progress-bar', component: null },
  { name: 'Radio', path: 'radio', component: Radio },
  { name: 'RadioCard', path: 'radio-card', component: RadioCard },
  { name: 'ScrollArea', path: 'scroll-area', component: null },
  { name: 'Select', path: 'select', component: null },
  { name: 'Skeleton', path: 'skeleton', component: null },
  { name: 'Slider', path: 'slider', component: Slider },
  { name: 'Switch', path: 'switch', component: Switch },
  { name: 'Tabs', path: 'tabs', component: null },
  { name: 'Testimonials', path: 'testimonials', component: null },
  { name: 'Textarea', path: 'textarea', component: null },
  { name: 'Toast', path: 'toast', component: null },
  { name: 'Tooltip', path: 'tooltip', component: null },
  { name: 'Typography', path: 'typography', component: null },
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
    <div className="min-h-screen bg-background">
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

  const renderComponentDemo = () => {
    if (Component) {
      try {
        return (
          <div className="w-full max-w-full">
            <Component />
          </div>
        );
      } catch (e) {
        // Fallback to handcrafted demo below
      }
    }
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
            <Card title="Default Card" description="A simple card with title and description">
              <p className="text-sm text-foreground/70">This is the card content.</p>
            </Card>
            <Card title="Dashed Card" description="A card with dashed border" dashed>
              <p className="text-sm text-foreground/70">This card has a dashed border.</p>
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

      case 'Banner':
        return (
          <div className="w-full max-w-2xl">
            <Banner title="Heads up" description="We launched something new." dismissible />
          </div>
        );

      case 'Input':
        return (
          <div className="space-y-4 max-w-md">
            <Input placeholder="Enter your email" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Disabled" disabled />
          </div>
        );

      case 'Switch':
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Switch 
                checked={demoState.switchChecked}
                onChange={(checked) => setDemoState(prev => ({ ...prev, switchChecked: checked }))}
              />
              <label className="text-sm font-medium">Enable notifications</label>
            </div>
          </div>
        );

      case 'Checkbox':
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Checkbox 
                checked={demoState.checked}
                onChange={(checked) => setDemoState(prev => ({ ...prev, checked }))}
              />
              <label className="text-sm font-medium">Accept terms and conditions</label>
            </div>
          </div>
        );

      case 'Radio':
        return (
          <div className="space-y-4">
            <Radio
              name="demo"
              value="option1"
              label="Option 1"
              checked={demoState.radioValue === 'option1'}
              onChange={(value) => setDemoState(prev => ({ ...prev, radioValue: value }))}
            />
            <Radio
              name="demo"
              value="option2"
              label="Option 2"
              checked={demoState.radioValue === 'option2'}
              onChange={(value) => setDemoState(prev => ({ ...prev, radioValue: value }))}
            />
          </div>
        );

      case 'RadioCard':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <RadioCard
              name="plan"
              label="Basic Plan"
              description="Perfect for individuals"
              value="basic"
              checked={demoState.radioValue === 'basic'}
              onChange={(value) => setDemoState(prev => ({ ...prev, radioValue: value }))}
            />
            <RadioCard
              name="plan"
              label="Pro Plan"
              description="Best for teams"
              value="pro"
              checked={demoState.radioValue === 'pro'}
              onChange={(value) => setDemoState(prev => ({ ...prev, radioValue: value }))}
            />
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
            <AvatarGroup
              avatars={[
                { src: 'https://i.pravatar.cc/100?img=1', alt: 'John Doe' },
                { src: 'https://i.pravatar.cc/100?img=2', alt: 'Jane Smith' },
                { src: 'https://i.pravatar.cc/100?img=3', alt: 'Bob Johnson' },
              ]}
            />
          </div>
        );

      case 'Slider':
        return (
          <div className="space-y-4 max-w-md">
            <Slider
              value={demoState.sliderValue}
              onChange={(value) => setDemoState(prev => ({ ...prev, sliderValue: value }))}
              min={0}
              max={100}
              step={1}
            />
            <p className="text-sm text-foreground/70 font-medium">Value: {demoState.sliderValue}</p>
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

      case 'Accordion':
        return (
          <div className="w-full max-w-md">
            <div className="border border-border rounded-lg">
              <div className="p-4 border-b border-border">
                <h4 className="font-medium">Accordion Item 1</h4>
              </div>
              <div className="p-4">
                <p className="text-sm text-foreground/70">This is accordion content.</p>
              </div>
            </div>
          </div>
        );

      case 'Alert':
        return (
          <div className="w-full max-w-md">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <p className="text-sm text-blue-800">This is an alert message.</p>
              </div>
            </div>
          </div>
        );

      case 'AlertDialog':
        return (
          <div className="w-full max-w-md">
            <div className="bg-background border border-border rounded-lg p-4 shadow-lg">
              <h4 className="font-semibold mb-2">Alert Dialog</h4>
              <p className="text-sm text-foreground/70 mb-4">Are you sure you want to continue?</p>
              <div className="flex gap-2">
                <Button size="sm" outline>Cancel</Button>
                <Button size="sm">Continue</Button>
              </div>
            </div>
          </div>
        );

      case 'AspectRatio':
        return (
          <div className="w-full max-w-md">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-foreground/50">16:9 Aspect Ratio</span>
            </div>
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

      case 'Carousel':
        return (
          <div className="w-full max-w-md">
            <div className="bg-muted rounded-lg p-8 text-center">
              <p className="text-foreground/70">Carousel slides would go here</p>
            </div>
          </div>
        );

      case 'Chart':
        return (
          <div className="w-full max-w-md">
            <div className="bg-muted rounded-lg p-8 text-center">
              <p className="text-foreground/70">Chart visualization would go here</p>
            </div>
          </div>
        );

      case 'Collapsible':
        return (
          <div className="w-full max-w-md">
            <Collapsible title="Details">Hidden content</Collapsible>
          </div>
        );

      case 'Combobox':
        return (
          <div className="w-full max-w-md">
            <div className="relative">
              <Input placeholder="Search..." />
              <div className="absolute right-2 top-2">
                <svg className="w-4 h-4 text-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        );

      case 'Command':
        return (
          <div className="w-full max-w-md">
            <Command items={[{ id: '1', label: 'Open' }, { id: '2', label: 'Save' }]} />
          </div>
        );

      case 'ContextMenu':
        return (
          <div className="w-full max-w-md">
            <div className="bg-muted rounded-lg p-8 text-center">
              <p className="text-foreground/70">Right-click for context menu</p>
            </div>
          </div>
        );

      case 'DataTable':
        return (
          <div className="w-full max-w-md">
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="bg-muted p-2 border-b border-border">
                <div className="grid grid-cols-3 gap-2 text-sm font-medium">
                  <div>Name</div>
                  <div>Email</div>
                  <div>Role</div>
                </div>
              </div>
              <div className="p-2 border-b border-border">
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>John Doe</div>
                  <div>john@example.com</div>
                  <div>Admin</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'DatePicker':
        return (
          <div className="w-full max-w-md">
            <div className="bg-background border border-border rounded-lg p-4">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Select date</span>
              </div>
            </div>
          </div>
        );

      case 'Dialog':
        return (
          <div className="w-full max-w-md">
            <div className="bg-background border border-border rounded-lg p-6 shadow-lg">
              <h4 className="font-semibold mb-2">Dialog Title</h4>
              <p className="text-sm text-foreground/70 mb-4">This is dialog content.</p>
              <div className="flex gap-2">
                <Button size="sm" outline>Cancel</Button>
                <Button size="sm">Confirm</Button>
              </div>
            </div>
          </div>
        );

      case 'Drawer':
        return (
          <div className="w-full max-w-md">
            <div className="bg-muted rounded-lg p-8 text-center">
              <p className="text-foreground/70">Drawer would slide in from side</p>
            </div>
          </div>
        );

      case 'DropdownMenu':
        return (
          <div className="w-full max-w-md">
            <div className="relative">
              <Button>Open Menu</Button>
              <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-lg shadow-lg p-1 min-w-32">
                <div className="p-2 hover:bg-muted rounded text-sm">Option 1</div>
                <div className="p-2 hover:bg-muted rounded text-sm">Option 2</div>
                <div className="p-2 hover:bg-muted rounded text-sm">Option 3</div>
              </div>
            </div>
          </div>
        );

      case 'Empty':
        return (
          <div className="w-full max-w-md">
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <p className="text-foreground/70">No data available</p>
            </div>
          </div>
        );

      case 'Field':
        return (
          <div className="w-full max-w-md space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Field Label</label>
              <Input placeholder="Enter value" />
            </div>
          </div>
        );

      case 'Form':
        return (
          <div className="w-full max-w-md space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Name</label>
              <Input placeholder="Enter name" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Email</label>
              <Input placeholder="Enter email" type="email" />
            </div>
            <Button className="w-full">Submit</Button>
          </div>
        );

      case 'HoverCard':
        return (
          <div className="w-full max-w-md">
            <div className="inline-block">
              <Button>Hover me</Button>
              <div className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg shadow-lg p-4 min-w-48 opacity-0 hover:opacity-100 transition-opacity">
                <h4 className="font-semibold mb-1">Hover Card</h4>
                <p className="text-sm text-foreground/70">This is hover card content.</p>
              </div>
            </div>
          </div>
        );

      case 'InputGroup':
        return (
          <div className="w-full max-w-md">
            <div className="flex">
              <div className="px-3 py-2 bg-muted border border-border border-r-0 rounded-l-lg text-sm text-foreground/70">
                @
              </div>
              <Input placeholder="username" className="rounded-l-none border-l-0" />
            </div>
          </div>
        );

      case 'InputOTP':
        return (
          <div className="w-full max-w-md">
            <div className="flex gap-2">
              {Array.from({length: 6}, (_, i) => (
                <input key={i} className="w-12 h-12 text-center border border-border rounded-md bg-background" maxLength={1} />
              ))}
            </div>
          </div>
        );

      case 'Item':
        return (
          <div className="w-full max-w-md">
            <div className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg">
              <div className="w-8 h-8 bg-muted rounded-full"></div>
              <div>
                <p className="font-medium">Item Title</p>
                <p className="text-sm text-foreground/70">Item description</p>
              </div>
            </div>
          </div>
        );

      case 'Kbd':
        return (
          <div className="w-full max-w-md">
            <div className="flex gap-2">
              <kbd className="px-2 py-1 bg-muted border border-border rounded text-sm font-mono">⌘</kbd>
              <kbd className="px-2 py-1 bg-muted border border-border rounded text-sm font-mono">K</kbd>
            </div>
          </div>
        );

      case 'Label':
        return (
          <div className="w-full max-w-md space-y-2">
            <label className="text-sm font-medium">Label</label>
            <Input placeholder="Input with label" />
          </div>
        );

      case 'Menubar':
        return (
          <div className="w-full max-w-md">
            <div className="flex border border-border rounded-lg overflow-hidden">
              <div className="px-3 py-2 hover:bg-muted text-sm">File</div>
              <div className="px-3 py-2 hover:bg-muted text-sm border-l border-border">Edit</div>
              <div className="px-3 py-2 hover:bg-muted text-sm border-l border-border">View</div>
            </div>
          </div>
        );

      case 'NativeSelect':
        return (
          <div className="w-full max-w-md">
            <select className="w-full p-2 border border-border rounded-lg bg-background">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        );

      case 'NavigationMenu':
        return (
          <div className="w-full max-w-md">
            <nav className="flex gap-4">
              <a href="#" className="text-sm font-medium hover:text-foreground/70">Home</a>
              <a href="#" className="text-sm font-medium hover:text-foreground/70">About</a>
              <a href="#" className="text-sm font-medium hover:text-foreground/70">Contact</a>
            </nav>
          </div>
        );

      case 'Pagination':
        return (
          <div className="w-full max-w-md">
            <div className="flex items-center gap-2">
              <Button size="sm" outline>‹</Button>
              <Button size="sm" outline>1</Button>
              <Button size="sm" outline>2</Button>
              <Button size="sm" outline>3</Button>
              <Button size="sm" outline>›</Button>
            </div>
          </div>
        );

      case 'Popover':
        return (
          <div className="w-full max-w-md">
            <div className="relative">
              <Button>Open Popover</Button>
              <div className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg shadow-lg p-4 min-w-48">
                <h4 className="font-semibold mb-1">Popover</h4>
                <p className="text-sm text-foreground/70">This is popover content.</p>
              </div>
            </div>
          </div>
        );

      case 'Progress':
        return (
          <div className="w-full max-w-md">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-foreground h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
        );

      case 'RadioGroup':
        return (
          <div className="w-full max-w-md space-y-3">
            <div className="flex items-center space-x-2">
              <input type="radio" name="group" className="w-4 h-4" />
              <label className="text-sm">Option 1</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" name="group" className="w-4 h-4" />
              <label className="text-sm">Option 2</label>
            </div>
          </div>
        );

      case 'Resizable':
        return (
          <div className="w-full max-w-md">
            <div className="bg-muted rounded-lg p-8 text-center">
              <p className="text-foreground/70">Resizable panel</p>
            </div>
          </div>
        );

      case 'ScrollArea':
        return (
          <div className="w-full max-w-md">
            <div className="h-32 bg-background border border-border rounded-lg overflow-hidden">
              <div className="p-4 space-y-2">
                {Array.from({length: 10}, (_, i) => (
                  <div key={i} className="text-sm">Scrollable item {i + 1}</div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'Select':
        return (
          <div className="w-full max-w-md">
            <div className="relative">
              <select className="w-full p-2 border border-border rounded-lg bg-background appearance-none">
                <option>Select an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <div className="absolute right-2 top-2">
                <svg className="w-4 h-4 text-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        );

      case 'Separator':
        return (
          <div className="w-full max-w-md">
            <div className="space-y-4">
              <div>Content above</div>
              <div className="border-t border-border"></div>
              <div>Content below</div>
            </div>
          </div>
        );

      case 'Sheet':
        return (
          <div className="w-full max-w-md">
            <div className="bg-muted rounded-lg p-8 text-center">
              <p className="text-foreground/70">Sheet would slide in from side</p>
            </div>
          </div>
        );

      case 'Sidebar':
        return (
          <div className="w-full max-w-md">
            <div className="bg-muted rounded-lg p-8 text-center">
              <p className="text-foreground/70">Sidebar navigation</p>
            </div>
          </div>
        );

      case 'Skeleton':
        return (
          <div className="w-full max-w-md space-y-3">
            <div className="h-4 bg-muted rounded animate-pulse"></div>
            <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-muted rounded animate-pulse w-1/2"></div>
          </div>
        );

      case 'Sonner':
        return (
          <div className="w-full max-w-md">
            <div className="bg-background border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <p className="text-sm">Toast notification</p>
              </div>
            </div>
          </div>
        );

      case 'Spinner':
        return (
          <div className="w-full max-w-md">
            <div className="flex justify-center">
              <div className="w-6 h-6 border-2 border-border border-t-foreground rounded-full animate-spin"></div>
            </div>
          </div>
        );

      case 'Table':
        return (
          <div className="w-full max-w-md">
            <div className="border border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-2 text-left text-sm font-medium">Name</th>
                    <th className="p-2 text-left text-sm font-medium">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-2 text-sm">Item 1</td>
                    <td className="p-2 text-sm">100</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-2 text-sm">Item 2</td>
                    <td className="p-2 text-sm">200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'Tabs':
        return (
          <div className="w-full max-w-md">
            <div className="border-b border-border">
              <div className="flex gap-4">
                <button className="pb-2 border-b-2 border-foreground text-sm font-medium">Tab 1</button>
                <button className="pb-2 text-sm text-foreground/70">Tab 2</button>
                <button className="pb-2 text-sm text-foreground/70">Tab 3</button>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm">Tab content goes here.</p>
            </div>
          </div>
        );

      case 'Textarea':
        return (
          <div className="w-full max-w-md">
            <textarea 
              className="w-full p-3 border border-border rounded-lg bg-background resize-none" 
              rows={4}
              placeholder="Enter your message..."
            ></textarea>
          </div>
        );

      case 'Toast':
        return (
          <div className="w-full max-w-md">
            <div className="bg-background border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <p className="text-sm">Toast message</p>
              </div>
            </div>
          </div>
        );

      case 'Toggle':
        return (
          <div className="w-full max-w-md">
            <div className="flex gap-2">
              <Button outline size="sm">Toggle 1</Button>
              <Button size="sm">Toggle 2</Button>
              <Button outline size="sm">Toggle 3</Button>
            </div>
          </div>
        );

      case 'ToggleGroup':
        return (
          <div className="w-full max-w-md">
            <div className="flex border border-border rounded-lg overflow-hidden">
              <button className="px-3 py-2 bg-background text-sm border-r border-border">Left</button>
              <button className="px-3 py-2 bg-muted text-sm border-r border-border">Center</button>
              <button className="px-3 py-2 bg-background text-sm">Right</button>
            </div>
          </div>
        );

      case 'Tooltip':
        return (
          <div className="w-full max-w-md">
            <div className="relative inline-block">
              <Button>Hover for tooltip</Button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-background border border-border rounded px-2 py-1 text-xs whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                This is a tooltip
              </div>
            </div>
          </div>
        );

      case 'Typography':
        return (
          <div className="w-full max-w-md space-y-4">
            <h1 className="text-2xl font-bold">Heading 1</h1>
            <h2 className="text-xl font-semibold">Heading 2</h2>
            <h3 className="text-lg font-medium">Heading 3</h3>
            <p className="text-sm text-foreground/70">This is body text.</p>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-32 bg-muted/30 rounded-lg border-2 border-dashed border-border">
            <p className="text-foreground/50">Component demo coming soon</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-8">
      {/* Component Showcase Box */}
      <div className="bg-muted rounded-xl border border-border p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <h3 className="text-lg font-semibold">Live Preview</h3>
        </div>
        <div className="min-h-[30ch] flex items-center justify-center">
          {renderComponentDemo()}
        </div>
      </div>
      
      {/* Code Block */}
      <div className="bg-secondary rounded-xl border border-border overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-muted border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-xs text-foreground/60 font-mono">component.tsx</span>
        </div>
        <pre className="p-6 overflow-x-auto text-sm text-foreground font-mono leading-relaxed">
          <code>{getComponentCode(componentName)}</code>
        </pre>
      </div>
    </div>
  );
}

function getComponentCode(componentName: string): string {
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
