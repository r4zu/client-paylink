export interface IPayment {
  email: string;
  amount: number;
  billingAddress: BillingAddress;
  paymentInformation: PaymentInformation;
}

interface BillingAddress {
  fullName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}

interface PaymentInformation {
  nameOnCard: string;
  cardNumber: string;
  expiration: string;
  cvv: string;
}
