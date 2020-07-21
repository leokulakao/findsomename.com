export class LoginModel {
    public email: string;
    public password: string;

    constructor(req: any) {
      this.email = req.email || '';
      this.password = req.password || '';
    }
}
