import { Restaurant } from "../Restaurant/RestaurantClass";
import { Menu } from "../Menu/MenuClass";

export class Admin implements AdminInterface {
  name: string;
  password: string;
  phoneNo: number;
  emailId: string;

  constructor(name: string, password: string, phoneNo: number, emailId: string) {
    this.name = name;
    this.password = password;
    this.phoneNo = phoneNo;
    this.emailId = emailId;
  }

  login(name: string, password: string): boolean {
    if (name == this.name && password == this.password) {
      return true;
    } else return false;
  }
  addRestaurant(RId: string | number, RestaurantName: string, address: string): Object {
    var newRestaurant = new Restaurant(RId, RestaurantName, address);
    return newRestaurant;
  }
  addMenu(dishId: string | number, dishName: string, dishPrice: number): Menu {
    var menu = new Menu(dishId, dishName, dishPrice);
    return menu;
  }
}
