export const addTodo = todo => {
    return { type: "ADD_TODO", payload: todo }
}

export const deleteTodo = id => {
    return { type: "DELETE", payload: id }
}

export const editTodo = (todo) => {
    return { type: "EDIT", payload: todo }
}

export const completeTodo = id => {
    return { type: "COMPLETE", payload: id }
};


