function Vichle(speed, color) {
  if (this.constructor === Vichle) {
    throw new Error("Vichle is an abstract class");
  }
  if (typeof speed  != "number")
    throw new Error("speed must be a number");
  if (typeof color != "string")
    throw new Error("color must be a string");
  Object.defineProperties(this, {
    speed: {
        value: speed,
        writable: false,
        enumerable: false,
        configurable: false
    },
    color: {
      value: color,
      writable: true,
      enumerable: false,
      configurable: false,
    },
    turnLeft: {
      value: function () {
        console.log("turn left");
      },
      writable: false,
      enumerable: false,
      configurable: false,
    },
    turnRight: {
      value: function () {
        console.log("turn right");
      },
      writable: false,
      enumerable: true,
      configurable: false,
    },
    start: {
      value: function () {
        console.log("start");
      },
      writable: false,
      enumerable: true,
      configurable: false,
    },
    stop: {
      value: function () {
        console.log("stop");
      },
      writable: false,
      enumerable: true,
      configurable: false,
    },
    goBackward: {
      value: function () {
        console.log("go backward");
      },
      writable: false,
      enumerable: true,
      configurable: false,
    },
    goForward: {
      value: function () {
        console.log("go forward");
      },
      writable: false,
      enumerable: true,
      configurable: false,
    },
    getSpeed: {
      value: function () {
        return speed;
      },
      writable: false,
      enumerable: true,
      configurable: false,
    },
    getColor: {
      value: function () {
        return color;
      },
      writable: false,
      enumerable: false,
      configurable: false,
    }
  });
//   Object.freeze(this);
// Object.seal(this);
}
Vichle.prototype.valueOf = function () {
  return this.speed;
};
Vichle.prototype.toString = function () {
  console.log("Speed : " + this.speed + " Color : " + this.color);
};

//====================================================

function Bicycle(speed, color) {
  Vichle.call(this, speed, color);
}
Bicycle.prototype = Object.create(Vichle.prototype);
Bicycle.prototype.constructor = Bicycle;
Bicycle.prototype.ringBell = function () { console.log("ring Bell")};

//====================================================

function MotorVechile(size, licencePlate, speed, color) {
  if(this.constructor === MotorVechile) throw new Error("MotorVechile is an abstract class");
  if (typeof size != "number") throw new Error("size must be a number");
  if (typeof licencePlate != "string")
    throw new Error("licencePlate must be a string");
  var size = size;
  var licencePlate = licencePlate;
  Vichle.call(this, speed, color);

  Object.defineProperties(this, {
    getLicencePlate: {
      value: function () {
        return licencePlate;
      },
      writable: false,
      enumerable: true,
      configurable: false,
    },
    getSize: {
      value: function () {
        return size;
      },
      writable: false,
      enumerable: true,
      configurable: false,
    },
  });
}
MotorVechile.prototype = Object.create(Vichle.prototype);
MotorVechile.prototype.constructor = MotorVechile;

//====================================================

function Car(doors, wheels, weight, engineSize, licencePlate, speed, color) {
  if (typeof doors != "number")
    throw new Error("doors must be a number");
  if (typeof wheels != "number")
    throw new Error("wheels must be a number");
  if (typeof weight != "number")
    throw new Error("weight must be a number");
  if (typeof engineSize != "number")
    throw new Error("engineSize must be a number");
  var doors = doors;
  var wheels = wheels;
  var weight = weight;
  MotorVechile.call(this, engineSize, licencePlate, speed, color);

  Object.defineProperties(this, {
    getNumOfDoors: {
      value: function () {
        return doors;
      },
      writable: false,
      enumerable: true,
      configurable: false,
    },
    switchOnAirConditioner: {
      value: function () {
        console.log("switch on air conditioner");
      },
      writable: false,
      enumerable: true,
      configurable: false,
    },
    switchOffAirConditioner: {
      value: function () {
        console.log("switch off air conditioner");
      },
      writable: false,
      enumerable: true,
      configurable: false,
    },
  });
}
Car.prototype = Object.create(MotorVechile.prototype);
Car.prototype.constructor = Car;

//====================================================

function DumpTruck(capacity,wheels,weight,engineSize,licencePlate,speed,color) {
  if (typeof capacity != "number")
    throw new Error("capacity must be a number");
  if (typeof wheels != "number")
    throw new Error("wheels must be a number");
  if (typeof weight != "number")
    throw new Error("weight must be a number");
  if (typeof engineSize != "number")
    throw new Error("engineSize must be a number");
  var capacity = capacity;
  var wheels = wheels;
  var weight = weight;
  MotorVechile.call(this, engineSize, licencePlate , speed , color);

  Object.defineProperties(this, {
    lowerLoad: {
      value: function () {
        console.log("lower load");
      },
      writable: false,
      enumerable: true,
      configurable: false,
    },
    raiseLoad: {
      value: function () {
        console.log("raise load");
      },
      writable: false,
      enumerable: true,
      configurable: false,
    },
  });
}
DumpTruck.prototype = Object.create(MotorVechile.prototype);
DumpTruck.prototype.constructor = DumpTruck;




// var vichle = new Vichle(10, "red");
var bicycle = new Bicycle(20, "red");
// var motorVechile = new MotorVechile(100, "123", 10, "red");
var car = new Car(4, 4, 1000, 1000 , "abc123" , 240 , "red");
var dumpTruck = new DumpTruck(1000, 4, 1000, 1000, "abc123" , 200 , "red");

bicycle.ringBell();
car.switchOnAirConditioner();
dumpTruck.lowerLoad();
console.log(bicycle + car + dumpTruck);
bicycle.speed = 30;
bicycle.toString();
car.toString();
dumpTruck.toString();



