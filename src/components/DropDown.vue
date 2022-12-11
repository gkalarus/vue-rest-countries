<template>
  <v-row class="select-box" align="center">
    <v-col class="d-flex">
      <v-select
        v-model="selectedRegion"
        :items="items"
        item-text="state"
        label="Filter by Region"
        single-line
        dense
        solo
        hide-details
        @change="handleSelectRegion"
      ></v-select>
    </v-col>
  </v-row>
</template>
<script>
import { SET_REGION, RESET_CURRENT_PAGE } from "@/utils/consts";
import { mapMutations } from "vuex";
export default {
  name: "DropDown",
  data() {
    return {
      selectedRegion: { state: this.$store.state.selectedRegion },
      items: [
        { state: "Africa" },
        { state: "Americas" },
        { state: "Asia" },
        { state: "Europe" },
        { state: "Oceania" },
        { state: "All" },
      ],
    };
  },
  methods: {
    ...mapMutations([SET_REGION, RESET_CURRENT_PAGE]),
    handleSelectRegion() {
      this.RESET_CURRENT_PAGE();
      this.SET_REGION(this.selectedRegion);
    },
  },
};
</script>
<style scoped scss>
.select-box {
  max-width: 200px;
}
</style>
