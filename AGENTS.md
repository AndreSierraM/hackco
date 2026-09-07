<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Kamino — Guía para Agentes de IA & Desarrolladores

Bienvenido al repositorio de **Kamino** (`hackco`). Este documento establece las reglas operativas, principios arquitectónicos y convenciones que cualquier agente de IA o desarrollador debe respetar de forma obligatoria.

---

## 1. Misión y Posicionamiento de Marca

Kamino es la plataforma y operador B2B de innovación abierta que ayuda a corporaciones medianas y grandes a transformar problemas de negocio reales en prototipos de software funcionales y pilotos productivos a través de hackathons y retos técnicos estructurados.

### Reglas Inviolables de Copywriting y Posicionamiento
1. **B2B Primero**: El cliente principal es el líder corporativo (VP de Innovación, CTO, VP de Transformación Digital, People Lead).
2. **Prohibido "Open Innovation OS" en el Hero**: La propuesta de valor debe entenderse en menos de 5 segundos (*"Convierte los problemas de tu empresa en soluciones que sí se construyen"*).
3. **Builders en flujo secundario**: La comunidad de programadores y diseñadores accede a través de rutas secundarias claras (*"¿Quieres competir como builder? Explorar hackathons abiertos →"*).
4. **Honestidad Radical**:
   - **PROHIBIDO** inventar métricas ficticias o presentar empresas ficticias como si fueran casos de éxito o clientes reales.
   - Cualquier pantalla de muestra o mockup debe etiquetarse explícitamente como `VISTA DEMOSTRATIVA` o `Entorno Demostrativo en Vivo`.
5. **Vender Resultados, No Features**: La narrativa debe enfocar el resultado comercial (*"Menos PowerPoints. Más productos funcionando"*, *"El Demo Day no es la meta: el objetivo es el piloto"*).
6. **El Cliente es el Héroe (Hablar del Cliente, No de Nosotros)**: Hablar siempre en términos del dolor de la empresa y cómo le ayudamos a solucionarlo (*"Tu equipo interno no da abasto...", "Te ayudamos a convertir tus cuellos de botella en software funcionando..."*). El usuario corporativo debe entrar y decir de inmediato: *"Ellos conocen mi problema exacto y me ayudan a solucionarlo"*.

---

## 2. Stack Tecnológico

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) con Turbopack.
- **UI Library**: React 19.
- **Estilos**: Tailwind CSS con paleta editorial personalizada.
- **Tipografías**: `Plus Jakarta Sans` (sans corporativa/técnica), `Instrument Serif Italic` (énfasis editorial), `JetBrains Mono` (código y metadatos).
- **Iconografía**: `lucide-react`.
- **Efectos**: `canvas-confetti`.
- **Despliegue**: Vercel (`https://hackco.vercel.app`).

---

## 3. Arquitectura del Proyecto

```
src/
├── app/                      # Next.js App Router (34 rutas)
│   ├── page.tsx              # Landing editorial B2B (10 secciones)
│   ├── start/page.tsx        # Wizard de conversión B2B (Diseño de reto)
│   ├── empresas/             # Vista B2B / Para empresas
│   ├── pricing/              # Modelos de servicio (Pilot, Enterprise, Ecosystem)
│   ├── faq/                  # Preguntas frecuentes operativas y de PI
│   ├── hackathons/           # Directorio y detalle de retos para builders
│   ├── projects/             # Directorio y detalle de prototipos construidos
│   ├── demo/                 # Entorno interactivo de demostración
│   ├── judge/                # Jury OS (Deliberación y evaluación)
│   ├── mentor/               # Workspace de mentoría y feedback
│   ├── app/                  # Workspace del participante (Builder OS)
│   ├── org/[slug]/           # Consola de gestión de la organización anfitriona
│   └── u/[handle]/           # Perfil público de reputación del builder
├── components/
│   ├── landing/              # Secciones modulares de la landing page
│   ├── layout/               # Header, Footer, Navigation
│   ├── ui/                   # Botones, Badges, Inputs, Cards
│   └── common/               # CommandPalette, RoleSwitcher, Icons
├── context/
│   └── PlatformContext.tsx   # Estado global reactivo para simulación y roles
├── config/
│   └── brand.ts              # Configuración de marca y metadatos globales
└── lib/
    ├── demo-data.ts          # Datos demostrativos curados
    └── utils.ts              # Utilidades de clases (clsx, twMerge)
```

