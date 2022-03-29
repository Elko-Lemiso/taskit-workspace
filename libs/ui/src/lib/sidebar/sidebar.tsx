import { Navbar, ScrollArea, Input } from "@mantine/core";
import { Search } from "tabler-icons-react";
import { MainLinks } from "./mainLinks";
/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  return (
    <Navbar width={{ base: 360 }} height={500} p="xs">
      <Navbar.Section mt="xs">
        <Input icon={<Search />} placeholder="Find a job" />
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <MainLinks />
      </Navbar.Section>

      <Navbar.Section>
        <div>
          a bunch of bs
        </div>
      </Navbar.Section>
    </Navbar>
  );
}

export default Sidebar;
