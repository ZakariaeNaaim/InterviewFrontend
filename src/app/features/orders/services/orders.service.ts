import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { HttpService } from '../../../core/services/http.service';
import { PagedList } from 'src/app/shared/models/paged-list.model';
import { AppResult } from 'src/app/shared/models/app-result.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  apiName = '/orders';

  constructor(private http: HttpService) {}

  getAll(): Observable<PagedList<Order>> {
    return this.http.get<AppResult<PagedList<Order>>>(this.apiName).pipe(
      map((result) => {
        if (!result.isSuccess) {
          throw new Error(result.message || 'Failed to load orders');
        }
        return result.data;
      })
    );
  }
}
