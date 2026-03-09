import { GoogleGenAI } from '@google/genai';
import { getHangmanPrompt } from '../utils/prompts';
import { Difficulty } from '../types/game';

// Para uso local fuera de AI Studio, puedes reemplazar process.env.GEMINI_API_KEY con tu clave:
// const apiKey = 'YOUR_GEMINI_API_KEY';
const apiKey = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey });

export const fetchWordFromGemini = async (difficulty: Difficulty): Promise<string> => {
  try {
    const prompt = getHangmanPrompt(difficulty);
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7, // Un poco de aleatoriedad para obtener palabras variadas
      }
    });
    
    const word = response.text?.trim().toUpperCase();
    if (!word) throw new Error('No se recibió ninguna palabra');
    
    // Limpiar acentos para simplificar el juego
    return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } catch (error) {
    console.error('Error fetching word from Gemini:', error);
    throw error;
  }
};
