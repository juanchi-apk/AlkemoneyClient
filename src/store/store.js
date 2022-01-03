import {rootReducer} from './reducers/reducers'
import { createStore , applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

  

export const store = createStore(rootReducer, composedEnhancer);
