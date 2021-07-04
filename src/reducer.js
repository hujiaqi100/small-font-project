const defaultState = {
    inputValue: '',
    list: [],
    current: 0,
    isEmpty: false,
    selectText: {}
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    if (action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === 'add_value') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue);
        return newState;
    }
    if (action.type === 'SELECT_CURRENT') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.current = action.value;
        return newState;
    }
    return state;
}