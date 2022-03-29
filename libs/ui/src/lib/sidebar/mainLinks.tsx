import {
  GitPullRequest,
  AlertCircle,
  Messages,
  Database,
  Shoe,
} from "tabler-icons-react"
import {GiBroom} from "react-icons/gi";
import { ThemeIcon, UnstyledButton, Badge, Stack, Text } from "@mantine/core";

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
}

function MainLink({
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
}: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "flex",
        width: "100%",
        alignItems: "center",
        padding: theme.spacing.xs,
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
        <ThemeIcon variant="outline" radius="xl" size="xl" color={color} >
          {icon}
        </ThemeIcon>
      </div>
      <div style={{marginLeft: 16}}>
        <Text transform="uppercase" size="xs">
          {category}
        </Text>
        <Text
          component="span"
          align="center"
          variant="gradient"
          gradient={{ from: "green", to: "cyan", deg: 45 }}
          size="xl"
          weight={700}
          style={{ fontFamily: "Greycliff CF, sans-serif" }}
        >
          {label}
        </Text>
        <Text size="xs">{location}</Text>
        <Text weight={700} size="xs">
          {jobTime}
        </Text>
      </div>
      <div style={{marginLeft: 16}}>
        <Text weight={700} size="xl">
          ${offer}
        </Text>
        <Badge variant="outline">{status}</Badge>

        <Text size="xs">{comments}</Text>
        <Text size="sm">{applicants}</Text>
      </div>
    </UnstyledButton>
  );
}

const data = [
  {
    icon: <GitPullRequest size={16} />,
    color: "blue",
    label: "Cleaning shoes",
    category: "Cleaning",
    jobTime: "Thur 12 March",
    location: "Amsterdam",
    offer: 15,
    status: "open",
    comments: 3,
    applicants: 5,
  },
  {
    icon: <AlertCircle size={16} />,
    color: "teal",
    label: "Cleaning shoes",
    category: "Cleaning",
    jobTime: "Thur 12 March",
    location: "Amsterdam",
    offer: 15,
    status: "open",
    comments: 3,
    applicants: 5,
  },
  {
    icon: <Shoe size={16} />,
    color: "violet",
    label: "Cleaning shoes",
    category: "Cleaning",
    jobTime: "Thur 12 March",
    location: "Amsterdam",
    offer: 15,
    status: "open",
    comments: 3,
    applicants: 5,
  },
  {
    icon: <GiBroom size={16} />,
    color: "grape",
    label: "Cleaning shoes ",
    category: "Cleaning",
    jobTime: "Thur 12 March",
    location: "Amsterdam",
    offer: 15,
    status: "open",
    comments: 3,
    applicants: 5,
  },
  {
    icon: <Shoe size={16} />,
    color: "grape",
    label: "Cleaning shoes ",
    category: "Cleaning",
    jobTime: "Thur 12 March",
    location: "Amsterdam",
    offer: 15,
    status: "open",
    comments: 3,
    applicants: 5,
  },
  {
    icon: <Shoe size={16} />,
    color: "grape",
    label: "Cleaning shoes ",
    category: "Cleaning",
    jobTime: "Thur 12 March",
    location: "Amsterdam",
    offer: 15,
    status: "open",
    comments: 3,
    applicants: 5,
  },
  {
    icon: <Shoe size={16} />,
    color: "grape",
    label: "Cleaning shoes ",
    category: "Cleaning",
    jobTime: "Thur 12 March",
    location: "Amsterdam",
    offer: 15,
    status: "open",
    comments: 3,
    applicants: 5,
  },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
