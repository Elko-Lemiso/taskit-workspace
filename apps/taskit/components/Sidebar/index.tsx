import { Navbar, ScrollArea, Input, Button, Drawer, Text } from "@mantine/core";
import { useState, useEffect } from "react";
import { Search } from "tabler-icons-react";
import { TaskCard } from "../Cards/TaskCard";
import { TaskForm } from "../Forms/Tasks";
import { useRouter } from "next/router";
import { dummyTasks } from "../../store/dummy/tasks";
import { dummyTasks2 } from "../../store/dummy/tasks2";
import { SidebarTasks } from "./Tasks";
import { SidebarTaskOverview } from "./TaskOverview";
import { Profile } from "./Profile";
/* eslint-disable-next-line */

export function Sidebar({opened}) {
  const router = useRouter();

  let sidebar;
  switch (router.route) {
    case "/jobs":
      sidebar = <SidebarTasks data={dummyTasks} mine={false} />;
      break;
    case "/jobs/[jid]":
      sidebar = <SidebarTaskOverview />;
      break;
    case "/profile/[pid]":
      sidebar = <Profile data={dummyTasks2} mine={true} />;
      break;
    default:
      break;
  }

  return (
    <Navbar
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
      height={"calc(100vh - 60px) "}
      position={{ top: 0, left: 0 }}
      p="xs"
    >
      {sidebar}
    </Navbar>
  );
}

export default Sidebar;
