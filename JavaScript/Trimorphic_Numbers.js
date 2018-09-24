
function tnumber(n){
    var arr = [];
    var aux = (n**3);
    while(aux > 0){
        arr.unshift(aux % 10);
        aux = Math.floor(aux /10);
    }
    return arr;
}

console.log(tnumber(4));
