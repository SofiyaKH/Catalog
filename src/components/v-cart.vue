<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-cart__link_to_catalog">
        <i class="medium material-icons">shopping_cart</i>
        {{ CART.length }}
      </div>
      <button class="btn">Back</button>
    </router-link>

    <p v-if="!CART.length">You haven't any product...</p>

    <vCartItem
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>
  
  <script>
import vCartItem from "./v-cart-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),

    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>
  
<style scoped>
.v-cart {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: GREY;
  font-size: 16px;
  margin-bottom: 20px;
}

p {
  text-align: center;
  font-size: 26px;
}
</style>