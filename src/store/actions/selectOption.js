const SELECT_OPTION = 'SELECT_OPTION';
 



const selectOption = (payload) => {

    return {
        type: SELECT_OPTION,
        payload
    }
    
     
}

export {
    selectOption,
     SELECT_OPTION
}