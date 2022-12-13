import React, { FC } from 'react'
import { Button, Divider } from 'antd'
import styles from './index.module.scss'
import Logo from '../../../../assets/imgs/logo.png'
import { FolderAddOutlined, FolderOpenOutlined, ProfileOutlined, SaveOutlined, SettingOutlined, SwapOutlined, UnorderedListOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons'

export interface MenuConfig {
  type?: 'button' | 'divider'
  title?: string
  icon?: any
}

export interface HeaderConfig {
  left: MenuConfig[]
  right: MenuConfig[]
}

const Header: FC = () => {
  const headerConfig: HeaderConfig = {
    left: [
      {
        title: '新建',
        icon: <FolderAddOutlined/>
      },
      {
        title: '打开',
        icon: <FolderOpenOutlined/>
      },
      {
        title: '保存',
        icon: <SaveOutlined/>
      },
      {
        type: 'divider',
      },
      {
        title: '上传',
        icon: <UploadOutlined/>
      },
      {
        title: '上传列表',
        icon: <UnorderedListOutlined/>
      },
      {
        type: 'divider',
      },
      {
        title: '切换至预览模式',
        icon: <SwapOutlined/>
      },
      {
        type: 'divider'
      },
      {
        title: '设置',
        icon: <SettingOutlined/>
      }
    ],
    right: [
      {
        title: '货号[2120916584508324]',
        icon: <ProfileOutlined/>
      },
      {
        title: '用户名：test',
        icon: <UserOutlined/>
      },
    ],
  }

  const renderMenus = (configs: MenuConfig[]) => {
    return (
      <>
        {
          configs.map((menu, index) => {
            const type = menu.type || 'button'
            const title = menu.title || ''

            if (type === 'button') {
              return (
                <Button key={ index } className={ styles.button } type='text' icon={ menu.icon }>{ title }</Button>
              )
            } else {
              return (
                <Divider key={ index } className={ styles.divider } type='vertical' />
              )
            }
          })
        }
      </>
    )
  }

  return (
    <div className={ styles.headerRoot }>
      <div>
        <img className={ styles.logo } src={ Logo } alt='logo'/>
        {
          renderMenus(headerConfig.left)
        }
      </div>

      <div>
        {
          renderMenus(headerConfig.right)
        }
      </div>
    </div>
  )
}

export default Header