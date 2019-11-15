export function earthToMercury(input) {
    return input * .24;

};


// work on classes below -----------------------
export class GalacticBeing {
  constructor (age, le) {
    this.age = age;
    this.lifeExpectancy = le;

  }
  mercAge(age) {
    return this.age * .24;
  }
  venusAge() {
    return this.age * .62;
  }
  marsAge() {
    return this.age * 1.88;
  }
  jupiterAge() {
    return this.age * 11.86;
  }

};

let galactiBeing1 = new GalacticBeing;
galactiBeing1.mercAge();
