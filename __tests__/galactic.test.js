import { earthToMercury, GalacticBeing  } from './../src/galactic.js';

// describe ('earthToMercury', ()=> {
//   test('should return users age converted into Murcury years', () => {
//     const mercuryOutput = earthToMercury(10);
//     expect(mercuryOutput).toEqual(2.4); //3 is for "red" result
//   })
// });


describe('spock',  () => {
  let galacticBeing;

  beforeEach(function() {
    galacticBeing = new GalacticBeing(10, 'spock');
    galacticBeing.mercAge();


  })
  test('should return users age converted into Murcury years', () => {
    expect(galacticBeing.age).toEqual(10)

  })

});

//
//
// describe ('mercAge', () => {
//   test('should return users age converted into Murcury years', () => {
//     const newAge = mercAge(10);
//     expect(newAge).toEqual(2.4);
//   })
// });
// describe ('venusAge', () => {
//   test('should return users age converted into Venus years', () => {
//     const newAge = venusAge(10);
//     expect(newAge).toEqual(6.2);
//   })
// });
//
// describe ('marsAge', () => {
//   test('should return users age converted into Mars years', () => {
//     const newAge = marsAge(10);
//     expect(newAge).toEqual(18.8);
//   })
// });
// describe ('jupiterAge', () => {
//   test('should return users age converted into Jupiter years', () => {
//     const newAge = jupiterAge(10);
//     expect(newAge).toEqual(118.6);
//   })
// });
