<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart' }">
      <div class="v-catalog__link_to_cart">
        <i class="small material-icons">shopping_cart</i>{{ CART_QUANTITY }}
      </div>
    </router-link>

    <div class="v-catalog__list">
      <vCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  props: {},
  components: {
    vCatalogItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART",'CART_QUANTITY']),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),

    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Данные пришли");
      }
    });
  },
};
</script>

<style>
.v-catalog,
.v-catalog__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.v-catalog__link_to_cart {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
}
</style>