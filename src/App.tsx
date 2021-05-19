import React from 'react';
import './App.css';
/* import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'; */

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <span className="Date-info">18 de Mayo</span>
                <span className="Date-info">21:45</span>
            </div>
            <div className="Column-header">
                <span className="Column-first">Symbol</span>
                <span className="Column-name">Price</span>
                <span className="Column-name">Trend</span>
                <span className="Column-name">DI</span>
                <span className="Column-name">ADX</span>
            </div>
            <div className="Coin">
                <img className="Coin-logo" src="/coins/btc.png" alt=""/>
                <div className="Cell-first Symbol-price">
                    <p className="Name">BTC</p>
                    <p className="Price">43,395</p>
                </div>
                <img className="Cell Trend" src="/trends/bull.png" alt=""/>
                <div className="Cell">
                    <p className="Di-pos">23</p>
                    <p className="Di-neg">23</p>
                </div>
                <div className="Cell Adx">23</div>
            </div>
            <hr/>

            <div className="Coin">

            </div>
        </div>
    );
}

export default App;
