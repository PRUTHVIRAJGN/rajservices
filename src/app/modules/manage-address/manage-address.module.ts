import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAddressRoutingModule } from './manage-address-routing.module';
import { ManageAddressComponent } from './manage-address.component';


@NgModule({
  declarations: [ManageAddressComponent],
  imports: [
    CommonModule,
    ManageAddressRoutingModule
  ]
})
export class ManageAddressModule { }
