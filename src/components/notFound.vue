<template>
  <headerComp></headerComp>
  <div class="not-found">
    <div class="not-found_box">
      <h1 class="not-found_h1">404</h1>
      <p class="not-found_p">Приносим извинения, но страница, которую вы искали, не найдена</p>
      <button class="not-found_button"><router-link to="/">Домой <svg width="17.151123" height="16.005859" viewBox="0 0 17.1511 16.0059" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<desc>
			Created with Pixso.
	</desc>
	<defs/>
	<path id="Vector" d="M1 7.93L14.73 7.8M9.62 1.41L16.15 7.93L9.49 14.59" stroke="#CDA274" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="square"/>
</svg>
</router-link></button>
    </div>
    <div class="not-found_pic"></div>
  </div>
</template>

<script>
import headerComp from '@/components/HeaderFooter/HeaderComp.vue';

export default {
  name: 'NotFound',
  components: {
    headerComp
  }
  }
</script>

<style>
</style>