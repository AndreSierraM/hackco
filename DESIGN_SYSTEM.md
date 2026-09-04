# Kamino — Sistema de Diseño (Design System Specification)

Este documento especifica los tokens, tipografías, componentes y reglas visuales que componen el sistema de diseño de **Kamino**.

---

## 1. Tokens de Color

### Colores Base y Fondos

| Token | Hex | Clase Tailwind | Uso |
| :--- | :---: | :--- | :--- |
| **Canvas Background** | `#FBFBFA` | `bg-[#FBFBFA]` | Fondo principal cálido off-white de toda la aplicación. |
| **Card Surface** | `#FFFFFF` | `bg-white` | Superficie de tarjetas elevadas, modales y ventanas. |
| **Muted Surface** | `#F4F4F1` | `bg-[#F4F4F1]` | Fondos de inputs, chips secundarios y tablas alternas. |
| **Border Default** | `#E8E8E4` | `border-[#E8E8E4]` | Bordes sutiles para tarjetas y divisiones estructurales. |
| **Border Dark** | `#D0D0C8` | `border-[#D0D0C8]` | Bordes de énfasis en elementos interactivos activos. |

### Paleta Tipográfica y Contraste

| Token | Hex | Clase Tailwind | Uso |
| :--- | :---: | :--- | :--- |
| **Text Primary (Charcoal)** | `#141517` | `text-[#141517]` | Títulos, headlines, textos con máxima jerarquía. |
| **Text Secondary** | `#52535A` | `text-[#52535A]` | Párrafos de lectura y descripciones de soporte. |
| **Text Muted** | `#8A8B93` | `text-[#8A8B93]` | Metadatos, fechas, subtítulos secundarios. |
| **Text Subtle** | `#B5B5BE` | `text-[#B5B5BE]` | Placeholders y bordes desactivados. |

### Colores de Marca y Acento

| Token | Hex | Clase Tailwind | Uso |
| :--- | :---: | :--- | :--- |
| **Kamino Blue** | `#1846A3` | `text-[#1846A3]` / `bg-[#1846A3]` | Acento primario institucional, links, foco interactivo. |
| **Kamino Blue Dark** | `#103275` | `hover:bg-[#103275]` | Estados hover y active para botones de marca. |
| **Kamino Blue Subtle**| `#EFF4FC` | `bg-[#EFF4FC]` | Fondos de tags de marca y estados seleccionados. |

### Estados Semánticos y Operativos

| Estado | Fondo | Texto / Borde | Significado en Producto |
| :--- | :---: | :---: | :--- |
| **Success / Verified** | `bg-emerald-50` | `text-emerald-800` / `border-emerald-200` | Repositorio verificado, entregable a tiempo, MVP listo. |
| **Warning / Evaluation** | `bg-amber-50` | `text-amber-800` / `border-amber-200` | En revisión de jurados, mentoría activa, sprint por cerrar. |
| **Info / Pilot Pipeline**| `bg-blue-50` | `text-blue-800` / `border-blue-200` | Finalista, transferido a piloto corporativo. |
| **Error / Flagged** | `bg-rose-50` | `text-rose-800` / `border-rose-200` | Entregable incompleto o solicitud descartada. |

---

## 2. Tipografía & Jerarquía Modular

El sistema utiliza tres familias complementarias cargadas vía `next/font`:

1. **Plus Jakarta Sans** (`sans`): Interfaz, títulos técnicos, datos, botones y lectura.
2. **Instrument Serif Italic** (`font-serif-italic`): Énfasis editorial en headlines y frases de valor.
3. **JetBrains Mono** (`font-mono`): Código fuente, identificadores de repositorios, etiquetas técnicas y hashes.

### Escala Tipográfica

