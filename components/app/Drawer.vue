<template>
  <v-navigation-drawer
    id="app-drawer"
    app
    dark
    floating
    persistent
    width="260"
  >
    <v-img
      height="100%"
    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
        <v-list-tile>
          <v-list-tile-title class="title">
            Vuetify Material
          </v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          avatar
          class="v-list-item"
        >
          <v-list-tile-action>
          </v-list-tile-action>
          <v-list-tile-title
            v-text="link.text"
          >
          </v-list-tile-title>
        </v-list-tile>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        to: '/dashboard',
        icon: '',
        text: 'Dashboard'
      }
    ]    
  })
}
</script>
