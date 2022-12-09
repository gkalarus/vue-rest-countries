<template>
  <v-card hover class="mx-auto" width="270" height="340" router :to="data.cca3">
    <v-img
      :lazy-src="data.flags.svg"
      :src="data.flags.svg"
      height="160px"
    ></v-img>
    <v-divider></v-divider>
    <v-card-title> {{ data.name.common }} </v-card-title>

    <v-card-subtitle class="pb-0 pt-2"
      ><span class="font-weight-bold">Population:</span>
      {{ getNumberWithCommas(data.population) }}
    </v-card-subtitle>
    <v-card-subtitle class="py-0"
      ><span class="font-weight-bold">Region:</span> {{ data.region }}
    </v-card-subtitle>
    <v-card-subtitle v-if="data.capital" class="pt-0"
      ><span class="font-weight-bold">Capital:</span>
      {{ data.capital.join(", ") }}
    </v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  name: "TheCountry",
  props: ["data"],

  methods: {
    getNumberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>
