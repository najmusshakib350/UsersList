export interface IusignupState {
  email: string;
  password: string;
  errMsg: string;
  token: string;
}
export interface IcheckUserInfo {
  emailIsEmpty: string;
  passwordIsEmpty: string;
}

export interface IuserList {
  page: number;
  total_pages: number;
  userlist: [
    {
      avatar: string;
      email: string;
      first_name: string;
      id: number;
      last_name: string;
    }
  ];
}

export interface Iuser {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}
