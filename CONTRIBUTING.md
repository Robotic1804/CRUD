# Guía de Contribución

¡Gracias por tu interés en contribuir al proyecto CRUD App! 🎉

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Configuración del Entorno](#configuración-del-entorno)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Estándares de Código](#estándares-de-código)
- [Commits](#commits)
- [Pull Requests](#pull-requests)

## 🤝 Código de Conducta

Este proyecto sigue un código de conducta. Al participar, se espera que mantengas este código. Por favor reporta comportamientos inaceptables.

## 🚀 ¿Cómo puedo contribuir?

### Reportar Bugs

Si encuentras un bug:

1. **Verifica** que no haya sido reportado previamente en [Issues](../../issues)
2. **Crea un issue** con:
   - Título descriptivo
   - Descripción detallada del problema
   - Pasos para reproducir el bug
   - Comportamiento esperado vs actual
   - Screenshots si es aplicable
   - Versión de Angular, navegador, OS

### Sugerir Mejoras

Para sugerir nuevas características:

1. **Abre un issue** describiendo:
   - El problema que resuelve
   - Cómo beneficiaría al proyecto
   - Ejemplos de uso
   - Posibles alternativas consideradas

### Contribuir con Código

1. **Fork** el repositorio
2. **Crea una rama** desde `main`:
   ```bash
   git checkout -b feature/nueva-caracteristica
   # o
   git checkout -b fix/correccion-bug
   ```
3. **Realiza tus cambios**
4. **Commit** con mensajes descriptivos
5. **Push** a tu fork
6. **Crea un Pull Request**

## ⚙️ Configuración del Entorno

### Requisitos

- Node.js 18.x o superior
- npm 9.x o superior
- Angular CLI 19.x

### Instalación

```bash
# Clonar tu fork
git clone https://github.com/tu-usuario/CRUD.git
cd CRUD

# Instalar dependencias
npm install

# Configurar Firebase
cp src/environments/environment.example.ts src/environments/environment.development.ts
# Editar environment.development.ts con tus credenciales

# Iniciar servidor de desarrollo
npm start
```

## 💻 Proceso de Desarrollo

### 1. Desarrollo Local

```bash
# Inicia el servidor de desarrollo
ng serve

# En otra terminal, ejecuta los tests en modo watch
ng test --watch
```

### 2. Testing

**Importante**: Todos los cambios deben incluir tests.

```bash
# Ejecutar tests unitarios
npm test

# Ejecutar tests con coverage
ng test --code-coverage

# El coverage debe ser > 80%
```

### 3. Build

Antes de hacer commit, asegúrate de que compila sin errores:

```bash
# Build de desarrollo
ng build --configuration development

# Build de producción
ng build --configuration production
```

## 📏 Estándares de Código

### TypeScript / Angular

- **Formato**: Usa prettier/ESLint
- **Nombres**:
  - Componentes: PascalCase (`HomeComponent`)
  - Servicios: PascalCase + `Service` (`EmpleadosService`)
  - Variables: camelCase (`empleadoNombre`)
  - Constantes: UPPER_SNAKE_CASE (`API_URL`)

- **Imports**: Ordena alfabéticamente
  ```typescript
  // Angular core
  import { Component } from '@angular/core';

  // RxJS
  import { Observable } from 'rxjs';

  // Servicios propios
  import { EmpleadosService } from './empleados.service';

  // Modelos
  import { Empleado } from './empleado.model';
  ```

- **Interfaces**: Preferir interfaces sobre types
  ```typescript
  // ✅ Bien
  export interface Empleado {
    nombre: string;
    apellido: string;
  }

  // ❌ Evitar (a menos que sea necesario)
  export type Empleado = {
    nombre: string;
    apellido: string;
  }
  ```

### Templates HTML

- Usa la nueva sintaxis de control flow:
  ```html
  <!-- ✅ Bien -->
  @if (empleado) {
    <div>{{ empleado.nombre }}</div>
  }

  @for (emp of empleados; track emp.id) {
    <app-empleado [empleado]="emp" />
  }

  <!-- ❌ Evitar sintaxis antigua -->
  <div *ngIf="empleado">{{ empleado.nombre }}</div>
  <app-empleado *ngFor="let emp of empleados" [empleado]="emp" />
  ```

### CSS

- Usa clases de Bootstrap cuando sea posible
- CSS custom solo para estilos específicos del componente
- Evita `!important`

## 📝 Commits

### Formato de Mensajes

Usa [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<alcance>): <descripción>

[cuerpo opcional]

[footer opcional]
```

**Tipos**:
- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Formato, punto y coma faltante, etc.
- `refactor`: Refactorización de código
- `test`: Agregar tests
- `chore`: Cambios en build, herramientas, etc.

**Ejemplos**:
```bash
feat(empleados): agregar validación de email
fix(login): corregir redirect después de login
docs(readme): actualizar instrucciones de instalación
refactor(services): extraer lógica común a servicio base
test(empleados): agregar tests para CRUD operations
```

### Commits Atómicos

- Un commit = un cambio lógico
- Los commits deben compilar
- Los tests deben pasar

## 🔄 Pull Requests

### Antes de Crear un PR

- [ ] El código compila sin errores
- [ ] Los tests pasan
- [ ] El coverage no disminuye
- [ ] Actualizaste el CHANGELOG.md
- [ ] Agregaste/actualizaste tests
- [ ] Actualizaste la documentación si es necesario

### Template de PR

```markdown
## Descripción
[Descripción clara de los cambios]

## Tipo de cambio
- [ ] Bug fix
- [ ] Nueva característica
- [ ] Breaking change
- [ ] Actualización de documentación

## ¿Cómo se ha probado?
[Describe las pruebas realizadas]

## Checklist
- [ ] Mi código sigue los estándares del proyecto
- [ ] He realizado una auto-revisión de mi código
- [ ] He comentado mi código en áreas complejas
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan warnings
- [ ] He agregado tests que prueban mi cambio
- [ ] Tests nuevos y existentes pasan localmente

## Screenshots (si aplica)
[Agregar screenshots]
```

## 🎯 Áreas de Contribución

### Prioridad Alta
- 🐛 Corrección de bugs reportados
- 🔐 Mejoras de seguridad
- ♿ Mejoras de accesibilidad
- 📱 Mejoras responsive

### Prioridad Media
- ✨ Nuevas características del roadmap
- 🎨 Mejoras de UI/UX
- ⚡ Optimizaciones de performance
- 📝 Mejoras de documentación

### Prioridad Baja
- 🧹 Refactorizaciones
- 🎭 Mejoras estéticas menores

## ❓ ¿Preguntas?

Si tienes preguntas, puedes:
1. Abrir un [Discussion](../../discussions)
2. Comentar en un issue existente
3. Contactar a los maintainers

---

**¡Gracias por contribuir!** 🎉
