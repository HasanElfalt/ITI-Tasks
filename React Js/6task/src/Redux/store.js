/*import { createStore } from "redux";
import thunk from "redux-thunk";
import { loggerMiddelware } from "./middleWares/loggermddleWAre";
import rootReducer from "./reducers/rootReducer";
export const store = createStore(movieReducer);
*/

import { movieReducer } from "./reducers/movieReducer";
import { createStore } from "redux";
import { compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export let store;
if (process.env.NODE_ENV === "development") {
    store = createStore(movieReducer, composeEnhancers());
} else
    store = createStore(movieReducer);


