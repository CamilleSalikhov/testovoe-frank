
const changeOrder = (table, order) => {
    if (order === 'ascend') {
          
        let ordered = [...table];
        ordered.sort(function(a, b) {
             
            return a.value - b.value
          });
        
          return ordered
    
         
    } else if (order === 'descend') {
    
        let ordered = [...table];
        ordered.sort(function(a, b) {
             
            return b.value - a.value
          });
        
           
          return ordered
    } else {
        return table
    }

}

export default changeOrder