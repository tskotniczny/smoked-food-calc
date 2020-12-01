import React, { Component } from 'react';


class Meat extends Component {

    state = { meatSelectValue: 35, meatQuantity: 0, myPrice: 0, meatTotal: 0, meatProfit: 0}

    handleMeatDropdownChange = e => {
        this.setState({ meatSelectValue: e.target.value });
    
    }
    
    handleMeatQuantityChange = e => {
        this.setState({ meatQuantity: e.target.value});

        var meatTotal = e.target.value * this.state.meatSelectValue
        this.setState({ meatTotal: meatTotal});

        this.props.onMeatQuantityChange(meatTotal);

    }
    
    handleMeatMyPriceChange = e => {
        this.setState({myPrice: e.target.value });

        var meatTotalProfit = this.state.meatTotal - e.target.value * this.state.meatQuantity;
        this.setState({meatProfit: meatTotalProfit});

        this.props.onMeatMyPriceChange(meatTotalProfit);
    }

    render(){
        return(
            <div>
                <div style={{display: 'flex', flex: 60}}>
                    <p style={{margin: 10}} > Mieso </p>
                    <select name='meatSelectValue' onChange={this.handleMeatDropdownChange} style={{margin: 10}}>
                        <option value="35" > Schab </option>
                        <option value="35" > Boczek </option>
                        <option value="35" > Karczek </option>
                        <option value="30" > Poledwica </option>
                    </select>
                    <input name='meatQuantity' 
                        onChange={this.handleMeatQuantityChange} 
                        style={{margin: 10}} 
                        type='number' 
                        placeholder="Ilosc sztuk">
                    </input>
                    <input name='myPrice' 
                        onChange={this.handleMeatMyPriceChange} 
                        style={{margin: 10}} 
                        type='number' 
                        placeholder="Moja cena za sztuke">
                    </input>
                    <p style={{margin: 10}} >Mieso Suma: {this.state.meatTotal} </p>
                    <p style={{margin: 10}} >Mieso moj zysk: {this.state.meatProfit}  </p>
                    
                </div>
                
            </div>
        )
    }
}

export default Meat;
