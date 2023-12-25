document.getElementById('btn__gerar-sequencia').addEventListener('click', ()=>{
   let numeros = gerarNumeros().sort((a, b) => a - b)
   let sequencia = `${numeros[0]} - ${numeros[1]} - ${numeros[2]} - ${numeros[3]} - ${numeros[4]} - ${numeros[5]}`
   mostrarNumeros(sequencia)
})

function gerarNumeros() {
    let opcoes = []
    let numerosSelecionados = []

    for (let i = 1; i < 61; i++) {
        opcoes.push(i)
    }

    while (numerosSelecionados.length < 6) {
        let posicao = Math.floor((Math.random() * opcoes.length))
        numerosSelecionados.push(opcoes[posicao])
        opcoes.splice(posicao, 1)
    }
    return numerosSelecionados
}

function mostrarNumeros(numeros){
    document.getElementById('banner').innerHTML = `<p class="numeros-selecionados" style="color: #000000;">${numeros}</p>`
}