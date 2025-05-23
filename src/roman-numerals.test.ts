import { it, expect ,test } from "vitest";

test.each([ 
[ "I", 1 ],
  [ "II", 2 ],
  [ "III", 3 ],
  [ "IV", 4 ],
  [ "V", 5 ],
  [ "VI", 6 ],
  [ "VII", 7 ],
  [ "VIII", 8 ],
  [ "IX", 9 ],
  [ "X", 10 ]
])("%s Devrait convertir %s",(input,expect)=>{
    console.log(input,expect);
    expect(1).toBe(2)

})
class RomanNumeral {
  of(valeurRom: string): number {   
    let resultat = 0; 
    for(let i = 0; i <valeurRom.length;i++){
      const actuel = valeurRom[i];
      const prochain = valeurRom[i + 1];
        if(actuel ==="I"){
        if(prochain ==="V"){
            resultat += 4;
            i++;
        }else if (prochain === "X") {
          resultat += 9;
          i++; 
        } else {
          resultat += 1;
    }
    }
}
return resultat;
  }}


it("Devrait convertir I en 1", function () {
  const romain = new RomanNumeral();
  expect(romain.of("I")).toBe(1);
});
it("Devrait convertir II en 2", function () {
  const romain = new RomanNumeral();
  expect(romain.of("II")).toBe(2);
});

it("Devrait convertir III en 3", function () {
  const romain = new RomanNumeral();
  expect(romain.of("III")).toBe(3);
});
//--------------------------------------------------------------------------------------------------------

it("Devrait convertir IV en 4", function () {
  const romain = new RomanNumeral();
  expect( romain.of("IV") ).toBe(4);
})
it("Devrait convertir V en 5", function () {
    const romain = new RomanNumeral();
    expect(romain.of("V")).toBe(5);
})

