interface User {
  id: number;
  username: string;
  password: string;
}

interface UserLogin extends Omit<UserActivation, "id"> {
  id?: number;
}

export type { User, UserLogin };
