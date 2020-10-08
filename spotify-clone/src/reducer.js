import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [],
    discover_weekly: null,
    playing: false,
    item: null,
    //REMOVE AFTER FINSIH DDEPLOYING
    // token: 'BQAm1sik0mrimWDwDZXTqrt52iduob_BjPxS_NrK3mJkE7t4BCgB7Uw80cmg78atg9miYbA-jhaofmm86uQsvlUscNduZb9cQELYT42ucCfQQ_n37m57Po3Qd7YjpxjRlSl0cD5a4xZxBByBs1KzrMgnt5IH7fyPCv82kGyt75z_dpeL',
};

const reducer = (state, action) => {
    console.log(action);

    //Action -. type, [payload]

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
};

export default reducer;

