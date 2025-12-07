/**
 * Archivo de ejemplo para configuración de entorno
 *
 * INSTRUCCIONES:
 * 1. Copia este archivo y renómbralo a 'environment.development.ts'
 * 2. Reemplaza los valores de ejemplo con tus credenciales de Firebase
 * 3. NUNCA subas tus credenciales reales a repositorios públicos
 *
 * Para obtener tus credenciales:
 * 1. Ve a https://console.firebase.google.com/
 * 2. Selecciona tu proyecto
 * 3. Ve a Project Settings > General
 * 4. Busca "Your apps" y copia la configuración
 */

export const environment = {
  production: false,
  firebase: {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com"
  }
};
