export default {
  render (h) {
    return (
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    )
  }
}
