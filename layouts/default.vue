<template>
  <v-app>
    <app-drawer/>
    <app-toolbar/>
    <v-content>
      <nuxt/>
      <app-footer/>
    </v-content>
  </v-app>
</template>

<script>
import appDrawer from '~/components/app/Drawer.vue';
import appToolbar from '~/components/app/Toolbar.vue';
import appFooter from '~/components/app/Footer.vue';

export default {
  components: {
    appDrawer,
    appToolbar,
    appFooter
  }
}
</script>

<style lang="scss">
@import '~/assets/css/material-dashboard.scss';
</style>