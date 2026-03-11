from pydantic import BaseModel

class SongInfo(BaseModel):
    title: str
    artist: str
    url: str
    image: str = ""
