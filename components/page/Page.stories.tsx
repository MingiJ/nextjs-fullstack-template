import { ComponentMeta, ComponentStory } from "@storybook/react";
import Page, { IPage } from "./Page";
import { mockPageProps } from "./Page.mocks";

export default {
  title: "page/Page",
  component: Page,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Page>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPageProps.base,
} as IPage;
