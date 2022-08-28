import { legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE_ || compose

const store = createStore(
    rootReducer,
    composeEnhacers(applyMiddleware(thunk))
);

export default store