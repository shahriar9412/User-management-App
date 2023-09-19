export const reducer = (state, action) => {
    switch (action.type) {

        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        case "DELETE_USER":
            const filtedUsers = state.users.filter(user => user.id !== action.payload);
            return {
                ...state,
                users: filtedUsers
            }

        default:
            return state;
    }
}

