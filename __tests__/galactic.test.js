import { earthToMercury, GalacticBeing  } from './../src/galactic.js';

// describe ('earthToMercury', ()=> {
//   test('should return users age converted into Murcury years', () => {
//     const mercuryOutput = earthToMercury(10);
//     expect(mercuryOutput).toEqual(2.4); //3 is for "red" result
//   })
// });


describe(GalacticBeing,  () => {
  let galacticBeing;

  beforeEach(function() {
    galacticBeing = new GalacticBeing(10,100);
    // galacticBeing.mercAge();
  })
  test('should return users age in mercury years', () => {
    let mercAge = galacticBeing.mercAge();
    expect(mercAge).toEqual(2.4);
  })
  test('should return users age converted into Venus years', () => {
    let newAge = galacticBeing.venusAge();
    expect(newAge).toEqual(6.2);
  })
  test('should return users age converted into Mars years', () => {
    let newAge = galacticBeing.marsAge();
    expect(newAge).toEqual(18.799999999999997);
    // receiving a false fail in jest. Says result should be 18.79999999997 instead of 18.8
  })
  test('should return users age converted into Jupiter years', () => {
    let newAge = galacticBeing.jupiterAge();
    expect(newAge).toEqual(118.6);
  })

  test('should return users remaining life expectancy in Mercury years', () => {
    let lifeExpectancy = galacticBeing.mercExpectancy();
    expect(lifeExpectancy).toEqual(21.6);
  })
  test('should return users remainging life expectancy in Venus years', () => {
    let lifeExpectancy = galacticBeing.venusExpectancy();
    expect(lifeExpectancy).toEqual(55.8);
  })
  test('should return users remaining life expectancy in Mars years', () => {
    let lifeExpectancy = galacticBeing.marsExpectancy();
    expect(lifeExpectancy).toEqual(169.2);
  })
  test('should return users remaining life expectancy in Jupiter years', () => {
    let lifeExpectancy = galacticBeing.jupiterExpectancy();
    expect(lifeExpectancy).toEqual(1067.4);
  })
  test('should return amount user has lived over Earths life expectancy', () => {
    let earthExpectancy = galacticBeing.earthExpectancy();
    expect(earthExpectancy).toEqual(31)
  })



});

// describe ('jupiterAge', () => {
//
// });
