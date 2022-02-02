export const extractValue = (array, prop) => {
    let extractedName = array.map((item) => item[prop]);
    return extractedName;
};

export const checkExistingState = (stateName) => {
  const sessionState = sessionStorage.getItem(stateName);
  
  return sessionState && JSON.parse(sessionState);
};
 