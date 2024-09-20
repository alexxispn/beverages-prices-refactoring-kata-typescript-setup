import { Beverage } from "./Beverage.js"

export class Tea implements Beverage {
  private type = "Tea"

  price(): number {
    return 1.5
  }
}
