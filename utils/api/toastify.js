  // @ts-nocheck

import {  AxiosResponse } from "axios";
import { toast, TypeOptions } from "react-toastify";

export const notify = (title, type = "info", time = 5000) =>
  toast(title, {
    type,
    position: "top-right",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  });

export const promiseNotify = async (
  pendingTitle,
  reqCallback,
  resultCallback,
) => {
  const loading = toast.loading(pendingTitle, {
    theme: "dark",
    
  });

  await reqCallback()
    .then((response) => {
      toast.update(loading, {
        render: response?.data?.message || response?.message,
        type: "success",
        isLoading: false,
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        closeButton: true,
      });
      resultCallback && resultCallback(response.data);
    })
    .catch((err) =>{
      toast.update(loading, {
        render: err.message,
        type: "error",
        isLoading: false,
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        closeButton: true,
        
      })
    });
};
