import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";

const meta = {
  title: "Shared/Loading",
  component: Loading,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    message: { control: "text", defaultValue: undefined },
    children: { control: "none" },
    scheme: {
      type: "string",
      defaultValue: "light",
      options: ["light", "dark"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    withBorder: false,
    full: false,
    backgroundBlur: false,
    scheme: "light",
    margin: '5px 0'
  },
};

export const FullScreen: Story = {
  args: {
    full: true,
    message: "Loading...",
    scheme: "light",
    margin: '5px 0'
  },
}
;
export const DarkMode: Story = {
  args: {
    full: true,
    message: "Loading...",
    scheme: "dark",
    margin: '5px 0'
  },
};

export const WithMessage: Story = {
  args: {
    full: false,
    message: "Loading...",
    scheme: "light",
    margin: '5px 0'
  },
};

export const WithBorder: Story = {
  args: {
    withBorder: true,
    full: false,
    message: "Loading...",
    scheme: "light",
    margin: '5px 0'
  },
};
