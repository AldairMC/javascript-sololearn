function linear(str){
    var aux = [];
    for (let i = 0; i < str.length; i++) {
        if(!(str[i] === " ")){
            aux.push(str[i]);
        }
        
    }
    console.log(aux);
}

linear('3x + 2  =1');

//hacer un nuevo array y con push ir metiendo elementos 