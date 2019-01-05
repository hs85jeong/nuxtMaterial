<template>
  <v-app>
    <appDrawer/>
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
import appDrawer from '~/components/app/Drawer.vue';

export default {
  components: {
    appDrawer
  }
}
</script>