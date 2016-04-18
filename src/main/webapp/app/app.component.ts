import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';
import {BrandingComponent} from './branding.component';
import {SliderComponent} from './slider.component';
import {PromoComponent} from './promo.component';
import {MainMenuComponent} from './mainmenu.component';
import {MainComponent} from './main.component';
import {ProductComponent} from './product.component';

@Component({
    selector: 'my-app',
    template: `
    	<div>
            <header-area></header-area>
            <branding></branding>
            <mainmenu></mainmenu>
            <slider></slider>
            <promo></promo>
            <main></main>
            <product></product>
	</div>
        `,
    directives: [HeaderComponent,BrandingComponent,SliderComponent,PromoComponent,MainMenuComponent,MainComponent,ProductComponent]
})
export class AppComponent { 
  ngOnInit() {
      console.log("INIT");
    }        
}
