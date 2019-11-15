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

};

let galactiBeing1 = new GalacticBeing(5);
