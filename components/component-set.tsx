import React, { useState } from "react";
import { PaymentForm } from "./ui/payment-form";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { RadioCard } from "./ui/radio-card";
import { Badge } from "./ui/badge";
import { Slider } from "./ui/slider";
import { Checkbox } from "./ui/checkbox";
import { AvatarGroup } from "./ui/avatar";
import { ProfileVerification } from "./ui/profile-verification";
import { ButtonGroup, ButtonGroupItem } from "./ui/button-group";
import { Pagination, PaginationPresets } from "./ui/pagination";
import { IconButton } from "./ui/icon-button";
import { HeaderBar } from "./ui/header-bar";
import { Loader } from "./ui/loader";

const ComponentSet = () => {
  const [selectedCompute, setSelectedCompute] = useState("kubernetes");
  const [sliderValue, setSliderValue] = useState(500);
  const [currentPage, setCurrentPage] = useState(1);
  const [copilotValue, setCopilotValue] = useState("copilot");
  const [gpuCount, setGpuCount] = useState(8);
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
        {/* Left Column - Payment Form */}
        <div className="lg:col-span-1">
          <div className="w-fit">
            <PaymentForm />
          </div>
        </div>

        {/* Middle Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* No Team Members Card */}
          <div className="w-fit">
            <Card
              title="No Team Members"
              description="Invite your team to collaborate on this project."
              className="p-6"
              shadow={false}
              dashed={true}
            >
              <div className="flex items-center justify-center mb-6">
                <AvatarGroup
                  avatars={[
                    {
                      src: "https://i.pravatar.cc/100?img=1",
                      alt: "John Doe",
                      fallback: "JD",
                    },
                    {
                      src: "https://i.pravatar.cc/100?img=2",
                      alt: "Jane Smith",
                      fallback: "AS",
                    },
                    {
                      src: "https://i.pravatar.cc/100?img=3",
                      alt: "Mike Johnson",
                      fallback: "MJ",
                    },
                  ]}
                  size="md"
                />
              </div>
              <div className="w-fit mx-auto ">
                <Button>
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
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Invite Members
                </Button>
              </div>
            </Card>
          </div>

          {/* Status Indicators */}
          <div className="flex gap-3">
            <Badge
              bg={true}
              variant="secondary"
              className="flex items-center gap-2 bg-foreground text-background"
            >
              <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
              Syncing
            </Badge>
            <Badge bg={false} className="border border-border">
              Updating
            </Badge>
            <Badge bg={false} className="border border-border">
              Loading
            </Badge>
          </div>

          {/* Message Input */}
          <div className="relative">
            <Input placeholder="Send a message..." className="pl-10 pr-10" />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-4 h-4 text-muted-foreground"
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
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <IconButton onClick={() => console.log("Voice message")}>
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
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </IconButton>
            </div>
          </div>

          {/* Price Range Slider */}
          <Card
            title="Price Range"
            description="Set your budget range ($200 - 800)."
            className="p-4"
            shadow={false}
            dashed={true}
          >
            <Slider
              value={sliderValue}
              onChange={setSliderValue}
              min={200}
              max={800}
              step={50}
              size="md"
            />
          </Card>

          {/* Search Input */}
          <div className="relative">
            <Input placeholder="Search..." className="pl-10 pr-20" />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-4 h-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
              12 results
            </div>
          </div>

          {/* URL Input */}
          <div className="relative">
            <Input value="https://example.com" className="pl-10 pr-10" />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-4 h-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <IconButton onClick={() => console.log("Copy URL")}>
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
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </IconButton>
            </div>
          </div>

          {/* Chat/Search Input */}
          <div className="relative">
            <Input
              placeholder="Ask, Search or Chat..."
              className="pl-10 pr-36"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-4 h-4 text-muted-foreground"
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
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2 text-xs">
              <span className="text-muted-foreground whitespace-nowrap">
                Auto
              </span>
              <span className="text-muted-foreground whitespace-nowrap">
                52% used
              </span>
              <IconButton onClick={() => console.log("Send message")}>
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
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Header Bar */}
          <HeaderBar />

          {/* Action Bar */}
          <div className="w-fit">
            <ButtonGroup variant="bordered">
              <ButtonGroupItem onClick={() => console.log("Archive")}>
                Archive
              </ButtonGroupItem>
              <ButtonGroupItem onClick={() => console.log("Report")}>
                Report
              </ButtonGroupItem>
              <ButtonGroupItem onClick={() => console.log("Snooze")}>
                Snooze
              </ButtonGroupItem>
            </ButtonGroup>
          </div>

          {/* Pagination/Navigation */}
          <div className="w-fit">
            <Pagination
              currentPage={currentPage}
              totalPages={3}
              onPageChange={setCurrentPage}
              {...PaginationPresets.simple}
            />
          </div>

          {/* Compute Environment Section */}
          <div className="w-full">
            <Card
              title="Compute Environment"
              description="Select the compute environment for your cluster."
              className="p-4"
              shadow={false}
              dashed={true}
            >
              <div className="space-y-3">
                <RadioCard
                  name="compute"
                  value="kubernetes"
                  label="Kubernetes"
                  description="Run GPU workloads on a K8s configured cluster. This is the default."
                  checked={selectedCompute === "kubernetes"}
                  onChange={setSelectedCompute}
                />
                <RadioCard
                  name="compute"
                  value="vm"
                  label="Virtual Machine"
                  description="Access a VM configured cluster to run workloads. (Coming soon)."
                  checked={selectedCompute === "vm"}
                  onChange={setSelectedCompute}
                />
              </div>
            </Card>
          </div>

          {/* Number of GPUs Input */}
          <div className="w-full">
            <Card
              title="Number of GPUs"
              description="You can add more later."
              className="p-4 w-full"
              shadow={false}
              dashed={true}
            >
              <div className="flex items-center gap-3">
                <Button
                  bg={false}
                  size="sm"
                  className="w-10 h-10 p-0 border border-border hover:bg-muted transition-colors"
                  onClick={() => setGpuCount(Math.max(1, gpuCount - 1))}
                >
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
                      d="M20 12H4"
                    />
                  </svg>
                </Button>
                <Input
                  value={gpuCount.toString()}
                  className="w-16 h-10 text-center border-border focus:border-foreground"
                  readOnly
                />
                <Button
                  bg={false}
                  size="sm"
                  className="w-10 h-10 p-0 border border-border hover:bg-muted transition-colors"
                  onClick={() => setGpuCount(gpuCount + 1)}
                >
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
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Fourth Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Wallpaper Tinting Toggle */}
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg border border-border">
            <div>
              <div className="text-sm font-medium text-foreground">
                Wallpaper Tinting
              </div>
              <div className="text-xs text-muted-foreground">
                Allow the wallpaper to be tinted.
              </div>
            </div>
            <Switch checked={true} size="sm" />
          </div>

          {/* Processing Request Card */}
          <div className="w-fit">
            <Card
              title="Processing your request"
              description="Please wait while we process your request. Do not refresh the page."
              className="p-4"
              shadow={false}
              dashed={true}
            >
              <div className="mx-auto w-fit">
                <IconButton size="lg">
                  <Loader size="md" variant="outline" className="" />
                </IconButton>
              </div>
              <div className="mx-auto mt-4 w-fit">
                <Button
                  bg={false}
                  className="w-full border border-border hover:bg-background transition-colors"
                  onClick={() => setIsProcessing(!isProcessing)}
                >
                  Cancel
                </Button>
              </div>
            </Card>
          </div>

          {/* Two-factor authentication */}
          <div className="w-full">
            <Card
              title="Two-factor authentication"
              description="Verify via email or phone number."
              className="p-4"
              shadow={false}
              dashed={true}
            >
              <div className="w-fit mx-auto">
                <Button
                  bg={true}
                  className="w-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
                  onClick={() => setIsProcessing(!isProcessing)}
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M20.8 6.2a.75.75 0 0 1 .04 1.06l-9.75 10.5a.75.75 0 0 1-1.117-.02l-4.75-5.5a.753.753 0 0 1 1.137-.983l4.2 4.87l9.18-9.89a.75.75 0 0 1 1.06-.039z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Enable
                </Button>
              </div>
            </Card>
          </div>

          {/* Profile Verification */}
          <ProfileVerification />

          {/* Appearance Settings */}
          <div className="w-fit">
            <div className="text-sm text-muted-foreground">Appearance</div>
          </div>

          {/* Terms and Conditions */}
          <div className="w-fit">
            <div className="flex items-center gap-2">
              <Checkbox
                label="I agree to the terms and conditions"
                defaultChecked={true}
                size="md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentSet;
