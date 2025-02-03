export const throwError = (error) => {
  const errorMessage = (error).message;
  throw new Error(errorMessage);
}


export const throw404ErrorByErr = (
  error,
  itemName,
  itemID,
) => {
  const errorMessage = (error).message;
  console.log(errorMessage);

  throw new Error( `We Dont Have A ${itemName} With ${itemID} ID`);
};

export const throw404Error = (
  itemName,
  itemID,
) => {

  throw new Error( `We Dont Have A ${itemName} With ${itemID} ID`);
};



export const throwRouteError = () => {
  throw Error("Rout is Not Defined")
}