export type Difficulty = 'fácil' | 'media' | 'difícil';

export interface GameConfiguration {
  difficulty: Difficulty;
  maxAttempts: number;
}

export type GameState = 'config' | 'playing' | 'won' | 'lost';
