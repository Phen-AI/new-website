# Overview

This is a full-stack web application for Phen AI, an AI/technology consulting company. The application is a marketing website showcasing the company's services, industries served, technology capabilities, team information, blog content, and contact functionality. It features a modern, visually appealing design with animations and glassmorphism effects.

The stack consists of:
- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL via Drizzle ORM (configured but minimal implementation)
- **UI**: Shadcn UI components with Tailwind CSS
- **Routing**: Wouter for client-side routing
- **Animations**: GSAP for scroll-triggered animations and Framer Motion for component animations

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Technology Stack**: The frontend uses React 18 with TypeScript, built with Vite for fast development and optimized production builds. The UI is constructed using Shadcn UI components (Radix UI primitives) styled with Tailwind CSS.

**Routing Pattern**: Client-side routing is handled by Wouter, a lightweight React Router alternative. Routes are defined in `client/src/App.tsx` and include pages for landing, industries, technology, about, blog, and contact sections.

**Component Structure**: The application follows a modular component architecture with three main directories:
- `client/src/components/ui/`: Reusable UI primitives from Shadcn
- `client/src/components/layout/`: Shared layout components (Header, Footer)
- `client/src/components/`: Feature-specific components (landing, technology)

**State Management**: React Query (`@tanstack/react-query`) is used for server state management, with a custom query client configured in `lib/queryClient.ts`. Local UI state is managed with React hooks.

**Styling Approach**: The design system uses CSS custom properties for theming, defined in `client/src/index.css`. A dark theme with teal/green accent colors (`--primary: hsl(158, 64%, 52%)`) is the default. Tailwind utilities are extended to support glassmorphism effects and the custom color palette.

**Animation System**: Two animation libraries are used:
- GSAP with ScrollTrigger for scroll-based animations (loaded via CDN in `index.html`)
- Framer Motion for component-level animations and transitions
- Custom hook `useGSAP` abstracts GSAP initialization and provides reduced motion support

**Content Management**: Static content (industries, services, technologies, blog posts, team members) is stored in `client/src/lib/content.ts` as TypeScript interfaces and exported data. This approach allows for type-safe content without requiring a CMS.

## Backend Architecture

**Server Framework**: Express.js server with TypeScript, configured for ES modules. The server handles both API routes and serves the Vite-built frontend in production.

**Development Mode**: In development, Vite runs as middleware within the Express server, enabling HMR (Hot Module Replacement) while maintaining a unified server process. This is configured in `server/vite.ts`.

**API Structure**: API routes are registered in `server/routes.ts` and are prefixed with `/api`. Currently, the route registration is minimal as the application primarily serves static content.

**Storage Layer**: An abstraction layer (`server/storage.ts`) provides a storage interface (`IStorage`) with methods for CRUD operations. The current implementation uses in-memory storage (`MemStorage`) with a basic user model. This design allows for easy swapping to database-backed storage without changing business logic.

**Request Logging**: Custom middleware in `server/index.ts` logs all API requests with timing information, response status, and truncated response bodies for debugging.

## Data Storage Solutions

**Database Configuration**: Drizzle ORM is configured to use PostgreSQL with the Neon serverless driver (`@neondatabase/serverless`). The configuration expects a `DATABASE_URL` environment variable.

**Schema Definition**: Database schema is defined in `shared/schema.ts` using Drizzle's schema builder. Currently includes a `users` table with id, username, and password fields. Zod schemas are generated for validation using `drizzle-zod`.

**Migration Strategy**: Drizzle Kit is configured for schema migrations with the `db:push` script. Migrations are stored in the `./migrations` directory.

**Current State**: While database infrastructure is configured, the application currently uses in-memory storage. The database schema and connection setup are ready for when persistent storage is needed.

## Authentication and Authorization

**Current Implementation**: Basic user model exists in the schema with username/password fields, but no authentication flow is currently implemented.

**Session Management**: The dependency `connect-pg-simple` is installed for PostgreSQL-backed Express sessions, indicating planned session-based authentication.

## External Dependencies

**UI Component Libraries**:
- Radix UI: Headless UI primitives for all interactive components (dialogs, dropdowns, tooltips, etc.)
- Shadcn UI: Pre-styled Radix components following the "New York" style variant
- Tailwind CSS: Utility-first CSS framework for styling

**Animation Libraries**:
- GSAP 3.12.5: Professional-grade JavaScript animation library (loaded via CDN)
- ScrollTrigger: GSAP plugin for scroll-driven animations
- Framer Motion: React animation library for component animations

**Form Handling**:
- React Hook Form: Form state management and validation
- Zod: Schema validation for forms and data
- `@hookform/resolvers`: Bridge between React Hook Form and Zod

**Data Fetching**:
- TanStack Query (React Query): Async state management for server data
- Native Fetch API: Used for HTTP requests with custom wrapper in `lib/queryClient.ts`

**Database & ORM**:
- Drizzle ORM: TypeScript-first ORM for SQL databases
- `@neondatabase/serverless`: PostgreSQL driver for serverless environments
- Drizzle Kit: CLI tool for schema migrations and management

**Development Tools**:
- Vite: Build tool and dev server
- TypeScript: Type safety across the entire stack
- ESBuild: Used for server-side bundling in production
- Replit plugins: Development environment enhancements (runtime error overlay, cartographer, dev banner)

**Fonts**:
- Google Fonts: "Playfair Display" (serif) for headings and "Inter" (sans-serif) for body text, loaded via CDN

**Build & Deployment**:
- The application builds to a `dist` directory with separate client (`dist/public`) and server (`dist/index.js`) outputs
- Production mode serves static files from the build output
- Server runs on port determined by environment variable or defaults to 5000