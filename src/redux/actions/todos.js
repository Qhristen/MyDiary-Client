// Types
import { TEST_TODOS } from '../constants/index';

export const simpleAction = () => (dispatch) => {
    dispatch({
        type: TEST_TODOS,
        payload: 'Test redux in action. Okay it works'
    });
};