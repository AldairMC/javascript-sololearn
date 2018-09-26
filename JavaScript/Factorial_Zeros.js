function fZeros(x) {
    acum = 1;
    con = 0;
    ac  = [];
    for(var i = 1; i <= x; i++){
        acum *= i;    
    }
    while(acum > 0){
        ac.unshift(acum % 10);
        acum = Math.floor(acum /10);      
    }
    console.log(ac);
    for(var j= 0; j <= ac.length; j++){
        if(ac[j] === 0){    
            con += 1;
        }                 
    }
    console.log(con);
}
fZeros(25);