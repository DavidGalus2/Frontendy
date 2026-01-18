<template>
  <v-container class="py-8">
    <h1 class="text-h3 mb-6">O nás</h1>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-6" elevation="2">
          <h2 class="text-h4 mb-4">Naša misia</h2>
          <p class="text-body-1 mb-4">
            Sme špecializovaný e-shop na maškrty a pamlsky pre psov. Našou prioritou je poskytnúť 
            kvalitné produkty, ktoré budú chutné a výživné pre vašich miláčikov.
          </p>
          <p class="text-body-1">
            Veríme, že každý pes si zaslúži najlepšiu možnú stravu. Preto vyberáme 
            len tie najkvalitnejšie suroviny a spolupracujeme s overenými výrobcami.
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="pa-6" elevation="2">
          <h2 class="text-h4 mb-4">Kontakt</h2>
          <div class="mb-4">
            <v-icon class="mr-2">mdi-email</v-icon>
            <span>info@maškrtyprepsov.sk</span>
          </div>
          <div class="mb-4">
            <v-icon class="mr-2">mdi-phone</v-icon>
            <span>+421 123 123 123</span>
          </div>
          <div class="mb-4">
            <v-icon class="mr-2">mdi-map-marker</v-icon>
            <span>Nitra, Slovensko</span>
          </div>
          <div>
            <v-icon class="mr-2">mdi-clock</v-icon>
            <span>Pon - Pia: 9:00 - 17:00</span>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="12">
        <v-card class="pa-6" elevation="2">
          <h2 class="text-h4 mb-4">Prečo si vybrať nás?</h2>
          <v-row>
            <v-col
              v-for="benefit in benefits"
              :key="benefit.title"
              cols="12"
              md="4"
            >
              <div class="text-center">
                <v-icon
                  :color="benefit.color"
                  size="48"
                  class="mb-3"
                >
                  {{ benefit.icon }}
                </v-icon>
                <h3 class="text-h6 mb-2">{{ benefit.title }}</h3>
                <p class="text-body-2">{{ benefit.description }}</p>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      benefits: [
        {
          title: 'Kvalita',
          description: 'Používame len overené a bezpečné materiály',
          icon: 'mdi-shield-check',
          color: 'success',
        },
        {
          title: 'Rýchla doprava',
          description: 'Doručujeme do 2-3 pracovných dní',
          icon: 'mdi-truck-fast',
          color: 'primary',
        },
        {
          title: 'Podpora',
          description: 'Naša zákaznícka podpora je tu pre vás',
          icon: 'mdi-headset',
          color: 'info',
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>
