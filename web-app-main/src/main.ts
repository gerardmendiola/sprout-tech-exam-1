/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createRouter, createWebHistory } from 'vue-router'

// Components
import App from './App.vue'
import AttendancePage from './pages/attendance/Index.vue'
import ExportedPage from './pages/exported/Index.vue'
import AnnouncementPage from './pages/announcement/Index.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AttendancePage
        },
        {
            path: '/export',
            component: ExportedPage
        },
        {
            path: '/announcement',
            component: AnnouncementPage
        }
    ]
})

app.use(router)

registerPlugins(app)

app.mount('#app')
