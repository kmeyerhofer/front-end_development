function makeCar(accelRate, brakeRate) {
  return {
    speed: 0,
    accelRate: accelRate,
    brakeRate: brakeRate,
    accelerate: function () {
      this.speed += this.accelRate;
    },
    brake: function () {
      if (this.speed - this.brakeRate < 0) {
        this.speed = 0;
      } else {
        this.speed -= this.brakeRate;
      }
    },
  };
}
