import React, { useEffect } from 'react';

interface Props {
  guessedLetters: Set<string>;
  onLetterPress: (letter: string) => void;
  disabled: boolean;
}

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const Keyboard: React.FC<Props> = ({ guessedLetters, onLetterPress, disabled }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return;
      const key = e.key.toLowerCase();
      if (LETTERS.includes(key) && !guessedLetters.has(key)) {
        onLetterPress(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [guessedLetters, onLetterPress, disabled]);

  return (
    <div data-testid="keyboard" className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mt-8">
      {LETTERS.map((letter) => {
        const isGuessed = guessedLetters.has(letter);
        return (
          <button
            key={letter}
            onClick={() => onLetterPress(letter)}
            disabled={isGuessed || disabled}
            className={`w-10 h-12 md:w-12 md:h-14 rounded-lg font-bold text-lg transition-all duration-200 ${
              isGuessed
                ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-50'
                : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-sm hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 active:scale-95'
            }`}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};
