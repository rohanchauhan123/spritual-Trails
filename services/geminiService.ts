import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  message: string, 
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Convert simplified history to format if needed, or just send last message with context
    // For simplicity in this demo, we will use a fresh generateContent with system instruction context
    // In a real app, we'd use ai.chats.create for stateful history
    
    // Construct a prompt that includes previous context to simulate chat
    const contextPrompt = history.map(h => `${h.role === 'user' ? 'User' : 'Guide'}: ${h.text}`).join('\n');
    const fullPrompt = `${contextPrompt}\nUser: ${message}\nGuide:`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: fullPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I sense a disturbance in the connection. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The spirits are quiet right now. Please check your connection or API key.";
  }
};