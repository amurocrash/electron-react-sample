import React, { FC } from 'react'
import { useStore } from '../../../../store/index.store'
import styles from './index.module.scss'
import { observer } from 'mobx-react'

const MainPreview: FC = () => {
  const { captureStore } = useStore()

  return (
    <div className={ styles.mainPreviewRoot }>

      <div className={ styles.cameraPreviewArea }>
        相机预览区
      </div>
      
      <div className={ styles.imagePreviewArea }>
        {
          captureStore.currentCapturedImages.length > 0
          &&
          <img className={ styles.image } src={ captureStore.currentCapturedImages[0] } alt='' />
        }
      </div>

    </div>
  )
}

export default observer(MainPreview)