import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditAddressComponent } from './add-edit-address.component';

const routes: Routes = [{ path: '', component: AddEditAddressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditAddressRoutingModule { }
