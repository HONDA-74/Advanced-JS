function Shape(width, height ) {
  if (this.constructor === Shape) {
    throw new Error("Shape is an abstract class");
  }

    Object.defineProperty(this, "width", {
    value: width,
    writable: false,
    enumerable: true,
    configurable: false,
  });

  Object.defineProperty(this, "height", {
    value: height,
    writable: false,
    enumerable: true,
    configurable: false,
  });

  Object.defineProperty(this, "area", {
    enumerable: false,
    configurable: false,
    writable: false,
    value: this.width * this.height,
  });

  Object.defineProperty(this, "perimeter", {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 2 * (this.width + this.height),
  });
  Object.preventExtensions(this);
}
Shape.prototype.toString = function () {
  console.log("Area : " + this.area + " Perimeter : " + this.perimeter);
};
Shape.prototype.valueOf = function () {
  return this.area;
};
Shape.prototype.getHeight = function () {
  return this.height;
}
Shape.prototype.getWidth = function () {
  return this.width;
}
Shape.prototype.getArea = function () {
  return this.area;
}
Shape.prototype.getPerimeter = function () {
  return this.perimeter;
}


function Rectangle(width, height) {
  Shape.call(this, width, height);

  if (this.constructor === Rectangle) {
    Rectangle.count++;
    if (Rectangle.count > 1) {
      throw new Error("Rectangle is a singleton class");
    }
  }

  Object.preventExtensions(this);
}

Rectangle.count = 0

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

function Square(side) {
  Rectangle.call(this, side, side);
  

    Square.count++
    // if(Square.count > 1){
    //     throw new Error("Square is a singleton class");
    // }

  Object.preventExtensions(this)
}

Square.count = 0

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.getCount = function () {
  return Square.count
}

var square1 = new Square(5);
square1.toString();
console.log(square1 + square1);
// var shape = new Shape();
var rectangle1 = new Rectangle(4, 5);
rectangle1.toString();
console.log(square1 - rectangle1);
square1.width = 10;
console.log(square1.getWidth());
console.log(square1.getHeight());

var square2 = new Square(5);
console.log( square2.getCount() );

// var rectangle2 = new Rectangle(4, 5);

