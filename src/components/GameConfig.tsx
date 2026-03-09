import React from 'react';
import { Difficulty, GameConfiguration } from '../types/game';

interface Props {
  onSelectDifficulty: (config: GameConfiguration) => void;
}

export const GameConfig: React.FC<Props> = ({ onSelectDifficulty }) => {
  const difficulties: { label: string; value: Difficulty; attempts: number; desc: string }[] = [
    { label: 'Fácil', value: 'fácil', attempts: 8, desc: '4-5 letras, 8 intentos' },
    { label: 'Medio', value: 'media', attempts: 6, desc: '6-8 letras, 6 intentos' },
    { label: 'Difícil', value: 'difícil', attempts: 4, desc: '9+ letras, 4 intentos' },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-6 text-center animate-in fade-in zoom-in duration-500">
      <div className="max-w-md space-y-4">
        <h2 className="text-2xl font-semibold">¡Hola! Soy Gemini.</h2>
        <p className="text-lg opacity-80">
          He pensado en una palabra para ti. Elige una dificultad para empezar...
        </p>
      </div>
      <div className="grid gap-4 w-full max-w-sm">
        {difficulties.map((diff) => (
          <button
            key={diff.value}
            onClick={() => onSelectDifficulty({ difficulty: diff.value, maxAttempts: diff.attempts })}
            className="flex flex-col items-center p-4 rounded-xl border-2 border-transparent bg-slate-100 dark:bg-slate-800 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200"
          >
            <span className="text-xl font-bold">{diff.label}</span>
            <span className="text-sm opacity-70">{diff.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
