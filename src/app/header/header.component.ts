import { Component, OnInit } from '@angular/core';
import { KeycloakService }from "keycloak-angular";
import {AppConfig} from '../../config/app.config';
import {getQueryString} from '../utils/app.utils';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
queryObject={};
appBaseUrl:string;
isLoggedIn:boolean;
searchSuggest:string;
searchPlaceholder:string;
searchTooltip:string;

cartTooltip:string;
cartSize:string;

myAccountAccount:string;
myAccountTooltip:string;
myAccountWishlist:string;
myAccountLogout:string;
myAccountLogin:string;
myAccountCheckout:string;
myAccountAddress:string;
myAccountCompare:string;
myAccountRegister:string;
myAccountOrders:string;

myAccountGiftcard:string;

settingsTooltip:string;
id:Number=1;

USER='';
constructor(private keycloak:KeycloakService,private config:AppConfig, private router:Router) {
   // this.USER=this.keycloak.getUsername();
console.log("header component loaded");
 }

  ngOnInit(): void {
    this.myAccountAccount=this.config.myAccountAccount;
    this.myAccountTooltip=this.config.myAccountTooltip;
    this.myAccountWishlist=this.config.myAccountWishlist;
    this.myAccountAddress=this.config.myAccountAddress;
    this.myAccountLogout=this.config.myAccountLogout;
    this.searchSuggest=this.config.searchSuggest;
    this.searchPlaceholder=this.config.searchPlaceholder;
    this.searchTooltip=this.config.searchTooltip;
    this.settingsTooltip=this.config.settingsTooltip;
    this.cartTooltip=this.config.cartTooltip;
    this.myAccountLogin=this.config.myAccountLogin;
    this.myAccountCheckout=this.config.myAccountCheckout;
    this.myAccountCompare=this.config.myAccountCompare;
    this.myAccountRegister=this.config.myAccountRegister;
    this.myAccountOrders=this.config.myAccountOrders;

  }

search()
{

}
logout()
{
  this.keycloak.logout(this.appBaseUrl);
}
cart()
{
  this.queryObject={"id":"1"};
  window.location.href="/cart?"+getQueryString(this.queryObject);
}
login()
{
  this.keycloak.login();
}
register()
{
  this.keycloak.register();
}





}
