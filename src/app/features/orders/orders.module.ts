import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '../../ui/ui.module';
import { SharedModule } from '../../shared/shared.module';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrdersRoutingModule,
    UiModule,
    SharedModule,
  ],
})
export class OrdersModule {}
