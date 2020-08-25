export class NameModel {
    public id: string;
    public name: string;
    public population: number;
    public hide: boolean;

    constructor(req: any) {
      this.id = req._id || '';
      this.name = req.name || '';
      this.population = req.quantity || 0;
      this.hide = req.hide || false;
    }
}
