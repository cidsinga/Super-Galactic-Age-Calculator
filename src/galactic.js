export function earthToMercury(input) {
    return input * .24;

};

// export function mercAge(age) {
//   return age * .24;
// };

// work on classes below -----------------------
export class GalacticBeing {
  constructor (age, lifeExpectancy) {
    this.age = age;
    this.name = name;
    this.mercuryAge = 0;
    this.lifeExpectancy = lifeExpectancy
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
  mercExpectancy() {
    return this.lifeExpectancy * .24 - this.mercAge();
  }
  venusExpectancy() {
    return this.lifeExpectancy * .62 - this.venusAge();
  }
  marsExpectancy() {
    return this.lifeExpectancy * 1.88 - this.marsAge();
  }
  jupiterExpectancy() {
    return this.lifeExpectancy * 11.86 - this.jupiterAge();
  }
  earthExpectancy() {
    if (this.lifeExpectancy > 70) {
      return this.lifeExpectancy - 70;
    }
  }


};

// let galacticBeing = new GalacticBeing(10);
// galacticBeing.mercAge()
