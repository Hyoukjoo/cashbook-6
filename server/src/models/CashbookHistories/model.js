export default class CashbookHistories {
  constructor(id, date, description, amount, type, user, category, payMethod) {
    this.id = id;
    this.date = date;
    this.description = description;
    this.amount = amount;
    this.type = type;
    this.user = user;
    this.category = category;
    this.payMethod = payMethod;
  }
}
