import { HotChocolate } from "./HotChocolate.js"

export class WithCream {
  constructor(private readonly beverage: HotChocolate) {}

  price(): number {
    return this.beverage.price() + 0.15
  }
}
