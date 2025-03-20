import { createReducer } from "@reduxjs/toolkit";
import { getCity } from '../utils';
import { changeCity, offersCityList } from "./action";
import { CITIES_LOCATION } from "../const";
import { offersList } from "../mocks/offers-list";

const defaultCity = getCity('Paris', CITIES_LOCATION);

const initialState = {
    city: defaultCity,
    offers: offersList
};

const reducer = createReducer(initialState, (builder) => {
    builder.
    addCase(changeCity, (state, action) => {
        state.city = action.payload;
    })
    .addCase(offersCityList, (state, action) => {
        state.offers = action.payload;
    });
});

export { reducer }; 