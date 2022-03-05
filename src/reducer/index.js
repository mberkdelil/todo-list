const initialState = {
    todos: [
        {
            id: 1, title: "Learn React", complete: false
        },
        {
            id: 2, title: "Wash The Car", complete: false
        },
        {
            id: 3, title: "Go To The Market", complete: false
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state, todos: [...state.todos, {
                    id: state.todos.length + 1,
                    title: action.payload,
                    complete: false
                }]
            }

        case "DELETE":
            return {
                ...state, todos: state.todos.filter(todo => todo.id !== action.payload)
            }

        case "EDIT":
            return {
                ...state, todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
            }

        case "COMPLETE":
            return {
                ...state, todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo)
            }

        default:
            return state;
    }
};