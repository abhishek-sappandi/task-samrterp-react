import React, { Component } from 'react'
import {connect } from 'react-redux'
import {increment} from '../actions/countAction'


 class Counters extends Component {
    handleClick =(e)=>{
        e.preventDefault()
       this.props.dispatch(increment())
    }
    render() {
        return (
            <div>
                <button 
                className="btn btn-primary btn-sm" 
                style={{position:'absolute', top:80 ,left:400}}
                onClick={this.handleClick}
                >Create</button>
                <h3>{this.props.count}</h3>
            </div>
        )
    }
}
const mapstateToProps = (state) =>{
    return {
        count : state.count
    }
}
export default connect(mapstateToProps)(Counters)