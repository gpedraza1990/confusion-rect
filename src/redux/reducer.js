import { DISHES } from "../shered/dishes";
import { COMMENTS } from "../shered/comment";
import { PROMOTIONS } from "../shered/promotions";
import { LEADERS } from "../shered/leaders";


export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};