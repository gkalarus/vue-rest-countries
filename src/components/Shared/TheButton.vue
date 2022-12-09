<template>
  <v-btn elevation="2" :to="to">
    <v-icon v-if="hasIcon" class="mr-3"> mdi-{{ iconType }} </v-icon>
    <slot></slot>
  </v-btn>
</template>
<script>
export default {
  name: "TheButton",
  props: ["hasIcon", "iconType", "to"],
};
</script>
