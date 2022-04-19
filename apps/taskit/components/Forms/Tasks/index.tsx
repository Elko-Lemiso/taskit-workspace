import React from "react";
import { useState } from "react";
import {
  Input,
  MultiSelect,
  Stack,
  Textarea,
  InputWrapper,
  TextInput,
  Button,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";

export const TaskForm = () => {
  const [data, setData] = useState([
    "Cleaning",
    "Manual work",
    "Lifting",
    "Delivering",
  ]);

  return (
    <Stack>
      <InputWrapper label="Name">
        <TextInput placeholder="eg. Hide body" />
      </InputWrapper>
      <MultiSelect
        label="Category"
        data={data}
        placeholder="Select items"
        searchable
        creatable
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={(query) => setData((current) => [...current, query])}
      />
      <Textarea
        label="Describe the task"
        placeholder="Clean out my dildo collection"
        autosize
        // error="Do you kiss your mother with that mouth ?"
        minRows={2}
        maxRows={4}
      />
      <MultiSelect
        label="Tag the task with relevant labels"
        data={data}
        placeholder="Select items"
        searchable
        creatable
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={(query) => setData((current) => [...current, query])}
      />
      <DatePicker
        style={{ marginTop: 20 }}
        label="Due date"
        placeholder="When is it due?"
        clearable={false}
      />
      <TextInput label="My address" placeholder="15329 Huston 21st" />
      <TextInput
        label="Offer"
        placeholder="How much moneeeey do you wanna give?"
      />
      <Button
      style={{
        marginTop: 19,
      }}
        radius="xl"
        size="lg"
        variant="gradient"
        gradient={{ from: "teal", to: "lime", deg: 105 }}
        fullWidth={true}
      >
        Post
      </Button>
    </Stack>
  );
};
