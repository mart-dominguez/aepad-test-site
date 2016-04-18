System.register(['angular2/core', './header.component', './branding.component', './slider.component', './promo.component', './mainmenu.component', './main.component', './product.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, header_component_1, branding_component_1, slider_component_1, promo_component_1, mainmenu_component_1, main_component_1, product_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (branding_component_1_1) {
                branding_component_1 = branding_component_1_1;
            },
            function (slider_component_1_1) {
                slider_component_1 = slider_component_1_1;
            },
            function (promo_component_1_1) {
                promo_component_1 = promo_component_1_1;
            },
            function (mainmenu_component_1_1) {
                mainmenu_component_1 = mainmenu_component_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (product_component_1_1) {
                product_component_1 = product_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                    console.log("INIT");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<div>\n            <header-area></header-area>\n            <branding></branding>\n            <mainmenu></mainmenu>\n            <slider></slider>\n            <promo></promo>\n            <main></main>\n            <product></product>\n\t</div>\n        ",
                        directives: [header_component_1.HeaderComponent, branding_component_1.BrandingComponent, slider_component_1.SliderComponent, promo_component_1.PromoComponent, mainmenu_component_1.MainMenuComponent, main_component_1.MainComponent, product_component_1.ProductComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map