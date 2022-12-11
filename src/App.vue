<template>
  <v-app>
    <nav-bar />
    <v-main class="grey lighten-2">
      <keep-alive exclude="CountryView">
        <router-view></router-view>
      </keep-alive>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",
  components: {
    "nav-bar": require("@/components/NavBar.vue").default,
  },
};
</script>
