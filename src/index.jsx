import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './store/store'
import App from './components/App'
import 'normalize.css'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
