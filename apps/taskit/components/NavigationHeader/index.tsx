import styles from "./navigation.module.scss";
import {
  Header,
  ActionIcon,
  useMantineColorScheme,
  Button,
  Grid,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { Alien, Sun, MoonStars } from "tabler-icons-react";
import { WiAlien } from "react-icons/wi";
import Link from "next/link";
import { RiChat3Fill } from "react-icons/ri";
/* eslint-disable-next-line */
export interface NavigationProps {}

export function NavigationHeader(props: NavigationProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

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

          <Grid.Col
            span={5}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <ActionIcon color={"teal"} title="Toggle color scheme">
              <RiChat3Fill />
            </ActionIcon>

            <ActionIcon
              variant="outline"
              color={dark ? "yellow" : "blue"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <Sun size={18} /> : <MoonStars size={18} />}
            </ActionIcon>
          </Grid.Col>
        </Grid>
      </div>
    </Header>
  );
}

export default NavigationHeader;
