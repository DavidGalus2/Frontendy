<template>
  <v-app>
    <Navigation />
    <v-main>
      <RouterView />
    </v-main>
    <v-footer
      color="primary"
      class="text-white"
    >
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <h3 class="mb-2">Maškrty pre Psov</h3>
            <p class="text-body-2">
              Váš dôveryhodný partner pre ochranu vašich miláčikov
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <h4 class="mb-2">Rýchle odkazy</h4>
            <div>
              <RouterLink to="/" class="text-white text-decoration-none d-block mb-1">Domov</RouterLink>
              <RouterLink to="/products" class="text-white text-decoration-none d-block mb-1">Produkty</RouterLink>
              <RouterLink to="/about" class="text-white text-decoration-none d-block mb-1">O nás</RouterLink>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <h4 class="mb-2">Kontakt</h4>
            <p class="text-body-2 mb-1">
              <v-icon size="small" class="mr-1">mdi-email</v-icon>
              info@maskyprepsov.sk
            </p>
            <p class="text-body-2">
              <v-icon size="small" class="mr-1">mdi-phone</v-icon>
              +421 900 123 456
            </p>
          </v-col>
        </v-row>
        <v-divider class="my-4"></v-divider>
        <div class="text-center text-body-2">
          © {{ new Date().getFullYear() }} Maškrty pre Psov. Všetky práva vyhradené.
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    RouterLink,
    RouterView,
  },
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  opacity: 0.8;
}
</style>
