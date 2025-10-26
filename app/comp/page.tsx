'use client';

import { useState } from 'react';
import { ThemeToggle } from "../../components/theme-toggle";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import {DropDown} from "../../components/ui/dropdown";
import { TextArea } from "../../components/ui/textarea";
import { Switch } from "../../components/ui/switch";
import { Modal, ModalTrigger } from "../../components/ui/modal";
import { Tooltip, TooltipWrapper } from "../../components/ui/tooltip";
import { Card, CardGrid } from "../../components/ui/Card";
import { Drawer } from "../../components/ui/drawer";
export default function page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState(false);

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
                  <Button size="lg">Get Started</Button>
                </div>
              </div>
            }
          >
            <Button variant="secondary">Open Large Modal</Button>
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
    </div>
  );
}

