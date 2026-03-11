# How to Run MOODRA

## Backend (FastAPI)

1. **Install Python 3.10+**
2. Navigate to `backend/`:
   ```sh
   cd backend
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Copy `.env.example` to `.env` and add your Groq API key:
   ```sh
   cp .env.example .env
   # Edit .env and set GROQ_API_KEY
   ```
5. Start the FastAPI server:
   ```sh
   uvicorn main:app --reload --port 8000
   ```

## Frontend (React + Vite)

1. Navigate to `frontend/`:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Vite dev server:
   ```sh
   npm run dev
   ```

## Access the App
- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Click a mood tile to get your vibe reading!

## Troubleshooting
- Make sure backend is running on port 8000 and frontend on 5173.
- CORS is configured for localhost:5173.
- If Groq API fails, check your API key in `.env`.
