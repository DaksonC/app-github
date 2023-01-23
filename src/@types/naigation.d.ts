export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: { avatar_url: string };
      Search: { avatar_url: string, username: string };
      Repos: { name: string };
    }
  }
}