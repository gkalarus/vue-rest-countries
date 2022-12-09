<template>
  <v-container>
    <the-button
      :hasIcon="true"
      iconType="arrow-left"
      class="text-capitalize"
      to="/"
      >Back</the-button
    >
    <v-row no-gutters class="mt-4">
      <v-col cols="12" sm="6">
        <v-img
          :lazy-src="countryDetails[0].flags.svg"
          aspect-ratio="1.4"
          :src="countryDetails[0].flags.svg"
          max-height="500"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="6" class="pl-sm-10 pt-5 pt-sm-0">
        <h2>{{ countryDetails[0].name.common }}</h2>
        <p v-if="countryDetails[0].name.nativeName">
          <strong>Native name:</strong>
          {{
            countryDetails[0].name.nativeName[
              Object.keys(countryDetails[0].name.nativeName)[0]
            ].common
          }}
        </p>
        <p v-if="countryDetails[0].population">
          <strong>Population:</strong>
          {{ getNumberWithCommas(countryDetails[0].population) }}
        </p>
        <p v-if="countryDetails[0].region">
          <strong>Region:</strong> {{ countryDetails[0].region }}
        </p>
        <p v-if="countryDetails[0].subregion">
          <strong>Sub Region:</strong> {{ countryDetails[0].subregion }}
        </p>
        <p v-if="countryDetails[0].capital">
          <strong>Capital:</strong> {{ countryDetails[0].capital.join(", ") }}
        </p>
        <div v-if="countryDetails[0].borders">
          <p><strong>Border Countries:</strong></p>
          <v-item-group multiple>
            <v-item v-for="border in countryDetails[0].borders" :key="border">
              <the-button
                :hasIcon="false"
                class="text-capitalize mr-2 mb-2"
                :to="border"
                >{{ getCountryNameFromCode(border).name.common }}</the-button
              >
            </v-item>
          </v-item-group>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import { GET_COUNTRY_DETAILS } from "@/utils/consts";
export default {
  name: "CountryDetails",
  components: {
    "the-button": require("@/components/Shared/TheButton.vue").default,
  },
  props: ["countryDetails"],
  computed: {
    ...mapGetters([GET_COUNTRY_DETAILS]),
  },
  methods: {
    getNumberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getCountryNameFromCode(code) {
      return this.GET_COUNTRY_DETAILS(code)[0];
    },
  },
};
</script>