| Nivel | Desktop | Mobile | Weight / Tracking | Aplicación |
| :--- | :---: | :---: | :---: | :--- |
| **Hero Display** | 76px (`text-[76px]`) | 42px (`text-[42px]`) | ExtraBold / `-0.035em` | H1 principal de la landing. |
| **Display Italic**| 76px (`text-[76px]`) | 42px (`text-[42px]`) | Normal Italic / `-0.02em` | Énfasis editorial dentro del H1. |
| **Section Title** | 42px (`text-4xl`) | 32px (`text-3xl`) | Bold / `-0.025em` | H2 de cabecera de secciones. |
| **Subheading** | 24px (`text-2xl`) | 20px (`text-xl`) | SemiBold / `-0.015em` | H3 de tarjetas y módulos. |
| **Body Large** | 18px (`text-lg`) | 16px (`text-base`) | Regular / `leading-relaxed` | Párrafos introductorios y manifiesto. |
| **Body Base** | 15px (`text-[15px]`) | 14px (`text-sm`) | Regular / `leading-normal` | Contenido de tablas y descripciones. |
| **Micro / Mono** | 11px (`text-[11px]`) | 10px (`text-[10px]`) | Mono Bold / `tracking-wider` | Badges, tags de estado, chips. |

---

## 3. Espaciado, Bordes y Radios

### Radios de Borde (`border-radius`)
- `rounded-lg` (8px): Badges, tooltips y botones pequeños.
- `rounded-xl` (12px): Inputs de texto, textareas y dropdowns.
- `rounded-2xl` (16px): Tarjetas internas de módulos y cards secundarias.
- `rounded-3xl` (24px): Tarjetas principales, contenedores de secciones y ventanas de producto.
- `rounded-full` (9999px): Botones pill, avatares y selectores de etapa.

### Sombras y Elevación
- `shadow-xs`: `0 1px 2px 0 rgba(0, 0, 0, 0.04)` para tarjetas planas sobre `#FBFBFA`.
- `shadow-editorial`: `0 8px 30px -4px rgba(20, 21, 23, 0.08)` para botones principales y la ventana de demostración.
- `shadow-2xl`: Reservada para modales emergentes y el Command Palette (`Cmd+K`).

---

## 4. Componentes Clave

### Botones (`<Button />`)
- **Primary Charcoal**: `bg-[#141517] text-white hover:bg-[#252830]` — CTA principal de negocio.
- **Brand Blue**: `bg-[#1846A3] text-white hover:bg-[#103275]` — Acciones de submit y confirmación.
- **Secondary / Outline**: `bg-white border border-[#E8E8E4] text-[#141517] hover:bg-[#F4F4F1]` — Acciones secundarias y enlaces de navegación.
- **Ghost**: `text-[#52535A] hover:bg-[#F4F4F1] hover:text-[#141517]` — Acciones dentro de menús y toolbars.

*Requisito*: En móviles, todos los botones deben cumplir con altura mínima de `44px` (`py-3 sm:py-2.5`) para cumplir las pautas de accesibilidad táctil.

### Badges & Tags (`<Badge />`)
- Estructura: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium`.
- **Live Pulse**: Un círculo `w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse` para indicar procesos en vivo.

### Ventanas de Producto & Mockups
- Deben incluir la barra superior estilo navegador/terminal (`h-9 border-b border-[#E8E8E4] px-4 flex items-center justify-between`).
- **Disclaimer Obligatorio**: Todo mockup que represente un reto o jurado debe incluir:
  `span: text-[10px] font-mono uppercase tracking-wider text-[#71717A] → VISTA DEMOSTRATIVA`

---

## 5. Accesibilidad (a11y) & Rendimiento

1. **Contraste de Color**: Cumplimiento estricto con WCAG AA (ratio $\ge 4.5:1$ en texto estándar, $\ge 3:1$ en texto grande).
2. **Focus Visible**: Todos los elementos interactivos cuentan con `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1846A3] focus-visible:ring-offset-2`.
3. **Reducción de Movimiento**: Configurado en `globals.css`:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```
4. **Cero Desbordamiento**: `overflow-x: hidden` en el body para prevenir desplazamientos horizontales accidentales en dispositivos móviles.
