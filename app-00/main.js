var num = [-5,0,-3,-4,12]
var par = 0;
var impar = 0;
var pos = 0;
var nega = 0;

for(var i = 0; i < 5; i++){
    
    if(num[i]%2==0){
        par = par + 1;
    }else{
        impar = impar + 1;
    }

    if(num[i] > 0){
        pos = pos +1;
    }else if(num[i]<0){
        nega = nega +1
    }
}

console.log(par + " valor(es) par(es)")
console.log(impar + " valor(es) impar(es)")
console.log(pos + " valor(es) positivo(s)")
console.log(nega + " valor(es) negativo(s)")