
import { AppShell, useMantineColorScheme } from "@mantine/core";
import NavigationHeader from "../NavigationHeader";
import { AppProps } from "next/app";
import Sidebar from "../Sidebar";
/* eslint-disable-next-line */
export interface AppShellProps {}

export function AppShellComponent({ Component, pageProps, router }: AppProps) {
  
  return (
    <AppShell
      padding="md"
      navbar={<Sidebar  />}
      header={<NavigationHeader />}
    >
      <Component {...pageProps} />
    </AppShell>
  );
}

export default AppShellComponent;