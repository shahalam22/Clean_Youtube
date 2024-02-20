import { action, persist, thunk } from 'easy-peasy'

// // THIS WAS WRONG AS WE USED getState() IN THUNK
// const favoriteModel = persist({
//     items: [],
//     addToFavorites: thunk(({removeFromFavorites}, playlistId, {getState}) => {
//         // if(getState().items.includes(playlistId)){
//         //     removeFromFavorites(playlistId);
//         //     return;
//         // } else {
//         //     getState().items.push(playlistId);
//         // }
//         getState().items.push(playlistId);
//     }),
//     removeFromFavorites: action((state, playlistId) => {
//         state.items = state.items.filter((id) => id !== playlistId)
//     })
// })

// export default favoriteModel;

const favoriteModel = persist({
    items: [],
    addToFavorites: action((state, playlistId) => {
        const index = state.items.indexOf(playlistId);

        if (index !== -1) {
            state.items.splice(index, 1); // Remove playlistId if it exists
        } else {
            state.items.push(playlistId); // Add playlistId if it doesn't exist
        }
    }),
    removeFromFavorites: action((state, playlistId) => {
        state.items = state.items.filter((id) => id !== playlistId);
    })
});

export default favoriteModel;
