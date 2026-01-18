<template>
  <div class="home-view">
    <v-container fluid class="pa-0">
      <!-- Hero Section -->
      <v-row no-gutters>
        <v-col cols="12">
          <v-img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200"
            height="500"
            cover
            gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.7)"
          >
            <div class="d-flex fill-height align-center justify-center">
              <div class="text-center text-white pa-8">
                <h1 class="text-h2 font-weight-bold mb-4">
                  Maškrty pre Vašich Psov
                </h1>
                <p class="text-h5 mb-6">
                  Kvalitné pamlsky a tyčinky na zuby pre vašich miláčikov
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
              </div>
            </div>
          </v-img>
        </v-col>
      </v-row>

      <!-- Features Section -->
      <v-container class="py-12">
        <h2 class="text-h3 text-center mb-8">Prečo si vybrať naše maškrty?</h2>
        <v-row>
          <v-col
            v-for="feature in features"
            :key="feature.title"
            cols="12"
            md="4"
          >
            <v-card class="text-center pa-6" elevation="2" height="100%">
              <v-icon
                :color="feature.color"
                size="64"
                class="mb-4"
              >
                {{ feature.icon }}
              </v-icon>
              <h3 class="text-h5 mb-3">{{ feature.title }}</h3>
              <p class="text-body-1">{{ feature.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Featured Products -->
      <v-container class="py-8">
        <h2 class="text-h3 text-center mb-6">Naše produkty</h2>
        <v-row>
          <v-col
            v-for="product in featuredProducts"
            :key="product.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <ProductCard :product="product" />
          </v-col>
        </v-row>
        <div class="text-center mt-6">
          <v-btn
            to="/products"
            color="primary"
            size="large"
            variant="elevated"
          >
            Zobraziť všetky produkty
          </v-btn>
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { useProductsStore } from '@/stores/products'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'HomeView',
  components: {
    ProductCard,
  },
  data() {
    return {
      features: [
        {
          title: 'Kvalitné materiály',
          description: 'Používame len najkvalitnejšie materiály, ktoré sú bezpečné pre vašich psov.',
          icon: 'mdi-shield-check',
          color: 'success',
        },
        {
          title: 'Rôzne veľkosti',
          description: 'Ponúkame maškrty pre všetky veľkosti psov - od malých až po veľké plemená. Každý pes si nájde svoj favorit.',
          icon: 'mdi-ruler',
          color: 'primary',
        },
        {
          title: 'Rýchla doprava',
          description: 'Vašu objednávku doručíme rýchlo a bezpečne priamo k vám domov.',
          icon: 'mdi-truck-fast',
          color: 'info',
        },
      ],
    }
  },
  computed: {
    featuredProducts() {
      const productsStore = useProductsStore()
      return productsStore.availableProducts.slice(0, 4)
    },
  },
}
</script>

<style scoped>
.home-view {
  min-height: 100vh;
}
</style>
