import { Button, Image, List } from 'antd'
import { observer } from 'mobx-react'
import React, { FC, useEffect } from 'react'
import { useStore } from '../../../../store/index.store'
import styles from './index.module.scss'

const StepIndicator: FC = () => {
  const { captureStore } = useStore()

  useEffect(() => {
    captureStore.fetchCaputreSteps()
  }, [captureStore])

  const render = () => {
    const steps = captureStore.steps
    const currentStep = captureStore.currentStep

    if (steps && steps.length > 0 && currentStep !== undefined) {
      const step = steps[currentStep]
      const sampleImages = step.sampleImages
      let column = 1
      if (sampleImages) {
        column = sampleImages?.length <= 1 ? 1 : 2
      }

      const onStartCaptureClick = async () => {
        await captureStore.startCatpure()
      }

      const onNextStepClick = () => {
        captureStore.nextStep() 
      }

      return (
        <div className={ styles.stepDetailArea }>
          <div className={ styles.title }>{ step.title }</div>
          <div>示例图</div>
          {
            <List
              className={ styles.list }
              grid={{ gutter: 16, column }}
              dataSource={ step.sampleImages }
              renderItem={ item => (
                <List.Item>
                  <Image src={item}/>
                </List.Item>
              )}
            />
          }
          <div className={ styles.controlArea }>
            <div className={ styles.buttonArea }>
              <Button 
                className={ styles.buttonCaputre } 
                type='primary'
                loading={ captureStore.capturing }
                onClick={ onStartCaptureClick }
                >
                开始拍摄
              </Button>
              <Button
                className={ styles.buttonNextStep }
                type='link'
                onClick={ onNextStepClick }
                >
                下一步
              </Button>
            </div>
            <div className={ styles.hint }>
              { step.hint }
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          获取拍摄流程信息失败...
        </div>
      )
    }
  }

  return (
    <div className={ styles.stepIndicatorRoot }>
      {
        render()
      }
    </div>
  )
}

export default observer(StepIndicator)