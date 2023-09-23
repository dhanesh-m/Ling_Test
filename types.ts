// types.ts

export interface User {
    name: string;
    rank: number;
    bananas: number | string;
    isSearchedUser: boolean;
  }
  export type AppProps = {};
  
  export type AppState = {
    searchedUser: string;
    userList: User[];
    errorMessage: string;
  };
  
  export interface DataObj {
    [key: string]: {
      [x: string]: number;
      name: any;
    };
  }
  
  export type SearchResult = {
    name: string;
  } | null;
  