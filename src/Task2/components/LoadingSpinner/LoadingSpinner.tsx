import { FunctionComponent } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const LoadingSpinner: FunctionComponent = () => {
  return (
    <Spin
      style={{ display: 'flex', alignItems: 'center' }}
      indicator={<LoadingOutlined style={{ fontSize: 150 }} spin />}
    />
  )
}

export default LoadingSpinner
