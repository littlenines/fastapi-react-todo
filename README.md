# FastAPI + React Todo

A small todo app built to explore **FastAPI**. The backend is the focus: routing, request validation with SQLModel/Pydantic, dependency injection and raw SQL against SQLite. A React frontend uses the API.

## Stack

- **Backend:** FastAPI, SQLModel, SQLite (queries written in raw SQL), managed with [uv](https://docs.astral.sh/uv/)
- **Frontend:** React 19, TypeScript, Vite+, managed with pnpm

## Project structure

```
backend/
  app/
    main.py            # FastAPI app, CORS, startup
    core/database.py   # engine and session
    todos/
      models.py        # SQLModel schemas
      repository.py    # raw SQL queries
      router.py        # API routes
frontend/
  src/
    services/          # API client (fetch)
    hooks/             # state and logic
    components/        # UI
```

## Running locally

**Backend** (http://localhost:8000, interactive docs at http://localhost:8000/docs):

```bash
cd backend
uv run fastapi dev app/main.py
```

**Frontend** (http://localhost:5173):

```bash
cd frontend
pnpm install
pnpm dev
```

## API

| Method | Path | Description |
|---|---|---|
| `GET` | `/todos` | List all todos |
| `POST` | `/todos` | Create a todo |
| `PATCH` | `/todos/{todo_id}` | Update a todo's title and/or done status |
| `DELETE` | `/todos/{todo_id}` | Delete a todo |
