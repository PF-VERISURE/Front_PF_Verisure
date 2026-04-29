<div align="center">

<img src="https://capsule-render.vercel.app/api?type=soft&color=0:e30613,20:c2185b,50:6B21A8,80:1d4ed8,100:0d47a1&height=260&section=header&text=VERISURE%20VOLUNTEERING&fontSize=44&fontColor=ffffff&animation=twinkling&fontAlignY=40&desc=Conectando%20corazones%20con%20causas%20que%20importan&descAlignY=60&descSize=17" />

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=e30613&center=true&vCenter=true&multiline=true&repeat=true&width=700&height=120&lines=Plataforma+de+voluntariado+corporativo;React+19+%2B+Spring+Boot+%2B+Atomic+Design;Tecnolog%C3%ADa+al+servicio+del+bien+com%C3%BAn+%F0%9F%8C%8D)](https://git.io/typing-svg)

<br/>

![Version](https://img.shields.io/badge/version-1.0.0-e30613?style=for-the-badge&logo=semver&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge&logo=statuspage&logoColor=white)

</div>

---

## ✨ ¿Qué es Verisure Volunteering?

> *Una plataforma que transforma el voluntariado corporativo en una experiencia digital fluida, conectando empleados de Verisure con ONGs que necesitan su talento y tiempo.*

Tres mundos. Un ecosistema. Impacto real.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   👤 VOLUNTARIO          🏢 ONG              🛡️ ADMIN           │
│                                                                 │
│  Explora proyectos   Publica proyectos    Supervisa todo        │
│  Aplica y participa  Gestiona equipos     Aprueba proyectos     │
│  Obtén certificados  Mide tu impacto      Genera métricas       │
│                                                                 │
│              ↕️              ↕️               ↕️                │
│                                                                 │
│  ────────────── API REST (Spring Boot + JWT) ──────────────     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Stack Tecnológico

<div align="center">

[![My Skills](https://skillicons.dev/icons?i=react,vite,js,css,materialui,git,github,figma&theme=dark)](https://skillicons.dev)

</div>

| Categoría | Tecnología | Versión |
|-----------|-----------|---------|
| ⚛️ UI Framework | React | 19.2.4 |
| ⚡ Build Tool | Vite | Latest |
| 🎨 Componentes | Material UI | 9.0.0 |
| 📊 Charts | MUI X-Charts | 9.0.2 |
| 🎬 Animaciones | Framer Motion | 12.38.0 |
| 🔗 Routing | React Router DOM | 7.14.0 |
| 🌐 HTTP Client | Axios | 1.15.0 |
| 🎯 Iconos | Lucide React | 1.8.0 |
| 💅 Estilos | CSS Modules | — |
| 🧪 Testing | Vitest + Testing Library | Latest |
| 🌍 Fuente | Montserrat (Google Fonts) | — |

---

## 🗺️ Mapa de Rutas

```
🌐 /
│
├── 🔑 /login                       → Pantalla de acceso (JWT)
│
├── 🛡️ /admin                       → AdminDashboard (layout)
│   ├── / (index)                   → AdminProject
│   ├── /proyectos ................ Gestión de todos los proyectos
│   │                                 (EN REVISIÓN · ACTIVOS · ARCHIVADOS · RECHAZADOS)
│   ├── /metricas ................. Dashboard analítico con 5 gráficas
│   ├── /ongs/perfiles ............ Administrar perfiles de ONGs
│   └── /voluntario/perfiles ...... Administrar perfiles de voluntarios
│
├── 🏢 /ongs                        → OngDashboard (layout)
│   ├── / (index)                   → OngProjects
│   ├── /proyectos ................ Mis proyectos publicados
│   └── /nuevo_proyecto ........... Formulario de creación de proyecto
│
└── 👤 /voluntario                  → VolonteerDashboard (layout)
    ├── / (index)                   → VolonteerExplore
    ├── /proyectos ................ Catálogo con filtros y favoritos
    ├── /mis_proyectos ............ Aplicaciones activas del empleado
    ├── /certificados ............. Listado de certificados obtenidos
    └── /certificados/:id ......... Descarga de certificado individual
```

---

## 🎭 Roles y Funcionalidades

<details>
<summary><b>👤 Voluntario (EMPLOYEE)</b> — click para expandir</summary>

<br/>

El corazón de la plataforma. El voluntario puede:

- 🔍 **Explorar** el catálogo de proyectos publicados con filtros por categoría, modalidad y ciudad
- ❤️ **Guardar favoritos** con un solo click
- 📝 **Aplicar** a proyectos o unirse a lista de espera si están llenos
- 📋 **Gestionar** sus voluntariados activos y cancelar participación
- 🏆 **Descargar certificados** digitales de cada proyecto completado
- 🔍 Filtrar aplicaciones por estado: `PENDIENTE` · `APROBADO` · `LISTA DE ESPERA` · `CERRADO`

</details>

<details>
<summary><b>🏢 ONG (ORGANIZATION)</b> — click para expandir</summary>

<br/>

La voz de las organizaciones. La ONG puede:

- ➕ **Crear proyectos** con formulario completo y validaciones en tiempo real
- 📸 **Subir imagen** del proyecto (PNG/JPG/WEBP · máx. 10MB)
- 🌍 **Configurar modalidad**: Presencial, Semipresencial o Virtual (con URL válida)
- 📅 **Gestionar fechas**, participantes requeridos y horas de dedicación
- 🎯 **Categorizar** por ODS (Objetivos de Desarrollo Sostenible)
- 📊 **Ver estado** de cada proyecto: `EN REVISIÓN` · `PUBLICADO` · `RECHAZADO` · `CANCELADO`

</details>

<details>
<summary><b>🛡️ Admin</b> — click para expandir</summary>

<br/>

El guardián del ecosistema. El admin puede:

- ✅ **Aprobar o rechazar** proyectos enviados por las ONGs
- 📊 **Ver métricas** con gráficas de dona y barras por categoría
- 👥 **Gestionar perfiles** de ONGs y voluntarios
- 📁 **Secciones especializadas**: En Revisión · Activos · Archivados · Rechazados
- 👁️ **Ver participantes** por proyecto con modal detallado
- 🔍 **Buscar y filtrar** proyectos con barra de búsqueda en tiempo real
- 🏢 **Crear perfiles de ONG** directamente desde el panel admin

</details>

---

## 🧩 Arquitectura — Atomic Design

```
src/components/
│
├── ⚛️  atoms/          (24 componentes base)
│   ├── InputField, PrimaryButton, SecondaryButton
│   ├── LikeButton, StatusFilterButton, Title, Subtitle
│   ├── CatLogo, Logo, UserIcon, UserName, VerisureName
│   ├── SearchInput, SelectField, TextareaField, DescriptionField
│   ├── KpiCard, StatusBadge, ModalAlerts, ProjectDetail
│   └── MonthFilter, YearFilter, SidebarIcon, SidebarText
│
├── 🧬  molecules/       (21+ componentes compuestos)
│   ├── LoginForm           → Formulario con validación en tiempo real
│   ├── CreateOngModal      → Modal de alta de ONG con header oscuro
│   ├── ParticipantsModal   → Lista de voluntarios con avatares
│   ├── WaitlistModal       → Modal de lista de espera
│   ├── ProjectInfoModal    → Detalle de proyecto en modal
│   ├── OngProfileModal     → Perfil ONG con edición inline
│   ├── VolunteerProfileModal → Perfil voluntario con edición inline
│   ├── ProjectActiveRow    → Fila de proyecto activo con acciones
│   ├── ProjectArchivedRow  → Fila archivada con conteo CLOSED
│   ├── ProjectRevisionRow  → Fila de proyecto en revisión
│   ├── ProjectRejectedRow  → Fila de proyecto rechazado
│   ├── Certificate         → Componente de certificado descargable
│   ├── CertificateCard     → Tarjeta de certificado en listado
│   └── ApplicationFilterBar, ProjectFilterBar, SearchFilterBar ...
│
├── 🦠  organisms/       (20+ componentes complejos)
│   ├── Header, Footer
│   ├── AdminSidebar, VolonteerSidebar, OngSidebar
│   ├── PublishedProjectsList → Catálogo con favoritos + aplicación
│   ├── MyApplications        → Voluntariados del empleado
│   ├── ActivesSection        → Tabla de proyectos activos (admin)
│   ├── ArchivedSection       → Proyectos completados (admin)
│   ├── RevisionSection       → Proyectos en revisión (admin)
│   ├── RejectedSection       → Proyectos rechazados (admin)
│   ├── OngMyProjects         → Listado de proyectos de la ONG
│   ├── PendingProjectList    → Proyectos pendientes de aprobación
│   ├── CertificateList       → Lista de certificados del voluntario
│   ├── ProjectCard           → Tarjeta de proyecto (explore)
│   ├── ApplicationCard       → Tarjeta de aplicación activa
│   └── Metrics/ (5 gráficos con MUI X-Charts)
│       ├── ProjectsPieChart         → Tarta de proyectos por categoría
│       ├── ParticipationPieChart    → Tarta de funnel de participación
│       ├── MonthEvolutionLineChart  → Evolución mensual de actividad
│       ├── YearComparationLineChart → Comparativa interanual
│       └── GnoContributionBarChart  → Barras de contribución por ONG
│
├── 📄  pages/           (13+ páginas completas)
└── 🖼️  templates/       (AuthTemplate, Modal, template)
```

---

## ⚙️ Arquitectura Interna

### 🌐 Capa de Servicios (`src/services/`)

| Servicio | Responsabilidad | Endpoints principales |
|----------|-----------------|-----------------------|
| `api.js` | Instancia Axios + interceptors JWT | — |
| `UserService` | Auth · Empleados · ONGs · SDGs | `/auth/login`, `/employees`, `/gnos`, `/sdgs` |
| `ProjectService` | CRUD de proyectos · Favoritos | `/projects`, `/projects/my-projects` |
| `ApplicationService` | Postulaciones y cancelaciones | `/applications`, `/applications/me` |
| `DashboardService` | KPIs · Gráficos · Comparativas | `/dashboard/*` |
| `CertificateService` | Certificados del voluntario | `/participation/certificates` |

> Base URL configurable — por defecto `http://localhost:8080/api/v1`

---

### 🪝 Custom Hooks (`src/hooks/`)

| Hook | Parámetros | Retorna |
|------|-----------|---------|
| `useDashboard` | `year`, `month` | `{ data, loading, error }` con fetch paralelo de 6 endpoints |
| `useModal` | — | `{ isOpen, open, close }` |
| `useApplications` | — | Estado de postulaciones del usuario activo |

---

### 🧠 Contexto Global (`src/context/User/`)

```
UserProvider
 ├── login(credentials)  → llama UserService, guarda token en localStorage
 ├── logout()            → limpia token y userData, redirige a /login
 └── estado: { user, isLogged }

Roles reconocidos: ADMIN · EMPLOYEE · ONG
LocalStorage keys:  token · userData (JSON)
```

---

### 🛠️ Utilidades (`src/utils/`)

| Archivo | Contenido |
|---------|-----------|
| `categories.js` | 10 categorías ODS: label, imagen, color CSS var |
| `ProjectStatus.js` | Mapa de estados → estilos UI |
| `dateFormatting.js` | Helpers de formato de fecha |
| `routeManager.jsx` | Redirige a `/admin`, `/voluntario` o `/ongs` según rol |
| `translation.js` | Traducciones puntuales de etiquetas |
| `validations.js` | Validaciones reutilizables de formularios |

---

## 🚀 Instalación y Arranque

```bash
# 1. Clona el repositorio
git clone https://github.com/PF-VERISURE/Front_PF_Verisure.git

# 2. Entra al directorio
cd Front_PF_Verisure

# 3. Instala dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm run dev
```
---

## 💻 Proyecto Full Stack

Este repositorio contiene exclusivamente el **Cliente Front-end**. Para que la plataforma funcione completamente, debe conectarse con la API REST.

* **Repositorio Back-end:** [Verisure Volunteering API](https://github.com/PF-VERISURE/Back_PF_Verisure)

---
> ⚠️ Asegúrate de tener el backend corriendo en `http://localhost:8080`

```bash
# Otros comandos útiles
npm run build      # Build para producción
npm run preview    # Preview del build
npm run test       # Tests en modo watch
npm run test:run   # Tests en modo CI
npm run lint       # Linting con ESLint
```

---

## 🧪 Tests

```
src/tests/
├── Components/
│   ├── ProjectCard.test.jsx              → Render y props del componente
│   ├── PublishedProjectsList.test.jsx    → Renderizado de listado completo
│   └── PublishedProjectList.data.test.jsx → Datos y filtros del listado
└── Services/
    └── ProjectService.test.js            → Llamadas HTTP y respuestas API
```

```bash
npm run test      # Modo watch (desarrollo)
npm run test:run  # Modo CI (una sola pasada)
```

Framework: **Vitest** · Entorno: **jsdom** · Librería: **React Testing Library**

---

## 🔐 Autenticación y Seguridad

```
┌─────────────────────────────────────────────────┐
│           FLUJO DE AUTENTICACIÓN JWT            │
│                                                 │
│  1. Usuario envía credenciales (email + pass)   │
│          ↓                                      │
│  2. Backend valida y devuelve JWT Token         │
│          ↓                                      │
│  3. Token se guarda en localStorage             │
│          ↓                                      │
│  4. Axios interceptor añade Bearer en headers   │
│          ↓                                      │
│  5. 401/403 → Auto-logout + redirect /login     │
└─────────────────────────────────────────────────┘
```

---

## 🌍 ODS — Categorías de Proyectos

Los proyectos se clasifican según los **Objetivos de Desarrollo Sostenible** de la ONU:

| # | Categoría |
|---|-----------|
| 1 | 💧 Agua limpia y saneamiento |
| 2 | 🏥 Salud y bienestar |
| 3 | 🏙️ Ciudades y comunidades sostenibles |
| 4 | ⚡ Energía asequible y no contaminante |
| 5 | 🌾 Hambre cero |
| 6 | ⚖️ Igualdad de género |
| 7 | 💰 Fin de la pobreza |
| 8 | ♻️ Producción y consumo responsables |
| 9 | 🤝 Reducción de las desigualdades |
| 10 | 🌊 Vida submarina |

---

## 👩‍💻 Desarrolladoras

<div align="center">

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/GeraldineSaco">
        <img src="https://api.dicebear.com/9.x/adventurer/png?seed=Geraldine&size=200&backgroundColor=ffd5dc" width="100px" height="100px" style="border-radius:50%; border: 3px solid #e30613; padding: 3px; object-fit:cover;"/>
      </a><br/><br/>
      <b>Geraldine Saco</b><br/>
      <a href="https://github.com/GeraldineSaco">
        <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/krissvinti-ux">
        <img src="https://api.dicebear.com/9.x/adventurer/png?seed=Isabel&size=200&backgroundColor=d5e8ff&hair[]=long16" width="100px" height="100px" style="border-radius:50%; border: 3px solid #e30613; padding: 3px; object-fit:cover;"/>
      </a><br/><br/>
      <b>Cristina Viejó</b><br/>
      <a href="https://github.com/krissvinti-ux">
        <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/AdaXana">
        <img src="https://api.dicebear.com/9.x/adventurer/png?seed=Guadalupe&size=200&backgroundColor=d5ffd5" width="100px" height="100px" style="border-radius:50%; border: 3px solid #e30613; padding: 3px; object-fit:cover;"/>
      </a><br/><br/>
      <b>Guadalupe Peña</b><br/>
      <a href="https://github.com/AdaXana">
        <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ManonChab">
        <img src="https://api.dicebear.com/9.x/adventurer/png?seed=Marie&size=200&backgroundColor=ffe8d5&hair[]=long14" width="100px" height="100px" style="border-radius:50%; border: 3px solid #e30613; padding: 3px; object-fit:cover;"/>
      </a><br/><br/>
      <b>Manon Godfroy</b><br/>
      <a href="https://github.com/ManonChab">
        <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
      </a>
    </td>
  </tr>
</table>

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=slice&color=0:0d47a1,30:1d4ed8,60:6B21A8,80:c2185b,100:e30613&height=150&section=footer&animation=twinkling" />

**Hecho con ❤️ por el equipo de Femcoders · Bootcamp Full Stack - FemCoders 2026**

*"La tecnología más poderosa es la que conecta personas con propósito"*

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=PF-VERISURE.Front_PF_Verisure&style=flat&color=e30613)

</div>

