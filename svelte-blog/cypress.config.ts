import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'ih6uv3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173/'
  },
});
