# Vercel Deployment Setup

This guide explains how to deploy your Angular CRUD app to Vercel with Firebase configuration.

## 🚀 Quick Setup

### 1. Push your code to GitHub

Make sure all changes are committed and pushed:

```bash
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

### 2. Import Project to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Vercel will auto-detect it as an Angular project

### 3. Configure Environment Variables

Before deploying, add these environment variables in Vercel:

**In Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**

Add the following variables:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `FIREBASE_API_KEY` | Your Firebase API Key | From Firebase Console |
| `FIREBASE_AUTH_DOMAIN` | `your-project.firebaseapp.com` | Firebase Auth Domain |
| `FIREBASE_PROJECT_ID` | `your-project-id` | Firebase Project ID |
| `FIREBASE_DATABASE_URL` | `https://your-project-default-rtdb.firebaseio.com` | Realtime Database URL |
| `FIREBASE_STORAGE_BUCKET` | `your-project.firebasestorage.app` | Firebase Storage Bucket |
| `FIREBASE_MESSAGING_SENDER_ID` | `1097055780760` | Firebase Messaging Sender ID |
| `FIREBASE_APP_ID` | `1:1097055780760:web:xxxxx` | Firebase App ID |

#### How to get Firebase credentials:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click the ⚙️ icon → **Project settings**
4. Scroll down to **Your apps** section
5. Click on your web app or create one
6. Copy the config values

Example Firebase config:
```javascript
{
  apiKey: "AIzaSyBpS40iQ-UVgPYsWOW6BqwShOQJYEoan_8",
  authDomain: "mis-clientes2-6d900.firebaseapp.com",
  databaseURL: "https://mis-clientes2-6d900-default-rtdb.firebaseio.com",
  projectId: "mis-clientes2-6d900",
  storageBucket: "mis-clientes2-6d900.firebasestorage.app",
  messagingSenderId: "1097055780760",
  appId: "1:1097055780760:web:022e23ed9ff15ead7db5ed"
}
```

### 4. Deploy

Once environment variables are set:

1. Click **"Deploy"** in Vercel
2. Wait for the build to complete
3. Your app will be live at `https://your-app.vercel.app`

## 🔧 How It Works

The deployment uses a custom build script (`scripts/set-env.js`) that:

1. Reads environment variables from Vercel
2. Generates `environment.ts` and `environment.development.ts` files
3. Runs the Angular build with proper Firebase configuration

This keeps your Firebase credentials secure and out of the repository.

## 🔐 Security Notes

- ✅ Environment files (`environment.ts`, `environment.development.ts`) are in `.gitignore`
- ✅ Credentials are stored as Vercel environment variables
- ✅ The `set-env.js` script generates files during build time
- ✅ Never commit Firebase credentials to the repository

## 🐛 Troubleshooting

### Build fails with "environment.ts does not exist"

**Solution**: Make sure you've added all 4 environment variables in Vercel settings.

### Firebase errors after deployment

**Solution**:
1. Verify environment variables are correct
2. Check Firebase Console that your domain is authorized
3. Add your Vercel domain to Firebase **Authorized domains**:
   - Firebase Console → Authentication → Settings → Authorized domains
   - Add: `your-app.vercel.app`

### Google Sign-In not working on Vercel

**Solution**: Add your Vercel domain to Google OAuth:
1. Firebase Console → Authentication → Sign-in method → Google
2. Add your Vercel domain to authorized domains

## 📱 Testing the Deployment

After deployment, test these features:

- ✅ Home page loads
- ✅ User registration works
- ✅ Email/password login works
- ✅ Google Sign-In works
- ✅ Password recovery works
- ✅ User profile page loads
- ✅ Employee CRUD operations work

## 🔄 Redeploying

Every git push to `main` will automatically trigger a new deployment.

```bash
git add .
git commit -m "Your changes"
git push origin main
```

Vercel will automatically build and deploy the new version.

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Angular on Vercel](https://vercel.com/docs/frameworks/angular)
- [Environment Variables on Vercel](https://vercel.com/docs/projects/environment-variables)
