export class LinkModel {
    public id: string;
    public dateFrom: string;
    public dateTo: string;
    public labelId: string;
    public status: boolean;
    public message: string;

    constructor(req: any) {
      this.id = req._id || '';
      this.dateFrom = req.date_from ? req.date_from : '';
      this.dateTo = req.date_to ? req.date_to : '';
      this.labelId = req.id_label || '';
      this.status = req.status || null;
      this.message = req.message || '';
    }
}
