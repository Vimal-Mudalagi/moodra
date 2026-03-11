
import os
import requests
from dotenv import load_dotenv
from models.schemas import VibeResponse
from .lastfm_service import get_song_for_mood

load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

SYSTEM_PROMPT = (
    "You are a chaotic poetic vibe oracle who is 40% deep, 40% funny, and 20% unhinged. "
    "Given a mood, return ONLY a raw JSON object (no markdown, no backticks, no explanation) "
    "with exactly these keys:\n"
    "- palette: array of 3 hex color strings matching the vibe\n"
    "- song_era: evocative music era/aesthetic (e.g. 'late 2000s indie sleeper, headphones on the bus')\n"
    "- weather: poetic weather description (e.g. '3am fog rolling in from somewhere you've never been')\n"
    "- life_advice: one short line — mix soft wisdom with light roast (e.g. 'You're not a main character. You're the deleted scene.')\n"
    "- spirit_object: a random object embodying this vibe (e.g. 'a cassette tape found in a stranger's car')\n"
    "- vibe_score: a made-up fun metric string (e.g. '67% dissolved' or '91% that girl but make it concerning')\n"
    "- secret_message: short mysterious one-liner, slightly unhinged\n"
    "Be poetic, unexpected, oddly personal, mildly funny, never cringe."
)

MODEL = "llama-3.3-70b-versatile"


def get_vibe(mood: str) -> VibeResponse:
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": f"Mood: {mood}"}
        ]
    }
    try:
        response = requests.post(GROQ_API_URL, json=payload, headers=headers)
        print("Groq API response status:", response.status_code)
        print("Groq API response text:", response.text)
        response.raise_for_status()
        content = response.json()["choices"][0]["message"]["content"]
        content = content.strip()
        if content.startswith("```json"):
            content = content[7:]
        if content.endswith("```"):
            content = content[:-3]
        vibe_data = VibeResponse.parse_raw(content)
        # Add song info from Last.fm
        song = get_song_for_mood(mood)
        if song:
            from models.song import SongInfo
            vibe_data.song = SongInfo(**song)
        return vibe_data
    except Exception as e:
        print("Groq API error:", e)
        raise Exception(f"Failed to parse Groq response: {e}")
