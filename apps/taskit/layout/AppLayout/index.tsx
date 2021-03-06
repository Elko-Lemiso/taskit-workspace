import { AppShellComponent } from "../../components/AppShell";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

import { ModalsProvider } from "@mantine/modals";
export default function AppLayout({ children, Component, pageProps, router }) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <ModalsProvider>
          <main className="app">
            <AppShellComponent
              Component={Component}
              router={router}
              pageProps={pageProps}
            />
          </main>
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
