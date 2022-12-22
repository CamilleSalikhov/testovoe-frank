const CHANGE_TEXT = 'CHANGE_TEXT';


const changeText = (payload) => {

    return {
        type: CHANGE_TEXT,
        payload
    }
};


export {CHANGE_TEXT, changeText}