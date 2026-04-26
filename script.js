console.log("TESTE FUNCIONANDO");
alert("JS rodou!");

let x, y, z, u, i, o;

u = 0;

let name = prompt("Escreva seu nome: ");

x = Number(prompt("Escreva sua renda mensal: "));
while (isNaN(x)) {
    x = Number(prompt("Valor inválido. Escreva sua renda mensal: "));
}

y = Number(prompt("Quantidade de despesas mensais (até 5): "));
while (isNaN(y)) {
    y = Number(prompt("Valor inválido. Digite a quantidade de despesas: "));
}

if (y > 5) {
    y = 5;
}
if (y < 1) {
    y = 1;
}

for (let i = 1; i <= y; i++) {
    z = Number(prompt("Escreva o valor da despesa " + i + ": "));

    while (isNaN(z)) {
        z = Number(prompt("Valor inválido. Digite novamente a despesa " + i + ": "));
    }

    u += z;
}

let mensagem

if (u > x) {
    mensagem = "Infelizmente, " + name + ", suas despesas são maiores que sua renda mensal. Tente reduzir seus gastos.";
}
else {    o = x - u;
    if (o >= x * 0.3) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
    
}

let resultado =
"Nome: " + name + "\n" +
"Renda: R$ " + x.toFixed(2) + "\n" +
"Despesas: R$ " + u.toFixed(2) + "\n" +
"Sobra: R$ " + (x - u).toFixed(2) + "\n" +
mensagem;

alert(resultado);
console.log(resultado);