export type ToastType = "success" | "error";

export type Toast = {id: number; message: string; type: ToastType};

export type ShowToast = (message: string, type?: ToastType) => void;