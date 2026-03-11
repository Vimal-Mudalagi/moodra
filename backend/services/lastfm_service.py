import os
import requests
from dotenv import load_dotenv

load_dotenv()
LASTFM_API_KEY = os.getenv("LASTFM_API_KEY", "a0315449843f5e51c321aeee0fec4853")
LASTFM_API_URL = "http://ws.audioscrobbler.com/2.0/"

import random

def get_song_for_mood(mood: str):
    params = {
        "method": "tag.gettoptracks",
        "tag": mood.lower(),
        "api_key": LASTFM_API_KEY,
        "format": "json",
        "limit": 10
    }
    response = requests.get(LASTFM_API_URL, params=params)
    response.raise_for_status()
    data = response.json()
    tracks = data.get("tracks", {}).get("track", [])
    if not tracks:
        return None
    track = random.choice(tracks)
    return {
        "title": track.get("name"),
        "artist": track.get("artist", {}).get("name"),
        "url": track.get("url"),
        "image": ""
    }
