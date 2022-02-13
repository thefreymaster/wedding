export const validate = ({ values }) => {
  const { isAttending, hasPlusOne, hasPlusOneAttending, isAttendingWelcome } =
    values;

    if (hasPlusOne) {
    if (
      isAttending !== undefined &&
      hasPlusOneAttending !== undefined &&
      isAttendingWelcome !== undefined
    ) {
      return false;
    }
    return true;
  }
  if (!hasPlusOne) {
    if (isAttending !== null) {
      return false;
    }
    return true;
  }
  return true;
};
