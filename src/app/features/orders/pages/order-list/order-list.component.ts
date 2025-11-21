import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';

interface Col {
  key: string;
  label: string;
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  columns: Col[] = [
    { key: 'OrderId', label: 'Order ID' },
    { key: 'Quantity', label: 'Quantity' },
    { key: 'UnitPrice', label: 'Unit Price' },
    { key: 'TotalPrice', label: 'Total Price' },
    { key: 'OrderDate', label: 'Order Date' },
  ];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this._loadOrders();
  }

  private _loadOrders(): void {
    this.orderService.getOrders().subscribe((res) => {
      this.orders = res || [];
    });
  }
}
