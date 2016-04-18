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
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main-component',
                        template: "\n<div class=\"maincontent-area\">\n        <div class=\"zigzag-bottom\"></div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"latest-product\">\n                        <h2 class=\"section-title\">Latest Products</h2>\n                        <div class=\"product-carousel\">\n                            <div class=\"single-product\">\n                                <div class=\"product-f-image\">\n                                    <img src=\"img/product-1.jpg\" alt=\"\"/>\n                                    <div class=\"product-hover\">\n                                        <a href=\"#\" class=\"add-to-cart-link\"><i class=\"fa fa-shopping-cart\"></i> Add to cart</a>\n                                        <a href=\"single-product.html\" class=\"view-details-link\"><i class=\"fa fa-link\"></i> See details</a>\n                                    </div>\n                                </div>\n                                \n                                <h2><a href=\"single-product.html\">Samsung Galaxy s5- 2015</a></h2>\n                                \n                                <div class=\"product-carousel-price\">\n                                    <ins>$700.00</ins> <del>$100.00</del>\n                                </div> \n                            </div>\n                            <div class=\"single-product\">\n                                <div class=\"product-f-image\">\n                                    <img src=\"img/product-2.jpg\" alt=\"\"/>\n                                    <div class=\"product-hover\">\n                                        <a href=\"#\" class=\"add-to-cart-link\"><i class=\"fa fa-shopping-cart\"></i> Add to cart</a>\n                                        <a href=\"single-product.html\" class=\"view-details-link\"><i class=\"fa fa-link\"></i> See details</a>\n                                    </div>\n                                </div>\n                                \n                                <h2>Nokia Lumia 1320</h2>\n                                <div class=\"product-carousel-price\">\n                                    <ins>$899.00</ins> <del>$999.00</del>\n                                </div> \n                            </div>\n                            <div class=\"single-product\">\n                                <div class=\"product-f-image\">\n                                    <img src=\"img/product-3.jpg\" alt=\"\"/>\n                                    <div class=\"product-hover\">\n                                        <a href=\"#\" class=\"add-to-cart-link\"><i class=\"fa fa-shopping-cart\"></i> Add to cart</a>\n                                        <a href=\"single-product.html\" class=\"view-details-link\"><i class=\"fa fa-link\"></i> See details</a>\n                                    </div>\n                                </div>\n                                \n                                <h2>LG Leon 2015</h2>\n\n                                <div class=\"product-carousel-price\">\n                                    <ins>$400.00</ins> <del>$425.00</del>\n                                </div>                                 \n                            </div>\n                            <div class=\"single-product\">\n                                <div class=\"product-f-image\">\n                                    <img src=\"img/product-4.jpg\" alt=\"\"/>\n                                    <div class=\"product-hover\">\n                                        <a href=\"#\" class=\"add-to-cart-link\"><i class=\"fa fa-shopping-cart\"></i> Add to cart</a>\n                                        <a href=\"single-product.html\" class=\"view-details-link\"><i class=\"fa fa-link\"></i> See details</a>\n                                    </div>\n                                </div>\n                                \n                                <h2><a href=\"single-product.html\">Sony microsoft</a></h2>\n\n                                <div class=\"product-carousel-price\">\n                                    <ins>$200.00</ins> <del>$225.00</del>\n                                </div>                            \n                            </div>\n                            <div class=\"single-product\">\n                                <div class=\"product-f-image\">\n                                    <img src=\"img/product-5.jpg\" alt=\"\"/>\n                                    <div class=\"product-hover\">\n                                        <a href=\"#\" class=\"add-to-cart-link\"><i class=\"fa fa-shopping-cart\"></i> Add to cart</a>\n                                        <a href=\"single-product.html\" class=\"view-details-link\"><i class=\"fa fa-link\"></i> See details</a>\n                                    </div>\n                                </div>\n                                \n                                <h2>iPhone 6</h2>\n\n                                <div class=\"product-carousel-price\">\n                                    <ins>$1200.00</ins> <del>$1355.00</del>\n                                </div>                                 \n                            </div>\n                            <div class=\"single-product\">\n                                <div class=\"product-f-image\">\n                                    <img src=\"img/product-6.jpg\" alt=\"\"/>\n                                    <div class=\"product-hover\">\n                                        <a href=\"#\" class=\"add-to-cart-link\"><i class=\"fa fa-shopping-cart\"></i> Add to cart</a>\n                                        <a href=\"single-product.html\" class=\"view-details-link\"><i class=\"fa fa-link\"></i> See details</a>\n                                    </div>\n                                </div>\n                                \n                                <h2><a href=\"single-product.html\">Samsung gallaxy note 4</a></h2>\n\n                                <div class=\"product-carousel-price\">\n                                    <ins>$400.00</ins>\n                                </div>                            \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=main.component.js.map