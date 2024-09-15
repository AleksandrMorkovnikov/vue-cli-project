import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      articleText: `В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. <br> 
      В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...».` ,
      imgData: [
        { indexButton: 0, imgSrc: require('@/assets/pics/project-details_article1.webp') },
        { indexButton: 1, imgSrc: require('@/assets/pics/project-details_article2.webp') },
        { indexButton: 2, imgSrc: require('@/assets/pics/project-details_article3.webp') }
      ],
      currentImg: require('@/assets/pics/project-details_article1.webp'),
    };
  },
  mutations: {
    setImage(state, indexButton) {
        const imgObj = state.imgData[indexButton];
        if (imgObj) {
          state.currentImg = imgObj.imgSrc;
  }
}
  },
  actions: {
  },
  getters: {
    imgData(state) {
      return state.imgData;
    },
    currentImg(state) {
      return state.currentImg;
    }
  }
});

export default store;