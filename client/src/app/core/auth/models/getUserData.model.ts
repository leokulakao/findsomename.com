export class GetUserDataModel {
    public token: string;

    constructor(req: any) {
      this.token = req.token || '';
    }
}
