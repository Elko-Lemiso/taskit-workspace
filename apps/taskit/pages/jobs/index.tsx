import { useEffect } from "react";
import { useSubscription, gql } from "@apollo/client";

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

}

export default Index;


