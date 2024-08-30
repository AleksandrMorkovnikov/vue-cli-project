<template>
    <header id="appHeader" class="header center">
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
    </header>
</template>

<script>
export default {
  name: 'mainPage',
  el: "#appHeader",
    data() {
    return {
      headerItems: [
        { name: "Домой", route: "/" },
        { name: "Проект", route: "#" },
        { name: "Блог", route: "/blog" },
        { name: "Статьи", route: "/blog-details" }
      ],
    }
  },
    computed: {
    indexPlates() {
      return this.newsPlates.slice(0, 6);
    },
  }
};
</script>
