import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Keyboard } from '../Keyboard';

describe('Keyboard', () => {
  it('should render all the letters of the alphabet', () => {
    render(<Keyboard guessedLetters={new Set()} onLetterPress={() => {}} disabled={false} />);
    const keyboard = screen.getByTestId('keyboard');
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    
    letters.split('').forEach(letter => {
      const button = screen.getByRole('button', { name: letter });
      expect(button).toBeInTheDocument();
    });
  });

  it('should disable buttons for guessed letters', () => {
    const guessedLetters = new Set(['a', 'b']);
    render(<Keyboard guessedLetters={guessedLetters} onLetterPress={() => {}} disabled={false} />);
    
    const buttonA = screen.getByRole('button', { name: 'a' });
    const buttonB = screen.getByRole('button', { name: 'b' });
    const buttonC = screen.getByRole('button', { name: 'c' });

    expect(buttonA).toBeDisabled();
    expect(buttonB).toBeDisabled();
    expect(buttonC).not.toBeDisabled();
  });

  it('should call onLetterPress when a letter button is clicked', async () => {
    const onLetterPress = vi.fn();
    render(<Keyboard guessedLetters={new Set()} onLetterPress={onLetterPress} disabled={false} />);
    
    const buttonA = screen.getByRole('button', { name: 'a' });
    await userEvent.click(buttonA);

    expect(onLetterPress).toHaveBeenCalledWith('a');
  });

  it('should disable all buttons when the disabled prop is true', () => {
    render(<Keyboard guessedLetters={new Set()} onLetterPress={() => {}} disabled={true} />);
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    
    letters.split('').forEach(letter => {
      const button = screen.getByRole('button', { name: letter });
      expect(button).toBeDisabled();
    });
  });
});
