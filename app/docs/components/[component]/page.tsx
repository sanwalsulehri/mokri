'use client';

import React, { useState, useEffect } from 'react';
import { DocsLayout, ComponentDemo, componentsRegistry, getComponentCode, CodeWindow } from '../../../../components/docs/docs-layout';
import Container from '../../../../components/ui/container';
import { Badge } from '../../../../components/ui/badge';
import { APIReference } from '../../../../components/docs/api-reference';
import { Breadcrumbs } from '../../../../components/ui/breadcrumbs';

// Smooth link component for right sidebar
function SmoothLink({ href, label, isMain = false, isSub = false }: { href: string; label: string; isMain?: boolean; isSub?: boolean }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Get all section elements for comparison
    const getAllSections = () => {
      return ['#examples', '#installation', '#code', '#api', '#api-props', '#api-examples', '#api-presets']
        .map(selector => ({
          selector,
          element: document.querySelector(selector)
        }))
        .filter(({ element }) => element !== null);
    };

    const checkActive = () => {
      const currentElement = document.querySelector(href);
      if (!currentElement) {
        setIsActive(false);
        return;
      }

      const allSections = getAllSections();
      const scrollPosition = window.scrollY + 150; // Offset for sticky header
      let activeSection = null;
      let minDistance = Infinity;

      // Find the section closest to the scroll position
      allSections.forEach(({ selector, element }) => {
        if (!element) return;
        const top = (element as HTMLElement).offsetTop;
        const distance = Math.abs(scrollPosition - top);
        
        if (top <= scrollPosition && distance < minDistance) {
          minDistance = distance;
          activeSection = selector;
        }
      });

      // For nested sections (API Reference subsections), check if they're in view
      if (isSub) {
        const rect = currentElement.getBoundingClientRect();
        const isInView = rect.top >= 100 && rect.top <= window.innerHeight * 0.6;
        setIsActive(isInView || activeSection === href);
      } else {
        setIsActive(activeSection === href);
      }
    };

    // Check on mount and scroll
    checkActive();
    const timeoutId = setTimeout(checkActive, 200);
    const scrollHandler = () => {
      requestAnimationFrame(checkActive);
    };
    
    window.addEventListener('scroll', scrollHandler, { passive: true });
    window.addEventListener('resize', checkActive);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', checkActive);
    };
  }, [href, isSub]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 120;
      const elementPosition = (element as HTMLElement).offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update active state after scroll
      setTimeout(() => {
        setIsActive(true);
      }, 500);
    }
  };

  const baseClasses = isSub 
    ? 'block text-xs py-1.5 px-3 rounded-md transition-all duration-200'
    : isMain
    ? 'block text-sm font-medium py-2 px-3 rounded-md transition-all duration-200'
    : 'block text-sm py-2 px-3 rounded-md transition-all duration-200';

  const activeClasses = isActive
    ? 'bg-muted/60 text-primary font-semibold '
    : 'text-foreground/70 hover:text-foreground hover:bg-muted/60 active:bg-muted/70';

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${baseClasses} ${activeClasses}`}
    >
      {label}
    </a>
  );
}

interface ComponentPageProps {
  params: Promise<{
    component: string;
  }>;
}

function kebabToPascalCase(input: string) {
  // Special mappings for acronyms and special cases
  const specialCases: Record<string, string> = {
    'input-otp': 'InputOTP',
    'otp': 'OTP'
  };
  
  if (specialCases[input]) {
    return specialCases[input];
  }
  
  return input
    .split('-')
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

export default function ComponentPage({ params }: ComponentPageProps) {
  const resolvedParams = React.use(params);
  const componentName = kebabToPascalCase(resolvedParams.component);
  
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
    'UserList': {
      title: 'UserList',
      description: 'A user list display with avatars and add action.',
      import: 'import { UserList, sampleUsers } from "@/components/ui/user-list"'
    },
    'Image': {
      title: 'Image',
      description: 'An image component with standard HTML img attributes and additional props.',
      import: 'import { Image } from "@/components/ui/image"'
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
    },
    'ThemeToggle': {
      title: 'ThemeToggle',
      description: 'Toggle between light and dark themes using a button or switch.',
      import: 'import { ThemeToggle } from "@/components/ui/theme-toggle"'
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
        <Container size="sm" className="w-full">
        <div className="flex-1 w-full min-w-full px-6 md:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Breadcrumbs */}
            <div className="pt-2">
              <Breadcrumbs 
                items={[
                  { label: 'Docs', href: '/docs' },
                  { label: 'Components', href: '/docs/components' },
                  { label: info.title }
                ]}
              />
            </div>

            {/* Preview */}
            <div className="space-y-4" id="examples">
              <h2 className="text-2xl font-medium flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Preview
              </h2>
                <ComponentDemo componentName={componentName} Component={registered?.component ?? null} />
            </div>

            {/* Installation */}
            <div className="space-y-4" id="installation">
              <h2 className="text-2xl font-medium flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Installation
              </h2>
              <CodeWindow code={info.import} filename="import.ts" />
            </div>

            {/* Code */}
            <div className="space-y-4" id="code">
              <h2 className="text-2xl font-medium flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Code
              </h2>
              <CodeWindow code={getComponentCode(componentName)} />
            </div>

            {/* API Reference (single heading from component) */}
            <div className="space-y-4" id="api">
              <div className="bg-background border border-border rounded-2xl p-4 md:p-6">
                <APIReference componentName={componentName} />
              </div>
            </div>
          </div> 
        </div>
        </Container>

        {/* Right Sidebar */}
        <aside className="hidden lg:block sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto flex-none max-w-80 w-full">
          <div className="p-6 space-y-6">
            {/* On this page - links only */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                On this page
              </h3>
              <nav className="space-y-1">
                <SmoothLink href="#examples" label="Preview" />
                <SmoothLink href="#installation" label="Installation" />
                <SmoothLink href="#code" label="Usage" />
                <div className="pt-2 mt-2 border-t border-border/50">
                  <SmoothLink href="#api" label="API Reference" isMain />
                  <div className="mt-2 ml-4 space-y-1.5">
                    <SmoothLink href="#api-props" label="Props" isSub />
                    <SmoothLink href="#api-examples" label="Examples" isSub />
                    <SmoothLink href="#api-presets" label="Presets" isSub />
                  </div>
                </div>
              </nav>
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
