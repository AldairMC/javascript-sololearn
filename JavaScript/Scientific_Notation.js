function scientificNotatio(x){

    var aux=0;
    var cont=0;
    x += "";
    var y= x.split("").map(Number);
    console.log(y);
    for (let i = 0; i <= y.length; i++) {
        if(y[i] === 0){
            cont++;
        }
        
    }
    console.log();
}

scientificNotatio(90000000000000);
