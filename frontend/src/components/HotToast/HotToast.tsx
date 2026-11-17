import type { Toast } from "@/types/toast"
import styles from "./HotToast.module.css"

const HotToast = ({ toasts }: { toasts: Toast[] }) => {
    return (
        <div className={styles.hot_toasts}>
            {toasts.map((toast) => (
                <div key={toast.id} className={`${styles.hot_toast} ${styles[`hot_toast_${toast.type}`]}`}>{toast.message}</div>
            ))}
        </div>
    )
}

export default HotToast