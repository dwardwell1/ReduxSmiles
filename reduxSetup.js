const initial_state = {emoji:"|*‿*|"};
const moodReducer = (state = initial_state, action) => {
    switch(action.type) {
        case 'HAPPY':
            return { ...state, emoji: "ɷ◡ɷ" };
        case 'SAD':
            return {  ...state, emoji: "⊙︿⊙"};
        case 'ANGRY':
            return {  ...state, emoji: "눈_눈" };
        case 'CONFUSED': 
            return {  ...state, emoji: "(@_@)"};
        default:
            return state;
};}

const store = Redux.createStore(moodReducer)
// store.dispatch({type: 'LOG_STATE'})