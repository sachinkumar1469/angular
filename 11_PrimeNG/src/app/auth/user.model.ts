


export class User{
  email!:string;
  password!:string;
  private _token!:string|null;

  public get token(){
    return this._token;
  }

}
