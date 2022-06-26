const API_ENDPOINT = `https://www.mercadobitcoin.net/api/<coin>/ticker`;

const currentCryptoCoins = [
  { name: "Cardano", code: "ADA" },
  { name: "Cosmos", code: "ATOM" },
  { name: "Axie Infinity", code: "AXS" },
  { name: "Basic Attention token", code: "BAT" },
  { name: "Bitcoin Cash", code: "BCH" },
  { name: "Bitcoin", code: "BTC" },
  { name: "Dogecoin", code: "DOGE" },
  { name: "Polkadot", code: "DOT" },
  { name: "Ethereum Name Service", code: "ENS" },
  { name: "Ethereum", code: "ETH" },
  { name: "Floki Inu", code: "FLOKI" },
  { name: "Gala", code: "GALA" },
  { name: "The Graph", code: "GRT" },
  { name: "MANA (Decentraland)", code: "MANA" },
  { name: "Polygon", code: "MATIC" },
  { name: "Solana", code: "SOL" },
  { name: "USD Coin", code: "USDC" },
  { name: "Wrapped LUNA Token", code: "WLUNA" },
  { name: "Stellar", code: "XLM" },
  { name: "XRP", code: "XRP" },
];

const getCurrencyValues = async (coin) => {
  const options = { method: "GET", mode: "cors", cache: "default" };
  return fetch(API_ENDPOINT.replace("<coin>", coin.code), options)
    .then((value) => value.json())
    .then((response) => ({
      coin: coin.name,
      code: coin.code,
      value: response.ticker.buy,
    }));
};

const loadCoinValues = async () => {
  const values = await Promise.all(
    currentCryptoCoins.map((coin) => getCurrencyValues(coin))
  );
  return values;
};

const generateTable = async () => {
  const tableHeaders = ["Nome da moeda", "Código", "Valor"];
  const rows = await loadCoinValues();
  const article = document.getElementById("cotacao");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  tableHeaders.forEach(item => {
    const th = document.createElement("th");
    th.innerText = item;
    headRow.appendChild(th);
  });

  const tbody = document.createElement("tbody");
  rows.forEach(row =>{
    const tr = document.createElement("tr");
    const coin = document.createElement("td");
    const code = document.createElement("td");
    const value = document.createElement("td");
    coin.innerText = row.coin;
    code.innerText = row.code;
    value.innerText = row.value;
    tr.appendChild(coin);
    tr.appendChild(code);
    tr.appendChild(value);
    tbody.appendChild(tr);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);
  table.appendChild(tbody);
  article.appendChild(table);
};

generateTable();
