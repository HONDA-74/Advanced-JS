function * fibonacci1 (count) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < count; i++) {
        yield a;
        let c = a + b;
        a = b;
        b = c;
    }
} 

function * fibonacci2 (max) {
    let a = 0 , b = 1;
    while(a < max){
        yield a;
        let c = a + b;
        a = b;
        b = c;
    }
}

console.log("==============Task2==============");

for (let n of fibonacci1(10)) {
    console.log(n);
}

for (let n of fibonacci2(10)) {
    console.log(n);
}