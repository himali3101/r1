import { Menu } from "../Menu/MenuClass";

export class User {
  order(dish: string, dishMenu: Menu[]): void {
    let count = 0;
    for (let i = 0; i < dishMenu.length; i++) {
      if (dish == dishMenu[i].dishName) {
        count++;
        console.log("Bill is : " + dishMenu[i].dishPrice);
      }
    }
    if (count == 0) {
      console.log("Dish not Available");
    }
  }
}
