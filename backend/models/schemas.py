from pydantic import BaseModel
from typing import List, Optional
from .song import SongInfo

class MoodRequest(BaseModel):
    mood: str

class VibeResponse(BaseModel):
    palette: List[str]
    song_era: str
    weather: str
    life_advice: str
    spirit_object: str
    vibe_score: str
    secret_message: str
    song: Optional[SongInfo] = None
