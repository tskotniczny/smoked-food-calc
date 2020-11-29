import React, { Component } from 'react';
import Meat from './Meat';


class App extends Component{

    render() {

        return (
            <div>
                <h1>Kalkulator do wedzenia</h1>

                {/* addnewComponent component */ }
                <div>
                    <button className='addNewComponent' style={{width: 100, height: 100 }}>Dodaj mieso, ser lub ryby</button>
                </div>
                <Meat />

            </div>
        )
    }
}


export default App;
