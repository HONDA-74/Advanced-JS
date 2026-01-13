function reverseFun1(...args) {
    return args.reverse();
}

function reverseFun2() {
    return [].reverse.call(arguments);
}

function reverseFun3() {
    return [].reverse.apply(arguments);
}

function reverseFun4() {
    var fun = [].reverse.bind(arguments);
    return fun();
}

console.log(reverseFun1(1, 2, 3, 4, 5));
console.log(reverseFun2(1, 2, 3, 4, 5));
console.log(reverseFun3(1, 2, 3, 4, 5));
console.log(reverseFun4(1, 2, 3, 4, 5));
