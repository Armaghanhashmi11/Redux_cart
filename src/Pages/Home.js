import React from 'react'
import { Todo } from '../components/Todo'
import {Provider} from'react-redux'
import store from '../Store'

function Home() {
  return (
    <div>
      <Provider store={store}>
        <Todo/>
        </Provider>
    </div>
  )
}

export default Home