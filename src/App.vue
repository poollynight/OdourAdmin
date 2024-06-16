<template>
  <v-app>
    <v-card>
      <NavbarLargeDevice></NavbarLargeDevice>
      <NavbarSmallDevice></NavbarSmallDevice>
      <v-main class="bg-blue-grey-lighten-5" min-height="90vh">
        <!-- load content -->
        <router-view />
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
import NavbarLargeDevice from "./components/NavbarLargeDevice.vue";
import NavbarSmallDevice from "./components/NavbarSmallDevice.vue";
import axios from "axios";
export default {
  name: "app",
  components: {
    NavbarLargeDevice,
    NavbarSmallDevice,
  },

  data: () => ({}),
  methods: {
    async refreshToken() {
      try {
        const response = await axios.post(
          "https://main.odour.site/auth/refreshAccessToken",
          {
            refreshToken: this.$cookies.get("rt"),
          },
          {
            headers: {
              Authorization: `Bearer ${this.$cookies.get("ato")}`,
            },
          }
        );
        this.$cookies.set("ato", response.data.body.newAccessToken);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {},
};
</script>
