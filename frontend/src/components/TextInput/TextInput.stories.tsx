import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextInput from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text...",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Disabled input...",
  disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  placeholder: "Invalid input...",
  required: true,
  type: "email",
};
