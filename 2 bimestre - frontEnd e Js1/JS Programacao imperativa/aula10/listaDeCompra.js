let listaDeCompra = ["arroz", "feijao", "carne", "marcarrao"];

console.log("O .indexOf retorna a posição dos itens que foram encontrados dentro da array e -1 para os que não foram encontrados");
console.log(listaDeCompra.indexOf("carne"));

console.log("O .join junta elementos de uma array, transformando em apenas uma, podemos usar o ' - ' para separar as palavras ou deixar em branco para deixar separada por ,")
console.log(listaDeCompra.join());

console.log("O .pop elimina o ultimo elemento do array")
console.log(listaDeCompra.pop("macarrao"));

console.log("O .push adiciona um elemento na ultima posição do array")
console.log(listaDeCompra.push("macarrao"));

console.log("O .shift elimina o primeiro elemento do array")
console.log(listaDeCompra.shift());

console.log("O .unshift adiciona um ou mais elementos nas primeiras posições do array")
console.log(listaDeCompra.unshift('biscoito'));

console.log(listaDeCompra.lastIndexOf());

console.log(listaDeCompra);

