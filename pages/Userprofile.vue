<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        md12
        sm12
        lg4
      >
        User Profile
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {
  mapMutations
} from 'vuex';

export default {
  mounted () {
    this.setTitle('User Profile');
  },
  methods: {
    ...mapMutations('app', ['setTitle'])
  }
}
</script>
