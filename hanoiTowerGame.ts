const moverPeca = (hanoi, pilarOrigem, pilarDestino) => {
    const valorOrigem = hanoi[pilarOrigem].pop()
    const origemEhMaiorQueDestino = hanoi[pilarDestino].find(elemento => elemento > valorOrigem);
    if (origemEhMaiorQueDestino || hanoi[pilarDestino].length === 0) {
        hanoi[pilarDestino].push(valorOrigem)
    } else {
        hanoi[pilarOrigem].push(valorOrigem)
        console.warn('Movimento inválido, não é possível colocar um disco com um diâmetro maior em cima de outro com um diâmetro menor.');
    }
}

const mostrarHanoi = (hanoi) => {
    console.log('Pilares:');
    console.log('a: ', hanoi.a);
    console.log('b: ', hanoi.b);
    console.log('c: ', hanoi.c);
}

const main = () => {
    const hanoi = {
        a: [3,2,1],
        b: [],
        c: []
    }

    while (hanoi.c.length !== 3) {
        mostrarHanoi(hanoi);
        const pilarOrigem = prompt('De qual pilar você deseja mover a peça?');
        const pilarDestino = prompt('Para qual pilar você deseja mover a peça?');
        moverPeca(hanoi, pilarOrigem, pilarDestino);
    }

    mostrarHanoi(hanoi);
    console.log('Parabêns, você venceu!');
}

main();