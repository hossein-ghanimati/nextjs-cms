export const throwErrorText = (text) => {
  throw new Error(text);
}

export const throwError = (error) => {
  const errorMessage = (error).message;
  throwErrorText(errorMessage)
}

export const throw404Error = (
  itemName,
  itemID,
) => {

  throwErrorText(`We Dont Have A ${itemName} With ${itemID} ID`);
};


export const throw404ErrorByErr = (
  error,
  itemName,
  itemID,
) => {
  const errorMessage = (error).message;
  console.log(errorMessage);

  throw404Error(itemName, itemID);
};





export const throwRouteError = () => {
  throw Error("Rout is Not Defined")
}