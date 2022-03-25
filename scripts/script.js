let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")


function calcular(onclick){
    console.log("Calculando...")

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let qdtTotalCerveja = cervejaPP(duracao) * adultos 
    let qdtTotalBebidas = bebidasPP(duracao) * adultos +  (bebidasPP(duracao) / 2 * criancas)

    resultado.innerHTML = `<p> ${qdtTotalCarne/1000}Kg de Carne </p>`
    resultado.innerHTML += `<p> ${Math.ceil(qdtTotalCerveja/355)} Latas de Cervejas </p>`
    resultado.innerHTML += `<p> ${Math.ceil(qdtTotalBebidas/2000)} Garafas de Refrigerantes </p>`



}

function carnePP(duracao){
    
    if(duracao >= 6){
       return carne = 650
    }else{
        return 400
    }
    
}

function cervejaPP (duracao){
    if(duracao >= 6){
       return cerveja = 2000
    }else{
        return 1200
    }
    
}


function bebidasPP (duracao){
    if(duracao >= 6){
       return bebidas = 1500
    }else{
        return 1000
    }
    
}