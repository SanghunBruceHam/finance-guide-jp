# Overview

This is a Japanese financial education website designed to help investment beginners understand various investment options including stocks, bonds, real estate, and bank deposits. The site features an investment calculator, financial news section, FAQ, and comparison tools to guide users through different investment choices. The application is built as a modern React/Express full-stack web application with a focus on Japanese users and is optimized for Google AdSense monetization.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight React router alternative)
- **UI Framework**: Shadcn/ui components built on top of Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with custom CSS variables for theming, including Japanese-specific design tokens
- **Component Structure**: Modular component architecture with separate UI components, page components, and business logic components

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Setup**: Custom Vite integration for development with HMR support
- **Storage Interface**: Abstracted storage interface with in-memory implementation (designed to be easily swapped for database integration)
- **API Structure**: RESTful API design with /api prefix routing

## Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: User management schema with support for username/password authentication
- **Migration System**: Drizzle Kit for database migrations and schema management
- **Connection**: Configured for Neon Database (serverless PostgreSQL)

## Styling and Design System
- **Design System**: Custom design system based on Shadcn/ui with Japanese financial industry color palette
- **Responsive Design**: Mobile-first approach optimized for Japanese mobile usage patterns
- **Typography**: Noto Sans JP font for proper Japanese text rendering
- **Theme System**: CSS custom properties for consistent theming across components

## Development and Build System
- **Build Tool**: Vite for fast development and optimized production builds
- **Package Manager**: npm with lockfile for dependency management
- **Development Mode**: Hot module replacement with Vite dev server
- **Production Build**: Separate client and server builds with static asset optimization
- **TypeScript**: Strict TypeScript configuration with path mapping for clean imports

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Backend**: Express.js, Node.js HTTP server
- **Build Tools**: Vite, esbuild for server bundling, TypeScript compiler

## Database and ORM
- **Database**: PostgreSQL via Neon Database (@neondatabase/serverless)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session Management**: connect-pg-simple for PostgreSQL session storage

## UI and Styling
- **UI Components**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS, Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Animations**: Class Variance Authority for component variants

## Form and Data Management
- **Forms**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for schema validation, Drizzle-Zod for database schema validation
- **State Management**: TanStack React Query for server state

## Utility Libraries
- **Date Handling**: date-fns for Japanese date formatting
- **Styling Utilities**: clsx, tailwind-merge for conditional styling
- **Development**: tsx for TypeScript execution, various development tools

## Monetization Integration
- **Google AdSense**: Configured for ad placement optimization with placeholder client IDs
- **SEO Optimization**: Meta tags, Open Graph, and Twitter Card integration for social sharing

## Replit-Specific Integrations
- **Development Tools**: Replit Vite plugins for error handling and cartographer integration
- **Deployment**: Configured for Replit's hosting environment with appropriate build and start scripts