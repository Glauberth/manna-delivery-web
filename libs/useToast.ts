import { toast, ToastOptions, Bounce } from "react-toastify";

type ToastType = "success" | "error" | "info" | "warning";

const useToast = () => {
  const showToast = (message: string, type: ToastType = "success", options: ToastOptions = {}) => {
    const toastTypes = {
      success: toast.success,
      error: toast.error,
      info: toast.info,
      warning: toast.warn,
    };

    const toastFunction = toastTypes[type];

    toastFunction(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      ...options,
    });
  };

  return { showToast };
};

export default useToast;
