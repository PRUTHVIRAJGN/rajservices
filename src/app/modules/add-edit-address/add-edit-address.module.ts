import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditAddressRoutingModule } from './add-edit-address-routing.module';
import { AddEditAddressComponent } from './add-edit-address.component';


@NgModule({
  declarations: [AddEditAddressComponent],
  imports: [
    CommonModule,
    AddEditAddressRoutingModule
  ]
})
export class AddEditAddressModule { }
