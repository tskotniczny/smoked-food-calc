import React, { Component } from 'react';
import Meat from './Meat';
import Cheese from './Cheese';

class App extends Component{

    state = { meat: [], cheese: [],  meatTotal: 0, meatProfit: 0, cheeseTotal: 0, cheeseProfit: 0, totalValue: 0, totalProfit: 0};

    baseState = this.state;

    onMeatQuantityChange = (total) => {
        this.setState({meatTotal: total});
    }

    onMeatMyPriceChange = (profit) => {
        this.setState({meatProfit: profit});
    }

    onCheeseQuantityChange = (total) => {
        this.setState({cheeseTotal: total});
    }

    onCheeseMyPriceChange = (profit) => {
        this.setState({cheeseProfit: profit});
    }

    calculateTotal = () => {

        var allTotal = this.state.totalValue + this.state.meatTotal + this.state.cheeseTotal;
        var allProfit = this.state.totalProfit + this.state.meatProfit + this.state.cheeseProfit;

        this.setState({totalValue: allTotal});
        this.setState({totalProfit: allProfit});
    }

    reset = () => {
        this.setState(this.baseState);
    }

    addMeatComponent = () => {
        this.setState({meat: [<Meat onMeatQuantityChange={this.onMeatQuantityChange} onMeatMyPriceChange={this.onMeatMyPriceChange}/>, this.state.meat]});
    }

    addCheeseComponent = () => {
        this.setState({cheese: [<Cheese onCheeseQuantityChange={this.onCheeseQuantityChange} onCheeseMyPriceChange={this.onCheeseMyPriceChange}/>, this.state.cheese]});
    }

    render() {
        return (
            <div>
                <h1>Kalkulator do wedzenia</h1>
                <div>
                    <button style={{padding: 100}} className='addComponent' onClick={this.addMeatComponent} style={{width: 100, height: 100 }}>Mieso</button>
                    <button style={{padding: 100}} className='addComponent' onClick={this.addCheeseComponent} style={{width: 100, height: 100 }}>Ser</button>
                </div>
                <div className='meatContainer'>
                    {this.state.meat.map(child => child)}
                    {this.state.cheese.map(child => child)}
                </div>
                <p> Suma: {this.state.totalValue} Profit: {this.state.totalProfit} </p>
                <button onClick={this.calculateTotal}>Policz </button>
                <button onClick={this.reset}>Reset </button>
                
            </div>
        )
    }
}


export default App;
