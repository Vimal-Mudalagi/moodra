from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import vibe

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://moodra-inky.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(vibe.router)
