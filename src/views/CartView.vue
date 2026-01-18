<template>
  <v-container class="py-8">
    <h1 class="text-h3 mb-6">Košík</h1>

    <v-row v-if="!isCartEmpty">
      <v-col cols="12" md="8">
        <h2 class="text-h5 mb-4">Položky v košíku</h2>
        <CartItem
          v-for="item in cartItems"
          :key="item.id"
          :item="item"
        />
      </v-col>

      <v-col cols="12" md="4">
        <OrderSummary
          :items="cartItems"
          :shipping="shipping"
        />
        <v-btn
          color="primary"
          size="large"
          variant="elevated"
          block
          class="mt-4"
          @click="goToCheckout"
        >
          <v-icon start>mdi-arrow-right</v-icon>
          Pokračovať k objednávke
        </v-btn>
        <v-btn
          variant="outlined"
          block
          class="mt-2"
          @click="continueShopping"
        >
          Pokračovať v nákupe
        </v-btn>
      </v-col>
    </v-row>

    <v-card v-else class="text-center pa-12">
      <v-icon size="64" color="grey" class="mb-4">mdi-cart-off</v-icon>
      <h2 class="text-h5 mb-4">Váš košík je prázdny</h2>
      <p class="text-body-1 text-grey mb-6">
        Pridajte produkty do košíka a vráťte sa sem pre dokončenie objednávky.
      </p>
      <v-btn
        to="/products"
        color="primary"
        size="large"
        variant="elevated"
      >
        <v-icon start>mdi-store</v-icon>
        Prezrieť produkty
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
import { useCartStore } from '@/stores/cart'
import CartItem from '@/components/CartItem.vue'
import OrderSummary from '@/components/OrderSummary.vue'

export default {
  name: 'CartView',
  components: {
    CartItem,
    OrderSummary,
  },
  data() {
    return {
      shipping: 4.99,
    }
  },
  computed: {
    cartItems() {
      const cartStore = useCartStore()
      return cartStore.items
    },
    isCartEmpty() {
      const cartStore = useCartStore()
      return cartStore.isCartEmpty
    },
  },
  methods: {
    goToCheckout() {
      this.$router.push({ name: 'checkout' })
    },
    continueShopping() {
      this.$router.push({ name: 'products' })
    },
  },
}
</script>

<style scoped>
</style>
