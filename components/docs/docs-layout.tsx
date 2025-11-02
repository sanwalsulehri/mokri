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
import { ButtonGroup, ButtonGroupItem, BorderedButtonGroup } from '../ui/button-group';
import { DropdownIcons } from '../ui/dropdown-menu';
import { Calendar } from '../ui/calendar';
import { Collapsible, CollapsibleGroup, CollapsibleIcons } from '../ui/collapsible';
import { Command } from '../ui/command';
import { Fade } from '../ui/fade';
import { HeaderBar } from '../ui/header-bar';
import { IconButton } from '../ui/icon-button';
import { InputOTP } from '../ui/input-otp';
import { Pagination } from '../ui/pagination';
import { Loader } from '../ui/loader';
import { PaymentForm } from '../ui/payment-form';
import { ProfileVerification } from '../ui/profile-verification';
import { Marquee } from '../ui/marquee';
import { TextArea } from '../ui/textarea';
import { Select } from '../ui/select';
import { ScrollArea } from '../ui/scroll-area';
import { DropDown } from '../ui/dropdown';
import { DataTable } from '../ui/data-table';
import { DatePicker } from '../ui/date-picker';
import { DropdownMenu } from '../ui/dropdown-menu';
import { Modal } from '../ui/modal';
import { Drawer } from '../ui/drawer';
import { Accordion } from '../ui/accordion';
import { Tooltip } from '../ui/tooltip';
import { BeautifulCardCarousel, BeautifulImageCarousel } from '../ui/carousel';
import { ToastProvider } from '../ui/toast';
import { Tabs } from '../ui/tabs';
import { Testimonials } from '../ui/testimonials';
import { UserList, sampleUsers } from '../ui/user-list';
import { Image } from '../ui/image';
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
  { name: 'Carousel', path: 'carousel', component: BeautifulCardCarousel },
  { name: 'Checkbox', path: 'checkbox', component: Checkbox },
  { name: 'Collapsible', path: 'collapsible', component: Collapsible },
  { name: 'Command', path: 'command', component: Command },
  { name: 'Container', path: 'container', component: Container },
  { name: 'DataTable', path: 'data-table', component: DataTable },
  { name: 'DatePicker', path: 'date-picker', component: DatePicker },
  { name: 'Drawer', path: 'drawer', component: Drawer },
  { name: 'Dropdown', path: 'dropdown', component: DropDown },
  { name: 'DropdownMenu', path: 'dropdown-menu', component: DropdownMenu },
  { name: 'Fade', path: 'fade', component: Fade },
  { name: 'HeaderBar', path: 'header-bar', component: HeaderBar },
  { name: 'IconButton', path: 'icon-button', component: IconButton },
  { name: 'UserList', path: 'user-list', component: UserList },
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
                  <nav className="space-y-">
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
    buttonGroupActive: null as string | null,
    calendarDate: null as Date | null,
    drawerOpen: false,
    otpValue: '',
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
      case 'Accordion':
      case 'Banner':
      case 'Breadcrumbs':
      case 'ButtonGroup':
      case 'Calendar':
      case 'Carousel':
      case 'Collapsible':
      case 'Command':
      case 'Container':
      case 'DataTable':
      case 'Drawer':
      case 'DropdownMenu':
      case 'Fade':
      case 'IconButton':
      case 'InputOTP':
      case 'UserList':
      case 'Image':
      case 'ImageCarousel':
        // fall through handled below by reusing curated demos above
        break;
      default:
    if (Component) {
      try {
            // Add max-width for Select and Dropdown components
            if (componentName === 'Select' || componentName === 'Dropdown') {
              return (
                <div className="w-full max-w-xs mx-auto">
                  <Component />
                </div>
              );
            }
        return (
          <div className="w-full max-w-full">
            <Component />
          </div>
        );
          } catch {}
        }
        return (
          <Card title={componentName} className="border-0 shadow-none">
            <div className="h-24 rounded-lg border border-border flex items-center justify-center">
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
                 <Button  className='bg-blue-500 hover:bg-blue-600 text-white'>Custom Color</Button>
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
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <Card
                  title="Sign In"
                  description="Enter your credentials to access your account"
                >
                  <Input 
                    isLabel={true} 
                    label="Email" 
                    type="email" 
                    placeholder="Enter your email" 
                  />
                  <Input 
                    isLabel={true} 
                    label="Password" 
                    type="password" 
                    placeholder="Enter your password" 
                  />
                  <Switch 
                    title="Remember me"
                    leftLabel="Remember me"
                  />
                  <div className="space-y-3">
                    <Button className="w-full min-h-[34px]">Sign In</Button>
                    <Button bg={false} outline={true} className="w-full min-h-[34px]">Create Account</Button>
                  </div>
            </Card>
              </div>
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
          <div className="w-full max-w-md mx-auto">
            <Input bg={true} className="w-full" />
          </div>
        );
      case 'InputOTP':
        return (
          <div className="w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center">
            <InputOTP
              length={6}
              value={demoState.otpValue}
              onChange={(value) => setDemoState(prev => ({ ...prev, otpValue: value }))}
              size="sm"
              autoFocus={true}
            />
          </div>
        );
        case 'Checkbox':
        return (
          <div className="space-y-4">
              <Checkbox defaultChecked label="Accept terms and conditions" />
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
            <div className="w-full flex justify-center">
              <Breadcrumbs items={[{ label: 'Docs', href: '/docs' }, { label: 'Components', href: '/docs/components' }, { label: 'Breadcrumbs' }]} />
          </div>
        );
      case 'ButtonGroup':
        return (
            <div className="w-full flex justify-center">
              <div className="max-w-md">
                <BorderedButtonGroup
                  buttons={[
                    { 
                      label: 'All', 
                      active: demoState.buttonGroupActive === 'all', 
                      onClick: () => setDemoState(prev => ({ ...prev, buttonGroupActive: 'all' })) 
                    },
                    { 
                      label: 'Active', 
                      active: demoState.buttonGroupActive === 'active', 
                      onClick: () => setDemoState(prev => ({ ...prev, buttonGroupActive: 'active' })) 
                    },
                    { 
                      label: 'Pending', 
                      active: demoState.buttonGroupActive === 'pending', 
                      onClick: () => setDemoState(prev => ({ ...prev, buttonGroupActive: 'pending' })) 
                    }
                  ]}
                  moreOptions={[
                    { 
                      label: 'Completed', 
                      onClick: () => setDemoState(prev => ({ ...prev, buttonGroupActive: 'completed' })),
                      icon: <DropdownIcons.Bell />
                    },
                    { 
                      label: 'Archived', 
                      onClick: () => setDemoState(prev => ({ ...prev, buttonGroupActive: 'archived' })),
                      icon: <DropdownIcons.Settings />
                    },
                    { 
                      label: 'Deleted', 
                      onClick: () => setDemoState(prev => ({ ...prev, buttonGroupActive: 'deleted' })),
                      icon: <DropdownIcons.Logout />,
                      divider: true
                    }
                  ]}
                />
              </div>
          </div>
        );
      case 'Calendar':
        return (
            <div className="flex justify-center">
              <div>
                <Calendar
                  selectedDate={demoState.calendarDate || undefined}
                  onDateSelect={(date) => setDemoState(prev => ({ ...prev, calendarDate: date }))}
                  size="md"
                  showToday={true}
                />
              </div>
          </div>
        );
      case 'Carousel':
        return (
            <div className="w-full">
              <style dangerouslySetInnerHTML={{ __html: `
                .carousel-preview .slick-dots {
                  bottom: -40px !important;
                }
                .carousel-preview .slick-dots li button {
                  width: 6px !important;
                  height: 6px !important;
                }
                @media (min-width: 768px) {
                  .carousel-preview .slick-dots li button {
                    width: 8px !important;
                    height: 8px !important;
                  }
                }
                .carousel-preview .slick-prev,
                .carousel-preview .slick-next {
                  width: 28px !important;
                  height: 28px !important;
                  padding: 5px !important;
                }
                .carousel-preview .slick-prev svg,
                .carousel-preview .slick-next svg {
                  width: 12px !important;
                  height: 12px !important;
                }
                @media (min-width: 768px) {
                  .carousel-preview .slick-prev,
                  .carousel-preview .slick-next {
                    width: 30px !important;
                    height: 30px !important;
                    padding: 6px !important;
                  }
                  .carousel-preview .slick-prev svg,
                  .carousel-preview .slick-next svg {
                    width: 14px !important;
                    height: 14px !important;
                  }
                }
              ` }} />
              <div className="carousel-preview">
                <style dangerouslySetInnerHTML={{ __html: `
                  .carousel-preview .slick-slide > div > div {
                    height: 100% !important;
                  }
                  .carousel-preview .slick-track {
                    display: flex !important;
                    align-items: stretch !important;
                  }
                  .carousel-preview .slick-slide {
                    height: auto !important;
                  }
                  .carousel-preview .slick-slide > div {
                    height: 100% !important;
                  }
                ` }} />
                <BeautifulCardCarousel
                  data={[
                    {
                      id: "feature-1",
                      title: "Advanced Analytics",
                      subtitle: "Data Insights",
                      description: "Get detailed insights and analytics to make informed decisions for your business growth.",
                      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
                    },
                    {
                      id: "feature-2",
                      title: "Team Collaboration",
                      subtitle: "Work Together",
                      description: "Collaborate seamlessly with your team members using our advanced collaboration tools.",
                      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                    },
                    {
                      id: "feature-3",
                      title: "Security First",
                      subtitle: "Protected Data",
                      description: "Your data is protected with enterprise-grade security and encryption protocols.",
                      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
                    },
                    {
                      id: "feature-4",
                      title: "Mobile Ready",
                      subtitle: "Any Device",
                      description: "Access your data and collaborate from any device, anywhere in the world.",
                      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
                    }
                  ]}
                  itemsPerView={2}
                  autoPlay={false}
                  arrowsInside={true}
                />
            </div>
          </div>
        );
      case 'Collapsible':
        return (
            <div className="w-full max-w-2xl">
              <Collapsible
                title="Account Settings"
                variant="default"
                size="sm"
                icon={<CollapsibleIcons.Settings />}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Checkbox 
                      label="Email notifications" 
                      size="sm"
                      defaultChecked={true}
                    />
          </div>
                  <div className="flex items-center justify-between">
                    <Checkbox 
                      label="SMS notifications" 
                      size="sm"
                    />
              </div>
                  <div className="flex items-center justify-between">
                    <Checkbox 
                      label="Marketing emails" 
                      size="sm"
                    />
            </div>
                </div>
              </Collapsible>
          </div>
        );
      case 'Command':
        return (
          <div className="w-full max-w-md">
              <Command />
          </div>
        );
        case 'Accordion':
        return (
          <div className="w-full max-w-md">
              <Accordion
                items={[
                  { id: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
                  { id: 'item-2', title: 'Is it styled?', content: 'Yes. It comes with default styles that matches the other components.' },
                  { id: 'item-3', title: 'Is it animated?', content: 'Yes. It\'s animated by default, but you can disable it.' },
                ]}
              />
          </div>
        );
        case 'Banner':
        return (
            <div className="w-full max-w-2xl">
              <Banner 
                title="Heads up" 
                description="We launched something new. Check out our latest features and improvements." 
                size="sm"
                dismissible 
              />
          </div>
        );
        case 'Container':
        return (
            <div className="w-full space-y-3">
              <Container size="xs" className="bg-muted py-4">
                <Typography variant="small">XS Container (max-w-sm)</Typography>
              </Container>
              <Container size="sm" className="bg-muted py-4">
                <Typography variant="small">SM Container (max-w-4xl)</Typography>
              </Container>
          </div>
        );
        case 'DataTable':
        return (
            <div className="w-full overflow-x-auto">
              <DataTable
                data={[
                  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', department: 'Engineering', projects: 12, lastLogin: '2 hours ago' },
                  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', department: 'Marketing', projects: 8, lastLogin: '1 day ago' },
                  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator', department: 'Support', projects: 15, lastLogin: '30 minutes ago' },
                  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', department: 'Sales', projects: 5, lastLogin: 'Never' }
                ]}
                columns={[
                  { key: 'name' as const, label: 'Name', sortable: true },
                  { key: 'email' as const, label: 'Email', sortable: true },
                  { key: 'role' as const, label: 'Role', sortable: true },
                  { key: 'department' as const, label: 'Department', sortable: true },
                  { key: 'projects' as const, label: 'Projects', sortable: true },
                  { key: 'lastLogin' as const, label: 'Last Login', sortable: true }
                ]}
                size="md"
                selectable={true}
              />
          </div>
        );
      case 'Drawer':
        return (
            <div className="w-full flex justify-center">
              <Button onClick={() => setDemoState(prev => ({ ...prev, drawerOpen: true }))}>
                Open Right Drawer
              </Button>
              <Drawer 
                isOpen={demoState.drawerOpen} 
                onClose={() => setDemoState(prev => ({ ...prev, drawerOpen: false }))}
                title="Settings"
                description="Configure your application settings"
                position="right"
                size="md"
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">General Settings</h3>
                    <Switch title="Enable Notifications" leftLabel="Off" rightLabel="On" />
                    <Switch title="Dark Mode" leftLabel="Light" rightLabel="Dark" />
                    <Switch title="Auto-save" leftLabel="Off" rightLabel="On" />
            </div>
                  
            <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Account</h3>
                    <Input isLabel={true} label="Username" placeholder="Enter username" />
                    <Input isLabel={true} label="Email" type="email" placeholder="Enter email" />
              </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1">Save Changes</Button>
                    <Button bg={false} className="flex-1">Cancel</Button>
              </div>
            </div>
              </Drawer>
          </div>
        );
      case 'DropdownMenu':
        return (
          <div className="w-full flex justify-center">
            <DropdownMenu
              trigger={
                <Avatar 
                  size="lg" 
                  fallback="L" 
                  className="cursor-pointer"
                />
              }
              options={[
                {
                  label: 'Profile',
                  value: 'profile',
                  icon: <DropdownIcons.Profile />,
                  onClick: () => console.log('Profile clicked')
                },
                {
                  label: 'Settings',
                  value: 'settings',
                  icon: <DropdownIcons.Settings />,
                  onClick: () => console.log('Settings clicked')
                },
                {
                  label: 'Notifications',
                  value: 'notifications',
                  icon: <DropdownIcons.Bell />,
                  onClick: () => console.log('Notifications clicked')
                },
                {
                  label: 'Help',
                  value: 'help',
                  icon: <DropdownIcons.Help />,
                  onClick: () => console.log('Help clicked'),
                  divider: true
                },
                {
                  label: 'Logout',
                  value: 'logout',
                  icon: <DropdownIcons.Logout />,
                  onClick: () => console.log('Logout clicked')
                }
              ]}
              align="left"
            />
          </div>
        );
      case 'Fade':
        return (
          <div className="w-full max-w-2xl mx-auto">
            <Fade fadeLeft={true} fadeRight={true} fadeWidth="md" fadeOpacity={0.8}>
              <div className="flex gap-4 overflow-x-auto px-4 py-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div
                    key={num}
                    className="flex-shrink-0 w-32 h-24 bg-muted rounded-lg flex items-center justify-center text-sm font-medium"
                  >
                    Card {num}
            </div>
              ))}
            </div>
            </Fade>
          </div>
        );
      case 'IconButton':
        return (
          <div className="w-full flex justify-center gap-4 flex-wrap items-center">
            {/* Default - matching comps page usage */}
            <IconButton size="sm" onClick={() => console.log("Send message")}>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
                </svg>
            </IconButton>
            {/* Custom colored examples */}
            <IconButton size="md" onClick={() => console.log("Blue clicked")} className="bg-blue-500 hover:bg-muted text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </IconButton>
            <IconButton size="md" onClick={() => console.log("Purple clicked")} className="bg-purple-500 hover:bg-muted text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </IconButton>
            <IconButton size="md" onClick={() => console.log("Green clicked")} className="bg-green-500 hover:bg-muted text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </IconButton>
          </div>
        );
      case 'UserList':
        return (
          <div className="w-full flex justify-center">
            <div className="max-w-sm w-full">
              <UserList 
                users={sampleUsers}
                onAddUser={(userId) => console.log('Add user:', userId)}
              />
            </div>
          </div>
        );
      case 'Image':
        return (
          <div className="w-full flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop"
              alt="Sample image"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        );
      case 'ImageCarousel':
        return (
          <div className="w-full max-w-5xl mx-auto pb-8">
            <style dangerouslySetInnerHTML={{ __html: `
              .image-carousel-preview .slick-prev,
              .image-carousel-preview .slick-next {
                width: 28px !important;
                height: 28px !important;
                padding: 5px !important;
                z-index: 10 !important;
              }
              .image-carousel-preview .slick-prev svg,
              .image-carousel-preview .slick-next svg {
                width: 12px !important;
                height: 12px !important;
              }
              @media (min-width: 768px) {
                .image-carousel-preview .slick-prev,
                .image-carousel-preview .slick-next {
                  width: 32px !important;
                  height: 32px !important;
                  padding: 6px !important;
                }
                .image-carousel-preview .slick-prev svg,
                .image-carousel-preview .slick-next svg {
                  width: 14px !important;
                  height: 14px !important;
                }
              }
              .image-carousel-preview .slick-dots {
                bottom: -30px !important;
              }
              .image-carousel-preview .slick-dots li button {
                width: 6px !important;
                height: 6px !important;
              }
              @media (min-width: 768px) {
                .image-carousel-preview .slick-dots li button {
                  width: 8px !important;
                  height: 8px !important;
                }
              }
            ` }} />
            <div className="image-carousel-preview">
              <BeautifulImageCarousel
                data={[
                  {
                    id: 1,
                    title: "Mountain Peak",
                    subtitle: "Majestic Views",
                    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop"
                  },
                  {
                    id: 2,
                    title: "Ocean Waves",
                    subtitle: "Serene Beauty",
                    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=500&fit=crop"
                  },
                  {
                    id: 3,
                    title: "Forest Trail",
                    subtitle: "Nature's Path",
                    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop"
                  },
                  {
                    id: 4,
                    title: "City Skyline",
                    subtitle: "Urban Dreams",
                    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=500&fit=crop"
                  }
                ]}
                itemsPerView={2}
                autoPlay={false}
                arrowsInside={true}
                showPagination={true}
              />
            </div>
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
      
        className="shadow-md"
      >
          <div className="flex items-center justify-center min-h-[30ch]">
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
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof document === 'undefined') return false;
    return document.documentElement.getAttribute('data-theme') === 'dark';
  });
  
  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const checkDarkMode = () => {
      const dark = document.documentElement.getAttribute('data-theme') === 'dark';
      setIsDark(dark);
    };
    
    // Initial check
    checkDarkMode();
    
    // Watch for data-theme attribute changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class']
    });
    
    return () => observer.disconnect();
  }, []);

  const editorTheme = React.useMemo(() => {
    return isDark
      ? {
          bg: '#151515',
          fg: '#d4d4d4',
          headerBg: '#1C1C1C',
          colors: {
            comment: '#6A9955',
            string: '#CE9178',
            keyword: '#C586C0',
            type: '#4EC9B0',
            tag: '#569CD6',
          },
        }
      : {
          bg: '#F7F7F7',
          fg: '#24292e',
          headerBg: '#F1F1F1',
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
    
    // Helper to check if already inside a span
    const isInsideSpan = (str: string | undefined, pos: number | undefined): boolean => {
      if (typeof str !== 'string' || typeof pos !== 'number') return false;
      const before = str.substring(0, pos);
      const openSpans = (before.match(/<span[^>]*>/g) || []).length;
      const closeSpans = (before.match(/<\/span>/g) || []).length;
      return openSpans > closeSpans;
    };
    
    // Helper to check if a position is inside an HTML tag
    const isInsideTag = (str: string | undefined, pos: number | undefined): boolean => {
      if (typeof str !== 'string' || typeof pos !== 'number') return false;
      let depth = 0;
      for (let i = 0; i < pos; i++) {
        if (str.substring(i, i + 4) === '&lt;') {
          depth++;
        } else if (str.substring(i, i + 4) === '&gt;') {
          depth--;
        }
      }
      return depth > 0;
    };
    
    // Strings first (handle quotes)
    out = out.replace(/(['"])((?:\\.|(?!\1)[^\\])*?)\1/gm, (match, quote, content, offset, str) => {
      if (isInsideSpan(str, offset)) return match;
      return `${quote}<span style="color:${editorTheme.colors.string}">${content}</span>${quote}`;
    });
    
    // Comments
    out = out.replace(/(\/\/[^\n]*)/gm, (match, p1, offset, str) => {
      if (isInsideSpan(str, offset)) return match;
      return `<span style="color:${editorTheme.colors.comment}">${match}</span>`;
    });
    
    // JSX tag names (opening)
    out = out.replace(/&lt;([A-Za-z][A-Za-z0-9]*)/gm, (match, name, offset, str) => {
      if (isInsideSpan(str, offset)) return match;
      return `&lt;<span style="color:${editorTheme.colors.tag}">${name}</span>`;
    });
    
    // JSX tag names (closing)
    out = out.replace(/&lt;\/([A-Za-z][A-Za-z0-9]*)&gt;/gm, (match, name, offset, str) => {
      if (isInsideSpan(str, offset)) return match;
      return `&lt;/<span style="color:${editorTheme.colors.tag}">${name}</span>&gt;`;
    });
    
    // Keywords
    out = out.replace(/\b(import|from|const|let|var|return|function|export|default|new|class|extends|if|else|switch|case|for|while|await|async|type|interface)\b/gm, (match, p1, offset, str) => {
      if (isInsideSpan(str, offset) || isInsideTag(str, offset)) return match;
      return `<span style="color:${editorTheme.colors.keyword}">${match}</span>`;
    });
    
    // Types
    out = out.replace(/\b(React|string|number|boolean|any|void|unknown|Record|Array)\b/gm, (match, p1, offset, str) => {
      if (isInsideSpan(str, offset) || isInsideTag(str, offset)) return match;
      return `<span style="color:${editorTheme.colors.type}">${match}</span>`;
    });
    
    return out;
  }

  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (_) {
      // no-op
    }
  };
  return (
    <div 
      className="rounded-xl overflow-hidden"
      style={{ 
        backgroundColor: editorTheme.bg, 
        color: editorTheme.fg
      } as React.CSSProperties}
    >
      <div 
        className="flex items-center justify-between px-4 py-3"
        style={{ 
          backgroundColor: editorTheme.headerBg
        } as React.CSSProperties}
      >
        <div className="flex items-center gap-2">
          <span className="text-xs opacity-70 font-mono">{"<>"} {filename}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="px-2 py-1 rounded-md text-xs font-medium transition-all opacity-80 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-1.5"
          aria-label={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
        <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
      </pre>
    </div>
  );
}
