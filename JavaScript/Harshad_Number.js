const harshad = num => {   
var y = num;
num += "";     
var aux = num.split("").map(Number);
var sum = 0;
for(let i of aux){
    sum += i; 
}
var v = sum*(aux.length);
console.log(v)
if(v === y){
    return console.log(true);
}
    return console.log(false);
} 
harshad(1729);