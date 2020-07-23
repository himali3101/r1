export class Menu implements MenuInterface {
  dishId: string | number;
  dishName: string;
  dishPrice: number;

  constructor(dishId: string | number, dishName: string, dishPrice: number) {
    this.dishId = dishId;
    this.dishName = dishName;
    this.dishPrice = dishPrice;
    console.log("Menu Added");
  }
}
