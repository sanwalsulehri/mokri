"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "../../components/theme-toggle";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { DropDown } from "../../components/ui/dropdown";
import { TextArea } from "../../components/ui/textarea";
import { Switch } from "../../components/ui/switch";
import { Modal, ModalTrigger } from "../../components/ui/modal";
import { Tooltip, TooltipWrapper } from "../../components/ui/tooltip";
import { Card } from "../../components/ui/card";
import { Drawer } from "../../components/ui/drawer";
import {
  Breadcrumbs,
  BreadcrumbPresets,
} from "../../components/ui/breadcrumbs";
import { Tabs, TabPresets, AnimationPresets } from "../../components/ui/tabs";
import { Pagination, PaginationPresets } from "../../components/ui/pagination";
import { ToastProvider, useToast } from "../../components/ui/toast";
import { Banner, BannerPresets } from "../../components/ui/banner";
import { Loader, LoaderPresets } from "../../components/ui/loader";
import {
  ProgressBar,
  ProgressBarPresets,
} from "../../components/ui/progress-bar";
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
  SkeletonPresets,
} from "../../components/ui/skeleton";
import Avatar from "../../components/ui/avatar";
import { DropdownMenu, DropdownIcons } from "../../components/ui/dropdown-menu";
import { UserList, sampleUsers } from "../../components/ui/user-list";
import { Image } from "../../components/ui/image";
import Typography, {
  TypographyPresets,
  Heading1,
  Heading2,
  Heading3,
  Body,
  Small,
  Caption,
  Lead,
} from "../../components/ui/typography";
import Container from "../../components/ui/container";
import {
  BeautifulImageCarousel,
  BeautifulCardCarousel,
} from "../../components/ui/carousel";
import { ImageCarousel } from "../../components/ui/image-carousel";
import { Marquee } from "../../components/ui/marquee";
import {
  Accordion,
  AccordionPresets,
  AccordionIcons,
} from "../../components/ui/accordion";
import {
  ButtonGroup,
  ButtonGroupItem,
  ButtonGroupPresets,
  ButtonGroupConfigs,
  BorderedButtonGroup,
} from "../../components/ui/button-group";
import { Calendar, CalendarRange } from "../../components/ui/calendar";
import {
  Collapsible,
  CollapsibleGroup,
  CollapsiblePresets,
  CollapsibleIcons,
} from "../../components/ui/collapsible";
import { Checkbox, CheckboxGroup } from "../../components/ui/checkbox";
import {
  Command,
  CommandGroup,
  CommandPresets,
  CommandIcons,
} from "../../components/ui/command";
import { DatePicker, DatePickerPresets } from "../../components/ui/date-picker";
import { InputOTP, InputOTPPresets } from "../../components/ui/input-otp";
import { Slider, SliderPresets } from "../../components/ui/slider";
import { ScrollArea, ScrollAreaPresets } from "../../components/ui/scroll-area";
import { DataTable, DataTablePresets } from "../../components/ui/data-table";
function CompPageContent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState(false);
  const [dismissedBanners, setDismissedBanners] = useState<Set<string>>(
    new Set()
  );

  // Custom data examples
  const customImageData = [
    {
      id: "nature-1",
      title: "Beautiful Sunset",
      subtitle: "Golden Hour Magic",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    },
    {
      id: "nature-2",
      title: "Ocean Waves",
      subtitle: "Serene Waters",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop",
    },
    {
      id: "nature-3",
      title: "Forest Path",
      subtitle: "Peaceful Journey",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop",
    },
    {
      id: "nature-4",
      title: "Mountain Peak",
      subtitle: "Majestic Views",
      image:
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&h=500&fit=crop",
    },
  ];

  const customCardData = [
    {
      id: "feature-1",
      title: "Advanced Analytics",
      subtitle: "Data Insights",
      description:
        "Get detailed insights and analytics to make informed decisions for your business growth.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    },
    {
      id: "feature-2",
      title: "Team Collaboration",
      subtitle: "Work Together",
      description:
        "Collaborate seamlessly with your team members using our advanced collaboration tools.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    },
    {
      id: "feature-3",
      title: "Security First",
      subtitle: "Protected Data",
      description:
        "Your data is protected with enterprise-grade security and encryption protocols.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    },
    {
      id: "feature-4",
      title: "Mobile Ready",
      subtitle: "Any Device",
      description:
        "Access your data and collaborate from any device, anywhere in the world.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    },
  ];

  const dropdownOptions = [
    {
      label: "Profile",
      value: "profile",
      icon: <DropdownIcons.Profile />,
      onClick: () => console.log("Profile clicked"),
    },
    {
      label: "Settings",
      value: "settings",
      icon: <DropdownIcons.Settings />,
      onClick: () => console.log("Settings clicked"),
    },
    {
      label: "Notifications",
      value: "notifications",
      icon: <DropdownIcons.Bell />,
      onClick: () => console.log("Notifications clicked"),
    },
    {
      label: "Help",
      value: "help",
      icon: <DropdownIcons.Help />,
      onClick: () => console.log("Help clicked"),
      divider: true,
    },
    {
      label: "Logout",
      value: "logout",
      icon: <DropdownIcons.Logout />,
      onClick: () => console.log("Logout clicked"),
    },
  ];
  const { addToast } = useToast();

  const handleBannerDismiss = (bannerId: string) => {
    setDismissedBanners((prev) => new Set(prev).add(bannerId));
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

  // Button group states
  const [activeBorderedFilter, setActiveBorderedFilter] = useState("all");

  // Calendar states
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [datePickerValue, setDatePickerValue] = useState<Date | undefined>(
    undefined
  );
  const [otpValue, setOtpValue] = useState<string>("");
  const [selectedTableRows, setSelectedTableRows] = useState<any[]>([]);
  const [sliderValue, setSliderValue] = useState(75);
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);

  return (
    <div className="min-h-screen space-y-10">
      <ThemeToggle />

      <Switch />
      <Switch size="md" />
      <Switch size="lg" />

      <h1>Components</h1>
      <div className="flex gap-4 flex-wrap">
        <Button>Click me</Button>
        <Button outline={true}>Click me</Button>
        <Button bg={false}>Click me</Button>
        <Button bg={false} className="text-red-500">
          Click me
        </Button>
      </div>

      {/* Button Group Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Button Group Components</h2>
          <p className="text-foreground/70">
            Button groups with borders, rounded corners, and dropdown menus
          </p>
        </div>

        <div className="space-y-6">
          {/* Filter Example */}
          <div>
            <h3 className="text-sm font-medium mb-3">
              Filter with More Options
            </h3>
            <div className="space-y-2">
              <BorderedButtonGroup
                buttons={[
                  {
                    label: "All",
                    active: activeBorderedFilter === "all",
                    onClick: () => setActiveBorderedFilter("all"),
                  },
                  {
                    label: "Active",
                    active: activeBorderedFilter === "active",
                    onClick: () => setActiveBorderedFilter("active"),
                  },
                  {
                    label: "Pending",
                    active: activeBorderedFilter === "pending",
                    onClick: () => setActiveBorderedFilter("pending"),
                  },
                ]}
                moreOptions={[
                  {
                    label: "Completed",
                    onClick: () => setActiveBorderedFilter("completed"),
                    icon: <DropdownIcons.Bell />,
                  },
                  {
                    label: "Archived",
                    onClick: () => setActiveBorderedFilter("archived"),
                    icon: <DropdownIcons.Settings />,
                  },
                  {
                    label: "Deleted",
                    onClick: () => setActiveBorderedFilter("deleted"),
                    icon: <DropdownIcons.Logout />,
                    divider: true,
                  },
                ]}
              />
              <p className="text-sm text-foreground/60">
                Selected: <strong>{activeBorderedFilter}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Calendar Components</h2>
          <p className="text-foreground/70">
            Beautiful minimal calendars with smooth animations
          </p>
        </div>

        <div className="flex justify-center">
          {/* Basic Calendar */}
          <div>
            <h3 className="text-sm font-medium mb-3 text-center">Calendar</h3>
            <div className="space-y-2">
              <Calendar
                selectedDate={selectedDate}
                onDateSelect={(date) => {
                  setSelectedDate(date);
                  console.log("Selected date:", date.toDateString());
                }}
                size="md"
                showToday={true}
              />
              <p className="text-sm text-foreground/60 text-center">
                Selected: <strong>{selectedDate?.toLocaleDateString()}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Collapsible Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Collapsible Components</h2>
          <p className="text-foreground/70">
            Beautiful minimal collapsible sections with smooth animations
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {/* Settings Panel */}
          <div>
            <h3 className="text-sm font-medium mb-3">Settings Panel</h3>
            <CollapsibleGroup spacing="sm">
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
                    <Checkbox label="SMS notifications" size="sm" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Checkbox label="Marketing emails" size="sm" />
                  </div>
                </div>
              </Collapsible>

              <Collapsible
                title="Privacy Settings"
                variant="default"
                size="sm"
                icon={<CollapsibleIcons.Settings />}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-foreground whitespace-nowrap">
                      Profile visibility
                    </label>
                    <div className="w-24">
                      <DropDown
                        options={[
                          { value: "public", label: "Public" },
                          { value: "friends", label: "Friends only" },
                          { value: "private", label: "Private" },
                        ]}
                        placeholder="Select"
                        className="w-full text-xs py-1.5 px-2"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Checkbox label="Data sharing" size="sm" />
                  </div>
                </div>
              </Collapsible>
            </CollapsibleGroup>
          </div>
        </div>
      </div>

      {/* Command Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Command Components</h2>
          <p className="text-foreground/70">
            Powerful command palette and search interfaces
          </p>
        </div>

        <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto">
          {/* Command Palette */}
          <Command
            items={[
              {
                id: "calendar",
                label: "Calendar",
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                ),
                keywords: ["schedule", "events", "dates"],
                action: () => console.log("Calendar opened"),
                group: "Suggestions",
              },
              {
                id: "search-emoji",
                label: "Emoji",
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                keywords: ["emoji", "smile", "search"],
                action: () => console.log("Emoji search opened"),
                group: "Suggestions",
              },
              {
                id: "calculator",
                label: "Calculator",
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                ),
                keywords: ["math", "calculate", "numbers"],
                action: () => console.log("Calculator opened"),
                group: "Suggestions",
              },
              {
                id: "profile",
                label: "Profile",
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
                keywords: ["user", "account", "profile"],
                action: () => console.log("Profile opened"),
                group: "Settings",
                shortcut: "⌘ P",
              },
              {
                id: "billing",
                label: "Billing",
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                ),
                keywords: ["payment", "invoice", "billing"],
                action: () => console.log("Billing opened"),
                group: "Settings",
                shortcut: "⌘ B",
              },
              {
                id: "settings",
                label: "Settings",
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                keywords: ["preferences", "config", "options"],
                action: () => console.log("Settings opened"),
                group: "Settings",
                shortcut: "⌘ S",
              },
            ]}
            placeholder="Type a command or search..."
            size="sm"
            variant="default"
            showGroups={true}
            maxHeight="max-h-64"
          />
        </div>
      </div>

      <div className="">
        <Badge>Click me</Badge>
        <Badge bg={false}>Click me</Badge>
        <Badge variant="secondary">Click me</Badge>
        <Badge variant="destructive">Click me</Badge>
      </div>
      <div className="space-y-2">
        <Input bg={true} />
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
                  This is a simple modal with some content. You can put anything
                  here!
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
                  <Input
                    isLabel={true}
                    label="First Name"
                    placeholder="Enter first name"
                  />
                  <Input
                    isLabel={true}
                    label="Last Name"
                    placeholder="Enter last name"
                  />
                </div>
                <Input
                  isLabel={true}
                  label="Email"
                  type="email"
                  placeholder="Enter email"
                />
                <TextArea
                  isLabel={true}
                  label="Message"
                  placeholder="Enter your message"
                />
                <div className="flex justify-end gap-2">
                  <Button bg={false} outline={true}>
                    Cancel
                  </Button>
                  <Button>Submit</Button>
                </div>
              </div>
            }
          >
            <Button bg={false} outline={true}>
              Open Form Modal
            </Button>
          </ModalTrigger>

          <ModalTrigger
            modalTitle="Contact Us"
            modalSize="xl"
            modalContent={
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold">Get in Touch</h3>
                  <p className="text-foreground/70">
                    We'd love to hear from you. Send us a message and we'll
                    respond as soon as possible.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-foreground/70">
                            hello@example.com
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-sm text-foreground/70">
                            +1 (555) 123-4567
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-sm text-foreground/70">
                            123 Main St, City, State 12345
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-medium">Send Message</h4>
                    <div className="space-y-4">
                      <Input
                        isLabel={true}
                        label="Name"
                        placeholder="Your name"
                      />
                      <Input
                        isLabel={true}
                        label="Email"
                        type="email"
                        placeholder="your@email.com"
                      />
                      <TextArea
                        isLabel={true}
                        label="Message"
                        placeholder="How can we help you?"
                        rows={4}
                      />
                      <div className="flex justify-end gap-2">
                        <Button bg={false} outline={true}>
                          Cancel
                        </Button>
                        <Button>Send Message</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <Button>Open Contact Modal</Button>
          </ModalTrigger>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Tooltip Components</h2>
        <div className="flex gap-4 flex-wrap">
          <TooltipWrapper tooltip="This is a tooltip on top" position="top">
            <Button bg={false} outline={true}>
              Hover me (Top)
            </Button>
          </TooltipWrapper>

          <TooltipWrapper
            tooltip="This tooltip appears on the bottom"
            position="bottom"
          >
            <Button bg={false} outline={true}>
              Hover me (Bottom)
            </Button>
          </TooltipWrapper>

          <TooltipWrapper tooltip="Left side tooltip" position="left">
            <Button bg={false} outline={true}>
              Hover me (Left)
            </Button>
          </TooltipWrapper>

          <TooltipWrapper
            tooltip="Right side tooltip with longer text"
            position="right"
          >
            <Button bg={false} outline={true}>
              Hover me (Right)
            </Button>
          </TooltipWrapper>

          <TooltipWrapper tooltip="Quick tooltip with no delay" delay={0}>
            <Button bg={false}>Instant Tooltip</Button>
          </TooltipWrapper>

          <TooltipWrapper
            tooltip="Slow tooltip with 1 second delay"
            delay={1000}
          >
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
          <Switch title="Remember me" leftLabel="Remember me" />
          <div className="space-y-3">
            <Button className="w-full min-h-[34px]">Sign In</Button>
            <Button bg={false} outline={true} className="w-full min-h-[34px]">
              Create Account
            </Button>
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
                { label: "Dashboard" },
                { label: "Settings" },
                { label: "Profile" },
              ]}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">With Icons</h3>
            <Breadcrumbs
              items={[
                {
                  label: "Documents",
                  icon: (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  ),
                },
                { label: "Projects" },
                { label: "Current Project" },
              ]}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">File System Navigation</h3>
            <Breadcrumbs
              items={BreadcrumbPresets.fileSystem([
                "Projects",
                "Web App",
                "Components",
              ])}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">E-commerce Navigation</h3>
            <Breadcrumbs
              items={BreadcrumbPresets.ecommerce(
                "Electronics",
                "Phones",
                "iPhone 15"
              )}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Admin Panel</h3>
            <Breadcrumbs
              items={BreadcrumbPresets.admin("Users", "User Management")}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Custom Separator</h3>
            <Breadcrumbs
              items={[
                { label: "Home" },
                { label: "Category" },
                { label: "Subcategory" },
              ]}
              separator={
                <svg
                  className="h-4 w-4 text-foreground/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
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
            <h3 className="text-sm font-medium mb-3">
              Default Tabs (Smooth Animation)
            </h3>
            <Tabs
              tabs={[
                { id: "tab1", label: "Overview" },
                { id: "tab2", label: "Analytics" },
                { id: "tab3", label: "Settings" },
              ]}
              contents={[
                {
                  id: "tab1",
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Overview</h4>
                      <p className="text-foreground/70">
                        This is the overview tab content with smooth animations.
                        Notice the gentle transitions.
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-foreground/5 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-500">
                            24
                          </div>
                          <div className="text-sm text-foreground/60">
                            Total Users
                          </div>
                        </div>
                        <div className="p-4 bg-foreground/5 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-500">
                            156
                          </div>
                          <div className="text-sm text-foreground/60">
                            Active Sessions
                          </div>
                        </div>
                        <div className="p-4 bg-foreground/5 rounded-lg text-center">
                          <div className="text-2xl font-bold text-purple-500">
                            89%
                          </div>
                          <div className="text-sm text-foreground/60">
                            Uptime
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "tab2",
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Analytics</h4>
                      <p className="text-foreground/70">
                        Analytics dashboard with charts and metrics. Smooth
                        content transitions.
                      </p>
                      <div className="h-32 bg-foreground/5 rounded-lg flex items-center justify-center">
                        <span className="text-foreground/60">
                          Chart placeholder
                        </span>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "tab3",
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Settings</h4>
                      <div className="space-y-3">
                        <Switch
                          title="Enable Notifications"
                          leftLabel="Off"
                          rightLabel="On"
                        />
                        <Switch
                          title="Dark Mode"
                          leftLabel="Light"
                          rightLabel="Dark"
                        />
                        <Switch
                          title="Auto-save"
                          leftLabel="Off"
                          rightLabel="On"
                        />
                      </div>
                    </div>
                  ),
                },
              ]}
              animations={AnimationPresets.smooth}
            />
          </div>

          {/* Pills Tabs - Bouncy Animation */}
          <div>
            <h3 className="text-sm font-medium mb-3">
              Pills Tabs (Bouncy Animation)
            </h3>
            <Tabs
              variant="pills"
              tabs={TabPresets.dashboard}
              contents={[
                {
                  id: "overview",
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">
                        Dashboard Overview
                      </h4>
                      <p className="text-foreground/70">
                        Welcome to your dashboard overview with playful bouncy
                        animations!
                      </p>
                    </div>
                  ),
                },
                {
                  id: "analytics",
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Analytics Data</h4>
                      <p className="text-foreground/70">
                        View your analytics and performance metrics with
                        spring-like transitions.
                      </p>
                    </div>
                  ),
                },
                {
                  id: "settings",
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Settings Panel</h4>
                      <p className="text-foreground/70">
                        Configure your application settings with dynamic
                        animations.
                      </p>
                    </div>
                  ),
                },
              ]}
              animations={AnimationPresets.bouncy}
            />
          </div>

          {/* Underline Tabs - Snappy Animation */}
          <div>
            <h3 className="text-sm font-medium mb-3">
              Underline Tabs (Snappy Animation)
            </h3>
            <Tabs
              variant="underline"
              tabs={TabPresets.profile}
              contents={[
                {
                  id: "personal",
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">
                        Personal Information
                      </h4>
                      <p className="text-foreground/70">
                        Fast and responsive animations for quick form
                        interactions.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          isLabel={true}
                          label="First Name"
                          placeholder="Enter first name"
                        />
                        <Input
                          isLabel={true}
                          label="Last Name"
                          placeholder="Enter last name"
                        />
                      </div>
                      <Input
                        isLabel={true}
                        label="Email"
                        type="email"
                        placeholder="Enter email"
                      />
                    </div>
                  ),
                },
                {
                  id: "security",
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">
                        Security Settings
                      </h4>
                      <p className="text-foreground/70">
                        Snappy transitions perfect for productivity
                        applications.
                      </p>
                      <Input
                        isLabel={true}
                        label="Current Password"
                        type="password"
                      />
                      <Input
                        isLabel={true}
                        label="New Password"
                        type="password"
                      />
                      <Input
                        isLabel={true}
                        label="Confirm Password"
                        type="password"
                      />
                    </div>
                  ),
                },
                {
                  id: "notifications",
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">
                        Notification Preferences
                      </h4>
                      <p className="text-foreground/70">
                        Immediate feedback with quick animations.
                      </p>
                      <div className="space-y-3">
                        <Switch
                          title="Email Notifications"
                          leftLabel="Off"
                          rightLabel="On"
                        />
                        <Switch
                          title="Push Notifications"
                          leftLabel="Off"
                          rightLabel="On"
                        />
                        <Switch
                          title="SMS Notifications"
                          leftLabel="Off"
                          rightLabel="On"
                        />
                      </div>
                    </div>
                  ),
                },
                {
                  id: "billing",
                  content: (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">
                        Billing Information
                      </h4>
                      <p className="text-foreground/70">
                        Manage your subscription and payment methods with fast
                        transitions.
                      </p>
                    </div>
                  ),
                },
              ]}
              animations={AnimationPresets.snappy}
            />
          </div>

          {/* Different Sizes with Elegant Animation */}
          <div>
            <h3 className="text-sm font-medium mb-3">
              Different Sizes (Elegant Animation)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">
                  Small Size - Elegant
                </h4>
                <Tabs
                  size="sm"
                  tabs={[
                    { id: "small1", label: "Tab 1" },
                    { id: "small2", label: "Tab 2" },
                  ]}
                  contents={[
                    {
                      id: "small1",
                      content: (
                        <p className="text-sm">
                          Small tab with sophisticated animations
                        </p>
                      ),
                    },
                    {
                      id: "small2",
                      content: (
                        <p className="text-sm">
                          Elegant transitions for premium feel
                        </p>
                      ),
                    },
                  ]}
                  animations={AnimationPresets.elegant}
                />
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">
                  Large Size - Minimal
                </h4>
                <Tabs
                  size="lg"
                  tabs={[
                    { id: "large1", label: "Large Tab 1" },
                    { id: "large2", label: "Large Tab 2" },
                  ]}
                  contents={[
                    {
                      id: "large1",
                      content: (
                        <p className="text-lg">
                          Large tab with minimal, clean animations
                        </p>
                      ),
                    },
                    {
                      id: "large2",
                      content: (
                        <p className="text-lg">
                          Subtle transitions for content focus
                        </p>
                      ),
                    },
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
                <h4 className="text-sm font-medium mb-2">
                  Full Featured (Page {currentPage1} of 10)
                </h4>
                <Pagination
                  currentPage={currentPage1}
                  totalPages={10}
                  onPageChange={setCurrentPage1}
                  withBorder={false}
                  {...PaginationPresets.full}
                />
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">
                  Simple (Page {currentPage2} of 8)
                </h4>
                <Pagination
                  currentPage={currentPage2}
                  totalPages={8}
                  onPageChange={setCurrentPage2}
                  withBorder={false}
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
                <h4 className="text-sm font-medium mb-2">
                  Minimal Variant (Page {currentPage3} of 6)
                </h4>
                <Pagination
                  currentPage={currentPage3}
                  totalPages={6}
                  onPageChange={setCurrentPage3}
                  withBorder={false}
                  {...PaginationPresets.minimal}
                />
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">
                  Numbers Only (Page {currentPage4} of 12)
                </h4>
                <Pagination
                  currentPage={currentPage4}
                  totalPages={12}
                  onPageChange={setCurrentPage4}
                  withBorder={false}
                  {...PaginationPresets.numbers}
                />
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">
                  Dots Variant (Page {currentPage5} of 5)
                </h4>
                <Pagination
                  currentPage={currentPage5}
                  totalPages={5}
                  onPageChange={setCurrentPage5}
                  withBorder={false}
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
                  withBorder={false}
                  {...PaginationPresets.simple}
                />
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">
                  Medium Size (Default)
                </h4>
                <Pagination
                  currentPage={currentPage2}
                  totalPages={7}
                  onPageChange={setCurrentPage2}
                  size="md"
                  withBorder={false}
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
                  withBorder={false}
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
                <h4 className="text-sm font-medium mb-2">
                  Single Page (Hidden)
                </h4>
                <Pagination
                  currentPage={1}
                  totalPages={1}
                  onPageChange={() => {}}
                  withBorder={false}
                  {...PaginationPresets.full}
                />
                <p className="text-sm text-foreground/60 mt-2">
                  Pagination is hidden when there's only one page
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Two Pages</h4>
                <Pagination
                  currentPage={currentPage6}
                  totalPages={2}
                  onPageChange={setCurrentPage6}
                  withBorder={false}
                  {...PaginationPresets.simple}
                />
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">
                  Many Pages (with ellipsis)
                </h4>
                <Pagination
                  currentPage={currentPage8}
                  totalPages={50}
                  onPageChange={setCurrentPage8}
                  withBorder={false}
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

          <Button
            onClick={() => setIsBottomDrawerOpen(true)}
            bg={false}
            outline={true}
          >
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
            <Switch
              title="Enable Notifications"
              leftLabel="Off"
              rightLabel="On"
            />
            <Switch title="Dark Mode" leftLabel="Light" rightLabel="Dark" />
            <Switch title="Auto-save" leftLabel="Off" rightLabel="On" />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Account</h3>
            <Input
              isLabel={true}
              label="Username"
              placeholder="Enter username"
            />
            <Input
              isLabel={true}
              label="Email"
              type="email"
              placeholder="Enter email"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button className="flex-1">Save Changes</Button>
            <Button bg={false} className="flex-1">
              Cancel
            </Button>
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
            <svg
              className="h-4 w-4 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"
              />
            </svg>
            <span className="text-sm font-medium">Dashboard</span>
          </div>
          <div className="flex items-center py-3 px-3 rounded-lg hover:bg-foreground/5 transition-colors cursor-pointer">
            <svg
              className="h-4 w-4 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span className="text-sm font-medium">Analytics</span>
          </div>
          <div className="flex items-center py-3 px-3 rounded-lg hover:bg-foreground/5 transition-colors cursor-pointer">
            <svg
              className="h-4 w-4 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm font-medium">Settings</span>
          </div>
          <div className="flex items-center py-3 px-3 rounded-lg hover:bg-foreground/5 transition-colors cursor-pointer">
            <svg
              className="h-4 w-4 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-sm font-medium">Profile</span>
          </div>
          <div className="flex items-center py-3 px-3 rounded-lg hover:bg-foreground/5 transition-colors cursor-pointer">
            <svg
              className="h-4 w-4 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
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
            <Button bg={false} className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </Drawer>

      {/* Progress Bar Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Progress Bar Components</h2>
          <p className="text-foreground/70">
            Different progress indicators and variants
          </p>
        </div>

        <div className="space-y-6">
          {/* Basic Progress Bars */}
          <div>
            <h3 className="text-sm font-medium mb-3">Basic Progress Bars</h3>
            <div className="space-y-4">
              <ProgressBar value={25} />
              <ProgressBar value={75} color="purple" />
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
          <p className="text-foreground/70">
            Different loading animations and variants
          </p>
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
                <span className="text-sm text-foreground/70">
                  Small Spinner
                </span>
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
          <p className="text-foreground/70">
            Different banner variants and sizes
          </p>
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
          <p className="text-foreground/70">
            Click any button to see toast notifications
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <Button
            onClick={() =>
              addToast({
                title: "Success!",
                description: "Your action was completed successfully.",
                variant: "success",
              })
            }
          >
            Success Toast
          </Button>

          <Button
            onClick={() =>
              addToast({
                title: "Error Alert",
                description: "Something went wrong. Please try again.",
                variant: "error",
              })
            }
            bg={false}
          >
            Error Toast
          </Button>

          <Button
            onClick={() =>
              addToast({
                title: "Warning",
                description: "Please review your input before proceeding.",
                variant: "warning",
              })
            }
            bg={false}
            outline={true}
          >
            Warning Toast
          </Button>

          <Button
            onClick={() =>
              addToast({
                title: "Information",
                description: "Here's some useful information for you.",
                variant: "default",
              })
            }
          >
            Info Toast
          </Button>

          <Button
            onClick={() =>
              addToast({
                title: "Action Required",
                description: "Please confirm this action to continue.",
                variant: "default",
                action: {
                  label: "Confirm",
                  onClick: () =>
                    addToast({
                      title: "Confirmed!",
                      description: "Action has been confirmed.",
                      variant: "success",
                    }),
                },
              })
            }
            bg={false}
          >
            Interactive Toast
          </Button>

          <Button
            onClick={() =>
              addToast({
                title: "Persistent Message",
                description:
                  "This toast will stay until you manually close it.",
                duration: 0,
              })
            }
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
                variant: "success",
              });
              setTimeout(
                () =>
                  addToast({
                    title: "Features",
                    description: "Smooth animations and interactive elements.",
                    variant: "default",
                  }),
                500
              );
              setTimeout(
                () =>
                  addToast({
                    title: "Customizable",
                    description:
                      "Easy to customize colors, timing, and behavior.",
                    variant: "warning",
                  }),
                1000
              );
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
          <p className="text-foreground/70">
            Simple user avatars with image and alphabet fallback
          </p>
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
          <p className="text-sm text-muted-foreground">
            Clean user list with avatars and actions
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Image Examples</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Sample User List</h4>
                <div className="max-w-sm">
                  <UserList
                    users={sampleUsers}
                    onAddUser={(userId) => console.log("Add user:", userId)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Typography Components</h2>
          <p className="text-sm text-muted-foreground">
            Consistent text styling with variants and presets
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Typography Examples</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Heading Variants</h4>
                <div className="space-y-3">
                  <Heading1>Heading 1 - Main Title</Heading1>
                  <Heading2>Heading 2 - Section Title</Heading2>
                  <Heading3>Heading 3 - Subsection Title</Heading3>
                  <Typography variant="h4">
                    Heading 4 - Minor Heading
                  </Typography>
                  <Typography variant="h5">
                    Heading 5 - Small Heading
                  </Typography>
                  <Typography variant="h6">
                    Heading 6 - Smallest Heading
                  </Typography>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Text Variants</h4>
                <div className="space-y-3">
                  <Lead>
                    This is a lead paragraph that stands out and draws attention
                    to important content.
                  </Lead>
                  <Body>
                    This is a regular body text paragraph that contains the main
                    content of your page.
                  </Body>
                  <Small>
                    This is small text used for secondary information or
                    captions.
                  </Small>
                  <Caption>
                    This is caption text for very small details or metadata.
                  </Caption>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Container Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Container Components</h2>
          <p className="text-sm text-muted-foreground">
            Simple containers with max-width, centering, and padding
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Container Examples</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Size Variants</h4>
                <div className="space-y-3">
                  <Container size="xs" className="bg-muted py-4">
                    <Typography variant="small">
                      XS Container (max-w-sm)
                    </Typography>
                  </Container>
                  <Container size="sm" className="bg-muted py-4">
                    <Typography variant="small">
                      SM Container (max-w-4xl)
                    </Typography>
                  </Container>
                  <Container size="md" className="bg-muted py-4">
                    <Typography variant="small">
                      MD Container (max-w-5xl)
                    </Typography>
                  </Container>
                  <Container size="lg" className="bg-muted py-4">
                    <Typography variant="small">
                      LG Container (max-w-6xl)
                    </Typography>
                  </Container>
                  <Container size="xl" className="bg-muted py-4">
                    <Typography variant="small">
                      XL Container (max-w-7xl)
                    </Typography>
                  </Container>
                  <Container size="2xl" className="bg-muted py-4">
                    <Typography variant="small">
                      2XL Container (max-w-8xl)
                    </Typography>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beautiful Carousels */}
      <div className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Beautiful Carousels</h2>
          <p className="text-sm text-muted-foreground">
            Stunning image and card carousels with custom arrows and modern
            pagination
          </p>
        </div>

        {/* Custom Image Carousel */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold">Custom Image Carousel</h3>
            <p className="text-sm text-muted-foreground">
              Separate image carousel component with custom data and different
              settings
            </p>
          </div>
          <div className="py-8">
            <ImageCarousel
              data={customImageData}
              itemsPerView={2}
              autoPlay={true}
              autoPlaySpeed={4000}
              arrowsInside={true}
            />
          </div>
        </div>

        {/* Custom Card Carousel */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold">Custom Card Carousel</h3>
            <p className="text-sm text-muted-foreground">
              Card carousel with custom business feature data
            </p>
          </div>
          <div className="py-8">
            <BeautifulCardCarousel
              data={customCardData}
              itemsPerView={3}
              autoPlay={true}
              autoPlaySpeed={5000}
              arrowsInside={false}
            />
          </div>
        </div>

        {/* Beautiful Marquee */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold">Beautiful Card Marquee</h3>
            <p className="text-sm text-muted-foreground">
              Smooth scrolling cards with fade edges and focus rings
            </p>
          </div>
          <div className="py-8">
            <Marquee
              speed="normal"
              direction="left"
              pauseOnHover={true}
              fadeEdges={true}
              layers="double"
            />
          </div>
        </div>

        {/* Accordion Components */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold">Accordion Components</h3>
            <p className="text-sm text-muted-foreground">
              Collapsible content sections with smooth animations
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Accordion */}

            <div>
              <h5 className="text-xs font-medium mb-2 text-foreground/70">
                Single Open (Default)
              </h5>
              <Accordion
                items={[
                  {
                    id: "single-1",
                    title: "Only One Open",
                    content:
                      "When you open a new item, the previous one closes automatically.",
                  },
                  {
                    id: "single-2",
                    title: "Clean Interface",
                    content:
                      "Keeps the interface clean and focused on one piece of content at a time.",
                  },
                  {
                    id: "single-3",
                    title: "Better UX",
                    content:
                      "Reduces visual clutter and helps users focus on the content they need.",
                  },
                ]}
                variant="bordered"
                size="sm"
                allowMultiple={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Date Picker Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Date Picker Components</h2>
          <p className="text-foreground/70">
            Beautiful date selection with calendar dropdown
          </p>
        </div>

        <div className="w-full space-y-6">
          {/* Date Picker Examples */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Select Date</h3>
              <DatePicker
                value={datePickerValue}
                onChange={(date) => setDatePickerValue(date)}
                placeholder="Choose a date..."
                size="sm"
                showToday={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* OTP Input Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">OTP Input Components</h2>
          <p className="text-foreground/70">
            Beautiful one-time password input with sequential filling
          </p>
        </div>

        <div className="w-full max-w-sm sm:max-w-md mx-auto">
          {/* OTP Example */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-center">6-Digit OTP</h3>
            <InputOTP
              length={6}
              value={otpValue}
              onChange={setOtpValue}
              size="sm"
              autoFocus={true}
            />
            <p className="text-xs text-muted-foreground text-center">
              Entered: {otpValue || "None"}
            </p>
          </div>
        </div>
      </div>

      {/* Data Table Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Data Table Components</h2>
          <p className="text-foreground/70">
            Beautiful data tables with checkboxes and sorting
          </p>
        </div>

        <div className="w-full max-w-full overflow-x-auto">
          {/* Sample Data */}
          {(() => {
            const sampleData = [
              {
                id: 1,
                name: "John Doe",
                email: "john@example.com",
                role: "Admin",
                status: "Active",
                department: "Engineering",
                lastLogin: "2 hours ago",
                projects: 12,
                score: 95,
              },
              {
                id: 2,
                name: "Jane Smith",
                email: "jane@example.com",
                role: "User",
                status: "Inactive",
                department: "Marketing",
                lastLogin: "1 day ago",
                projects: 8,
                score: 87,
              },
              {
                id: 3,
                name: "Bob Johnson",
                email: "bob@example.com",
                role: "Moderator",
                status: "Active",
                department: "Support",
                lastLogin: "30 minutes ago",
                projects: 15,
                score: 92,
              },
              {
                id: 4,
                name: "Alice Brown",
                email: "alice@example.com",
                role: "User",
                status: "Pending",
                department: "Sales",
                lastLogin: "Never",
                projects: 5,
                score: 78,
              },
              {
                id: 5,
                name: "Charlie Wilson",
                email: "charlie@example.com",
                role: "Admin",
                status: "Active",
                department: "Engineering",
                lastLogin: "5 minutes ago",
                projects: 20,
                score: 98,
              },
              {
                id: 6,
                name: "Diana Prince",
                email: "diana@example.com",
                role: "User",
                status: "Active",
                department: "Design",
                lastLogin: "1 hour ago",
                projects: 9,
                score: 89,
              },
              {
                id: 7,
                name: "Ethan Hunt",
                email: "ethan@example.com",
                role: "Moderator",
                status: "Inactive",
                department: "Security",
                lastLogin: "3 days ago",
                projects: 11,
                score: 85,
              },
              {
                id: 8,
                name: "Fiona Green",
                email: "fiona@example.com",
                role: "User",
                status: "Active",
                department: "HR",
                lastLogin: "45 minutes ago",
                projects: 6,
                score: 82,
              },
            ];

            const columns = [
              { key: "name" as const, label: "Name", sortable: true },
              { key: "email" as const, label: "Email", sortable: true },
              { key: "role" as const, label: "Role", sortable: true },
              {
                key: "department" as const,
                label: "Department",
                sortable: true,
              },
              { key: "projects" as const, label: "Projects", sortable: true },
              {
                key: "lastLogin" as const,
                label: "Last Login",
                sortable: true,
              },
            ];

            return (
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">User Management Table</h3>
                  <DataTable
                    data={sampleData}
                    columns={columns}
                    size="md"
                    selectable={true}
                    onSelectionChange={setSelectedTableRows}
                    onRowClick={(row) => console.log("Row clicked:", row)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Selected: {selectedTableRows.length} row(s)
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Slider Components */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Slider Components</h2>
          <p className="text-muted-foreground">
            Interactive range sliders for value selection
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Volume Control</h3>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <Slider
                value={sliderValue}
                onChange={setSliderValue}
                min={0}
                max={100}
                step={1}
                size="md"
                className="w-full"
              />
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Volume: {sliderValue}%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Area Components */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Scroll Area Components</h2>
          <p className="text-muted-foreground">
            Scrollable content areas with custom styling
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Version Tags</h3>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <ScrollArea title="Tags" size="md" showBorder={true}>
                <div className="text-xs sm:text-sm text-foreground font-mono">
                  v1.2.0-beta.50
                </div>
                <div className="text-xs sm:text-sm text-foreground font-mono">
                  v1.2.0-beta.49
                </div>
                <div className="text-xs sm:text-sm text-foreground font-mono">
                  v1.2.0-beta.48
                </div>
                <div className="text-xs sm:text-sm text-foreground font-mono">
                  v1.2.0-beta.47
                </div>
                <div className="text-xs sm:text-sm text-foreground font-mono">
                  v1.2.0-beta.46
                </div>
                <div className="text-xs sm:text-sm text-foreground font-mono">
                  v1.2.0-beta.45
                </div>
                <div className="text-xs sm:text-sm text-foreground font-mono">
                  v1.2.0-beta.44
                </div>
                <div className="text-xs sm:text-sm text-foreground font-mono">
                  v1.2.0-beta.43
                </div>
                <div className="text-xs sm:text-sm text-foreground font-mono">
                  v1.2.0-beta.42
                </div>
                <div className="text-xs sm:text-sm text-foreground font-mono">
                  v1.2.0-beta.41
                </div>
                <div className="text-xs sm:text-sm text-foreground font-mono">
                  v1.2.0-beta.40
                </div>
                <div className="text-xs sm:text-sm text-foreground font-mono">
                  v1.2.0-beta.39
                </div>
                <div className="text-xs sm:text-sm text-foreground font-mono">
                  v1.2.0-beta.38
                </div>
                <div className="text-xs sm:text-sm text-foreground font-mono">
                  v1.2.0-beta.37
                </div>
                <div className="text-xs sm:text-sm text-foreground font-mono">
                  v1.2.0-beta.36
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </section>

      {/* Skeleton Components */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Skeleton Components</h2>
          <p className="text-foreground/70">
            Beautiful loading placeholders with multiple variants and animations
          </p>
        </div>

        <div className="space-y-6">
          {/* Animation Variants */}
          <div>
            <h3 className="text-sm font-medium mb-3">Animation Variants</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">
                  Pulse Animation (Default)
                </h4>
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
                  <Skeleton
                    {...SkeletonPresets.pulse}
                    width="100px"
                    height="20px"
                  />
                  <Skeleton
                    {...SkeletonPresets.wave}
                    width="100px"
                    height="20px"
                  />
                  <Skeleton
                    {...SkeletonPresets.shimmer}
                    width="100px"
                    height="20px"
                  />
                  <Skeleton
                    {...SkeletonPresets.static}
                    width="100px"
                    height="20px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
