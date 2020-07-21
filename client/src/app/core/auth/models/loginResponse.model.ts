export class LoginResponseModel {
    public token: string;

    constructor(req: any) {
      this.token = req.email || '';
    }
}
