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
    let mercAge = galacticBeing.mercAge(10);
    expect(mercAge).toEqual(2.4);
  })
  test('should return users age converted into Venus years', () => {
    let newAge = galacticBeing.venusAge(10);
    expect(newAge).toEqual(6.2);
  })
  test('should return users age converted into Mars years', () => {
    let newAge = galacticBeing.marsAge(10);
    expect(newAge).toEqual(18.8);
    // receiving a false fail in jest. Says result should be 18.79999999997
  })
  test('should return users age converted into Jupiter years', () => {
    let newAge = galacticBeing.jupiterAge(10);
    expect(newAge).toEqual(118.6);
  })

  test('should return users life expectancy in Mercury years', () => {
    let lifeExpectancy = galacticBeing.mercExpectancy(10);
    expect(lifeExpectancy).toEqual(21.6);
  })
  test('should return users life expectancy in Venus years', () => {
    let lifeExpectancy = galacticBeing.venusExpectancy(10);
    expect(lifeExpectancy).toEqual(55.9);
  })
  test('should return users life expectancy in Mars years', () => {
    let lifeExpectancy = galacticBeing.marsExpectancy(10);
    expect(lifeExpectancy).toEqual(21.6);
  })
  test('should return users life expectancy in Jupiter years', () => {
    let lifeExpectancy = galacticBeing.jupiterExpectancy(10);
    expect(lifeExpectancy).toEqual(21.6);
  })



});

// describe ('jupiterAge', () => {
//
// });
