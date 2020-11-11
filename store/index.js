export const state = () => ({
  drawer: false,
  clipped: false,
  fixed: false,
  })
  
  export const mutations = {
    set_drawer(state, newDrawer){
      console.log('SET_DRAWER To', newDrawer);
      state.drawer = newDrawer
    },
    set_clipped(state, newClipped){
      console.log('SET_CLIPPED To', newClipped);
      state.clipped = newClipped
    },
    set_fixed(state, newFixed){
      console.log('SET_FIXED To', newFixed);
      state.fixed = newFixed
    },
    
    
  }