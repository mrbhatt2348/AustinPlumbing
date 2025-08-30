# Overview

This is a full-stack web application for "Austin Pro Plumbing," a plumbing company website built with modern TypeScript technologies. The application features a React frontend with a comprehensive UI component library, an Express.js backend API, and PostgreSQL database integration through Drizzle ORM. The site includes sections for services, about information, customer testimonials, and a contact form for lead generation.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight React router alternative)
- **UI Components**: Extensive use of shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Animations**: Framer Motion for smooth animations and interactions
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form schemas

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Development Setup**: Hot-reloading development server with custom middleware for request logging
- **API Structure**: RESTful API endpoints with centralized error handling
- **Request Processing**: JSON body parsing and URL encoding support
- **Development Integration**: Vite development server integration for seamless full-stack development

## Data Storage
- **Database**: PostgreSQL configured through environment variables
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Migrations**: Drizzle Kit for database schema migrations
- **Current Storage**: Memory-based storage implementation (MemStorage class) for development
- **Schema**: Contact submissions table with fields for customer information and service requests

## Authentication & Authorization
- **Current State**: No authentication system implemented
- **Session Handling**: Connect-pg-simple dependency available for PostgreSQL session store (not currently used)

## API Endpoints
- **Contact Form**: POST `/api/contact` - Handles customer contact form submissions with validation
- **Error Handling**: Centralized error handling with proper HTTP status codes and JSON responses
- **Validation**: Zod schema validation for incoming request data

## Build & Deployment
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Production**: Node.js server serving static files and API endpoints
- **Development**: Hot-reload setup with TypeScript compilation checking
- **Asset Management**: Vite handles static asset optimization and bundling

# External Dependencies

## Database Services
- **PostgreSQL**: Primary database (configured via DATABASE_URL environment variable)
- **Neon Database**: Serverless PostgreSQL integration (@neondatabase/serverless)

## UI & Design System
- **Radix UI**: Complete set of accessible UI primitives for React
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets (specifically Font Awesome icons)

## Development Tools
- **Replit Integration**: Development environment support with error overlay and banner
- **Vite Plugins**: Hot reload, runtime error modals, and development tooling
- **TypeScript**: Full type safety across frontend, backend, and shared code

## Form & Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition
- **Hookform Resolvers**: Integration between React Hook Form and Zod

## Animation & Interaction
- **Framer Motion**: Animation library for smooth UI transitions
- **Embla Carousel**: Carousel/slider component functionality

## Utilities
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional className utility
- **class-variance-authority**: Component variant management
- **cmdk**: Command menu/palette functionality