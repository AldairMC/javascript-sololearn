function eNumbers(n){
    let aux = n;
    n += "";
    var y = n.split("").reverse().join("");

    if(eprime(y) && eprime(aux)){
        return true +": "+ y +  " and " + aux + " is a prime number";
    }
    return false;
}
//ver si el número es primo
function eprime(x){
    let acum = 0;
    for(var i= 0; i <= x; i++){
        if(x % i == 0){
            acum += 1; 
        }
    }
    if(acum === 2){
        return true;
    }
    return false;
}

console.log(eNumbers(17));