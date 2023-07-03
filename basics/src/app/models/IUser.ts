export interface IUser{
  username : string,
  firstName : string,
  lastName : string,
  email : string,
  address : {
    city : string,
    code : string,
    street : string,
  }
}
