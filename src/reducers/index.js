import { combineReducers } from 'redux';
import PromoterReducer from './reducer_promoter';
import ConfigReducer from './reducer_config';


import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  promoter : PromoterReducer,
  config : ConfigReducer, 

  form : formReducer,


});

export default rootReducer;
