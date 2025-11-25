import { Component, OnInit } from '@angular/core';
import { PagedList } from 'src/app/shared/models/paged-list.model';
import { Order } from '../../models/order.model';
import { OrdersService } from '../../services/orders.service';

interface OrdersTableColumn {
  key: string;
  label: string;
}

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  orders: Order[] = [];
  isLoading = false;

  pageInfo: Pick<
    PagedList<Order>,
    'pageNumber' | 'totalPages' | 'totalCount'
  > | null = null;

  columns: OrdersTableColumn[] = [
    { key: 'orderId', label: 'Id' },
    { key: 'orderDate', label: 'Date' },
    { key: 'status', label: 'Status' },
    { key: 'quantity', label: 'Qty' },
    { key: 'unitPrice', label: 'Unit Price' },
    { key: 'totalPrice', label: 'Total' },
  ];

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.isLoading = true;

    this.ordersService.getAll().subscribe({
      next: (paged: PagedList<Order>) => {
        this.orders = paged.items ?? [];
        this.pageInfo = {
          pageNumber: paged.pageNumber,
          totalPages: paged.totalPages,
          totalCount: paged.totalCount,
        };
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
}
