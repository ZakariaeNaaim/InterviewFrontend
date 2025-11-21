import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { HttpService } from '../../../core/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiName = '/orders';

  constructor(private http: HttpService) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiName);
  }
}
