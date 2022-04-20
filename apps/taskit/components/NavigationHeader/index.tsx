import {
  Header,
  ActionIcon,
  useMantineColorScheme,
  Button,
  Grid,
  Title,
  Menu,
} from "@mantine/core";

import { Sun, MoonStars } from "tabler-icons-react";
import { WiAlien } from "react-icons/wi";
import Link from "next/link";
import { useRouter } from "next/router";
import { Avatar } from "@mantine/core";
import { Settings, MessageCircle } from "tabler-icons-react";
import { useUser } from "@auth0/nextjs-auth0";
import { ExternalLink } from "tabler-icons-react";
/* eslint-disable-next-line */
export interface NavigationProps {}

export function NavigationHeader(props: NavigationProps) {
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const { user, isLoading } = useUser();

  return (
    <Header height={60} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Grid
          align="center"
          columns={3}
          style={{ width: "100%", justifyContent: "space-between" }}
        >
          <Grid.Col span={2}>
            <Link href="/">
              <span
                style={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <ActionIcon variant="outline" radius="xl" size="lg">
                  <WiAlien size={25} />
                </ActionIcon>
                <Title
                  style={{ marginLeft: 10, fontFamily: "Stretch Pro" }}
                  order={1}
                >
                  TASK IT
                </Title>
              </span>
            </Link>
          </Grid.Col>

          {user ? (
            <Grid.Col
              span={1}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                onClick={() => router.push("/jobs")}
                style={{ marginRight: 10 }}
                variant="outline"
                radius="xl"
                size="md"
                color="gray"
              >
                All Tasks
              </Button>

              <Menu
                control={<Avatar src={user.picture} radius="xl" />}
                placement="end"
                gutter={7}
                transition="scale-y"
                delay={500}
              >
                <Menu.Label>Application</Menu.Label>
                <Menu.Item icon={<Settings size={14} />}>Settings</Menu.Item>
                <Menu.Item icon={<MessageCircle size={14} />}>
                  Messages
                </Menu.Item>
                <Menu.Item
                  icon={<ExternalLink size={14} />}
                  component="a"
                  href="/api/auth/logout"
                >
                  Log Out
                </Menu.Item>
                <Menu.Item>
                  <ActionIcon
                    variant="outline"
                    color={dark ? "yellow" : "blue"}
                    onClick={() => toggleColorScheme()}
                    title="Toggle color scheme"
                  >
                    {dark ? <Sun size={18} /> : <MoonStars size={18} />}
                  </ActionIcon>
                </Menu.Item>
              </Menu>
            </Grid.Col>
          ) : (
            <Grid.Col
              style={{ display: "flex", justifyContent: "flex-end" }}
              span={1}
            >
              <Button
                onClick={() => router.push("/api/auth/login")}
                style={{ marginLeft: 10 }}
                variant="gradient"
                radius="xl"
                gradient={{ from: "#855630", to: "red" }}
              >
                Login
              </Button>
              <Button
                onClick={() => router.push("/api/auth/login")}
                style={{ marginLeft: 10 }}
                variant="gradient"
                radius="xl"
                gradient={{ from: "#457265", to: "#3b995c", deg: 105 }}
              >
                Join us
              </Button>
            </Grid.Col>
          )}
        </Grid>
      </div>
    </Header>
  );
}

export default NavigationHeader;
