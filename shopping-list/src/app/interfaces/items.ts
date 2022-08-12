export class Items {
  _id: String;
  item_name: String;
  categoryID: String;
  price: Number;
  quantity: Number;

  constructor(
    _id?: String,
    item_name?: String,
    categoryID?: String,
    price?: Number,
    quantity?: Number
  ) {
    this._id = _id!;
    this.item_name = item_name!;
    this.categoryID = categoryID!;
    this.price = price!;
    this.quantity = quantity!;
  }
}
