import React, { Component } from 'react';
import Meat from './Meat';

class App extends Component{

    state = { children: []}

    addMeatComponent = () => {
        this.setState({children: [<Meat />, this.state.children]});
        
    }



    render() {

        console.log('count: ', this.state.counter);

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
                
                

            </div>
        )
    }
}


export default App;
