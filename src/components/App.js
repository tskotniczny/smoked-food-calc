import React, { Component } from 'react';
import Meat from './Meat';
import Cheese from './Cheese';

class App extends Component{

    state = { meat: [], cheese: [],  meatTotal: 0, meatProfit: 0, cheeseTotal: 0, cheeseProfit: 0, totalValue: 0, totalProfit: 0};

    baseState = this.state;

    onMeatQuantityChange = (total) => {
        this.setState({meatTotal: total});
    }

    // componentDidMount() {
    //     // Calculates the total after component is mounted
    //     this.setState({ totalValue: this.calculateTotal(this.state.meatValues) });
    //   }

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

        //For now using a JS solution until I find a more 'Reacty' way to do it (redux for better data flow?)

        // Grab all inputs that start with ID 'comp'
        let inputsTotal = document.querySelectorAll('[id="total"]');
        let inputsProfit = document.querySelectorAll('[id="profit"]');

        // Trying to loop through the values and get the sum of all inputs
        let totalValue=0
        for (var i = 0; i < inputsTotal.length; i++) {
            totalValue += parseInt(inputsTotal[i].innerHTML.replace(/\D/g,''))
        }

        let totalProfit=0
        for (var i = 0; i < inputsProfit.length; i++) {
            totalProfit += parseInt(inputsProfit[i].innerHTML.replace(/\D/g,''))
        }

        
        this.setState({totalValue: totalValue});
        this.setState({totalProfit: totalProfit});

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
