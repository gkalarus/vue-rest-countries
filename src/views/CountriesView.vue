<template>
  <div class="pt-10">
    <list-of-countries :items="rendersItems" />
    <div class="text-center">
      <v-pagination
        v-if="paginationLength > 1"
        v-model="$store.state.currentPage"
        :length="paginationLength"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  COUNTRIES_FILTERED,
  FETCH_COUNTRIES,
  VISIBLE_PAGES,
} from "@/utils/consts";
export default {
  name: "CountriesView",
  components: {
    "list-of-countries": require("@/components/ListOfCountries.vue").default,
  },
  methods: {
    ...mapActions([FETCH_COUNTRIES]),
  },
  computed: {
    ...mapGetters([VISIBLE_PAGES, COUNTRIES_FILTERED]),
    paginationLength() {
      return Math.ceil(
        this.COUNTRIES_FILTERED.length / this.$store.state.perPage
      );
    },
    rendersItems() {
      return this.VISIBLE_PAGES;
    },
  },
  async mounted() {
    await this.FETCH_COUNTRIES();
  },
};
</script>
