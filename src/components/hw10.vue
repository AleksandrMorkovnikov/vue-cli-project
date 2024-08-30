<template>
  <div class="product-details">
    <h1>{{ product.name }}</h1>
    <p>{{ formattedPrice }}</p>
    <p>{{ availabilityStatus }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  data() {
    return {
      product: {
        name: 'Умные часы',   
        price: 99.99,             
        available: true           
      }
    };
  },
  computed: {
    formattedPrice() {
      return `$${this.product.price.toFixed(2)}`;
    },
    availabilityStatus() {
      return this.product.available ? 'Есть в наличии' : 'Закончился';
    }
  }
};
</script>

<style scoped>
.product-details {
  font-family: Arial, sans-serif;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin: 5px 0;
}
</style>