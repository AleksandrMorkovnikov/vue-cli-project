<template>
  <body id="appBlogDetails">
    <!-- <header class="header center">
      <div class="head-nav_left">
        <svg width="33.997559" height="34.000244" viewBox="0 0 33.9976 34.0002" fill="none"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs />
          <path
            d="M0 34L13.45 34L13.45 24.49C13.45 22.48 15.08 20.85 17.1 20.85C19.11 20.85 20.74 22.48 20.74 24.49L20.74 34L33.99 34L33.99 0C15.22 0 0 15.22 0 34Z"
            fill="#CDA274" fill-opacity="1.000000" fill-rule="nonzero" />
        </svg>
        <p class="head-nav_left-text">Interno</p>
      </div>
      <div class="head-nav_right">
        <p v-for="item in headerItems" :key="item.name" class="head-nav_right-text">
          <router-link :to="item.route">{{ item.name }}</router-link>
        </p>
      </div>
    </header> -->
    <headerComp></headerComp>
    <main>
      <div class="firstPart-details_main-pic"></div>
      <div class="secondPart-details_box center">
        <div class="secondPart-details_box_acrticle">
          <component v-if="currentComponent" :is="currentComponent"></component>
        </div>
        <div class="secondPart-details_box_tags">
          <h3 class="secondPart-details_box_h">Тэги</h3>
          <div class="secondPart-details_box_buttons">
            <button class="secondPart-details_box_button" v-for="button in buttons" :key="button.method"
              @click="handleButtonClick(button.component)">
              {{ button.name }}
            </button>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer-add_main center">
      <div class="footer_collection">
        <div class="footer_collection-part">
          <div class="footer_collection-part_social">
            <svg width="33.997559" height="34.000336" viewBox="0 0 33.9976 34.0003" fill="none"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs />
              <path
                d="M0 34L13.45 34L13.45 24.49C13.45 22.48 15.08 20.85 17.1 20.85C19.11 20.85 20.74 22.48 20.74 24.49L20.74 34L33.99 34L33.99 0C15.22 0 0 15.22 0 34Z"
                fill="#CDA274" fill-opacity="1.000000" fill-rule="nonzero" />
            </svg>
            Interno
          </div>
          <div class="footer_collection-part_social_icons">
            <svg width="17.964844" height="14.589844" viewBox="0 0 17.9648 14.5898" fill="none"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs />
              <path
                d="M17.96 1.72C17.47 2.46 16.83 3.09 16.13 3.62L16.13 4.11C16.13 9 12.44 14.58 5.66 14.58C3.55 14.58 1.61 13.99 0 12.93C0.28 12.97 0.56 13 0.87 13C2.6 13 4.18 12.41 5.44 11.42C3.83 11.39 2.46 10.33 2 8.85C2.25 8.89 2.46 8.92 2.7 8.92C3.02 8.92 3.37 8.85 3.65 8.78C1.96 8.43 0.7 6.96 0.7 5.16L0.7 5.13C1.19 5.41 1.79 5.55 2.39 5.58C1.37 4.92 0.73 3.79 0.73 2.53C0.73 1.82 0.91 1.19 1.23 0.66C3.05 2.88 5.8 4.35 8.85 4.53Q8.75 4.11 8.75 3.69C8.75 1.65 10.4 0 12.44 0C13.5 0 14.44 0.42 15.15 1.16C15.96 0.98 16.76 0.66 17.47 0.24C17.19 1.12 16.62 1.82 15.85 2.28C16.59 2.21 17.33 2 17.96 1.72Z"
                fill="#292F36" fill-opacity="1.000000" fill-rule="evenodd" />
            </svg>
            <svg width="15.750000" height="15.714844" viewBox="0 0 15.75 15.7148" fill="none"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs />
              <path
                d="M3.76 1.86C3.76 2.91 2.91 3.79 1.86 3.79C0.84 3.79 0 2.91 0 1.86C0 0.84 0.84 0 1.86 0C2.91 0 3.76 0.84 3.76 1.86ZM15.75 15.71L12.48 15.71L12.48 10.61C12.48 9.38 12.44 7.83 10.75 7.83C9.07 7.83 8.82 9.14 8.82 10.51L8.82 15.71L5.55 15.71L5.55 5.2L8.68 5.2L8.68 6.64L8.71 6.64C9.17 5.83 10.23 4.95 11.81 4.95C15.11 4.95 15.75 7.13 15.75 9.94L15.75 15.71ZM3.51 5.2L3.51 15.71L0.24 15.71L0.24 5.2L3.51 5.2Z"
                fill="#292F36" fill-opacity="1.000000" fill-rule="evenodd" />
            </svg>
          </div>
        </div>
        <div class="footer_collection-part">
          <nav class="footer_collection-part_nav">
            Страницы
            <ol>
              <a class="footer_collection-part_nav_part" href="#">Домой </a>
            </ol>
            <ol>
              <a class="footer_collection-part_nav_part" href="#">Проект </a>
            </ol>
            <ol>
              <a class="footer_collection-part_nav_part" href="#">Блог</a>
            </ol>
          </nav>
        </div>
        <div class="footer_collection-part">
          <ol class="footer_collection-part_contacts">
            Контакты
            <li class="footer_collection-part_contacts-part">
              55 East Birchwood Ave. Brooklyn, New York 11201
            </li>
            <li class="footer_collection-part_contacts-part">
              contact@interno.com
            </li>
            <li class="footer_collection-part_contacts-part">
              (123) 456 - 7890
            </li>
          </ol>
        </div>
      </div>
    </footer>
  </body>
</template>

<script>
import headerComp from '@/components/HeaderComp.vue';
import KitchenArticle from '@/components/KitchenArticle.vue';
import BedroomArticle from '@/components/BedroomArticle.vue';
import BuildingArticle from '@/components/BuildingArticle.vue';
import ArchitectureArticle from '@/components/ArchitectureArticle.vue';
import LayoutArticle from '@/components/LayoutArticle.vue';
import DiningRoomArticle from '@/components/DiningRoomArticle.vue';
export default {
  el: "#appBlogDetails",
  data() {
    return {
      headerItems: [
      { name: "Домой", route: "/" },
      { name: "Проект", route: "#" },
      { name: "Блог", route: "/blog" },
      { name: "Статьи", route: "/blog-details" }
    ],
    buttons: [
      { name: "Кухня", component: 'KitchenArticle' },
      { name: "Спальня", component: 'BedroomArticle' },
      { name: "Здание", component: 'BuildingArticle' },
      { name: "Архитектура", component: 'ArchitectureArticle' },
      { name: "Планировка", component: 'LayoutArticle' },
      { name: "Столовая", component: 'DiningRoomArticle' },
    ],
      currentComponent: "KitchenArticle",
    }
  },
  methods: {
    handleButtonClick(componentName) {
      this.currentComponent = componentName;
    },
  },
  computed: {
    indexNav() {
      return this.headerItems.slice(0, 2);
    },
  },
  components: {
    headerComp,
    KitchenArticle,
    BedroomArticle,
    BuildingArticle,
    ArchitectureArticle,
    LayoutArticle,
    DiningRoomArticle
  }
}
</script>

<style lang="scss"></style>
