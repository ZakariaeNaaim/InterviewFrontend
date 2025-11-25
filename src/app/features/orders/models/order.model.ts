export interface Order {
  orderId: number;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  orderDate: string;
  status: string;
  productId: number;
  customerId: number;
}
