import React from 'react'
import NavBar from './component/NavBar'
import AddTask from './component/AddTask'
import TaskList from './component/TaskList'
import store from './app/store'
import { Provider } from 'react-redux'


const App = () => {
  return (
    <Provider store={store}>


      <div className="max-w-[600px] mx-auto px-2 ">
        <NavBar />
        <AddTask />
        <TaskList />

      </div>
    </Provider>
  )
}

export default App