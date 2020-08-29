export class EditUserModel {
    public id: string;
    public permission: string;

    constructor(req: any) {
      this.id = req.id || '';
      this.permission = req.permission || '';
    }
}
