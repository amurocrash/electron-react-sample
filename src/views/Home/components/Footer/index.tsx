import React, { FC } from 'react'
import styles from './index.module.scss'
import packageJson from '../../../../../package.json'
import { Button, Divider } from 'antd'
import { observer } from 'mobx-react'
import { useStore } from '../../../../store/index.store'

export interface CapturedImageControlConfig {
  title: string
}

const Footer: FC = () => {
  const { captureStore } = useStore()

  const controlConfigs: CapturedImageControlConfig[] = [{
    title: '手机查看',
  }, {
    title: '补拍',
  }, {
    title: '调整中心'
  }, {
    title: '编辑图片'
  }, {
    title: '删除选中'
  }, {
    title: '重置图片'
  }, {
    title: '导入'
  }, {
    title: '导出'
  }]

  const renderCapturedImage = () => {
    return (
      <ul className={ styles.list }>
        {
          captureStore.currentCapturedImages.map((url, index) => {
            return (
              <li key={ index }>
                <img style={{ height: '120px', marginRight: '8px' }} src={url} alt={url}/>
              </li>
            )
          })
        }
      </ul>
    )
  }

  return (
    <div className={ styles.footerRoot }>
      <div className={ styles.imagePreviewArea }>
        <div className={ styles.controlArea}>
          {
            controlConfigs.map((config, index) => {
              return (
                <Button key={ index } className={ styles.button } size='small' type='default'>{ config.title }</Button>
              )
            })
          }
        </div>
        <div className={ styles.imageArea }>
          {
            renderCapturedImage()
          }
        </div>
      </div>

      <div className={ styles.infoArea}>
        <div className={ styles.deviceConnectInfoArea }>
          设备连接成功
        </div>

        <div className={ styles.systemInfoArea }>
          <span className={ styles.info }>软件版本：{ packageJson.version }</span>
          <Divider type='vertical' className={ styles.divider}/>
          <span className={ styles.info }>可用物理内存：9456MB</span>
        </div>
      </div>
    </div>
  )
}

export default observer(Footer)