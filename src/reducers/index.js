import { combineReducers } from 'redux'
import FetchRepos from './reducer_repos'

const rootReducer = combineReducers({
  repos: FetchRepos
})

export default rootReducer
