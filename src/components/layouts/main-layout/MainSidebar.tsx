import { ComponentProps } from "react";
import { MainUserMenu } from "@/components/layouts/main-layout/MainUserMenu";
import { MainTeamSwitcher } from "@/components/layouts/main-layout/MainTeamSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { teams, user, menu } from "@/components/layouts/data/sidebar.data";
import { MenuContent } from "@/components/layouts/MenuContent";

export const MainSidebar = ({ ...props }: ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <MainTeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <MenuContent menu={menu} />
      </SidebarContent>
      <SidebarFooter>
        <MainUserMenu user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};