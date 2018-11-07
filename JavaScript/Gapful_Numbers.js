function gapN(x) {
    
    var y = x;
    x +="";
    var aux = x.split("").map(Number);
    console.log(aux);
    var arr=[];
    for (let i = 0; i < aux.length; i++) {
        if(aux.length !== 3){
            console.log("El numero no es de tres cifras");
            break;
        }else{
            arr.push(aux[0]);
            arr.push(aux[aux.length-1]);
            
        }
        
    }
    console.log(arr);
}
gapN(541);