<template>
  <v-card>
    <v-card-title class="bg-primary text-white">
      <v-icon start>mdi-receipt</v-icon>
      Súhrn objednávky
    </v-card-title>

    <v-card-text>
      <div class="d-flex justify-space-between mb-2">
        <span>Počet položiek:</span>
        <strong>{{ totalItems }}</strong>
      </div>

      <v-divider class="my-3"></v-divider>

      <div
        v-for="item in items"
        :key="item.id"
        class="d-flex justify-space-between mb-2"
      >
        <span class="text-body-2">
          {{ item.name }} ({{ item.quantity }}x)
        </span>
        <span class="text-body-2">
          {{ (item.price * item.quantity).toFixed(2) }} €
        </span>
      </div>

      <v-divider class="my-3"></v-divider>

      <div class="d-flex justify-space-between mb-2">
        <span>Doprava:</span>
        <strong>{{ shipping.toFixed(2) }} €</strong>
      </div>

      <v-divider class="my-3"></v-divider>

      <div class="d-flex justify-space-between text-h6">
        <span>Celkom:</span>
        <strong class="text-primary">{{ total.toFixed(2) }} €</strong>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'OrderSummary',
  props: {
    items: {
      type: Array,
      required: true,
    },
    shipping: {
      type: Number,
      default: 4.99,
    },
  },
  computed: {
    totalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0)
    },
    subtotal() {
      return this.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    },
    total() {
      return this.subtotal + this.shipping
    },
  },
}
</script>

<style scoped>
</style>
