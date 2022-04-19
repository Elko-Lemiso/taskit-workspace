import { Navbar, ScrollArea, Input, Button, Drawer,Text } from "@mantine/core";
import { useState } from "react";
import { Search } from "tabler-icons-react";
import { TaskCard } from "../Cards/TaskCard";
import { TaskForm } from "../Forms/Tasks";
/* eslint-disable-next-line */

export function Sidebar({ data }) {
  const [opened, setOpened] = useState(false);

  return (
    <Navbar width={{ base: 360 }} height={"calc(100vh - 60px) "} p="xs">
      <Navbar.Section mt="xs">
        <Input icon={<Search />} placeholder="Find a job" />
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {data ? (
          data.map((link, index) => {
            
            return <TaskCard {...link} key={index} />;
          })
        ) : (
          <Text>No jobs here</Text>
        )}
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
          Post a Task
        </Button>
      </Navbar.Section>
    </Navbar>
  );
}

export default Sidebar;
