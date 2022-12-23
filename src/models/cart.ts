import * as internal from 'stream';

export class Cart {
  id?: number;
  quantity?: number;
  isOnWay?: boolean;
  isDelivered?: boolean;
  price?: number;
  photoUrl?: string;
  productName?: string;
  customerId?: number;
  productId?: number;
}
