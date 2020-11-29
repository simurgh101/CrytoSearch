import './App.css';
import Header from './Header';
import CoinGecko from './apis/CoinGecko';
import { useEffect, useState } from 'react';
import Coin from './components/Coin';

function App() {
  const [coins, setCoins] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isloading, setIsLoading] = useState(false);

  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await CoinGecko;
      setCoins(response.data);
      setIsLoading(false);
      console.log(response.data);
    };
    fetchData();
  }, []);

  const Search = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const filterSearch = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const Ren = () => {
    if (isloading) {
      return (
        <div class='items-container'>
          <div>....Loading</div>
        </div>
      );
    }
    return (
      <div className='items-container'>
        {filterSearch.map((coin) => {
          return (
            <Coin
              name={coin.name}
              symbol={coin.symbol}
              img={coin.image}
              price={coin.current_price}
              volume={coin.total_volume}
              priceChange={coin.price_change_percentage_24h}
              marketcap={coin.market_cap}
            />
          );
        })}
      </div>
    );
  };
  return (
    <div>
      <Header />
      <div className='App'>
        <div className='search'>
          <h1 className='coin-text'>Search a currency</h1>
          <form>
            <input
              type='text'
              placeholde='Searh'
              className='input'
              onChange={Search}
            />
          </form>
        </div>
        <Ren />
      </div>
    </div>
  );
}

export default App;
