function linear(str){
    var aux = [];
    var op=[];
    
    for (let i = 0; i < str.length; i++) {
        if(!(str[i] === " ")){
            aux.push(str[i]); 
        }   
    }
    for (let i = 0; i < str.length; i++) {
        if((str[i] === "=")){
            op.push(str[i]);
            break;
        }
        
    }
    
    console.log(op);
    console.log(aux);
}

linear('3x + 2  =1');

