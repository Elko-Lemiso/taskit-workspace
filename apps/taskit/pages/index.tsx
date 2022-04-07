import { useEffect } from "react";
import styles from "./index.module.scss";
import { Transition, AspectRatio } from "@mantine/core";
import { useSubscription, gql } from "@apollo/client";
import { Subscription } from "@taskit-workspace/subscription";

export function Index() {
  const SUB = gql`
    subscription {
      numberIncremented
    }
  `;

  const { loading, data } = useSubscription(SUB);
  console.log(data);

  return (
    <div>
      <p>{loading ? "Loading..." : data?.numberIncremented}</p>
    </div>
  );

  return <Subscription />;
}

export default Index;
