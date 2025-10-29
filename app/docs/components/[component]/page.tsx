'use client';

import React from 'react';
import { DocsLayout, ComponentDemo, componentsRegistry } from '../../../../components/docs/docs-layout';
import Container from '../../../../components/ui/container';
import { Badge } from '../../../../components/ui/badge';
import { APIReference } from '../../../../components/docs/api-reference';

interface ComponentPageProps {
  params: Promise<{
    component: string;
  }>;
}

export default function ComponentPage({ params }: ComponentPageProps) {
  const resolvedParams = React.use(params);
  const componentName = resolvedParams.component.charAt(0).toUpperCase() + resolvedParams.component.slice(1).replace('-', '');
  
  const componentInfo = {
    'Accordion': {
      title: 'Accordion',
      description: 'A vertically stacked set of interactive headings that each reveal a section of content.',
      import: 'import { Accordion } from "@/components/ui/accordion"'
    },
    'Avatar': {
      title: 'Avatar',
      description: 'An image element with a fallback to represent a user.',
      import: 'import { Avatar, AvatarGroup } from "@/components/ui/avatar"'
    },
    'Badge': {
      title: 'Badge',
      description: 'Displays a badge or a component that looks like a badge.',
      import: 'import { Badge } from "@/components/ui/badge"'
    },
    'Banner': {
      title: 'Banner',
      description: 'A banner component for displaying important messages.',
      import: 'import { Banner } from "@/components/ui/banner"'
    },
    'Breadcrumbs': {
      title: 'Breadcrumbs',
      description: 'A navigation component that shows the current page location.',
      import: 'import { Breadcrumbs } from "@/components/ui/breadcrumbs"'
    },
    'Button': {
      title: 'Button',
      description: 'Displays a button or a component that looks like a button.',
      import: 'import { Button } from "@/components/ui/button"'
    },
    'ButtonGroup': {
      title: 'ButtonGroup',
      description: 'A group of buttons that can be used together.',
      import: 'import { ButtonGroup } from "@/components/ui/button-group"'
    },
    'Calendar': {
      title: 'Calendar',
      description: 'A calendar component for date selection.',
      import: 'import { Calendar } from "@/components/ui/calendar"'
    },
    'Card': {
      title: 'Card',
      description: 'Displays a card with header, content, and footer.',
      import: 'import { Card } from "@/components/ui/card"'
    },
    'Carousel': {
      title: 'Carousel',
      description: 'Beautiful image and card carousels with slick under the hood.',
      import: 'import { BeautifulImageCarousel, BeautifulCardCarousel } from "@/components/ui/carousel"'
    },
    'Checkbox': {
      title: 'Checkbox',
      description: 'A control that allows the user to select one or more options from a set.',
      import: 'import { Checkbox } from "@/components/ui/checkbox"'
    },
    'Collapsible': {
      title: 'Collapsible',
      description: 'A collapsible component that can be expanded or collapsed.',
      import: 'import { Collapsible } from "@/components/ui/collapsible"'
    },
    'Command': {
      title: 'Command',
      description: 'A command palette component for quick actions.',
      import: 'import { Command } from "@/components/ui/command"'
    },
    'Container': {
      title: 'Container',
      description: 'A container component for layout and spacing.',
      import: 'import Container from "@/components/ui/container"'
    },
    'DataTable': {
      title: 'DataTable',
      description: 'A data table component for displaying tabular data.',
      import: 'import { DataTable } from "@/components/ui/data-table"'
    },
    'DatePicker': {
      title: 'DatePicker',
      description: 'A date picker component for selecting dates.',
      import: 'import { DatePicker } from "@/components/ui/date-picker"'
    },
    'Drawer': {
      title: 'Drawer',
      description: 'A drawer component that slides in from the side.',
      import: 'import { Drawer } from "@/components/ui/drawer"'
    },
    'Dropdown': {
      title: 'Dropdown',
      description: 'A dropdown component for selecting options.',
      import: 'import { DropDown } from "@/components/ui/dropdown"'
    },
    'DropdownMenu': {
      title: 'DropdownMenu',
      description: 'A dropdown menu component with various options.',
      import: 'import { DropdownMenu } from "@/components/ui/dropdown-menu"'
    },
    'Fade': {
      title: 'Fade',
      description: 'A fade animation component.',
      import: 'import { Fade } from "@/components/ui/fade"'
    },
    'HeaderBar': {
      title: 'HeaderBar',
      description: 'A header bar component with URL and action icons.',
      import: 'import { HeaderBar } from "@/components/ui/header-bar"'
    },
    'IconButton': {
      title: 'IconButton',
      description: 'A button component that only contains an icon.',
      import: 'import { IconButton } from "@/components/ui/icon-button"'
    },
    'Image': {
      title: 'Image',
      description: 'An image component with various display options.',
      import: 'import Image from "@/components/ui/image"'
    },
    'ImageCarousel': {
      title: 'ImageCarousel',
      description: 'A carousel component specifically for images.',
      import: 'import { ImageCarousel } from "@/components/ui/image-carousel"'
    },
    'Input': {
      title: 'Input',
      description: 'Displays a form input field.',
      import: 'import { Input } from "@/components/ui/input"'
    },
    'InputOTP': {
      title: 'InputOTP',
      description: 'An input component for one-time passwords.',
      import: 'import { InputOTP } from "@/components/ui/input-otp"'
    },
    'Loader': {
      title: 'Loader',
      description: 'A loading component with various animation styles.',
      import: 'import { Loader } from "@/components/ui/loader"'
    },
    'MagicCard': {
      title: 'MagicCard',
      description: 'A card with a magical glow effect that follows the cursor.',
      import: 'import { MagicCard } from "@/components/ui/magic-card"'
    },
    'Marquee': {
      title: 'Marquee',
      description: 'A marquee component for scrolling text or content.',
      import: 'import { Marquee } from "@/components/ui/marquee"'
    },
    'Modal': {
      title: 'Modal',
      description: 'A modal component for displaying content in an overlay.',
      import: 'import { Modal } from "@/components/ui/modal"'
    },
    'Pagination': {
      title: 'Pagination',
      description: 'A pagination component for navigating through pages.',
      import: 'import { Pagination } from "@/components/ui/pagination"'
    },
    'PaymentForm': {
      title: 'PaymentForm',
      description: 'A payment form component for processing payments.',
      import: 'import { PaymentForm } from "@/components/ui/payment-form"'
    },
    'ProfileVerification': {
      title: 'ProfileVerification',
      description: 'A component for displaying profile verification status.',
      import: 'import { ProfileVerification } from "@/components/ui/profile-verification"'
    },
    'ProgressBar': {
      title: 'ProgressBar',
      description: 'A progress bar component for showing completion status.',
      import: 'import { ProgressBar } from "@/components/ui/progress-bar"'
    },
    'Radio': {
      title: 'Radio',
      description: 'A control that allows the user to select a single option from a set.',
      import: 'import { Radio } from "@/components/ui/radio"'
    },
    'RadioCard': {
      title: 'RadioCard',
      description: 'A card-style radio button for selecting options.',
      import: 'import { RadioCard } from "@/components/ui/radio-card"'
    },
    'ScrollArea': {
      title: 'ScrollArea',
      description: 'A scrollable area component with custom scrollbars.',
      import: 'import { ScrollArea } from "@/components/ui/scroll-area"'
    },
    'Select': {
      title: 'Select',
      description: 'A select component for choosing from a list of options.',
      import: 'import { Select } from "@/components/ui/select"'
    },
    'Skeleton': {
      title: 'Skeleton',
      description: 'A skeleton component for loading states.',
      import: 'import { Skeleton } from "@/components/ui/skeleton"'
    },
    'Slider': {
      title: 'Slider',
      description: 'An input where the user selects a value from within a given range.',
      import: 'import { Slider } from "@/components/ui/slider"'
    },
    'Switch': {
      title: 'Switch',
      description: 'A control that allows the user to toggle between checked and not checked.',
      import: 'import { Switch } from "@/components/ui/switch"'
    },
    'Tabs': {
      title: 'Tabs',
      description: 'A tabs component for organizing content into sections.',
      import: 'import { Tabs } from "@/components/ui/tabs"'
    },
    'Testimonials': {
      title: 'Testimonials',
      description: 'A testimonials component for displaying customer feedback.',
      import: 'import { Testimonials } from "@/components/ui/testimonials"'
    },
    'Textarea': {
      title: 'Textarea',
      description: 'A textarea component for multi-line text input.',
      import: 'import { TextArea } from "@/components/ui/textarea"'
    },
    'Toast': {
      title: 'Toast',
      description: 'A toast component for displaying notifications.',
      import: 'import { ToastProvider, useToast } from "@/components/ui/toast"'
    },
    'Tooltip': {
      title: 'Tooltip',
      description: 'A tooltip component for displaying additional information.',
      import: 'import { Tooltip } from "@/components/ui/tooltip"'
    },
    'Typography': {
      title: 'Typography',
      description: 'Typography components for consistent text styling.',
      import: 'import Typography from "@/components/ui/typography"'
    }
  };

  const info = componentInfo[componentName as keyof typeof componentInfo];

  if (!info) {
    return (
      <DocsLayout>
        <Container size="2xl">
          <div className="text-center py-16">
            <h1 className="text-2xl font-semibold mb-4">Component Not Found</h1>
            <p className="text-foreground/70">The component you're looking for doesn't exist.</p>
          </div>
        </Container>
      </DocsLayout>
    );
  }

  const registered = componentsRegistry.find(c => c.name === componentName);

  return (
    <DocsLayout>
      <div className="flex gap-6">
        {/* Main Content */}
        <Container size="sm">
        <div className="flex-1 min-w-0 px-6 md:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
          

            {/* Installation */}
            <div className="space-y-4" id="installation">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Installation
              </h2>
              <div className="bg-background rounded-xl border border-border overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-muted border-b border-border/60">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-foreground/60 font-mono">import</span>
                </div>
                <pre className="p-6 overflow-x-auto text-sm text-foreground font-mono leading-relaxed">
                  <code>{info.import}</code>
                </pre>
              </div>
            </div>

            {/* Demo */}
            <div className="space-y-4" id="examples">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Examples
              </h2>
              <div className="bg-background border border-border rounded-2xl p-6 md:p-8 min-h-[360px] md:min-h-[420px]">
                <ComponentDemo componentName={componentName} Component={registered?.component ?? null} />
              </div>
            </div>

            {/* API Reference */}
            <div className="space-y-4" id="api">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                API Reference
              </h2>
              <div className="bg-background border border-border rounded-2xl p-4 md:p-6">
                <APIReference componentName={componentName} />
              </div>
            </div>
          </div>
        </div>
        </Container>

        {/* Right Sidebar */}
        <aside className="hidden lg:block sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto flex-none max-w-80 w-full bg-background/50 backdrop-blur-md border-l border-border/50 p-6 space-y-8 rounded-l-xl">
          {/* Component Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Component Info
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-foreground/60">Status</span>
                <Badge variant="secondary">Available</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-foreground/60">Version</span>
                <span className="text-sm font-medium">v1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-foreground/60">Type</span>
                <span className="text-sm font-medium">React Component</span>
              </div>
            </div>
          </div>

          {/* Props */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Props
            </h3>
            <div className="space-y-3">
              {getComponentProps(componentName).map((prop, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{prop.name}</code>
                    <Badge variant="secondary" className="text-xs">{prop.type}</Badge>
                  </div>
                  <p className="text-xs text-foreground/60">{prop.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Quick Links
            </h3>
            <div className="space-y-2">
              <a href="#installation" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                Installation
              </a>
              <a href="#examples" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                Examples
              </a>
              <a href="#api" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                API Reference
              </a>
            </div>
          </div>
        </aside>
      </div>
    </DocsLayout>
  );
}

function getComponentProps(componentName: string) {
  const propsMap: Record<string, Array<{name: string, type: string, description: string}>> = {
    'Button': [
      { name: 'variant', type: 'string', description: 'Button style variant' },
      { name: 'size', type: 'string', description: 'Button size' },
      { name: 'disabled', type: 'boolean', description: 'Disable the button' },
      { name: 'onClick', type: 'function', description: 'Click handler' }
    ],
    'Card': [
      { name: 'title', type: 'string', description: 'Card title' },
      { name: 'description', type: 'string', description: 'Card description' },
      { name: 'dashed', type: 'boolean', description: 'Use dashed border' },
      { name: 'shadow', type: 'boolean', description: 'Show shadow' }
    ],
    'Badge': [
      { name: 'variant', type: 'string', description: 'Badge style variant' },
      { name: 'bg', type: 'boolean', description: 'Show background' }
    ],
    'Input': [
      { name: 'placeholder', type: 'string', description: 'Input placeholder' },
      { name: 'type', type: 'string', description: 'Input type' },
      { name: 'disabled', type: 'boolean', description: 'Disable the input' }
    ],
    'Switch': [
      { name: 'checked', type: 'boolean', description: 'Switch state' },
      { name: 'onChange', type: 'function', description: 'Change handler' }
    ],
    'Checkbox': [
      { name: 'checked', type: 'boolean', description: 'Checkbox state' },
      { name: 'onChange', type: 'function', description: 'Change handler' }
    ],
    'Radio': [
      { name: 'name', type: 'string', description: 'Radio group name' },
      { name: 'value', type: 'string', description: 'Radio value' },
      { name: 'label', type: 'string', description: 'Radio label' },
      { name: 'checked', type: 'boolean', description: 'Radio state' }
    ],
    'RadioCard': [
      { name: 'title', type: 'string', description: 'Card title' },
      { name: 'description', type: 'string', description: 'Card description' },
      { name: 'value', type: 'string', description: 'Radio value' },
      { name: 'checked', type: 'boolean', description: 'Radio state' }
    ],
    'Avatar': [
      { name: 'src', type: 'string', description: 'Avatar image source' },
      { name: 'alt', type: 'string', description: 'Alt text' }
    ],
    'Slider': [
      { name: 'value', type: 'number[]', description: 'Slider value' },
      { name: 'onChange', type: 'function', description: 'Change handler' },
      { name: 'min', type: 'number', description: 'Minimum value' },
      { name: 'max', type: 'number', description: 'Maximum value' }
    ],
    'MagicCard': [
      { name: 'isMagic', type: 'boolean', description: 'Enable magic glow effect' },
      { name: 'children', type: 'ReactNode', description: 'Card content' }
    ]
  };

  return propsMap[componentName] || [
    { name: 'children', type: 'ReactNode', description: 'Component content' },
    { name: 'className', type: 'string', description: 'Additional CSS classes' }
  ];
}
