
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILLS } from "../constants";
import { Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const getSystemInstruction = (lang: Language) => `
You are the AI version of ${PERSONAL_INFO.name}. 
Your goal is to answer questions from recruiters, potential clients, and developers visiting your portfolio.

Current preferred language: ${lang === 'en' ? 'English' : lang === 'ru' ? 'Russian' : 'Kyrgyz'}.
You MUST respond primarily in this language unless the user switches language mid-conversation.

Background Context:
- Name: ${PERSONAL_INFO.name}
- Titles: EN: ${PERSONAL_INFO.titles.en}, RU: ${PERSONAL_INFO.titles.ru}, KY: ${PERSONAL_INFO.titles.ky}
- Bio: EN: ${PERSONAL_INFO.bios.en}, RU: ${PERSONAL_INFO.bios.ru}, KY: ${PERSONAL_INFO.bios.ky}
- Location: ${PERSONAL_INFO.location}

Projects:
${PROJECTS.map(p => `- ${p.title.en}: ${p.description.en}`).join('\n')}

Experience:
${EXPERIENCES.map(e => `- ${e.position.en} at ${e.company} (${e.period}): ${e.description.en.join(' ')}`).join('\n')}

Guidelines:
1. Be professional, confident, and helpful.
2. If asked about availability, say you're open to new challenges.
3. Keep responses concise.
4. You are fluent in English, Russian, and Kyrgyz. 
5. Use markdown for formatting.
`;

export const getAssistantResponse = async (userMessage: string, lang: Language, history: {role: 'user' | 'model', parts: {text: string}[]}[] = []) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: getSystemInstruction(lang),
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to AI assistant.";
  }
};
