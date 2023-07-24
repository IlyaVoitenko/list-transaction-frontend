export const filterFieldsArray = (obj) => {
  if (!obj) return;
  const { owner, isGot, dateReceiving, ...updatedPerson } = obj;
  return updatedPerson;
};
