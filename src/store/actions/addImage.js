const ADD_IMAGE = 'ADD_IMAGE';


const addImage = (payload) => {

    return {
        type: ADD_IMAGE,
        payload
    }
}


export {ADD_IMAGE, addImage}