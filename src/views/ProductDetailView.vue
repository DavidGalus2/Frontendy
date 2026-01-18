<template>
  <v-container class="py-8">
    <v-btn
      class="mb-4"
      variant="text"
      @click="$router.back()"
    >
      <v-icon start>mdi-arrow-left</v-icon>
      Späť
    </v-btn>

    <div v-if="product">
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            :src="product.image"
            :alt="product.name"
            height="500"
            cover
            class="rounded-lg"
          ></v-img>
        </v-col>

        <v-col cols="12" md="6">
          <h1 class="text-h3 mb-4">{{ product.name }}</h1>

          <p class="text-h5 text-primary font-weight-bold mb-4">
            {{ product.price.toFixed(2) }} €
          </p>

          <p class="text-body-1 mb-6">{{ product.description }}</p>

          <div class="mb-6">
            <StockBadge :in-stock="product.inStock" />
          </div>

          <v-btn
            color="primary"
            size="large"
            variant="elevated"
            :disabled="!product.inStock"
            @click="addToCart"
            block
          >
            <v-icon start>mdi-cart-plus</v-icon>
            Pridať do košíka
          </v-btn>
        </v-col>
      </v-row>

    </div>

    <v-alert
      v-else
      type="error"
      variant="tonal"
    >
      Produkt sa nenašiel.
    </v-alert>
  </v-container>
</template>

<script>
import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import StockBadge from '@/components/StockBadge.vue'

export default {
  name: 'ProductDetailView',
  components: {
    StockBadge,
  },
  data() {
    return {
      product: null,
    }
  },
  mounted() {
    this.loadProduct()
  },
  watch: {
    '$route.params.id'() {
      this.loadProduct()
    },
  },
  methods: {
    loadProduct() {
      const productsStore = useProductsStore()
      const productId = parseInt(this.$route.params.id)
      this.product = productsStore.getProductById(productId)
    },
    addToCart() {
      const cartStore = useCartStore()
      cartStore.addToCart(this.product)
      this.$router.push({ name: 'cart' })
    },
  },
}
</script>

<style scoped>
</style>
