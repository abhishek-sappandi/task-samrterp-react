const initialstate = []
const postReducer = (state = initialstate ,action) =>{
    switch(action.type){
        case 'GET':{
            return [ ...action.payload]
        }
        case 'ADD':{
            return [...state , action.payload]
        }
        default : {
            return [...state]
        }
    }
}
export default postReducer