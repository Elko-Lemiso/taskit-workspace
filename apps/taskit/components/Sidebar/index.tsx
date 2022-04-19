import {
  Navbar,
  ScrollArea,
  Input,
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme,
} from "@mantine/core";
import { Search } from "tabler-icons-react";
import { ChevronRight, ChevronLeft } from "tabler-icons-react";
import { MainLink } from "./mainLinks";
import { useRouter } from "next/router";
import { ProfileCard } from "../ProfileCard";
/* eslint-disable-next-line */

export function Sidebar({data}) {
  const theme = useMantineTheme();
  const router = useRouter();


  return (
    <Navbar width={{ base: 360 }} height={"calc(100vh - 60px) "} p="xs">
      <Navbar.Section mt="xs">
        <Input icon={<Search />} placeholder="Find a job" />
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {data.map((link,index) => {
          return <MainLink {...link} key={index} />;
        })}
      </Navbar.Section>

      <Navbar.Section>
        <ProfileCard
          username={"Elko Lemiso"}
          email={"elko@gmail.com"}
          avatar={
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          }
        />
      </Navbar.Section>
    </Navbar>
  );
}

export default Sidebar;
