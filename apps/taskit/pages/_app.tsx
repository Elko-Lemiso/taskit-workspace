import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "./styles.css";
import { Ui } from "@taskit-workspace/ui";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
// import { wsClient } from "./apollo";
import { ApolloProvider } from "@apollo/client";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { WebSocketLink } from "@apollo/client/link/ws";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import ws from "ws";

function CustomApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  const [client, setClient] = useState(null);
  useEffect(() => {
    if (window) {
      const httpLink = new HttpLink({
        uri: "http://localhost:4000/graphql",
      });

      const wslink = new GraphQLWsLink(
        createClient({
          url: "ws://localhost:4000/subscriptions",
        })
      );
      const splitLink = split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wslink,
        httpLink
      );
      const wsClient = new ApolloClient({
        link: splitLink,
        cache: new InMemoryCache(),
      });
      setClient(wsClient);
    }
  }, [process.browser]);

  return (
    client && (
      <ApolloProvider client={client}>
        <>
          <Head>
            <title>Task it</title>
          </Head>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{ colorScheme }}
            >
              <main className="app">
                <Ui Component={Component} pageProps={pageProps} />
              </main>
            </MantineProvider>
          </ColorSchemeProvider>
        </>
      </ApolloProvider>
    )
  );
}

export default CustomApp;
