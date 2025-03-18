import Image from 'next/image';

import macbook from '/public/images/macbook_air_15.webp';

import { Card } from './ui/Card';
import { Separator } from './ui/Separator';

export default function OrderSummary() {
  return (
    <Card className="bg-blue-50 border-0 w-[700px]">
      <div className="flex justify-between m-5">
        <div className="font-bold text-2xl">Order Summary</div>
        <div className="font-bold text-sm text-blue-400">Edit Cart</div>
      </div>

      <div className="flex justify-between m-5 gap-4">
        <Image src={macbook} width={100} height={100} alt={'macbook_air_15'} />
        <div className="flex flex-col gap-2">
          <div className="font-bold">MacBook Air (13 inch, M2 Chip)</div>
          <div className="text-xs">
            8-Core CPU, 8-Core GPU, 8GB Unified Memory, 256GB SSD Storage
          </div>
          <div className="text-md">
            Qty: <strong>1</strong> * <strong>1499,99 USD</strong>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between m-5 gap-4">
        <Image src={macbook} width={100} height={100} alt={'macbook_air_15'} />
        <div className="flex flex-col gap-2">
          <div className="font-bold">MacBook Air (13 inch, M2 Chip)</div>
          <div className="text-xs">
            8-Core CPU, 8-Core GPU, 8GB Unified Memory, 256GB SSD Storage
          </div>
          <div className="text-md">
            Qty: <strong>1</strong> * <strong>1499,99 USD</strong>
          </div>
        </div>
      </div>

      <div className="flex justify-between m-5">
        <div>Delivery Charge</div>
        <div>FREE</div>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between mx-5 text-sm">
        <div>Sub Total</div>
        <div>2999.98 USD</div>
      </div>

      <div className="flex justify-between mx-5 mt-2">
        <div className="font-bold">Total</div>
        <div className="font-bold text-red-400">2999.98 USD</div>
      </div>

      <div className="text-end mr-5 mb-2 text-xs">Price include TAXES</div>

      <div className="ml-5 mb-5 text-sm">
        Delivery Estimated Date: {new Date().toLocaleDateString()}
      </div>
    </Card>
  );
}
