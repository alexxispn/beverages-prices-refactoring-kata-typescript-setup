import { Beverage } from "./Beverage.js"
import { WithMilk } from "./WithMilk.js"

export class Tea implements Beverage {
  price(): number {
    return 1.5
  }

  add(milk: WithMilk) {
    throw new Error("Method not implemented.")
  }
}
