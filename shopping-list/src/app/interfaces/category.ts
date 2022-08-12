export class Categories {
    _id: String;
    category: String;
  
    constructor(
      _id?: String,
      category?: String,
    ) {
      this._id = _id!;
      this.category = category!;
    }
  }
  