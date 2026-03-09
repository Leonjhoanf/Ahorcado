import { Difficulty } from '../types/game';

export const getHangmanPrompt = (difficulty: Difficulty): string => {
  return `Genera una única palabra en español para un juego del ahorcado, que sea de dificultad ${difficulty}. Responde *solo* con la palabra, sin puntos, espacios ni texto adicional.`;
};
