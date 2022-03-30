import { useRouter } from "next/router";
export function Job() {
  const router = useRouter();
  const { jid } = router.query;
  return <>{jid}</>;
}

export default Job;
