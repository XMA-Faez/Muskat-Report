# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js project created with `create-next-app`. It appears to be a data presentation application, potentially for visualizing sales data from the CSV files in the data directory.

## Commands

### Development

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Technology Stack

- **Framework**: Next.js 15.3.2
- **UI**: React 19.0.0
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Linting**: ESLint 9

## Project Structure

- `/app` - Next.js App Router structure (pages, layouts)
- `/data` - CSV data files for sales and product information
- `/public` - Static assets (SVGs)

## Data Files

The project contains several CSV files in the `/data` directory with sales and product information:
- Net sales over time
- Bundle item versus non-bundle sales
- Total sales by product
- Product exports (including Spanish version)