import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/mainPage.vue';
import BlogPage from '@/components/blogPage.vue';
import BlogDetailsPage from '@/components/blogDetailsPage.vue';
import ProjectPage from '@/components/projectPage.vue';
import ProjectDetailsPage from '@/components/projectDetailsPage.vue';
import NotFound from '@/components/notFound.vue';

const routes = [
  { path: '/', component: MainPage, name: 'MainPage' },
  { path: '/project', component: ProjectPage, name: 'ProjectPage' },
  { path: '/blog', component: BlogPage, name: 'BlogPage' },
  { path: '/blog-details', component: BlogDetailsPage, name: 'BlogDetailsPage' },
  { path: '/project-details', component: ProjectDetailsPage, name: 'ProjectDetailsPage' },
  { path: '/:pathMatch(.*)*', component: NotFound, name: 'NotFound' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;