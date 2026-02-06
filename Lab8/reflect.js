let myObj = { 
    username : "test",
    age : 20
}
let sumFun = function(a, b) {
    this.sum = a + b;
}

let result1 = Reflect.apply(Math.floor , null, [10.6]);
let result2 = Reflect.construct(sumFun, [10, 20]);
let result3 = Reflect.defineProperty(myObj, "name", {
    value : "John Doe"
});
let result4 = Reflect.deleteProperty(myObj, "username");
let result5 = Reflect.has(myObj, "age");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log('============================================');


handler = {
    // apply => call target function with argumentlist as parameter , thisArg as this for the function 
    apply : function(target, thisArg, argumentsList) {
        console.log('handler called');
        return target(...argumentsList);
    },
    // construct => call target function with argumentlist as parameter 
    construct: function(target, argumentsList) {
        console.log('handler called');
        let obj = {};
        target.apply(obj, argumentsList);
        return obj;
    },
    // defineProperty => define property"key" on target with value of descriptor 
    defineProperty : function(target, key, descriptor) {
        console.log('handler called');
        target[key] = descriptor.value;
        return true;
    },
    // deleteProperty => delete property "key" from target
    deleteProperty : function(target, key) {
        console.log('handler called');
        delete target[key];
        return true;
    },
    has : function(target, key) {
        console.log('handler called');
        return key in target;
    }
}

let proxiedFloor = new Proxy(Math.floor, handler);
result1 = proxiedFloor(10.6);
console.log(result1); 


let proxiedSum = new Proxy(sumFun, handler);
result2 = new proxiedSum(10, 20);
console.log(result2);

let proxiedObj = new Proxy(myObj, handler);
result3 = Object.defineProperty(proxiedObj, "username", { value: "test" });
console.log(result3);

result4 = delete proxiedObj.username;
console.log(result4);

result5 = 'age' in proxiedObj;
console.log(result5);









