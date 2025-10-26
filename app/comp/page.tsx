'use client';

import { useState, useEffect } from 'react';
import { ThemeToggle } from "../../components/theme-toggle";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import {DropDown} from "../../components/ui/dropdown";
import { TextArea } from "../../components/ui/textarea";
import { Switch } from "../../components/ui/switch";
import { Modal, ModalTrigger } from "../../components/ui/modal";
import { Tooltip, TooltipWrapper } from "../../components/ui/tooltip";
import { Card } from "../../components/ui/card";
import { Drawer } from "../../components/ui/drawer";
import { Breadcrumbs, BreadcrumbPresets } from "../../components/ui/breadcrumbs";
import { Tabs, TabPresets, AnimationPresets } from "../../components/ui/tabs";
import { Pagination, PaginationPresets } from "../../components/ui/pagination";
import { ToastProvider, useToast } from "../../components/ui/toast";
import { Banner, BannerPresets } from "../../components/ui/banner";
import { Loader, LoaderPresets } from "../../components/ui/loader";
import { ProgressBar, ProgressBarPresets } from "../../components/ui/progress-bar";
import Skeleton, { 
  SkeletonText, 
  SkeletonAvatar, 
  SkeletonButton, 
  SkeletonInput, 
  SkeletonCard, 
  SkeletonProfile, 
  SkeletonPost, 
  SkeletonTable, 
  SkeletonDashboard, 
  SkeletonPresets 
} from "../../components/ui/skeleton";
import Avatar from "../../components/ui/avatar";
import { DropdownMenu, DropdownIcons } from "../../components/ui/dropdown-menu";
import { Image, sampleUsers } from "../../components/ui/image";
function CompPageContent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState(false);
  const [dismissedBanners, setDismissedBanners] = useState<Set<string>>(new Set());

  const dropdownOptions = [
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
  ];
  const { addToast } = useToast();

  const handleBannerDismiss = (bannerId: string) => {
    setDismissedBanners(prev => new Set(prev).add(bannerId));
  };
  
  // Pagination states
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(3);
  const [currentPage3, setCurrentPage3] = useState(1);
  const [currentPage4, setCurrentPage4] = useState(5);
  const [currentPage5, setCurrentPage5] = useState(2);
  const [currentPage6, setCurrentPage6] = useState(1);
  const [currentPage7, setCurrentPage7] = useState(1);
  const [currentPage8, setCurrentPage8] = useState(15);

  return (
    <div className="min-h-screen space-y-10">
      <ThemeToggle />
    
      <h1>Components</h1>
      <div className="flex gap-4 flex-wrap">
        <Button>Click me</Button>
        <Button outline={true}>Click me</Button>
        <Button bg={false}>Click me</Button>
        <Button bg={false} className="text-red-500">
          Click me
        </Button>
      </div>
      <div className="">
        <Badge>Click me</Badge>
        <Badge bg={false}>Click me</Badge>
        <Badge variant="secondary">Click me</Badge>
        <Badge variant="destructive">Click me</Badge>
      </div>
      <div className="space-y-2">
        <Input />
        <Input isLabel={true} label="Name" />
        <Input isWithIcon={true} />
        <Input isWithButton={true} buttonText="Submit" />
      </div>
      <div className="">
        <DropDown />
      </div>
      <div className="">
        <TextArea isLabel={true} label="Message" />
        <TextArea isWithButton={true} buttonText="Submit" />
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Switch Components</h2>
        <Switch />
        <Switch title="Notifications" />
        <Switch leftLabel="Off" rightLabel="On" />
        <Switch title="Dark Mode" leftLabel="Light" rightLabel="Dark" />
        <Switch size="sm" title="Small" />
        <Switch size="lg" title="Large" />
        <Switch disabled={true} title="Disabled" />
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Modal Components</h2>
        <div className="flex gap-4 flex-wrap">
          <ModalTrigger
            modalTitle="Simple Modal"
            modalContent={
              <div className="space-y-4">
                <p className="text-foreground/80">
                  This is a simple modal with some content. You can put anything here!
                </p>
                <div className="flex gap-2">
                  <Button>Action 1</Button>
                  <Button bg={false}>Action 2</Button>
                </div>
              </div>
            }
          >
            <Button>Open Simple Modal</Button>
          </ModalTrigger>

          <ModalTrigger
            modalTitle="Form Modal"
            modalSize="lg"
            modalContent={
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input isLabel={true} label="First Name" placeholder="Enter first name" />
                  <Input isLabel={true} label="Last Name" placeholder="Enter last name" />
                </div>
                <Input isLabel={true} label="Email" type="email" placeholder="Enter email" />
                <TextArea isLabel={true} label="Message" placeholder="Enter your message" />
                <div className="flex justify-end gap-2">
                  <Button bg={false}>Cancel</Button>
                  <Button>Submit</Button>
                </div>
              </div>
            }
          >
            <Button bg={false} outline={true}>Open Form Modal</Button>
          </ModalTrigger>

          <ModalTrigger
            modalTitle="Large Content Modal"
            modalSize="xl"
            modalContent={
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Features</h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• Beautiful animations</li>
                      <li>• Responsive design</li>
                      <li>• Theme support</li>
                      <li>• Easy to use</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Benefits</h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• Smooth transitions</li>
                      <li>• Accessible</li>
                      <li>• Customizable</li>
                      <li>• Mobile friendly</li>
                    </ul>
                  </div>
                </div>
                <div className="flex mt-10 justify-center">
                  <Button>Get Started</Button>
                </div>
              </div>
            }
          >
            <Button>Open Large Modal</Button>
          </ModalTrigger>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Tooltip Components</h2>
        <div className="flex gap-4 flex-wrap">
          <TooltipWrapper tooltip="This is a tooltip on top" position="top">
            <Button bg={false} outline={true}>Hover me (Top)</Button>
          </TooltipWrapper>

          <TooltipWrapper tooltip="This tooltip appears on the bottom" position="bottom">
            <Button bg={false} outline={true}>Hover me (Bottom)</Button>
          </TooltipWrapper>

          <TooltipWrapper tooltip="Left side tooltip" position="left">
            <Button bg={false} outline={true}>Hover me (Left)</Button>
          </TooltipWrapper>

          <TooltipWrapper tooltip="Right side tooltip with longer text" position="right">
            <Button bg={false} outline={true}>Hover me (Right)</Button>
          </TooltipWrapper>

          <TooltipWrapper tooltip="Quick tooltip with no delay" delay={0}>
            <Button bg={false}>Instant Tooltip</Button>
          </TooltipWrapper>

          <TooltipWrapper tooltip="Slow tooltip with 1 second delay" delay={1000}>
            <Button bg={false}>Slow Tooltip</Button>
          </TooltipWrapper>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Card Component</h2>
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

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Breadcrumb Components</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Basic Breadcrumb</h3>
            <Breadcrumbs 
              items={[
                { label: 'Dashboard' },
                { label: 'Settings' },
                { label: 'Profile' }
              ]}
            />
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">With Icons</h3>
            <Breadcrumbs 
              items={[
                { label: 'Documents', icon: (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )},
                { label: 'Projects' },
                { label: 'Current Project' }
              ]}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">File System Navigation</h3>
            <Breadcrumbs 
              items={BreadcrumbPresets.fileSystem(['Projects', 'Web App', 'Components'])}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">E-commerce Navigation</h3>
            <Breadcrumbs 
              items={BreadcrumbPresets.ecommerce('Electronics', 'Phones', 'iPhone 15')}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Admin Panel</h3>
            <Breadcrumbs 
              items={BreadcrumbPresets.admin('Users', 'User Management')}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Custom Separator</h3>
            <Breadcrumbs 
              items={[
                { label: 'Home' },
                { label: 'Category' },
                { label: 'Subcategory' }
              ]}
              separator={
                <svg className="h-4 w-4 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              }
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Tabs Components</h2>
        <div className="space-y-6">
          {/* Default Tabs - Smooth Animation */}
          <div>
            <h3 className="text-sm font-medium mb-3">Default Tabs (Smooth Animation)</h3>
            <Tabs
              tabs={[
                { id: 'tab1', label: 'Overview' },
                { id: 'tab2', label: 'Analytics' },
                { id: 'tab3', label: 'Settings' }
              ]}
              contents={[
                {
                  id: 'tab1',
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Overview</h4>
                      <p className="text-foreground/70">
                        This is the overview tab content with smooth animations. Notice the gentle transitions.
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-foreground/5 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-500">24</div>
                          <div className="text-sm text-foreground/60">Total Users</div>
                        </div>
                        <div className="p-4 bg-foreground/5 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-500">156</div>
                          <div className="text-sm text-foreground/60">Active Sessions</div>
                        </div>
                        <div className="p-4 bg-foreground/5 rounded-lg text-center">
                          <div className="text-2xl font-bold text-purple-500">89%</div>
                          <div className="text-sm text-foreground/60">Uptime</div>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  id: 'tab2',
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Analytics</h4>
                      <p className="text-foreground/70">
                        Analytics dashboard with charts and metrics. Smooth content transitions.
                      </p>
                      <div className="h-32 bg-foreground/5 rounded-lg flex items-center justify-center">
                        <span className="text-foreground/60">Chart placeholder</span>
                      </div>
                    </div>
                  )
                },
                {
                  id: 'tab3',
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Settings</h4>
                      <div className="space-y-3">
                        <Switch title="Enable Notifications" leftLabel="Off" rightLabel="On" />
                        <Switch title="Dark Mode" leftLabel="Light" rightLabel="Dark" />
                        <Switch title="Auto-save" leftLabel="Off" rightLabel="On" />
                      </div>
                    </div>
                  )
                }
              ]}
              animations={AnimationPresets.smooth}
            />
          </div>

          {/* Pills Tabs - Bouncy Animation */}
          <div>
            <h3 className="text-sm font-medium mb-3">Pills Tabs (Bouncy Animation)</h3>
            <Tabs
              variant="pills"
              tabs={TabPresets.dashboard}
              contents={[
                {
                  id: 'overview',
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Dashboard Overview</h4>
                      <p className="text-foreground/70">Welcome to your dashboard overview with playful bouncy animations!</p>
                    </div>
                  )
                },
                {
                  id: 'analytics',
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Analytics Data</h4>
                      <p className="text-foreground/70">View your analytics and performance metrics with spring-like transitions.</p>
                    </div>
                  )
                },
                {
                  id: 'settings',
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Settings Panel</h4>
                      <p className="text-foreground/70">Configure your application settings with dynamic animations.</p>
                    </div>
                  )
                }
              ]}
              animations={AnimationPresets.bouncy}
            />
          </div>

          {/* Underline Tabs - Snappy Animation */}
          <div>
            <h3 className="text-sm font-medium mb-3">Underline Tabs (Snappy Animation)</h3>
            <Tabs
              variant="underline"
              tabs={TabPresets.profile}
              contents={[
                {
                  id: 'personal',
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Personal Information</h4>
                      <p className="text-foreground/70">Fast and responsive animations for quick form interactions.</p>
                      <div className="grid grid-cols-2 gap-4">
                        <Input isLabel={true} label="First Name" placeholder="Enter first name" />
                        <Input isLabel={true} label="Last Name" placeholder="Enter last name" />
                      </div>
                      <Input isLabel={true} label="Email" type="email" placeholder="Enter email" />
                    </div>
                  )
                },
                {
                  id: 'security',
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Security Settings</h4>
                      <p className="text-foreground/70">Snappy transitions perfect for productivity applications.</p>
                      <Input isLabel={true} label="Current Password" type="password" />
                      <Input isLabel={true} label="New Password" type="password" />
                      <Input isLabel={true} label="Confirm Password" type="password" />
                    </div>
                  )
                },
                {
                  id: 'notifications',
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Notification Preferences</h4>
                      <p className="text-foreground/70">Immediate feedback with quick animations.</p>
                      <div className="space-y-3">
                        <Switch title="Email Notifications" leftLabel="Off" rightLabel="On" />
                        <Switch title="Push Notifications" leftLabel="Off" rightLabel="On" />
                        <Switch title="SMS Notifications" leftLabel="Off" rightLabel="On" />
                      </div>
                    </div>
                  )
                },
                {
                  id: 'billing',
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Billing Information</h4>
                      <p className="text-foreground/70">Manage your subscription and payment methods with fast transitions.</p>
                    </div>
                  )
                }
              ]}
              animations={AnimationPresets.snappy}
            />
          </div>

          {/* Different Sizes with Elegant Animation */}
          <div>
            <h3 className="text-sm font-medium mb-3">Different Sizes (Elegant Animation)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Small Size - Elegant</h4>
                <Tabs
                  size="sm"
                  tabs={[
                    { id: 'small1', label: 'Tab 1' },
                    { id: 'small2', label: 'Tab 2' }
                  ]}
                  contents={[
                    { id: 'small1', content: <p className="text-sm">Small tab with sophisticated animations</p> },
                    { id: 'small2', content: <p className="text-sm">Elegant transitions for premium feel</p> }
                  ]}
                  animations={AnimationPresets.elegant}
                />
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Large Size - Minimal</h4>
                <Tabs
                  size="lg"
                  tabs={[
                    { id: 'large1', label: 'Large Tab 1' },
                    { id: 'large2', label: 'Large Tab 2' }
                  ]}
                  contents={[
                    { id: 'large1', content: <p className="text-lg">Large tab with minimal, clean animations</p> },
                    { id: 'large2', content: <p className="text-lg">Subtle transitions for content focus</p> }
                  ]}
                  animations={AnimationPresets.minimal}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Pagination Components</h2>
        <div className="space-y-6">
          {/* Default Pagination */}
          <div>
            <h3 className="text-sm font-medium mb-3">Default Pagination</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Full Featured (Page {currentPage1} of 10)</h4>
                <Pagination
                  currentPage={currentPage1}
                  totalPages={10}
                  onPageChange={setCurrentPage1}
                  {...PaginationPresets.full}
                />
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Simple (Page {currentPage2} of 8)</h4>
                <Pagination
                  currentPage={currentPage2}
                  totalPages={8}
                  onPageChange={setCurrentPage2}
                  {...PaginationPresets.simple}
                />
              </div>
            </div>
          </div>

          {/* Different Variants */}
          <div>
            <h3 className="text-sm font-medium mb-3">Different Variants</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Minimal Variant (Page {currentPage3} of 6)</h4>
                <Pagination
                  currentPage={currentPage3}
                  totalPages={6}
                  onPageChange={setCurrentPage3}
                  {...PaginationPresets.minimal}
                />
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Numbers Only (Page {currentPage4} of 12)</h4>
                <Pagination
                  currentPage={currentPage4}
                  totalPages={12}
                  onPageChange={setCurrentPage4}
                  {...PaginationPresets.numbers}
                />
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Dots Variant (Page {currentPage5} of 5)</h4>
                <Pagination
                  currentPage={currentPage5}
                  totalPages={5}
                  onPageChange={setCurrentPage5}
                  {...PaginationPresets.dots}
                />
              </div>
            </div>
          </div>

          {/* Different Sizes */}
          <div>
            <h3 className="text-sm font-medium mb-3">Different Sizes</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Small Size</h4>
                <Pagination
                  currentPage={currentPage1}
                  totalPages={7}
                  onPageChange={setCurrentPage1}
                  size="sm"
                  {...PaginationPresets.simple}
                />
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Medium Size (Default)</h4>
                <Pagination
                  currentPage={currentPage2}
                  totalPages={7}
                  onPageChange={setCurrentPage2}
                  size="md"
                  {...PaginationPresets.simple}
                />
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Large Size</h4>
                <Pagination
                  currentPage={currentPage3}
                  totalPages={7}
                  onPageChange={setCurrentPage3}
                  size="lg"
                  {...PaginationPresets.simple}
                />
              </div>
            </div>
          </div>

          {/* Edge Cases */}
          <div>
            <h3 className="text-sm font-medium mb-3">Edge Cases</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Single Page (Hidden)</h4>
                <Pagination
                  currentPage={1}
                  totalPages={1}
                  onPageChange={() => {}}
                  {...PaginationPresets.full}
                />
                <p className="text-sm text-foreground/60 mt-2">Pagination is hidden when there's only one page</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Two Pages</h4>
                <Pagination
                  currentPage={currentPage6}
                  totalPages={2}
                  onPageChange={setCurrentPage6}
                  {...PaginationPresets.simple}
                />
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Many Pages (with ellipsis)</h4>
                <Pagination
                  currentPage={currentPage8}
                  totalPages={50}
                  onPageChange={setCurrentPage8}
                  {...PaginationPresets.full}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Drawer Components</h2>
        <div className="flex gap-4 flex-wrap">
          <Button onClick={() => setIsDrawerOpen(true)}>
            Open Right Drawer
          </Button>
          
          <Button onClick={() => setIsLeftDrawerOpen(true)} bg={false}>
            Open Left Drawer
          </Button>
          
          <Button onClick={() => setIsBottomDrawerOpen(true)} bg={false} outline={true}>
            Open Bottom Drawer
          </Button>
        </div>
      </div>

      {/* Right Drawer */}
      <Drawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
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

      {/* Left Drawer */}
      <Drawer 
        isOpen={isLeftDrawerOpen} 
        onClose={() => setIsLeftDrawerOpen(false)}
        title="Navigation"
        position="left"
        size="sm"
      >
        <div className="space-y-2">
          <div className="flex items-center py-3 px-3 rounded-lg hover:bg-foreground/5 transition-colors cursor-pointer">
            <svg className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
            </svg>
            <span className="text-sm font-medium">Dashboard</span>
          </div>
          <div className="flex items-center py-3 px-3 rounded-lg hover:bg-foreground/5 transition-colors cursor-pointer">
            <svg className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-sm font-medium">Analytics</span>
          </div>
          <div className="flex items-center py-3 px-3 rounded-lg hover:bg-foreground/5 transition-colors cursor-pointer">
            <svg className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-medium">Settings</span>
          </div>
          <div className="flex items-center py-3 px-3 rounded-lg hover:bg-foreground/5 transition-colors cursor-pointer">
            <svg className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-sm font-medium">Profile</span>
          </div>
          <div className="flex items-center py-3 px-3 rounded-lg hover:bg-foreground/5 transition-colors cursor-pointer">
            <svg className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-sm font-medium">Documents</span>
          </div>
        </div>
      </Drawer>

      {/* Bottom Drawer */}
      <Drawer 
        isOpen={isBottomDrawerOpen} 
        onClose={() => setIsBottomDrawerOpen(false)}
        title="Quick Actions"
        position="bottom"
        size="lg"
      >
        <div className="space-y-6">
          <Input 
            isLabel={true} 
            label="Search" 
            placeholder="Search anything..." 
            isWithIcon={true}
          />
          
          <div className="space-y-4">
            <Switch title="Dark Mode" leftLabel="Light" rightLabel="Dark" />
            <Switch title="Notifications" leftLabel="Off" rightLabel="On" />
            <Switch title="Auto-save" leftLabel="Off" rightLabel="On" />
          </div>

          <div className="flex gap-2">
            <Button className="flex-1">Save</Button>
            <Button bg={false} className="flex-1">Cancel</Button>
          </div>
        </div>
      </Drawer>

      {/* Progress Bar Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Progress Bar Components</h2>
          <p className="text-foreground/70">Different progress indicators and variants</p>
        </div>
        
        <div className="space-y-6">
          {/* Basic Progress Bars */}
          <div>
            <h3 className="text-sm font-medium mb-3">Basic Progress Bars</h3>
            <div className="space-y-4">
              <ProgressBar value={25} />
              <ProgressBar value={75} color="primary" />
            </div>
          </div>

          {/* Scroll Progress Bar */}
          <div>
            <h3 className="text-sm font-medium mb-3">Scroll Progress Bar</h3>
            <div className="space-y-4">
              <ProgressBar type="scroll" scrollProgress={true} />
            </div>
          </div>

        </div>
      </div>

      {/* Loader Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Loader Components</h2>
          <p className="text-foreground/70">Different loading animations and variants</p>
        </div>
        
        <div className="space-y-6">
          {/* Spinner Variants */}
          <div>
            <h3 className="text-sm font-medium mb-3">Spinner Loaders</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Loader size="sm" variant="spinner" />
                <span className="text-sm text-foreground/70">Small</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader size="md" variant="spinner" />
                <span className="text-sm text-foreground/70">Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader size="lg" variant="spinner" />
                <span className="text-sm text-foreground/70">Large</span>
              </div>
            </div>
          </div>

          {/* Dots Variants */}
          <div>
            <h3 className="text-sm font-medium mb-3">Dots Loaders</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Loader size="sm" variant="dots" />
                <span className="text-sm text-foreground/70">Small</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader size="md" variant="dots" />
                <span className="text-sm text-foreground/70">Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader size="lg" variant="dots" />
                <span className="text-sm text-foreground/70">Large</span>
              </div>
            </div>
          </div>

          {/* Pulse Variants */}
          <div>
            <h3 className="text-sm font-medium mb-3">Pulse Loaders</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Loader size="sm" variant="pulse" />
                <span className="text-sm text-foreground/70">Small</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader size="md" variant="pulse" />
                <span className="text-sm text-foreground/70">Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader size="lg" variant="pulse" />
                <span className="text-sm text-foreground/70">Large</span>
              </div>
            </div>
          </div>

          {/* Bars Variants */}
          <div>
            <h3 className="text-sm font-medium mb-3">Bars Loaders</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Loader size="sm" variant="bars" />
                <span className="text-sm text-foreground/70">Small</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader size="md" variant="bars" />
                <span className="text-sm text-foreground/70">Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader size="lg" variant="bars" />
                <span className="text-sm text-foreground/70">Large</span>
              </div>
            </div>
          </div>

          {/* Color Variants */}
          <div>
            <h3 className="text-sm font-medium mb-3">Color Variants</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Loader color="primary" />
                <span className="text-sm text-foreground/70">Primary</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader color="secondary" />
                <span className="text-sm text-foreground/70">Secondary</span>
              </div>
             
            </div>
          </div>

          {/* Preset Examples */}
          <div>
            <h3 className="text-sm font-medium mb-3">Preset Examples</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Loader {...LoaderPresets.smallSpinner} />
                <span className="text-sm text-foreground/70">Small Spinner</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader {...LoaderPresets.mediumDots} />
                <span className="text-sm text-foreground/70">Medium Dots</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader {...LoaderPresets.largePulse} />
                <span className="text-sm text-foreground/70">Large Pulse</span>
              </div>
             
            </div>
          </div>
        </div>
      </div>

      {/* Banner Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Banner Components</h2>
          <p className="text-foreground/70">Different banner variants and sizes</p>
        </div>
        
        <div className="space-y-4">
          {/* Success Alert */}
          <div>
            <h3 className="text-sm font-medium mb-2">Success Alert</h3>
            <Banner
              variant="success"
              title="Success! Your changes have been saved"
              description="This is an alert with icon, title and description."
            />
          </div>

          {/* Info Alert */}
          <div>
            <h3 className="text-sm font-medium mb-2">Info Alert</h3>
            <Banner
              variant="info"
              title="This Alert has a title and an icon."
              description="This is an info alert with description."
            />
          </div>

          {/* Error Alert */}
          <div>
            <h3 className="text-sm font-medium mb-2">Error Alert</h3>
            <Banner
            size="sm"
              variant="error"
              title="Unable to process your payment."
              description="Please verify your billing information and try again."
            >
              <ul className="mt-4 space-y-1.5 text-sm opacity-90">
                <li>• Check your card details</li>
                <li>• Ensure sufficient funds</li>
                <li>• Verify billing address</li>
              </ul>
            </Banner>
          </div>
        </div>
      </div>

      {/* Toast Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Toast Notifications</h2>
          <p className="text-foreground/70">Click any button to see toast notifications</p>
        </div>
        
        <div className="flex gap-4 flex-wrap">
          <Button 
            onClick={() => addToast({
              title: "Success!",
              description: "Your action was completed successfully.",
              variant: "success"
            })}
          >
            Success Toast
          </Button>
          
          <Button 
            onClick={() => addToast({
              title: "Error Alert",
              description: "Something went wrong. Please try again.",
              variant: "error"
            })}
            bg={false}
          >
            Error Toast
          </Button>
          
          <Button 
            onClick={() => addToast({
              title: "Warning",
              description: "Please review your input before proceeding.",
              variant: "warning"
            })}
            bg={false} 
            outline={true}
          >
            Warning Toast
          </Button>
          
          <Button 
            onClick={() => addToast({
              title: "Information",
              description: "Here's some useful information for you.",
              variant: "default"
            })}
          >
            Info Toast
          </Button>
          
          <Button 
            onClick={() => addToast({
              title: "Action Required",
              description: "Please confirm this action to continue.",
              variant: "default",
              action: {
                label: "Confirm",
                onClick: () => addToast({
                  title: "Confirmed!",
                  description: "Action has been confirmed.",
                  variant: "success"
                })
              }
            })}
            bg={false}
          >
            Interactive Toast
          </Button>
          
          <Button 
            onClick={() => addToast({
              title: "Persistent Message",
              description: "This toast will stay until you manually close it.",
              duration: 0
            })}
            bg={false} 
            outline={true}
          >
            Persistent Toast
          </Button>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => {
              addToast({
                title: "Welcome!",
                description: "Welcome to our toast notification system!",
                variant: "success"
              });
              setTimeout(() => addToast({
                title: "Features",
                description: "Smooth animations and interactive elements.",
                variant: "default"
              }), 500);
              setTimeout(() => addToast({
                title: "Customizable",
                description: "Easy to customize colors, timing, and behavior.",
                variant: "warning"
              }), 1000);
            }}
          >
            Show All Toasts
          </Button>
        </div>
      </div>

      {/* Avatar Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Avatar Components</h2>
          <p className="text-foreground/70">Simple user avatars with image and alphabet fallback</p>
        </div>
        
        <div className="space-y-6">
          {/* Basic Avatars */}
          <div>
            <h3 className="text-sm font-medium mb-3">Basic Avatars</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Different Sizes</h4>
                <div className="flex items-center gap-4">
                  <Avatar size="sm" fallback="S" />
                  <Avatar size="md" fallback="M" />
                  <DropdownMenu
                    trigger={
                      <Avatar 
                        size="lg" 
                        fallback="L" 
                        className="cursor-pointer"
                      />
                    }
                    options={dropdownOptions}
                    align="left"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">With Images</h4>
                <div className="flex items-center gap-4">
                  <Avatar 
                    src="https://i.pravatar.cc/100?img=1" 
                    alt="John Doe"
                    fallback="JD"
                  />
                  <Avatar 
                    src="https://i.pravatar.cc/100?img=2" 
                    alt="Jane Smith"
                    fallback="JS"
                  />
                  <Avatar 
                    src="https://i.pravatar.cc/100?img=3" 
                    alt="Mike Johnson"
                    fallback="MJ"
                  />
                </div>
              </div>
              
            
            </div>
          </div>
        </div>
      </div>

      {/* Image Component */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Image Component</h2>
          <p className="text-sm text-muted-foreground">Clean user list with avatars and actions</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Image Examples</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Sample User List</h4>
                <div className="max-w-sm">
                  <Image 
                    users={sampleUsers}
                    onAddUser={(userId) => console.log('Add user:', userId)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skeleton Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Skeleton Components</h2>
          <p className="text-foreground/70">Beautiful loading placeholders with multiple variants and animations</p>
        </div>
        
        <div className="space-y-6">
         

          {/* Animation Variants */}
          <div>
            <h3 className="text-sm font-medium mb-3">Animation Variants</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Pulse Animation (Default)</h4>
                <div className="flex items-center gap-4">
                  <Skeleton animation="pulse" width="100px" height="20px" />
                  <Skeleton animation="pulse" width="150px" height="20px" />
                  <Skeleton animation="pulse" width="80px" height="20px" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Wave Animation</h4>
                <div className="flex items-center gap-4">
                  <Skeleton animation="wave" width="100px" height="20px" />
                  <Skeleton animation="wave" width="150px" height="20px" />
                  <Skeleton animation="wave" width="80px" height="20px" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Shimmer Animation</h4>
                <div className="flex items-center gap-4">
                  <Skeleton animation="shimmer" width="100px" height="20px" />
                  <Skeleton animation="shimmer" width="150px" height="20px" />
                  <Skeleton animation="shimmer" width="80px" height="20px" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">No Animation</h4>
                <div className="flex items-center gap-4">
                  <Skeleton animation="none" width="100px" height="20px" />
                  <Skeleton animation="none" width="150px" height="20px" />
                  <Skeleton animation="none" width="80px" height="20px" />
                </div>
              </div>
            </div>
          </div>

          {/* Complex Layouts */}
          <div>
            <h3 className="text-sm font-medium mb-3">Complex Layouts</h3>
            <div className="space-y-6">
         
           
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Table Skeleton</h4>
                <SkeletonTable rows={4} columns={4} />
              </div>
              
            
            </div>
          </div>

          {/* Preset Examples */}
          <div>
            <h3 className="text-sm font-medium mb-3">Preset Examples</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Text Presets</h4>
                <div className="space-y-2">
                  <Skeleton {...SkeletonPresets.title} />
                  <Skeleton {...SkeletonPresets.subtitle} />
                  <Skeleton {...SkeletonPresets.paragraph} />
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Component Presets</h4>
                <div className="flex items-center gap-4">
                  <Skeleton {...SkeletonPresets.smallButton} />
                  <Skeleton {...SkeletonPresets.mediumButton} />
                  <Skeleton {...SkeletonPresets.largeButton} />
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Animation Presets</h4>
                <div className="flex items-center gap-4">
                  <Skeleton {...SkeletonPresets.pulse} width="100px" height="20px" />
                  <Skeleton {...SkeletonPresets.wave} width="100px" height="20px" />
                  <Skeleton {...SkeletonPresets.shimmer} width="100px" height="20px" />
                  <Skeleton {...SkeletonPresets.static} width="100px" height="20px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
    </div>
  );
}

export default function page() {
  return (
    <ToastProvider>
      <CompPageContent />
    </ToastProvider>
  );
}

