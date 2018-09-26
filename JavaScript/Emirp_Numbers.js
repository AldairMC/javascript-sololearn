function eNumbers(n){
    aux = n;
    n += "";
    n.split("").reverse().join("");
    if(n % 2 == 0 && aux % 2 == 0){
        return true;
    }
    return false;
}

console.log(eNumbers(64));