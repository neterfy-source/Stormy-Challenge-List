// main.js
import { createApp, reactive } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes.js';

// Global reactive store
export const store = reactive({
  dark: JSON.parse(localStorage.getItem('dark')) || false,
  toggleDark() {
    this.dark = !this.dark;
    localStorage.setItem('dark', JSON.stringify(this.dark));
  },
});

// Create Vue app
const app = createApp({
  setup() {
    return { store }; // expose store to templates
  },
});

// Create router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Use router
app.use(router);

// Mount app
app.mount('#app');

