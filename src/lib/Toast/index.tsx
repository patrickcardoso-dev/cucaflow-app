import {toast} from 'react-toastify'

export const toastify = {
  success: (message: string) => toast.success(`${message}`),
  error: (message: string) => toast.error(`${message}`)
}