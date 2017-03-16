export class Item {
  id: number;
  description: string = "";

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values)
  }
}
