import type { Meta, StoryObj } from "@storybook/react";
import { NotFound } from "./Page";

const meta = {
  title: "Pages/Errors",
  component: NotFound,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    errorCode: { 
      options: [401, 404, 500],
      defaultValue: 404,
      control: { type: 'radio' },
    }
  },
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnauthorizedError: Story = { 
  args: { errorCode: 401 },
};

export const NotFoundError: Story = { 
  args: { errorCode: 404 },
};

export const InternalServerError: Story = { 
  args: { errorCode: 500 },
};
