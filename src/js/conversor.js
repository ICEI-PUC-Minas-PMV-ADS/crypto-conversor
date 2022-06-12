const API_ENDPOINT = `https://www.mercadobitcoin.net/api/<coin>/ticker`;

const currentCryptoCoins = [
    { name: "AC Milan", code: "ACMFT" },
    { name: "Aave", code: "AAVE" },
    { name: "Cardano", code: "ADA" },
    { name: "Adshares", code: "ADS" },
    { name: "SingularityNET", code: "AGIX" },
    { name: "Aioz", code: "AIOZ" },
    { name: "Alchemix", code: "ALCX" },
    { name: "Algorand", code: "ALGO" },
    { name: "MyNeighborAlice", code: "ALICE" },
    { name: "Alliance", code: "ALLFT" },
    { name: "Alpha Venture Dao", code: "ALPHA" },
    { name: "Aston Martin Cognizant", code: "AMFT" },
    { name: "Amp", code: "AMP" },
    { name: "ANKR", code: "ANKR" },
    { name: "Aragon", code: "ANT" },
    { name: "ApeCoin", code: "APE" },
    { name: "API3", code: "API3" },
    { name: "Argentine Football Association", code: "ARGFT" },
    { name: "AS Roma", code: "ASRFT" },
    { name: "Star Atlas", code: "ATLAS" },
    { name: "Fan Token ATM", code: "ATMFT" },
    { name: "Cosmos", code: "ATOM" },
    { name: "Audius", code: "AUDIO" },
    { name: "Avalanche", code: "AVAX" },
    { name: "Axie Infinity", code: "AXS" },
    { name: "Badger DAO", code: "BADGER" },
    { name: "Balancer", code: "BAL" },
    { name: "Band Protocol", code: "BAND" },
    { name: "FC Barcelona", code: "BARFT" },
    { name: "Basic Attention token", code: "BAT" },
    { name: "Bitcoin Cash", code: "BCH" },
    { name: "Biconomy", code: "BICO" },
    { name: "Bluzelle", code: "BLZ" },
    { name: "BANCOR", code: "BNT" },
    { name: "Bitcoin", code: "BTC" },
    { name: "Braintrust", code: "BTRST" },
    { name: "Fan Token CAI", code: "CAIFT" },
    { name: "CEEK VR", code: "CEEK" },
    { name: "Chiliz", code: "CHZ" },
    { name: "Manchester City FC", code: "CITYFT" },
    { name: "Clover Finance", code: "CLV" },
    { name: "Compound", code: "COMP" },
    { name: "COTI", code: "COTI" },
    { name: "Curve Dao Token", code: "CRV" },
    { name: "Consorcio CS01", code: "CSCONS01" },
    { name: "Consorcio CS02", code: "CSCONS02" },
    { name: "Consórcio CS03", code: "CSCONS03" },
    { name: "Cartesi", code: "CTSI" },
    { name: "Civic", code: "CVC" },
    { name: "Convex Finance", code: "CVX" },
    { name: "Dai", code: "DAI" },
    { name: "Decentral Games", code: "DG" },
    { name: "DIA", code: "DIA" },
    { name: "Dogecoin", code: "DOGE" },
    { name: "Polkadot", code: "DOT" },
    { name: "DeFi Pulse Index", code: "DPI" },
    { name: "dYdX", code: "DYDX" },
    { name: "Enjin Coin", code: "ENJ" },
    { name: "Ethereum Name Service", code: "ENS" },
    { name: "Ethereum", code: "ETH" },
    { name: "Harvest Finance", code: "FARM" },
    { name: "Fetch.ai", code: "FET" },
    { name: "Filecoin", code: "FIL" },
    { name: "Floki Inu", code: "FLOKI" },
    { name: "Gala", code: "GALA" },
    { name: "Galatasaray", code: "GALFT" },
    { name: "Clube Atletico Mineiro", code: "GALOFT" },
    { name: "Aavegotchi", code: "GHST" },
    { name: "STEPN", code: "GMT" },
    { name: "Gnosis", code: "GNO" },
    { name: "Gods Unchained", code: "GODS" },
    { name: "The Graph", code: "GRT" },
    { name: "Green Satoshi Token", code: "GST" },
    { name: "Highstreet", code: "HIGH" },
    { name: "Holo", code: "HOT" },
    { name: "Internet Computer", code: "ICP" },
    { name: "Illuvium", code: "ILV" },
    { name: "Immutable X'", code: "IMX" },
    { name: "Inter Milan", code: "INTERFT" },
    { name: "JasmyCoin", code: "JASMY" },
    { name: "Juventus", code: "JUVFT" },
    { name: "Keep Network", code: "KEEP" },
    { name: "Kyber Network", code: "KNC" },
    { name: "Keep3rV1", code: "KP3R" },
    { name: "Lido DAO Token", code: "LDO" },
    { name: "Chainlink", code: "LINK" },
    { name: "LooksRare", code: "LOOKS" },
    { name: "Livepeer", code: "LPT" },
    { name: "Liquity", code: "LQTY" },
    { name: "Loopring", code: "LRC" },
    { name: "Litecoin", code: "LTC" },
    { name: "MANA (Decentraland)", code: "MANA" },
    { name: "Polygon", code: "MATIC" },
    { name: "Consorcio H01", code: "MBCCSH01" },
    { name: "Consorcio H02", code: "MBCCSH02" },
    { name: "Consorcio H03", code: "MBCCSH03" },
    { name: "Cota de Consórcio 01", code: "MBCONS01" },
    { name: "Cota de Consórcio 02", code: "MBCONS02" },
    { name: "Fluxos de Pagamento 06", code: "MBFP06" },
    { name: "Fluxos de Pagamento 07", code: "MBFP07" },
    { name: "Precatório MB SP01", code: "MBPRK01" },
    { name: "Precatório MB SP02", code: "MBPRK02" },
    { name: "Precatório MB BR03", code: "MBPRK03" },
    { name: "Precatório MB RJ04", code: "MBPRK04" },
    { name: "Fluxo de Pagamentos 5", code: "MBPRK05" },
    { name: "Precatorio MB BR06", code: "MBPRK06" },
    { name: "Precatorio MB SP07", code: "MBPRK07" },
    { name: "Token da Vila", code: "MBSANTOS01" },
    { name: "Vasco Token", code: "MBVASCO01" },
    { name: "Merit Circle", code: "MC" },
    { name: "Moss Carbon Credit", code: "MCO2" },
    { name: "Flamengo", code: "MENGOFT" },
    { name: "MetisDAO", code: "METIS" },
    { name: "Mina", code: "MINA" },
    { name: "Mirror Protocol", code: "MIR" },
    { name: "Maker", code: "MKR" },
    { name: "Maple", code: "MPL" },
    { name: "Metaverse Index", code: "MVI" },
    { name: "Natus Vincere", code: "NAVIFT" },
    { name: "Vale do Outback de 100 reais", code: "NFT00" },
    { name: "Iasy Tata", code: "NFT10" },
    { name: "NFT Feirante Abaetetubense", code: "NFT11" },
    { name: "NFT Facas Feitas", code: "NFT12" },
    { name: "NFT Mandala Yawanawa - Mariri a roda 2", code: "NFT13" },
    { name: "Dodge Dart Sedan 1970 Verde Imperial", code: "NFT14" },
    { name: "Dodge Dart Coupe 1971 Vermelho Etrusco", code: "NFT15" },
    { name: "Dodge Charger LS 1974 White", code: "NFT16" },
    { name: "Dodge Charger LS 1974 Black", code: "NFT17" },
    { name: "Combo de Dodges", code: "NFT18" },
    { name: "Teleton", code: "NFT19" },
    { name: "NFT Protetores da Floresta", code: "NFT2" },
    { name: "Topa tudo por dinheiro", code: "NFT20" },
    { name: "De casa nova", code: "NFT21" },
    { name: "Onde tudo comecou", code: "NFT22" },
    { name: "Matriarca e Patriarca", code: "NFT23" },
    { name: "Surui Riqueza e Autenticidade", code: "NFT24" },
    { name: "Teoria do Caos", code: "NFT25" },
    { name: "Tartarugas do rio Guapore", code: "NFT26" },
    { name: "Viajantes de Asas", code: "NFT27" },
    { name: "Talvez ele toque o ceu", code: "NFT28" },
    { name: "Observador", code: "NFT29" },
    { name: "NFT Protetores da Floresta - Peixe Mandy", code: "NFT3" },
    { name: "Luta", code: "NFT30" },
    { name: "Futuro", code: "NFT31" },
    { name: "Construcao", code: "NFT32" },
    { name: "Protetores da Floresta -Territorio Ancestral", code: "NFT33" },
    { name: "Protetores da Floresta - Protectores de la vida", code: "NFT34" },
    { name: "Protetores da Floresta - Peixe Tucunare", code: "NFT35" },
    { name: "Protetores da Floresta - O que voce come", code: "NFT36" },
    { name: "Protetores da Floresta - 2", code: "NFT37" },
    { name: "NFT Error", code: "NFT4" },
    { name: "NFT Simulation", code: "NFT5" },
    { name: "NFT Cosmovisao Tupinamba da Amazonia", code: "NFT6" },
    { name: "NFT Barbara Parawara", code: "NFT7" },
    { name: "NFT Liberdade de sentir", code: "NFT8" },
    { name: "NFT Pescaria", code: "NFT9" },
    { name: "NFT Index", code: "NFTI" },
    { name: "Cesta de NFTs", code: "NFTOKN01" },
    { name: "Ocean Protocol", code: "OCEAN" },
    { name: "OG eSports", code: "OGFT" },
    { name: "Origin Protocol", code: "OGN" },
    { name: "Omg Network", code: "OMG" },
    { name: "Optimism", code: "OP" },
    { name: "Opulous", code: "OPUL" },
    { name: "Orchid", code: "OXT" },
    { name: "PAX Gold", code: "PAXG" },
    { name: "Perpetual Protocol", code: "PERP" },
    { name: "Professional Fighters League", code: "PFLFT" },
    { name: "PlayDapp", code: "PLA" },
    { name: "Polkastarter", code: "POLS" },
    { name: "Polymath", code: "POLY" },
    { name: "Portugal National Team FT", code: "PORFT" },
    { name: "Power Ledger", code: "POWR" },
    { name: "Paris Saint-Germain", code: "PSGFT" },
    { name: "Quant", code: "QNT" },
    { name: "Radio Caca", code: "RACA" },
    { name: "Radicle", code: "RAD" },
    { name: "SuperRare", code: "RARE" },
    { name: "Rarible", code: "RARI" },
    { name: "Ren", code: "REN" },
    { name: "Request", code: "REQ" },
    { name: "Rally", code: "RLY" },
    { name: "Render Token", code: "RNDR" },
    { name: "Oasis Network", code: "ROSE" },
    { name: "Sport Club Internacional", code: "SACI" },
    { name: "The Sandbox", code: "SAND" },
    { name: "Alfa Romeo Racing ORLEN", code: "SAUBERFT" },
    { name: "Corinthians", code: "SCCPFT" },
    { name: "SingularityDAO", code: "SDAO" },
    { name: "Shiba Inu", code: "SHIB" },
    { name: "SKALE Network", code: "SKL" },
    { name: "Smooth Love Potion", code: "SLP" },
    { name: "Synthetix", code: "SNX" },
    { name: "Solana", code: "SOL" },
    { name: "Spell Token", code: "SPELL" },
    { name: "SPFC", code: "SPFCFT" },
    { name: "Serum", code: "SRM" },
    { name: "Stargate FInance", code: "STG" },
    { name: "Storj", code: "STORJ" },
    { name: "Sint-Truidense Voetbalvereniging", code: "STVFT" },
    { name: "Stacks", code: "STX" },
    { name: "SuperFarm", code: "SUPER" },
    { name: "SushiSwap", code: "SUSHI" },
    { name: "Synapse", code: "SYN" },
    { name: "Team Heretics", code: "THFT" },
    { name: "Alien Worlds", code: "TLM" },
    { name: "Tellor", code: "TRB" },
    { name: "TrueFi", code: "TRU" },
    { name: "UFC", code: "UFCFT" },
    { name: "Uma", code: "UMA" },
    { name: "Uniswap", code: "UNI" },
    { name: "USD Coin", code: "USDC" },
    { name: "Pax Dollar", code: "USDP" },
    { name: "Sociedade Esportiva Palmeiras", code: "VERDAO" },
    { name: "Precatorio VS SP01", code: "VSPRK01" },
    { name: "Wrapped Bitcoin", code: "WBTC" },
    { name: "WiBX", code: "WBX" },
    { name: "Wrapped LUNA Token", code: "WLUNA" },
    { name: "Stellar", code: "XLM" },
    { name: "XRP", code: "XRP" },
    { name: "Tezos", code: "XTZ" },
    { name: "BSC Young Boys", code: "YBOFT" },
    { name: "yearn.finance", code: "YFI" },
    { name: "Yield Guild Games", code: "YGG" },
]

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

let texto = "normal";

const text = () => {
  document.getElementById("resultado").innerHTML = "SEU VALOR É...";
  texto = texto === "normal" ? "changed" : "normal";
};

const inverter = () => {
  let cripto = document.getElementById("select1").innerHTML;
  let money = document.getElementById("select2").innerHTML;
  let titulo = document.getElementById("titulo");

  document.getElementById("select1").innerHTML = money;
  document.getElementById("select2").innerHTML = cripto;
  titulo.innerHTML =
    texto == "normal"
      ? "Converta moeda fiduciária em criptomoeda"
      : "Converta criptomoeda em moeda fiduciária";

  text();
};

const converter = () => {
  const result = document.getElementById("resultado");
  const first = document.getElementById("select1");
  const second = document.getElementById("select2");
  result.innerHTML =
    texto === "normal"
      ? (first.value * second.value).toFixed(2)
      : (first.value / second.value).toFixed(7);
};

const generateOptions = async () => {
  const options = await loadCoinValues();
  const select = document.getElementById("select1");
  options.forEach((option) => {
    select.options.add(new Option(option.coin, option.value));
  });
};

generateOptions();
