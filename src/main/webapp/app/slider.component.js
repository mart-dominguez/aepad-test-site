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
    var SliderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SliderComponent = (function () {
                function SliderComponent() {
                }
                SliderComponent = __decorate([
                    core_1.Component({
                        selector: 'slider',
                        template: "\n    <div class=\"slider-area\">\n            <div class=\"block-slider block-slider4\">\n                <ul class=\"\" id=\"bxslider-home4\">\n                    <li>\n                        <img src=\"img/h4-slide.png\" alt=\"Slide\"/>\n                        <div class=\"caption-group\">\n                            <h2 class=\"caption title\">\n                                iPhone <span class=\"primary\">6 <strong>Plus</strong></span>\n                            </h2>\n                            <h4 class=\"caption subtitle\">Dual SIM</h4>\n                            <a class=\"caption button-radius\" href=\"#\"><span class=\"icon\"></span>Shop now</a>\n                        </div>\n                    </li>\n                    <li><img src=\"img/h4-slide2.png\" alt=\"Slide\"/>\n                        <div class=\"caption-group\">\n                            <h2 class=\"caption title\">\n                                by one, get one <span class=\"primary\">50% <strong>off</strong></span>\n                            </h2>\n                            <h4 class=\"caption subtitle\">school supplies & backpacks.*</h4>\n                            <a class=\"caption button-radius\" href=\"#\"><span class=\"icon\"></span>Shop now</a>\n                        </div>\n                    </li>\n                    <li><img src=\"img/h4-slide3.png\" alt=\"Slide\"/>\n                        <div class=\"caption-group\">\n                            <h2 class=\"caption title\">\n                                Apple <span class=\"primary\">Store <strong>Ipod</strong></span>\n                            </h2>\n                            <h4 class=\"caption subtitle\">Select Item</h4>\n                            <a class=\"caption button-radius\" href=\"#\"><span class=\"icon\"></span>Shop now</a>\n                        </div>\n                    </li>\n                    <li><img src=\"img/h4-slide4.png\" alt=\"Slide\"/>\n                        <div class=\"caption-group\">\n                          <h2 class=\"caption title\">\n                                Apple <span class=\"primary\">Store <strong>Ipod</strong></span>\n                            </h2>\n                            <h4 class=\"caption subtitle\">& Phone</h4>\n                            <a class=\"caption button-radius\" href=\"#\"><span class=\"icon\"></span>Shop now</a>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SliderComponent);
                return SliderComponent;
            }());
            exports_1("SliderComponent", SliderComponent);
        }
    }
});
//# sourceMappingURL=slider.component.js.map