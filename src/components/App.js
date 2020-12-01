import React, { Component } from 'react';
import Meat from './Meat';

class App extends Component{

    state = { children: [], meatTotal: 0, meatProfit: 0, totalValue: 0, totalProfit: 0};

    baseState = this.state;

    onMeatQuantityChange = (total) => {
        this.setState({meatTotal: total});
    }

    onMeatMyPriceChange = (profit) => {
        this.setState({meatProfit: profit});
    }

    calculateTotal = () => {

        //
        var allTotal = this.state.totalValue + this.state.meatTotal;
        var allProfit = this.state.totalProfit + this.state.meatProfit;

        this.setState({totalValue: allTotal});
        this.setState({totalProfit: allProfit});
    }

    reset = () => {
        this.setState(this.baseState);
    }

    addMeatComponent = () => {
        this.setState({children: [<Meat onMeatQuantityChange={this.onMeatQuantityChange} onMeatMyPriceChange={this.onMeatMyPriceChange}/>, this.state.children]});
    }

    render() {
        return (
            <div>
                <h1>Kalkulator do wedzenia</h1>
                <div>
                    <button style={{padding: 100}} className='addComponent' onClick={this.addMeatComponent} style={{width: 100, height: 100 }}>Dodaj mieso, ser lub ryby</button>
                </div>
                <div className='meatContainer'>
                    {this.state.children.map(child => child)}
                </div>
                <p> Meat total: {this.state.totalValue} Meat profit: {this.state.totalProfit} </p>
                <button onClick={this.calculateTotal}>Policz </button>
                <button onClick={this.reset}>Reset </button>
                
            </div>
        )
    }
}


export default App;
