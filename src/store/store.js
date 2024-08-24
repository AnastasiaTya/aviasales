import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

import sortingReducer from './reducers/sortingReducer/sortingReducer'
import filterReducer from './reducers/filterReducer/filterReducer'
import ticketReducer from './reducers/ticketReducer/ticketReducer'

const rootReducer = combineReducers({
  sorting: sortingReducer,
  filters: filterReducer,
  tickets: ticketReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store
