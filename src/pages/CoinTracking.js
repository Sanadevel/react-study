import { useEffect, useState } from "react";

export default function CoinTracking() {
  const [loading, setloading] = useState(true);
  const [coins, setcoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((Response) => Response.json())
      .then((json) => {
        setcoins(json);
        setloading(false);
      });
  }, []);
  return (
    <>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (
        <div>loading...</div>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </>
  );
}
