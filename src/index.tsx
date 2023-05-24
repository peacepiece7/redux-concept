import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log('store', store)
  console.log('next', next)
  console.log('action', action)
  next(action)
}

const middleware = applyMiddleware(loggerMiddleware)
const store = createStore(rootReducer, middleware)

console.log('store.getState()', store.getState())
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const render = () =>
  root.render(
    <Provider store={store}>
      <App
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
    </Provider>
  )

store.subscribe(render)
render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
