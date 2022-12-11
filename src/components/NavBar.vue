<template>
  <v-app-bar app :height="height">
    <v-container
      class="d-flex align-center justify-space-between flex-column flex-sm-row"
    >
      <search-bar />
      <drop-down />
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
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 180;
        default:
          return 64;
      }
    },
  },
};
</script>
