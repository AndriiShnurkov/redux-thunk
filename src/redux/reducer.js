import { GET_DATA, SUCCESS_DATA, ERROR_DATA } from "./types";

const postInitialState = {
    posts: [],
    isLoading: false
};

const reducer = (state = postInitialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return { ...state, isLoading: !state.isLoading };

        case SUCCESS_DATA:
            return { ...state, posts: [...action.payload] };

        case ERROR_DATA:
            return state;

        default:
            return state;
    }
};

export default reducer;

