class polygon {
  constructor(sides) {
    if (this.constructor === polygon)
      throw new Error("Can't instantiate abstract class!");
    this.sides = sides;
  }

  toString() {
    return `Polygon with ${this.sides} sides`;
  }
}

class rectangle extends polygon {
  constructor(length, width) {
    super(4);
    this.length = length;
    this.width = width;
  }
  area() {
    return this.length * this.width;
  }
  perimeter() {
    return 2 * (this.length + this.width);
  }

  toString() {
    return `Area of rectangle : ${this.area()}\nPerimeter of rectangle : ${this.perimeter()}`;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(50, 50, this.length, this.width);
    ctx.stroke();
    ctx.fill();
  }
}

class square extends rectangle {
  constructor(side) {
    super(side, side);
  }

  toString() {
    return `Area of square : ${this.area()}\nPerimeter of square : ${this.perimeter()}`;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(200, 50, this.length, this.length);
    ctx.stroke();
    ctx.fill();
  }
}

class circle extends polygon {
  constructor(radius) {
    super(0);
    this.radius = radius;
  }
  area() {
    return Math.round(Math.PI * this.radius * this.radius);
  }
  perimeter() {
    return Math.round(2 * Math.PI * this.radius);
  }

  toString() {
    return `Area of circle : ${this.area()}\nPerimeter of circle : ${this.perimeter()}`;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(150, 250, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
  }
}

class tringle extends polygon {
  constructor(a, b, c) {
    super(3);
    this.a = a;
    this.b = b;
    this.c = c;
  }
  area() {
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
  perimeter() {
    return this.a + this.b + this.c;
  }

  toString() {
    return `Area of tringle : ${this.area()}\nPerimeter of tringle : ${this.perimeter()}`;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(350, 300);
    ctx.lineTo(300, 200);
    ctx.lineTo(400, 200);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }
}

const canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
document.body.append(canvas);
const ctx = canvas.getContext("2d");
ctx.fillStyle = 'lightblue'; 
ctx.strokeStyle = 'black';   
ctx.lineWidth = 2; 

let rectangle1 = new rectangle(4, 8);
let square1 = new square(10);
let circle1 = new circle(5);
let tringle1 = new tringle(3, 4, 5);

let rectangle2 = new rectangle(100, 60);
let square2 = new square(70);
let circle2 = new circle(50);
let tringle2 = new tringle(100, 80, 120);

console.log(rectangle1.toString());
console.log(square1.toString());
console.log(tringle1.toString());
console.log(circle1.toString());

rectangle2.draw(ctx);
square2.draw(ctx);
tringle2.draw(ctx);
circle2.draw(ctx);
