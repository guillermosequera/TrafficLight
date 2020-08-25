import React from 'react'

export default class TrafficLight extends React.Component{

    constructor(){
        super();
        this.state = {
            clickLight: null
        };
    }

    render(){

        let redExtraClass = '';
        if(this.state.clickLight === 'red') redExtraClass = 'selected';
        let yellowExtraClass = '';
        if(this.state.clickLight === 'yellow') yellowExtraClass = 'selected';
        let greenExtraClass = '';
        if(this.state.clickLight === 'green') greenExtraClass = 'selected';


        return (
            <div>
            <div id="trafficup"></div>
            <div id="container">
                <div className={"red light " + redExtraClass} onClick={() => this.setState({ clickLight: 'red'})}></div>
                <div className={"yellow light " + yellowExtraClass} onClick={() => this.setState({ clickLight: 'yellow'})}></div>
                <div className={"green light " + greenExtraClass} onClick={() => this.setState({ clickLight: 'green'})}></div>
            </div>
                
            </div>
        )
    }
}
