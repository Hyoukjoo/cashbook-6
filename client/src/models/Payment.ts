import { PaymentDto } from "apis/history/dto";

class Payment {
  id?: number;
  name: string;

  constructor(dto: PaymentDto) {
    Object.assign(this, dto);
  }

  static create(dto: PaymentDto) {
    const model = new Payment(dto);
    return model;
  }
}

export default Payment;
