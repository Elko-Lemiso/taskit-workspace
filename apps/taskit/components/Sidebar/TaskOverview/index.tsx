import {
  Navbar,
  ScrollArea,
  Button,
  Text,
  Modal,
  Title,
  ThemeIcon,
  Badge,
  Group,
  Avatar,
  UnstyledButton,
  useMantineTheme,
  Spoiler,
  Box,
  Divider,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { Search } from "tabler-icons-react";
import { TaskCard } from "../../Cards/TaskCard";
import { useRouter } from "next/router";
import { dummyTasks } from "../../../store/dummy/tasks";
import { useShallowEffect } from "@mantine/hooks";
import { FaHandSpock } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiChat3Fill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useModals } from "@mantine/modals";

export const SidebarTaskOverview = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const theme = useMantineTheme();
  const modals = useModals();

  useEffect(() => {
    const found = dummyTasks.find(
      (element) => element.jid === router.query.jid
    );
    setData(found);
  }, [router.query.jid]);

  const openConfirmModal = () =>
    modals.openConfirmModal({
      title: "Please confirm your action",
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a
          modal. Please click one of these buttons to proceed.
        </Text>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });

  return (
    <>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
        transition={{ type: "spring", duration: 0.6, bounce: 0.46 }}
        initial={{ opacity: 0, y: 66 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
      >
        <Navbar.Section>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: theme.spacing.lg,
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: theme.spacing.sm,
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 20,
                alignItems: "center",
                alignContent: "center",
                margin: 0,
              }}
            >
              <ThemeIcon
                variant="gradient"
                gradient={{ from: "pink", to: "red" }}
                radius="xl"
                size="lg"
              >
                {data && data.icon}
              </ThemeIcon>
              <Title style={{ marginLeft: 10 }} order={3}>
                {data && data.label}
              </Title>
            </Box>

            <Badge
              variant="gradient"
              gradient={
                data && data.status === "open"
                  ? { from: "teal", to: "lime", deg: 105 }
                  : { from: "orange", to: "red" }
              }
            >
              {data && data.status}
            </Badge>
          </Box>

          <Divider my="sm" />

          <Box
            style={{
              paddingTop: theme.spacing.sm,
            }}
          >
            <Text style={{ paddingBottom: 10 }} weight={700} size="xs">
              DESCRIPTION
            </Text>
            <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
              <Text size="md">{data && data.taskDescription}</Text>
            </Spoiler>
          </Box>
          <Divider my="sm" />
        </Navbar.Section>

        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
          <Group position="apart" grow>
            <UnstyledButton
              onClick={()=>router.push(`/profile/${data.owner.uuid}`)}
              sx={{
                display: "block",
                paddingLeft: 0,
                paddingRight: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.black,

                "&:hover": {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[0],
                },
              }}
            >
              <Group>
                <Avatar src={data && data.owner.profileImage} radius="xl" />
                <Box sx={{ flex: 1 }}>
                  <Text size="xs" weight={500}>
                    {data && data.owner.name}
                  </Text>
                  <Text size="xs" weight={500}>
                    {data && data.timePosted}
                  </Text>
                </Box>
              </Group>
            </UnstyledButton>
            <Text size="xs" weight={500}>
              <FiUsers style={{ marginRight: 5 }} />{" "}
              {data && data.taskersNeeded} taskers requested.
            </Text>
          </Group>

          <Divider my="sm" />

          <Group position="apart">
            <Box>
              <Text style={{ paddingBottom: 10 }} weight={700} size="xs">
                DUE DATE
              </Text>
              <Text weight={900} size="md">
                {data && data.jobTime}
              </Text>
              <Text size="sm">Morning Or Midday</Text>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Text style={{ paddingBottom: 10 }} weight={500} size="xs">
                LOCATION
              </Text>
              <Text weight={900} size="md">
                {data && data.location}
              </Text>
              <Text
                variant="link"
                component="a"
                href="https://mantine.dev"
                size="sm"
              >
                VIEW
              </Text>
            </Box>
          </Group>

          <Divider my="sm" />
          <Group position="apart">
            <Box>
              <Text style={{ paddingBottom: 10 }} weight={700} size="xs">
                REQUIREMENTS
              </Text>
              {data ? (
                data.requirements.map((requirement, index) => {
                  return (
                    <Badge
                      variant="dot"
                      color="orange"
                      style={{ margin: 2 }}
                      key={index}
                    >
                      {requirement}
                    </Badge>
                  );
                })
              ) : (
                <Text>No jobs here</Text>
              )}
            </Box>
          </Group>
        </Navbar.Section>
      </motion.div>
      <Navbar.Section style={{ bottom: 0 }}>
        <Button
          radius="xl"
          size="lg"
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 105 }}
          fullWidth={true}
          onClick={openConfirmModal}
        >
          Apply to this task
        </Button>
      </Navbar.Section>
    </>
  );
};
