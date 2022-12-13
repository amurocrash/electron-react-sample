import { observer } from 'mobx-react'
import React, { FC } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MainPreview from './components/MainPreview'
import StepIndicator from './components/StepIndicator'
import styles from './index.module.scss'

const Home: FC = () => {

  return (
    <div className={ styles.homeRoot }>
      <div className={ styles.headerArea }>
        <Header/>
      </div>

      <div className={ styles.contentArea }>
        <StepIndicator/>
        <MainPreview/>
      </div>

      <div className={ styles.footerArea }>
        <Footer/>
      </div>
    </div>
  )
}

export default observer(Home)