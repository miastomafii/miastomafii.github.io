import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as pwa from './pwa'

import './style.sass'

if (pwa.isSWSupported()) {
	pwa.registerSW()
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)