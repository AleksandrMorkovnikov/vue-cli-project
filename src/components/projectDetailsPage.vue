<template>

  <body id="appProjectDetails">
    <headerComp></headerComp>
    <main>
      <div class="firstPart-projectDetails">
        <div class="firstPart-projectDetails_background"></div>
      </div>
      <div class="secondPart-projectDetails center">
        <article class="secondPart-projectDetails_article">
          <h1 class="secondPart-projectDetails_article_h">Минималистичные спальни</h1>
          <p class="secondPart-projectDetails_article_p" v-html="paragraphText"></p>
          <div class="secondPart-projectDetails_article_pic-box">
            <img class="secondPart-projectDetails_article_pic" :src="currentImg" alt="#"> 

          </div>
          <div class="secondPart-projectDetails_article_nav">
            <button v-for="button in imgData" :key="button.indexButton" @click="changeImage(button.indexButton)"
            class="secondPart-projectDetails_article_dot"></button>
            <!-- <buton class="secondPart-projectDetails_article_dot"></buton>
            <buton class="secondPart-projectDetails_article_dot"></buton> -->
          </div>
        </article>
      </div>
    </main>
    <footerComp></footerComp>
  </body>
</template>

<script>
import headerComp from '@/components/HeaderFooter/HeaderComp.vue';
import footerComp from '@/components/HeaderFooter/FooterComp.vue';

export default {
  el: "#appProjectDetails",
  data() {
    return {
    }
  },
  methods: {
    changeImage(indexButton) {
      this.$store.commit('setImage', indexButton);
    }
  },
  computed: {
    paragraphText() {
      return this.$store.state.articleText; 
    },
    imgData() {
      return this.$store.getters.imgData;
    },
    currentImg() {
      return this.$store.getters.currentImg;
    }
  },
  components: {
    headerComp,
    footerComp
  },
}
</script>
