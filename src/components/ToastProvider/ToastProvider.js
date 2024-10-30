import React from 'react'
import { useEscapeKey } from '../../hooks/useEscapeKey'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  useEscapeKey(() => setToasts([]))

  const addToast = (message, variant) => {
    setToasts([...toasts, { message, variant, id: crypto.randomUUID() }])
  }

  const removeToast = id => {
    setToasts(toasts.filter(toast => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
