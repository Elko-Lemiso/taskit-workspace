import { Navbar, ScrollArea, Input, Button, Drawer, Text } from "@mantine/core";
import { useState, useEffect } from "react";
import { Search } from "tabler-icons-react";
import { TaskCard } from "../../Cards/TaskCard";
import { TaskForm } from "../../Forms/Tasks";
import { useRouter } from "next/router";
import { dummyTasks } from "../../../store/dummy/tasks";
import { dummyTasks2 } from "../../../store/dummy/tasks2";

export const SidebarTaskOverview = () => {
    const router = useRouter();
  const [opened, setOpened] = useState(false);
  const [data, setData] = useState([]);



  return (
    <>
      <Navbar.Section mt="xs">
        Apply to this task
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        Some stuff
      </Navbar.Section>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
      >
        <TaskForm />
      </Drawer>

      <Navbar.Section>
        <Button
          radius="xl"
          size="lg"
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 105 }}
          fullWidth={true}
          onClick={() => setOpened(true)}
        >
          Apply to this task
        </Button>
      </Navbar.Section>
    </>
  );
};
