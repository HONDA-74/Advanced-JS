const obj = {
    [Symbol.replace] : function(str){
        if(str.length>15){
            return str.slice(0,15)+'...'
        }
        return str
    }
}


console.log("==============Task3==============");

console.log('hello world from JavaScript'.replace(obj))
console.log('hello world'.replace(obj))
