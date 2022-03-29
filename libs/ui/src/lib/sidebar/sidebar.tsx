import styles from "./sidebar.module.scss";
import { Navbar, ScrollArea, Title, Input } from "@mantine/core";
import { Alien, Search } from "tabler-icons-react";
import { MainLinks } from "./mainLinks";
import Link from "next/link";
/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  return (
    <Navbar width={{ base: 500 }} height={500} p="xs">
      <Navbar.Section mt="xs">
        <Title order={5}>
          Open jobs
          <Alien size={18} />
        </Title>
        <Input icon={<Search />} placeholder="Find a job" />
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <MainLinks />
      </Navbar.Section>

      <Navbar.Section>Icon filter</Navbar.Section>
    </Navbar>
  );
}

export default Sidebar;
