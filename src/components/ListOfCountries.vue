<template>
  <v-container>
    <v-row v-if="!$store.state.isLoading">
      <v-col
        v-for="item in items"
        :key="`${item.name.common}`"
        class="d-flex justify-center"
      >
        <the-country :data="item" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col v-for="item in 24" :key="`${item}`" class="d-flex justify-center">
        <skeleton-loader />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ListOfCountries",
  props: ["items"],
  components: {
    "the-country": require("@/components/TheCountry.vue").default,
    "skeleton-loader": require("@/components/SkeletonLoader.vue").default,
  },
};
</script>
