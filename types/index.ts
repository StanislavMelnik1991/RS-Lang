export interface User { email: string; password: string; }
export interface CreateUser extends User { name: string}
export interface CreateResp { id: string, email: string }
export interface LoginResp { message: string, token: string, userId: string, name: string }
export interface CreateUserWordReq extends UserWord { word: Word }
export interface CreateUserWordResp extends Word { id: string; wordId: string; }
interface Word {
  difficulty: Difficulty;
  optional?: {
    testFieldString: string;
    testFieldBoolean: boolean;
  }
}

export type WordType = {
  id: string,
  group: string,
  page: 0,
  word: string,
  image: string,
  audio: string,
  audioMeaning: string,
  audioExample: string,
  textMeaning: string,
  textExample: string,
  transcription: string,
  wordTranslate: string,
  textMeaningTranslate: string,
  textExampleTranslate: string
};

export type WordsResp = Array<WordType>;

export interface UserWord { userId: string; wordId: string; }

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export interface MemberCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  github: string;
  index: number;
}

export type Difficulty = 'weak' | 'hard';
