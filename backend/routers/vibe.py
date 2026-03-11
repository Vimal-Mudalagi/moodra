from fastapi import APIRouter, HTTPException
from models.schemas import MoodRequest, VibeResponse
from services.groq_service import get_vibe

router = APIRouter(prefix="/api", tags=["vibe"])

@router.post("/vibe", response_model=VibeResponse)
def vibe_endpoint(request: MoodRequest):
    try:
        vibe = get_vibe(request.mood)
        return vibe
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
