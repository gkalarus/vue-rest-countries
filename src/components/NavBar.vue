<template>
  <v-app-bar app :height="height">
    <v-container
      class="d-flex align-center justify-space-between flex-column flex-sm-row"
    >
      <search-bar />
      <drop-down v-if="$route.name !== 'countryDetails'" />
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  name: "NavBar",
  components: {
    "search-bar": require("@/components/SearchBar.vue").default,
    "drop-down": require("@/components/DropDown.vue").default,
  },
  computed: {
    height() {
      if (
        this.$vuetify.breakpoint.name === "xs" &&
        this.$route.name !== "countryDetails"
      ) {
        return 180;
      } else if (
        this.$vuetify.breakpoint.name !== "xs" &&
        this.$route.name !== "countryDetails"
      ) {
        return 64;
      } else {
        return 64;
      }
    },
  },
};
</script>
