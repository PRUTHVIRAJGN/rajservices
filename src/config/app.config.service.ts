import {HttpClient} from '@angular/common/http';
import {AppConfig} from './app.config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class loadConfigService extends AppConfig
{
constructor(private http: HttpClient)
{
    super();
}

load()
{
    return this.http.get<AppConfig>('app.config.json')
    .toPromise()
    .then(data =>{
      this.appBaseUrl=data.appBaseUrl;
      this.title=data.title;
      this.myAccountAccount=data.myAccountAccount;
      this.myAccountTooltip=data.myAccountTooltip;
      this.myAccountWishlist=data.myAccountWishlist;
      this.myAccountAddress=data.myAccountAddress;
      this.myAccountLogout=data.myAccountLogout;
      this.searchSuggest=data.searchSuggest;
      this.searchPlaceholder=data.searchPlaceholder;
      this.searchTooltip=data.searchTooltip;
      this.settingsTooltip=data.settingsTooltip;
      this.cartTooltip=data.cartTooltip;
      this.myAccountLogin=data.myAccountLogin;
      this.myAccountCheckout=data.myAccountCheckout;
      this.myAccountCompare=data.myAccountCompare;
      this.myAccountRegister=data.myAccountRegister;
      this.myAccountOrders=data.myAccountOrders;
    })
    .catch(()=> {
        console.log('failed to load configs');
    })
}
}
