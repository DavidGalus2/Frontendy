<template>
  <v-card class="mb-3">
    <v-card-text>
      <div class="d-flex align-center">
        <v-avatar size="60" class="mr-3">
          <v-img :src="item.image" :alt="item.name"></v-img>
        </v-avatar>

        <div class="flex-grow-1">
          <h3 class="text-h6 mb-1">{{ item.name }}</h3>
          <p class="text-body-2 text-grey">Cena: {{ item.price.toFixed(2) }} €</p>
        </div>

        <div class="d-flex align-center mr-3">
          <v-btn
            icon
            size="small"
            @click="decreaseQuantity"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <span class="mx-2">{{ item.quantity }}</span>
          <v-btn
            icon
            size="small"
            @click="increaseQuantity"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>

        <div class="text-h6 text-primary font-weight-bold mr-3" style="min-width: 80px">
          {{ (item.price * item.quantity).toFixed(2) }} €
        </div>

        <v-btn
          icon
          color="error"
          @click="removeItem"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { useCartStore } from '@/stores/cart'

export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    increaseQuantity() {
      const cartStore = useCartStore()
      cartStore.updateQuantity(this.item.id, this.item.quantity + 1)
    },
    decreaseQuantity() {
      const cartStore = useCartStore()
      if (this.item.quantity > 1) {
        cartStore.updateQuantity(this.item.id, this.item.quantity - 1)
      } else {
        cartStore.removeFromCart(this.item.id)
      }
    },
    removeItem() {
      const cartStore = useCartStore()
      cartStore.removeFromCart(this.item.id)
    },
  },
}
</script>

<style scoped>
</style>
