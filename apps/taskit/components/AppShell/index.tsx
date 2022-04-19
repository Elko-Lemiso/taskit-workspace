
import { AppShell, useMantineColorScheme } from "@mantine/core";
import NavigationHeader from "../NavigationHeader";
import { AppProps } from "next/app";
import Sidebar from "../Sidebar";
import { dummyTasks } from "../../store/dummy/tasks";
import { dummyTasks2 } from "../../store/dummy/tasks2";
import { useEffect, useState } from "react";
/* eslint-disable-next-line */
export interface AppShellProps {}

export function AppShellComponent({ Component, pageProps, router }: AppProps) {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    if (router.route === "/") setData(dummyTasks);
    if (router.route === "/jobs/[jid]") setData(dummyTasks2);
  }, [router.route]);

  return (
    <AppShell
      padding="md"
      navbar={<Sidebar data={data} />}
      header={<NavigationHeader />}
    >
      <Component {...pageProps} />
    </AppShell>
  );
}

export default AppShellComponent;