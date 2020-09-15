import { LabelModel } from './label.model';

export class LabelResponceModel {
    public labels: Array<LabelModel>;

    constructor(req: any) {
      this.labels = req.data.map(name => new LabelModel(name)) || [];
      console.log(req);
    }
}
