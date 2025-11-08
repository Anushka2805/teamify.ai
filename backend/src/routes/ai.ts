const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// ✅ Pitch generator route
router.post("/generate-pitch", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt missing" });

    const result = await model.generateContent(prompt);
    res.json({ reply: result.response.text() });

  } catch (err) {
    console.error("❌ AI ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Chatbot route
router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message missing" });

    const result = await model.generateContent(message);
    res.json({ reply: result.response.text() });

  } catch (err) {
    console.error("❌ Chat Error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
