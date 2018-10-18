function scientificNotatio(x){

    var aux=0;
    var cont=0;
    var aux=[]; 
    x += "";
    var w = x.split("");
    var y= x.split("").map(Number);
    console.log(y);
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
    aux.join("").map(Number)
    console.log(aux);
    console.log(cont);
}

scientificNotatio(98700000000000);
