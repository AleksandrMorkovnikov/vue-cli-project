<template>
  <div class="not-found">
    <h1 class="error">404</h1>
    <p>Страница не найдена</p>
    <router-link class="back" to="/">Вернуться на главную</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style>
.error {
  color: red;
}

.not-found {
  text-align: center;
  padding: 20px;
}

.back {
  cursor: pointer;
}
</style>