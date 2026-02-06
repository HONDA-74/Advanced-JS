const minMax1 = (...arr) => {
    return [Math.min(...arr), Math.max(...arr)]
}

const minMax2 = (...arr) => {
    return { min: Math.min(...arr),max: Math.max(...arr)}
}

console.log(minMax1(1,2,3,4,5)[0] , minMax1(1,2,3,4,5)[1]);

console.log(`min : ${minMax2(1, 2, 3, 4, 5).min} max : ${minMax2(1, 2, 3, 4, 5).max}` );
