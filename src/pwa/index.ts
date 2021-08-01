import { Workbox } from 'workbox-window'

export const isSWSupported = () => {
	// Check if the serviceWorker Object exists in the navigator object ( means if browser supports SW )
	return 'serviceWorker' in navigator ? true : false
}

export const registerSW = () => {
	const sw = new Workbox('worker.js')
	sw.addEventListener('installed', event => {
		/**
		 * We have the condition — event.isUpdate because we don’t want to show
		 * this message on the very first service worker installation,
		 * only on the updated
		 */
		if (event.isUpdate) {
			if (confirm(`New app update is available!. Click OK to refresh`)) {
				window.location.reload()
			}
		}
	})
	sw.register()
}

export const getPWADisplayMode = () => {
	const isStandalone = window.matchMedia('(display-mode: standalone)').matches
	
	if (document.referrer.startsWith('android-app://')) {
		return 'twa'
	} 
	// @ts-ignore
	else if (navigator.standalone || isStandalone) {
		return 'standalone'
	}
	
	return 'browser'
}