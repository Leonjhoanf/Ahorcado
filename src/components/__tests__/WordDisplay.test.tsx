import { render, screen, within } from '@testing-library/react';
import { WordDisplay } from '../WordDisplay';

describe('WordDisplay', () => {
  it('should display the word with correctly guessed letters', () => {
    const word = 'hello';
    const guessedLetters = new Set(['h', 'o']);
    render(<WordDisplay word={word} guessedLetters={guessedLetters} isGameOver={false} />);
    
    const wordDisplay = screen.getByTestId('word-display');
    const letters = within(wordDisplay).getAllByRole('character');
    expect(letters[0]).toHaveTextContent('h');
    expect(letters[1]).toHaveTextContent('');
    expect(letters[2]).toHaveTextContent('');
    expect(letters[3]).toHaveTextContent('');
    expect(letters[4]).toHaveTextContent('o');
  });

  it('should display all underscores when no letters are guessed', () => {
    const word = 'hello';
    const guessedLetters = new Set<string>();
    render(<WordDisplay word={word} guessedLetters={guessedLetters} isGameOver={false} />);
    
    const wordDisplay = screen.getByTestId('word-display');
    const letters = within(wordDisplay).getAllByRole('character');
    letters.forEach(letter => {
      expect(letter).toHaveTextContent('');
    });
  });

  it('should display the full word when all letters are guessed', () => {
    const word = 'hello';
    const guessedLetters = new Set(['h', 'e', 'l', 'o']);
    render(<WordDisplay word={word} guessedLetters={guessedLetters} isGameOver={false} />);
    
    const wordDisplay = screen.getByTestId('word-display');
    const letters = within(wordDisplay).getAllByRole('character');
    expect(letters[0]).toHaveTextContent('h');
    expect(letters[1]).toHaveTextContent('e');
    expect(letters[2]).toHaveTextContent('l');
    expect(letters[3]).toHaveTextContent('l');
    expect(letters[4]).toHaveTextContent('o');
  });

  it('should display the full word when the game is over', () => {
    const word = 'hello';
    const guessedLetters = new Set<string>();
    render(<WordDisplay word={word} guessedLetters={guessedLetters} isGameOver={true} />);
    
    const wordDisplay = screen.getByTestId('word-display');
    const letters = within(wordDisplay).getAllByRole('character');
    expect(letters[0]).toHaveTextContent('h');
    expect(letters[1]).toHaveTextContent('e');
    expect(letters[2]).toHaveTextContent('l');
    expect(letters[3]).toHaveTextContent('l');
    expect(letters[4]).toHaveTextContent('o');
  });
});
