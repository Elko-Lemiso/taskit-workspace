import styles from "./navigation.module.scss";
import {
  Header,
  ActionIcon,
  useMantineColorScheme,
  Button,
  Container,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { Alien, Sun, MoonStars } from "tabler-icons-react";
import { WiAlien } from "react-icons/wi";
import Link from "next/link";
/* eslint-disable-next-line */
export interface NavigationProps {}

export function NavigationHeader(props: NavigationProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Header height={70} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Container>
          <ThemeIcon variant="outline" radius="xl" size="xl" color={'green'}>
            <WiAlien size={21} />
          </ThemeIcon>
        </Container>

        <ActionIcon
          variant="outline"
          color={dark ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <Sun size={18} /> : <MoonStars size={18} />}
        </ActionIcon>
      </div>
    </Header>
  );
}

export default NavigationHeader;
