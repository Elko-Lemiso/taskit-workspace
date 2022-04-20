import { Navbar, ScrollArea, Input, Button, Drawer, Text } from "@mantine/core";
import { useState, useEffect } from "react";
import { Search } from "tabler-icons-react";
import { TaskCard } from "../../Cards/TaskCard";
import { TaskForm } from "../../Forms/Tasks";
import { useRouter } from "next/router";
import { dummyTasks } from "../../../store/dummy/tasks";
import { dummyTasks2 } from "../../../store/dummy/tasks2";
import { gql, useQuery } from "@apollo/client";

const GET_TASKS = gql`
  query Tasks {
    tasks {
      id
      title
      category
    }}
`;
export const SidebarTasks = () => {
  const { loading, error, data } = useQuery(GET_TASKS);
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (loading || error || data) {
      console.log(loading, error, data);
    }
  }, [loading, error, data]);

  return (
    <>
      <Navbar.Section mt="xs">
        <Input icon={<Search />} placeholder="Find a job" />
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {dummyTasks ? (
          dummyTasks.map((link, index) => {
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
          gradient={{ from: "teal", to: "#457265", deg: 105 }}
          fullWidth={true}
          onClick={() => setOpened(true)}
        >
          Post a Task
        </Button>
      </Navbar.Section>
    </>
  );
};
