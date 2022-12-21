const CHANGE_TODO = 'CHANGE_TODO';


const changeTodo = (payload) => {

    return {
        type: CHANGE_TODO,
        payload
    }
}


export {CHANGE_TODO, changeTodo}