import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
         let data = JSON.parse(params['id']);
         console.log('Got param: ', data);

      }
    )
  }

}

/*

public sub: Observable<string>;
public a : string;
ngOnInit() {
            this.sub = this.route.queryParamMap
            .map((params) => params.get('a'));
            this.sub.subscribe((val) => this.a = val));
            console.log(this.a);
}

*/
