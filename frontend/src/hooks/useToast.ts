import { use } from "react";
import { ToastContext } from "@/context/ToastContext";

export const useToast = () => {
    const showToast = use(ToastContext);
    
    if(!showToast) throw new Error("useToast must be used inside <ToastProvider>");
    return showToast;
}