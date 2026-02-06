let myObj = {
  [Symbol.iterator]: function () {
    let keys = Object.keys(this);
    let counter = 0;
    return {
      next:()=>{
        if (counter < keys.length) {
          return {
            value: {
              key: keys[counter],
              value: this[keys[counter++]],
            },
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  },
};

console.log("==============Task4==============");
myObj.nm = "ali";
myObj.age = 25;
myObj.address = "123st";
for (let elem of myObj) {
  console.log(elem);
}
