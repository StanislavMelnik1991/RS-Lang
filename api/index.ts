import {
  CreateResp,
  CreateUser,
  CreateUserWordReq,
  CreateUserWordResp,
  LoginResp,
  User,
  UserWord,
  WordsResp,
} from '../types';

const baseLink = 'https://stanislau-rs-lang.herokuapp.com';

class Controller {
  baseLink: string;

  options?: string;

  token?: string;

  userId?: string;

  constructor(link: string) {
    this.baseLink = link;
  }

  async createUser(user: CreateUser) {
    const rawResponse = await fetch(`${this.baseLink}/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const content: CreateResp = await rawResponse.json();

    return content;
  }

  async loginUser(user: User) {
    const rawResponse = await fetch(`${this.baseLink}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const content: LoginResp = await rawResponse.json();
    if (content.token && content.userId) {
      this.setToken(content.token);
      this.userId = content.userId;
    }
    return content;
  }

  async getWords({ page, group }: { page: string, group: string }) {
    const rawResponse = await fetch(`${this.baseLink}/words?page=${page}&group=${group}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const content: WordsResp = await rawResponse.json();
    return content;
  }

  async setUserWord({ userId, word, wordId }: CreateUserWordReq, method: 'PUT' | 'POST' | 'DELETE' | 'GET') {
    if (!this.token) {
      throw new Error('unauthorized user');
    }
    await fetch(`${this.baseLink}/users/${userId}/words/${wordId}`, {
      method,
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(word),
    });
  }

  async getUserWord({ userId, wordId }: Partial<UserWord>) {
    if (!this.token || !userId) {
      throw new Error('unauthorized user');
    }
    const rawResponse = await fetch(`${this.baseLink}/users/${userId}/words${wordId || ''}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (wordId) {
      const content: CreateUserWordResp = await rawResponse.json();
      return content;
    }
    const content: CreateUserWordResp[] = await rawResponse.json();
    return content;
  }

  setToken(token: string) {
    this.token = token;
  }
}
export default new Controller(baseLink);
