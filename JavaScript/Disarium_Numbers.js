function number(num){
    var y = num;
    num += "";
    var aux = num.split("").map(Number);
    console.log(aux);
    var acum = 0;
    for (let i = 0; i < aux.length; i++) {
        acum += Math.pow(aux[i], (i+1));              
    }
    if(acum === y){
        return true;
    }
    return false;
    
}
console.log(number(80));
