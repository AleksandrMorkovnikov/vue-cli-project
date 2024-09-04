<template>
  <body id="appProject">
    <headerComp></headerComp>
    <main>
      <div class="firstPart-project">
        <div class="firstPart-project_background"></div>
        <div class="firstPart-project_text-box center">
          <div class="firstPart-project_text">
            <h3 class="firstPart-project_text_h">Статьи & Новости</h3>
            <div class="firstPart-project_text_nav">
              <p v-for="item in indexNav" :key="item" class="head-nav_right-text_p">
                <a href="#"> {{ item.name }} </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="secondPart-project center">
        <div class="secondPart-project_nav-buttons">
          <button class="secondPart-project_nav-buttons_button" v-for="buttonProject in buttonsProject" :key="buttonProject.method"
              @click="currentProjectButton(buttonProject.component)"
              :class="{'active-button': activeButton === buttonProject.component}">
              {{ buttonProject.name }}
          </button>
        </div>
        <div class="secondPart-project_articles">
          <component v-if="currentProjectComponent" :is="currentProjectComponent"></component>
        </div>
        <div class="thirdPart-project_nav-buttons center">
          <button class="thirdPart-project_nav-buttons_button first-button-nav"> 01
          </button>
          <button class="thirdPart-project_nav-buttons_button"> 02
          </button>
          <button class="thirdPart-project_nav-buttons_button"> 03
          </button>
          <button class="thirdPart-project_nav-buttons_button"><svg width="9" height="16" viewBox="0 0 9 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M1.77142 14.9527L7.71428 8.267L1.77142 1.58128" stroke="#292F36" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </main>
    <footerComp></footerComp>
  </body>
</template>

<script>
import footerComp from '@/components/HeaderFooter/FooterComp.vue';
import headerComp from '@/components/HeaderFooter/HeaderComp.vue';
import BedroomProject from '@/components/articleProject/bedroomProject.vue';
import KitchenProject from '@/components/articleProject/kitchenProject.vue';
import BathroomProject from '@/components/articleProject/bathroomProject.vue';
import LivingroomProject from '@/components/articleProject/livingroomProject.vue';

export default({
  el: "#appProject",
  data() {
    return {
      headerItems: [
        { name: "Домой", route: "/" },
        { name: "Проект", route: "#" },
        { name: "Блог", route: "/blog" },
        { name: "Статьи", route: "/blog-details" }
      ],
      buttonsProject: [
      { name: "Ванная комната", component: 'BathroomProject' },
      { name: "Спальня", component: 'BedroomProject' },
      { name: "Кухня", component: 'KitchenProject' },
      { name: "Гостиная", component: 'LivingroomProject' }
    ],
      currentProjectComponent: "BedroomProject",
      activeButton: "BedroomProject",
    }
  },
  methods: {
    handleButtonProjectClick(componentName) {
      this.currentProjectComponent = componentName;
    },
    selectButton(id) {
      this.activeButton = id;
    },
    setActiveComponent(componentActive) {
      this.activeComponent = componentActive;
    },
    currentProjectButton(componentName) {
      this.handleButtonProjectClick(componentName);
      this.selectButton(componentName);
      this.setActiveComponent(componentName);
    }
  },
  computed: {
    indexPlates() {
      return this.newsPlates.slice(0, 6);
    },
    indexNav() {
      return this.headerItems.slice(0, 2);
    },
  },
  components: {
    KitchenProject,
    BedroomProject,
    BathroomProject,
    LivingroomProject,
    footerComp,
    headerComp,
  }
});
</script>
