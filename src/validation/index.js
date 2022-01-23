export const validate = ({ values }) => {
    const { isAttending, hasPlusOne, hasPlusOneAttending } = values;
    console.log(values)
    if (hasPlusOne) {
        if (isAttending !== undefined && hasPlusOneAttending !== undefined) {
            return false;
        }
        return true;
    }
    if(!hasPlusOne){
        if (isAttending !== null) {
            return false;
        }
        return true;
    }
    return true;
}