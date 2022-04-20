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
/* eslint-disable-next-line */

export function Sidebar() {
  const router = useRouter();

  let sidebar;
  switch (router.route) {
    case "/jobs":
      sidebar = <SidebarTasks />;
      break;
    case "/jobs/[jid]":
      sidebar = <SidebarTaskOverview />;
      break;
    default:
      break;
  }

  return (
    <Navbar width={{ base: 360 }} height={"calc(100vh - 60px) "} p="xs">
      {sidebar}
    </Navbar>
  );
}

export default Sidebar;
