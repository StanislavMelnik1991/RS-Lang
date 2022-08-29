export interface User { email: string; password: string; }
export interface CreateUser extends User { name: string}
export interface CreateResp { id: string, email: string }
export interface LoginResp { message: string, token: string, userId: string, name: string }
export interface CreateUserWordReq extends UserWord { word: Word }
export interface CreateUserWordResp extends Word { id: string; wordId: string; }
interface Word {
    difficulty: string;
    optional: {
        testFieldString: string;
        testFieldBoolean: boolean;
    }
}
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