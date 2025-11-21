export interface Order {
  OrderId: number;
  Quantity: number;
  UnitPrice: number;
  TotalPrice: number;
  OrderDate: Date;
  Status: string;
}
