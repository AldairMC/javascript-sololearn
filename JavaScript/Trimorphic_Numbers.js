
function tnumber(n){
    var aux = n**3;
    for(var i = 0;i<aux.lenght;i++){
        aux % 10;
    } 
    return aux;
}
console.log(tnumber(4));
