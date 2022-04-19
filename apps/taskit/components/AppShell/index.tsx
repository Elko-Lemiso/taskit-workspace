
import { AppShell, useMantineColorScheme } from "@mantine/core";
import NavigationHeader from "../NavigationHeader";
import { AppProps } from "next/app";
import Sidebar from "../Sidebar";
import { dummyTasks } from "../../store/dummy/tasks";
import { dummyTasks2 } from "../../store/dummy/tasks2";
import { useEffect, useState } from "react";
import { useUser } from '@auth0/nextjs-auth0';
/* eslint-disable-next-line */
export interface AppShellProps {}

export function AppShellComponent({ Component, pageProps, router }: AppProps) {  

  const [data, setData] = useState();
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (router.route === "/jobs") setData(dummyTasks2);
    if (router.route === "/jobs/[jid]") setData(dummyTasks2);
  }, [router.route]);

  useEffect(() => {
    if (user) router.push('/jobs')
  }, [user]);
  
  return (
    <AppShell
      padding="md"
      navbar={
        router.route !== "/"  && <Sidebar data={data} />
    }
      header={<NavigationHeader />}
    >
      <Component {...pageProps} />
    </AppShell>
  );
}

export default AppShellComponent;