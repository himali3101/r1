"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
var Restaurant = /** @class */ (function () {
    function Restaurant(RId, RestaurantName, address) {
        this.RId = RId;
        this.RestaurantName = RestaurantName;
        this.address = address;
        console.log("Restaurant added ");
    }
    return Restaurant;
}());
exports.Restaurant = Restaurant;
