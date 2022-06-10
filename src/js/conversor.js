const API_ENDPOINT = `https://www.mercadobitcoin.net/api/<coin>/ticker`

const currentCryptoCoins = [
    {
        name: "Cardano",
        code: "ADA"
    },
    {
        name: "Basic Attention token",
        code: "BAT"
    },
    {
        name: "Bitcoin",
        code: "BTC"
    },
    {
        name: "Stellar",
        code: "XLM"
    },
    {
        name: "Ethereum Name Service",
        code: "ENS"
    },
    {
        name: "Ethereum",
        code: "ETH"
    },
]

const getCurrencyValues = async (coin) => {
    const options = { method: 'GET', mode: 'cors', cache: 'default' };
    return fetch(API_ENDPOINT.replace("<coin>", coin.code), options)
        .then(value => value.json())
        .then(response => ({ coin: coin.name, code: coin.code, value: response.ticker.buy }));
}

const loadCoinValues = async () => {
    const values = await Promise.all(currentCryptoCoins.map(coin => getCurrencyValues(coin)));
    return values;
}

let texto = 'normal'

const text = () => {
    document.getElementById('resultado').innerHTML = 'SEU VALOR É...'
    texto = texto === 'normal'? 'changed': 'normal'
}

const inverter = () => {
    let cripto = document.getElementById('select1').innerHTML
    let money = document.getElementById('select2').innerHTML
    let titulo = document.getElementById('titulo')

    document.getElementById('select1').innerHTML = money
    document.getElementById('select2').innerHTML = cripto
    titulo.innerHTML = texto == 'normal' ? 'Converta moeda fiduciária em criptomoeda' : 'Converta criptomoeda em moeda fiduciária'

    text()
}

const converter = () => {
    const result = document.getElementById('resultado')
    const first = document.getElementById('select1')
    const second = document.getElementById('select2')
    result.innerHTML = texto === 'normal' ? (first.value * second.value).toFixed(2) : (first.value / second.value).toFixed(7);
}

const generateOptions = async () => {
    const options = await loadCoinValues()
    const select = document.getElementById("select1");
    options.forEach(option => {
        select.options.add(new Option(option.coin, option.value))
    })
}

generateOptions()
