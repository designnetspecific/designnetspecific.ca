import Home from './components/Home.vue'
import Features from './components/features/Features.vue'
import Contact from './components/contact/Contact.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/features', component: Features },
    { path: '/contact', component: Contact }
];