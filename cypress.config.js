const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseUrl: "http://localhost:3000",
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  testFiles: ["**/*.spec.js", "**/*.spec.ts", "**/*.spec.jsx", "**/*.spec.tsx"],
  ignoreTestFiles: ["**/*.skip.{js,jsx,ts,tsx}"],
  viewportWidth: 1920,
  viewportHeight: 1080,
  browser: "edge",
  env: {
    NODE_ENV: "development",
  },
  chromeArgs: ["--disable-web-security", "--user-data-dir"],
  edgeExecutable: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  // Especifica la carpeta de integración para las pruebas e2e
  integrationFolder: "cypress/integration",
  testingType: "e2e",
});

