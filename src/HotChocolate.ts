import { Beverage } from "./Beverage.js"

export class HotChocolate implements Beverage {
  private type = "HotChocolate"

  price(): number {
    return 1.45
  }
}
