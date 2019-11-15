export function earthToMercury(input) {
    return input * .24;
}

export class GalacticBeing {
  constructor (age) {
    this.age = age;

  }
  mercAge() {
    this.age * .24;
  }
  venusAge() {
    this.age * .62;
  }
  marsAge() {
    this.age * 1.88;
  }
  jupiterAge() {
    this.age * 11.86;
  }

};

let galactiBeing1 = new GalacticBeing(5);
