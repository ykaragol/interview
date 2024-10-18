import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import RepositoryListing from "./RepositoryListing";

export default {
  title: "Pages/RepositoryListing",
  component: RepositoryListing,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof RepositoryListing>;

const Template: ComponentStory<typeof RepositoryListing> = () => (
  <RepositoryListing />
);

export const Default = Template.bind({});
Default.args = {};
