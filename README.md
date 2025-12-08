<div align="center">

# 🚀 CRUD App - Employee Management System

### Modern employee management application built with Angular 19

[![Angular](https://img.shields.io/badge/Angular-19.2.17-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-12.6.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

[Features](#-features) •
[Installation](#-installation) •
[Usage](#-usage) •
[Technologies](#-technologies) •
[Architecture](#-architecture)

</div>

---

## 📋 Description

Complete employee management system (CRUD) with **advanced Firebase authentication**, built with the latest versions of Angular and following modern development best practices.

The application features:
- 🔐 **Multiple authentication methods**: Email/Password and Google OAuth
- 👤 **Complete user management**: Registration, login, profile, and password recovery
- 💼 **Full CRUD operations** for employee management
- 🎨 **Modern, responsive UI** with Bootstrap 5
- 🔒 **Enterprise-grade security** with JWT tokens and route guards

## ✨ Features

### 🔐 Authentication & Security
- ✅ **Firebase Auth** authentication
- ✅ **User Registration** with email validation
- ✅ **Email/Password Login** with error handling
- ✅ **Google Sign-In** (OAuth 2.0)
- ✅ **Forgot Password** with email recovery
- ✅ **Email Verification** system
- ✅ **User Profile** page with account details
- ✅ Securely stored JWT tokens
- ✅ Route protection with Guards
- ✅ Input validation on all forms
- ✅ Environment variables for sensitive credentials

### 💼 Employee Management
- ✅ Create new employees
- ✅ List all employees
- ✅ Update employee information
- ✅ Delete employees
- ✅ Required field validation
- ✅ Responsive interface with Bootstrap 5

### 🎨 Modern UI/UX
- ✅ Responsive, mobile-first design
- ✅ Modern template syntax (`@if`, `@for`)
- ✅ **Loading spinners** for async operations
- ✅ **User-friendly error messages** with dismissible alerts
- ✅ **Success notifications** for completed actions
- ✅ Intuitive navigation with Angular Router
- ✅ Visual feedback for CRUD operations
- ✅ Bootstrap 5 cards and modern components

### 🏗️ Architecture
- ✅ Modular and reusable services
- ✅ Professional observable handling (no memory leaks)
- ✅ Structured logging system
- ✅ TypeScript typed interfaces
- ✅ Separation of Concerns (SoC)

## 🛠️ Technologies

### Frontend
| Technology | Version | Usage |
|-----------|---------|-------|
| **Angular** | 19.2.17 | Main framework |
| **TypeScript** | 5.8.3 | Programming language |
| **RxJS** | 7.8.2 | Reactive programming |
| **Bootstrap** | 5.3.8 | CSS framework |

### Backend & Services
| Technology | Version | Usage |
|-----------|---------|-------|
| **Firebase** | 12.6.0 | Realtime database |
| **Firebase Auth** | - | User authentication |

### Development Tools
- Angular CLI 19.2.19
- Karma (Testing)
- Jasmine (Unit Testing)

## 📁 Project Structure

```
CRUD/
├── src/
│   ├── app/
│   │   ├── actualiza-componente/      # Update component
│   │   ├── caracteristica-emp/        # Employee features
│   │   ├── contacto-comp/             # Contact page
│   │   ├── error-personalizado/       # 404 page
│   │   ├── forgot-password/           # 🆕 Password recovery
│   │   │   ├── forgot-password.component.ts
│   │   │   ├── forgot-password.component.html
│   │   │   └── forgot-password.component.css
│   │   ├── home-component/            # Main page (list)
│   │   ├── login/                     # Authentication system
│   │   │   ├── login.component.ts
│   │   │   ├── login.service.ts       # Auth + Google Sign-In
│   │   │   └── login-guardian.ts      # Route Guard
│   │   ├── register/                  # 🆕 User registration
│   │   │   ├── register.component.ts
│   │   │   ├── register.component.html
│   │   │   └── register.component.css
│   │   ├── user-profile/              # 🆕 User profile page
│   │   │   ├── user-profile.component.ts
│   │   │   ├── user-profile.component.html
│   │   │   └── user-profile.component.css
│   │   ├── paren-c/                   # Employee component
│   │   ├── proyectos-comp/            # Projects page
│   │   ├── quienes-somos-comp/        # About us page
│   │   ├── shared/                    # Shared services
│   │   │   ├── loading-spinner/       # 🆕 Reusable spinner
│   │   │   ├── firebase-response.interface.ts
│   │   │   ├── logger.service.ts
│   │   │   └── notification.service.ts
│   │   ├── app.component.ts           # Root component
│   │   ├── app.module.ts              # Main module
│   │   ├── data.services.ts           # Firebase data service
│   │   ├── empleado.model.ts          # Employee model
│   │   └── empleados.service.ts       # Business logic
│   ├── environments/                   # Environment variables
│   │   ├── environment.ts             # Production
│   │   ├── environment.development.ts # Development
│   │   └── environment.example.ts     # Template for setup
│   ├── assets/                        # Static resources
│   ├── main.ts                        # 🔥 Firebase initialization
│   └── index.html
├── angular.json                       # Angular configuration
├── package.json                       # Dependencies
└── README.md
```

## 🚀 Installation

### Prerequisites

Make sure you have installed:

- **Node.js** (version 18.x or higher)
- **npm** (version 9.x or higher)
- **Angular CLI** 19.x

```bash
npm install -g @angular/cli@19
```

### Installation Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd CRUD
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Firebase**

Create a project in [Firebase Console](https://console.firebase.google.com/) and get your credentials.

Edit `src/environments/environment.development.ts`:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com"
  }
};
```

> ⚠️ **IMPORTANT**: Never upload your Firebase credentials to public repositories. Add `src/environments/` to your `.gitignore`.

4. **Enable Firebase Authentication Providers**

In the [Firebase Console](https://console.firebase.google.com/):
   - Go to **Authentication** → **Sign-in method**
   - Enable **Email/Password** provider
   - Enable **Google** provider:
     - Add your support email
     - Add your project's public-facing name
   - Save changes

5. **Start the development server**
```bash
ng serve
```

Navigate to `http://localhost:4200/`

## 📖 Usage

### Run in Development

```bash
npm start
# or
ng serve
```

The application will automatically reload when you make changes to the files.

### Available Routes

| Route | Description | Protected |
|-------|-------------|-----------|
| `/` | Home - Employee list | ❌ No |
| `/login` | User login (Email/Password or Google) | ❌ No |
| `/register` | New user registration | ❌ No |
| `/forgot-password` | Password recovery | ❌ No |
| `/profile` | User profile and account settings | ✅ Yes |
| `/quienes` | About us page | ✅ Yes |
| `/contacto` | Contact page | ✅ Yes |
| `/proyectos` | Projects page | ❌ No |
| `/actualiza/:id` | Update employee | ❌ No |

### Authentication Features

#### 1️⃣ **Register New User**
- Navigate to `/register`
- Enter email and password (min 6 characters)
- Confirm password
- Click "Register"
- Automatically logged in and redirected to home

#### 2️⃣ **Login with Email/Password**
- Navigate to `/login`
- Enter your credentials
- Click "Login"
- Redirected to home page

#### 3️⃣ **Login with Google**
- Navigate to `/login`
- Click "Sign in with Google" button
- Select your Google account
- Automatically redirected back and logged in

#### 4️⃣ **Forgot Password**
- Click "Forgot password?" link on login page
- Enter your email address
- Click "Send Reset Link"
- Check your email for password reset instructions

#### 5️⃣ **User Profile**
- After logging in, click "Profile" in navigation
- View your account details:
  - Email address
  - Email verification status
  - Account creation date
  - Last sign-in time
- Send verification email if not verified
- Logout from your account

### Build for Production

```bash
npm run build
# or
ng build
```

Build artifacts will be stored in the `dist/crud-app` directory.

### Deploy to Vercel

This project is ready for Vercel deployment with automatic environment configuration.

**Quick Deploy:**

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_DATABASE_URL`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`
4. Deploy!

📖 **Full deployment guide**: See [VERCEL_SETUP.md](VERCEL_SETUP.md) for detailed instructions.

The build script automatically generates environment files from Vercel environment variables during deployment.

### Run Tests

```bash
# Unit tests
npm test

# Tests with coverage
ng test --code-coverage
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build the application for production |
| `npm test` | Run unit tests |
| `npm run watch` | Build in watch mode (development) |

## 🏛️ Architecture

### Design Pattern

The application follows the **MVC (Model-View-Controller)** pattern adapted for Angular:

- **Model**: `empleado.model.ts`, interfaces in `shared/`
- **View**: HTML Templates + CSS
- **Controller**: TypeScript Components

### Data Flow

```
┌─────────────┐      ┌──────────────┐      ┌─────────────┐
│  Component  │ ───> │   Service    │ ───> │   Firebase  │
│   (View)    │ <─── │   (Logic)    │ <─── │  (Backend)  │
└─────────────┘      └──────────────┘      └─────────────┘
```

### Main Services

#### 🔹 EmpleadosService
Handles business logic for CRUD operations.

#### 🔹 DataServices
Communicates with Firebase Realtime Database.

#### 🔹 LoginService
Advanced authentication manager with:
- User registration (`register()`)
- Email/password login (`login()`)
- Google OAuth Sign-In (`loginWithGoogle()`)
- Password recovery (`resetPassword()`)
- Redirect handling (`handleRedirectResult()`)
- Session management with JWT tokens
- Auth state listener for automatic token refresh

#### 🔹 LoggerService
Conditional logging system (development vs production).

#### 🔹 NotificationService
User notification system.

## 🔐 Security

### Implemented Best Practices

✅ **Environment Variables**: Firebase credentials separated from code
✅ **JWT Authentication**: Tokens stored in `localStorage`
✅ **Authorization Headers**: Tokens sent in HTTP headers
✅ **Route Guards**: Private route protection
✅ **Input Validation**: Injection prevention
✅ **Strong Typing**: TypeScript to prevent errors

### Firebase Security Configuration

Make sure to configure security rules in Firebase:

```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

## 🎨 Customization

### Styles

Global styles are in:
- `src/styles.css` - Global styles
- Each component has its own CSS file

### Bootstrap Themes

You can customize Bootstrap colors by editing variables in `src/styles.css`:

```css
:root {
  --bs-primary: #your-color;
  --bs-secondary: #your-color;
}
```

## 🐛 Troubleshooting

### Issue: Firebase compilation error

**Solution**: Make sure you're using the correct Firebase version:
```bash
npm install firebase@12.6.0
```

### Issue: "Cannot find module '@angular/core'" error

**Solution**: Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: CORS error with Firebase

**Solution**: Verify that the Firebase URL in `environment.ts` is correct and that security rules allow access.

### Issue: "No Firebase App '[DEFAULT]' has been created"

**Solution**: This happens when Firebase isn't initialized before Angular starts. The app already handles this by initializing Firebase in `main.ts` before bootstrapping Angular.

### Issue: Google Sign-In not working - "auth/operation-not-allowed"

**Solution**:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Navigate to **Authentication** → **Sign-in method**
3. Enable the **Google** provider
4. Add your support email
5. Save changes

### Issue: Cross-Origin-Opener-Policy errors with Google Sign-In

**Solution**: The app uses `signInWithRedirect` instead of `signInWithPopup` to avoid COOP issues. This is already implemented.

### Issue: 401 Unauthorized error after Google login

**Solution**: The app uses `onAuthStateChanged` listener to automatically refresh tokens. Make sure you're on the latest version of the code.

## 🆕 What's New in v2.0

This version includes major authentication enhancements:

### New Components
- ✨ **User Registration** - Complete signup flow with validation
- ✨ **Forgot Password** - Email-based password recovery
- ✨ **User Profile** - Account details and email verification
- ✨ **Loading Spinner** - Reusable component for async operations

### New Features
- 🔐 **Google Sign-In** - OAuth 2.0 authentication with redirect flow
- 📧 **Email Verification** - Send verification emails from profile page
- 🔄 **Auto Token Refresh** - Auth state listener keeps tokens updated
- ⚠️ **Enhanced Error Handling** - User-friendly error messages
- 🎨 **Modern UI Updates** - Bootstrap 5 cards, alerts, and icons

### Technical Improvements
- 🚀 Firebase initialization moved to `main.ts` for better reliability
- 🔧 Changed from `signInWithPopup` to `signInWithRedirect` to avoid COOP issues
- 🛡️ Automatic JWT token management with `onAuthStateChanged`
- 📱 Fully responsive authentication pages
- ♻️ Reusable loading spinner component across the app

## 📚 Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [RxJS Documentation](https://rxjs.dev/)

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Norman** - [GitHub](https://github.com/your-username)

---

<div align="center">

### ⭐ If you liked this project, give it a star!

**Made with ❤️ and Angular**

</div>
