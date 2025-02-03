const { default: sendApiReq } = require("@/services/axios/config");

export const addCourse = async title =>
  sendApiReq().post("/courses", { title });
export const editCourse = async (id, title) =>
  sendApiReq().put(`/courses/${id}`, { title });
export const removeCourse = async id =>
  sendApiReq().delete(`/courses/${id}`);