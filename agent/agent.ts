import { defineAgent } from "eve";

export default defineAgent({
  "model": "google/gemini-3.8-flash",
  "reasoning": "medium",
  "compaction": {
    "threshold": 0.7
  }
});
