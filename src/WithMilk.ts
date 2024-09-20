import { Coffee } from "./Coffee.js"
import { Tea } from "./Tea.js"

export class WithMilk {
  constructor(private readonly beverage: Tea | Coffee) {}

  price(): number {
    return this.beverage.price() + 0.1
  }
}
