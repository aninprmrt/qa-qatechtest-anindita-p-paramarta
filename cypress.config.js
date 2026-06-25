const { defineConfig } = require("cypress");
const neatCSV = require("neat-csv").default;

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        parseCsv(csv) {
          return neatCSV(csv);
        },
      });

      config.baseUrl = "https://demoqa.com";
      config.viewportWidth = 1280;
      config.viewportHeight = 720;
      config.video = false;
      return config;
    },
  },
});
