import {createStore , combineReducers} from 'redux'

import postReducer from '../reducers/postReducer'
import searchReducer from '../reducers/searchReducer'

const Configstore = () =>{
    const store = createStore(combineReducers({
        post : postReducer ,
        search : searchReducer
    }))
    return store
}

export default Configstore