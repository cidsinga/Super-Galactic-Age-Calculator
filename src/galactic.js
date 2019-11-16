export function earthToMercury(input) {
    return input * .24;

};

// export function mercAge(age) {
//   return age * .24;
// };

// work on classes below -----------------------
export class GalacticBeing {
  constructor (age) {
    this.age = age;
  }
  mercAge() {
    return this.age * .24;
  }
  // venusAge() {
  //   return this.age * .62;
  // }
  // marsAge() {
  //   return this.age * 1.88;
  // }
  // jupiterAge() {
  //   return this.age * 11.86;
  // }

};

let galacticBeing1 = new GalacticBeing(10);
galacticBeing1.mercAge();
