import React, { Component } from 'react';
import Meat from './Meat';
import MeatTotal from './MeatTotal';

class App extends Component{

    state = { children: [], meatTotal: 0, meatProfit: 0, totalValue: 0, totalProfit: 0};


    onMeatQuantityChange = (total) => {
        var allTotal = this.state.totalValue + total;
        
        

            this.setState({meatTotal: total});
            this.setState({totalValue: allTotal});
        
            //console.log("total was empty or the same value");
        
    }

    onMeatMyPriceChange = (profit) => {
        
            var allProfit = this.state.totalProfit + profit;

        
            this.setState({meatProfit: profit});
            this.setState({totalProfit: allProfit});
        
        
            //console.log("profit was empty or the same value");
        
    }

    addMeatComponent = () => {
        this.setState({children: [<Meat onMeatQuantityChange={this.onMeatQuantityChange} onMeatMyPriceChange={this.onMeatMyPriceChange}/>, this.state.children]});
        console.log('added component');

    }

    render() {
        console.log("profit", this.state.meatProfit);
        console.log("total", this.state.meatTotal);


        return (
            <div>
                <h1>Kalkulator do wedzenia</h1>
                <div>
                    <button style={{padding: 100}} className='addComponent' onClick={this.addMeatComponent} style={{width: 100, height: 100 }}>Dodaj mieso, ser lub ryby</button>
                    <button style={{margin: 100}} className='addComponent' onClick={this.addMeatComponent} style={{width: 100, height: 100 }}>Dodaj mieso, ser lub ryby</button>
                    <button style={{margin: 10}} className='addComponent' onClick={this.addMeatComponent} style={{width: 100, height: 100 }}>Dodaj mieso, ser lub ryby</button>
                </div>
                <div className='meatContainer'>
                   
                    {this.state.children.map(child => child)}
                </div>
                <p> Meat total: {this.state.totalValue} Meat profit: {this.state.totalProfit} </p>
                
                

            </div>
        )
    }
}


export default App;
