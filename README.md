# MOODRA

MOODRA is a poetic, funny, and slightly unhinged vibe oracle web app. Click a mood tile and get a personalized vibe reading powered by Groq AI.

## Features
- 10 mood tiles, each with its own vibe
- Backend: FastAPI (Python) with Groq API integration
- Frontend: React (Vite) + Tailwind CSS
- Floating animated cat, glassmorphism UI, poetic results

## Stack
- Frontend: React (Vite), Tailwind CSS
- Backend: FastAPI, Groq API, Python-dotenv
- AI: Groq (mixtral-8x7b-32768 or llama3-70b-8192)

## Moods
🌧 Melancholic, ☁️ Numb, 🔥 Rage, 🌊 Restless, 🌙 Dreamy, 🌸 Tender, ⚡ Electric, 😶 Empty, 🍂 Nostalgic, 🌀 Chaotic

## UI Spec
- Dark, atmospheric, lo-fi aesthetic
- Playfair Display (headings), Space Mono (data)
- Glassmorphism mood tiles, glowing palette, animated cat

## Backend API
- POST `/api/vibe` — returns poetic JSON vibe reading

## License
MIT
