import { NextApiResponse } from "next";

export const send404Response = (
  res,
  error,
) => {
  const errorMessage = (error).message;
  console.log(errorMessage);

  return res.status(404).json({
    message: errorMessage
  });
};
