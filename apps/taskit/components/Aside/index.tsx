import React from "react";
import {
  ThemeIcon,
  UnstyledButton,
  Badge,
  Stack,
  Text,
  ActionIcon,
} from "@mantine/core";
import Link from "next/link";
import { WiAlien } from "react-icons/wi";
import { GiBroom } from "react-icons/gi";
import {MdOutlinePedalBike} from 'react-icons/md'
import {FaCannabis,FaHandSpock,FaPlus} from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion";
export const AsideComponent = () => {
  return (
    <Stack align="center">
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.6, type: "spring", velocity: 2 }}
        >
          <ActionIcon color="cyan" variant="outline" radius="xl" size="lg">
            <WiAlien size={25} />
          </ActionIcon>
        </motion.div>
      </Link>
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.6, type: "spring", velocity: 2 }}
        >
          <ActionIcon color="pink" variant="outline" radius="xl" size="lg">
            <GiBroom size={20} />
          </ActionIcon>
        </motion.div>
      </Link>
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.6, type: "spring", velocity: 2 }}
        >
          <ActionIcon color="green" variant="outline" radius="xl" size="lg">
            <MdOutlinePedalBike size={20} />
          </ActionIcon>
        </motion.div>
      </Link>
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.6, type: "spring", velocity: 2 }}
        >
          <ActionIcon color="orange" variant="outline" radius="xl" size="lg">
            <FaHandSpock size={20} />
          </ActionIcon>
        </motion.div>
      </Link>
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.6, type: "spring", velocity: 2 }}
        >
          <ActionIcon color="teal" variant="outline" radius="xl" size="lg">
            <FaCannabis size={15} />
          </ActionIcon>
        </motion.div>
      </Link>
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.6, type: "spring", velocity: 2 }}
        >
          <ActionIcon  radius="xl" size="lg">
            <FaPlus size={15} />
          </ActionIcon>
        </motion.div>
      </Link>
    </Stack>
  );
};
