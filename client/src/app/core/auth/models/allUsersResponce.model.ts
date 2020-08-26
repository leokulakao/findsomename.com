import { UserModel } from './user.model';

export class AllUsersResponceModel {
    public users: Array<UserModel>;

    constructor(req: any) {
      this.users = req.data.map(name => new UserModel(name)) || [];
    }
}
