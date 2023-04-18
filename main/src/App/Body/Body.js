import React from 'react';
import './Body.css';
import { useState } from 'react';
import { getData } from './generic';

const token = '58ff940bf2524dbaa3c6a5c1ccb991c0';
const url = 'https://favqs.com//quotes';

export default function Body() {
    const [quotes, setQuotes] = useState('');

    const getQuotes = () => {
        console.log(getData(url, token));
    }
    
  return (
    <div className='Container'>
        <div className='Header'>
            <div className='Header-text'>FavQuotes</div>
        </div>

        <div className='Main'>
            <div className='Main-text'>Creative without strategy is called art. Creative with strategy is called advertising.</div>
            <div className='Main-author'></div>
            <button onClick={getQuotes}>BUTTON</button>
        </div>
    </div>
  )
}
