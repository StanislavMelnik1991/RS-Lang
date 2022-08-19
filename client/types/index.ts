export interface User { email: string; password: string; }
export interface CreateResp { id: string, email: string }
export interface LoginResp { message: string, token: string, userId: string }
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