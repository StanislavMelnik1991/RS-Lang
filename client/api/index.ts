import {
  CreateResp,
  CreateUserWordReq,
  CreateUserWordResp,
  LoginResp,
  User,
  UserWord,
} from '../types';

const baseLink = 'https://stanislau-rs-lang.herokuapp.com/';

class Controller {
  baseLink: string;

  options?: string;

  token?: string;

  userId?: string;

  constructor(link: string) {
    this.baseLink = link;
  }

  async createUser(user: User) {
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
      this.token = content.token;
      this.userId = content.userId;
    }
    return content;
  }

  async createUserWord({ userId, word, wordId }: CreateUserWordReq) {
    if (!this.token) {
      throw new Error('unauthorized user');
    }
    const rawResponse = await fetch(`${this.baseLink}/users/${userId}/words/${wordId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(word),
    });
    const content: CreateUserWordResp = await rawResponse.json();

    return content;
  }

  async getUserWord({ userId, wordId }: UserWord) {
    if (!this.token) {
      throw new Error('unauthorized user');
    }
    const rawResponse = await fetch(`https://<your-app-name>.herokuapp.com/users/${userId}/words/${wordId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
      },
    });
    const content: CreateUserWordResp = await rawResponse.json();

    return content;
  }
}

export default new Controller(baseLink);
