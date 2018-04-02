import { combineReducers } from 'redux'
import contentReducer from './reducer-banks'
import selectedReducer from './reducer-selections'
import infoReducer from './reducer-code'

const rootReducer = combineReducers({
  tabs: contentReducer,
  info: infoReducer,
  selectedBank: selectedReducer,
})

export default rootReducer