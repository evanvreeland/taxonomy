var Bee = function() {
  Grub.call(this);
  this.color = "yellow";
  this.job = "keep on growing";
  this.age = 5;
};

Bee.prototype = Object.create(Grub.prototype);

Bee.prototype.constructor = Bee;

