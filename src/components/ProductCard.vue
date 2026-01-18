<template>
  <v-card
    class="product-card"
    elevation="2"
  >
    <v-img
      :src="product.image"
      :alt="product.name"
      height="200"
      cover
    ></v-img>

    <v-card-title class="text-h6">
      {{ product.name }}
    </v-card-title>

    <v-card-text>
      <p class="text-body-2 mb-2">{{ product.description }}</p>
      <p class="text-h6 text-primary font-weight-bold">
        {{ product.price.toFixed(2) }} €
      </p>
      <StockBadge :in-stock="product.inStock" class="mt-2" />
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="primary"
        variant="elevated"
        :disabled="!product.inStock"
        @click="handleAddToCart"
        block
      >
        <v-icon start>mdi-cart-plus</v-icon>
        Do košíka
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { useCartStore } from '@/stores/cart'
import StockBadge from './StockBadge.vue'

export default {
  name: 'ProductCard',
  components: {
    StockBadge,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  emits: ['view-details'],
  methods: {
    handleAddToCart() {
      const cartStore = useCartStore()
      cartStore.addToCart(this.product)
      this.$emit('view-details', this.product.id)
    },
  },
}
</script>

<style scoped>
.product-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-card :deep(.v-card-text) {
  flex-grow: 1;
}
</style>
