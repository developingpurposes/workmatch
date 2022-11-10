import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export function toast() {}

export const ToastSuccess = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  background: "#168821",
  color: "#FFFFFF",
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", MySwal.stopTimer);
    toast.addEventListener("mouseleave", MySwal.resumeTimer);
  },
});

export const ToastError = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  background: "#B53147",
  color: "#FFFFFF",
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", MySwal.stopTimer);
    toast.addEventListener("mouseleave", MySwal.resumeTimer);
  },
});
