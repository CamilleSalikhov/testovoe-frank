const CHANGE_COLOR = 'CHANGE_COLOR';


const changeMenu = (payload) => {

    return {
        type: CHANGE_COLOR,
        payload
    }
}


export {CHANGE_COLOR, changeMenu}