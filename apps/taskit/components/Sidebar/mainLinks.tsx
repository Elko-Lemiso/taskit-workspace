import { ThemeIcon, UnstyledButton, Badge, Stack, Text } from "@mantine/core";
import { RiChat3Fill } from "react-icons/ri";
import { FaHandSpock, FaMapMarker, FaClock } from "react-icons/fa";
import { useRouter } from "next/router";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  category: string;
  jobTime: string;
  location: string;
  offer: number;
  status: string;
  comments: number;
  applicants: number;
  jid: string;
}

export const MainLink = ({
  icon,
  color,
  label,
  category,
  jobTime,
  location,
  offer,
  status,
  comments,
  applicants,
  jid,
}: MainLinkProps) => {
  const router = useRouter();
  return (
    <UnstyledButton
      onClick={() => router.push(`/jobs/${jid}`)}
      sx={(theme) => ({
        display: "flex",
        width: "100%",
        alignItems: "center",
        padding: theme.spacing.xs,
        marginTop: 8,
        position: "relative",
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <div>
        <ThemeIcon
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
          radius="xl"
          size="xl"
          color={color}
        >
          {icon}
        </ThemeIcon>
      </div>
      <div
        style={{
          height: 86,
          display: "flex",
          flexDirection: "column",
          marginLeft: 19,
          justifyContent: "space-evenly",
        }}
      >
        <Text color="dimmed" transform="uppercase" size="xs">
          {category}
        </Text>
        <Text
          component="span"
          align="center"
          variant="gradient"
          gradient={{ from: "green", to: "indigo", deg: 45 }}
          size="md"
          weight={700}
          style={{ fontFamily: "Greycliff CF, sans-serif" }}
        >
          {label}
        </Text>
        <Text size="xs">
          <FaMapMarker size={10} /> {location}
        </Text>
        <Text weight={700} size="xs">
          <FaClock size={10} /> {jobTime}
        </Text>
      </div>

      <div
        style={{
          height: 86,
          display: "flex",
          flexDirection: "column",
          marginLeft: 29,
          justifyContent: "space-evenly",
          textAlign: "right",
          position: "absolute",
          right: "21px",
        }}
      >
        <Text weight={700} size="xl">
          ${offer}
        </Text>
        <Badge color="teal" size="xs" variant="outline">
          {status}
        </Badge>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Text size="xs">
            <RiChat3Fill size={10} /> {comments}
          </Text>
          <Text size="xs">
            <FaHandSpock size={10} /> {applicants}
          </Text>
        </div>
      </div>
    </UnstyledButton>
  );
};
