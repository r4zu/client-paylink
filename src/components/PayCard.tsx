import FormCheckout from './form-checkout/FormCheckout';
import OrderSummary from './OrderSummary';

import { Card } from './ui/Card';

export default function PayCard() {
  return (
    <>
      <Card className="bg-white text-black lg:mx-20 lg:my-5 md:mx-5 md:my-5">
        <div className="flex lg:flex-row lg:mx-20 lg:my-10 lg:items-start md:flex-col md:mx-5 md:my-5 md:items-center ">
          <FormCheckout />

          <OrderSummary />
        </div>
      </Card>
    </>
  );
}
