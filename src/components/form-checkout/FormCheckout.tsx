'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { PaymentFormSchema, paymentSchema } from './schema';

import { IPayment } from '../../../types/paylink';
import { createPayment } from '@/app/api/paylink/apiPaylink';

import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Separator } from '../ui/Separator';

export default function FormCheckout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<PaymentFormSchema>({
    resolver: zodResolver(paymentSchema),
  });
  const queryClient = useQueryClient();

  useEffect(() => {
    setValue('amount', 2999.98);
  }, [setValue]);

  const mutation = useMutation({
    mutationFn: ({ data }: { data: IPayment }) => createPayment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
      alert('Great! Your payment has been processed.');
      reset();
    },
  });

  const onSubmit = (data: PaymentFormSchema) => {
    mutation.mutate({ data });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:mr-30 lg:mb-0 md:mr-0 md:mb-10"
    >
      <div className="font-bold text-xl text-gray-600">Contact Information</div>

      <div className="text-xs mb-4">
        You are curently checking out as a guest. Please enter your email
        address below so that we can send you confirmation of your order. If you
        already a member, please <strong>Login</strong>.
      </div>

      <div className="flex flex-row items-center gap-2">
        <Input
          type="email"
          placeholder="Email"
          className={errors.email ? 'border-red-500' : 'border-gray-400'}
          {...register('email')}
        />
        {errors.email && <span className="text-xl">❌</span>}
      </div>

      <Separator className="mt-4 mb-2" />

      <div className="font-bold text-xl mb-2 text-gray-600">
        Billing Information
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <Input
            type="text"
            placeholder="Full Name"
            className={
              errors.billingAddress?.fullName
                ? 'border-red-500'
                : 'border-gray-400'
            }
            {...register('billingAddress.fullName')}
          />
          {errors.billingAddress?.fullName && (
            <span className="text-xl">❌</span>
          )}
        </div>

        <div className="flex flex-row items-center gap-2">
          <Input
            type="text"
            placeholder="Address"
            className={
              errors.billingAddress?.address
                ? 'border-red-500'
                : 'border-gray-400'
            }
            {...register('billingAddress.address')}
          />
          {errors.billingAddress?.address && (
            <span className="text-xl">❌</span>
          )}
        </div>

        <div className="flex justify-between gap-4">
          <div className="flex flex-row items-center gap-2">
            <Input
              type="text"
              placeholder="City"
              className={
                errors.billingAddress?.city
                  ? 'border-red-500'
                  : 'border-gray-400'
              }
              {...register('billingAddress.city')}
            />
            {errors.billingAddress?.city && <span className="text-xl">❌</span>}
          </div>

          <div className="flex flex-row items-center gap-2">
            <Input
              type="text"
              placeholder="State"
              className={
                errors.billingAddress?.state
                  ? 'border-red-500'
                  : 'border-gray-400'
              }
              {...register('billingAddress.state')}
            />
            {errors.billingAddress?.state && (
              <span className="text-xl">❌</span>
            )}
          </div>

          <div className="flex flex-row items-center gap-2">
            <Input
              type="text"
              placeholder="Zip Code"
              className={
                errors.billingAddress?.zip
                  ? 'border-red-500'
                  : 'border-gray-400'
              }
              {...register('billingAddress.zip')}
            />
            {errors.billingAddress?.zip && <span className="text-xl">❌</span>}
          </div>
        </div>

        <div className="flex flex-row items-center gap-2">
          <Input
            type="text"
            placeholder="Phone No."
            className={
              errors.billingAddress?.phone
                ? 'border-red-500'
                : 'border-gray-400'
            }
            {...register('billingAddress.phone')}
          />
          {errors.billingAddress?.phone && <span className="text-xl">❌</span>}
        </div>
      </div>

      <Separator className="mt-4 mb-2" />

      <div className="font-bold text-xl mb-2 text-gray-600">
        Payment Information
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <Input
            type="text"
            placeholder="Name On Card"
            className={
              errors.paymentInformation?.nameOnCard
                ? 'border-red-500'
                : 'border-gray-400'
            }
            {...register('paymentInformation.nameOnCard')}
          />
          {errors.paymentInformation?.nameOnCard && (
            <span className="text-xl">❌</span>
          )}
        </div>

        <div className="flex flex-row items-center gap-2">
          <Input
            type="text"
            placeholder="Card Number"
            className={
              errors.paymentInformation?.cardNumber
                ? 'border-red-500'
                : 'border-gray-400'
            }
            {...register('paymentInformation.cardNumber')}
          />
          {errors.paymentInformation?.cardNumber && (
            <span className="text-xl">❌</span>
          )}
        </div>

        <div className="flex gap-4">
          <div className="flex flex-row items-center gap-2">
            <Input
              type="text"
              placeholder="Expiration"
              className={
                errors.paymentInformation?.expiration
                  ? 'border-red-500'
                  : 'border-gray-400'
              }
              {...register('paymentInformation.expiration')}
            />
            {errors.paymentInformation?.expiration && (
              <span className="text-xl">❌</span>
            )}
          </div>

          <div className="flex flex-row items-center gap-2">
            <Input
              type="text"
              placeholder="CVV"
              className={
                errors.paymentInformation?.cvv
                  ? 'border-red-500'
                  : 'border-gray-400'
              }
              {...register('paymentInformation.cvv')}
            />
            {errors.paymentInformation?.cvv && (
              <span className="text-xl">❌</span>
            )}
          </div>
        </div>

        <Button className="bg-black text-white w-full py-3 mt-3" type="submit">
          Place Order
        </Button>
      </div>
    </form>
  );
}
