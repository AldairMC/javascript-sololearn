function scientificNotatio(x){

    var cont=0;
    var aux=[]; 
    x += "";
    var w = x.split("");
    var y= x.split("").map(Number);
    console.log(y);
    if(x > 1){
        for (let i = 0; i <= y.length; i++) {
            if(y[i] === 0){
                cont++;
            }
        }
        for (let i = 0; i<w.length; i++){
            if(w[i] !== "0"){
                aux.push(w[i]);
            }    
        }
        var z = aux.join("");
        console.log(z);
        console.log(cont);
        console.log(z + "*10^" + cont);    
    }
    
}

scientificNotatio(780000000000000);
