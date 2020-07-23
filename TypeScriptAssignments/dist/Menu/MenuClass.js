"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var Menu = /** @class */ (function () {
    function Menu(dishId, dishName, dishPrice) {
        this.dishId = dishId;
        this.dishName = dishName;
        this.dishPrice = dishPrice;
        console.log("Menu Added");
    }
    return Menu;
}());
exports.Menu = Menu;
