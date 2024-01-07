import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './normalize.css'
import './theme.css'
import './index.css'
import './i18n'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>,
)
