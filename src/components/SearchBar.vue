<template>
  <div class="d-flex align-center flex-column flex-sm-row">
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
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { SET_SEARCH, RESET_CURRENT_PAGE } from "@/utils/consts";

export default {
  methods: {
    ...mapMutations([SET_SEARCH, RESET_CURRENT_PAGE]),
    handleChange($event) {
      this.RESET_CURRENT_PAGE();
      this.SET_SEARCH($event);
    },
  },
};
</script>
