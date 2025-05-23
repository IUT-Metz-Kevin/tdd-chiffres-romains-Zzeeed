import { it, expect ,test } from "vitest";

test.each([
  [ "I",1 ],
])
class RomanNumeral {
  of(valeurRom: string): number {
    if (valeurRom === "I") return 1;
    if (valeurRom === "IV") return 4;
    return 0;
  }
}

it("Devrait convertir I en 1", function () {
  const romain = new RomanNumeral();
  expect(romain.of("I")).toBe(1);
});
it("Devrait convertir", function () {
  const romain = new RomanNumeral();
  expect( romain.of("IV") ).toBe(4);
})