const fs = require('fs');
const path = require('path');

// Get environment variables from Vercel or use defaults for local development
const firebaseApiKey = process.env.FIREBASE_API_KEY || 'your-api-key';
const firebaseAuthDomain = process.env.FIREBASE_AUTH_DOMAIN || 'your-project.firebaseapp.com';
const firebaseProjectId = process.env.FIREBASE_PROJECT_ID || 'your-project';
const firebaseDatabaseURL = process.env.FIREBASE_DATABASE_URL || 'https://your-project-default-rtdb.firebaseio.com';
const firebaseStorageBucket = process.env.FIREBASE_STORAGE_BUCKET || 'your-project.firebasestorage.app';
const firebaseMessagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID || '000000000000';
const firebaseAppId = process.env.FIREBASE_APP_ID || '1:000000000000:web:xxxxxxxxxxxxxxxx';

// Production environment content
const envConfigFile = `export const environment = {
  production: true,
  firebase: {
    apiKey: "${firebaseApiKey}",
    authDomain: "${firebaseAuthDomain}",
    databaseURL: "${firebaseDatabaseURL}",
    projectId: "${firebaseProjectId}",
    storageBucket: "${firebaseStorageBucket}",
    messagingSenderId: "${firebaseMessagingSenderId}",
    appId: "${firebaseAppId}"
  }
};
`;

// Development environment content
const envDevConfigFile = `export const environment = {
  production: false,
  firebase: {
    apiKey: "${firebaseApiKey}",
    authDomain: "${firebaseAuthDomain}",
    databaseURL: "${firebaseDatabaseURL}",
    projectId: "${firebaseProjectId}",
    storageBucket: "${firebaseStorageBucket}",
    messagingSenderId: "${firebaseMessagingSenderId}",
    appId: "${firebaseAppId}"
  }
};
`;

const envDirectory = path.join(__dirname, '..', 'src', 'environments');

// Create environments directory if it doesn't exist
if (!fs.existsSync(envDirectory)) {
  fs.mkdirSync(envDirectory, { recursive: true });
}

// Write environment.ts
const envPath = path.join(envDirectory, 'environment.ts');
fs.writeFileSync(envPath, envConfigFile, { encoding: 'utf8' });
console.log('✅ Generated environment.ts');

// Write environment.development.ts
const envDevPath = path.join(envDirectory, 'environment.development.ts');
fs.writeFileSync(envDevPath, envDevConfigFile, { encoding: 'utf8' });
console.log('✅ Generated environment.development.ts');

console.log('🔥 Firebase configuration loaded from environment variables');
