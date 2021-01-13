import { combineReducers } from 'redux';
import { reducer as data } from './data/data';
import { reducer as app } from './app/app';
import { reducer as auth } from './user/user';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app,
  [NameSpace.AUTH]: auth,
});
