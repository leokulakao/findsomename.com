export class UserModel {
    public id: string;
    public email: string;
    public permission: string;

    constructor(req: any) {
        this.id = req._id || '';
        this.email = req.email || '';
        this.permission = req.permission || '';
    }
}
