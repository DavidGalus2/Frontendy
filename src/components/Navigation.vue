<template>
  <v-app-bar
    color="primary"
    prominent
    elevation="2"
  >
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="d-flex align-center">
      <v-icon class="mr-2" size="large">mdi-dog</v-icon>
      Maškrty pre Psov
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      v-for="item in menuItems"
      :key="item.path"
      :to="item.path"
      variant="text"
      class="mx-1"
    >
      <v-icon start>{{ item.icon }}</v-icon>
      {{ item.title }}
    </v-btn>

    <v-btn
      to="/cart"
      variant="text"
      class="mx-1"
    >
      <v-badge
        :content="cartTotalItems"
        :model-value="cartTotalItems > 0"
        color="error"
        overlap
      >
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        :prepend-icon="item.icon"
        :title="item.title"
      ></v-list-item>
      <v-list-item
        to="/cart"
        prepend-icon="mdi-cart"
        title="Košík"
      >
        <template v-slot:append>
          <v-badge
            :content="cartTotalItems"
            :model-value="cartTotalItems > 0"
            color="error"
          ></v-badge>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useCartStore } from '@/stores/cart'

export default {
  name: 'Navigation',
  data() {
    return {
      drawer: false,
      menuItems: [
        { path: '/', title: 'Domov', icon: 'mdi-home' },
        { path: '/products', title: 'Produkty', icon: 'mdi-store' },
        { path: '/about', title: 'O nás', icon: 'mdi-information' },
      ],
    }
  },
  computed: {
    cartTotalItems() {
      const cartStore = useCartStore()
      return cartStore.totalItems
    },
  },
}
</script>

<style scoped>
</style>
