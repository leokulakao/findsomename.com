import { NameModel } from '../../names/models/name.model';

export class LabelModel {
    public id: string;
    public name: string;
    public names: Array<NameModel>;
    public user: string;

    constructor(req: any) {
      this.id = req._id || '';
      this.name = req.name || '';
      this.names = req.names.map(name => new NameModel(name)) || [];
      this.user = req.user || '';
    }
}
