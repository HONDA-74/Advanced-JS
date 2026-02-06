let myObj = { }


handler = {
    get(target, key) {
        return target[key];
    },
    set(target, key, value) {
        if(key === 'name') {
            if(value.length >= 7 && typeof value == 'string') {
                target[key] = value;
                return true;
            }
        }
        if(key === "address") {
            if(typeof value == 'string') {
                target[key] = value;
                return true;
            }
        }
        if(key === "age") {
            if(typeof value == 'number' && value <= 60 && value >= 25) {
                target[key] = value;
                return true;
            }
        }
        console.error("Invalid input");
        return false
    }
}

let myProxy = new Proxy(myObj, handler);



myProxy.name = "JohnDoe";
myProxy.address = "123 Main St";
myProxy.age = 30;

console.log(myProxy.name);
console.log(myProxy.address);
console.log(myProxy.age);

myProxy.x = 10;

