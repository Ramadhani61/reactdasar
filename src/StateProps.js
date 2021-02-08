import React, { Component } from 'react'

//ini jelas class komponen panggil dengan rce
export class StateProps extends Component {
    constructor(props){
        super(props);
        this.state={
            makanan : 'bakso'
        }
    }
    render() {
        return (
            <div>
                <h3>{this.state.makanan}</h3>
                <button onClick={()=> this.setState({makanan:"soto"})}>Ganti makanan</button>
            </div>
        )
    }
}

export default StateProps
