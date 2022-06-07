var valor = 11257;

var y = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for (var a = 0;a<7;a++) {
    var qtd = parseInt(valor/y[a]);    
    valor = valor - qtd * y[a];
    console.log(qtd + " nota(s) de R$ " + y[a] + ",00");
}