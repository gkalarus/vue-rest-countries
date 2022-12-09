<template>
  <country-details
    :countryDetails="GET_COUNTRY_DETAILS(this.$route.params.country)"
  />
</template>
<script>
import { GET_COUNTRY_DETAILS } from "@/utils/consts";
import { mapGetters } from "vuex";
export default {
  name: "CountryView",
  components: {
    "country-details": require("@/components/CountryDetails.vue").default,
  },
  computed: {
    ...mapGetters([GET_COUNTRY_DETAILS]),
  },
};
</script>
