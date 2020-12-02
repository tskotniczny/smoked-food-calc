import React, { Component } from 'react';


class Cheese extends Component {

    state = { cheeseSelectValue: 7, cheeseQuantity: 0, myPrice: 0, cheeseTotal: 0, cheeseProfit: 0}

    handleCheeseDropdownChange = e => {
        this.setState({ cheeseSelectValue: e.target.value });
    
    }
    
    handleCheeseQuantityChange = e => {
        this.setState({ cheeseQuantity: e.target.value});

        var cheeseTotal = e.target.value * this.state.cheeseSelectValue
        this.setState({ cheeseTotal: cheeseTotal});

        this.props.onCheeseQuantityChange(cheeseTotal);

    }
    
    handleCheeseMyPriceChange = e => {
        this.setState({myPrice: e.target.value });

        var meatTotalProfit = this.state.cheeseTotal - e.target.value * this.state.cheeseQuantity;
        this.setState({cheeseProfit: meatTotalProfit});

        this.props.onCheeseMyPriceChange(meatTotalProfit);
    }

    render(){
        return(
            <div>
                <div style={{display: 'flex', flex: 60}}>
                    <p style={{margin: 10}} > Mieso </p>
                    <select name='cheeseSelectValue' onChange={this.handleCheeseDropdownChange} style={{margin: 10}}>
                        <option value="7" > Bialy </option>
                        <option value="7" > Chilli cayenne </option>
                        <option value="7" > Ziola prowansalskie </option>
                        <option value="7" > Zwykly </option>
                        <option value="7" > Suszone pomidory z czosnkiem i bazylia </option>
                        <option value="7" > Suszone pomidory z czarnszka i czosnkiem niedzwiedzim </option>
                        <option value="7" > Z prazona cebula </option>
                        <option value="10" > Zolty </option>
                    </select>
                    <input name='cheeseQuantity' 
                        onChange={this.handleCheeseQuantityChange} 
                        style={{margin: 10}} 
                        type='number' 
                        placeholder="Ilosc sztuk">
                    </input>
                    <input name='myPrice' 
                        onChange={this.handleCheeseMyPriceChange} 
                        style={{margin: 10}} 
                        type='number' 
                        placeholder="Moja cena za sztuke">
                    </input>
                    <p id='total' style={{margin: 10}} > Suma do zaplaty: {this.state.cheeseTotal} </p>
                    <p id='profit' style={{margin: 10}} > Moj zysk: {this.state.cheeseProfit}  </p>
                    
                </div>
                
            </div>
        )
    }
}

export default Cheese;
