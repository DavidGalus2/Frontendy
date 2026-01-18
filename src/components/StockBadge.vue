<template>
  <v-chip
    :color="inStock ? 'success' : 'error'"
    size="small"
    variant="flat"
  >
    <v-icon start size="small">
      {{ inStock ? 'mdi-check-circle' : 'mdi-close-circle' }}
    </v-icon>
    {{ inStock ? 'Na sklade' : 'Vypredané' }}
  </v-chip>
</template>

<script>
export default {
  name: 'StockBadge',
  props: {
    inStock: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
</style>
