export const state = () => ({
  drawer: null,
  color: 'success',
  image: 'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
  title: null
});

export const mutations = {
  setDrawer (state, drawer) {
    state.drawer = drawer;
  },
  toggleDrawer (state) {
    state.drawer = !state.drawer;
  },
  setTitle (state, title) {
    state.title = title;
  }
}
