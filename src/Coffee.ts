import { Beverage } from "./Beverage.js"

export class Coffee implements Beverage {
  private type = "Coffee"

  price(): number {
    return 1.2
  }
}
