import styles from "./ui.module.scss";

import { AppShell, useMantineColorScheme } from "@mantine/core";
import NavigationHeader from "./navigation/navigation";
import { AppProps } from "next/app";
import Sidebar from "./sidebar/sidebar";
/* eslint-disable-next-line */
export interface UiProps {}

export function Ui({ Component, pageProps }: AppProps) {
  return (
    <AppShell padding="md" navbar={<Sidebar />} header={<NavigationHeader />}>
      <Component {...pageProps} />
    </AppShell>
  );
}

export default Ui;
