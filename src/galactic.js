export function earthToMurcury(input) {
    return input * .24;
}

class GalacticBeing {
  constructor (age) {
    this.age = age;
  }
  mercAge() {
    this.age * .24;
    return this;
  }

};

let galactiBeing1 = new GalacticBeing(5);
galactiBeing1.mercAge();
