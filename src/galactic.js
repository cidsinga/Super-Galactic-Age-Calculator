export function earthToMercury(input) {
    return input * .24;
}

export class GalacticBeing {
  constructor (age) {
    this.age = age;
    this.mars = 0;
  }
  mercAge() {
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

let galactiBeing1 = new GalacticBeing(5);
