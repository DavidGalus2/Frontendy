<template>
  <v-container class="py-8">
    <h1 class="text-h3 mb-6">Naše produkty</h1>

    <v-row v-if="products.length > 0">
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ProductCard
          :product="product"
          @view-details="goToProductDetail"
        />
      </v-col>
    </v-row>

    <v-alert
      v-else
      type="info"
      variant="tonal"
      class="mt-6"
    >
      Žiadne produkty.
    </v-alert>
  </v-container>
</template>

<script>
import { useProductsStore } from '@/stores/products'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'ProductsView',
  components: {
    ProductCard,
  },
  computed: {
    products() {
      const productsStore = useProductsStore()
      return productsStore.products
    },
  },
  methods: {
    goToProductDetail(productId) {
      this.$router.push({ name: 'product-detail', params: { id: productId } })
    },
  },
}
</script>

<style scoped>
</style>
