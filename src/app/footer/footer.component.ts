import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() {
    console.log("footer component loaded");
    this.loadScripts();
      }
      ngOnInit(): void {

      }
    loadScripts() {

     // This array contains all the files/CDNs
     const dynamicScripts = [
      "assets/external/jquery/jquery.min.js",
      "assets/external/bootstrap/js/bootstrap.min.js",
      "assets/external/slick/slick.min.js",
      "assets/external/perfect-scrollbar/perfect-scrollbar.min.js",
      "assets/external/panelmenu/panelmenu.js",
      "assets/external/instafeed/instafeed.min.js",
      "assets/external/rs-plugin/js/jquery.themepunch.tools.min.js",
      "assets/external/rs-plugin/js/jquery.themepunch.revolution.min.js",
      "assets/external/countdown/jquery.plugin.min.js",
      "assets/external/countdown/jquery.countdown.min.js",
      "assets/external/lazyLoad/lazyload.min.js",
      "assets/js/main.js",
      "assets/external/form/jquery.form.js",
      "assets/external/form/jquery.validate.min.js",
      "assets/external/form/jquery.form-init.js"
     ];
     document.getElementById('script').innerHTML="";
     for (let i = 0; i < dynamicScripts.length; i++) {
       const node = document.createElement('script');
       node.src = dynamicScripts[i];
       node.type = 'text/javascript';
       node.async = false;
       document.getElementById('script').appendChild(node);
     } }


}
