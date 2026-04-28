<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:e30613,50:6B21A8,100:1d4ed8&height=220&section=header&text=VERISURE%20VOLUNTEERING&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Conectando%20corazones%20con%20causas%20que%20importan&descAlignY=58&descSize=16" />

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=e30613&center=true&vCenter=true&multiline=true&repeat=true&width=700&height=80&lines=Plataforma+de+voluntariado+corporativo;React+19+%2B+Spring+Boot+%2B+Atomic+Design;Tecnolog%C3%ADa+al+servicio+del+bien+com%C3%BAn+%F0%9F%8C%8D)](https://git.io/typing-svg)

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
| ⚡ Build Tool | Vite | 8.0.4 |
| 🎨 Componentes | Material UI | 9.0.0 |
| 🎬 Animaciones | Framer Motion | 12.38.0 |
| 🔗 Routing | React Router DOM | 7.14.0 |
| 🌐 HTTP Client | Axios | 1.15.0 |
| 🎯 Iconos | Lucide React | 1.8.0 |
| 📊 Charts | MUI X-Charts | — |
| 🧪 Testing | Vitest + Testing Library | 4.1.5 |
| 💅 Estilos | CSS Modules | — |

---

## 🗺️ Mapa de Rutas

```
🌐 /
│
├── 🔑 /login
│
├── 🛡️ /admin
│   ├── /proyectos ............. Gestión de todos los proyectos
│   ├── /metricas .............. Dashboard analítico con gráficas
│   ├── /ongs/perfiles ......... Administrar perfiles de ONGs
│   └── /voluntario/perfiles ... Administrar perfiles de voluntarios
│
├── 🏢 /ongs
│   ├── /proyectos ............. Mis proyectos
│   └── /nuevo_proyecto ........ Crear nuevo proyecto
│
└── 👤 /voluntario
    ├── /proyectos ............. Explorar catálogo de proyectos
    ├── /mis_proyectos ......... Mis voluntariados activos
    ├── /certificados .......... Mis certificados
    └── /certificados/:id ...... Detalle de certificado
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
├── ⚛️  atoms/          (21 componentes base)
│   ├── InputField, PrimaryButton, SecondaryButton
│   ├── LikeButton, StatusFilterButton, Title
│   ├── CatLogo, Logo, UserIcon, UserName
│   └── SelectField, TextareaField, DescriptionField ...
│
├── 🧬  molecules/       (15+ componentes compuestos)
│   ├── LoginForm          → Formulario con validación en tiempo real
│   ├── CreateOngModal     → Modal de alta de ONG con header oscuro
│   ├── ParticipantsModal  → Lista de voluntarios con avatares
│   ├── ProjectActiveRow   → Fila de proyecto activo con acciones
│   ├── ProjectArchivedRow → Fila archivada con conteo CLOSED
│   └── ApplicationFilterBar, ProjectFilterBar, SearchFilterBar ...
│
├── 🦠  organisms/       (19+ componentes complejos)
│   ├── Header, Footer
│   ├── AdminSidebar, VolunteerSidebar, OngSidebar
│   ├── PublishedProjectsList → Catálogo con favoritos + aplicación
│   ├── MyApplications        → Voluntariados del empleado
│   ├── ActivesSection        → Tabla de proyectos activos
│   ├── ArchivedSection       → Proyectos completados
│   ├── DonutChart, CatBarChart
│   └── CertificateList, ProjectCard ...
│
├── 📄  pages/           (16 páginas completas)
└── 🖼️  templates/       (AuthTemplate, Modal)
```

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
      <img src="https://avatars.githubusercontent.com/geraldinesaco?s=100" width="80px" style="border-radius:50%"/><br/>
      <b>Geraldine Saco</b><br/>
      <a href="https://github.com/geraldinesaco">
        <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/cristinaviejo?s=100" width="80px" style="border-radius:50%"/><br/>
      <b>Cristina Viejó</b><br/>
      <a href="https://github.com/cristinaviejo">
        <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/guadalupepena?s=100" width="80px" style="border-radius:50%"/><br/>
      <b>Guadalupe Peña</b><br/>
      <a href="https://github.com/guadalupepena">
        <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/manongodfroy?s=100" width="80px" style="border-radius:50%"/><br/>
      <b>Manon Godfroy</b><br/>
      <a href="https://github.com/manongodfroy">
        <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
      </a>
    </td>
  </tr>
</table>

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1d4ed8,50:6B21A8,100:e30613&height=120&section=footer&animation=fadeIn" />

**Hecho con ❤️ por el equipo de Femcoders · Bootcamp 2024**

*"La tecnología más poderosa es la que conecta personas con propósito"*

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=PF-VERISURE.Front_PF_Verisure&style=flat&color=e30613)

</div>
