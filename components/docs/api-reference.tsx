'use client';

import React from 'react';
import { Badge } from '../ui/badge';
import { CodeWindow } from './docs-layout';

// Helper function to highlight code snippets (for prop types)
function highlightType(type: string, isDark: boolean): string {
  const colors = isDark
    ? {
        keyword: '#C586C0',
        type: '#4EC9B0',
        string: '#CE9178',
      }
    : {
        keyword: '#d73a49',
        type: '#005cc5',
        string: '#032f62',
      };

  // Escape HTML
  let out = type
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Highlight strings
  out = out.replace(/(['"])([^'"]*)\1/g, (match, quote, content) => {
    return `${quote}<span style="color:${colors.string}">${content}</span>${quote}`;
  });

  // Highlight keywords
  out = out.replace(/\b(keyof|typeof|extends|infer|as|const|readonly)\b/g, (match) => {
    return `<span style="color:${colors.keyword}">${match}</span>`;
  });

  // Highlight types (but not if already highlighted)
  out = out.replace(/\b(string|number|boolean|any|void|unknown|object|Record|Array|Promise|React\.(Node|Component|FC))\b/g, (match) => {
    if (match.includes('<span')) return match;
    return `<span style="color:${colors.type}">${match}</span>`;
  });

  return out;
}

interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
}

interface ComponentAPI {
  name: string;
  description: string;
  import: string;
  props: PropDefinition[];
  examples?: string[];
  presets?: Record<string, any>;
}

