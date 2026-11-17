const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export class ApiError extends Error {
    status: number;
    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

export async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
        ...options,
        headers: {"Content-Type": "application/json", ...options.headers},
    });

    if(!res.ok) {
        const body = await res.json().catch(() => null);

        const message = typeof body?.detail === "string" ? body.detail : res.statusText;
        throw new ApiError(res.status, message); 
    }

    return res.status === 204 ? (undefined as T) : res.json();
}