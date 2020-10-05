import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {addSearch} from '../actions/searchAction'
import { AiOutlineCloseCircle } from "react-icons/ai";
class Home extends Component {
    constructor(){
        super()
        this.state = {
            search : ''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.history.push('/list')
        this.props.dispatch(addSearch(this.state.search))
    }
    handleClear = () => {
        this.setState({ search : ''})
    }
    render() {
        return (
            <div align='center'>

                <form onSubmit={this.handleSubmit}>

                    <input
                    type='submit'
                    value='search'
                    />

                    <input  
                    type='text'
                    value={this.state.search}
                    name='search'
                    placeholder='search'
                    onChange = {this.handleChange}
                    />

                    <button><AiOutlineCloseCircle onClick={this.handleClear} size='14'/></button>

                    <br/><br/>
                </form>

                <button><Link to='/create'>New Post</Link></button>
                <button><Link to='/list'>Published</Link></button>
            </div>
        )
    }
}
const mapStateToPrps = (state) =>{
    return {
        post : state.post
    }
  }
export default connect(mapStateToPrps)(Home)