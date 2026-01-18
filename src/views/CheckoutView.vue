<template>
  <v-container class="py-8">
    <h1 class="text-h3 mb-6">Dokončenie objednávky</h1>

    <v-alert
      v-if="isCartEmpty"
      type="warning"
      variant="tonal"
      class="mb-6"
    >
      Váš košík je prázdny. Prosím, pridajte produkty pred dokončením objednávky.
    </v-alert>

    <v-row v-else>
      <v-col cols="12" md="8">
        <v-card class="mb-4">
          <v-card-title>
            <v-icon start>mdi-account</v-icon>
            Kontaktné údaje
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="formData.name"
              label="Meno a priezvisko"
              variant="outlined"
              required
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              v-model="formData.email"
              label="Email"
              type="email"
              variant="outlined"
              required
              :rules="[rules.required, rules.email]"
            ></v-text-field>
            <v-text-field
              v-model="formData.phone"
              label="Telefón"
              variant="outlined"
              required
              :rules="[rules.required]"
            ></v-text-field>
          </v-card-text>
        </v-card>

        <v-card class="mb-4">
          <v-card-title>
            <v-icon start>mdi-map-marker</v-icon>
            Adresa doručenia
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="formData.street"
              label="Ulica a číslo"
              variant="outlined"
              required
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              v-model="formData.city"
              label="Mesto"
              variant="outlined"
              required
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              v-model="formData.postalCode"
              label="PSČ"
              variant="outlined"
              required
              :rules="[rules.required]"
            ></v-text-field>
          </v-card-text>
        </v-card>

        <v-card>
          <v-card-title>
            <v-icon start>mdi-credit-card</v-icon>
            Platba
          </v-card-title>
          <v-card-text>
            <v-radio-group v-model="formData.paymentMethod">
              <v-radio
                label="Dobierka"
                value="cod"
              ></v-radio>
              <v-radio
                label="Bankový prevod"
                value="bank"
              ></v-radio>
              <v-radio
                label="Kreditná karta"
                value="card"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
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
          :disabled="!isFormValid"
          @click="submitOrder"
        >
          <v-icon start>mdi-check</v-icon>
          Dokončiť objednávku
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useCartStore } from '@/stores/cart'
import { useOrdersStore } from '@/stores/orders'
import OrderSummary from '@/components/OrderSummary.vue'

export default {
  name: 'CheckoutView',
  components: {
    OrderSummary,
  },
  data() {
    return {
      shipping: 4.99,
      formData: {
        name: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        postalCode: '',
        paymentMethod: 'cod',
      },
      rules: {
        required: (value) => !!value || 'Toto pole je povinné',
        email: (value) => {
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          return pattern.test(value) || 'Neplatný email'
        },
      },
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
    isFormValid() {
      return (
        this.formData.name &&
        this.formData.email &&
        this.formData.phone &&
        this.formData.street &&
        this.formData.city &&
        this.formData.postalCode &&
        this.formData.paymentMethod
      )
    },
  },
  methods: {
    submitOrder() {
      if (!this.isFormValid) return

      const ordersStore = useOrdersStore()
      const cartStore = useCartStore()

      const orderData = {
        items: [...cartStore.items],
        customer: { ...this.formData },
        total: cartStore.totalPrice + this.shipping,
        shipping: this.shipping,
      }

      const order = ordersStore.createOrder(orderData)
      cartStore.clearCart()

      this.$router.push({
        name: 'order-confirmation',
        params: { id: order.id },
      })
    },
  },
}
</script>

<style scoped>
</style>