const componentAPIs: Record<string, ComponentAPI> = {
  Accordion: {
    name: 'Accordion',
    description: 'A vertically stacked set of interactive headings that each reveal a section of content.',
    import: 'import { Accordion, AccordionPresets, AccordionIcons } from "@/components/ui/accordion"',
    props: [
      {
        name: 'items',
        type: 'AccordionItem[]',
        required: true,
        description: 'Array of accordion items to display'
      },
      {
        name: 'variant',
        type: '"default" | "bordered" | "minimal" | "card"',
        required: false,
        default: '"default"',
        description: 'Visual variant of the accordion'
      },
      {
        name: 'size',
        type: '"sm" | "md" | "lg"',
        required: false,
        default: '"md"',
        description: 'Size of the accordion items'
      },
      {
        name: 'allowMultiple',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether multiple items can be open simultaneously'
      },
      {
        name: 'defaultOpenItems',
        type: 'string[]',
        required: false,
        default: '[]',
        description: 'Array of item IDs that should be open by default'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes'
      },
      {
        name: 'onToggle',
        type: '(itemId: string, isOpen: boolean) => void',
        required: false,
        description: 'Callback function when an item is toggled'
      }
    ],
    examples: [
      `// Basic accordion
<Accordion
  items={[
    {
      id: 'item-1',
      title: 'What is Vertex UI?',
      content: 'Vertex UI is a collection of reusable components...'
    },
    {
      id: 'item-2', 
      title: 'How to install?',
      content: 'You can install it via npm...'
    }
  ]}
/>`,
      `// FAQ accordion with preset
<Accordion
  {...AccordionPresets.faq}
  items={faqItems}
/>`,
      `// Accordion with icons
<Accordion
  items={[
    {
      id: 'help',
      title: 'Help Center',
      content: 'Find answers to common questions',
      icon: <AccordionIcons.Question />
    }
  ]}
/>`
    ],
    presets: {
      faq: 'FAQ style with bordered variant and multiple open items',
      navigation: 'Navigation style with minimal variant and small size',
      card: 'Card style with card variant and single open item',
      simple: 'Simple default style with single open item'
    }
  },

  Avatar: {
    name: 'Avatar',
    description: 'An image element with a fallback to represent a user.',
    import: 'import { Avatar, AvatarGroup } from "@/components/ui/avatar"',
    props: [
      {
        name: 'src',
        type: 'string',
        required: false,
        description: 'URL of the avatar image'
      },
      {
        name: 'alt',
        type: 'string',
        required: false,
        default: '"Avatar"',
        description: 'Alt text for the image'
      },
      {
        name: 'fallback',
        type: 'string',
        required: false,
        description: 'Text to display when image is not available'
      },
      {
        name: 'size',
        type: '"sm" | "md" | "lg"',
        required: false,
        default: '"md"',
        description: 'Size of the avatar'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes'
      },
      {
        name: 'onClick',
        type: '() => void',
        required: false,
        description: 'Click handler for the avatar'
      }
    ],
    examples: [
      `// Basic avatar
<Avatar 
  src="/user.jpg" 
  alt="John Doe" 
/>`,
      `// Avatar with fallback
<Avatar 
  src="/user.jpg" 
  alt="John Doe"
  fallback="JD"
/>`,
      `// Different sizes
<Avatar size="sm" src="/user.jpg" alt="Small" />
<Avatar size="md" src="/user.jpg" alt="Medium" />
<Avatar size="lg" src="/user.jpg" alt="Large" />`,
      `// Avatar group
<AvatarGroup
  avatars={[
    { src: '/user1.jpg', alt: 'User 1' },
    { src: '/user2.jpg', alt: 'User 2' },
    { src: '/user3.jpg', alt: 'User 3' }
  ]}
  max={3}
/>`
    ]
  },

  AvatarGroup: {
    name: 'AvatarGroup',
    description: 'A group of avatars that overlap with each other.',
    import: 'import { AvatarGroup } from "@/components/ui/avatar"',
    props: [
      {
        name: 'avatars',
        type: 'Array<{src?: string, alt?: string, fallback?: string}>',
        required: true,
        description: 'Array of avatar objects'
      },
      {
        name: 'size',
        type: '"sm" | "md" | "lg"',
        required: false,
        default: '"md"',
        description: 'Size of the avatars in the group'
      },
      {
        name: 'max',
        type: 'number',
        required: false,
        default: '5',
        description: 'Maximum number of avatars to display'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes'
      }
    ],
    examples: [
      `// Basic avatar group
<AvatarGroup
  avatars={[
    { src: '/user1.jpg', alt: 'User 1' },
    { src: '/user2.jpg', alt: 'User 2' },
    { src: '/user3.jpg', alt: 'User 3' }
  ]}
/>`,
      `// Avatar group with max limit
<AvatarGroup
  avatars={avatars}
  max={3}
  size="lg"
/>`
    ]
  },

  Badge: {
    name: 'Badge',
    description: 'Displays a badge or a component that looks like a badge.',
    import: 'import { Badge } from "@/components/ui/badge"',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        description: 'Content to display inside the badge'
      },
      {
        name: 'onClick',
        type: '() => void',
        required: false,
        description: 'Click handler for the badge'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes'
      },
      {
        name: 'bg',
        type: 'boolean',
        required: false,
        default: 'true',
        description: 'Whether to show background color'
      },
      {
        name: 'hover',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether to show hover effects'
      },
      {
        name: 'variant',
        type: '"default" | "secondary" | "destructive" | "muted"',
        required: false,
        default: '"default"',
        description: 'Visual variant of the badge'
      }
    ],
    examples: [
      `// Basic badge
<Badge>Default</Badge>`,
      `// Different variants
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="muted">Muted</Badge>`,
      `// Badge without background
<Badge bg={false}>No Background</Badge>`,
      `// Clickable badge
<Badge onClick={() => console.log('Clicked')}>
  Clickable Badge
</Badge>`,
      `// Badge with hover effect
<Badge hover={true} variant="secondary">
  Hover Badge
</Badge>`
    ]
  },

  Banner: {
    name: 'Banner',
    description: 'A dismissible notice for announcements, success, warnings, info, or errors.',
    import: 'import { Banner, BannerPresets } from "@/components/ui/banner"',
    props: [
      {
        name: 'title',
        type: 'string',
        required: false,
        description: 'Heading text displayed prominently'
      },
      {
        name: 'description',
        type: 'string',
        required: false,
        description: 'Optional supporting text under the title'
      },
      {
        name: 'variant',
        type: '"default" | "success" | "warning" | "error" | "info" | "gradient"',
        required: false,
        default: '"default"',
        description: 'Visual style and icon of the banner'
      },
      {
        name: 'size',
        type: '"sm" | "md" | "lg"',
        required: false,
        default: '"md"',
        description: 'Adjusts spacing and typography scale'
      },
      {
        name: 'dismissible',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Shows a close button and enables dismissal'
      },
      {
        name: 'onDismiss',
        type: '() => void',
        required: false,
        description: 'Called when the close button is clicked'
      },
      {
        name: 'action',
        type: '{ label: string; onClick: () => void }',
        required: false,
        description: 'Optional call-to-action button configuration'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes on the container'
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        required: false,
        description: 'Custom content rendered under description'
      },
      {
        name: 'headerStyle',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Removes border radius and adjusts padding for header areas'
      }
    ],
    examples: [
      `// Basic banner\n<Banner title="Heads up" description="We launched something new." />`,
      `// Success and dismissible\n<Banner\n  variant="success"\n  title="Saved"\n  description="Your changes have been saved."\n  dismissible\n  onDismiss={() => console.log('dismissed')}\n/>`,
      `// Warning with action\n<Banner\n  variant="warning"\n  title="Scheduled maintenance"\n  description="Service will be unavailable Sunday 2–4 AM EST."\n  action={{ label: 'Details', onClick: () => console.log('details') }}\n/>`,
      `// Header style for layout headers\n<Banner\n  headerStyle\n  variant="info"\n  title="Welcome"\n  description="Here is what changed recently."\n/>`,
      `// Using presets\n<Banner {...BannerPresets.announcement} />`
    ],
    presets: {
      announcement: 'Info preset with title, description and a Learn More action',
      maintenance: 'Warning preset, dismissible, for planned downtime notices',
      success: 'Success preset, dismissible, for positive confirmations',
      error: 'Error preset with a Retry action and dismissible control'
    }
  },

  Breadcrumbs: {
    name: 'Breadcrumbs',
    description: 'A navigation component that indicates the current page’s location within a hierarchy.',
    import: 'import { Breadcrumbs, BreadcrumbPresets } from "@/components/ui/breadcrumbs"',
    props: [
      { name: 'items', type: 'Array<{ label: string; href?: string; icon?: React.ReactNode }>', required: true, description: 'Breadcrumb trail items in order' },
      { name: 'separator', type: 'React.ReactNode', required: false, description: 'Custom separator element between items' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'showHome', type: 'boolean', required: false, default: 'true', description: 'Prepends a Home item at the start' },
      { name: 'homeIcon', type: 'React.ReactNode', required: false, description: 'Custom icon for the Home item' },
      { name: 'onItemClick', type: '(item: {label: string; href?: string; icon?: React.ReactNode}, index: number) => void', required: false, description: 'Called when a non-last, clickable item is clicked' }
    ],
    examples: [
      `// Basic\n<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Library', href: '/library' }, { label: 'Data' }]} />`,
      `// Custom separator\n<Breadcrumbs\n  items={[{ label: 'Home', href: '/' }, { label: 'Settings' }]}\n  separator={<span className="mx-1">/</span>}\n/>`,
      `// Without Home\n<Breadcrumbs showHome={false} items={[{ label: 'Docs', href: '/docs' }, { label: 'Components' }]} />`,
      `// Using a preset\n<Breadcrumbs items={BreadcrumbPresets.ecommerce('Shoes', 'Sneakers', 'Air Runner')} />`
    ],
    presets: {
      fileSystem: 'Creates breadcrumbs from a path array',
      ecommerce: 'Shop > Category > Subcategory > Product trail',
      admin: 'Admin > Section > Subsection trail'
    }
  },

  ButtonGroup: {
    name: 'ButtonGroup',
    description: 'Groups buttons together with segmented, attached, spaced, or bordered layouts.',
    import: 'import { ButtonGroup, ButtonGroupItem, BorderedButtonGroup, ButtonGroupPresets, ButtonGroupConfigs } from "@/components/ui/button-group"',
    props: [
      { name: 'children', type: 'React.ReactNode', required: true, description: 'One or more ButtonGroupItem or Button children' },
      { name: 'variant', type: '"default" | "segmented" | "attached" | "spaced" | "bordered"', required: false, default: '"default"', description: 'Layout style for the group' },
      { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Controls padding and text size' },
      { name: 'orientation', type: '"horizontal" | "vertical"', required: false, default: '"horizontal"', description: 'Stack buttons horizontally or vertically' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disables the entire group' }
    ],
    examples: [
      `// Segmented group\n<ButtonGroup variant="segmented">\n  <ButtonGroupItem active>Day</ButtonGroupItem>\n  <ButtonGroupItem>Week</ButtonGroupItem>\n  <ButtonGroupItem>Month</ButtonGroupItem>\n</ButtonGroup>`,
      `// Attached toolbar\n<ButtonGroup variant="attached">\n  <ButtonGroupItem>Bold</ButtonGroupItem>\n  <ButtonGroupItem>Italic</ButtonGroupItem>\n  <ButtonGroupItem>Underline</ButtonGroupItem>\n</ButtonGroup>`,
      `// Spaced actions\n<ButtonGroup variant="spaced">\n  <ButtonGroupItem>Cancel</ButtonGroupItem>\n  <ButtonGroupItem variant="primary">Save</ButtonGroupItem>\n</ButtonGroup>`,
      `// Using preset\n<ButtonGroup {...ButtonGroupPresets.filter}>\n  <ButtonGroupItem active>All</ButtonGroupItem>\n  <ButtonGroupItem>Active</ButtonGroupItem>\n  <ButtonGroupItem>Archived</ButtonGroupItem>\n</ButtonGroup>`
    ],
    presets: {
      filter: 'Small segmented control for filters',
      toolbar: 'Attached toolbar-style group',
      actions: 'Horizontally spaced action group',
      vertical: 'Default vertical stack',
      smallSegmented: 'Small segmented horizontal group',
      largeActions: 'Large spaced action group'
    }
  },

  ButtonGroupItem: {
    name: 'ButtonGroupItem',
    description: 'A button designed to be used inside ButtonGroup with active and variant states.',
    import: 'import { ButtonGroupItem } from "@/components/ui/button-group"',
    props: [
      { name: 'children', type: 'React.ReactNode', required: true, description: 'Button label or content' },
      { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
      { name: 'active', type: 'boolean', required: false, default: 'false', description: 'Highlights the item as selected' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disables the item' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'variant', type: '"default" | "primary" | "secondary" | "destructive" | "outline" | "ghost"', required: false, default: '"default"', description: 'Visual style of the item' }
    ],
    examples: [
      `// Inside a group\n<ButtonGroup variant="segmented">\n  <ButtonGroupItem active>Left</ButtonGroupItem>\n  <ButtonGroupItem>Center</ButtonGroupItem>\n  <ButtonGroupItem>Right</ButtonGroupItem>\n</ButtonGroup>`
    ]
  },

  BorderedButtonGroup: {
    name: 'BorderedButtonGroup',
    description: 'A high-level button group with built-in button rendering and an optional “More” dropdown.',
    import: 'import { BorderedButtonGroup, ButtonGroupConfigs } from "@/components/ui/button-group"',
    props: [
      { name: 'buttons', type: 'Array<{ label: string; onClick?: () => void; active?: boolean; disabled?: boolean; variant?: "default" | "primary" | "secondary" | "destructive" | "outline" | "ghost" }>', required: true, description: 'Buttons to render in the group' },
      { name: 'moreOptions', type: 'Array<{ label: string; onClick?: () => void; icon?: React.ReactNode; disabled?: boolean; divider?: boolean }>', required: false, description: 'Optional items for the trailing dropdown' },
      { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Controls padding and text size' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disables the entire group' }
    ],
    examples: [
      `// File operation actions\n<BorderedButtonGroup buttons={ButtonGroupConfigs.fileOperations} />`,
      `// With dropdown\n<BorderedButtonGroup\n  buttons={[{ label: 'Run' }, { label: 'Build', active: true }, { label: 'Test' }]}\n  moreOptions={[{ label: 'Deploy' }, { label: 'Settings' }, { divider: true, label: 'Danger', disabled: true }]}\n/>`
    ]
  },

  Calendar: {
    name: 'Calendar',
    description: 'A simple month view date picker with navigation and optional Today shortcut.',
    import: 'import { Calendar } from "@/components/ui/calendar"',
    props: [
      { name: 'selectedDate', type: 'Date', required: false, description: 'Currently selected date (controlled)' },
      { name: 'onDateSelect', type: '(date: Date) => void', required: false, description: 'Called when a day is clicked' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Controls overall sizing' },
      { name: 'showToday', type: 'boolean', required: false, default: 'true', description: 'Highlights today and shows Go to Today button' },
      { name: 'disabledDates', type: 'Date[]', required: false, default: '[]', description: 'Dates that cannot be selected' }
    ],
    examples: [
      `// Basic\n<Calendar />`,
      `// Controlled\n<Calendar selectedDate={selected} onDateSelect={setSelected} />`,
      `// With disabled dates\n<Calendar disabledDates={[new Date(2025, 0, 1)]} />`
    ]
  },

  CalendarRange: {
    name: 'CalendarRange',
    description: 'Date range selection using the Calendar under the hood.',
    import: 'import { CalendarRange } from "@/components/ui/calendar"',
    props: [
      { name: 'startDate', type: 'Date', required: false, description: 'Initial start date' },
      { name: 'endDate', type: 'Date', required: false, description: 'Initial end date' },
      { name: 'onDateRangeSelect', type: '(start: Date | null, end: Date | null) => void', required: false, description: 'Called when user updates the selected range' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Controls overall sizing' }
    ],
    examples: [
      `// Basic range\n<CalendarRange onDateRangeSelect={(start, end) => console.log(start, end)} />`
    ]
  },

  ImageCarousel: {
    name: 'ImageCarousel',
    description: 'A slick-powered image carousel with pagination, arrows, and autoplay.',
    import: 'import { ImageCarousel } from "@/components/ui/image-carousel"',
    props: [
      { name: 'data', type: 'Array<{ id: number | string; title: string; subtitle: string; image: string }>', required: false, description: 'Slides to render' },
      { name: 'itemsPerView', type: 'number', required: false, default: '3', description: 'Slides visible at once (responsive caps apply)' },
      { name: 'showPagination', type: 'boolean', required: false, default: 'true', description: 'Show dot indicators' },
      { name: 'autoPlay', type: 'boolean', required: false, default: 'false', description: 'Enable autoplay' },
      { name: 'autoPlaySpeed', type: 'number', required: false, default: '3000', description: 'Autoplay interval in ms' },
      { name: 'showArrows', type: 'boolean', required: false, default: 'true', description: 'Show previous/next arrows' },
      { name: 'arrowsInside', type: 'boolean', required: false, default: 'false', description: 'Place arrows inside the slide area' }
    ],
    examples: [
      `// Basic\n<ImageCarousel />`,
      `// Two per view, autoplay\n<ImageCarousel itemsPerView={2} autoPlay autoPlaySpeed={4000} />`
    ]
  },

  BeautifulImageCarousel: {
    name: 'BeautifulImageCarousel',
    description: 'An image carousel with gradient overlays and hover effects.',
    import: 'import { BeautifulImageCarousel } from "@/components/ui/carousel"',
    props: [
      { name: 'data', type: 'Array<{ id: number | string; title: string; subtitle: string; image: string }>', required: false, description: 'Slides to render' },
      { name: 'itemsPerView', type: 'number', required: false, default: '3', description: 'Slides visible at once' },
      { name: 'showPagination', type: 'boolean', required: false, default: 'true', description: 'Show dot indicators' },
      { name: 'autoPlay', type: 'boolean', required: false, default: 'false', description: 'Enable autoplay' },
      { name: 'autoPlaySpeed', type: 'number', required: false, default: '3000', description: 'Autoplay interval in ms' },
      { name: 'showArrows', type: 'boolean', required: false, default: 'true', description: 'Show previous/next arrows' },
      { name: 'arrowsInside', type: 'boolean', required: false, default: 'false', description: 'Place arrows inside the slide area' }
    ]
  },

  BeautifulCardCarousel: {
    name: 'BeautifulCardCarousel',
    description: 'A card carousel with images and textual content, built on slick.',
    import: 'import { BeautifulCardCarousel } from "@/components/ui/carousel"',
    props: [
      { name: 'data', type: 'Array<{ id: number | string; title: string; subtitle: string; description: string; image: string; gradient?: string }>', required: false, description: 'Card slides to render' },
      { name: 'itemsPerView', type: 'number', required: false, default: '3', description: 'Cards visible at once' },
      { name: 'showPagination', type: 'boolean', required: false, default: 'true', description: 'Show dot indicators' },
      { name: 'autoPlay', type: 'boolean', required: false, default: 'false', description: 'Enable autoplay' },
      { name: 'autoPlaySpeed', type: 'number', required: false, default: '5000', description: 'Autoplay interval in ms' },
      { name: 'showArrows', type: 'boolean', required: false, default: 'true', description: 'Show previous/next arrows' },
      { name: 'arrowsInside', type: 'boolean', required: false, default: 'false', description: 'Place arrows inside the slide area' }
    ]
  },

  Collapsible: {
    name: 'Collapsible',
    description: 'An expandable/collapsible content panel with animated transitions.',
    import: 'import { Collapsible, CollapsibleGroup, CollapsiblePresets, CollapsibleIcons } from "@/components/ui/collapsible"',
    props: [
      { name: 'title', type: 'string', required: true, description: 'Header text' },
      { name: 'children', type: 'React.ReactNode', required: true, description: 'Content to reveal' },
      { name: 'defaultOpen', type: 'boolean', required: false, default: 'false', description: 'Initial open state' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Sizing for padding and text' },
      { name: 'variant', type: '"default" | "bordered" | "minimal"', required: false, default: '"default"', description: 'Visual style' },
      { name: 'icon', type: 'React.ReactNode', required: false, description: 'Optional leading icon' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disables toggle interactions' }
    ],
    examples: [
      `// Basic\n<Collapsible title="Details">Hidden content</Collapsible>`,
      `// With preset\n<Collapsible {...CollapsiblePresets.faq} title="FAQ">Answer</Collapsible>`
    ],
    presets: {
      faq: 'Bordered, medium size',
      settings: 'Default variant, small size',
      docs: 'Minimal variant, medium size',
      panels: 'Bordered, large size'
    }
  },

  Command: {
    name: 'Command',
    description: 'A searchable command palette with grouping, keyboard navigation, and actions.',
    import: 'import { Command, CommandGroup, CommandPresets, CommandIcons } from "@/components/ui/command"',
    props: [
      { name: 'items', type: 'Array<{ id: string; label: string; description?: string; icon?: React.ReactNode; keywords?: string[]; action?: () => void; disabled?: boolean; group?: string; shortcut?: string }>', required: true, description: 'List of commands' },
      { name: 'placeholder', type: 'string', required: false, default: '"Type a command or search..."', description: 'Input placeholder' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Control sizing' },
      { name: 'variant', type: '"default" | "minimal" | "bordered"', required: false, default: '"default"', description: 'Visual style' },
      { name: 'showGroups', type: 'boolean', required: false, default: 'true', description: 'Group items by their group field' },
      { name: 'maxHeight', type: 'string', required: false, default: '"max-h-80"', description: 'Max height utility for the results' },
      { name: 'onSelect', type: '(item: any) => void', required: false, description: 'Called with selected item' },
      { name: 'onSearch', type: '(query: string) => void', required: false, description: 'Called when query changes' }
    ],
    examples: [
      `// Quick actions\n<Command {...CommandPresets.quickActions} items={[{ id: '1', label: 'Open' }, { id: '2', label: 'Save' }]} />`
    ],
    presets: {
      quickActions: 'Small, minimal, no group headers',
      fullPalette: 'Default variant with groups',
      compact: 'Small, bordered, no groups'
    }
  },

  Container: {
    name: 'Container',
    description: 'Responsive centered layout container with size and padding controls.',
    import: 'import Container from "@/components/ui/container"',
    props: [
      { name: 'children', type: 'React.ReactNode', required: true, description: 'Content to wrap' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'size', type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"', required: false, default: '"xl"', description: 'Max-width breakpoint' },
      { name: 'padding', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Horizontal padding' }
    ]
  },

  DataTable: {
    name: 'DataTable',
    description: 'A flexible, sortable, selectable data table.',
    import: 'import { DataTable, DataTablePresets } from "@/components/ui/data-table"',
    props: [
      { name: 'data', type: 'T[]', required: true, description: 'Row data array' },
      { name: 'columns', type: 'Array<{ key: keyof T; label: string; sortable?: boolean; width?: string; render?: (value: any, row: T, index: number) => React.ReactNode }>', required: true, description: 'Column definitions' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Cell sizing' },
      { name: 'selectable', type: 'boolean', required: false, default: 'true', description: 'Enable row selection' },
      { name: 'onSelectionChange', type: '(selectedRows: T[]) => void', required: false, description: 'Selection callback' },
      { name: 'onRowClick', type: '(row: T, index: number) => void', required: false, description: 'Row click callback' },
      { name: 'emptyMessage', type: 'string', required: false, default: '"No data available"', description: 'Shown when no rows' }
    ],
    examples: [
      `// Basic\n<DataTable data={rows} columns={[{ key: 'name', label: 'Name' }]} />`
    ],
    presets: {
      small: 'Small, selectable',
      medium: 'Medium, selectable',
      large: 'Large, selectable'
    }
  },

  DatePicker: {
    name: 'DatePicker',
    description: 'A button-triggered calendar picker with animated dropdown.',
    import: 'import { DatePicker, DatePickerPresets } from "@/components/ui/date-picker"',
    props: [
      { name: 'value', type: 'Date', required: false, description: 'Controlled selected date' },
      { name: 'onChange', type: '(date: Date) => void', required: false, description: 'Called on date select' },
      { name: 'placeholder', type: 'string', required: false, default: '"Select a date..."', description: 'Trigger placeholder' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"sm"', description: 'Control trigger sizing' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable interactions' },
      { name: 'minDate', type: 'Date', required: false, description: 'Minimum selectable date' },
      { name: 'maxDate', type: 'Date', required: false, description: 'Maximum selectable date' },
      { name: 'showToday', type: 'boolean', required: false, default: 'true', description: 'Show Go to Today and today highlight' }
    ],
    examples: [
      `// Basic\n<DatePicker />`,
      `// Controlled\n<DatePicker value={date} onChange={setDate} />`
    ],
    presets: {
      small: 'Small size',
      medium: 'Medium size',
      large: 'Large size'
    }
  },

  Drawer: {
    name: 'Drawer',
    description: 'A sliding panel from any screen edge with overlay and header.',
    import: 'import { Drawer } from "@/components/ui/drawer"',
    props: [
      { name: 'isOpen', type: 'boolean', required: true, description: 'Controls visibility' },
      { name: 'onClose', type: '() => void', required: true, description: 'Called to close the drawer' },
      { name: 'title', type: 'string', required: false, description: 'Header title' },
      { name: 'description', type: 'string', required: false, description: 'Header description' },
      { name: 'children', type: 'React.ReactNode', required: false, description: 'Drawer body content' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'position', type: '"left" | "right" | "top" | "bottom"', required: false, default: '"right"', description: 'Slide-in side' },
      { name: 'size', type: '"sm" | "md" | "lg" | "xl"', required: false, default: '"md"', description: 'Panel dimensions' },
      { name: 'showCloseButton', type: 'boolean', required: false, default: 'true', description: 'Show header close button' }
    ]
  },

  DropDown: {
    name: 'DropDown',
    description: 'A styled select-like dropdown with custom trigger and animated menu.',
    import: 'import { DropDown } from "@/components/ui/dropdown"',
    props: [
      { name: 'label', type: 'string', required: false, description: 'Optional field label' },
      { name: 'placeholder', type: 'string', required: false, default: '"Select an option..."', description: 'Trigger text when empty' },
      { name: 'options', type: 'Array<{ value: string; label: string }>', required: false, description: 'Selectable options' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'value', type: 'string', required: false, description: 'Controlled selected value' },
      { name: 'onChange', type: '(value: string) => void', required: false, description: 'Selection callback' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable interactions' }
    ]
  },

  DropdownMenu: {
    name: 'DropdownMenu',
    description: 'Headless dropdown menu with custom trigger, alignment, and items.',
    import: 'import { DropdownMenu, DropdownIcons } from "@/components/ui/dropdown-menu"',
    props: [
      { name: 'trigger', type: 'React.ReactNode', required: true, description: 'Element that toggles the menu' },
      { name: 'options', type: 'Array<{ label: string; value: string; icon?: React.ReactNode; onClick?: () => void; disabled?: boolean; divider?: boolean }>', required: true, description: 'Menu items' },
      { name: 'align', type: '"left" | "right" | "center"', required: false, default: '"right"', description: 'Menu alignment' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'onOpenChange', type: '(open: boolean) => void', required: false, description: 'Open state callback' }
    ]
  },

  Fade: {
    name: 'Fade',
    description: 'Adds gradient fade overlays to the left and/or right edges of content.',
    import: 'import { Fade } from "@/components/ui/fade"',
    props: [
      { name: 'children', type: 'React.ReactNode', required: true, description: 'Scrollable content to wrap' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'fadeLeft', type: 'boolean', required: false, default: 'true', description: 'Show left fade' },
      { name: 'fadeRight', type: 'boolean', required: false, default: 'true', description: 'Show right fade' },
      { name: 'fadeWidth', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Fade overlay width' },
      { name: 'fadeOpacity', type: 'number', required: false, default: '0.8', description: 'Fade intensity (0-1)' }
    ]
  },

  HeaderBar: {
    name: 'HeaderBar',
    description: 'A minimal header/address bar style container with icons.',
    import: 'import { HeaderBar } from "@/components/ui/header-bar"',
    props: [
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' }
    ]
  },

  IconButton: {
    name: 'IconButton',
    description: 'A circular icon button or anchor with hover states and sizes.',
    import: 'import { IconButton } from "@/components/ui/icon-button"',
    props: [
      { name: 'children', type: 'React.ReactNode', required: true, description: 'Icon content' },
      { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
      { name: 'href', type: 'string', required: false, description: 'If provided, renders as a link' },
      { name: 'target', type: '"_blank" | "_self" | "_parent" | "_top"', required: false, default: '"_blank"', description: 'Link target when using href' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable the button' },
      { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Button diameter' }
    ]
  },

  Button: {
    name: 'Button',
    description: 'Displays a button or a component that looks like a button.',
    import: 'import { Button } from "@/components/ui/button"',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        description: 'Content to display inside the button'
      },
      {
        name: 'onClick',
        type: '() => void',
        required: false,
        description: 'Click handler for the button'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes'
      },
      {
        name: 'bg',
        type: 'boolean',
        required: false,
        default: 'true',
        description: 'Whether to show background color'
      },
      {
        name: 'outline',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether to show outline style'
      },
      {
        name: 'size',
        type: '"sm" | "md" | "lg"',
        required: false,
        default: '"md"',
        description: 'Size of the button'
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the button is disabled'
      }
    ],
    examples: [
      `// Basic button
<Button>Click me</Button>`,
      `// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
      `// Outline button
<Button outline={true}>Outline</Button>`,
      `// Button without background
<Button bg={false}>No Background</Button>`,
      `// Disabled button
<Button disabled={true}>Disabled</Button>`
    ]
  },

  Card: {
    name: 'Card',
    description: 'Displays a card with header, content, and footer.',
    import: 'import { Card } from "@/components/ui/card"',
    props: [
      {
        name: 'title',
        type: 'string',
        required: false,
        description: 'Title text for the card'
      },
      {
        name: 'description',
        type: 'string',
        required: false,
        description: 'Description text for the card'
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        required: false,
        description: 'Content to display inside the card'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes'
      },
      {
        name: 'dashed',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether to use dashed border'
      },
      {
        name: 'shadow',
        type: 'boolean',
        required: false,
        default: 'true',
        description: 'Whether to show shadow'
      },
      {
        name: 'padding',
        type: 'string',
        required: false,
        default: '"p-6"',
        description: 'Padding classes for the card'
      },
      {
        name: 'rounded',
        type: 'string',
        required: false,
        default: '"rounded-lg"',
        description: 'Rounded corner classes'
      },
      {
        name: 'titleClassName',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes for title'
      },
      {
        name: 'descriptionClassName',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes for description'
      },
      {
        name: 'contentClassName',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes for content'
      }
    ],
    examples: [
      `// Basic card
<Card title="Card Title" description="Card description">
  <p>Card content goes here</p>
</Card>`,
      `// Card with dashed border
<Card dashed={true} title="Dashed Card">
  <p>This card has a dashed border</p>
</Card>`,
      `// Card without shadow
<Card shadow={false} title="No Shadow">
  <p>This card has no shadow</p>
</Card>`,
      `// Card with custom padding
<Card padding="p-4" title="Custom Padding">
  <p>This card has custom padding</p>
</Card>`
    ]
  },

  Input: {
    name: 'Input',
    description: 'Displays a form input field.',
    import: 'import { Input } from "@/components/ui/input"',
    props: [
      {
        name: 'label',
        type: 'string',
        required: false,
        description: 'Label text for the input'
      },
      {
        name: 'placeholder',
        type: 'string',
        required: false,
        default: '"Enter text..."',
        description: 'Placeholder text for the input'
      },
      {
        name: 'type',
        type: '"text" | "email" | "password" | "number" | "tel" | "url" | "file"',
        required: false,
        default: '"text"',
        description: 'Type of the input field'
      },
      {
        name: 'isLabel',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether to show the label'
      },
      {
        name: 'isWithIcon',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether to show an icon'
      },
      {
        name: 'customIcon',
        type: 'React.ReactNode',
        required: false,
        description: 'Custom icon to display'
      },
      {
        name: 'isWithButton',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether to show a button next to input'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes'
      },
      {
        name: 'value',
        type: 'string',
        required: false,
        description: 'Value of the input'
      },
      {
        name: 'onChange',
        type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
        required: false,
        description: 'Change handler for the input'
      },
      {
        name: 'onFocus',
        type: '(e: React.FocusEvent<HTMLInputElement>) => void',
        required: false,
        description: 'Focus handler for the input'
      },
      {
        name: 'onBlur',
        type: '(e: React.FocusEvent<HTMLInputElement>) => void',
        required: false,
        description: 'Blur handler for the input'
      },
      {
        name: 'onKeyDown',
        type: '(e: React.KeyboardEvent<HTMLInputElement>) => void',
        required: false,
        description: 'Key down handler for the input'
      },
      {
        name: 'onButtonClick',
        type: '() => void',
        required: false,
        description: 'Click handler for the button'
      },
      {
        name: 'buttonText',
        type: 'string',
        required: false,
        default: '"Submit"',
        description: 'Text for the button'
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the input is disabled'
      },
      {
        name: 'bg',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether to show background color'
      },
      {
        name: 'accept',
        type: 'string',
        required: false,
        description: 'Accept attribute for file inputs'
      }
    ],
    examples: [
      `// Basic input
<Input placeholder="Enter your name" />`,
      `// Input with label
<Input 
  isLabel={true}
  label="Name"
  placeholder="Enter your name" 
/>`,
      `// Input with icon
<Input 
  isWithIcon={true}
  placeholder="Search..." 
/>`,
      `// Input with custom icon
<Input 
  isWithIcon={true}
  customIcon={<SearchIcon />}
  placeholder="Search..." 
/>`,
      `// Input with button
<Input 
  isWithButton={true}
  buttonText="Submit"
  placeholder="Enter email"
  onButtonClick={() => console.log('Submitted')}
/>`,
      `// Different input types
<Input type="email" placeholder="Enter email" />
<Input type="password" placeholder="Enter password" />
<Input type="number" placeholder="Enter number" />`
    ]
  },

  Switch: {
    name: 'Switch',
    description: 'A control that allows the user to toggle between checked and not checked.',
    import: 'import { Switch } from "@/components/ui/switch"',
    props: [
      {
        name: 'title',
        type: 'string',
        required: false,
        description: 'Title text for the switch'
      },
      {
        name: 'leftLabel',
        type: 'string',
        required: false,
        description: 'Label text on the left side'
      },
      {
        name: 'rightLabel',
        type: 'string',
        required: false,
        description: 'Label text on the right side'
      },
      {
        name: 'checked',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the switch is checked'
      },
      {
        name: 'onChange',
        type: '(checked: boolean) => void',
        required: false,
        description: 'Change handler for the switch'
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the switch is disabled'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes'
      },
      {
        name: 'size',
        type: '"sm" | "md" | "lg"',
        required: false,
        default: '"md"',
        description: 'Size of the switch'
      },
      {
        name: 'controlTheme',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the switch controls the theme'
      }
    ],
    examples: [
      `// Basic switch
<Switch />`,
      `// Switch with labels
<Switch 
  leftLabel="Off" 
  rightLabel="On" 
/>`,
      `// Different sizes
<Switch size="sm" />
<Switch size="md" />
<Switch size="lg" />`,
      `// Theme control switch
<Switch 
  controlTheme={true}
  leftLabel="Light" 
  rightLabel="Dark" 
/>`,
      `// Controlled switch
<Switch 
  checked={isEnabled}
  onChange={setIsEnabled}
/>`
    ]
  },

  Checkbox: {
    name: 'Checkbox',
    description: 'A control that allows the user to select one or more options from a set.',
    import: 'import { Checkbox, CheckboxGroup, CheckboxPresets } from "@/components/ui/checkbox"',
    props: [
      {
        name: 'checked',
        type: 'boolean',
        required: false,
        description: 'Whether the checkbox is checked (controlled)'
      },
      {
        name: 'defaultChecked',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Default checked state (uncontrolled)'
      },
      {
        name: 'onChange',
        type: '(checked: boolean) => void',
        required: false,
        description: 'Change handler for the checkbox'
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the checkbox is disabled'
      },
      {
        name: 'size',
        type: '"sm" | "md" | "lg"',
        required: false,
        default: '"md"',
        description: 'Size of the checkbox'
      },
      {
        name: 'label',
        type: 'string',
        required: false,
        description: 'Label text for the checkbox'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes'
      },
      {
        name: 'id',
        type: 'string',
        required: false,
        description: 'ID for the checkbox input'
      }
    ],
    examples: [
      `// Basic checkbox
<Checkbox />`,
      `// Checkbox with label
<Checkbox label="Accept terms and conditions" />`,
      `// Different sizes
<Checkbox size="sm" label="Small" />
<Checkbox size="md" label="Medium" />
<Checkbox size="lg" label="Large" />`,
      `// Controlled checkbox
<Checkbox 
  checked={isChecked}
  onChange={setIsChecked}
  label="Controlled checkbox"
/>`,
      `// Checkbox group
<CheckboxGroup>
  <Checkbox label="Option 1" />
  <Checkbox label="Option 2" />
  <Checkbox label="Option 3" />
</CheckboxGroup>`
    ],
    presets: {
      form: 'Form style with medium size and vertical orientation',
      settings: 'Settings style with small size and compact spacing',
      large: 'Large style with big size and generous spacing'
    }
  },

  Radio: {
    name: 'Radio',
    description: 'A control that allows the user to select a single option from a set.',
    import: 'import { Radio } from "@/components/ui/radio"',
    props: [
      {
        name: 'name',
        type: 'string',
        required: true,
        description: 'Name attribute for the radio group'
      },
      {
        name: 'value',
        type: 'string',
        required: true,
        description: 'Value of the radio option'
      },
      {
        name: 'label',
        type: 'string',
        required: false,
        description: 'Label text for the radio option'
      },
      {
        name: 'checked',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the radio is checked'
      },
      {
        name: 'onChange',
        type: '(value: string) => void',
        required: false,
        description: 'Change handler for the radio'
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the radio is disabled'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes'
      },
      {
        name: 'size',
        type: '"sm" | "md" | "lg"',
        required: false,
        default: '"md"',
        description: 'Size of the radio button'
      }
    ],
    examples: [
      `// Basic radio
<Radio name="option" value="option1" label="Option 1" />`,
      `// Radio group
<div>
  <Radio name="color" value="red" label="Red" />
  <Radio name="color" value="blue" label="Blue" />
  <Radio name="color" value="green" label="Green" />
</div>`,
      `// Different sizes
<Radio name="size" value="sm" label="Small" size="sm" />
<Radio name="size" value="md" label="Medium" size="md" />
<Radio name="size" value="lg" label="Large" size="lg" />`,
      `// Controlled radio group
<Radio 
  name="choice" 
  value="option1" 
  label="Option 1"
  checked={selectedValue === 'option1'}
  onChange={setSelectedValue}
/>`
    ]
  },

  RadioCard: {
    name: 'RadioCard',
    description: 'A card-style radio button for selecting options.',
    import: 'import { RadioCard } from "@/components/ui/radio-card"',
    props: [
      {
        name: 'name',
        type: 'string',
        required: true,
        description: 'Name attribute for the radio group'
      },
      {
        name: 'value',
        type: 'string',
        required: true,
        description: 'Value of the radio option'
      },
      {
        name: 'label',
        type: 'string',
        required: true,
        description: 'Label text for the radio card'
      },
      {
        name: 'description',
        type: 'string',
        required: false,
        description: 'Description text for the radio card'
      },
      {
        name: 'checked',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the radio card is checked'
      },
      {
        name: 'onChange',
        type: '(value: string) => void',
        required: false,
        description: 'Change handler for the radio card'
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the radio card is disabled'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes'
      }
    ],
    examples: [
      `// Basic radio card
<RadioCard 
  name="plan" 
  value="basic" 
  label="Basic Plan"
  description="Perfect for individuals"
/>`,
      `// Radio card group
<div className="space-y-3">
  <RadioCard 
    name="plan" 
    value="basic" 
    label="Basic Plan"
    description="Perfect for individuals"
  />
  <RadioCard 
    name="plan" 
    value="pro" 
    label="Pro Plan"
    description="Great for teams"
  />
  <RadioCard 
    name="plan" 
    value="enterprise" 
    label="Enterprise Plan"
    description="For large organizations"
  />
</div>`,
      `// Controlled radio card
<RadioCard 
  name="choice" 
  value="option1" 
  label="Option 1"
  description="First option"
  checked={selectedValue === 'option1'}
  onChange={setSelectedValue}
/>`
    ]
  },

  Slider: {
    name: 'Slider',
    description: 'An input where the user selects a value from within a given range.',
    import: 'import { Slider, SliderPresets } from "@/components/ui/slider"',
    props: [
      {
        name: 'value',
        type: 'number',
        required: false,
        description: 'Current value (controlled)'
      },
      {
        name: 'defaultValue',
        type: 'number',
        required: false,
        default: '50',
        description: 'Default value (uncontrolled)'
      },
      {
        name: 'min',
        type: 'number',
        required: false,
        default: '0',
        description: 'Minimum value'
      },
      {
        name: 'max',
        type: 'number',
        required: false,
        default: '100',
        description: 'Maximum value'
      },
      {
        name: 'step',
        type: 'number',
        required: false,
        default: '1',
        description: 'Step increment'
      },
      {
        name: 'onChange',
        type: '(value: number) => void',
        required: false,
        description: 'Change handler for the slider'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes'
      },
      {
        name: 'size',
        type: '"sm" | "md" | "lg"',
        required: false,
        default: '"md"',
        description: 'Size of the slider'
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether the slider is disabled'
      }
    ],
    examples: [
      `// Basic slider
<Slider />`,
      `// Controlled slider
<Slider 
  value={sliderValue}
  onChange={setSliderValue}
  min={0}
  max={100}
/>`,
      `// Different sizes
<Slider size="sm" />
<Slider size="md" />
<Slider size="lg" />`,
      `// Custom range and step
<Slider 
  min={10}
  max={200}
  step={10}
  defaultValue={50}
/>`,
      `// Disabled slider
<Slider disabled={true} />`
    ],
    presets: {
      small: 'Small size slider with default range',
      medium: 'Medium size slider with default range',
      large: 'Large size slider with default range'
    }
  },

  MagicCard: {
    name: 'MagicCard',
    description: 'A card with a magical glow effect that follows the cursor.',
    import: 'import { MagicCard } from "@/components/ui/magic-card"',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        description: 'Content to display inside the card'
      },
      {
        name: 'isMagic',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Whether to enable the magic glow effect'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes'
      }
    ],
    examples: [
      `// Basic magic card
<MagicCard isMagic={true}>
  <h3>Magic Card</h3>
  <p>Hover to see the magic!</p>
</MagicCard>`,
      `// Regular card (no magic)
<MagicCard>
  <h3>Regular Card</h3>
  <p>This is a normal card</p>
</MagicCard>`,
      `// Magic card with custom content
<MagicCard isMagic={true} className="max-w-md">
  <div className="text-center">
    <h2 className="text-xl font-bold mb-2">Amazing Feature</h2>
    <p className="text-foreground/70">
      Move your cursor over this card to see the magic glow!
    </p>
  </div>
</MagicCard>`
    ]
  },

  Loader: {
    name: 'Loader',
    description: 'A loading component with various animation styles.',
    import: 'import { Loader, LoaderPresets } from "@/components/ui/loader"',
    props: [
      {
        name: 'size',
        type: '"sm" | "md" | "lg"',
        required: false,
        default: '"md"',
        description: 'Size of the loader'
      },
      {
        name: 'variant',
        type: '"spinner" | "dots" | "pulse" | "bars" | "outline"',
        required: false,
        default: '"spinner"',
        description: 'Animation variant of the loader'
      },
      {
        name: 'color',
        type: '"primary" | "secondary" | "accent"',
        required: false,
        default: '"primary"',
        description: 'Color theme of the loader'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes'
      }
    ],
    examples: [
      `// Basic loader
<Loader />`,
      `// Different variants
<Loader variant="spinner" />
<Loader variant="dots" />
<Loader variant="pulse" />
<Loader variant="bars" />
<Loader variant="outline" />`,
      `// Different sizes
<Loader size="sm" />
<Loader size="md" />
<Loader size="lg" />`,
      `// Different colors
<Loader color="primary" />
<Loader color="secondary" />
<Loader color="accent" />`,
      `// Custom loader
<Loader 
  variant="outline"
  size="lg"
  color="accent"
/>`
    ],
    presets: {
      smallSpinner: 'Small spinner loader with primary color',
      mediumDots: 'Medium dots loader with primary color',
      largePulse: 'Large pulse loader with primary color',
      accentBars: 'Medium bars loader with accent color',
      outlineLoader: 'Medium outline loader with primary color'
    }
  }
  ,

  Image: {
    name: 'Image',
    description: 'A user list display with avatars and add action.',
    import: 'import { Image, sampleUsers } from "@/components/ui/image"',
    props: [
      { name: 'users', type: 'Array<{ id: string; name: string; email: string; avatar?: string; avatarFallback?: string }>', required: true, description: 'Users to render' },
      { name: 'onAddUser', type: '(userId: string) => void', required: false, description: 'Called when add button clicked' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' }
    ],
    examples: [
      `// Basic\n<Image users={sampleUsers} onAddUser={(id) => console.log(id)} />`
    ]
  },

  InputOTP: {
    name: 'InputOTP',
    description: 'One-time passcode input with grouping, paste, and keyboard navigation.',
    import: 'import { InputOTP, InputOTPPresets } from "@/components/ui/input-otp"',
    props: [
      { name: 'length', type: 'number', required: false, default: '6', description: 'Number of digits' },
      { name: 'value', type: 'string', required: false, description: 'Controlled OTP value' },
      { name: 'onChange', type: '(value: string) => void', required: false, description: 'Called with OTP on change' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Input size' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable inputs' },
      { name: 'autoFocus', type: 'boolean', required: false, default: 'true', description: 'Focus first input on mount' }
    ],
    presets: {
      small: '4 digits, small size',
      medium: '6 digits, medium size',
      large: '8 digits, large size'
    }
  },

  Marquee: {
    name: 'Marquee',
    description: 'Smooth scrolling marquee for cards or custom nodes with optional double layer.',
    import: 'import { Marquee, defaultMarqueeCards } from "@/components/ui/marquee"',
    props: [
      { name: 'cards', type: 'Array<{ id: number | string; name: string; description: string; avatar?: string; image?: string }>', required: false, description: 'Cards to render when not using children' },
      { name: 'speed', type: '"slow" | "normal" | "fast"', required: false, default: '"normal"', description: 'Scroll speed' },
      { name: 'direction', type: '"left" | "right"', required: false, default: '"left"', description: 'Scroll direction' },
      { name: 'pauseOnHover', type: 'boolean', required: false, default: 'true', description: 'Pause animation on hover' },
      { name: 'fadeEdges', type: 'boolean', required: false, default: 'true', description: 'Show edge fading' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'layers', type: '"single" | "double"', required: false, default: '"single"', description: 'Single or double marquee layers' },
      { name: 'children', type: 'React.ReactNode', required: false, description: 'Custom nodes; overrides cards' }
    ],
    examples: [
      `// Cards\n<Marquee cards={defaultMarqueeCards} />`
    ]
  },

  Modal: {
    name: 'Modal',
    description: 'Accessible modal dialog with backdrop and animated transitions.',
    import: 'import { Modal, ModalTrigger } from "@/components/ui/modal"',
    props: [
      { name: 'title', type: 'string', required: false, description: 'Header title' },
      { name: 'children', type: 'React.ReactNode', required: true, description: 'Modal body' },
      { name: 'isOpen', type: 'boolean', required: true, description: 'Controls visibility' },
      { name: 'onClose', type: '() => void', required: true, description: 'Called to close' },
      { name: 'showCloseButton', type: 'boolean', required: false, default: 'true', description: 'Show header close icon' },
      { name: 'size', type: '"sm" | "md" | "lg" | "xl"', required: false, default: '"md"', description: 'Dialog width' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' }
    ],
    examples: [
      `// Trigger wrapper\n<ModalTrigger modalTitle="Edit" modalContent={<div>Content</div>}>\n  <Button>Edit</Button>\n</ModalTrigger>`
    ]
  },

  Pagination: {
    name: 'Pagination',
    description: 'Responsive pagination with numbers, dots, and navigation controls.',
    import: 'import { Pagination, PaginationPresets } from "@/components/ui/pagination"',
    props: [
      { name: 'currentPage', type: 'number', required: true, description: 'Current page index (1-based)' },
      { name: 'totalPages', type: 'number', required: true, description: 'Total pages' },
      { name: 'onPageChange', type: '(page: number) => void', required: true, description: 'Page change handler' },
      { name: 'variant', type: '"default" | "dots" | "numbers" | "minimal"', required: false, default: '"default"', description: 'Visual style' },
      { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Control sizing' },
      { name: 'showFirstLast', type: 'boolean', required: false, default: 'true', description: 'Show first/last buttons (desktop)' },
      { name: 'showPrevNext', type: 'boolean', required: false, default: 'true', description: 'Show prev/next buttons' },
      { name: 'maxVisiblePages', type: 'number', required: false, default: '5', description: 'Max visible numbers (desktop)' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable controls' },
      { name: 'withBorder', type: 'boolean', required: false, default: 'true', description: 'Add borders to buttons' }
    ],
    presets: {
      simple: 'Prev/next only, small window',
      full: 'First/prev/next/last with numbers',
      minimal: 'Minimal with numbers',
      dots: 'Dots indicators',
      numbers: 'Numbers only'
    }
  },

  PaymentForm: {
    name: 'PaymentForm',
    description: 'Composed payment form with inputs, dropdowns, checkbox and submit.',
    import: 'import { PaymentForm } from "@/components/ui/payment-form"',
    props: [
      { name: 'onSubmit', type: '(data: any) => void', required: false, description: 'Form submit handler' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' }
    ]
  },

  ProfileVerification: {
    name: 'ProfileVerification',
    description: 'Compact verified profile banner bar.',
    import: 'import { ProfileVerification } from "@/components/ui/profile-verification"',
    props: [
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' }
    ]
  },

  ProgressBar: {
    name: 'ProgressBar',
    description: 'Linear or scroll progress indicator with labels, animation and colors.',
    import: 'import { ProgressBar, ProgressBarPresets } from "@/components/ui/progress-bar"',
    props: [
      { name: 'value', type: 'number', required: false, default: '0', description: 'Current value (0-100 when max=100)' },
      { name: 'max', type: 'number', required: false, default: '100', description: 'Maximum value' },
      { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"sm"', description: 'Bar height and text size' },
      { name: 'type', type: '"linear" | "scroll"', required: false, default: '"linear"', description: 'Render mode' },
      { name: 'color', type: 'string', required: false, description: 'Tailwind color name or hex' },
      { name: 'backgroundColor', type: 'string', required: false, description: 'Tailwind color name or hex' },
      { name: 'showLabel', type: 'boolean', required: false, default: 'false', description: 'Show text label' },
      { name: 'label', type: 'string', required: false, description: 'Custom label text' },
      { name: 'showPercentage', type: 'boolean', required: false, default: 'false', description: 'Show percentage value' },
      { name: 'animated', type: 'boolean', required: false, default: 'false', description: 'Animate bar fill' },
      { name: 'striped', type: 'boolean', required: false, default: 'false', description: 'Striped background' },
      { name: 'scrollProgress', type: 'boolean', required: false, default: 'false', description: 'Track page scroll as value' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' }
    ]
  },

  ScrollArea: {
    name: 'ScrollArea',
    description: 'Scrollable container with sticky title and optional borders.',
    import: 'import { ScrollArea, ScrollAreaPresets } from "@/components/ui/scroll-area"',
    props: [
      { name: 'children', type: 'React.ReactNode', required: true, description: 'Items to render as rows' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'maxHeight', type: 'string', required: false, default: '"max-h-48"', description: 'Max height utility' },
      { name: 'title', type: 'string', required: false, description: 'Optional sticky header title' },
      { name: 'showBorder', type: 'boolean', required: false, default: 'true', description: 'Show border around area' },
      { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Spacing scale' }
    ],
    presets: {
      small: 'Small height with border',
      medium: 'Medium height with border',
      large: 'Large height with border'
    }
  },

  Select: {
    name: 'Select',
    description: 'Native select with label, placeholder and custom arrow.',
    import: 'import { Select } from "@/components/ui/select"',
    props: [
      { name: 'label', type: 'string', required: false, description: 'Field label when isLabel is true' },
      { name: 'placeholder', type: 'string', required: false, default: '"Select an option..."', description: 'Disabled first option text' },
      { name: 'isLabel', type: 'boolean', required: false, default: 'false', description: 'Show label above select' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'value', type: 'string', required: false, description: 'Controlled value' },
      { name: 'onChange', type: '(e: React.ChangeEvent<HTMLSelectElement>) => void', required: false, description: 'Change handler' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable control' },
      { name: 'children', type: 'React.ReactNode', required: true, description: 'Option elements' }
    ]
  },

  Skeleton: {
    name: 'Skeleton',
    description: 'Versatile skeleton loader with many variants and complex presets.',
    import: 'import Skeleton, { SkeletonText, SkeletonAvatar, SkeletonButton, SkeletonInput, SkeletonCard, SkeletonProfile, SkeletonPost, SkeletonTable, SkeletonDashboard, SkeletonPresets } from "@/components/ui/skeleton"',
    props: [
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'variant', type: '"default" | "text" | "circular" | "rectangular" | "card" | "avatar" | "button" | "input"', required: false, default: '"default"', description: 'Visual variant' },
      { name: 'size', type: '"sm" | "md" | "lg" | "xl"', required: false, default: '"md"', description: 'Size preset' },
      { name: 'width', type: 'string | number', required: false, description: 'Width when applicable' },
      { name: 'height', type: 'string | number', required: false, description: 'Height when applicable' },
      { name: 'animation', type: '"pulse" | "wave" | "shimmer" | "none"', required: false, default: '"pulse"', description: 'Loading animation' },
      { name: 'lines', type: 'number', required: false, default: '1', description: 'Number of lines (text variant)' },
      { name: 'spacing', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Line spacing (text variant)' }
    ],
    presets: {
      title: 'Large text line',
      subtitle: 'Medium text line',
      paragraph: 'Multiple text lines',
      smallAvatar: 'Small avatar circle',
      mediumAvatar: 'Medium avatar circle',
      largeAvatar: 'Large avatar circle',
      smallButton: 'Small button block',
      mediumButton: 'Medium button block',
      largeButton: 'Large button block',
      smallInput: 'Small input block',
      mediumInput: 'Medium input block',
      largeInput: 'Large input block',
      smallCard: 'Small card block',
      mediumCard: 'Medium card block',
      largeCard: 'Large card block',
      pulse: 'Pulse animation',
      wave: 'Wave animation',
      shimmer: 'Shimmer animation',
      static: 'No animation'
    }
  },

  Tabs: {
    name: 'Tabs',
    description: 'Animated tabs with variants, sizes, and rich animation presets.',
    import: 'import { Tabs, AnimationPresets, TabPresets } from "@/components/ui/tabs"',
    props: [
      { name: 'tabs', type: 'Array<{ id: string; label: string; icon?: React.ReactNode; disabled?: boolean }>', required: true, description: 'Tab headers' },
      { name: 'contents', type: 'Array<{ id: string; content: React.ReactNode }>', required: true, description: 'Tab contents mapped by id' },
      { name: 'defaultTab', type: 'string', required: false, description: 'Initial tab id' },
      { name: 'variant', type: '"default" | "pills" | "underline"', required: false, default: '"default"', description: 'Visual style' },
      { name: 'size', type: '"sm" | "md" | "lg" | "xl"', required: false, default: '"md"', description: 'Sizing' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'onTabChange', type: '(tabId: string) => void', required: false, description: 'Change callback' },
      { name: 'animations', type: '{ tabTransition?: any; contentTransition?: any; underlineTransition?: any; tapScale?: number; staggerChildren?: boolean }', required: false, description: 'Animation overrides' }
    ],
    presets: {
      smooth: 'Subtle transitions',
      bouncy: 'Playful animations',
      snappy: 'Fast transitions',
      elegant: 'Longer, elegant animations',
      minimal: 'Minimalist timings'
    }
  },

  Testimonials: {
    name: 'Testimonials',
    description: 'Auto-playing testimonial slider with avatars, dots and arrows.',
    import: 'import { Testimonials, defaultTestimonials } from "@/components/ui/testimonials"',
    props: [
      { name: 'testimonials', type: 'Array<{ id: number | string; name: string; role: string; company: string; content: string; avatar?: string; rating: number }>', required: false, description: 'Testimonials data' },
      { name: 'autoPlay', type: 'boolean', required: false, default: 'true', description: 'Auto advance slides' },
      { name: 'autoPlayInterval', type: 'number', required: false, default: '5000', description: 'Auto-play interval (ms)' },
      { name: 'showNavigation', type: 'boolean', required: false, default: 'true', description: 'Show prev/next arrows' },
      { name: 'showDots', type: 'boolean', required: false, default: 'true', description: 'Show dots navigation' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' }
    ]
  },

  TextArea: {
    name: 'TextArea',
    description: 'Textarea with optional label and submit button.',
    import: 'import { TextArea } from "@/components/ui/textarea"',
    props: [
      { name: 'label', type: 'string', required: false, description: 'Field label when isLabel is true' },
      { name: 'placeholder', type: 'string', required: false, default: '"Enter your message..."', description: 'Placeholder text' },
      { name: 'isLabel', type: 'boolean', required: false, default: 'false', description: 'Show label' },
      { name: 'isWithButton', type: 'boolean', required: false, default: 'false', description: 'Show submit button below' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'value', type: 'string', required: false, description: 'Controlled value' },
      { name: 'onChange', type: '(e: React.ChangeEvent<HTMLTextAreaElement>) => void', required: false, description: 'Change handler' },
      { name: 'onButtonClick', type: '() => void', required: false, description: 'Button click handler' },
      { name: 'buttonText', type: 'string', required: false, default: '"Submit"', description: 'Button label' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable input' },
      { name: 'rows', type: 'number', required: false, default: '4', description: 'Number of rows' },
      { name: 'maxLength', type: 'number', required: false, description: 'Max character length' }
    ]
  },

  Toast: {
    name: 'Toast',
    description: 'Toast notifications provider, hook, and container.',
    import: 'import { ToastProvider, useToast } from "@/components/ui/toast"',
    props: [
      { name: 'children', type: 'React.ReactNode', required: true, description: 'App subtree to wrap' }
    ],
    examples: [
      `// Provider at app root\n<ToastProvider>\n  <App />\n</ToastProvider>\n\n// In a component\nconst { addToast } = useToast();\naddToast({ title: 'Saved', description: 'Changes saved', variant: 'success' });`
    ]
  },

  Tooltip: {
    name: 'Tooltip',
    description: 'Lightweight tooltip with placement and delay.',
    import: 'import { Tooltip, TooltipWrapper } from "@/components/ui/tooltip"',
    props: [
      { name: 'children', type: 'React.ReactNode', required: true, description: 'Trigger/target element' },
      { name: 'content', type: 'string', required: true, description: 'Tooltip text' },
      { name: 'position', type: '"top" | "bottom" | "left" | "right"', required: false, default: '"top"', description: 'Placement' },
      { name: 'delay', type: 'number', required: false, default: '300', description: 'Show delay in ms' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' }
    ]
  },

  Typography: {
    name: 'Typography',
    description: 'Semantic text component with variants and convenience exports.',
    import: 'import Typography, { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Body, Small, Caption, Lead, TypographyPresets } from "@/components/ui/typography"',
    props: [
      { name: 'children', type: 'React.ReactNode', required: true, description: 'Text content' },
      { name: 'className', type: 'string', required: false, default: '""', description: 'Additional CSS classes' },
      { name: 'as', type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"', required: false, description: 'HTML tag override' },
      { name: 'variant', type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "small" | "caption" | "lead"', required: false, default: '"body"', description: 'Typography style' },
      { name: 'color', type: '"default" | "muted" | "primary" | "secondary" | "destructive"', required: false, default: '"default"', description: 'Text color' },
      { name: 'weight', type: '"light" | "normal" | "medium" | "semibold" | "bold"', required: false, default: '"normal"', description: 'Font weight' },
      { name: 'align', type: '"left" | "center" | "right" | "justify"', required: false, default: '"left"', description: 'Text alignment' },
      { name: 'truncate', type: 'boolean', required: false, default: 'false', description: 'Single-line truncate' }
    ]
  }
};

export function APIReference({ componentName }: { componentName: string }) {
  const api = componentAPIs[componentName];
  
  if (!api) {
    return (
      <div className="space-y-6">
        <div className="bg-muted rounded-lg p-6 text-center">
          <p className="text-foreground/70">API reference coming soon for {componentName}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Component Overview */}
      <div className="space-y-4">
        <h3 className="text-2xl font-medium flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          API Reference
        </h3>
        
        <div>
          <h4 className="text-lg font-semibold mb-2">{api.name}</h4>
          <p className="text-foreground/70 mb-4">{api.description}</p>
          
          <CodeWindow code={api.import} filename="import.ts" />
        </div>
      </div>

      {/* Props Table */}
      <div className="space-y-4" id="api-props">
        <h4 className="text-xl font-medium">Props</h4>
        
        <div className="bg-muted/50 rounded-2xl p-4 md:p-6 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Prop</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Default</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {api.props.map((prop, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                          {prop.name}
                        </code>
                        {prop.required && (
                          <Badge variant="secondary" bg className="text-xs bg-muted text-foreground/80">
                            Required
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <code 
                        className="text-sm font-mono text-foreground/80"
                        dangerouslySetInnerHTML={{ 
                          __html: highlightType(prop.type, typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark')
                        }}
                      />
                    </td>
                    <td className="px-4 py-3">
                      {prop.default ? (
                        <code className="text-sm font-mono text-foreground/60">
                          {prop.default}
                        </code>
                      ) : (
                        <span className="text-sm text-foreground/50">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground/70">
                      {prop.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Examples */}
      {api.examples && (
        <div className="space-y-4" id="api-examples">
          <h4 className="text-xl font-medium">Examples</h4>
          
          {api.examples.map((example, index) => (
            <div key={index} className="space-y-2">
              <h5 className="text-sm font-semibold text-foreground/70">
                Example {index + 1}
              </h5>
              <CodeWindow code={example} filename="example.tsx" />
            </div>
          ))}
        </div>
      )}

      {/* Presets */}
      {api.presets && (
        <div className="space-y-4" id="api-presets">
          <h4 className="text-xl font-medium">Presets</h4>
          
          <div className="bg-muted/50 rounded-2xl p-4 md:p-6">
            <div className="space-y-3">
              {Object.entries(api.presets).map(([presetName, description]) => (
                <div key={presetName} className="flex items-start gap-3">
                  <code className="text-sm font-mono bg-background px-2 py-1 rounded flex-shrink-0">
                    {presetName}
                  </code>
                  <p className="text-sm text-foreground/70">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
