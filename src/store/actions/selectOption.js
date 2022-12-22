const SELECT_OPTION = 'SELECT_OPTION';
 



const selectOption = (payload) => (dispatch, getState) => {
    if (payload === 'ascend') {
          
        let order = [...getState().table.table];
        order.sort(function(a, b) {
             
            return a.value - b.value
          });
        
           

        dispatch ({
            type:SELECT_OPTION,
            payload:order
    
        })
    } else if (payload === 'descend') {

        let order = [...getState().table.table];
        order.sort(function(a, b) {
             
            return b.value - a.value
          });
        
           


        dispatch ({
            type:SELECT_OPTION,
            payload: order
    
        })
    }
     
}

export {
    selectOption,
     SELECT_OPTION
}