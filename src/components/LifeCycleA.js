import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Temiyores'
        }
        console.log('LifeCycleA constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps");
        return null
    }
    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }
    shouldComponentUpdate() {
        console.log('LIfecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LIfecycleA getSnapshotBeforeUpdate");
        return null
    }
    componentDidUpdate(){
        console.log("LIfecycleA componentDidUpdate");
    }
    changeState = () => {
        this.setState({
            name:'Qayyum'
        })
    }
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
            <LifeCycleB/>
            <p>{this.state.name}</p>
               <h1>LifeCycleA</h1>  
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}

export default LifeCycleA
