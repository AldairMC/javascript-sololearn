function linear(str){
    var aux = [];
    var op=[];
    
    for (let i = 0; i < str.length; i++) {
        if(!(str[i] === " ")){
            aux.push(str[i]); 
        }      
    }
    var y =  aux;

    for (let i = 0; i < y.length; i++) {
        if(y[i] === "="){
            break;
        }
        else{
            op.push(y[i]);
        }
    }

    console.log(op);
    console.log(aux);
}

linear('3x + 2  =1');

