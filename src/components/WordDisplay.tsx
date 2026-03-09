import React from 'react';

interface Props {
  word: string;
  guessedLetters: Set<string>;
  isGameOver: boolean;
}

export const WordDisplay: React.FC<Props> = ({ word, guessedLetters, isGameOver }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 my-8">
      {word.split('').map((letter, index) => {
        const isGuessed = guessedLetters.has(letter);
        const showLetter = isGuessed || isGameOver;
        const isMissed = isGameOver && !isGuessed;

        return (
          <div
            key={index}
            className={`flex items-center justify-center w-10 h-14 md:w-14 md:h-16 border-b-4 text-3xl md:text-5xl font-bold uppercase transition-all duration-300 ${
              isMissed ? 'border-red-500 text-red-500' : 'border-slate-800 dark:border-slate-200'
            }`}
          >
            <span className={`transform transition-transform duration-500 ${showLetter ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
              {showLetter ? letter : ''}
            </span>
          </div>
        );
      })}
    </div>
  );
};
