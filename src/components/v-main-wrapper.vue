<template>
  <div class="v-main-wrapper">
    <router-view></router-view>
  </div>
</template>
  
  <script>
import { mapGetters } from "vuex";

export default {
  name: "v-main-wrapper",

  data() {
    return {
      title: "Our Shop",
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },

};
</script>
  
  <style>
.v-main-wrapper {
  max-width: 90opx;
  margin: 0 auto;
}
</style>