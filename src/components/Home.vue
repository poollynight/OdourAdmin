<template>
  <v-container>
    <h2>Product</h2>
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="productHeaders"
      :items="products"
      :items-length="totalItems"
      :loading="productLoading"
      item-value="name"
      @update:options="getProduct"
      @click:row="productClicked"
    ></v-data-table-server>

    <h2>Orders</h2>
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="productHeaders"
      :items="orders"
      :items-length="totalProducts"
      :loading="orderLoading"
      item-value="name"
      @update:options="getOrder"
      @click:row="productClicked"
    ></v-data-table-server>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    itemsPerPage: 9,
    productHeaders: [
      { title: "Name", key: "name", align: "start" },
      { title: "Unit Price", key: "unitPrice", align: "start" },
      { title: "Category", key: "category.name", align: "start" },
    ],
    products: [],
    orders: [],
    productLoading: true,
    orderLoading: true,
    totalProducts: 36,
    totalOrders: 36,
  }),
  methods: {
    productClicked(item) {
      console.log(item);
    },

    async getProduct({ page, itemsPerPage, sortBy }) {
      this.productLoading = true;
      try {
        const response = await axios.get(
          `https://main.odour.site/product?currentPage=${page}&sortType=prod%3Aname%3Adesc&categoryId=7b513726-d8a9-4849-b797-4e31a34c378f`
        );
        this.products = response.data.body.products; // Assuming the response is an array of items
        this.productLoading = false;
        console.log(this.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    async getOrder({ page, itemsPerPage, sortBy }) {
      this.orderLoading = true;
      try {
        const response = await axios.get(
          `https://main.odour.site/product?currentPage=${page}&sortType=prod%3Aname%3Adesc&categoryId=7b513726-d8a9-4849-b797-4e31a34c378f`
        );
        this.products = response.data.body.products; // Assuming the response is an array of items
        this.orderLoading = false;
        console.log(this.products);
      } catch (error) {
        this.orderLoading = false;
        console.error("Error fetching data:", error);
      }
    },
  },
  mounted() {
    // this.getProduct();
  },
};
</script>
