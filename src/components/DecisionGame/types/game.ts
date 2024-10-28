export interface Question {
    id: string;
    text: string;
    options: Option[];
  }
  
  export interface Option {
    text: string;
    nextQuestionId: string | null;
    value: boolean;
  }
  
  export interface GameResult {
    text: string;
    description: string;
  }