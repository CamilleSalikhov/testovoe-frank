const DELETE_TODO = 'DELETE_TODO';


const deleteTodo = (payload) => {

    return {
        type: DELETE_TODO,
        payload
    }
}


export {DELETE_TODO, deleteTodo}