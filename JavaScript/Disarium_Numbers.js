function number(num){
    var y = num;
    num += "";
    var aux = num.split("").map(Number);
    var acum = 0;
    for (let i = 1; i <= aux.length; i++) {
        acum += Math.pow(aux[i], [i]);
        console.log(acum);           
    }
    if(acum === y){
        return true;
    }
    return false;
    
}
console.log(number(135));
