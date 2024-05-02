const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // Configuración del navegador
  browser: "edge",

  // Configuración de permisos y seguridad
  chromeWebSecurity: false, // Desactiva la seguridad web de Chrome (puede ser necesario para ciertos escenarios de prueba)
  env: {
    // Configura variables de entorno para ajustar permisos
    CYPRESS_ALLOW_INSECURE_CONNECTIONS: true, // Permite conexiones inseguras
    CYPRESS_CHROMIUM_EDGE_REMOTE_DEBUGGING_PORT: "63114", // Puerto CDP para Edge
  },
});
