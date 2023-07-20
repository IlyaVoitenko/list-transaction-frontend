export const filterFieldsArray = (obj) => {
  if (!obj) return;
  const { owner, ...updatedPerson } = obj;
  return updatedPerson;
};
