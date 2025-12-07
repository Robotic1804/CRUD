# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto sigue [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-12-07

### 🚀 Actualización Mayor - Angular 15 → 19

#### Added
- ✨ Sistema de logging estructurado (`LoggerService`)
- ✨ Sistema de notificaciones modular (`NotificationService`)
- ✨ Interfaces tipadas para respuestas de Firebase
- ✨ Archivo de ejemplo para variables de entorno (`environment.example.ts`)
- ✨ Manejo de memory leaks con `takeUntil` en observables
- ✨ Sintaxis moderna de templates (@if, @for)
- ✨ README.md profesional y completo
- ✨ CHANGELOG.md para documentar versiones
- ✨ Archivo LICENSE (MIT)

#### Changed
- ⬆️ **Angular**: 15.0.2 → 19.2.17
- ⬆️ **TypeScript**: 5.1.6 → 5.8.3
- ⬆️ **Firebase**: 9.16.0 → 12.6.0
- ⬆️ **Bootstrap**: 5.2.3 → 5.3.8
- ⬆️ **RxJS**: 7.5.7 → 7.8.2
- ⬆️ **zone.js**: 0.13.3 → 0.15.1
- 🔧 Autenticación migrada de cookies a `localStorage`
- 🔧 Tokens JWT enviados en headers HTTP (no en URL)
- 🔧 Configuración de Firebase movida a archivos de entorno
- 🔧 Reemplazo de `console.log()` con `LoggerService`
- 🔧 Reemplazo de `alert()` con `NotificationService`
- 🔧 Mejora en validación de inputs y parámetros de ruta

#### Removed
- ❌ Dependencia de `ngx-cookie-service` (17.1.0)
- ❌ API Keys hardcodeadas en código fuente
- ❌ Uso directo de `console.log/error`
- ❌ Uso directo de `alert()`
- ❌ Tipos `any` en observables

#### Security
- 🔐 Variables de entorno para credenciales de Firebase
- 🔐 Tokens JWT en headers de autorización
- 🔐 Validación robusta de inputs de usuario
- 🔐 Validación de parámetros de ruta
- 🔐 `.gitignore` actualizado para proteger credenciales
- 🔐 Manejo seguro de errores en autenticación

#### Fixed
- 🐛 Memory leaks en suscripciones de observables
- 🐛 Exposición de tokens en URLs
- 🐛 Falta de validación en formularios
- 🐛 Cookies sin flags de seguridad
- 🐛 Credenciales expuestas en repositorio

---

## [1.0.0] - 2023

### Added
- 🎉 Versión inicial de la aplicación
- ✅ Sistema CRUD de empleados
- ✅ Autenticación con Firebase
- ✅ Interfaz con Bootstrap 5
- ✅ Navegación con Angular Router
- ✅ Integración con Firebase Realtime Database

---

## Tipos de cambios

- `Added` - para nuevas características
- `Changed` - para cambios en funcionalidad existente
- `Deprecated` - para características que serán removidas
- `Removed` - para características removidas
- `Fixed` - para corrección de bugs
- `Security` - para mejoras de seguridad
