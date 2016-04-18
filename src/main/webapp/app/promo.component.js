System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var PromoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PromoComponent = (function () {
                function PromoComponent() {
                }
                PromoComponent = __decorate([
                    core_1.Component({
                        selector: 'promo',
                        template: "\n      <div class=\"promo-area\">\n        <div class=\"zigzag-bottom\"></div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-3 col-sm-6\">\n                    <div class=\"single-promo promo1\">\n                        <i class=\"fa fa-refresh\"></i>\n                        <p>30 Days return</p>\n                    </div>\n                </div>\n                <div class=\"col-md-3 col-sm-6\">\n                    <div class=\"single-promo promo2\">\n                        <i class=\"fa fa-truck\"></i>\n                        <p>Free shipping</p>\n                    </div>\n                </div>\n                <div class=\"col-md-3 col-sm-6\">\n                    <div class=\"single-promo promo3\">\n                        <i class=\"fa fa-lock\"></i>\n                        <p>Secure payments</p>\n                    </div>\n                </div>\n                <div class=\"col-md-3 col-sm-6\">\n                    <div class=\"single-promo promo4\">\n                        <i class=\"fa fa-gift\"></i>\n                        <p>New products</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>   \n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PromoComponent);
                return PromoComponent;
            }());
            exports_1("PromoComponent", PromoComponent);
        }
    }
});
//# sourceMappingURL=promo.component.js.map