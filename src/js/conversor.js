

function abcd(){
    let resultado = document.getElementById('resultado')
    let selectCripto1 = document.getElementById('selectCripto1')
    let selectMoeda1 = document.getElementById('selectMoeda1')
    let numberCripto1 = document.getElementById('numberCripto1')

    if(selectCripto1.value == 1 && selectMoeda1.value == 1){
    resultado.innerHTML = `${numberCripto1.value} bitcoins são ${numberCripto1.value * 30 /*colocar valor encontrado na api aqui*/} reais`
    }
    else if(selectCripto1.value == 1 && selectMoeda1.value == 2){
        resultado.innerHTML = `${numberCripto1.value} bitcoins são ${numberCripto1.value * 28,488.83} euros`
    }
    else if(selectCripto1.value == 1 && selectMoeda1.value == 3){
        resultado.innerHTML = `${numberCripto1.value} bitcoins são ${numberCripto1.value * 30,404.30} dólares`
    }
    else if(selectCripto1.value == 2 && selectMoeda1.value == 1){
        resultado.innerHTML = `${numberCripto1.value} ethereums são ${numberCripto1.value * 10,105.81} reais`
    }
    else if(selectCripto1.value == 2 && selectMoeda1.value == 2){
        resultado.innerHTML = `${numberCripto1.value} ethereums são ${numberCripto1.value * 1,941.83} euros`
    }
    else if(selectCripto1.value == 2 && selectMoeda1.value == 3){
        resultado.innerHTML = `${numberCripto1.value} ethereums são ${numberCripto1.value * 2,070} dólares`
    }
    else if(selectCripto1.value == 3 && selectMoeda1.value == 1){
        resultado.innerHTML = `${numberCripto1.value} dogecoins são ${numberCripto1.value * 0.43} reais`
    }
    else if(selectCripto1.value == 3 && selectMoeda1.value == 2){
        resultado.innerHTML = `${numberCripto1.value} dogecoins são ${numberCripto1.value * 0.082} euros`
    }
    else if(selectCripto1.value == 3 && selectMoeda1.value == 3){
        resultado.innerHTML = `${numberCripto1.value} dogecoins são ${numberCripto1.value * 0.087} dólares`
    }
}

function dcba(){
    let resultado2 = document.getElementById('resultado2')
    let selectMoeda2 = document.getElementById('selectMoeda2')
    let selectCripto2 = document.getElementById('selectMoeda1')
    let moedscrs = document.getElementById('moedscrs')

    if(selectMoeda2.value == 1 && selectCripto2.value == 1){
    resultado2.innerHTML = `${moedscrs.value} reais são ${moedscrs.value * 0.0000067} bitcoins`
    }
    else if(selectMoeda2.value == 1 && selectCripto2.value == 2){
        resultado2.innerHTML = `${moedscrs.value} reais são ${moedscrs.value * 0.000099} ethereums`
    }
    else if(selectMoeda2.value == 1 && selectCripto2.value == 3){
        resultado2.innerHTML = `${moedscrs.value} reais são ${moedscrs.value * 2.34} dogecoins`
    }
    else if(selectMoeda2.value == 2 && selectCripto2.value == 1){
        resultado2.innerHTML = `${moedscrs.value} euros são ${moedscrs.value * 0.000035} bitcoins`
    }
    else if(selectMoeda2.value == 2 && selectCripto2.value == 2){
        resultado2.innerHTML = `${moedscrs.value} euros são ${moedscrs.value * 0,00051} ethereums`
    }
    else if(selectMoeda2.value == 2 && selectCripto2.value == 3){
        resultado2.innerHTML = `${moedscrs.value} euros são ${moedscrs.value * 12.20} dogecoins`
    }
    else if(selectMoeda2.value == 3 && selectCripto2.value == 1){
        resultado2.innerHTML = `${moedscrs.value} dólares são ${moedscrs.value * 0.000033} bitcoins`
    }
    else if(selectMoeda2.value == 3 && selectCripto2.value == 2){
        resultado2.innerHTML = `${moedscrs.value} dólares são ${moedscrs.value * 0.00048} ethereums`
    }
    else if(selectMoeda2.value == 3 && selectCripto2.value == 3){
        resultado2.innerHTML = `${moedscrs.value} dólares são ${moedscrs.value * 11.43} dogecoins`
    }
}
