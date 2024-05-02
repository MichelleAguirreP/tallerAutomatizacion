const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // Configuración del navegador
  browser: "chrome",

  // Configuración de permisos y seguridad
  chromeWebSecurity: false, // Desactiva la seguridad web de Chrome (puede ser necesario para ciertos escenarios de prueba)
  env: {
    // Configura variables de entorno para ajustar permisos
    CYPRESS_ALLOW_INSECURE_CONNECTIONS: true, // Permite conexiones inseguras
    CYPRESS_INTERNAL_FORCE_PORT: "63986", // Forzar el puerto interno para evitar problemas de conexión
  },
});
