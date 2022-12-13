import { makeAutoObservable, runInAction } from 'mobx'

export interface CaptureStep {
  title: string
  sampleImages?: string[]
  hint?: string
  cameraParas?: any
}

export interface CaptureProps {
  steps: CaptureStep[]
}


export default class CaptureStore {
  currentStep: undefined | number
  currentCapturedImages: string[] = []
  steps: undefined | CaptureStep[]
  capturing: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  async fetchCaputreSteps() {
    const mockApi = () => {
      return Promise.resolve([{
        title: 'step1 - 360度头图拍摄',
        sampleImages: [
          'http://s.95fenapp.com/jiuwu/imgs/20221210/fc84b939e6024d69063faf89cfd9dfa8_4500x4500.jpeg?imageView2/0/w/800',
          'http://s.95fenapp.com/jiuwu/imgs/20221210/0c10dd389a9b6931096d9cfb69a75c97_4500x4500.jpeg?imageView2/0/w/800',
          'http://s.95fenapp.com/jiuwu/imgs/20221210/6fb8352134f923c59fcb23854f62092d_4500x4500.jpeg?imageView2/0/w/800',
          'http://s.95fenapp.com/jiuwu/imgs/20221210/ba7983b05baa2a6c18e5751440ca0c36_4500x4500.jpeg?imageView2/0/w/800',
          'http://s.95fenapp.com/jiuwu/imgs/20221210/17620563383c452db2925ffeef1d5038_4500x4500.jpeg?imageView2/0/w/800',
        ],
        hint: '请将鞋放在托盘正中间处'
      }, {
        title: 'step2 - 鞋正面拍摄',
        sampleImages: [
          'http://s.95fenapp.com/jiuwu/imgs/20221210/36359400169063223c63fa8fda74368f_4500x4500.jpeg?imageView2/0/w/800'
        ],
        hint: '请使用支架1'
      }, {
        title: 'step3 - 鞋内里拍摄',
        sampleImages: [
          'http://s.95fenapp.com/jiuwu/imgs/20221210/c8222d5c1d941833411fd9dd15147dca_4500x4500.jpeg?imageView2/0/w/800'
        ],
        hint: '请使用支架1'
      }, {
        title: 'step4 - 鞋底拍摄',
        sampleImages: [
          'http://s.95fenapp.com/jiuwu/imgs/20221210/c4a6c5c64f34ac9238b2cea1ddb682c3_4500x4500.jpeg?imageView2/0/w/800'
        ],
        hint: '请使用支架2'
      }, {
        title: 'step5 - 鞋垫拍摄',
        sampleImages: [
          'http://s.95fenapp.com/jiuwu/imgs/20221210/e3fc8e74bb9fcfe56c176d340c9f92b3_4500x4500.jpeg?imageView2/0/w/800'
        ],
        hint: ''
      }])
    }

    const steps = await mockApi()
    runInAction(() => {
      this.currentStep = 0
      this.steps = steps as CaptureStep[]
    })
  }

  nextStep() {
    runInAction(() => {
      if (this.currentStep === undefined || !this.steps) {
        return
      }

      if (this.currentStep === this.steps?.length -1) {
        this.currentStep = 0
      } else {
        this.currentStep += 1
      }

      this.currentCapturedImages = []
    })
  }

  async startCatpure() {
    const invoke = () => {
      return new Promise<void>(resolve => {
        setTimeout(() => {
          resolve()
        }, 1000);
      })
    }

    runInAction(() => {  
      this.capturing = true
    })
    await invoke()

    runInAction(() => {
      this.capturing = false
      if (this.steps && this.currentStep !== undefined) {
        this.currentCapturedImages = this.steps[this.currentStep].sampleImages || []
      }
    })
  }
}