"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Shaheer Khan",
    email: "shaheermkhan2005@gmail.com",
    avatar: "/favicon copy.ico",
  },
  teams: [
    {
      name: "Swipe Savvy",
      logo: GalleryVerticalEnd,
      plan: "Platform",
    },
    {
      name: "Merchants Account",
      logo: AudioWaveform,
      plan: "Merchant",
    },
    {
      name: "Customers Account",
      logo: Command,
      plan: "Customer",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Recent Activity",
          url: "#",
        },
        {
          title: "Analytics",
          url: "#",
        },
      ],
    },
    {
      title: "AI Tools",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Chat Assistant",
          url: "#",
        },
        {
          title: "Image Generator",
          url: "#",
        },
        {
          title: "Code Helper",
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Documentation",
          url: "#",
        },
        {
          title: "Guides",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Release Notes",
          url: "#",
        },
      ],
    },
    {
      title: "Account",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Profile Settings",
          url: "#",
        },
        {
          title: "Team Management",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Usage Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Product Development",
      url: "#",
      icon: Frame,
    },
    {
      name: "Marketing Campaigns",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel Plans",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
