import { useState } from "react";

export default function useVibe() {
  const [loading, setLoading] = useState(false);
  const [vibe, setVibe] = useState(null);

  const fetchVibe = async (mood) => {
    setLoading(true);
    setVibe(null);
    try {
      const res = await fetch("https://moodra-grwz.onrender.com/api/vibe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood }),
      });
      let text = await res.text();
      // Parse Groq JSON safely
      text = text.trim();
      if (text.startsWith("```json")) text = text.slice(7);
      if (text.endsWith("```")) text = text.slice(0, -3);
      const data = JSON.parse(text);
      setVibe(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return { loading, vibe, fetchVibe };
}
