import { Provider as ReduxProvider } from 'react-redux'

import { ToDoList } from './components/ToDoList.tsx'
import { AddToDo } from './components/AddToDo.tsx'
import { store } from './store'

export function App() {
  return (
    <ReduxProvider store={store}>
      <ToDoList />
      <AddToDo />
    </ReduxProvider>
  )
}
