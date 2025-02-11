# Weather App

A modern weather application built with Next.js that provides real-time weather information with a clean user interface.

## Features

- Real-time weather data
- Current location detection
- Favorites system for saved locations
- Responsive design with Bootstrap
- Dark theme interface

## Tech Stack

- [Next.js](https://nextjs.org)
- Typescript
- Zustand for state management
- React Bootstrap for UI components
- Lucide React for icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/amirali-kadenov/weather-app.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to http://localhost:3000 to see the app.


## Project Structure

The project follows [Feature-Sliced Design](https://feature-sliced.design/) architecture:

- src/
- ├── app/        # Application initialization logic
- ├── pages/      # Pages layer
- ├── widgets/    # Complex components composition
- ├── features/   # User interactions, features
- ├── entities/   # Business entities
- └── shared/     # Reusable infrastructure

## Available Scripts

- npm run dev - Start development server
- npm run build - Build for production
- npm run start - Start production server
- npm run lint - Run ESLint