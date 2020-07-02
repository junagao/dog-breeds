import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'reducers';
import thunk from 'middleware';

const store = createStore(reducer, composeWithDevTools(thunk));

export default store;
