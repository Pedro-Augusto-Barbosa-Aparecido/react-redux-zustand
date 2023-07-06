import { Provider as ReduxProvider } from 'react-redux'

import { store } from './store'
import { Player } from './page/Player.tsx'

import './styles/global.css'

export function App() {
  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  )
}
