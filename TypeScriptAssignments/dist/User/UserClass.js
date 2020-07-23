"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.order = function (dish, dishMenu) {
        var count = 0;
        for (var i = 0; i < dishMenu.length; i++) {
            if (dish == dishMenu[i].dishName) {
                count++;
                console.log("Bill is : " + dishMenu[i].dishPrice);
            }
        }
        if (count == 0) {
            console.log("Dish not Available");
        }
    };
    return User;
}());
exports.User = User;
