import { Alert, Button } from 'antd'
import { FunctionComponent } from 'react'

import styles from './ErrorRetryComponent.module.scss'

interface ErrorRetryComponentProps {
  onRetry: () => void
}

const ErrorRetryComponent: FunctionComponent<ErrorRetryComponentProps> = ({ onRetry }) => {
  return (
    <div className={styles['container-error-component']}>
      <Alert
        message="Произошла ошибка!"
        showIcon
        type="error"
        className={styles['error-alert']}
        action={
          <Button danger type="primary" size="small" className={styles['error-alert__btn']} onClick={onRetry}>
            Повторный запрос
          </Button>
        }
      />
    </div>
  )
}

export default ErrorRetryComponent
