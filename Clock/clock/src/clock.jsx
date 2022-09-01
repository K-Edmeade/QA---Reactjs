import { Component } from "react";
export default class Clock extends Component{

    constructor(props){
        super(props);
        this.state={
            date: new Date(),
            text:"",
            boolForShould: true
        }
        console.log("The constructor sets the time at " +this.state.date)

        
    }
    componentWillMount(){
        console.log(`componentWillMount sets the time at `+this.state.date);
    }

    componentDidMount(){
        console.log(`componentDidMount sets the time as `+this.state.date);
        this.timerID = setInterval(() => this.tock(), (1000)) 
    }

    componentWillUpdate(){
        console.log(`componentWillUpdate sets the time at `+this.state.date);
    }

    shouldComponentUpdate(){
        console.log(`shouldComponentUpdate sets the time at `+this.state.date);
        return this.state.boolForShould;
    }

    componentWillUnmount(){
        console.log(`componentWillUnmount sets the time at `+this.state.date);
    }

    componentDidUpdate(){
        console.log(`componentDidUpdate sets the time at `+this.state.date);
    }
    tock(){
        this.setState({date: new Date()});
    }

    stateHandle = () => {
        console.log("stateHandle sets the time as :" + this.state.date);
        this.setState({
            text: "Updated"
        });
    };
    
    stateHandle2 = () => {
        console.log("stateHandle2 sets the time as :" + this.state.date);
        clearInterval(this.timerID);
        this.setState({
            text: "Updated and timer has stopped"
        });
    };
    
    shouldHandle = () => {
        console.log("shouldHandle sets the time as :" + this.state.date);
        this.setState({
            boolForShould: !this.state.boolForShould
        })
        };

        render() {
            return (
                <div>
                    <h1>{this.state.text}</h1>
                    <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                    <button onClick={this.stateHandle}>Changes State</button>
                    <button onClick={this.stateHandle2}> Changes State and stops timer </button>
                    <button onClick={this.shouldHandle}> Changes shouldComponentUpdate </button>
                </div>
            );
        }

}