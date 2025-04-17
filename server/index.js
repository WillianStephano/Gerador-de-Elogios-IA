require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");
const { log } = require("console");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/api/elogio", async (req, res) => {
  console.log("Recebendo requisição:", req.body);

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_KEY,
  });

  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ text: req.body.prompt }],
    });

    const responseText =
      result.text || result.response?.text() || result.response;

    res.json({ elogio: responseText });
  } catch (error) {
    console.error("Erro no servidor:", error);
    res.status(500).json({ error: "Erro ao processar sua requisição" });
  }
});

app.use(express.static("../client"));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
