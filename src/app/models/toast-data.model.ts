export interface ToastData {
    message: string;
    type?: 'success' | 'error' | 'info' | 'warning'; // Optional toast type
    duration?: number; // Optional duration in milliseconds
  }