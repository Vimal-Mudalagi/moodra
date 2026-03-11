from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import vibe

app = FastAPI()

origins = [
    "http://localhost:5173",
    "https://moodra-inky.vercel.app",
    "https://moodra-grwz.onrender.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"] ,
    allow_headers=["*"]
)

app.include_router(vibe.router)
