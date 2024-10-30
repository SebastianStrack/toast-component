import React from 'react'
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather'

import styles from './Toast.module.css'
import { ToastContext } from '../ToastProvider'

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast(props) {
  const { message, variant, id } = props

  const { removeToast } = React.useContext(ToastContext)

  const Icon = ICONS_BY_VARIANT[variant]

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <div className='VisuallyHidden_wrapper'>{variant} - </div>
        {message}
      </p>
      <button className={styles.closeButton}>
        <X
          size={24}
          onClick={() => removeToast(id)}
          aria-label='Dismiss message'
          aria-live='off'
        />
      </button>
    </div>
  )
}

export default Toast
