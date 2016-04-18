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
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header',
                        template: "\n <div class=\"header-area\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <div class=\"user-menu\">\n                        <ul>\n                            <li><a href=\"#\"><i class=\"fa fa-user\"></i> My Account</a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-heart\"></i> Wishlist</a></li>\n                            <li><a href=\"cart.html\"><i class=\"fa fa-user\"></i> My Cart</a></li>\n                            <li><a href=\"checkout.html\"><i class=\"fa fa-user\"></i> Checkout</a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-user\"></i> Login</a></li>\n                        </ul>\n                    </div>\n                </div>\n                \n                <div class=\"col-md-4\">\n                    <div class=\"header-right\">\n                        <ul class=\"list-unstyled list-inline\">\n                            <li class=\"dropdown dropdown-small\">\n                                <a data-toggle=\"dropdown\" data-hover=\"dropdown\" class=\"dropdown-toggle\" href=\"#\"><span class=\"key\">currency :</span><span class=\"value\">USD </span><b class=\"caret\"></b></a>\n                                <ul class=\"dropdown-menu\">\n                                    <li><a href=\"#\">USD</a></li>\n                                    <li><a href=\"#\">INR</a></li>\n                                    <li><a href=\"#\">GBP</a></li>\n                                </ul>\n                            </li>\n\n                            <li class=\"dropdown dropdown-small\">\n                                <a data-toggle=\"dropdown\" data-hover=\"dropdown\" class=\"dropdown-toggle\" href=\"#\"><span class=\"key\">language :</span><span class=\"value\">English </span><b class=\"caret\"></b></a>\n                                <ul class=\"dropdown-menu\">\n                                    <li><a href=\"#\">English</a></li>\n                                    <li><a href=\"#\">French</a></li>\n                                    <li><a href=\"#\">German</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> \n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map