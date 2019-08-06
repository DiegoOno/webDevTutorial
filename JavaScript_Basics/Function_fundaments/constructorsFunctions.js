function Car(maxSpeed = 200, delta = 5) {
    let currSpeed = 0;

    //public method
    this.accelerate = function () {
        if(currSpeed + delta <= maxSpeed) {
            currSpeed += delta;
        }  else {
            currSpeed = maxSpeed;
        }
    }

    this.getCurrSpeed = function () {
        return currSpeed;
    }
}

const uno = new Car;
uno.accelerate();
console.log(uno.getCurrSpeed());

const ferrari = new Car(350, 20);
for(let i = 0; i < 10; i++) {
    ferrari.accelerate();
}
console.log(ferrari.getCurrSpeed());