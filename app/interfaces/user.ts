export interface UserGoole {
  name: string;
  email: string;
  image?: string;
}

export interface SessionGoole {
  user: UserGoole;
}
