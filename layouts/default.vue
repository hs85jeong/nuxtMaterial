<template>
  <v-app>
    <appDrawer/>
    <appToolbar/>
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
import appDrawer from '~/components/app/Drawer.vue';
import appToolbar from '~/components/app/Toolbar.vue';

export default {
  components: {
    appDrawer,
    appToolbar
  }
}
</script>

<style lang="scss">
@import '~/assets/css/material-dashboard.scss';
</style>