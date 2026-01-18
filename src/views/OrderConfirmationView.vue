<template>
  <v-container class="py-8">
    <v-card class="text-center pa-8">
      <v-icon
        size="80"
        color="success"
        class="mb-4"
      >
        mdi-check-circle
      </v-icon>
      <h1 class="text-h3 mb-4">Objednávka bola úspešne vytvorená!</h1>
      <p class="text-h6 mb-2">Číslo objednávky: <strong>#{{ orderId }}</strong></p>
      <p class="text-body-1 text-grey mb-6">
        Ďakujeme za vašu objednávku. Potvrdenie sme vám poslali na email.
      </p>
      <div class="d-flex justify-center gap-4">
        <v-btn
          to="/products"
          color="primary"
          size="large"
          variant="elevated"
        >
          <v-icon start>mdi-store</v-icon>
          Pokračovať v nákupe
        </v-btn>
        <v-btn
          to="/"
          variant="outlined"
          size="large"
        >
          <v-icon start>mdi-home</v-icon>
          Domov
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { useOrdersStore } from '@/stores/orders'

export default {
  name: 'OrderConfirmationView',
  data() {
    return {
      orderId: null,
    }
  },
  mounted() {
    this.orderId = this.$route.params.id
  },
}
</script>

<style scoped>
.gap-4 {
  gap: 1rem;
}
</style>
