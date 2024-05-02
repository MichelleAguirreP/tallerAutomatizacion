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
    CYPRESS_INTERNAL_FORCE_PORT: "55885", // Forzar el puerto interno para evitar problemas de conexión
  },

  // Configuración del puerto CDP
  chromeArgs: ["--remote-debugging-port=9222"], // Configuración del puerto CDP, puedes cambiar el número de puerto según sea necesario
});
