import { useEffect } from "react";
import styles from "./index.module.scss";
import { Transition, AspectRatio } from "@mantine/core";
import {
  ApolloClient,
  InMemoryCache,
  useSubscription,
  gql,
  useQuery,
  ApolloProvider,
  Query,
} from "@apollo/client";
// import { wsClient } from "./apollo";
import { Subscription } from "@taskit-workspace/subscription";

export function Index() {
  // NEW_PET uses gql from @apollo/client to create mutations
  interface Message {
    content: string;
  }
  
  interface News {
    numberIncremented: number;
  }

  const SUB = gql`
    subscription {
      numberIncremented
    }
  `;
  const CURRENTNUMBER = gql`
    query {
      currentNumber
    }
  `;

  // const { data, loading } = useSubscription(SUB, { client: wsClient });

  // const { subscribeToMore, ...result } = useQuery(CURRENTNUMBER);
  // const { data, loading, error } = useSubscription(SUB, {
  //   shouldResubscribe: true,
  //   onSubscriptionData: (data) => console.log(data),
  //   client: 
  // });
 
  // console.log(data, loading, error);
  const { loading, data } = useSubscription(SUB);
  console.log(data);
  
  return (
    <div>
      <h5>Latest News</h5>
      <p>
        {loading ? 'Loading...' : data?.numberIncremented}
      </p>
    </div>
  );

  return <Subscription />;
}

export default Index;
