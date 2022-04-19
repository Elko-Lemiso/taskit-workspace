import { useRouter } from "next/router";
import { Transition } from "@mantine/core";

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};


export function Job(opened) {
  const router = useRouter();
  const { jid } = router.query;
  return (
    <Transition
      mounted={opened}
      transition={scaleY}
      duration={400}
      timingFunction="ease"
    >
      {(styles) => <div style={styles}>{jid}</div>}
    </Transition>
  );
}

export default Job;
