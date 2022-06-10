const inverter = document.getElementById('inverter')
var texto = 'normal' 

function text(){
    if(texto == 'normal'){
        texto = 'changed'
    } else{
        texto = 'normal'
    }
}

inverter.addEventListener ('click', (e) => {
        
    let selectCripto = document.getElementById('select1')
    let selectCriptoVal = selectCripto.innerHTML

    let selectMoeda = document.getElementById('select2') 
    let selectMoedaVal = selectMoeda.innerHTML

    let titulo = document.getElementById('titulo')
  

    document.getElementById('select1').innerHTML = selectMoedaVal
    document.getElementById('select2').innerHTML = selectCriptoVal

    if(texto == 'normal'){
        titulo.innerHTML = 'Converta moeda fiduciária em cripto'
        text()
    }else{
        titulo.innerHTML = 'Converta cripto em moeda fiduciária'
        text()
    }
    })

//Primeiro bloco

function converter(){


    let resultado = document.getElementById('resultado')
    let select1 = document.getElementById('select1')
    let select2 = document.getElementById('select2')
    let numberCripto = document.getElementById('numberCripto')
    //numberCripto

   
    if(texto == 'normal'){

        if(select1.value == 0 && select2.value == 0){
            resultado.innerHTML = 'Escolha um tipo de conversão!'
        }
        else if(select1.value == 0 && select2.value != 0){
            resultado.innerHTML = 'Escolha uma criptomoeda!'
        }
        else if(select1.value != 0 && select2.value == 0){
            resultado.innerHTML = 'Escolha uma moeda fiduciária!'
        }
        //Valores
        if(numberCripto.value == '' || numberCripto.value == 0){
            resultado.innerHTML = 'Digite um valor!'
        }
        else if(select1.value == 1 && select2.value == 1){
            resultado.innerHTML = `${numberCripto.value} bitcoins são ${numberCripto.value * 30 /*colocar valor encontrado na api aqui*/} reais`
        } 
        else if(select1.value == 1 && select2.value == 2){
            resultado.innerHTML = `${numberCripto.value} bitcoins são ${numberCripto.value * 28,488.83} euros`
        }
        else if(select1.value == 1 && select2.value == 3){
            resultado.innerHTML = `${numberCripto.value} bitcoins são ${numberCripto.value * 30,404.30} dólares`
        }
        else if(select1.value == 2 && select2.value == 1){
            resultado.innerHTML = `${numberCripto.value} ethereums são ${numberCripto.value * 10,105.81} reais`
        }
        else if(select1.value == 2 && select2.value == 2){
            resultado.innerHTML = `${numberCripto.value} ethereums são ${numberCripto.value * 1,941.83} euros`
        }
        else if(select1.value == 2 && select2.value == 3){
            resultado.innerHTML = `${numberCripto.value} ethereums são ${numberCripto.value * 2,070} dólares`
        }
        else if(select1.value == 3 && select2.value == 1){
            resultado.innerHTML = `${numberCripto.value} dogecoins são ${numberCripto.value * 0.43} reais`
        }
        else if(select1.value == 3 && select2.value == 2){
            resultado.innerHTML = `${numberCripto.value} dogecoins são ${numberCripto.value * 0.082} euros`
        }
        else if(select1.value == 3 && select2.value == 3){
            resultado.innerHTML = `${numberCripto.value} dogecoins são ${numberCripto.value * 0.087} dólares`
        }
    }
    else{
        if(select1.value == 0 && select2.value == 0){
            resultado.innerHTML = 'Escolha um tipo de conversão!'
        }
        else if(select1.value == 0 && select2.value != 0){
            resultado.innerHTML = 'Escolha uma moeda fiduciária!'
        }
        else if(select1.value != 0 && select2.value == 0){
            resultado.innerHTML = 'Escolha uma criptomoeda!'
        }
        //Valores
        if(numberCripto.value == '' || numberCripto.value == 0){
            resultado.innerHTML = 'Digite um valor!'
        }
        else if(select1.value == 1 && select2.value == 1){
            resultado.innerHTML = `${numberCripto.value} reais são ${numberCripto.value * 0.0000067} bitcoins`
        }
        else if(select1.value == 1 && select2.value == 2){
            resultado.innerHTML = `${numberCripto.value} reais são ${numberCripto.value * 0.000099} ethereums`
        }
        else if(select1.value == 1 && select2.value == 3){
            resultado.innerHTML = `${numberCripto.value} reais são ${numberCripto.value * 2.34} dogecoins`
        }
        else if(select1.value == 2 && select2.value == 1){
            resultado.innerHTML = `${numberCripto.value} euros são ${numberCripto.value * 0.000035} bitcoins`
        }
        else if(select1.value == 2 && select2.value == 2){
            resultado.innerHTML = `${numberCripto.value} euros são ${numberCripto.value * 0,00051} ethereums`
        }
        else if(select1.value == 2 && select2.value == 3){
            resultado.innerHTML = `${numberCripto.value} euros são ${numberCripto.value * 12.20} dogecoins`
        }
        else if(select1.value == 3 && select2.value == 1){
            resultado.innerHTML = `${numberCripto.value} dólares são ${numberCripto.value * 0.000033} bitcoins`
        }
        else if(select1.value == 3 && select2.value == 2){
            resultado.innerHTML = `${numberCripto.value} dólares são ${numberCripto.value * 0.00048} ethereums`
        }
        else if(select1.value == 3 && select2.value == 3){
            resultado.innerHTML = `${numberCripto.value} dólares são ${numberCripto.value * 11.43} dogecoins`
        }
    }
}
