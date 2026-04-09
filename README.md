# Configurable Metrics Dashboard

A lightweight, interactive dashboard where you can add, remove, and reorder metric cards — with your layout saved automatically.

**Live Demo:** [configurable-metrics-dashboard.netlify.app](https://configurable-metrics-dashboard.netlify.app/)

---

## What is this?

This is a React-based dashboard that displays metric cards (e.g. Followers, Likes, Revenue). You can fully customize which cards appear and in what order — and everything is saved in your browser so it persists between visits.

---

## Features

- **Add cards** — create new metric cards with a name, value, and emoji symbol
- **Remove cards** — delete cards with a confirmation modal to prevent accidents
- **Drag & drop reordering** — rearrange cards by dragging them to a new position
- **Persistent layout** — all changes are saved in `localStorage` and restored on page reload
- **Touch device support** — drag and drop works on mobile and tablet too

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite](https://vitejs.dev/) | Build tool and dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) | Drag and drop (React 19 compatible fork of `react-beautiful-dnd`) |
| [React Router v7](https://reactrouter.com/) | Client-side routing |
| [React Context API](https://react.dev/reference/react/createContext) | Global state management |

---

## Getting Started

### Prerequisites

Make sure you have **Node.js** (v18 or higher) and **npm** installed.

```bash
node -v
npm -v
```

### 1. Clone the repository

```bash
git clone https://github.com/your-username/configurable-metrics-dashboard.git
cd configurable-metrics-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy to any static host (Netlify, Vercel, GitHub Pages, etc.).

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Top bar with the "Add Card" button
│   ├── Cards.jsx       # Drag-and-drop card grid
│   ├── Card.jsx        # Individual metric card with delete action
├── pages/
│   ├── Home.jsx        # Main dashboard page
├── context/
│   ├── CardContext.jsx # Global state + localStorage persistence
├── App.jsx             # App entry with routing setup
└── main.jsx            # React root mount
```

---

## How It Works

### State Management
All card data lives in `CardContext`. On first load, it reads from `localStorage`. If nothing is saved yet, it falls back to 6 default cards (Followers, Page Views, Likes, Comments, Revenue, Shares). Every time the cards array changes, it is automatically written back to `localStorage`.

### Drag & Drop
Cards are wrapped with `@hello-pangea/dnd`'s `DragDropContext`, `Droppable`, and `Draggable`. When a card is dropped in a new position, the array is re-ordered and saved — so the new order persists on reload.

### Delete with Confirmation
Clicking the trash icon on a card opens a modal asking you to confirm. This prevents accidental deletions.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

---

## Deployment

This project is deployed on **Netlify**. To deploy your own copy:

1. Push the repo to GitHub
2. Connect it to [Netlify](https://netlify.com)
3. Set build command to `npm run build` and publish directory to `dist`
4. Deploy

---

## License

MIT — free to use and modify.
