import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    storySort: {
      order: ["Example", ["Introduction", "Getting started"], "Components"],
    },
  },
};

export default preview;