import { StoryFn as StoryType } from "@storybook/react";
import "normalize.css";
import React from "react";
import { decorator as mockRouterDecorator } from "../__mocks__/next/router";
import { NavigationProvider } from "../features/layout";
import "../styles/global.scss";

export const decorators = [
  (Story: StoryType) => (
    <NavigationProvider>
      <Story />
    </NavigationProvider>
  ),
  mockRouterDecorator,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
