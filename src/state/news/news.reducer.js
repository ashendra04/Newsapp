import newsActionsTypes from './news.types';
import { SUCCESS } from '../../utils/constants';

const initialState = {
    articles: [],
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case newsActionsTypes.GET_ARTICLES + SUCCESS:
            return {
                ...state,
                articles: payload.articles,
            }
        default:
            return state ;
    };
};