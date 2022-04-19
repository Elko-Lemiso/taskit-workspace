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
import { ApolloProvider } from "@apollo/client";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import AppLayout from "../layout/AppLayout";
function CustomApp({ Component, pageProps, router }: AppProps) {
  const [client, setClient] = useState(null);

  // TODO : use Server Side rendering to initialize functional components
  // TODO : use server components
  // TODO : use a suspense fallback to initialize a page. => SKELETON / LOAD

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
          <AppLayout
            Component={Component}
            router={router}
            pageProps={pageProps}
          />
        </>
      </ApolloProvider>
    )
  );
}

export default CustomApp;
