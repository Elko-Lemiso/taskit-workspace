import styles from "./navigation.module.scss";
import {
  Header,
  ActionIcon,
  useMantineColorScheme,
  Button,
  Grid,
  Text,
  ThemeIcon,
  Menu,
  Divider,
} from "@mantine/core";

import { Alien, Sun, MoonStars } from "tabler-icons-react";
import { WiAlien } from "react-icons/wi";
import Link from "next/link";
import { useRouter } from "next/router";
import { Avatar } from "@mantine/core";
import {
  Settings,
  Search,
  Photo,
  MessageCircle,
  Trash,
  ArrowsLeftRight,
} from "tabler-icons-react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ExternalLink } from "tabler-icons-react";
/* eslint-disable-next-line */
export interface NavigationProps {}

export function NavigationHeader(props: NavigationProps) {
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const { user, isLoading } = useUser();
 
  console.log(user);
  
  return (
    <Header height={60} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Grid align="center" columns={7} style={{ width: "100%" }}>
          <Grid.Col span={2}>
            <Link href="/">
              <ActionIcon
                variant="outline"
                radius="xl"
                color={"green"}
                size="lg"
              >
                <WiAlien size={25} />
              </ActionIcon>
            </Link>
          </Grid.Col>

          {user ? (
            <Grid.Col
              span={5}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
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
              span={5}
            >
              <Button
                onClick={() => router.push("/api/auth/login")}
                style={{ marginLeft: 10 }}
                variant="gradient"
                radius="xl"
                gradient={{ from: "orange", to: "red" }}
              >
                Login
              </Button>
              <Button
                onClick={() => router.push("/api/auth/login")}
                style={{ marginLeft: 10 }}
                variant="gradient"
                radius="xl"
                gradient={{ from: "teal", to: "lime", deg: 105 }}
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
