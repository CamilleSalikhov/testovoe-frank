const SEARCH_VALUE = 'SEARCH_VALUE';


const setSearchValue = (payload) => {

    return {
        type: SEARCH_VALUE,
        payload
    }
};


export {SEARCH_VALUE, setSearchValue}