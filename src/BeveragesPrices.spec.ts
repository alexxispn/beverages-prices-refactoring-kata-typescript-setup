import { describe, expect, it } from "vitest"
import { Coffee } from "./Coffee.js"
import { CoffeeWithMilk } from "./CoffeeWithMilk.js"
import { CoffeeWithMilkAndCream } from "./CoffeeWithMilkAndCream.js"
import { HotChocolate } from "./HotChocolate.js"
import { HotChocolateWithCream } from "./HotChocolateWithCream.js"
import { Tea } from "./Tea.js"
import { WithMilk } from "./WithMilk.js"

describe("Beverages Prices", () => {
  it("computes coffee price", () => {
    const coffee = new Coffee()
    expect(coffee.price()).toBeCloseTo(1.2)
  })

  it("computes tea price", () => {
    const tea = new Tea()
    expect(tea.price()).toBeCloseTo(1.5)
  })

  it("computes hot chocolate price", () => {
    const hotChocolate = new HotChocolate()
    expect(hotChocolate.price()).toBeCloseTo(1.45)
  })

  it("computes tea with milk price", () => {
    const teaWithMilk = new WithMilk(new Tea())

    expect(teaWithMilk.price()).toBeCloseTo(1.6)
  })

  it("computes coffee with milk price", () => {
    const coffeeWithMilk = new CoffeeWithMilk()
    expect(coffeeWithMilk.price()).toBeCloseTo(1.3)
  })

  it("computes coffee with milk and cream price", () => {
    const coffeeWithMilkAndCream = new CoffeeWithMilkAndCream()
    expect(coffeeWithMilkAndCream.price()).toBeCloseTo(1.45)
  })

  it("computes hot chocolate with cream price", () => {
    const hotChocolateWithCream = new HotChocolateWithCream()
    expect(hotChocolateWithCream.price()).toBeCloseTo(1.6)
  })
})
