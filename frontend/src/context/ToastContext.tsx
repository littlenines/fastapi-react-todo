import { createContext, useCallback, useState } from "react";
import type { Toast, ShowToast } from "@/types/toast";
import HotToast from "@/components/HotToast/HotToast";

const TOAST_TIMEOUT = 2000;

export const ToastContext = createContext<ShowToast | null>(null)

export const ToastProvider = ({children}: {children: React.ReactNode}) => {
    const [toasts, setToasts] = useState<Toast[]>([]);
    
    const showToast = useCallback<ShowToast>((message, type= "success") => {
        const id = Date.now() + Math.random();

        setToasts((prev) => [...prev, {id, message, type}]);
        setTimeout(() => setToasts((prev) => prev.filter(time => time.id != id)), TOAST_TIMEOUT)
    }, [])

    return (
        <ToastContext value={showToast}>
            {children}
            <HotToast toasts={toasts} />
        </ToastContext>
    )
}