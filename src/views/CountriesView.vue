<template>
  <div class="pt-10">
    <list-of-countries :items="COUNTRIES_FILTERED" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import {
  FETCH_COUNTRIES,
  COUNTRIES_FILTERED,
  SET_SEARCH,
} from "@/utils/consts";
export default {
  name: "CountriesView",
  components: {
    "list-of-countries": require("@/components/ListOfCountries.vue").default,
  },
  methods: {
    ...mapActions([FETCH_COUNTRIES]),
    ...mapMutations([SET_SEARCH]),
  },
  computed: {
    ...mapGetters([COUNTRIES_FILTERED]),
  },
  async mounted() {
    await this.FETCH_COUNTRIES();
  },
};
</script>
