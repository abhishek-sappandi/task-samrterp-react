const initialstate = ''
const searchReducer = (state = initialstate ,action) =>{
    switch(action.type){
        case 'ADD_SEARCH':{
            return action.payload
        }
        default : {
            return state
        }
    }
}
export default searchReducer