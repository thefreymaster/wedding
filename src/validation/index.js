export const validate = ({ values }) => {
    const { name, hasPlusOne, plusOneName } = values;
    if(name.length > 0 && hasPlusOne === false){
        return false;
    }
    if (name.length > 0 && hasPlusOne && plusOneName.length > 0) {
        return false;
    }
    return true;
}