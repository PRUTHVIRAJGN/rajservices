import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../app/utils/app.guard';

const routes: Routes = [


  {path : '',   redirectTo: '/home', pathMatch: 'full' },


  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },


  { path: 'giftcards', loadChildren: () => import('./modules/giftcards/giftcards.module').then(m => m.GiftcardsModule) ,canActivate : [AuthGuard]},


  { path: 'about-us', loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule) },


  { path: 'add-edit-address', loadChildren: () => import('./modules/add-edit-address/add-edit-address.module').then(m => m.AddEditAddressModule),canActivate : [AuthGuard] },


  { path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule),canActivate : [AuthGuard] },


  { path: 'checkout', loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule) ,canActivate : [AuthGuard]},


  { path: 'compare', loadChildren: () => import('./modules/compare/compare.module').then(m => m.CompareModule),canActivate : [AuthGuard] },


  { path: 'contact-us', loadChildren: () => import('./modules/contact-us/contact-us.module').then(m => m.ContactUsModule) },


  { path: 'faq', loadChildren: () => import('./modules/faq/faq.module').then(m => m.FaqModule) },


  { path: 'list-products', loadChildren: () => import('./modules/list-products/list-products.module').then(m => m.ListProductsModule) },


  { path: 'manage-address', loadChildren: () => import('./modules/manage-address/manage-address.module').then(m => m.ManageAddressModule),canActivate : [AuthGuard] },


  { path: 'my-account', loadChildren: () => import('./modules/my-account/my-account.module').then(m => m.MyAccountModule) ,canActivate : [AuthGuard]},


  { path: 'my-orders', loadChildren: () => import('./modules/my-orders/my-orders.module').then(m => m.MyOrdersModule) ,canActivate : [AuthGuard]},


  { path: 'wishlists', loadChildren: () => import('./modules/wishlists/wishlists.module').then(m => m.WishlistsModule) ,canActivate : [AuthGuard]},
  {path : "**", redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[];
