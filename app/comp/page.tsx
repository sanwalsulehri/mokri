'use client';

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
export default function page() {
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
    </div>
  );
}

