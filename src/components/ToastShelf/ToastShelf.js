import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'
import { ToastContext } from '../ToastProvider'

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext)

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
      {toasts.map(({ message, variant, id }, index) => (
        <li className={styles.toastWrapper} key={index}>
          <Toast message={message} variant={variant} id={id} />
        </li>
      ))}
    </ol>
  )
}

export default ToastShelf
