import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UiModule } from '../../ui/ui.module';
import { SharedModule } from '../../shared/shared.module';
import { OrdersListComponent } from './components/order-list/orders-list.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [OrdersListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    OrdersRoutingModule,
    UiModule,
    SharedModule,
  ],
})
export class OrdersModule {}
