import { z } from 'zod';

export const paymentSchema = z.object({
  email: z.string().email(),
  amount: z.number(),
  billingAddress: z.object({
    fullName: z.string().min(1),
    address: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(1),
    zip: z.string().min(1),
    phone: z.string().min(1),
  }),
  paymentInformation: z.object({
    nameOnCard: z.string().min(1),
    cardNumber: z.string().min(1).max(16),
    expiration: z.string().min(1).max(5),
    cvv: z.string().min(1).max(3),
  }),
});

export type PaymentFormSchema = z.infer<typeof paymentSchema>;
