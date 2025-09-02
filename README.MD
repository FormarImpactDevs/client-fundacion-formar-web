# Proyecto Formar

Este proyecto es una aplicación web desarrollada con React y Vite. Utiliza diversas bibliotecas y herramientas para ofrecer una experiencia interactiva y moderna.

## Requisitos

- Node.js (versión recomendada: >= 14.0.0)
- pnpm (versión recomendada: >= 8.6.9)

## Instalación

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/tu-usuario/proyectoformar.git
   cd proyectoformar
   ```

2. Instalar las dependencias:

   ```sh
   pnpm install
   ```

3. Crear un archivo `.env` en la raíz del proyecto y definir las variables de entorno necesarias:

   ```env
   VITE_API_URL=https://api.example.com
   VITE_API_KEY=your_api_key_here
   ```

## Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Construye la aplicación para producción.
- `pnpm serve`: Previsualiza la aplicación construida.
- `pnpm lint`: Ejecuta ESLint para analizar el código.

## Desarrollo

Para iniciar el servidor de desarrollo y trabajar en el proyecto, ejecuta:

```sh
pnpm dev
```

Esto abrirá la aplicación en tu navegador por defecto. Cualquier cambio que realices en el código se reflejará automáticamente en el navegador.

## Despliegue

Para construir la aplicación para producción, ejecuta:

```sh
pnpm build
```

Esto generará una carpeta `dist` con los archivos optimizados para producción. Puedes servir estos archivos estáticos utilizando cualquier servidor web de tu preferencia.

Para previsualizar la aplicación construida, ejecuta:

```sh
pnpm serve
```

Esto te permitirá ver cómo se verá tu aplicación en producción.

## Linting

Para asegurarte de que tu código sigue los estándares establecidos, ejecuta:

```sh
pnpm lint
```

Esto analizará tu código y mostrará cualquier advertencia o error que deba ser corregido.

## Contribuciones

Si deseas contribuir a este proyecto, por favor abre un `issue` o envía un `pull request` con tus cambios propuestos.

---

¡Gracias por usar y contribuir a Proyecto Formar!