import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './order-totals/order-totals.component'
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TextInputComponent } from './text-input/text-input.component';


@NgModule({
  declarations: [
    OrderTotalsComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    CarouselModule,
    OrderTotalsComponent,
    BsDropdownModule,
    ReactiveFormsModule,
    TextInputComponent
  ]
})
export class SharedModule { }
