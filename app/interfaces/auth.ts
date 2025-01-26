

export type AuthProviderGoogle = {
  provider: string;
  idTokenGoogle: string;
  user: {
    name: string;
    email: string;
    image?: string;
  };
};

export type AuthLogin = {
  email: string;
  password: string;
}
