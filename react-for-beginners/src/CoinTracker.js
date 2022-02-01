import { useEffect, useState } from "react";

const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const handleFetch = async () => {
    const data = await (await fetch("https://api.coinpaprika.com/v1/tickers")).json();
    const splicedData = data.splice(0, 100);
    setCoins(splicedData);
    setLoading(false);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <h1>CoinTracker</h1>
      {loading === true && <h1>Loading...</h1>}
      <ul>
        {loading === false &&
          coins.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}) / ${coin.quotes.USD.price}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CoinTracker;
