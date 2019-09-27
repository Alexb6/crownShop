// import SHOP_DATA from './shop.data';

import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    // collections: SHOP_DATA
    collections: null,
    // with redux-thunk
    isFecthing: false,
    errorMessage: ""
}

const shopReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        // Before redux-thunk, using the firestore method onSnapshot
        /* case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            } */
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFecthing: true
            };
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFecthing: false,
                collections: action.payload
            };
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFecthing: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

export default shopReducer;