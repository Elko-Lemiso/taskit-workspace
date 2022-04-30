import {
  Navbar,
  ScrollArea,
  Stack,
  Button,
  Text,
  Avatar,
  Title,
  Progress,
  Group,
  Box,
  Tabs,
  Divider,
  Center,
  Container,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { TaskCard } from "../../Cards/TaskCard";
import { TaskForm } from "../../Forms/Tasks";
import { useRouter } from "next/router";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { dummyTasks2 } from "../../../store/dummy/tasks2";
import { Photo, MessageCircle, Settings } from "tabler-icons-react";

import { motion, AnimatePresence } from "framer-motion";
export const Profile = ({ data, mine }) => {
  // const { loading, error, data } = useQuery(GET_TASKS);
  const router = useRouter();

  return (
    <motion.div
    transition={{ duration: 0.6 }}
    initial={{ opacity: 0, y: 66 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
  >
      <Navbar.Section mt="xs">
        <Group>
          <Avatar
            style={{ borderRadius: "100%" }}
            radius="xl"
            size="xl"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
          />
          <Box
            sx={(theme) => ({
              wordWrap: "break-word",
            })}
          >
            <Stack spacing="xs">
              <Title order={2}>Elko Lemiso</Title>
              <Text size="xs">@plutoniumApples</Text>
            </Stack>
          </Box>
        </Group>
        <Divider my="sm" />
      </Navbar.Section>

      <Navbar.Section>
        <Tabs variant="pills" grow>
          <Tabs.Tab label="as Asker" icon={<Photo size={14} />}>
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Group>
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStarOutline size={20} />
                <IoIosStarOutline size={20} />
              </Group>
            </Container>
            <Stack>
              <Title order={4}>7 Reviews</Title>
              <Progress
                size="xl"
                radius="xl"
                label="5"
                value={90}
                color="orange"
              />

              <Progress
                size="xl"
                radius="xl"
                label="4"
                value={10}
                color="violet"
              />
              <Progress
                size="xl"
                radius="xl"
                label="3"
                value={20}
                color="violet"
              />
              <Progress
                size="xl"
                radius="xl"
                label="2"
                value={10}
                color="violet"
              />
              <Progress
                size="xl"
                radius="xl"
                label="1"
                value={10}
                color="violet"
              />
            </Stack>
          </Tabs.Tab>
          <Tabs.Tab label="as Tasker" icon={<MessageCircle size={14} />}>
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Group>
                <IoIosStar size={20} />
                <IoIosStarHalf size={20} />
                <IoIosStarOutline size={20} />
                <IoIosStarOutline size={20} />
                <IoIosStarOutline size={20} />
              </Group>
            </Container>
            <Stack>
              <Title order={4}>5 Reviews</Title>
              <Progress
                size="xl"
                radius="xl"
                label="5"
                value={30}
                color="orange"
              />

              <Progress
                size="xl"
                radius="xl"
                label="4"
                value={40}
                color="violet"
              />
              <Progress
                size="xl"
                radius="xl"
                label="3"
                value={50}
                color="violet"
              />
              <Progress
                size="xl"
                radius="xl"
                label="2"
                value={40}
                color="violet"
              />
              <Progress
                size="xl"
                radius="xl"
                label="1"
                value={90}
                color="violet"
              />
            </Stack>
          </Tabs.Tab>
        </Tabs>
      </Navbar.Section>
      </motion.div>
  );
};
