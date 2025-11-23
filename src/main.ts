import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register'

// PWA servis çalışanını kaydet
registerSW({ onNeedRefresh() {}, onOfflineReady() {} })

// Vue uygulamasını oluştur ve #app elementine bağla
createApp(App).mount('#app')
