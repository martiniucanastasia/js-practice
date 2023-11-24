export function findObjectAnalogy(objects, propertyToCheck) {
  let objectKeys = Object.keys(propertyToCheck);
  let filteredObject = objects.filter((object) => {
    // Every key in the object exist as property and has the value?
    let foundObject = objectKeys.every((key) => {
      if (object.hasOwnProperty(key) && object[key] === propertyToCheck[key]) {
        return true;
      }
    });
    return foundObject;
  });

  return filteredObject;
}
