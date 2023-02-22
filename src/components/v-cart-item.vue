<template>
    <div class="v-cart-item">
      <vCatalog/>
      <vCart/>
      
    </div>
  </template>
    
    <script>
    import vCatalog from "./v-catalog.vue";
    import vCart from "./v-cart.vue";
  
  
  export default {
    name: "v-cart-item",
    components: {
      vCatalog,
      vCart
    },
    props: {},
    data() {
      return {
        title: "Our Shop",
      };
    },
    computed: {},
    methods: {},
    watch: {},
  };
  </script>
    
    <style>
  .v-cart-item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 grey;
    padding: 20px;
    margin: 20px;

  }
  </style>