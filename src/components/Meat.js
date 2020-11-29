import React, { Component } from 'react';


class Meat extends Component {

    state = { meatSelectValue: 5, quantity: 0, myPrice: 0, meatTotal: 0, meatProfit: 0}

    handleMeatDropdownChange = e => {
        this.setState({ meatSelectValue: e.target.value });
    
    }
    
    handleMeatQuantityChange = e => {
        this.setState({ quantity: e.target.value});
        this.setState({ meatTotal: e.target.value * this.state.meatSelectValue});
    }
    
    handleMeatMyPriceChange = e => {
        this.setState({myPrice: e.target.value });
        this.setState({meatProfit: this.state.meatTotal - e.target.value * this.state.quantity});
    }

    render(){
        
        console.log('quantity', this.state.quantity);
        console.log('my price', this.state.myPrice);

        return(
            <div>
                <div style={{display: 'flex'}}>
                    <p style={{margin: 10}} > Mieso </p>
                    <select id='dropdown' onChange={this.handleMeatDropdownChange} style={{margin: 10}}>
                        <option value="5" > 5</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <input id='meatQuantity' 
                        onChange={this.handleMeatQuantityChange} 
                        style={{margin: 10}} 
                        type='number' 
                        placeholder="Ilosc sztuk">
                    </input>
                    <input id='meatProfit' 
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
