function GalacticBeing(age) {
  let arr = [];
  this.age = age;

}

GalacticBeing.prototype.mercAge = function (age) {
  arr.push(this.age * .24);
};
