let fruits=["apple", "strawberry", "banana", "orange","mango"]


console.log(fruits.every(ele => typeof ele === "string"));


console.log(fruits.some(ele => ele.startsWith("a")));

let newArr1 = fruits.filter(ele => ele.startsWith("b") || ele.startsWith("s"))

let newArr2 = fruits.map(ele=> ele = `i like ${ele}`)


newArr1.forEach(ele => {
    console.log(ele);
});
newArr2.forEach(ele => {
    console.log(ele);
});

