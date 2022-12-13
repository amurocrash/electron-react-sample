import React from 'react'
import CaptureStore from './capture.store'

class GlobalStore {
  captureStore: CaptureStore

  constructor() {
    this.captureStore = new CaptureStore()
  }
}

export const globalStoreContext = React.createContext(new GlobalStore())
export const useStore = () => React.useContext(globalStoreContext)