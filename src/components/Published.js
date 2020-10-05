import React, { Component } from 'react'
import { connect} from 'react-redux'

class Published extends Component {

    render() {
        const title = this.props.post.filter(ele => ele.title.includes(this.props.search))
        return(
            <div align='center'>
                <br/><br/>
                <h2>No of posts - {this.props.post.length}</h2>
                <ul>
                {
                    ( title.length > 0 ? title : this.props.post.filter(ele => ele.text.includes(this.props.search))).map((item , index) => {
                    return (
                        <li
                        key={index}
                        style={{ height: '150px', width : '600px', border: '1px solid black' }}
                        >
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        </li>
                    );
                    })
                }
        
            </ul>
          </div>
        )
    }
}
const mapStateToPrps = (state) =>{
    return {
        post : state.post ,
        search : state.search
    }
}
export default connect(mapStateToPrps)(Published)
