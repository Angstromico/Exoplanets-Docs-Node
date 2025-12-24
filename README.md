# 🪐 Exoplanets Project

A Node.js + TypeScript application focused on analyzing habitable exoplanets using data from NASA's Kepler Space Telescope.

## 🚀 Overview

This project reads and processes exoplanet data from the local `kepler_data.csv` file to identify planets that are potentially habitable based on specific criteria. It effectively demonstrates file I/O operations and data parsing in a modern Node.js environment.

## ✨ Features

- **Data Parsing**: Streams and processes the `kepler_data.csv` dataset.
- **TypeScript**: Strict type checking for robust data handling.
- **Fast Development**: Uses `tsx` for instant execution.
- **Code Quality**: Pre-configured with ESLint and Prettier.

## 📋 Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

## 🛠️ Quick Start

```bash
# Install dependencies
npm install

# Run the project (reads the CSV data)
npm run dev

# Build for production
npm run build
npm start
```

## 📜 Available Scripts

| Script           | Description                           |
| ---------------- | ------------------------------------- |
| `npm run dev`    | Run with hot-reload (no build needed) |
| `npm run build`  | Compile TypeScript to JavaScript      |
| `npm start`      | Run compiled code                     |
| `npm test`       | Run tests with Vitest                 |
| `npm run lint`   | Check code quality                    |
| `npm run format` | Format code with Prettier             |

## 📁 Project Structure

```text
.
├── src/
│   └── index.ts    # Main application logic
├── kepler_data.csv # Exoplanet dataset
├── package.json    # Project dependencies and scripts
└── ...
```

## 📄 License

MIT
