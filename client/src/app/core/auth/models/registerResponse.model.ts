export class RegisterResponseModel {
    public email: string;

    constructor(req: any) {
      this.email = req.data.email || '';
    }
}
