# CLAUDE.md - Reference Guide

## Build/Lint/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting
- `npx next test <file>` - Run single test file
- `npx next test` - Run all tests

## Code Style Guidelines
- **TypeScript**: Use strict typing with proper interfaces/types
- **Components**: React functional components with proper prop typing
- **CSS**: Use Tailwind with proper class organization
- **Imports**: Order: React, Next.js, external, internal (absolute paths)
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Error Handling**: Use try/catch blocks with proper error messages
- **File Structure**: Follow Next.js App Router conventions
- **Client Components**: Mark with "use client" directive when needed
- **Paths**: Use absolute imports with @/ prefix following tsconfig paths

## Project Structure
- Next.js 15+ project with App Router
- React 19+
- TypeScript for type safety
- Tailwind CSS for styling
- Shadcn/UI component library