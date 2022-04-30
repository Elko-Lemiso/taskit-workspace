import { Navbar, ScrollArea, Input, Button, Text } from "@mantine/core";
import { useState, useEffect } from "react";
import { Search } from "tabler-icons-react";
import { TaskCard } from "../../Cards/TaskCard";
import { TaskForm } from "../../Forms/Tasks";
import { useRouter } from "next/router";
import { dummyTasks } from "../../../store/dummy/tasks";
import { dummyTasks2 } from "../../../store/dummy/tasks2";
import { gql, useQuery } from "@apollo/client";
import { useModals } from "@mantine/modals";
const GET_TASKS = gql`
  query Tasks {
    tasks {
      id
      title
      category
    }
  }
`;
export const SidebarTasks = ({ data, mine }) => {
  // const { loading, error, data } = useQuery(GET_TASKS);
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const modals = useModals();

  // useEffect(() => {
  //   if (loading || error || data) {
  //     console.log(loading, error, data);
  //   }
  // }, [loading, error, data]);

  const openConfirmModal = () =>
    modals.openConfirmModal({
      title: "Please confirm your action",
      closeOnConfirm: false,
      labels: { confirm: "Next", cancel: "Close" },
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a
          modal. Please click one of these buttons to proceed.
        </Text>
      ),
      onConfirm: () =>
        modals.openConfirmModal({
          title: "This is modal at second layer",
          labels: { confirm: "Next", cancel: "Back" },
          closeOnConfirm: false,
          children: (
            <Text size="sm">
              When this modal is closed modals state will revert to first modal
            </Text>
          ),
          onConfirm: () =>
            modals.openConfirmModal({
              title: "This is modal at third layer",
              labels: { confirm: "Close modal", cancel: "Back" },
              closeOnConfirm: false,
              children: (
                <Text size="sm">
                  When this modal is closed modals state will revert to first
                  modal
                </Text>
              ),
              onConfirm: () => modals.closeAll(),
            }),
        }),
    });
console.log(mine);

  return (
    <>
      {!mine && (
        <Navbar.Section mt="xs">
          <Input icon={<Search />} placeholder="Find a job" />
        </Navbar.Section>
      )}

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {data ? (
          data.map((link, index) => {
            return <TaskCard key={index} {...link} />;
          })
        ) : (
          <Text>No jobs here</Text>
        )}
      </Navbar.Section>
      <Navbar.Section>
        <Button
          radius="xl"
          size="lg"
          variant="gradient"
          gradient={{ from: "teal", to: "#457265", deg: 105 }}
          fullWidth={true}
          onClick={openConfirmModal}
        >
          Post a Task
        </Button>
      </Navbar.Section>
    </>
  );
};
