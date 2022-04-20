import { AppShell, useMantineColorScheme } from "@mantine/core";
import NavigationHeader from "../NavigationHeader";
import { AppProps } from "next/app";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
/* eslint-disable-next-line */
export interface AppShellProps {}

export function AppShellComponent({ Component, pageProps, router }: AppProps) {
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (user && router.route === "/") router.push("/jobs");
  }, [user]);

  return (
    <AppShell
      padding="md"
      navbar={router.route !== "/" && <Sidebar />}
      header={<NavigationHeader />}
    >
      <Component {...pageProps} />
    </AppShell>
  );
}

export default AppShellComponent;
