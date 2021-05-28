import * as constant from '../configs/action';
import { createReducer } from '../lib/common';

const initialState = {
    showAlert: false,
};

export default createReducer(initialState, {
    [constant.TOGGLE_ALERT]: (state, action) => {
        return {
            ...state,
            showAlert: !state.showAlert,
        };
    },
});
