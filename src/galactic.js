export function earthToMercury(input) {
    return input * .24;

};

// export function mercAge(age) {
//   return age * .24;
// };

// work on classes below -----------------------
export class GalacticBeing {
  constructor (age, name) {
    this.age = age;
    this.name = name;
    this.mercuryAge = 0;
  }
  mercAge() {
    let mercuryAge = this.age * .24;
    return mercuryAge;
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
  // mercExpectancy() {
  //   mercAge()
  }

  })

};

// let galacticBeing = new GalacticBeing(10);
// galacticBeing.mercAge()