---

## 4. Reglas de Código y Buenas Prácticas

### TypeScript & Limpieza
- **Cero errores de TypeScript**: Todo cambio debe compilar limpiamente con `pnpm run build`.
- **Sin `any` arbitrarios**: Tipar interfaces explícitamente (`TeamMember`, `ProgramFormat`, `Submission`, etc.).
- **Cero variables o imports muertos**: Remover cualquier `import` o icono no utilizado.

### Diseño y Frontend
- **Estilo Editorial vs. SaaS Cliché**:
  - Evitar fondos oscuros con orbes fluorescentes violetas, brillos exagerados o gradientes genéricos.
  - Usar fondo off-white (`#FBFBFA`), carbón profundo (`#141517`), azul de marca (`#1846A3`), bordes sutiles (`#E8E8E4`) y fotografía documental auténtica de `public/images/`.
- **Mobile First**:
  - Touch targets mínimos de 44x44px en móviles.
  - Cero desbordamiento horizontal (`overflow-x: hidden`).
  - Textos escalados responsivamente.
- **Accesibilidad**:
  - Contraste WCAG AA en todos los textos e interactivos.
  - Soporte de `prefers-reduced-motion`.

---

## 5. Comandos de Terminal

```bash
# Desarrollo local
pnpm dev

# Compilación y verificación estricta
pnpm run build

# Verificación de linter
pnpm run lint

# Despliegue en producción
vercel --prod --yes
```

---

## 6. Checklist Obligatorio Antes de Confirmar Tareas

1. [ ] ¿El copy cumple con las reglas de honestidad y enfoque B2B?
2. [ ] ¿Se ejecutó `pnpm run build` con 0 errores?
3. [ ] ¿Se ejecutó `pnpm run lint` sin warnings críticos?
4. [ ] ¿Se probaron las rutas afectadas en viewport móvil y desktop?
5. [ ] ¿Se mantuvo intacto el bloque `<!-- BEGIN:nextjs-agent-rules -->`?
- Los archivos nuevos de pruebas son optativos. No crees archivos de pruebas unitarias, de integración, end-to-end o spec, ni nuevos helpers/fixtures exclusivos para pruebas, salvo que el usuario solicite explícitamente su creación o la apruebe primero.
- Una solicitud para implementar, corregir, probar o verificar algo no autoriza por sí sola la creación de archivos nuevos de pruebas. Asume que no están autorizados por defecto; pregunta únicamente cuando crearlos aporte un beneficio concreto, no como paso rutinario.
- Prefiere ejecutar las pruebas existentes y hacer verificaciones directas en el navegador o en runtime sin agregar archivos de pruebas.
- Cuando los cambios de pruebas estén dentro del alcance, verifica el comportamiento observable en lugar de afirmar cadenas del código fuente, formas de implementación o simplemente que existan pruebas.

## Escritura para agentes

Estas reglas pertenecen a AGENTS.md y son la fuente de verdad. Claude y cualquier otro agente deben obedecerlas; CLAUDE.md no las reemplaza.

- Sigue los cuatro principios de Zinsser: simplicidad, brevedad, claridad y humanidad.
- Usa inglés técnico simplificado cuando el contexto sea código, arquitectura o documentación para agentes.
- Antes de entregar texto, revisa y evita los patrones registrados en docs/forbidden-writing-patterns.md si ese archivo existe en el repositorio.
- Si actúas como agente escritor, mantén el contexto utilizado por debajo del 50% de la ventana siempre que sea posible. Divide el trabajo o usa subagentes cuando el volumen pueda degradar la calidad.
