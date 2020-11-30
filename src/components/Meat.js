import React, { Component } from 'react';
import MeatTotal from './MeatTotal';


class Meat extends Component {

    state = { meatSelectValue: 5, meatQuantity: 0, myPrice: 0, meatTotal: 0, meatProfit: 0}

    handleMeatDropdownChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    
    }
    
    handleMeatQuantityChange = e => {
        this.setState({ [e.target.name]: e.target.value});
        this.setState({ meatTotal: e.target.value * this.state.meatSelectValue});

    }
    
    handleMeatMyPriceChange = e => {
        this.setState({[e.target.name]: e.target.value });
        this.setState({meatProfit: this.state.meatTotal - e.target.value * this.state.meatQuantity});
        
    }


    render(){
        var profit = this.state.meatProfit;
        var total = this.state.meatTotal;

        this.props.onMeatQuantityChange(total);
        this.props.onMeatMyPriceChange(profit);

        //console.log("next state total: ". nextState.meatTotal);

        return(
            <div>
                <div style={{display: 'flex', flex: 60}}>
                    <p style={{margin: 10}} > Mieso </p>
                    <select name='meatSelectValue' onChange={this.handleMeatDropdownChange} style={{margin: 10}}>
                        <option value="5" > 5</option>
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
                    
                    {/* <MeatTotal meatTotal={this.state.meatTotal} meatProfit={this.state.meatProfit}/> */}
                </div>
                
            </div>
        )
    }
}

export default Meat;
