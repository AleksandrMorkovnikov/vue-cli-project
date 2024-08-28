import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/mainPage.vue';
import BlogPage from '@/components/blogPage.vue';
import BlogDetailsPage from '@/components/blogDetailsPage.vue';

const routes = [
  { path: '/', component: MainPage, name: 'MainPage' },
  { path: '/blog', component: BlogPage, name: 'BlogPage' },
  { path: '/blog-details', component: BlogDetailsPage, name: 'BlogDetailsPage' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;