export const validate = ({ values }) => {
    const { isAttending, name, hasPlusOne, plusOneName } = values;
    if(isAttending !== null && hasPlusOne === false){
        return false;
    }
    if (isAttending !== null && hasPlusOne !== null) {
        return false;
    }
    return true;
}