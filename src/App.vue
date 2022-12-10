<template>
  <v-app>
    <v-app-bar app>
      <v-container class="d-flex align-center">
        <v-toolbar-title>Find a country</v-toolbar-title>
        <v-text-field
          v-if="$route.name !== 'countryDetails'"
          :value="$store.state.search"
          @input="handleChange"
          class="pa-3 shrink"
          outlined
          label="Search country..."
          hide-details
          clearable
          dense
        ></v-text-field>
      </v-container>
    </v-app-bar>
    <v-main class="grey lighten-2">
      <keep-alive exclude="CountryView">
        <router-view></router-view>
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";
import { SET_SEARCH, RESET_CURRENT_PAGE } from "@/utils/consts";
export default {
  name: "App",
  methods: {
    ...mapMutations([SET_SEARCH, RESET_CURRENT_PAGE]),
    handleChange($event) {
      this.RESET_CURRENT_PAGE();
      this.SET_SEARCH($event);
    },
  },
};
</script>
