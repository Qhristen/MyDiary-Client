import { combineReducers } from 'redux';
import testTodos from '../redux/reducer/todosReducer';

const rootReducer = combineReducers({
  testTodos,
});

export default rootReducer;