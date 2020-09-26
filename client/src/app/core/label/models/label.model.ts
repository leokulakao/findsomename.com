import { NameModel } from '../../names/models/name.model';
import { LinkModel } from '../../link/models/link.model';

export class LabelModel {
    public id: string;
    public name: string;
    public names: Array<NameModel>;
    public user: string;
    public link: LinkModel;

    constructor(req: any) {
      this.id = req._id || '';
      this.name = req.name || '';
      this.names = req.names ? req.names.map(name => new NameModel(name)) || [] : [];
      this.user = req.user || '';
      this.link = req.link ? new LinkModel(req.link) : null;
    }
}
