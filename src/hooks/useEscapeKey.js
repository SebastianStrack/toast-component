import React from 'react'

export const useEscapeKey = callback => {
  React.useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        callback()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => document.removeEventListener('keydown', handleEscape)
  }, [callback])
}
