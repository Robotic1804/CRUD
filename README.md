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

Complete employee management system (CRUD) with Firebase authentication, built with the latest versions of Angular and following modern development best practices.

The application allows you to create, read, update, and delete employee records, with a robust authentication and data validation system.

## ✨ Features

### 🔐 Security
- ✅ Firebase Auth authentication
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
- ✅ Intuitive navigation with Angular Router
- ✅ Visual feedback for CRUD operations

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
│   │   ├── home-component/            # Main page (list)
│   │   ├── login/                     # Authentication system
│   │   │   ├── login.component.ts
│   │   │   ├── login.service.ts
│   │   │   └── login-guardian.ts      # Route Guard
│   │   ├── paren-c/                   # Employee component
│   │   ├── proyectos-comp/            # Projects page
│   │   ├── quienes-somos-comp/        # About us page
│   │   ├── shared/                    # Shared services
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
│   │   └── environment.development.ts # Development
│   ├── assets/                        # Static resources
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

4. **Start the development server**
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

### Build for Production

```bash
npm run build
# or
ng build
```

Build artifacts will be stored in the `dist/crud-app` directory.

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
Manages authentication with Firebase Auth.

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

## 📚 Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
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
