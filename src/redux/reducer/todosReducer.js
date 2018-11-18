import { TEST_TODOS } from '../constants/index';

export default function testTodos(state = {}, action = {}) {
    switch (action.type) {
        case TEST_TODOS:
            return action.payload;
        default:
            return state;
    }
}