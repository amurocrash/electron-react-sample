import React, { FC, Suspense, lazy } from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom'

const Login = lazy(() => import('../views/Login'))
const Home = lazy(() => import('../views/Home'))

// const history = createBrowserHistory()

const LazyLoading: FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: 200 }}>
      loading...
    </div>
  )
}

const Router: FC = () => {
  return (
    <HashRouter >
      <Suspense
        fallback={ <LazyLoading/> }
        >
        <Routes>
          <Route path='/' element={ <Home/> }></Route>

          <Route path='/login' element={ <Login/> }></Route>
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default Router