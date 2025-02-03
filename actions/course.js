const { default: sendApiReq } = require("@/services/axios/config");

export const addCourse = async title =>
  sendApiReq().post("/courses", { title });