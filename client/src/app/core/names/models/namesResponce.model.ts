import { NameModel } from './name.model';

export class NamesResponceModel {
    public names: Array<NameModel>;

    constructor(req: any) {
      this.names = req.data.map(name => new NameModel(name)) || [];
    }
}
