import React from "react";

//styles
import styles from "./Coin.module.css";

const Coin = ({ coinData }) => {
  return (
    <tr className={styles.row}>
      <td>
        <span>{coinData.market_cap_rank}</span>
      </td>
      <td className={styles.name}>
        <img src={coinData.image} alt={coinData.name} />
        <p className={styles.allname}>{coinData.name}</p>
        <p className={styles.symbolname}>{coinData.symbol.toUpperCase()}</p>
      </td>
      <td>
        <p className={styles.price}>
          ${coinData.current_price.toLocaleString()}
        </p>
      </td>
      <td>
        <p
          className={
            coinData.price_change_percentage_24h > 0
              ? styles.greenprice
              : styles.redprice
          }
        >
          {coinData.price_change_percentage_24h.toFixed(2)}
        </p>
      </td>
      <td className={styles.coinMarketCap}>
        <p className={styles.price}>${coinData.market_cap.toLocaleString()}</p>
      </td>
    </tr>
  );
};

export default Coin;
