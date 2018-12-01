const composite = num => {
    var acum = 0;
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            acum += 1;
        }
    }
    if(acum === 2){
        return console.log(false);
    }
    return console.log(true);
}
composite(18);
