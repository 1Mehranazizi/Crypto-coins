import React, { useState, useEffect } from "react";

//Styles
import styles from "./Landing.module.css";

//API
import { getCoin } from "../api/api";

//Components
import Coin from "./Coin";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
    };
    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        className={styles.search}
        value={search}
        onChange={searchHandler}
      />
      <table className={styles.table}>
        <thead className={styles.headertable}>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>MarketCap</th>
          </tr>
        </thead>
        <tbody className={styles.bodytable}>
          {searchedCoin.map((item) => (
            <Coin key={item.id} coinData={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Landing;
