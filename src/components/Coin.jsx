import React from 'react';
import './Coin.css';

const Coin = ({ name, price, symbol, marketcap, volume, img, priceChange }) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={img} alt='crypto' />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>Price: ${price}</p>
                    <p className='coin-volume'>
                        Volume: ${volume.toLocaleString()}
                    </p>

                    {priceChange ? (
                        priceChange < 0 ? (
                            <p className='coin-percent red'>
                                {priceChange.toFixed(2)}%
                            </p>
                        ) : (
                            <p className='coin-percent green'>
                                {priceChange.toFixed(2)}%
                            </p>
                        )
                    ) : (
                        <p>None</p>
                    )}

                    <p className='coin-marketcap'>
                        MarketCap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Coin;
