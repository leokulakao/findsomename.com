export class NameModel {
    public name: string;
    public population: number;

    constructor(req: any) {
      this.name = req.name || '';
      this.population = req.quantity || 0;
    }
}
