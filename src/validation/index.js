export const validate = ({ values }) => {
    const { attending, name, hasPlusOne, plusOneName } = values;
    if(attending !== null && name.length > 0 && hasPlusOne === false){
        return false;
    }
    if (attending !== null && name.length > 0 && hasPlusOne && plusOneName.length > 0) {
        return false;
    }
    return true;
}