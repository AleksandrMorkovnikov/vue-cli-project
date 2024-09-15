// import { createApp } from 'vue'
// import App from './App.vue'


// createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/index.js';

// createApp(App)
//   .use(router)
//   .mount('#app');

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');