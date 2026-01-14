function NumericalSequence(start, end, step) {
  this.start = start;
  this.end = end;
  this.step = step;
  this.current = start;
  var list = [];
  var sequance = function () {
    list.push(this.current);
    if (this.current < this.end) {
      this.current += this.step;
      sequance.call(this);
    }
  };
  sequance.call(this);
  function append(value) {
    var nextVal = this.current + this.step;
    if ( nextVal == value) {
      list.push(value);
    }else {
        throw new Error('Invalid value');
    }
  }
  function prepend(value) {
      var prevVal = this.start - this.step;
      if ( prevVal == value) {
        list.unshift(value);
      }else {
          throw new Error('Invalid value');
      }
  }
  function pop() {
    return list.pop();
  }
  function shift() {
    return list.shift();
  }
  function display() {
    return list;
  }
  this.append = append;
  this.prepend = prepend;
  this.pop = pop;
  this.shift = shift;
  this.display = display;
}


var series1 = new NumericalSequence(1, 10, 1);
console.log(series1.display());
series1.append(11);
series1.prepend(0);
console.log(series1.display());
console.log(series1.pop());
console.log(series1.shift());
console.log(series1.display());
// series1.append(12);
// console.log(series1.display());


var series2 = new NumericalSequence(0, 10, 2);
console.log(series2.display());
// series2.append(11);
series2.append(12);
console.log(series2.display());


