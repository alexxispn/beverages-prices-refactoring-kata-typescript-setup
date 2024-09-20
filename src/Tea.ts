import { Beverage } from "./Beverage.js";
import { Milk } from "./Milk.js";

export class Tea implements Beverage {
  price(): number {
    return 1.5
  }

  add(milk: Milk) {
    throw new Error("Method not implemented.")
  }
}

