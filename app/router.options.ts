import type { RouterConfig } from 'nuxt/schema'
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // `to` and `from` are both route locations
    // `savedPosition` can be null if there isn't one
    if (savedPosition) {
      return savedPosition
    }
    // make sure you also enabled chrome://flags/#smooth-scrolling for smooth scrolling
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { left: 0, top: 0, behavior: 'smooth' }
  },
}
